# Syntax structure equivalence — docs/language-legacy vs i18n

Target languages: es, fr, ja, pt

## Summary

- Files with non-equivalent syntax: **128**
- **A. Types missing/translated** (English structure not reproduced, like the order-by example): 160 syntaxes in **66** files
- **B. Minor structure only** (types preserved, e.g. dropped optional `{}`): 204 syntaxes in **73** files

## Per language

| Language | A (types) | B (minor) |
| --- | --- | --- |
| es | 51 | 60 |
| fr | 35 | 24 |
| ja | 28 | 63 |
| pt | 46 | 57 |

## A. Types missing or translated (priority)

| Page | Languages |
| --- | --- |
| Arrays/selection-to-array.md | es, fr, ja, pt |
| BLOB/integer-to-blob.md | es, pt |
| BLOB/list-to-blob.md | fr |
| BLOB/longint-to-blob.md | es |
| BLOB/real-to-blob.md | es |
| BLOB/text-to-blob.md | es, pt |
| BLOB/variable-to-blob.md | pt |
| Communications/receive-packet.md | es |
| Communications/use-character-set.md | ja |
| Data Security/decrypt-data-blob.md | es, pt |
| Data Security/encrypt-data-blob.md | es, pt |
| Data Security/encrypt-data-file.md | es, fr, ja, pt |
| Design Object Access/method-get-modification-date.md | es |
| Design Object Access/method-set-attribute.md | es |
| Design Object Access/method-set-code.md | es |
| Drag and Drop/drop-position.md | es, pt |
| Entry Control/get-highlight.md | pt |
| Form Events/execute-method-in-subform.md | fr |
| Forms/form-get-entry-order.md | es, pt |
| Forms/form-get-objects.md | fr, ja |
| Graphs/graph.md | es, fr, ja, pt |
| Hierarchical Lists/delete-from-list.md | fr |
| Hierarchical Lists/get-list-item-font.md | es, fr, ja, pt |
| Hierarchical Lists/get-list-item-icon.md | es, fr, ja, pt |
| Hierarchical Lists/get-list-item-parameter-arrays.md | fr, ja |
| Hierarchical Lists/get-list-item-parameter.md | es, fr, ja, pt |
| Hierarchical Lists/get-list-item-properties.md | es, fr, ja, pt |
| Hierarchical Lists/get-list-item.md | es, fr, ja, pt |
| Hierarchical Lists/insert-in-list.md | es, fr, ja, pt |
| Hierarchical Lists/list-item-parent.md | es, fr, ja, pt |
| Hierarchical Lists/set-list-item-font.md | es, fr, ja, pt |
| Hierarchical Lists/set-list-item-icon.md | es, fr, ja, pt |
| Hierarchical Lists/set-list-item-parameter.md | es, fr, ja, pt |
| Hierarchical Lists/set-list-item-properties.md | es, fr, ja, pt |
| Hierarchical Lists/set-list-item.md | es, fr, ja, pt |
| Interruptions/throw.md | fr |
| Language/execute-method.md | es, fr, ja, pt |
| List Box/listbox-set-table-source.md | es, fr, ja, pt |
| Objects (Forms)/object-set-action.md | es |
| Pictures/get-picture-from-library.md | es, fr, pt |
| Pictures/remove-picture-from-library.md | es, pt |
| Printing/page-break.md | fr |
| Printing/print-label.md | es, fr, ja, pt |
| Printing/print-record.md | es, fr, ja, pt |
| Printing/print-selection.md | es, pt |
| Processes/register-client.md | pt |
| Queries/last-query-plan.md | es |
| Quick Report/qr-set-totals-data.md | es, pt |
| Record Locking/read-only.md | es, pt |
| Record Locking/read-write.md | es, pt |
| Relations/relate-many.md | es, pt |
| Relations/relate-one.md | es, fr, ja, pt |
| Relations/set-field-relation.md | es, ja, pt |
| Selection/modify-selection.md | fr |
| String/match-regex.md | fr |
| Structure Access/get-table-properties.md | ja |
| System Environment/font-list.md | es, pt |
| Tools/activity-snapshot.md | es, fr, pt |
| User Interface/redraw.md | es, fr, ja, pt |
| Web Area/wa-execute-javascript-function.md | fr |
| Web Server/web-get-http-header.md | es, pt |
| Web Server/web-set-http-header.md | es, pt |
| XML DOM/dom-get-xml-element.md | es, fr, ja, pt |
| XML DOM/dom-parse-xml-source.md | es, pt |
| XML DOM/dom-parse-xml-variable.md | es, pt |
| XML SAX/sax-set-xml-declaration.md | es, fr, ja, pt |

## B. Minor structural differences (types preserved)

| Page | Languages |
| --- | --- |
| 4D Environment/application-version.md | es, ja, pt |
| 4D Environment/data-file.md | es, pt |
| 4D Environment/database-measures.md | es, ja, pt |
| 4D Environment/ds.md | fr |
| 4D Environment/get-4d-folder.md | es, ja, pt |
| 4D Environment/is-compiled-mode.md | es, fr, ja, pt |
| 4D Environment/structure-file.md | es, fr, ja, pt |
| BLOB/integer-to-blob.md | fr, ja |
| BLOB/longint-to-blob.md | fr, ja, pt |
| BLOB/real-to-blob.md | fr, ja, pt |
| BLOB/text-to-blob.md | fr, ja |
| BLOB/variable-to-blob.md | es, fr, ja |
| Cache Management/cache-info.md | es, ja, pt |
| Cache Management/flush-cache.md | es, fr, ja, pt |
| Collections/array-to-collection.md | es, ja, pt |
| Data Entry/add-record.md | es, ja, pt |
| Data Entry/modify-record.md | es, ja, pt |
| Data Security/data-file-encryption-status.md | fr |
| Date and Time/current-date.md | es, fr, ja, pt |
| Date and Time/current-time.md | es, fr, ja, pt |
| Design Object Access/form-get-names.md | es, fr, ja, pt |
| Design Object Access/method-set-comments.md | es |
| Form Events/execute-method-in-subform.md | es, ja, pt |
| Forms/form-get-current-page.md | es, fr, ja, pt |
| Forms/form-set-input.md | es, ja, pt |
| Hierarchical Lists/sort-list.md | fr |
| Interruptions/method-called-on-error.md | es, ja, pt |
| Interruptions/throw.md | es, ja, pt |
| Language/copy-parameters.md | es, ja, pt |
| Menus/count-menus.md | es, ja, pt |
| Menus/get-menu-bar-reference.md | es, ja, pt |
| Menus/menu-selected.md | es, ja, pt |
| Objects (Forms)/object-get-name.md | es, ja, pt |
| Objects (Forms)/object-get-pointer.md | es, ja, pt |
| Objects (Language)/ob-copy.md | ja |
| Printing/print-selection.md | fr, ja |
| Process (Communications)/new-signal.md | fr |
| Process (User Interface)/frontmost-process.md | es, fr, ja, pt |
| Processes/register-client.md | es, ja |
| Queries/query-by-example.md | es, ja, pt |
| Quick Report/qr-report.md | es, ja, pt |
| Record Locking/locked.md | es, ja, pt |
| Record Locking/read-only-state.md | es, ja, pt |
| Records/is-new-record.md | es, ja, pt |
| Records/is-record-loaded.md | es, ja, pt |
| Records/modified-record.md | es, ja, pt |
| Records/record-number.md | es, ja, pt |
| Records/records-in-table.md | es, ja, pt |
| Records/sequence-number.md | es, ja, pt |
| SQL/sql-export-selection.md | es, ja, pt |
| SQL/sql-login.md | es, ja, pt |
| Selection/before-selection.md | es, ja, pt |
| Selection/end-selection.md | es, ja, pt |
| Selection/modify-selection.md | es |
| Selection/records-in-selection.md | es, ja, pt |
| Selection/selected-record-number.md | es, ja, pt |
| Spell Checker/spell-check-text.md | es, ja, pt |
| System Documents/create-folder.md | es |
| System Environment/screen-height.md | es, fr, ja, pt |
| System Environment/screen-width.md | es, fr, ja, pt |
| System Environment/select-rgb-color.md | es, ja, pt |
| System Environment/system-folder.md | es, ja, pt |
| User Interface/get-application-color-scheme.md | es, fr, ja, pt |
| Users and Groups/current-user.md | es, ja, pt |
| Web Area/wa-execute-javascript-function.md | ja |
| Web Area/wa-get-context.md | fr |
| Web Server/web-get-server-info.md | es, ja, pt |
| Web Services (Client)/web-service-get-result.md | es, ja, pt |
| Windows/frontmost-window.md | es, fr, ja, pt |
| Windows/get-window-title.md | es, ja, pt |
| Windows/open-form-window.md | fr |
| Windows/window-kind.md | es, ja, pt |
| Windows/window-process.md | es, ja, pt |
