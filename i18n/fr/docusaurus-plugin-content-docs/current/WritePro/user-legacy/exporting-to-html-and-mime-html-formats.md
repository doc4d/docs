---
id: exporting-to-html-and-mime-html-formats
title: Exporting to HTML and MIME HTML formats
displayed_sidebar: docs
---

4D Write Pro documents can be exported to the HTML and MIME HTML formats using the [WP EXPORT DOCUMENT](../commands/wp-export-document) and [WP EXPORT VARIABLE](../commands/wp-export-variable) commands. Use these tables to check which 4D Write Pro attributes and features are exported to HTML and MIME HTML. The attributes/features are sorted alphabetically. For a detailed list of attributes, see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md).

### Common attributes

| **Attribute/Feature**                                            | **Exported** | **Comment** |
| ---------------------------------------------------------------- | ------------ | ----------- |
| Background clip                                                  | oui          |             |
| Background color (for element, not character) | oui          |             |
| Background image                                                 | oui          |             |
| Background repeat                                                | oui          |             |
| Background origin                                                | oui          |             |
| Background position                                              | oui          |             |
| Background width and height                                      | oui          |             |
| Border color                                                     | oui          |             |
| Border radius                                                    | oui          |             |
| Border style                                                     | oui          |             |
| Border width                                                     | oui          |             |
| Element id                                                       | oui          |             |
| hor.                                             | oui          |             |
| Padding                                                          | oui          |             |
| Protected                                                        | non          |             |
| Style sheet                                                      | oui          |             |

### Characters

| **Attribute/Feature**  | **Exported** | **Comment**                     |
| ---------------------- | ------------ | ------------------------------- |
| Couleur de fond        | oui          |                                 |
| Font and font styles   | oui          |                                 |
| Font size              | oui          |                                 |
| Strikethrough color    | non          |                                 |
| Strikethrough styles   | partially    | Only solid is exported          |
| Superscript, subscript | oui          |                                 |
| Text color             | oui          |                                 |
| Text shadow            | oui          |                                 |
| Text transform         | partially    | Small uppercase is not exported |
| Underline color        | non          |                                 |
| Underline styles       | partially    | Only solid is exported          |

#### Colonnes

| **Attribute/Feature** | **Exported** | **Comment** |
| --------------------- | ------------ | ----------- |
| Nombre de colonnes    | non          |             |
| Column rule color     | non          |             |
| Column rule style     | non          |             |
| Column rule width     | non          |             |
| Column spacing        | non          |             |

### Document

| **Attribute/Feature**                          | **Exported** | **Comment**                         |
| ---------------------------------------------- | ------------ | ----------------------------------- |
| Break paragraphs in formulas                   | non          |                                     |
| Document (meta) information | partially    | Only title and subject are exported |
| Dpi                                            | non          |                                     |
| Font default                                   | non          |                                     |
| Header and footer autofit                      | non          |                                     |
| Page margin                                    | non          |                                     |
| Orientation de la page                         | non          |                                     |
| Page width/height                              | non          |                                     |
| Protection enabled                             | non          |                                     |
| Tab decimal separator                          | non          |                                     |
| User unit                                      | non          |                                     |

### Images

| **Attribute/Feature**                                                   | **Exported** | **Comment**                                                                          |
| ----------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------ |
| Alternate text                                                          | oui          |                                                                                      |
| Anchor align                                                            | partially    | Only right, left, top or bottom                                                      |
| Anchor embedded                                                         | oui          |                                                                                      |
| Anchor origin                                                           | partially    | Only for the container box (borders of the web page)              |
| Anchor to a single page                                                 | non          |                                                                                      |
| Anchor to all pages                                                     | non          |                                                                                      |
| Anchor to all sections of a page                                        | non          |                                                                                      |
| Background image (and related background attributes) | oui          |                                                                                      |
| Image display mode                                                      | partially    | If an image has a background image, it is exported as scaled to fit. |
| Image URL                                                               | oui          |                                                                                      |
| Vertical align                                                          | oui          |                                                                                      |

### Text boxes

| **Attribute/Feature**            | **Exported** | **Comment**                                                             |
| -------------------------------- | ------------ | ----------------------------------------------------------------------- |
| Anchor align                     | oui          |                                                                         |
| Anchor embedded                  | oui          | as div                                                                  |
| Anchor offset                    | oui          |                                                                         |
| Anchor origin                    | partially    | Only for the container box (borders of the web page) |
| Anchor to a single page          | non          |                                                                         |
| Anchor to all sections of a page | non          |                                                                         |
| Vertical align                   | oui          |                                                                         |

### Paragraphs

| **Attribute/Feature**                                      | **Exported** | **Comment**                                                                                 |
| ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| Absolute tab stops                                         | non          |                                                                                             |
| Column break after                                         | oui          | Single column only (multiple columns are not supported)                  |
| Direction                                                  | oui          |                                                                                             |
| Keep with next                                             | oui          |                                                                                             |
| Line height                                                | oui          |                                                                                             |
| List font                                                  | non          |                                                                                             |
| List image                                                 | oui          |                                                                                             |
| List image height                                          | non          |                                                                                             |
| List start number                                          | oui          |                                                                                             |
| List string format (custom format)      | non          |                                                                                             |
| List style type                                            | partially    | Hollow-square, diamond, and club are not exported, decimal-greek is the same as lower-greek |
| Min-height                                                 | oui          |                                                                                             |
| Min-width                                                  | non          |                                                                                             |
| New line style sheet                                       | non          |                                                                                             |
| Page break after                                           | oui          |                                                                                             |
| Page break inside                                          | oui          |                                                                                             |
| Section break after (continuous or not) | non          |                                                                                             |
| Text align                                                 | oui          |                                                                                             |
| Text indent                                                | oui          |                                                                                             |
| Vertical-align                                             | oui          |                                                                                             |
| Widow and orphan control                                   | non          |                                                                                             |
| Largeur                                                    | oui          |                                                                                             |

### Sections and page elements

| **Attribute/Feature**            | **Exported** | **Comment**                                                  |
| -------------------------------- | ------------ | ------------------------------------------------------------ |
| First page sub-section           | non          |                                                              |
| Headers and footers              | non          |                                                              |
| Left and right page sub-sections | non          |                                                              |
| Main sections                    | non          | Only document-level attributes are exported to the html body |
| Page margin                      | non          |                                                              |
| Orientation de la page           | non          |                                                              |

### Tables

| **Attribute/Feature**                                        | **Exported** | **Comment**                                                                |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | oui          |                                                                            |
| Column break after                                           | oui          | Single column only (multiple columns are not supported) |
| Horizontal alignment                                         | oui          |                                                                            |
| Page break after                                             | oui          |                                                                            |
| Page break inside                                            | oui          |                                                                            |
| Section break after                                          | non          |                                                                            |
| Bottom carry-over rows                                       | non          |                                                                            |

### Table cells

| **Attribute/Feature**                                        | **Exported** | **Comment** |
| ------------------------------------------------------------ | ------------ | ----------- |
| Background image (and related attributes) | oui          |             |
| Hauteur                                                      | oui          |             |
| Vertical align                                               | oui          |             |
| Largeur                                                      | oui          |             |

### Table rows

| **Attribute/Feature**                                        | **Exported** | **Comment**                                                                |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | oui          |                                                                            |
| Column break after                                           | oui          | Single column only (multiple columns are not supported) |
| Hauteur                                                      | oui          |                                                                            |
| Page break after                                             | oui          |                                                                            |

### Other features

| **Attribute/Feature**        | **Exported** | **Comment**                     |
| ---------------------------- | ------------ | ------------------------------- |
| 4D formulas                  | non          | Computed and freezed for export |
| 4D method links              | non          |                                 |
| Bookmarks and bookmark links | oui          |                                 |
| URL links                    | oui          |                                 |