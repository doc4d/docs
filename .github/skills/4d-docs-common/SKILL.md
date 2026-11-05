---
name: 4d-docs-common
description: 'Use for ANY edit of English documentation under docs/ in doc4d/docs: repository layout, Docusaurus/MDX conventions, writing style, links, admonitions, images, versioning and translation rules shared by all page types.'
---

# 4D documentation – common rules

Load this skill first, then the page-type skill:
- `4d-docs-language` for `docs/language-legacy/**`, `docs/commands/**`, `docs/API/**`, `docs/ViewPro/commands/**`, `docs/WritePro/commands/**`
- `4d-docs-reference` for editors, form objects, properties, settings, server window, MSC, preferences, Develop, Desktop, WebServer, REST, ORDA user guides
- `4d-docs-concepts` for `docs/Concepts/**` (restricted: usually no edit)

## 1. Where to edit

- Edit **only English sources in `docs/`** (current version). Do not edit `versioned_docs/**` unless the user explicitly asks for a fix in a released version.
- Never edit `i18n/**` for an English change: pt is auto-translated by `.github/workflows/i18n-auto-translate.yml`, other locales go through Crowdin. French edits follow the `french-doc-translation` skill.
- `docs/commands/` only holds `command-index.md` and `theme/*.md`. Command pages live in `docs/language-legacy/<Theme>/<command-slug>.md` and are published at `/commands/<command-slug>`.
- `docs/commands-legacy/` only holds database methods and `constant-list.md`.
- Pages ending in `-legacy` folders (`Develop-legacy`, `Desktop-legacy`) are imported legacy content: same rules, minimal edits.

## 2. Front matter

```
---
id: kebab-or-camel-id
title: Title
---
```
- `id` is the doc ID used by `sidebars.js` and links; **never rename it**. It may differ from the file name (`preemptive.md` → `preemptive-processes`, `field-properties.md` → `structure-fields`, `properties_Display.md` → `propertiesDisplay`).
- Command pages also have `slug: /commands/<slug>` and `displayed_sidebar: docs`. Theme pages have `sidebar_label` and `slug: /commands/theme/<Theme>`.
- No H1 in the body: the `title` is the H1.
- A new page must be registered in `sidebars.js` (and, for a command, in the theme page and `command-index.md`, see `4d-docs-language`).

## 3. Writing style

- US English, present tense, technical and neutral. Address the reader as **"you"**; use **"4D"** as the subject for product behavior ("4D creates…", "4D will throw an error").
- Typical phrasing: "This option lets you…", "…allows you to…", "Note that…", "Keep in mind that…", "For more information, please refer to…", "On the other hand…", "Consequently…".
- Open the page with an unheaded introduction paragraph that defines the subject, key term in **bold**.
- Headings in sentence case (follow the local page if it uses Title Case). Task headings use gerunds ("Creating a table"); concept headings are nouns or questions ("What is a preemptive process?").
- Explanations: definition → consequence/benefit → conditions/limits → exceptions (in a note).

## 4. Inline formatting

| Element | Format | Example |
|---|---|---|
| UI labels, menus, buttons, dialog options | **bold** | **New Process**, **Design > Explorer** |
| Term defined for the first time / key emphasis | **bold** | **worker process**, **by copy** |
| Parameter names | *italics* | *method*, *options* |
| Commands, functions, properties, classes, constants, values, file names | `code` | `CALL WORKER`, `.wait()`, `4D.File`, `fk overwrite` |
| Dialog names, conceptual values | "double quotes" | "Execute Method" dialog box, "capable" |

- Keep the exact 4D casing of command names (`New process`, `KILL WORKER`, `Process info`).
- Use straight quotes in new text.

## 5. Links

- Relative links. Pages in other sections: `../Section/page.md#anchor`. Commands: `` [`CALL WORKER`](../commands/call-worker) `` (no `.md`, slug-based), from `language-legacy` pages: `../commands/<slug>` too (slugs resolve to `/commands/`).
- From `language-legacy/<Theme>/` pages, other sections are two levels up: `../../Concepts/shared.md`, `../../API/SessionClass.md`.
- Link every command/function mention in prose when it is the first in the paragraph (most pages link every occurrence).
- doc.4d.com links are accepted for content not yet migrated ("please refer to the [… on doc.4d.com](https://doc.4d.com/…)").
- Blog posts: `:::tip Related blog post` (or `posts`) admonition, or a `## See also` section with one link per line ending in two spaces or `<br/>`.

## 6. Admonitions (Docusaurus)

```
:::note

Text.

:::
```
- Always a blank line after the opening and before the closing `:::`.
- `:::note` – secondary precision. Titled variants: `:::note Notes` (bullet list), `:::note Compatibility`, `:::note Particular case`, `:::note <option>`.
- `:::info` – restriction, reminder, recommended alternative (`:::info Reminder`, `:::info Deprecated`).
- `:::tip` – best practice, alternative syntax, `:::tip Related blog post(s)`.
- `:::caution` – destructive operations (e.g. `.delete()`).
- `:::warning` – deprecations and data-loss risks (`:::warning Deprecated`, release notes).
- Legacy pages also use `> quote` notes and `**Note:**` paragraphs: keep them when editing locally, prefer admonitions for new content.

## 7. Images and diagrams

- Markdown only, **empty alt text**: `![](../assets/en/<Section>/<name>.png)`.
- Assets live in `docs/assets/en/<Section>/` (`Develop`, `FormObjects`, `settings`, `commands`…). From `language-legacy` pages: `../../assets/en/commands/…`.
- Introduce each image with a sentence ending with a colon ("…the following dialog box appears:"). In a list item, end the line with `<br/>` then put the image.
- Small inline icons are allowed in prose ("identified by the ![](…/thread-safe.png) icon").
- Never rename/replace an existing image file without user consent (CI runs `diff_images` on `docs/` and `i18n/`). Each version has its own `versioned_docs/version-XX/assets/`.
- Flow/decision diagrams: use a ```` ```mermaid ```` block (`flowchart TD`, `sequenceDiagram`), as in `language-legacy/Processes/session.md`, `ORDA/orda-events.md`, `WebServer/sessions.md`. Do not create image-based diagrams if mermaid can express it.
- Animated GIFs are used for UI sequences (`WorkerAnimation.gif`).

## 8. Code blocks

- 4D code: ```` ```4d ```` (some old pages use `code4d`; keep, but use `4d` for new blocks). JSON form definitions also often use `4d` or `json`.
- Modern syntax in new examples: `var $x : Type`, `var $x:=value`, `#DECLARE(...)`, `Class constructor`, `Function`, `cs.`/`4D.` classes, `//` comments.
- Introduce examples with a sentence ("For example:", "Here is an example:", "Given the following project method:"), explain the result after.

## 9. Tables

- Pipe tables with `|---|` separators. Used for comparisons, constants (`|Constant|Value|Comment|`), JSON grammar, availability (yes/no).
- In table cells, use `<br/>` or `<li>…</li>` for multiline content.

## 10. Preprocessed HTML comments (all page types)

`<!-- REF … -->`, `<!-- END REF -->`, `<!-- INCLUDE … -->` are consumed by the doc preprocessor (`.doc_preprocessing.js`, `doc4d/doc_tools`) **before** Docusaurus. Never delete, rename, move or unbalance them. Details in `4d-docs-language`.

## 11. Release notes

New feature/behavior change → bullet in `docs/Notes/updates.md`, current release section (`## 4D 21 Rx`), under `#### Highlights` or `#### Behavior changes`, each bullet linking to the updated pages. Only when the user asks or the change is a new feature.

## 12. Validation

- `npm run build -- --locale en` (Docusaurus, checks broken links/MDX).
- CI also runs `syntax-checker` on `docs/` (syntax strings) and `diff_images`.
- Preview: `npm run start_watch` + `npm run start -- --config ./docusaurus.config_start.js`.
