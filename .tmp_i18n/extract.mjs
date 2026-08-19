import { readFileSync, writeFileSync } from 'fs';

const file = process.argv[2];
const outFile = process.argv[3];
const lines = readFileSync(file, 'utf8').split('\n');
const rows = [];
lines.forEach((l, i) => {
  const m = l.match(/^(\s*)answer:\s*(.+)$/);
  if (m) {
    rows.push(`${rows.length + 1}\t${i + 1}\t${m[2].replace(/,\s*$/, '')}`);
  }
});
writeFileSync(outFile, rows.join('\n') + '\n', 'utf8');
console.log(`Extracted ${rows.length} answers from ${file}`);
