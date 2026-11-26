---
name: french-doc-translation
description: 'Use when translating, editing, or reviewing French-language documentation in this repository, including i18n .json translation files (sidebar labels, UI strings) and their UTF-8 encoding.'
---

# French Documentation Translation

When translating or editing French documentation in this repository:

- Use straight double quotation marks (`"..."`) for quoted text.
- Do not use French guillemets (`« ... »`) or add spaces inside quotation marks.
- Translate the labels "Note" and "Notes" as "Note" and "Notes"; do not use "Remarque" or "Remarques".
- Preserve code, identifiers, UI labels, links, and other technical literals as required by the source; do not alter quotes that are part of code or literal syntax.

Before completing the work, check the edited French documentation for `«` and `»` and replace them in prose with straight double quotation marks. Also check that note labels use "Note"/"Notes", not "Remarque"/"Remarques".

## Encoding of translation files (`i18n/**/*.json` and `.md`)

Translation files (for example `i18n/fr/docusaurus-plugin-content-docs/current.json`) must stay UTF-8 without BOM. Accented or non-Latin characters have been corrupted into literal `?` (for example `"G?n?rateur d'applications"`, `"Cl?s XML"`, or Japanese `"????"`) when the text passed through the Windows PowerShell console or a pipe that does not use UTF-8.

- Prefer the `edit`/`create` tools to write translated strings; do not pass accented text through PowerShell (`Set-Content`, `Out-File`, `>`, `echo`) or through a script piped from PowerShell.
- If a script is required, read and write bytes as UTF-8 explicitly (`open(f, encoding='utf-8')` or `'rb'`/`'wb'`) and write non-ASCII characters in the script source as `\u` escapes (for example `G\u00e9n\u00e9rateur`).
- Reuse the terminology already used in the translated pages (for example the `title`/`sidebar_label` of the corresponding `.md` file) for sidebar labels in `current.json`.

After editing, verify that the file still parses as JSON and that no `"message"` value contains a `?` inside a word or a `??` sequence, for example:

```powershell
@'
import glob, json, re
bad = []
for f in glob.glob('i18n/**/*.json', recursive=True):
    text = open(f, encoding='utf-8').read()
    json.loads(text)
    bad += [(f, i + 1) for i, l in enumerate(text.splitlines())
            if '"message"' in l and re.search(r'\?\?|[^\W\d_]\?[^\W\d_]', l)]
print(bad)
'@ | python -
```

The output must be `[]`. This check applies to all languages (`fr`, `es`, `ja`, `pt`), not only French.
