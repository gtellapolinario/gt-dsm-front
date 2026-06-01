const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walk('src/doencas', (filePath) => {
  if (filePath.endsWith('index.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Fix cluster badge
    content = content.replace(/{\(contadores\[cl\.id\]\?\.selecionados\s*\|\|\s*0\)}\/{cl\.sintomas\?\.length\s*\|\|\s*"\?"}\s*\n\s*>/g, '{(contadores[cl.id]?.selecionados || 0)}/{cl.sintomas?.length || "?"}\n            </Badge>}');
    
    // Fix criteria badge
    content = content.replace(/\{critCount\}\/\{critTotal\}>/g, '{critCount}/{critTotal}</Badge>}');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed JSX in:', filePath);
    }
  }
});
