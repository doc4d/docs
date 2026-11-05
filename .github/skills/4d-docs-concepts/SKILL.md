---
name: 4d-docs-concepts
description: 'Use before touching docs/Concepts/** (4D language fundamentals: data types, variables, operators, methods, parameters, classes, error handling, shared objects…) in doc4d/docs. These pages are stable and must generally NOT be modified.'
---

# 4D language concepts pages – restricted edits

Apply `4d-docs-common` first.

`docs/Concepts/` (about, quick-tour, data-types, `dt_*`, variables, arrays, operators, flow-control, methods, parameters, classes, components, error-handling, identifiers, interpreted, paths, shared, plug-ins, ordering) describes the **fundamental, stable rules of the 4D language**. They are the canonical target of links from the whole documentation.

## Default behavior: do not modify

- Do **not** rewrite, reorganize, reformulate, "modernize" or shorten these pages, even to align them with the style of other pages.
- Do **not** change headings: their anchors (`#process-variables`, `#default-values`, `#binary-streaming-variable-to-blob`…) are linked from hundreds of pages and from versioned docs.
- Do **not** change the examples or the rules they illustrate.
- If a requested change elsewhere seems to contradict a Concepts page, **stop and report it** to the user instead of editing Concepts.

## Allowed edits (only when explicitly requested, or clearly required)

1. A **new language feature** of the current release (new keyword, new syntax, new type, new operator, new class feature): add a new section or a new row/paragraph; do not alter existing explanations except to add a cross-reference.
2. A **deprecation** or compatibility note: add a `:::note Compatibility` or `:::warning Deprecated` block (pattern: "The legacy syntax using `C_XXX` commands is deprecated as of 4D 20 R7.").
3. Fix a verified factual error, typo, or broken link – minimal diff.

For these edits:
- Keep the didactic tone of the page: definition first, then syntax line in backticks (`` `var <varName>{; <varName2>;...}{ : <varType>}` ``), then examples introduced with "For example:" / "Here are some examples:", then notes.
- Examples are short ```` ```4d ```` blocks with end-of-line `//` comments explaining the result (`var $text:="hello"  // Inferred as Text`).
- Tables for type/value lists (`|varType|Contents|`).
- Add, never replace, existing anchors. New sections go at the logical place without renumbering others.
- Mention the change in the reply so the reviewer can double-check it.

## Checklist

- [ ] Was the edit explicitly requested or required by a new language feature? If not, revert.
- [ ] No existing heading/anchor renamed or removed.
- [ ] Existing examples unchanged.
- [ ] Diff is minimal and additive.
