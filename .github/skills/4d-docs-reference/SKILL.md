---
name: 4d-docs-reference
description: 'Use when editing 4D product reference/user-guide pages in doc4d/docs (Develop, FormEditor, FormObjects properties, settings, Preferences, ServerWindow, MSC, Desktop, WebServer, REST, ORDA, Project, Debugging, code-editor). Covers page structures, property sections, procedures, screenshots and diagrams.'
---

# 4D reference and user-guide pages

Apply `4d-docs-common` first. These pages describe the UI and features; they are the pages most frequently updated with new releases.

## 1. Page families and their structure

### Feature / editor pages (Develop, FormEditor, Project, Desktop, WebServer…)
- Intro paragraph (what it is, where to find it: "You can display the Explorer by choosing **Design > Explorer**…").
- Optional `:::note` pointing to doc.4d.com for not-yet-migrated details.
- `##` per task or area ("Creating a table", "Forms page"), `###`/`####` per sub-case or option.
- Task sections: one-sentence context, then numbered procedure, then result.

### Property pages (`FormObjects/properties_<Group>.md`)
Fixed pattern, sections separated by a `---` horizontal rule:
```markdown
---

## <Property Name>

Description ("This property lets you…"), image, values, behavior.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textFormat|string|"### ####", custom formats|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [Input](input_overview.md)

#### Commands

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)
```
- Lists of objects/commands are inline, separated by ` - `, alphabetical.
- A new property must also be added to the "Supported Properties" list of each object page it applies to.

### Form object pages (`FormObjects/<object>_overview.md`)
Intro + image → `## Handling …` → `## <Object> Styles` (one `###` per style: description, image, `#### JSON Example:` block) → `## Supported Properties` (inline links, ` - ` separated, alphabetical) → `### Additional properties for …` → `## Supported Events` (links to `../Events/onXxx.md`).

### Settings pages (`settings/*.md`)
- Title "<Name> page". `##` = tab/sub-page ("Network options page"), `###` = group box ("Network"), `####` = option label exactly as in the UI.
- Option text: "This option lets you…" → bullet list of states ("When this option is checked (default), …") → constraints in `:::note` (restart required, not available with X) → link to the feature page.
- Mark defaults with "(default)" and give default values ("By default, … is 19813.").

### Structure/Inspector properties (Develop/structure-*.md, field-properties)
`### Group` → `#### Option`, optional screenshot of the Inspector, then "This option lets you…", effect, "This option cannot be set by programming." when relevant, and related commands.

## 2. Procedures

- Numbered steps, imperative: "1. Select…", "2. (optional) Modify…", "Click **OK** to validate."
- Alternatives inside a step: a line with **OR** in bold between the two ways.
- Several ways to do the same task: bullet "- To create a new table directly:" followed by the numbered list.
- State the result right after: "The "New table" dialog box appears." / "4D creates…".
- UI labels exactly as displayed, in bold, including ellipsis (**Add Table...**, **Edit...**).

## 3. Screenshots

- Use a screenshot when the reader must locate a UI element, see a dialog, or understand a visual result. Do not illustrate trivial actions.
- Place the screenshot just after the sentence that introduces it (ending with ":"), or after a property heading to show the control.
- File location: `docs/assets/en/<Section>/`, lowercase kebab or camelCase descriptive names (`table-rename.png`, `property_alphaFormat.png`, `client-server-network.png`, `qodly-add.png`). PNG for screenshots, GIF for short animations.
- Empty alt text: `![](../assets/en/Develop/table-rename.png)`.
- Crop to the relevant area, English UI, current OS look; keep the size/scale of neighbouring screenshots.
- Each version has its own copy (`versioned_docs/version-XX/assets/`), so edit only `docs/assets/`. Before replacing an existing file, search `docs/` for other pages using it; if it is shared and the change does not apply everywhere, add a new file name instead. Ask the user before replacing images.
- When you cannot produce the screenshot, insert the image link with the intended file name and tell the user which capture is needed (do not invent binaries).

## 4. Schemas and diagrams

- Prefer ```` ```mermaid ```` for process flows, decision trees, sequences (examples: `language-legacy/Processes/session.md`, `ORDA/orda-events.md`, `WebServer/sessions.md`, `server/sso.md`, `Project/components.md`).
- Keep diagrams small (≤ ~10 nodes), labels in plain English, introduce them with a sentence.
- Comparison of behaviors → markdown table; illustrated scenarios → table with icons (see `Develop/preemptive.md`).

## 5. Content rules

- Document behavior, conditions and limits; state the platform (Windows/macOS), the mode (project only, compiled mode, client/server, QUIC…) and the version constraints in notes.
- Link the related commands and API functions when a feature can also be handled by programming.
- Add `:::tip Related blog post` links when a blog post exists.
- For a feature added in the current release, update `Notes/updates.md` (see common skill) when requested.
- Do not restructure existing pages (heading levels, order) unless asked; insert new content in the logical existing section.

## 6. Checklist

- [ ] Heading level matches the page pattern (settings: `##` page, `###` group, `####` option; properties: `---` + `##` + `#### JSON Grammar/Objects Supported/Commands`).
- [ ] UI labels bold and identical to the product.
- [ ] Screenshots in `assets/en/<Section>/`, introduced, empty alt.
- [ ] Cross-references updated (object pages "Supported Properties", commands lists).
- [ ] `npm run build -- --locale en` OK.
