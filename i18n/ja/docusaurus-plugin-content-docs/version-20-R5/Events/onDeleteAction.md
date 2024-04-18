---
id: onDeleteAction
title: On Delete Action
---

| コード | 呼び出し元                                                                                           | 定義             |
| --- | ----------------------------------------------------------------------------------------------- | -------------- |
| 58  | [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | ユーザーが項目の削除を試みた |

## 説明

This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (**Delete** or **Backspace**) or selecting a menu item whose associated standard action is 'Clear' (such as the **Clear** command in the **Edit** menu).

4D はイベントの生成だけをおこなうことに留意してください。4D は項目を消去しません。 実際の削除処理や事前警告の表示などは開発者の責任です。
