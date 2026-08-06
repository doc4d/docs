// Fix script: rebuild the English syntax structure in translated pages that
// lost it (category A: types missing/translated), keeping translated parameter
// names taken from the row-aligned Params table.
//
// Usage:
//   node tools/fix-syntax-equivalence.js            (dry-run, default)
//   node tools/fix-syntax-equivalence.js --apply     (write changes)
//   node tools/fix-syntax-equivalence.js --apply --langs fr,es
//   node tools/fix-syntax-equivalence.js --sample 8  (print N before/after samples)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'docs', 'language-legacy');
const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const langsArg = (args[args.indexOf('--langs') + 1] || '').match(/^[a-z,]+$/) ? args[args.indexOf('--langs') + 1] : '';
const LANGS = langsArg ? langsArg.split(',') : ['es', 'fr', 'ja', 'pt'];
const SAMPLE = parseInt(args[args.indexOf('--sample') + 1], 10) || 6;

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

const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function extractSyntax(content) {
  const map = new Map();
  const re = /<!--\s*REF\s+#_command_\.(.+?)\.Syntax\s*-->([\s\S]*?)<!--\s*END REF\s*-->/g;
  let m;
  while ((m = re.exec(content)) !== null) map.set(m[1].trim(), m[2].trim());
  return map;
}

// Ordered parameter names from the Params table (row-aligned across languages).
function extractParams(content) {
  const map = new Map();
  const re = /<!--\s*REF\s+#_command_\.(.+?)\.Params\s*-->([\s\S]*?)<!--\s*END REF\s*-->/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const cmd = m[1].trim();
    const rows = m[2].split(/\r?\n/)
      .map(l => l.trim())
      .filter(l => l.startsWith('|'))
      .filter(l => !/^\|\s*-{2,}/.test(l)); // drop separator rows
    // first remaining row is the header
    const dataRows = rows.slice(1);
    const names = dataRows.map(r => {
      const first = r.split('|')[1] || '';
      let n = first.replace(/`/g, '').replace(/\\/g, '').trim();
      const emph = n.match(/^\*(.+)\*$/);   // unwrap *name* emphasis, keep lone *
      if (emph) n = emph[1].trim();
      return n;
    }).filter(n => n.length > 0);
    map.set(cmd, names);
  }
  return map;
}

function skeleton(syntax) {
  return syntax
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\*\*[^*]+\*\*/g, '')
    .replace(/\*(?=\S)([^*]+?)(?<=\S)\*/g, '')   // ignore lone operator *
    .replace(/\s+/g, '')
    .toLowerCase();
}
function typeCount(syntax) {
  return (skeleton(syntax).match(/:/g) || []).length;
}
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

// Italic (single-asterisk) tokens used in a syntax string.
function italicTokens(syntax) {
  const noBold = syntax.replace(/\*\*[^*]+\*\*/g, '');
  const toks = [];
  const re = /(?<!\*)\*\s*([^*]+?)\s*\*(?!\*)/g;
  let m;
  while ((m = re.exec(noBold)) !== null) toks.push(m[1].trim());
  return toks;
}

// Italic (single-asterisk) tokens used in a syntax string.
function italicTokens(syntax) {
  const noBold = syntax.replace(/\*\*[^*]+\*\*/g, '');
  const toks = [];
  const re = /(?<!\*)\*\s*([^*]+?)\s*\*(?!\*)/g;
  let m;
  while ((m = re.exec(noBold)) !== null) toks.push(m[1].trim());
  return toks;
}

// Rebuild the English syntax with translated parameter names.
function rebuild(enSyntax, dict) {
  let out = enSyntax;
  for (const [en, tr] of dict) {
    if (en === '*' || en === tr) continue;
    out = out.replace(new RegExp('\\*\\s*' + escapeRe(en) + '\\s*\\*', 'g'), '*' + tr + '*');
  }
  return out;
}

const fixes = [];   // {rel, lang, cmd, before, after}
const skips = [];   // {rel, lang, cmd, reason}

for (const srcFile of walk(SRC_DIR)) {
  const rel = path.relative(SRC_DIR, srcFile);
  const enContent = fs.readFileSync(srcFile, 'utf8');
  const enSyntax = extractSyntax(enContent);
  const enParams = extractParams(enContent);
  if (enSyntax.size === 0) continue;

  for (const lang of LANGS) {
    const tFile = i18nPath(lang, rel);
    if (!fs.existsSync(tFile)) continue;
    let tContent = fs.readFileSync(tFile, 'utf8');
    const tSyntax = extractSyntax(tContent);
    const tParams = extractParams(tContent);
    let changed = false;

    for (const [cmd, enRaw] of enSyntax) {
      if (!tSyntax.has(cmd)) continue;
      const trRaw = tSyntax.get(cmd);
      if (skeleton(enRaw) === skeleton(trRaw)) continue; // already equivalent

      // Category A only: English documents types but translation dropped/translated them.
      const typeProblem = typeCount(enRaw) > 0 && !sameTypes(enRaw, trRaw);
      if (!typeProblem) continue;

      const enNames = enParams.get(cmd) || [];
      const trNames = tParams.get(cmd) || [];
      if (enNames.length === 0 || enNames.length !== trNames.length) {
        skips.push({ rel, lang, cmd, reason: `param count EN=${enNames.length} ${lang.toUpperCase()}=${trNames.length}` });
        continue;
      }
      const dict = new Map(enNames.map((n, i) => [n, trNames[i]]));

      // Guard against misaligned Params tables: the '*' operator row must line
      // up on both sides, otherwise positional mapping shifts parameter names.
      const starMisaligned = [...dict].some(([en, tr]) => (en === '*') !== (tr === '*'));
      if (starMisaligned) {
        skips.push({ rel, lang, cmd, reason: 'star row misaligned' });
        continue;
      }
      // A translated name containing '*' would break markdown emphasis.
      const badName = [...dict].some(([en, tr]) => en !== '*' && tr.includes('*'));
      if (badName) {
        skips.push({ rel, lang, cmd, reason: 'translated name contains *' });
        continue;
      }

      const rebuilt = rebuild(enRaw, dict);
      if (skeleton(rebuilt) !== skeleton(enRaw)) {
        skips.push({ rel, lang, cmd, reason: 'skeleton mismatch after rebuild' });
        continue;
      }
      // Safety: no English parameter name must survive untranslated.
      const leftover = [...dict].filter(([en, tr]) =>
        en !== '*' && en !== tr &&
        new RegExp('\\*\\s*' + escapeRe(en) + '\\s*\\*').test(rebuilt)
      ).map(([en]) => en);
      if (leftover.length) {
        skips.push({ rel, lang, cmd, reason: `untranslated leftover: ${leftover.join(', ')}` });
        continue;
      }
      if (rebuilt.trim() === trRaw.trim()) continue;

      // Replace only this command's syntax block content in the translated file.
      const blockRe = new RegExp(
        '(<!--\\s*REF\\s+#_command_\\.' + escapeRe(cmd) + '\\.Syntax\\s*-->)([\\s\\S]*?)(<!--\\s*END REF\\s*-->)'
      );
      const newContent = tContent.replace(blockRe, (_, a, _b, c) => a + rebuilt + c);
      if (newContent !== tContent) {
        tContent = newContent;
        changed = true;
        fixes.push({ rel, lang, cmd, before: trRaw, after: rebuilt });
      }
    }

    if (changed && APPLY) fs.writeFileSync(tFile, tContent, 'utf8');
  }
}

// --- Report
console.log(`Mode: ${APPLY ? 'APPLY (files written)' : 'DRY-RUN (no changes)'}  Languages: ${LANGS.join(', ')}\n`);
console.log(`Fixable syntaxes: ${fixes.length}`);
console.log(`Fixable files: ${new Set(fixes.map(f => f.rel + '|' + f.lang)).size} file/lang pairs, ${new Set(fixes.map(f => f.rel)).size} distinct pages`);
for (const l of LANGS) console.log(`  ${l}: ${fixes.filter(f => f.lang === l).length}`);
console.log(`\nSkipped (need manual review): ${skips.length}`);
const reasons = {};
for (const s of skips) { const k = s.reason.replace(/=\d+/g, '=N'); reasons[k] = (reasons[k] || 0) + 1; }
for (const [k, v] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) console.log(`  ${v}  ${k}`);

console.log('\n--- Samples ---');
for (const f of fixes.slice(0, SAMPLE)) {
  console.log(`\n[${f.lang}] ${f.rel.replace(/\\/g, '/')} :: ${f.cmd}`);
  console.log(`  before: ${f.before}`);
  console.log(`  after : ${f.after}`);
}

// Persist skip list for manual follow-up.
fs.writeFileSync(
  path.join(ROOT, 'tools', 'syntax-fix-skipped.txt'),
  skips.map(s => `[${s.lang}] ${s.rel} :: ${s.cmd} — ${s.reason}`).join('\n'),
  'utf8'
);
