---
id: function-tag-dropdown
title: Code editor navigation dropdown
---

The code editor offers a navigation dropdown along with a marker feature to help you organize your code and navigate more easily inside your classes and methods:

![dropdown-list](assets/en/code-editor/dropdown-list.png)

## Dropdown contents

Depending on whether you're working with a class or a method, the information displayed in the dropdown box varies:

* Method:
  * If the method has a #DECLARE line, the first item in the dropdown list is *declare*
  * Tags are displayed in their appearing order inside the method

* Class: 
  * If the class has a constructor, the first item in the dropdown list will be *constructor*
  * Tags and functions are displayed in their appearing order inside the class

To display the elements of a method or class in alphabetical order, **right-click** the dropdown tool, or press **Cmd (or Alt) + click**.

> Tags inside functions will move with their parent items.

When there is no declaration/constructor and no tags inside a method or class, the dropdown displays "No tag".

Each item in the list has a corresponding icon:

|Icon|Item| 
|---|---|
|![constructor-icon](assets/en/code-editor/constructor.png)|Class constructor or method declaration| 
|![computed-attribute-icon](assets/en/code-editor/computed-attribute.png)|Computed attribute (get, set, orderBy and query)| 
|![function-icon](assets/en/code-editor/function.png)|Class function| 
|![mark-tag-icon](assets/en/code-editor/mark-tag.png)|MARK: tag| 
|![todo-tag-icon](assets/en/code-editor/todo-tag.png)|TODO: tag| 
|![fixme-icon](assets/en/code-editor/fixme-tag.png)|FIXME: tag| 

## Adding tags

There are three tags available: 
* MARK:
* FIXME:
* TODO:

You declare them by adding comments as follows:

```4d 
// FIXME: Fix following items
```

This will add the tags to the dropdown list.

Adding a hyphen after the `MARK:` tag draws a separating line in the code editor and dropdown menu. So writing this:

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-editor.png)

Results in this:

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-dropdown.png)





