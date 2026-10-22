---
name: new-command-documentation
description: 'Use when adding or documenting a new 4D language command in this documentation repository. Covers the command page, release notes, theme listing, and alphabetical command index.'
---

# New Command Documentation

Use this workflow whenever a new 4D command is added to the documentation.

## Procedure

1. Confirm the command name, syntax, behavior, result structure, examples, command number, thread-safety, theme, and target 4D release from the feature requirements. Do not guess missing API details or the release version.
2. Create or update the command page in the appropriate source directory. Follow the structure and reference markers used by nearby command pages, including front matter, syntax and parameter references, history, description, result properties, examples, see-also links, and command properties when applicable. Include at least one complete, copyable example grounded in the feature requirements.
3. Add a concise announcement to the `Highlights` section for the target release in `docs/Notes/updates.md`, linking to the command page. Do not duplicate an announcement that is already present.
4. Add the command to the appropriate page in `docs/commands/theme/`, in alphabetical order. Follow the existing command syntax include and relative-link format, and add the release marker when used by the page's conventions.
5. Add the command to `docs/commands/command-index.md` in alphabetical order, linking to its command page and ending the line with `**new 4D <version>**`.

## Validation

- Verify the command page and all links resolve to existing files or valid documentation routes.
- Check that the theme page and command index each contain one correctly sorted entry.
- Confirm the release note appears once under the correct release and links to the command page.
- Run the narrowest available documentation validation and review the final diff without overwriting unrelated or pre-existing changes.