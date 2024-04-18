---
id: propertiesFooters
title: フッター
---

## フッターを表示

This property is used to display or hide [list box column footers](listbox_overview.md#list-box-footers). 列ごとに 1つのフッターを表示できます。それぞれのフッターは個別に設定できます。

#### JSON 文法

| 名称          | データタイプ  | とりうる値       |
| ----------- | ------- | ----------- |
| showFooters | boolean | true, false |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 高さ

This property is used to set the row height for a list box footer in **pixels** or **text lines** (when displayed). 同じリストボックス内で異なる単位を使用することもできます:

- _Pixel_ - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. フォントが行の高さに対して大きい場合、テキストは切り取られます。 ピクチャーはフォーマットに基づき、切り取られるかリサイズされます。

- _Line_ - the height is calculated while taking into account the font size of the row concerned.
  - 複数の異なるサイズが設定されている場合、4D はもっとも大きなものを使用します。 たとえば、行に "Verdana 18", "Geneva 12" そして "Arial 9" が設定されている場合、4D は行の高さの決定に "Verdana 18" を使用します。 複数行の場合はこの高さの倍数が使用されます。
  - この計算にはピクチャーのサイズや、フォントに適用されるスタイルは考慮されません。
  - macOS 環境下では、選択されたフォントで使用できない文字をユーザーが入力した場合、行の高さが正しくなくなる可能性があります。 この場合には代理フォントが使用され、その結果サイズにばらつきが出る可能性があります。

> This property can also be set dynamically using the [LISTBOX SET FOOTERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html) command.

単位の変換: 単位を変更した場合、4D は自動で値を再計算し、結果をプロパティリストに表示します。 たとえば、使用されるフォントが "Lucida grande 24" で高さが "1 行" に設定されていれば "30 ピクセル" に、高さが "60 ピクセル" なら "2 行" になります。

単位の変更を繰り返すと、4D が自動で計算を行うため、最初の値とは結果が異なってしまうこともあります。 たとえば以下のようになります:

_(font Arial 18)_: 52 pixels -> 2 lines -> 40 pixels
_(font Arial 12)_: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels

#### JSON 例

```
 "List Box": {
  "type": "listbox",
  "showFooters": true,
  "footerHeight": "44px",  
  ...
  }
```

#### JSON 文法

| 名称           | データタイプ | とりうる値             |
| ------------ | ------ | ----------------- |
| footerHeight | string | 正の10進数 + px \| em |

#### 対象オブジェクト

[List Box](listbox_overview.md)

#### 参照

[Headers](properties_Headers.md) - [List box footers](listbox_overview.md#list-box-footers)
