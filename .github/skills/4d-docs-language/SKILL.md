---
name: 4d-docs-language
description: 'Use when creating or editing 4D language reference pages in doc4d/docs: classic commands (docs/language-legacy/<Theme>/*.md, docs/commands/theme, command-index) and class API pages (docs/API/*Class.md and included files). Covers page skeletons, syntax prototypes, parameter tables, History, and REF/INCLUDE preprocessing tags.'
---

# 4D language pages (commands and class API)

Apply `4d-docs-common` first.

## 1. Preprocessing tags – the critical part

The preprocessor (`.doc_preprocessing.js` + `docs/preprocessing.conf`, tool `doc4d/doc_tools`) expands HTML comments before Docusaurus, and generates the **syntax files** used by the 4D code editor (`npm run syntax`).

| Tag | Meaning |
|---|---|
| `<!-- REF id -->…<!-- END REF -->` | Declares a reusable block named `id` |
| `<!-- INCLUDE id -->` | Inserts the block `id` here |
| `#` prefix (`REF #…`) | Block also exported to the **syntax file** (editor tooltips/completion). Without `#`: page include only |

Block suffixes:
- `.Syntax` – prototype (exported)
- `.Summary` – one-sentence summary, **inside** the description sentence (exported)
- `.Params` – parameter table (exported)
- `.Desc` – whole member section (heading → end), no `#`, for reuse in other pages
- `.Note` – short note (e.g. `**Not available for ZIP archives**`)
- `_alias_`, `_inheritedFrom_` – class name aliases/inheritance, declared in `docs/preprocessing.conf` only

ID naming:
- Commands: `#_command_.<Exact Command Name>.Syntax|Params|Summary` (command name with spaces and 4D casing: `#_command_.New process.Syntax`).
- Class members: `#<FileBaseName>.<member>.Syntax`, `<member>` is `name` for a property, `name()` for a function: `#FileClass.create().Syntax`, `#document.creationDate.Syntax`.
- Non-exposed shared files (`Document.md`, `Directory.md`, `Transporter.md`) use a lowercase prefix (`document.`, `directory.`, `transporter.`) and are only included in `xxxClass.md` pages.
- Section blocks: `<!-- REF file.create().Desc -->` … `<!-- END REF -->` (lowercase, no `#`).

Rules:
- Every `REF` has exactly one `END REF`. Spacing variants (`<!--REF`, `<!-- END REF-->`) exist; keep the local style, do not "fix" them in bulk.
- The `.Summary` block is a sentence fragment embedded in a full sentence: `The `.copyTo()` function <!-- REF #document.copyTo().Summary -->copies the `File` object into the specified *destinationFolder*<!-- END REF -->.` Keep it self-contained (it is shown alone in tooltips). For commands, the Summary often wraps the whole first sentence (`The **New process** command starts…`).
- Changing a `.Syntax`, `.Params` or `.Summary` block changes the editor syntax file: be exact.
- To reuse a member documented elsewhere: `<!-- INCLUDE document.copyTo().Desc -->` at the alphabetical position of the member.
- Do not put a `REF` inside a `REF` of the same block type; `.Desc` blocks do contain `#…Syntax/Params/Summary` REFs (that is the normal nesting).
- Plain-file includes also exist in narrative pages (`<!-- INCLUDE develop-semaphores.Desc -->`, `<!-- REF triggers.vs-events.Desc -->`): preserve them.

## 2. Syntax prototype conventions (checked by `syntax-checker` in CI)

- Name in bold, parameters in italics with type: `**New process** ( *method* : Text ; *stack* : Integer {; *name* : Text } ) : Integer`
- Class members: `**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File`; properties: `**.size** : Real`.
- Separators `;` between parameters. Optional: `{ ; *p* : Type }`. Optional only if previous passed: `{ ; *p1* : T {; *p2* : T }}`. Variadic: `*...param* : Expression`. Operator `*`: `{; *}`. Alternative types: `Text, Integer` (commands) or `Text / Integer`. Untyped: `any`.
- Several prototypes in one Syntax block are separated with `<br/>`.
- Use `4D.Xxx` / `cs.Xxx` for class types.

## 3. Command page skeleton (`docs/language-legacy/<Theme>/<slug>.md`)

```markdown
---
id: new-process
title: New process
slug: /commands/new-process
displayed_sidebar: docs
---

<!--REF #_command_.New process.Syntax-->**New process** ( *method* : Text ; … ) : Integer<!-- END REF-->
<!--REF #_command_.New process.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| method | Text | &#8594;  | Method to be executed within the process |
| Function result | Integer | &#8592; | Process number … |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21|Removed local process handling|
|16 R4|Modified|
|<6|Created|

</details>
</div>

## Description

<!--REF #_command_.New process.Summary-->The **New process** command starts … .<!-- END REF-->

### <Parameter or topic subsections>

## Example

## System variables and sets      (only if OK/error/Document… are set)

## See also

[Execute on server](../commands/execute-on-server)  
[Preemptive processes](../../Develop/preemptive.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 317 |
| Thread safe | yes |
| Modifies variables | OK |          (optional)
| Forbidden on the server ||          (optional)
```
- Params table: arrows as HTML entities `&#8594;` (in), `&#8592;` (out), `&#8596;` (in/out); last row `Function result`. Table wrapped in `<div class="no-index">` with a blank line after the opening div.
- History: newest first, values `Created` / `Modified` / `Added` or a short change description; wrapped in `<div class="no-index"><details>`.
- In the description, the command name is **bold** (legacy) or `` `code` `` (recent pages); parameters in *italics*. Keep the page's existing choice.
- One `### ` subsection per parameter/topic for complex commands.
- Examples: describe the context first ("In a form, a button starts…"), code in ```` ```4d ````, result after.

### Adding a new command
1. Create `docs/language-legacy/<Theme>/<slug>.md` (folder has `_category_.json` – do not edit unless new theme).
2. Add a row to `docs/commands/theme/<Theme>.md`, alphabetical:
   `|[<!-- INCLUDE #_command_.<Name>.Syntax -->](../../commands/<slug>)<br/>|`
3. Add the entry to `docs/commands/command-index.md` under the right letter: ``[`<Name>`](../commands/<slug>)<br/>`` (alphabetical, case-insensitive).
4. Check `sidebars.js` if the theme is listed manually.
5. Add a release-notes bullet if requested.

## 4. Class API page skeleton (`docs/API/<Name>Class.md`)

```markdown
---
id: FileClass
title: File
---

Intro: how objects are created (link to the constructor command), what they represent.

:::info  (optional: streamable, shared, etc.)

### Example / ### Pathnames … (short class-level topics)

### File object          (summary table of all members, alphabetical)

||
|---|
|[<!-- INCLUDE #FileClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FileClass.create().Summary -->|

## 4D.File.new()          (constructor, if any)

<!-- REF file.create().Desc -->
## .create()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean<!-- END REF -->

<!--REF #FileClass.create().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the file was created successfully, false otherwise|
</div>
<!-- END REF -->

#### Description

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk …<!-- END REF -->.

**Returned value**

#### Example

<!-- END REF -->
```
- Members are `##` sections sorted alphabetically (constructor first), each wrapped in a `.Desc` REF.
- API params tables use `->` / `<-` and last row `Result`; no params: one row `||||Does not require any parameters|`.
- Properties: Syntax `**.name** : Type`, no Params table, and end with "This property is **read-only**." or "**read/write**".
- Functions: sentence "The `.xxx()` function …"; properties: "The `.xxx` property returns …".
- Constant tables: `|Constant|Value|Comment|` with constants in backticks.
- New member: add its row in the summary table at the alphabetical position (anchor = lowercase member name without dots/parentheses: `#copyto`), and the section at the alphabetical position.
- New class: add `<!-- REF #<Name>Class._alias_-->Name<!-- END REF -->` in `docs/preprocessing.conf` (and `_inheritedFrom_` if it inherits), create the summary table, register in `sidebars.js`.
- File naming: `XxxClass.md` = exposed class page; `Xxx.md` (no `Class`) = shared non-exposed members, included only.

## 5. Checklist

- [ ] Every REF/END REF balanced; IDs follow naming rules; `#` only on Syntax/Params/Summary.
- [ ] Prototype follows conventions; Params table rows match prototype parameters, same order and types.
- [ ] History row added (newest on top) with the current release (e.g. `21 R6`).
- [ ] Summary block reads well alone.
- [ ] Summary table / theme page / command-index updated for new items.
- [ ] Links: `../commands/<slug>` for commands, `../../` from language-legacy pages.
- [ ] `npm run build -- --locale en` OK; syntax-checker clean.
