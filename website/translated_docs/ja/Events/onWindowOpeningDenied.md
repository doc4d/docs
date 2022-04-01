---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| コード | 呼び出し元                                     | 定義                  |
| --- | ----------------------------------------- | ------------------- |
| 53  | [Webエリア](FormObjects/webArea_overview.md) | ポップアップウィンドウがブロックされた |

<details><summary>履歴</summary>
| バージョン  | 内容                |
| ------ | ----------------- |
| v19 R5 | Triggered on drop |
</details>

## 説明

このイベントは、Webエリアによりポップアップウィンドウがブロックされると生成されます。 4D Webエリアはポップアップウィンドウを許可しません。

`WA Get last filtered URL` コマンドコマンドを使用してブロックされた URL を知ることができます。

This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system [engines](properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](FormObjects/webArea_Overview.md#user-interface) option is also enabled for the area. You can accept the drop by calling:

```4d
<code>WA Get last filtered URL</code> コマンドコマンドを使用してブロックされた URL を知ることができます。 

```
 コマンドコマンドを使用してブロックされた URL を知ることができます。 

</code>


### 参照
[`On Open External Link`](onOpenExternalLink.md)