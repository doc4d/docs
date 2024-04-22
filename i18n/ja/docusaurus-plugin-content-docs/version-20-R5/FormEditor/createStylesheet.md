---
id: stylesheets
title: スタイルシート
---

スタイルシートとは、フォームオブジェクトの属性 (テキスト属性など、提供されているほぼすべての属性) の組み合わせをまとめたものです。

アプリケーションのインターフェースを統一するほかにも、スタイルシートの利用には3つの利点があります:

- 開発時間の削減: オブジェクトのさまざまな属性を一括で設定できます。
- メンテナンスの容易化: スタイルシートは、それが使用されているすべてのオブジェクトの外観を一括で設定します。つまり、スタイルシートのフォントサイズを変更するだけで、その変更は同じスタイルシートを使用するすべてのオブジェクトに適用されます。
- マルチプラットフォーム開発のコントロール: macOS と Windows 両用のほか、macOS 専用、Windows 専用のスタイルシートを作成することができます。 スタイルシートが設定されていると、4Dは自動で適切なスタイルシートを使用します。

## スタイルシートの作成と編集

スタイルシートを作成するには、任意のテキストエディターを使い、".css" 拡張子をファイル名に追加し、プロジェクトの "/SOURCES" フォルダーに保存します。

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1. Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

![](../assets/en/FormEditor/stylesheets.png)

2. Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](../assets/en/FormEditor/createButton.png)

3. 既定のテキストエディターでスタイルシートが開かれます。

## スタイルシートファイル

4D は次の3種のスタイルシートファイルを受け付けます:

| スタイルシート                                                      | プラットフォーム                             |
| ------------------------------------------------------------ | ------------------------------------ |
| styleSheets.css                              | macOS と Windows 両用のデフォルトグローバルスタイルシート |
| styleSheets_mac.css     | macOS 専用の属性スタイル定義用                   |
| styleSheets_windows.css | Windows 専用の属性スタイル定義用                 |

これらのファイルはプロジェクトの "/SOURCES" フォルダーに格納されます。 They can also be accessed directly via the [CSS Preview](formEditor.md#css-preview) in the Form editor toobar.

## スタイルシートアーキテクチャー

4D フォームに適合するよう調整してあるものの、アプリケーションプロジェクトのスタイルシートは基本的に CSS2 のシンタックスと文法に沿っています。

スタイルシートのスタイル規則は二つの部分から構成されています:

- a _Selector_ - A selector defines where to apply the style. 4D では "オブジェクトタイプ", "オブジェクト名", "クラス", "すべてのオブジェクト", および "属性値" のセレクターが使えます。

- a _Declaration_ - The declaration defines the actual style to apply. 複数のまとまった宣言文は宣言ブロックを構成します。 CSS 宣言ブロック内の各文はセミコロン ";" で区切り、ブロック全体は中カッコ { } でくくります。

## スタイルシートセレクター

### オブジェクトタイプ

CSS の <strong x-id="1">要素セレクター</strong>と同様に、スタイルの適用対象をオブジェクトタイプで指定することができます。

まずオブジェクトタイプを指定した後で、中カッコ { } の中に適用するスタイルを宣言します。

> The object type corresponds to the JSON [type](FormObjects/properties_Object.md#type) property of form objects.

In the following example, all objects of the _button_ type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

複数のオブジェクトタイプに同じスタイルを適用するには、それらのオブジェクトタイプをカンマ "," 区切りで併記し、その後の中カッコ { } 内にスタイルを宣言します:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### オブジェクト名

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

シャープ記号 "#" の後にオブジェクト名を指定し、中カッコ { } の中に適用するスタイルを宣言します。

次の例では、"okButton" というオブジェクト名を持つすべてのオブジェクトについて、表示するフォントを Helvetica Neue に、フォントサイズを 20 ピクセルに指定します:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

### Class

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

ドット記号 "." の後にクラス名を指定し、中カッコ { } の中に適用するスタイルを宣言します。

In the following example, the text of all objects with the `okButtons` class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

さらに、特定のオブジェクトタイプに限定してスタイルを適用するには、そのオブジェクトタイプの後にドット "." 区切りでクラス名を指定し、その後の中カッコ { } 内にスタイルを宣言します:

```
text.center {
  text-align: center;
  stroke: red;
}
```

In the 4D form description, you associate a class name to an object using the `class` attribute. この属性には一つ以上のクラス名を指定することができます。複数の場合はクラス名を半角スペースで区切ります:

```
class: "okButtons important"       
```

### すべてのオブジェクト

Corresponding to the CSS **universal selector**, the "\*" character indicates that the following style will be applied to all objects on the form.

アスタリスク "\*" の後に、中カッコ { } の中に適用するスタイルを宣言します。

次の例では、すべてのオブジェクトの塗りカラーをグレーにします:

```
* {
  fill: gray;
}
```

### オブジェクト属性

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

対象とする属性を大カッコ [ ] 内で指定し、中カッコ { } の中に適用するスタイルを宣言します。

#### シンタックスの使い方

| シンタックス                                                                                   | 説明                                                                                                      |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [attribute]                          | matches objects with the `attribute`                                                                    |
| [attribute="value"]                  | matches objects with the `attribute` value containing exactly the specified "value"                     |
| [attribute~="value"] | matches objects with the `attribute` value containing the "value" among a space-separated list of words |
| [attribute\|="value"]                | matches objects with an `attribute` whose value starts with "value"                                     |

#### 例題

All objects with the `borderStyle` attribute will have purple lines:

```
[borderStyle]
{
     stroke: purple;
}
```

テキストタイプかつ、タイトルプロパティ (text属性) の値が "Hello" のオブジェクトの文字色を青に指定します:

```
text[text=Hello]
{
     stroke: blue;
}
```

タイトルプロパティ (text属性) の値が "Hello" を含むオブジェクトの描画色を青に指定します:

```
[text~=Hello]
{
     stroke: blue;
}

```

テキストタイプかつ、タイトルプロパティ (text属性) の値が "Hello" で始まるオブジェクトの文字色を黄色に指定します:

```
text[text|=Hello]
{
     stroke: yellow;


}
```

## スタイルシート宣言

### メディアクエリ

メディアクエリは、アプリケーションにカラースキームを適用するのに利用します。

A media query is composed of a media feature and a value (e.g., `\<media feature>:\<value>` ).

使用可能なメディア特性:

- `prefers-color-scheme`

使用可能なメディア特性の値:

- **light**<br/>For using a light scheme
- **dark**<br/>For using a dark scheme

> カラースキームは macOS でのみサポートされています。

##### 例題

ライトモード (デフォルト) およびダークモードにおける、テキストとテキスト背景の色指定を CSS によっておこないます:

```
@media (prefers-color-scheme: light) {
 .textScheme {
   fill: LightGrey;
   stroke: Black;
  }
}

@media (prefers-color-scheme: dark) {
  .textScheme {
    fill: DarkSlateGray;
    stroke: LightGrey;
  }
}
```

### オブジェクト属性

多くのフォームオブジェクト属性をスタイルシートによって指定することができますが、次の属性は除外されます:

- `method`
- `型`
- `クラス`
- `イベント`
- `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (list type)

Form object attributes can be declared with their [JSON name](FormObjects/properties_Reference.md) as CSS attributes (not including object types, methods, events, and lists).

#### 属性マッピング

次の属性については、4D の名称または CSS の名称を使用することができます:

| 4D               | CSS                |
| ---------------- | ------------------ |
| `borderStyle`    | `border-style`     |
| `fill`           | `background-color` |
| `fontFamily`     | `font-family`      |
| `fontSize`       | `font-size`        |
| `fontStyle`      | `font-style`       |
| `fontWeight`     | `font-weight`      |
| `stroke`         | `color`            |
| `textAlign`      | `text-align`       |
| `textDecoration` | `text-decoration`  |
| `verticalAlign`  | `vertical-align`   |

> 4D-specific values (_e.g._, `sunken`) are not supported when using CSS attribute names.

#### 特殊な属性値

- For `icon`, `picture`, and `customBackgroundPicture` attributes that support a path to an image, the syntax is:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* 絶対パス */
icon: url("edit.png"); /* フォームファイルを基準とした相対パス */
```

- For `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` and `verticalLineStroke`, three syntaxes are supported:

  - CSS color name: `fill: red;`
  - Hexa value: `fill: #FF0000;`
  - the `rgb()` function: `fill:rgb(255,0,0)`

- CSS では禁じられている文字を使用している文字列については、その文字列を単一引用符または二重引用符でくくることができます。 例:
  - a xliff reference: `tooltip: ":xliff:CommonMenuFile";`
  - a datasource with a field expression: `dataSource: "[Table_1:1]ID:1";`

## 優先順位

4D プロジェクト内でスタイルが競合する場合には、スタイルシートよりもフォームの定義が優先されます。

### JSON vs スタイルシート

フォームの JSON式記述とスタイルシートの両方において属性が定義されている場合、4D は JSON ファイルの値を採用します。

To override this behavior, the style value must be followed with an `!important` declaration.

**Example 1:**

| JSON 式記述            | スタイルシート       | 4D の表示     |
| ------------------- | ------------- | ---------- |
| `"text": "Button",` | `text: Edit;` | `"Button"` |

**Example 2:**

| JSON 式記述            | スタイルシート                  | 4D の表示   |
| ------------------- | ------------------------ | -------- |
| `"text": "Button",` | `text: Edit !important;` | `"Edit"` |

### 複数スタイルシート

ランタイムにおいて複数のスタイルシートが存在する場合、それらの優先順位は次のように決まります:

1. The 4D form will first load the default CSS file `/SOURCES/styleSheets.css`.
2. It will then load the CSS file for the current platform `/SOURCES/styleSheets_mac.css` or `/SOURCES/styleSheets_windows.css`.
3. その後、JSON フォーム内に CSS ファイルが定義されていれば、それを読み込みます:

- 両プラットフォーム用のファイル:

```
"css": "<path>" 
```

- または、両プラットフォーム用に複数のファイル:

```
"css": [
     "<path1>",
     "<path2>" 
      ],
```

- または、プラットフォームごとのファイルリスト:

```
 "css": [
        {"path": "<path>", "media": "mac"},
        {"path": "<path>", "media": "windows"},
    ],
```

> ファイルパスは相対パスと絶対パスが使えます。
>
> - 相対パスの基準は JSON フォームファイルです。
> - セキュリティのため、絶対パスとして使用できるのはファイルシステムパスに限られます。 (_e.g._, "/RESOURCES", "/DATA")

## 参照

See the [**CSS for 4D Forms**](https://www.youtube.com/watch?v=3Hk4FUQENyQ) video presentation.
