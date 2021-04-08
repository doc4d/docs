---
id: breakList
title: Break List
---

The Break List is a page of the Runtime Explorer that enables you to manage the break points created in the Debugger Window or in the Method Editor.

To open the Break List page:

1. Choose Runtime Explorer from the Run menu

The Runtime Explorer can be displayed in a floating palette which always remains displayed in the front. To do this, hold down the Shift key while selecting Runtime Explorer from the Run menu. The Runtime Explorer is then available in all the 4D environments. For more information, please refer to the Design Reference manual.

![break-list-runtime-explorer](assets/en/Debugging/runtimeExplorer.png)

The Runtime Explorer window appears.

2. Click on the Break button to display the Break List:

![break-list-runtime-explorer](assets/en/Debugging/displayBreakList.png)

The Break List is composed of two columns:

* The left column displays the Enable/Disable status of the break point, followed by the name of the method and the line number where the break point has been set (using the Debugger window or the Method Editor).
* The right column displays the condition associated with the break point, if any.

Using this window, you can:

* Set a condition for a break point,
* Enable, disable or delete each break point,
* Open a Method Editor window displaying the method in which a break point is defined, by double-clicking on the break point.

However, you cannot add a new break point from this window. Break points can only be created from within the Debugger window or the Method Editor.

## Setting a Condition for a Break Point

To set a condifition for a break point, proceed as follows:
1. Click on the entry in the right column
2. Enter a 4D formula (expression or command call or project method) that returns a Boolean value.

> To remove a condition, delete its formula.

## Disabling/Enabling a Break Point

To disable or enable a break point:

1. Select the break point by clicking on it or by using the arrows to navigate through the list (if the current selected entry is not already in edit mode).
2. Choose Enable/Disable from the context menu.

> Each entry in the list may be disabled/enabled by clicking directly on the bullet (•). The bullet changes to a dash (–) when disabled.

## Deleting a Break Point

To delete a break point:

1. Select the break point by clicking on it or by using the arrows to navigate through the list (if the current selected entry is not already in edit mode).
2. Press the Delete or Backspace key or click on the Delete button below the list.

> To delete all the break points, click on the Delete All button (second button below the list) or choose Delete All in the context menu.