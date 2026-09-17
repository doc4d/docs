---
id: structure-indexes
title: Creating and modifying indexes
---

You can associate indexes fields that you frequently use for searching and sorting. For example, you might index Last Name, Company name, or Product name if you plan to search for specific records or sort the records by these fields. You also use this property for fields that establish relations between tables. For more information about this, refer to *Creating and modifying relations*.

When an index is associated with a field, 4D creates an internal index table for the field. This table allows 4D to perform rapid searches and sorts on the field. When searching or sorting on an unindexed field, 4D moves through data sequentially, examining each record in order. Indexing allows 4D to search and sort without going through every record. 

You can index fields of the Alpha, Text, Date, Time, Boolean, Integer, Long integer, Integer 64 bits, Real, Float, Picture and Object type. As you add and delete records, 4D automatically updates its index table. If you create an index for a field that already exists, 4D automatically indexes the existing data. You can specify as many indexed fields as you want. Indexes are also rebuilt during specific operations such as conversion of earlier databases or data compacting.

Each index table can contain up to:

- 128 billion keys for Alpha, Text, and Float indexes  
- 256 billion keys for other index types (scalar data)

Do not index every field. An index increases the size of the database, using more space on disk. Using many indexes also increases the time needed to save a record since 4D updates the index table with each record validation.

Indexed fields are displayed in **bold** type in the Structure editor.


## Types of indexes

4D provides different types of indexes. Choosing between the different types is generally based on the result expected and the type of data present in the field. There are three main types of indexes:

- **Standard indexes:** These are single-field indexes used to accelerate standard database operations (searches and sorts). 4D lets you choose the internal architecture of this type of index (except for Object fields): B-Tree or Cluster B-Tree.
- **Composite indexes:** This index stores the combined values of two or more fields that are often searched for together, for example LastName+FirstName.
- **Keyword indexes:** These indexes are only available for Alpha, Text and Picture type fields. They are intended to facilitate fast searching inside text or, in the case of pictures, among the keywords associated with the pictures.

### Standard indexes

A standard index is intended to accelerate database operations (a standard index refers to a generic index as opposed to a keyword or composite index). 4D offers two types of architectures for standard indexes: B-Tree and Cluster B-Tree.

- **B-Tree:** Standard B-Tree type index. This multipurpose index type meets most indexing requirements.
- **Cluster B-Tree:** B-Tree type index using clusters. This architecture is more efficient when the index does not contain a large number of keys, i.e. when the same values occur frequently in the data.

:::note

A B-Tree index associated with a Text type field stores the first 1024 characters of the field (maximum). Therefore in this context, searches for strings containing more than 1024 characters will fail.

:::

When you choose the index architecture, 4D also provides the Automatic option. In this case, 4D automatically selects the architecture according to the type of data concerned.
The **Automatic** option is the only option available for Object type fields. In fact, in this case, all attribute paths are automatically indexed.

### Composite indexes

Composite indexes store the combined values of two or more fields for each entry. The classic example is a composite index based on the FirstName+LastName fields. Searching for “Peter Smith” will therefore be optimized compared with a standard search (searching for “Smith” then searching for “Peter”).

4D automatically takes advantage of composite indexes during queries and sorts. For example, if a composite index “City+ZipCode” exists, it will be used in the case of a query of the type “lastname=carter and city=new york and zipcode =102@”.

In the structure editor, composite indexes can only be created using the index creation dialog box. For a detailed description of this dialog box, refer to the “Creating an index” section below.

### Keywords index

You can use a specific type of index with Alpha, Text and Picture fields: a keyword index.

- When you associate this type of index with an Alpha or Text field, the text stored in the field will be indexed word by word. All the words will be indexed even if they have only 1 or 2 characters. This type of index will accelerate subsequent keyword searches among text fields in a dramatic manner.  
  It is possible to associate both a standard index and a keyword index with Alpha and Text fields (when stored in the records). 4D will use the appropriate index depending on the context.

- When you associate this type of index with a Picture field, searches among keywords associated with pictures (metadata) are greatly accelerated. Warning: Picture keyword indexes are exclusively based on metadata of the IPTC/Keywords type. These types of metadata are supported in particular by the TIFF and JPEG formats (note that BMP, PNG and GIF do not support them). Other types of metadata are not managed by indexing.  
  Keyword indexes for pictures are updated automatically by 4D each time the Picture field is saved (when a record is created or modified, when data is imported, and so on). Metadata of the IPTC/Keywords type are indexed automatically by 4D when they are found in the picture (you do not have to call the **SET PICTURE METADATA** command to include them in the index of the Picture field).

You can use the **DISTINCT VALUES** command to get the list of keywords contained in an keywords index.

You use picture or text keyword indexes through the **%** operator: this operator must be placed in the query or sort formulas in order to specifically use an index value. For example:

```4d
QUERY([PICTURES];[PICTURES]Photos %"cats")
// look for photos associated with the cats keyword
```

This works the same way for all the query and order by commands: **QUERY BY FORMULA**, **QUERY SELECTION**, **ORDER BY**, etc.
For more information about how the % operator works and about keyword searches, refer to *Comparison Operators* in the 4D Language Reference manual.

## Index List

The [picture here] button of the toolbar in the Structure editor displays the Index List window.  
This window displays the list of all the indexes of the structure, regardless of their type:

[picture here]

The Index List can be used to view the main properties of the indexes:

- **Type:** Index type. Each type of index (B-tree, Cluster B-tree, keyword) is depicted with a different icon.  
  It is possible to modify the index type from the Index explorer by clicking on the inverted triangle and selecting a value in the pop-up menu.  
- **Description:** Table and field(s) of index. For a composite index, this list contains all the fields of the index.  
- **Name:** Index name. This property is used in particular by the language commands. You can change or add an index name by double-clicking in this area.

The [picture here] button displays the index property dialog box.  
The [picture here] button deletes the selected index (a confirmation dialog box appears).  
This button can be used more particularly to delete composite indexes.  

Two additional commands are available in the menu associated with the tool button (enabled when an index is selected):

[picture here]

- **Edit:** Displays the properties of the selected index in the index property dialog box (see next paragraph).  
  This command has the same effect as double-clicking on a row of the list (except for in the name area).  
- **Rebuild:** Can be used to delete and rebuild the selected index.  
  A confirmation dialog box appears when you select this command.

## Creating an index

The way an index is created will depend on its type. In addition, you can choose to create an index directly or to use the index creation dialog box.

To create a **standard index** directly:

1. Select a field then choose a value from the “Index” menu of the **Inspector palette**. 
   **OR**  
   Right-click on the field then select a value from the **Index>** submenu of the context menu. 
	There are four options available (except for Object type fields):

	- **B-tree:** Creates a standard B-Tree type index. 
	- **Cluster B-tree:** Creates a B-Tree type index using clusters. 
	- **Automatic:** Lets 4D select the architecture depending on the type of data concerned. 
	- **None:** No index or removal of existing index.
		[picture here]

To create a **keyword index** directly:

1. Select an Alpha, Text or Picture type field then check the “Keyword Index” option in the **Inspector palette**. 
[picture here]

	**OR**  
	Right-click on a field then select **Keywords** from the **Index>** submenu of the context menu.

To create a composite index or any other type of index using the index creation dialog box:

1. Select the **New Index...** in the context menu of the table or select **Index** in the add objects menu of the Structure editor tool bar.  
   **OR**  
   Select several fields while holding down the Ctrl (Windows) or Command (OS X) button then right click on one of the fields and select **New Composite Index...** in the context menu.

	The index configuration dialog box then appears. It contains the following elements:

	[picture here]

	- **Table:** List of all the database tables. Choose the table to which the index will belong from this menu.  
	- **Name:** Index name entry area. This name is used by the 4D language commands.  
	- **Type:** Selection menu for type of index to be created.  
  If you keep the “Automatic” option, 4D will automatically choose the index type according to the contents of the field.  
	- **List of Fields:** This area is used to specify the field(s) associated with the index.  
  It can contain a field by default depending on the current selection in the editor.

To add a field to the index, click on the ![picture here] button.  
The list of fields of the selected table is displayed so that you can indicate the field to be added to the index.

- If you want to create a composite index, add each field to be included in the index successively.  
  Once the list is completed, you can reorder the fields using the arrow buttons or using drag and drop.  
- If you create a composite index based on primary key fields, make sure you put the fields in the same order in the primary key and in the index.  
- If you have chosen the “Keyword Index” type, only Alpha or Text fields can be selected.  
  Also in this case, you cannot include only one field in the index.

To delete a field from the index, select it in the list and click on the [picture here] button.
Once the index has been configured, click on **OK** to generate the index.

## Deleting an index in the Structure editor

You can delete indexes that are no longer useful at any time.  
This can be carried out directly in the Structure editor or using the List Index window. For more information about the List Index window, please refer to the “Index List” section above.

To delete a standard index:

1. Select the field associated with the index you want to delete, then choose the **None** option in the Index menu of the **Inspector palette**.  
   **OR**  
2. Right-click on the field associated with the index, then choose the **None** option from the **Index>** submenu of the context menu.

To delete a keyword index:

1. Select the field associated with the index you want to delete, then uncheck the “Keyword Index” option in the **Inspector palette**.  
   **OR**  
2. Right-click on the field associated with the index, then uncheck the **Keywords** option in the **Index>** submenu of the context menu.

The deletion (and viewing) of a composite index can only be carried out from the List Index window (using the ![picture here] button).

## Reindexing a field

You can reindex a field at any time; in other words, rebuild the index table(s) associated with it, in accordance with the data present.  
This can be useful in the case of application maintenance.  
Reindexing can be carried out using the **Rebuild** command in the Index List window.  

Note that modifying the data language (see [picture here]) or maintenance operations such as compacting (see *Compact page*) will also cause the indexes to be rebuilt.
