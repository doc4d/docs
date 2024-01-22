---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| コード | 呼び出し元                                       | 定義                       |
| --- | ------------------------------------------- | ------------------------ |
| 47  | [Web Area](FormObjects/webArea_overview.md) | 新しい URL が Web エリアにロードされた |

## 説明

このイベントは、Webエリアに新しい URL のロードを開始した時に生成されます。 The `URL` variable associated with the Web area can be used to find out the URL being loaded.

> The URL being loaded is different from the [current URL](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (refer to the description of the `WA Get current URL` command).
