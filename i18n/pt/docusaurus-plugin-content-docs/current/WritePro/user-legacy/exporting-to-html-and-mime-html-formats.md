---
id: exporting-to-html-and-mime-html-formats
title: Exporting to HTML and MIME HTML formats
displayed_sidebar: docs
---

4D Write Pro documents can be exported to the HTML and MIME HTML formats using the [WP EXPORT DOCUMENT](../commands/wp-export-document) and [WP EXPORT VARIABLE](../commands/wp-export-variable) commands. Use these tables to check which 4D Write Pro attributes and features are exported to HTML and MIME HTML. The attributes/features are sorted alphabetically. For a detailed list of attributes, see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md).

### Common attributes

| **Attribute/Feature**                                            | **Exported** | **Comment** |
| ---------------------------------------------------------------- | ------------ | ----------- |
| Background clip                                                  | sim          |             |
| Background color (for element, not character) | sim          |             |
| Background image                                                 | sim          |             |
| Background repeat                                                | sim          |             |
| Background origin                                                | sim          |             |
| Background position                                              | sim          |             |
| Background width and height                                      | sim          |             |
| Border color                                                     | sim          |             |
| Border radius                                                    | sim          |             |
| Border style                                                     | sim          |             |
| Border width                                                     | sim          |             |
| Element id                                                       | sim          |             |
| der.                                             | sim          |             |
| Padding                                                          | sim          |             |
| Protected                                                        | não          |             |
| Style sheet                                                      | sim          |             |

### Characters

| **Attribute/Feature**  | **Exported** | **Comment**                     |
| ---------------------- | ------------ | ------------------------------- |
| Cor de fundo           | sim          |                                 |
| Font and font styles   | sim          |                                 |
| Font size              | sim          |                                 |
| Strikethrough color    | não          |                                 |
| Strikethrough styles   | partially    | Only solid is exported          |
| Superscript, subscript | sim          |                                 |
| Text color             | sim          |                                 |
| Text shadow            | sim          |                                 |
| Text transform         | partially    | Small uppercase is not exported |
| Underline color        | não          |                                 |
| Underline styles       | partially    | Only solid is exported          |

#### Colunas

| **Attribute/Feature** | **Exported** | **Comment** |
| --------------------- | ------------ | ----------- |
| Contagem das colunas  | não          |             |
| Column rule color     | não          |             |
| Column rule style     | não          |             |
| Column rule width     | não          |             |
| Column spacing        | não          |             |

### Document

| **Attribute/Feature**                          | **Exported** | **Comment**                         |
| ---------------------------------------------- | ------------ | ----------------------------------- |
| Break paragraphs in formulas                   | não          |                                     |
| Document (meta) information | partially    | Only title and subject are exported |
| Dpi                                            | não          |                                     |
| Font default                                   | não          |                                     |
| Header and footer autofit                      | não          |                                     |
| Page margin                                    | não          |                                     |
| Orientação da página                           | não          |                                     |
| Page width/height                              | não          |                                     |
| Protection enabled                             | não          |                                     |
| Tab decimal separator                          | não          |                                     |
| User unit                                      | não          |                                     |

### Images

| **Attribute/Feature**                                                   | **Exported** | **Comment**                                                                          |
| ----------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------ |
| Alternate text                                                          | sim          |                                                                                      |
| Anchor align                                                            | partially    | Only right, left, top or bottom                                                      |
| Anchor embedded                                                         | sim          |                                                                                      |
| Anchor origin                                                           | partially    | Only for the container box (borders of the web page)              |
| Anchor to a single page                                                 | não          |                                                                                      |
| Anchor to all pages                                                     | não          |                                                                                      |
| Anchor to all sections of a page                                        | não          |                                                                                      |
| Background image (and related background attributes) | sim          |                                                                                      |
| Image display mode                                                      | partially    | If an image has a background image, it is exported as scaled to fit. |
| Image URL                                                               | sim          |                                                                                      |
| Vertical align                                                          | sim          |                                                                                      |

### Text boxes

| **Attribute/Feature**            | **Exported** | **Comment**                                                             |
| -------------------------------- | ------------ | ----------------------------------------------------------------------- |
| Anchor align                     | sim          |                                                                         |
| Anchor embedded                  | sim          | as div                                                                  |
| Anchor offset                    | sim          |                                                                         |
| Anchor origin                    | partially    | Only for the container box (borders of the web page) |
| Anchor to a single page          | não          |                                                                         |
| Anchor to all sections of a page | não          |                                                                         |
| Vertical align                   | sim          |                                                                         |

### Paragraphs

| **Attribute/Feature**                                      | **Exported** | **Comment**                                                                                 |
| ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| Absolute tab stops                                         | não          |                                                                                             |
| Column break after                                         | sim          | Single column only (multiple columns are not supported)                  |
| Direction                                                  | sim          |                                                                                             |
| Keep with next                                             | sim          |                                                                                             |
| Line height                                                | sim          |                                                                                             |
| List font                                                  | não          |                                                                                             |
| List image                                                 | sim          |                                                                                             |
| List image height                                          | não          |                                                                                             |
| List start number                                          | sim          |                                                                                             |
| List string format (custom format)      | não          |                                                                                             |
| List style type                                            | partially    | Hollow-square, diamond, and club are not exported, decimal-greek is the same as lower-greek |
| Min-height                                                 | sim          |                                                                                             |
| Min-width                                                  | não          |                                                                                             |
| New line style sheet                                       | não          |                                                                                             |
| Page break after                                           | sim          |                                                                                             |
| Page break inside                                          | sim          |                                                                                             |
| Section break after (continuous or not) | não          |                                                                                             |
| Text align                                                 | sim          |                                                                                             |
| Text indent                                                | sim          |                                                                                             |
| Vertical-align                                             | sim          |                                                                                             |
| Widow and orphan control                                   | não          |                                                                                             |
| Largura                                                    | sim          |                                                                                             |

### Sections and page elements

| **Attribute/Feature**            | **Exported** | **Comment**                                                  |
| -------------------------------- | ------------ | ------------------------------------------------------------ |
| First page sub-section           | não          |                                                              |
| Headers and footers              | não          |                                                              |
| Left and right page sub-sections | não          |                                                              |
| Main sections                    | não          | Only document-level attributes are exported to the html body |
| Page margin                      | não          |                                                              |
| Orientação da página             | não          |                                                              |

### Tabelas

| **Attribute/Feature**                                        | **Exported** | **Comment**                                                                |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | sim          |                                                                            |
| Column break after                                           | sim          | Single column only (multiple columns are not supported) |
| Horizontal alignment                                         | sim          |                                                                            |
| Page break after                                             | sim          |                                                                            |
| Page break inside                                            | sim          |                                                                            |
| Section break after                                          | não          |                                                                            |
| Bottom carry-over rows                                       | não          |                                                                            |

### Table cells

| **Attribute/Feature**                                        | **Exported** | **Comment** |
| ------------------------------------------------------------ | ------------ | ----------- |
| Background image (and related attributes) | sim          |             |
| Alto                                                         | sim          |             |
| Vertical align                                               | sim          |             |
| Largura                                                      | sim          |             |

### Table rows

| **Attribute/Feature**                                        | **Exported** | **Comment**                                                                |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | sim          |                                                                            |
| Column break after                                           | sim          | Single column only (multiple columns are not supported) |
| Alto                                                         | sim          |                                                                            |
| Page break after                                             | sim          |                                                                            |

### Other features

| **Attribute/Feature**        | **Exported** | **Comment**                     |
| ---------------------------- | ------------ | ------------------------------- |
| 4D formulas                  | não          | Computed and freezed for export |
| 4D method links              | não          |                                 |
| Bookmarks and bookmark links | sim          |                                 |
| URL links                    | sim          |                                 |