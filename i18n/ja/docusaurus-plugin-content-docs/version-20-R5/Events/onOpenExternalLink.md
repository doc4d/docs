---
id: onOpenExternalLink
title: On Open External Link
---

| コード | 呼び出し元                                       | 定義                |
| --- | ------------------------------------------- | ----------------- |
| 52  | [Web Area](FormObjects/webArea_overview.md) | 外部URL がブラウザーで開かれた |

## 説明

This event is generated when the loading of a URL was blocked by the Web area and the URL was opened with the current system browser, because of a filter set up via the `WA SET EXTERNAL LINKS FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.

### 参照

[`On URL Filtering`](onUrlFiltering.md)
