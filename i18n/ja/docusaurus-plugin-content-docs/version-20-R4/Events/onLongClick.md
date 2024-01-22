---
id: onLongClick
title: On Long Click
---

| コード | 呼び出し元                                    | 定義                                |
| --- | ---------------------------------------- | --------------------------------- |
| 39  | [Button](FormObjects/button_overview.md) | ボタンがクリックされ、特定の時間以上マウスボタンが押され続けている |

## 説明

このイベントはボタンがクリックされ、一定時間以上マウスボタンが押され続けていると生成されます。 理論上、このイベントが生成されるためのクリック保持時間は、システムの環境設定に設定されたダブルクリックの間隔最大時間に等しくなります。

このイベントは、次のボタンスタイルで生成することができます:

- [Toolbar](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Rounded Bevel](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Textured](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Help](FormObjects/button_overview.md#help)
- [Circle](FormObjects/button_overview.md#circle)
- [Custom](FormObjects/button_overview.md#custom)

このイベントは一般的に、ロングクリック時にポップアップメニューを表示するために使用します。 The [`On Clicked`](onClicked.md) event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.

### 参照

[`On Alternative Click`](onAlternativeClick.md)
