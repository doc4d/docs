---
id: find-in-design
title: Find in design
---

For the complete documentation of the "Find in design" dialog box, please refer to [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.2/Searching-and-replacing-in-the-Design.200-6750077.en.html).


## Find in components

When your current project references [editable components](../Extensions/develop-components.md#editing-components), you can designate one or all your components as a target for the search.

By default, a search is executed in the host code only. To modify the default target for a search, open the search options and deploy the **in** menu: 

![](../assets/en/Project/find-components.png)

:::note

When no searchable component is found, only the project name is displayed (no menu is available).   

:::

You can select as target:

- the **host project** (default option): the search will only be executed within the host project code and forms, excluding components.
- the **host project and all its components**: the search will be executed in the host project and in all the loaded components.
- a **specific component**, among the list of all searchable components: the search will be restricted to this component only, excluding the host and other components.


### Results window

The Results window lists all elements found which match the search criteria set using different types of searches:



