const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all API markdown files without description frontmatter using shell
const result = execSync(
  "find docs/language-reference -path '*/API/*' -name '*.md' | sort",
  { encoding: 'utf8', cwd: process.cwd() }
);

const apiFiles = result.trim().split('\n').filter(f => f);

let added = 0;
let skipped = 0;

apiFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has description
  if (/^description:/m.test(content)) {
    skipped++;
    return;
  }
  
  // Skip index pages (already handled manually)
  if (path.basename(filePath) === 'index.md') {
    skipped++;
    return;
  }
  
  // Extract the first sentence after the H1 heading
  const h1Match = content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1].trim() : path.basename(filePath, '.md');
  
  // Try to extract first paragraph after H1
  const lines = content.split('\n');
  let afterH1 = false;
  let description = '';
  
  for (const line of lines) {
    if (afterH1) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---')) {
        description = trimmed;
        break;
      }
    }
    if (line.startsWith('# ')) {
      afterH1 = true;
    }
  }
  
  // Clean up description
  description = description
    .replace(/^The\s+/, '')
    .replace(/^\[`?/, '')
    .replace(/`?\]\(.+?\)/, '')
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();
  
  // If no description found, use title-based fallback
  if (!description) {
    description = `${title} reference for layline.io workflow scripting.`;
  }
  
  // Truncate to ~160 chars
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  // Capitalize first letter
  description = description.charAt(0).toUpperCase() + description.slice(1);
  
  // Ensure it ends with a period
  if (!description.endsWith('.') && !description.endsWith('...')) {
    description += '.';
  }
  
  // Insert frontmatter
  const newContent = `---\ndescription: ${description}\n---\n\n${content}`;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  added++;
  console.log(`✓ ${filePath} → "${description}"`);
});

console.log(`\nDone! Added descriptions to ${added} files, skipped ${skipped} files.`);
