---
id: onBoundVariableChange
title: On Bound Variable Change
---

| コード | 呼び出し元 | 定義                     |
| --- | ----- | ---------------------- |
| 54  | フォーム  | サブフォームにバインドされた変数が更新された |

## 説明

This event is generated in the context of the form method of a [subform](FormObjects/subform_overview.md) as soon as a value is assigned to the variable bound with the subform in the parent form (even if the same value is reassigned) and if the subform belongs to the current form page or to page 0.

Form more information, refer to the [Managing the bound variable](FormObjects/subform_overview.md#managing-the-bound-variable) section.
