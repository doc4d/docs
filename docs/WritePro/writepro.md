---
id: 4dwriteprointerface
title: 4D Write Pro Interface
---

4D WritePro Interface offers a set of palettes, which allow end users to easily customize a 4D Write Pro document.

A 4D developer can easily implement these palettes in their application. Thus, end users can manage all 4D Write Pro properties, such as fonts, text alignment, bookmarks, table layout, and frames.

The main [4D Write Pro Interface documentation](https://doc.4d.com/4Dv20/4D/20/Entry-areas.300-6263967.en.html) can be found in the *4D Design Reference manual*.

You will find below the Table Wizard configuration documentation.

## Table Wizard

The Table Wizard is here to further simplify table creation based on database data using contexts, data sources, and formulas.

The Table Wizard, accessible to end-users, loads templates provided and configured by 4D developers. This enables developers to customize the template according to the specific use cases and business requirements of the users.

The Table Wizard comes with a default interface, which developers must configure to adapt its content to match the specific requirements of the application.

To implement the Table Wizard in your application, developers need to create and configure template files.

### WP Table Wizard default interface

You open the Table Wizard dialog from the "Insert table"  menu item in 4D Write Pro interface toolbar and sidebar.

![](../assets/en/WritePro/tablewizard-interface.png)

From this interface, you can select a template or a table from the first drop-down list and a theme from the second.

##### In Columns:

![](../assets/en/WritePro/columns-list.PNG) 

Depending on your selection of a template or a table, you can view the list of fields stored in the template ( Blob and object types are automatically excluded). You can then select columns to display in the table by checking the box in front of the field name and order them by moving and arranging the fields list.

##### In Rows:

![](../assets/en/WritePro/rows.PNG)

In the Table Wizard, you also can define the number of header rows and extra rows (0 to 5 each), set break rows above or below the data row, and choose to show/hide carry-over rows.

##### In Display:

![](../assets/en/WritePro/display2.PNG)

You adjust the zoom level according to your preference by selecting the desired option from a drop-down list, use radio buttons to display formulas or data for clear presentation or choose to display a horizontal ruler using a checkbox.

After finalizing your table creation and customization, you can click on the ![](../assets/en/WritePro/insert.PNG) button to add the table to your WP document.

Once the table has been integrated into the document, you can customize its style. The formatting tools of the toolbar and sidebar are still available.

:::note

Each time an option is changed, the WP table area is recalculated to accommodate the changes seamlessly.

:::

### WP Table Wizard template configuration

The templates configuration includes:

* Defining tables and fields as well as preparing formulas adapted to the application from the [template file](#template-files).
* Translating table, field, and formula names from the [translation file](#translation-files).
* Designing graphic styles and customized  themes from the [theme file](#theme-files).

These three types of files contribute to the configuration of the Table Wizard, and while each serves a distinct purpose, none of them are considered essential components.

#### Template files

The template file allows you to define the following:

- the formula that returns an entity selection used as the table's data source,
- the dataclass attributes that can be used as table columns,
- the formulas for break, carry-over or extra rows contextual menus.
 
The template file must be stored in a "[`Resources`](../project/architecture.md#resources)/4DWP_Wizard/Templates" folder within your project.

The template file in JSON format contains the following attributes:

|Attribute|Type|Mandatory|Description|
|:----|:----|:----|:----|
|tableDataSource|Text|x|Formula of table data source|
|columns|Collection|x|Collection of table columns|
|columns.check|Text|x|True when the column is already checked in the template editor. False when the column is unchecked in the template editor.|
|columns.header|Text|x|Label shown to the user|
|columns.source|Text|x|Formula|
|breaks|Collection| |Collection of break objects. The order of the breaks is important. It corresponds to the order in the document when the breaks are above the data lines.|
|breaks.label|Text|x|Label shown to the user|
|breaks.source|Text|x|Formula|
|breakFormulas|Collection| |Collection of formula objects applicable to break rows|
|breakFormulas.label|Text|x|Label shown to the user|
|breakFormulas.source|Text|x|Formula|
|bcorFormulas|Collection| |Collection of formula objects applicable to bottom carry over rows|
|bcorFormulas.label|Text|x|Label shown to the user|
|bcorFormulas.source|Text|x|Formula|
|extraFormulas|Collection| |Collection of formula objects applicable to extra rows|
|extraFormulas.label|Text|x|Label shown to the user|
|extraFormulas.source|Text|x|Formula|


##### Example

Here's a brief example of what your JSON file might look like:

```json
{
    "tableDataSource": "ds.People.all().orderBy(\"toCompany.name asc, continent asc, country asc, city asc\")",
    "columns": [{
            "check": true,
            "header": "Firstname",
            "source": "This.item.firstname"
        }, {
            "check": true,
            "header": "Lastname",
            "source": "This.item.lastname"
        }, {
            "check": true,
            "header": "Salary",
            "source": "String(This.item.salary;\"###,###.00\")"
        }
    ],
    "breaks": [{
            "label": "Company",
            "source": "This.item.toCompany.name"
        }
    ],
    "breakFormulas": [{
            "label": "Company",
            "source": "This.item.toCompany.name"
	}, {
            "label": "Sum of salaries",
            "source": "String(This.breakItems.sum(\"salary\"); \"###,###.00\")"
        }
    ],
    "bcorFormulas": [{
            "label": "Sum of salaries",
            "source": "String(This.tableData.sum(\"salary\"); \"###,###.00\")"
        }
    ],
    "extraFormulas": [{
            "label": "Sum of salaries",
            "source": "String(This.tableData.sum(\"salary\"); \"###,###.00\")"
        }
    ]
}

```

#### Translation files

Translation files translate the names of templates, themes, tables, fields, and formulas. These files are added to the "[`Resources`](../project/architecture.md#resources)/4DWP_Wizard/Translations" folder in your project.

Each translation file must be named with the corresponding language code (for example "en" for English or "fr" for French).

The translation file in JSON format contains the following attributes:

|Attribute|Type|Mandatory|Description|
|:----|:----|:----|:----|
|tables|Collection| |Collection of translated table objects|
|fields|Collection| |Collection of translated field objects|
|formulas|Collection| |Collection of translated formula objects|
|fileNames|Collection| |Collection of translated fileName objects (applicable to the theme and template name)|

Whitin each one of these attribute, the translation object includes the following attributes:

|Attribute|Type|Mandatory|Description|
|:----|:----|:----|:----|
|original|Text| |Original text intended for translation|
|translation|Text| |Translated version of the original text|

Defining these attributes within the translation object ensures proper organization and alignment between the source and translated content.

If the template name or the formula (break, carry-over row, or extra) exists in the translated file, its translation is applied in the Table Wizard. In addition, only the table defined within the translation file is displayed and translated.

The translation file serves an additional role when a user selects a table in the interface. It can filter the tables and fields proposed to the user. For example, to hide table IDs, this behavior is similar to the `SET TABLE TITLES` and `SET FIELD TITLES` commands.

##### Example

```json
{
    "tables": [{
            "original": "People",
            "translation": "Personne"
        }
    ],
    "fields": [{
            "original": "lastname",
            "translation": "Nom"
        }, {
            "original": "firstname",
            "translation": "Prénom"
        }, {
            "original": "salary",
            "translation": "Salaire"
        }, {
            "original": "company",
            "translation": "Société"
        }
    ],
    "formulas": [{
            "original": "Sum of salary",
            "translation": "Somme des salaires"
        }
    ]
}
    
```

#### Theme files

A list of themes is provided by default in the 4D Write Pro Interface component. However, you can create your own theme by placing it in the "[`Resources`](../project/architecture.md#resources)/4DWP_Wizard/Themes" folder within your project.

The theme file in JSON format contains the following attributes:

|Attribute|Type|Mandatory|Description|
|:----|:----|:----|:----|
|default|Object| |Object containing the default style applicable to all rows.|
|table|Object| |Object containing the style definition applicable to the table.|
|rows|Object| |Object containing the style definition applicable to all rows.|
|cells|Object| |Object containing the style definition applicable to all cells.|
|header1|Object| |Object containing the style definition applicable to the first header row.|
|header2|Object| |Object containing the style definition applicable to the second header row.|
|header3|Object| |Object containing the style definition applicable to the third header row.|
|header4|Object| |Object containing the style definition applicable to the fourth header row.|
|header5|Object| |Object containing the style definition applicable to the fifth header row.|
|headers|Object| |Object containing the style definition applicable to the header rows, if a specific header (like header1, header2...) is not defined.|
|data|Object| |Object containing the style definition applicable to the repeated data row.|
|break1|Object| |Object containing the style definition applicable to the first break row.|
|break2|Object| |Object containing the style definition applicable to the second break row.|
|break3|Object| |Object containing the style definition applicable to the third break row.|
|break4|Object| |Object containing the style definition applicable to the fourth break row.|
|break5|Object| |Object containing the style definition applicable to the fifth break row.|
|breaks|Object| |Object containing the style definition applicable to the break rows, if a specific break (like break1, break2...) is not defined.|
|bcor|Object| |Object containing the style definition applicable to the bottom carry-over row.|


For every attribute used in your JSON file (header, data, carry-over, summary, and extra rows), you can define the following WP attributes, mentionned with their [corresponding WP constant](https://doc.4d.com/4Dv20R2/4D/20-R2/Attributs-4D-Write-Pro.300-6390350.en.html):

|WP attributes|Corresponding WP constant|
|:----|:----|
| textAlign      | wk text align       |
| backgroundColor| wk background color |
| borderColor    | wk border color     |
| borderStyle    | wk border style     |
| borderWidth    | wk border width     |
| font           | wk font             |
| color          | wk font color       |
| fontFamily     | wk font family      |
| fontSize       | wk font size        |
| padding        | wk padding          |

##### Example

```json
{
    "default": {
           "backgroundColor": "#F0F0F0",
           "borderColor": "#101010",
           "borderStyle": 1,
           "borderWidth": "0.5pt",
           "font": "Times New Roman",
           "color": "#101010",
           "fontFamily": "Times New Roman",
           "fontSize": "7pt",
           "padding": "2pt"
    },
    "table": {
           "backgroundColor": "#E1EAF3"
    },
    "header1": {
           "textAlign": 2,
           "borderColor": "#41548F",
           "borderWidth": "1.5pt",
           "backgroundColor": "#979BA9",
           "color": "#F4F4FF",
           "font": "Times New Roman Bold"
    },
    "data": {
           "fontSize": "13pt",
           "textAlign": 0
    },
    "break1": {
           "textAlign": 2,
           "fontSize": "15pt"
    }
}
    
```

#### See also

[`4D Write Pro - Table Wizard (tutorial video)`](https://www.youtube.com/watch?v=2ChlTju-mtM)