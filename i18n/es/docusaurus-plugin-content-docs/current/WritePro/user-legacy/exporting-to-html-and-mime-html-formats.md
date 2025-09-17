---
id: exporting-to-html-and-mime-html-formats
title: Exporting to HTML and MIME HTML formats
displayed_sidebar: docs
---

4D Write Pro documents can be exported to the HTML and MIME HTML formats using the [WP EXPORT DOCUMENT](../commands/wp-export-document) and [WP EXPORT VARIABLE](../commands/wp-export-variable) commands. Use these tables to check which 4D Write Pro attributes and features are exported to HTML and MIME HTML. The attributes/features are sorted alphabetically. For a detailed list of attributes, see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md).

### Common attributes

| **Attribute/Feature**                                            | **Exported** | **Comentario** |
| ---------------------------------------------------------------- | ------------ | -------------- |
| Background clip                                                  | sí           |                |
| Background color (for element, not character) | sí           |                |
| Background image                                                 | sí           |                |
| Background repeat                                                | sí           |                |
| Background origin                                                | sí           |                |
| Background position                                              | sí           |                |
| Background width and height                                      | sí           |                |
| Border color                                                     | sí           |                |
| Border radius                                                    | sí           |                |
| Border style                                                     | sí           |                |
| Border width                                                     | sí           |                |
| Element id                                                       | sí           |                |
| hor.                                             | sí           |                |
| Padding                                                          | sí           |                |
| Protected                                                        | no           |                |
| Style sheet                                                      | sí           |                |

### Characters

| **Attribute/Feature**  | **Exported** | **Comentario**                  |
| ---------------------- | ------------ | ------------------------------- |
| Color de fondo         | sí           |                                 |
| Font and font styles   | sí           |                                 |
| Font size              | sí           |                                 |
| Strikethrough color    | no           |                                 |
| Strikethrough styles   | partially    | Only solid is exported          |
| Superscript, subscript | sí           |                                 |
| Text color             | sí           |                                 |
| Text shadow            | sí           |                                 |
| Text transform         | partially    | Small uppercase is not exported |
| Underline color        | no           |                                 |
| Underline styles       | partially    | Only solid is exported          |

#### Columnas

| **Attribute/Feature** | **Exported** | **Comentario** |
| --------------------- | ------------ | -------------- |
| Conteo de columnas    | no           |                |
| Column rule color     | no           |                |
| Column rule style     | no           |                |
| Column rule width     | no           |                |
| Column spacing        | no           |                |

### Document

| **Attribute/Feature**                          | **Exported** | **Comentario**                      |
| ---------------------------------------------- | ------------ | ----------------------------------- |
| Break paragraphs in formulas                   | no           |                                     |
| Document (meta) information | partially    | Only title and subject are exported |
| Dpi                                            | no           |                                     |
| Font default                                   | no           |                                     |
| Header and footer autofit                      | no           |                                     |
| Page margin                                    | no           |                                     |
| Orientación de la página                       | no           |                                     |
| Page width/height                              | no           |                                     |
| Protection enabled                             | no           |                                     |
| Tab decimal separator                          | no           |                                     |
| User unit                                      | no           |                                     |

### Imágenes

| **Attribute/Feature**                                                   | **Exported** | **Comentario**                                                                       |
| ----------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------ |
| Alternate text                                                          | sí           |                                                                                      |
| Anchor align                                                            | partially    | Only right, left, top or bottom                                                      |
| Anchor embedded                                                         | sí           |                                                                                      |
| Anchor origin                                                           | partially    | Only for the container box (borders of the web page)              |
| Anchor to a single page                                                 | no           |                                                                                      |
| Anchor to all pages                                                     | no           |                                                                                      |
| Anchor to all sections of a page                                        | no           |                                                                                      |
| Background image (and related background attributes) | sí           |                                                                                      |
| Image display mode                                                      | partially    | If an image has a background image, it is exported as scaled to fit. |
| Image URL                                                               | sí           |                                                                                      |
| Vertical align                                                          | sí           |                                                                                      |

### Text boxes

| **Attribute/Feature**            | **Exported** | **Comentario**                                                          |
| -------------------------------- | ------------ | ----------------------------------------------------------------------- |
| Anchor align                     | sí           |                                                                         |
| Anchor embedded                  | sí           | as div                                                                  |
| Anchor offset                    | sí           |                                                                         |
| Anchor origin                    | partially    | Only for the container box (borders of the web page) |
| Anchor to a single page          | no           |                                                                         |
| Anchor to all sections of a page | no           |                                                                         |
| Vertical align                   | sí           |                                                                         |

### Paragraphs

| **Attribute/Feature**                                      | **Exported** | **Comentario**                                                                              |
| ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| Absolute tab stops                                         | no           |                                                                                             |
| Column break after                                         | sí           | Single column only (multiple columns are not supported)                  |
| Direction                                                  | sí           |                                                                                             |
| Keep with next                                             | sí           |                                                                                             |
| Line height                                                | sí           |                                                                                             |
| List font                                                  | no           |                                                                                             |
| List image                                                 | sí           |                                                                                             |
| List image height                                          | no           |                                                                                             |
| List start number                                          | sí           |                                                                                             |
| List string format (custom format)      | no           |                                                                                             |
| List style type                                            | partially    | Hollow-square, diamond, and club are not exported, decimal-greek is the same as lower-greek |
| Min-height                                                 | sí           |                                                                                             |
| Min-width                                                  | no           |                                                                                             |
| New line style sheet                                       | no           |                                                                                             |
| Page break after                                           | sí           |                                                                                             |
| Page break inside                                          | sí           |                                                                                             |
| Section break after (continuous or not) | no           |                                                                                             |
| Text align                                                 | sí           |                                                                                             |
| Text indent                                                | sí           |                                                                                             |
| Vertical-align                                             | sí           |                                                                                             |
| Widow and orphan control                                   | no           |                                                                                             |
| Ancho                                                      | sí           |                                                                                             |

### Sections and page elements

| **Attribute/Feature**            | **Exported** | **Comentario**                                               |
| -------------------------------- | ------------ | ------------------------------------------------------------ |
| First page sub-section           | no           |                                                              |
| Headers and footers              | no           |                                                              |
| Left and right page sub-sections | no           |                                                              |
| Main sections                    | no           | Only document-level attributes are exported to the html body |
| Page margin                      | no           |                                                              |
| Orientación de la página         | no           |                                                              |

### Tablas

| **Attribute/Feature**                                        | **Exported** | **Comentario**                                                             |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | sí           |                                                                            |
| Column break after                                           | sí           | Single column only (multiple columns are not supported) |
| Horizontal alignment                                         | sí           |                                                                            |
| Page break after                                             | sí           |                                                                            |
| Page break inside                                            | sí           |                                                                            |
| Section break after                                          | no           |                                                                            |
| Bottom carry-over rows                                       | no           |                                                                            |

### Table cells

| **Attribute/Feature**                                        | **Exported** | **Comentario** |
| ------------------------------------------------------------ | ------------ | -------------- |
| Background image (and related attributes) | sí           |                |
| Altura                                                       | sí           |                |
| Vertical align                                               | sí           |                |
| Ancho                                                        | sí           |                |

### Table rows

| **Attribute/Feature**                                        | **Exported** | **Comentario**                                                             |
| ------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------- |
| Background image (and related attributes) | sí           |                                                                            |
| Column break after                                           | sí           | Single column only (multiple columns are not supported) |
| Altura                                                       | sí           |                                                                            |
| Page break after                                             | sí           |                                                                            |

### Other features

| **Attribute/Feature**        | **Exported** | **Comentario**                  |
| ---------------------------- | ------------ | ------------------------------- |
| 4D formulas                  | no           | Computed and freezed for export |
| 4D method links              | no           |                                 |
| Bookmarks and bookmark links | sí           |                                 |
| URL links                    | sí           |                                 |