#!/usr/bin/env node
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const sourceDirs = ["src", "scripts"];
const allowedLegacyPaths = new Set([
  "scripts/audit_legacy_disorders.mjs",
  "scripts/generate_disorders.py",
]);

const legacyReferencePatterns = [
  /@\/doencas\b/,
  /src\/doencas\b/,
  /disease-registry\.generated/,
];
const legacyGeneratedExtensions = new Set([".ts", ".tsx"]);
const legacyGeneratedNames = new Set(["doc.md"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".git", "dist", ".tanstack"].includes(entry.name)) continue;
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function toRepoPath(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join("/");
}

async function fileExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

const findings = [];

for (const relativeDir of sourceDirs) {
  const absoluteDir = path.join(repoRoot, relativeDir);
  if (!(await fileExists(absoluteDir))) continue;

  for (const filePath of await walk(absoluteDir)) {
    const repoPath = toRepoPath(filePath);
    if (allowedLegacyPaths.has(repoPath)) continue;

    const extension = path.extname(repoPath);
    const isTextFile = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json", ".md"].includes(extension);
    if (!isTextFile) continue;

    const contents = await readFile(filePath, "utf8");
    const lines = contents.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (legacyReferencePatterns.some((pattern) => pattern.test(line))) {
        findings.push({
          type: "legacy-reference",
          file: repoPath,
          line: index + 1,
          detail: line.trim(),
        });
      }
    });
  }
}

const legacyRoot = path.join(repoRoot, "src", "doencas");
if (await fileExists(legacyRoot)) {
  findings.push({
    type: "legacy-disorder-root",
    file: "src/doencas",
    line: 1,
    detail: "Legacy disorder source tree was removed after audit validation; use src/generated/disorders and dsm/output/final_json instead.",
  });

  for (const filePath of await walk(legacyRoot)) {
    const repoPath = toRepoPath(filePath);
    const extension = path.extname(repoPath);
    const fileName = path.basename(repoPath);
    if (legacyGeneratedExtensions.has(extension) || legacyGeneratedNames.has(fileName)) {
      findings.push({
        type: "legacy-generated-module",
        file: repoPath,
        line: 1,
        detail: "Legacy generated disorder module should live only in src/generated/disorders.",
      });
    }
  }
}

if (findings.length > 0) {
  console.error("Legacy disorder audit failed:");
  for (const finding of findings) {
    console.error(`- [${finding.type}] ${finding.file}:${finding.line} ${finding.detail}`);
  }
  process.exit(1);
}

console.log("Legacy disorder audit passed: no legacy src/doencas tree, runtime modules, or imports outside the generated-disorders migration boundary.");
