---
id: menu
title: メニュー
---

## 連結メニューバー

メニューバーをフォームに割り当てると、アプリケーションモードでフォームが表示されたときにカレントメニューバーの右側に追加されます。

The selection of a menu command causes an `On Menu Selected` event to be sent to the form method; you can then use the `Menu selected` command to test the selected menu.

> フォームのメニューバーとカレントメニューバーが同じ場合、追加はされません。

フォームメニューバーは、入力および出力フォームの両方で動作します。

#### JSON 文法

| 名称      | データタイプ | とりうる値     |
| ------- | ------ | --------- |
| menuBar | string | メニューバーの名称 |
