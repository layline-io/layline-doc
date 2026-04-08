const fs = require('fs');
const path = require('path');

// Function to get new name
function getNewName(name) {
  return name.replace(/^\d+-/, '');
}

// Function to rename recursively
function renameRecursively(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      // Rename subdirs first
      renameRecursively(itemPath);
      // Then rename this dir
      const newName = getNewName(item);
      if (newName !== item) {
        const newPath = path.join(dir, newName);
        fs.renameSync(itemPath, newPath);
      }
    } else if (item.match(/^\d+-/)) {
      const newName = getNewName(item);
      const newPath = path.join(dir, newName);
      fs.renameSync(itemPath, newPath);
    }
  }
}

renameRecursively(path.join(__dirname, 'docs'));