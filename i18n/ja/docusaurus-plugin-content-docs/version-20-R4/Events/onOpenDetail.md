---
id: onOpenDetail
title: On Open Detail
---

| コード | 呼び出し元                                              | 定義                                        |
| --- | -------------------------------------------------- | ----------------------------------------- |
| 25  | Form - [List Box](FormObjects/listbox_overview.md) | 出力フォームまたはリストボックスに関連付けられた詳細フォームが開かれようとしている |

## 説明

The `On Open Detail` event can be used in the following contexts:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with **table forms**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).

### Displayed line number

The `Displayed line number` 4D command works with the `On Open Detail` form event. このコマンドは、レコードのリストまたはリストボックスの行が画面に表示されるときに処理されている行の番号を返します。
