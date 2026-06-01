// src/lib/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Concat Tailwind classNames, dedup'd by twMerge. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
