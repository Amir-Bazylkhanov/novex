import { readFileSync, writeFileSync } from 'fs';

const [lessonFile, ...jsonFiles] = process.argv.slice(2);
const translations = [];
for (const f of jsonFiles) {
  translations.push(...JSON.parse(readFileSync(f, 'utf8')));
}
const src = readFileSync(lessonFile, 'utf8');
const lines = src.split('\n');
const out = [];
let ti = 0;
for (const line of lines) {
  const m = line.match(/^(\s*)answer:\s/);
  if (m) {
    if (ti >= translations.length) throw new Error(`More answers than translations (answer #${ti + 1})`);
    const [ru, kk] = translations[ti++];
    const indent = m[1];
    const trimmedEnd = line.replace(/\s+$/, '');
    const hasComma = trimmedEnd.endsWith(',');
    out.push(hasComma ? trimmedEnd : trimmedEnd + ',');
    out.push(`${indent}answerRu: ${JSON.stringify(ru)},`);
    out.push(`${indent}answerKk: ${JSON.stringify(kk)}${hasComma ? ',' : ''}`);
  } else {
    out.push(line);
  }
}
if (ti !== translations.length) throw new Error(`Mismatch: ${ti} answers in file vs ${translations.length} translations supplied`);
writeFileSync(lessonFile, out.join('\n'), 'utf8');
console.log(`Applied ${ti} answer translations to ${lessonFile}`);
