// Throwaway analysis script.
// For each .md in docs/language-legacy, extract the command Syntax block(s)
// (between <!--REF #_command_.<NAME>.Syntax--> and <!-- END REF-->) and compare
// their structural "skeleton" with the translated versions in i18n/{es,fr,ja,pt}.
// Parameter names (italic *...*) are translated and thus ignored; everything else
// (parentheses, braces, colons, semicolons, types, operators, ...) must match.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'docs', 'language-legacy');
const LANGS = ['es', 'fr', 'ja', 'pt'];
const i18nPath = (lang, rel) =>
  path.join(ROOT, 'i18n', lang, 'docusaurus-plugin-content-docs', 'current', 'language-legacy', rel);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

// Extract map of commandName -> raw syntax string
function extractSyntax(content) {
  const map = new Map();
  const re = /<!--\s*REF\s+#_command_\.(.+?)\.Syntax\s*-->([\s\S]*?)<!--\s*END REF\s*-->/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    map.set(m[1].trim(), m[2].trim());
  }
  return map;
}

// Reduce a syntax string to its structural skeleton.
function skeleton(syntax) {
  return syntax
    .replace(/<br\s*\/?>/gi, ' ')                 // multi-variant separator
    .replace(/\*\*[^*]+\*\*/g, '')                // bold command name (identical both sides)
    .replace(/\*(?=\S)([^*]+?)(?<=\S)\*/g, '')    // italic param names (ignore lone operator *)
    .replace(/\s+/g, '')                          // ignore all whitespace
    .toLowerCase();
}

// Count the number of ": Type" annotations present.
function typeCount(syntax) {
  return (skeleton(syntax).match(/:/g) || []).length;
}

// Extract the multiset of type tokens (text after each ':' up to the next
// structural delimiter). Types must NOT be translated, so these should match.
function typeTokens(syntax) {
  const s = skeleton(syntax);
  const toks = [];
  const re = /:([^:;{}()]+)/g;
  let m;
  while ((m = re.exec(s)) !== null) toks.push(m[1]);
  return toks.sort();
}

function sameTypes(a, b) {
  const ta = typeTokens(a), tb = typeTokens(b);
  return ta.length === tb.length && ta.every((v, i) => v === tb[i]);
}

const results = [];

for (const srcFile of walk(SRC_DIR)) {
  const rel = path.relative(SRC_DIR, srcFile);
  const enSyntax = extractSyntax(fs.readFileSync(srcFile, 'utf8'));
  if (enSyntax.size === 0) continue;

  for (const lang of LANGS) {
    const tFile = i18nPath(lang, rel);
    if (!fs.existsSync(tFile)) {
      results.push({ rel, lang, issue: 'MISSING FILE' });
      continue;
    }
    const tSyntax = extractSyntax(fs.readFileSync(tFile, 'utf8'));
    for (const [cmd, enRaw] of enSyntax) {
      if (!tSyntax.has(cmd)) {
        results.push({ rel, lang, cmd, issue: 'MISSING SYNTAX BLOCK' });
        continue;
      }
      if (skeleton(enRaw) !== skeleton(tSyntax.get(cmd))) {
        const tRaw = tSyntax.get(cmd);
        // Category A: English documents types but the translation dropped or
        // translated them -> genuinely different syntax structure (the case in
        // the order-by example). Category B: types are correct, only minor
        // structural differences remain (e.g. dropped optional {} braces).
        const typeProblem = typeCount(enRaw) > 0 && !sameTypes(enRaw, tRaw);
        results.push({
          rel, lang, cmd,
          issue: typeProblem ? 'A. TYPES MISSING/TRANSLATED' : 'B. MINOR STRUCTURE',
          en: enRaw, tr: tRaw,
        });
      }
    }
  }
}

// Report all non-equivalent syntaxes, category A first.
const meaningful = results.slice();

// Group by file
const byFile = new Map();
for (const r of meaningful) {
  if (!byFile.has(r.rel)) byFile.set(r.rel, []);
  byFile.get(r.rel).push(r);
}

const catA = results.filter(r => r.issue === 'A. TYPES MISSING/TRANSLATED');
const catB = results.filter(r => r.issue === 'B. MINOR STRUCTURE');
const missingBlock = results.filter(r => r.issue === 'MISSING SYNTAX BLOCK').length;
const missingFile = results.filter(r => r.issue === 'MISSING FILE').length;
const filesA = new Set(catA.map(r => r.rel)).size;
const filesB = new Set(catB.map(r => r.rel)).size;

const outLines = [];
for (const [rel, rs] of [...byFile.entries()].sort()) {
  outLines.push(`\n### ${rel}`);
  for (const r of rs.sort((a, b) => (a.issue + a.lang).localeCompare(b.issue + b.lang))) {
    if (r.en !== undefined) {
      outLines.push(`  [${r.lang}] ${r.cmd} — ${r.issue}`);
      outLines.push(`      EN: ${r.en}`);
      outLines.push(`      ${r.lang.toUpperCase()}: ${r.tr}`);
    } else {
      outLines.push(`  [${r.lang}] ${r.cmd || ''} — ${r.issue}`);
    }
  }
}

const report =
  outLines.join('\n') +
  `\n\n==== SUMMARY ====\n` +
  `Files with non-equivalent syntax: ${byFile.size}\n` +
  `A. Types missing/translated: ${catA.length} syntaxes in ${filesA} files\n` +
  `B. Minor structure only (types OK): ${catB.length} syntaxes in ${filesB} files\n` +
  `Missing syntax block: ${missingBlock}\n` +
  `Missing file: ${missingFile}\n`;

fs.writeFileSync(path.join(ROOT, 'tools', 'syntax-equivalence-report.txt'), report, 'utf8');
console.log(report);

// --- Markdown report: one row per file, showing affected languages per category.
function fileLangs(rel, issue) {
  const s = new Set(results.filter(r => r.rel === rel && r.issue === issue).map(r => r.lang));
  return LANGS.filter(l => s.has(l)).join(', ') || '—';
}
const relsA = [...new Set(catA.map(r => r.rel))].sort();

const md = [];
md.push('# Syntax structure equivalence — docs/language-legacy vs i18n\n');
md.push(`Target languages: ${LANGS.join(', ')}\n`);
md.push('## Summary\n');
md.push(`- Files with non-equivalent syntax: **${byFile.size}**`);
md.push(`- **A. Types missing/translated** (English structure not reproduced, like the order-by example): ${catA.length} syntaxes in **${filesA}** files`);
md.push(`- **B. Minor structure only** (types preserved, e.g. dropped optional \`{}\`): ${catB.length} syntaxes in **${filesB}** files\n`);

md.push('## Per language\n');
md.push('| Language | A (types) | B (minor) |');
md.push('| --- | --- | --- |');
for (const l of LANGS) {
  md.push(`| ${l} | ${catA.filter(r => r.lang === l).length} | ${catB.filter(r => r.lang === l).length} |`);
}
md.push('');

md.push('## A. Types missing or translated (priority)\n');
md.push('| Page | Languages |');
md.push('| --- | --- |');
for (const rel of relsA) md.push(`| ${rel.replace(/\\/g, '/')} | ${fileLangs(rel, 'A. TYPES MISSING/TRANSLATED')} |`);
md.push('');

md.push('## B. Minor structural differences (types preserved)\n');
md.push('| Page | Languages |');
md.push('| --- | --- |');
for (const rel of [...new Set(catB.map(r => r.rel))].sort()) {
  md.push(`| ${rel.replace(/\\/g, '/')} | ${fileLangs(rel, 'B. MINOR STRUCTURE')} |`);
}
md.push('');

fs.writeFileSync(path.join(ROOT, 'tools', 'syntax-equivalence-report.md'), md.join('\n'), 'utf8');
