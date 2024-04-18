---
id: onPageChange
title: On Page Change
---

| コード | 呼び出し元 | 定義                  |
| --- | ----- | ------------------- |
| 56  | フォーム  | フォーム中のカレントページが変更された |

## 説明

このイベントは、フォームレベルでのみ利用できます (フォームメソッド内でのみ使用します)。 It is generated each time the current page of the form changes (following a call to the `FORM GOTO PAGE` command or a standard navigation action).

Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including [Web areas](FormObjects/webArea_overview.md).

> The only exception is 4D View Pro areas, for which you need to call the [On VP Ready](onVpReady.md) specific event.

The `On Page Change` event is useful for executing code that requires all objects to be initialized beforehand. また、フォームのページ1 がロードされたときにすべてのコードを実行するのではなく、特定のページが開かれたときにのみ (検索などの) コードを実行するようにして、アプリケーションを最適化できます。 ユーザーがそのページを開かなければ、コードは実行されません。
