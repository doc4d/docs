---
id: print
title: 印刷
---

## 設定

フォーム毎に用紙設定をおこなうことができます。 この機能は、フォームエディターで印刷ページの境界を表示するのに便利です。

> **Compatibility:** Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands `Print settings to BLOB`/`BLOB to print settings` which are more powerful.

次の印刷設定が変更できます:

- 用紙サイズ
- 用紙の向き
- 拡大縮小

> 利用可能なオプションはシステムの設定により異なります。

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                                              |
| ----------- | ------ | ---------------------------------------------------------------------------------- |
| pageFormat  | object | 利用可能なプロパティ: paperName, paperWidth, paperHeight, orientation, scale |
| paperName   | string | "A4", "レター"...                     |
| paperWidth  | string | paperName という名前の用紙が見つからなかった場合に使用されます。 単位の明記が必要です: pt, in, mm, cm。  |
| paperHeight | string | paperName という名前の用紙が見つからなかった場合に使用されます。 単位の明記が必要です: pt, in, mm, cm。  |
| orientation | string | "landscape" (デフォルトは "portrait")                                 |
| scale       | number | 最小値: 0                                                             |

---
