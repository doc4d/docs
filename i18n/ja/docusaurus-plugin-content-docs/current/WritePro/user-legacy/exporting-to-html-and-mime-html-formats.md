---
id: exporting-to-html-and-mime-html-formats
title: Exporting to HTML and MIME HTML formats
displayed_sidebar: docs
---

4D Write Pro documents can be exported to the HTML and MIME HTML formats using the [WP EXPORT DOCUMENT](../commands/wp-export-document) and [WP EXPORT VARIABLE](../commands/wp-export-variable) commands. Use these tables to check which 4D Write Pro attributes and features are exported to HTML and MIME HTML. The attributes/features are sorted alphabetically. For a detailed list of attributes, see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md).

### Common attributes

| **Attribute/Feature**                                            | **Exported** | **コメント** |
| ---------------------------------------------------------------- | ------------ | -------- |
| Background clip                                                  | ◯            |          |
| Background color (for element, not character) | ◯            |          |
| Background image                                                 | ◯            |          |
| Background repeat                                                | ◯            |          |
| Background origin                                                | ◯            |          |
| Background position                                              | ◯            |          |
| Background width and height                                      | ◯            |          |
| Border color                                                     | ◯            |          |
| Border radius                                                    | ◯            |          |
| Border style                                                     | ◯            |          |
| Border width                                                     | ◯            |          |
| Element id                                                       | ◯            |          |
| マージン                                                             | ◯            |          |
| Padding                                                          | ◯            |          |
| Protected                                                        | ×            |          |
| Style sheet                                                      | ◯            |          |

### Characters

| **Attribute/Feature**  | **Exported** | **コメント**                        |
| ---------------------- | ------------ | ------------------------------- |
| 背景色                    | ◯            |                                 |
| Font and font styles   | ◯            |                                 |
| Font size              | ◯            |                                 |
| Strikethrough color    | ×            |                                 |
| Strikethrough styles   | partially    | Only solid is exported          |
| Superscript, subscript | ◯            |                                 |
| Text color             | ◯            |                                 |
| Text shadow            | ◯            |                                 |
| Text transform         | partially    | Small uppercase is not exported |
| Underline color        | ×            |                                 |
| Underline styles       | partially    | Only solid is exported          |

#### 列

| **Attribute/Feature** | **Exported** | **コメント** |
| --------------------- | ------------ | -------- |
| 列の数                   | ×            |          |
| Column rule color     | ×            |          |
| Column rule style     | ×            |          |
| Column rule width     | ×            |          |
| Column spacing        | ×            |          |

### Document

| **Attribute/Feature**                          | **Exported** | **コメント**                            |
| ---------------------------------------------- | ------------ | ----------------------------------- |
| Break paragraphs in formulas                   | ×            |                                     |
| Document (meta) information | partially    | Only title and subject are exported |
| Dpi                                            | ×            |                                     |
| Font default                                   | ×            |                                     |
| Header and footer autofit                      | ×            |                                     |
| Page margin                                    | ×            |                                     |
| Page orientation                               | ×            |                                     |
| Page width/height                              | ×            |                                     |
| Protection enabled                             | ×            |                                     |
| Tab decimal separator                          | ×            |                                     |
| User unit                                      | ×            |                                     |

### 画像

| **Attribute/Feature**                                                   | **Exported** | **コメント**                                                                             |
| ----------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------ |
| Alternate text                                                          | ◯            |                                                                                      |
| Anchor align                                                            | partially    | Only right, left, top or bottom                                                      |
| Anchor embedded                                                         | ◯            |                                                                                      |
| Anchor origin                                                           | partially    | Only for the container box (borders of the web page)              |
| Anchor to a single page                                                 | ×            |                                                                                      |
| Anchor to all pages                                                     | ×            |                                                                                      |
| Anchor to all sections of a page                                        | ×            |                                                                                      |
| Background image (and related background attributes) | ◯            |                                                                                      |
| Image display mode                                                      | partially    | If an image has a background image, it is exported as scaled to fit. |
| Image URL                                                               | ◯            |                                                                                      |
| Vertical align                                                          | ◯            |                                                                                      |

### Text boxes

| **Attribute/Feature**            | **Exported** | **コメント**                                                                |
| -------------------------------- | ------------ | ----------------------------------------------------------------------- |
| Anchor align                     | ◯            |                                                                         |
| Anchor embedded                  | ◯            | as div                                                                  |
| Anchor offset                    | ◯            |                                                                         |
| Anchor origin                    | partially    | Only for the container box (borders of the web page) |
| Anchor to a single page          | ×            |                                                                         |
| Anchor to all sections of a page | ×            |                                                                         |
| Vertical align                   | ◯            |                                                                         |

### Paragraphs

| **Attribute/Feature**                                      | **Exported** | **コメント**                                                                                    |
| ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| Absolute tab stops                                         | ×            |                                                                                             |
| Column break after                                         | ◯            | Single column only (multiple columns are not supported)                  |
| Direction                                                  | ◯            |                                                                                             |
| Keep with next                                             | ◯            |                                                                                             |
| Line height                                                | ◯            |                                                                                             |
| List font                                                  | ×            |                                                                                             |
| List image                                                 | ◯            |                                                                                             |
| List image height                                          | ×            |                                                                                             |
| List start number                                          | ◯            |                                                                                             |
| List string format (custom format)      | ×            |                                                                                             |
| List style type                                            | partially    | Hollow-square, diamond, and club are not exported, decimal-greek is the same as lower-greek |
| Min-height                                                 | ◯            |                                                                                             |
| Min-width                                                  | ×            |                                                                                             |
| New line style sheet                                       | ×            |                                                                                             |
| Page break after                                           | ◯            |                                                                                             |
| Page break inside                                          | ◯            |                                                                                             |
| Section break after (continuous or not) | ×            |                                                                                             |
| Text align                                                 | ◯            |                                                                                             |
| Text indent                                                | ◯            |                                                                                             |
| Vertical-align                                             | ◯            |                                                                                             |
| Widow and orphan control                                   | ×            |                                                                                             |
| 幅                                                          | ◯            |                                                                                             |

### Sections and page elements

| **Attribute/Feature**            | **Exported** | **コメント**                                                     |
| -------------------------------- | ------------ | ------------------------------------------------------------ |
| First page sub-section           | ×            |                                                              |
| Headers and footers              | ×            |                                                              |
| Left and right page sub-sections | ×            |                                                              |
| Main sections                    | ×            | Only document-level attributes are exported to the html body |
| Page margin                      | ×            |                                                              |
| Page orientation                 | ×            |                                                              |

### テーブル

| **Attribute/Feature**                                        | **Exported** | **コメント**                                                                   |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | ◯            |                                                                            |
| Column break after                                           | ◯            | Single column only (multiple columns are not supported) |
| Horizontal alignment                                         | ◯            |                                                                            |
| Page break after                                             | ◯            |                                                                            |
| Page break inside                                            | ◯            |                                                                            |
| Section break after                                          | ×            |                                                                            |
| Bottom carry-over rows                                       | ×            |                                                                            |

### Table cells

| **Attribute/Feature**                                        | **Exported** | **コメント** |
| ------------------------------------------------------------ | ------------ | -------- |
| Background image (and related attributes) | ◯            |          |
| 高さ                                                           | ◯            |          |
| Vertical align                                               | ◯            |          |
| 幅                                                            | ◯            |          |

### Table rows

| **Attribute/Feature**                                        | **Exported** | **コメント**                                                                   |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | ◯            |                                                                            |
| Column break after                                           | ◯            | Single column only (multiple columns are not supported) |
| 高さ                                                           | ◯            |                                                                            |
| Page break after                                             | ◯            |                                                                            |

### Other features

| **Attribute/Feature**        | **Exported** | **コメント**                        |
| ---------------------------- | ------------ | ------------------------------- |
| 4D formulas                  | ×            | Computed and freezed for export |
| 4D method links              | ×            |                                 |
| Bookmarks and bookmark links | ◯            |                                 |
| URL links                    | ◯            |                                 |