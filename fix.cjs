const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/<Badge([^>]*)tone=\{.*?\}([^>]*)>/g, '<Badge$1$2>');
    content = content.replace(/<Badge([^>]*)tone="[^"]*"([^>]*)>/g, '<Badge$1$2>');
    
    content = content.replace(/variant="primary"/g, 'variant="default"');

    content = content.replace(/iconLeading=\{.*?\}/g, '');
    content = content.replace(/iconTrailing=\{.*?\}/g, '');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', filePath);
    }
  }
});
