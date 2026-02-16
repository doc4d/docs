---
id: user-new
title: user WP
draft: true
---

to import

<!-- REF lists-WP.Desc -->

## Lists and mutlilevel lists

### Lists

4D Write Pro supports two main types of lists:

* unordered lists: where list items are marked with bullets, custom bullets, or images used as markers. 
* ordered lists: where list items are marked with numbers or letters

They can be created using: 
* the toolbar or sidebar of the [4D Write Pro interface](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
* the `listStyleType` or `listStyleImage` [standard actions](./standard-actions) , 
* or [programmatically](../commands-legacy/4d-write-pro-attributes.md#lists) using [WP SET ATTRIBUTE](../commands/wp-set-attributes.md). 

When a list is created using a standard action (`listStyleType` or `listStyleImage`) or the toolbar/sidebar, 4D Write Pro automatically inserts a margin before the text so that the marker is positioned inside it. The value of the inserted margin corresponds to the offset of the default tab (`wk tab default`). 

![](../../assets/en/WritePro/margin-bullets.png)

When the list is created using [the WP SET ATTRIBUTE command](../commands-legacy/4d-write-pro-attributes.md#lists), no specific margin is managed, by default the marker is added at the left boundary of the paragraph. The developer can add a custom margin if necessary.

:::info Related blog post

[4D Write Pro – Adding a margin automatically when bullets are set using standard actions](https://blog.4d.com/4d-write-pro-adding-a-margin-automatically-when-bullets-are-set-using-standard-actions)

:::
and the level are managed with (standard actions)

### Multi-level lists

4D Write Pro also supports multi-level lists:

Multi-level lists are based on [hierarchical paragraph style sheets](#hierarchical-paragraph-style-sheets), which define a root-level and one or more sub-levels. Each level represents a depth in the list (level 1, level 2, level 3, etc.), and the numbering restarts at each one of the sub-levels. Whenever you add or remove an elemnt of your multi-level list, the numbers are automatically adjusted.

Multi-level lists can be created by applying a hierarchical paragraph style sheet to a paragraph using [WP SET ATTRIBUTE](../commands/wp-set-attributes.md).

They can be managed using:

* paragraph [style sheet attributes](../commands/4d-write-pro-attributes.md#style-sheets) (such as `wk list level index`, `wk list level count`, and `wk list concat string format`)
* dedicated [standard actions](../user-legacy/standard-actions.md) for level management (`listLevelAppend`, `listLevelInc`, `listLevelDec`)
* dedicated standard action for numbering marker management (`listConcatString`, `listNumberFormat`).

:::info Related blog post

[4D Write Pro – Creating Multi-level Bullet or Numbered Lists Using Hierarchical Paragraph Style Sheets](https://blog.4d.com/4d-write-pro-creating-multi-level-bullet-or-numbered-lists-using-hierarchical-paragraph-style-sheets)

:::

<!-- END REF -->

<!-- REF hierarchical-paragraph.Desc -->

## Hierarchical paragraph style sheets

Hierarchical paragraph style sheets are used to create [multi-level lists](#multi-level-lists).

To create a hierarchical paragraph style sheet, use [WP New style sheet](../commands/wp-new-style-sheet.md).

Instead of defining each list level manually, you create a hierarchy of related paragraph style sheets: one **root-level** style sheet and one or more **sub-level** style sheets linked to it. Each level represents a depth in the list (level 1, level 2, level 3, etc.).

When created, hierarchical paragraph style sheets use predefined values:

* `wk margin left` = 0.75 cm × (number of previous levels)
* `wk list type` = `wk decimal`
* `wk name` is derived from the root style sheet name

  * Example:

    * Root level: `"MyList"`
    * First sub-level: `"MyList lvl 2"`
    * Second sub-level: `"MyList lvl 3"`

To define and manage the hierarchy, the paragraph style sheet object use the `wk list level index`, `wk root style`, `wk list level count`, `wk list concat string format` attributes.

### Example

For a three-level list:

* Root level → `wk list level index` = 1
* First sub-level → `wk list level index` = 2
* Second sub-level → `wk list level index` = 3
* `wk list level count` = 3 for all levels
* `wk list concat string format` = true for sub-levels

If the root style sheet is named `"MyList"`:

* `wk root style` for sub-levels = `"MyList"`
* Sub-level names = `"MyList lvl 2"` and `"MyList lvl 3"`


<!-- END REF -->

