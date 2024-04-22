---
id: date
title: 日付
---

日付フィールド、変数、式として認識できる範囲は、100/1/1 から 32,767/12/31 までです。(日本語版の 4D を使用した場合、日付の順序は年/月/日の順になります。)

C_DATE によって宣言された日付は 32767年までの範囲に対応していますが、システムを経由する処理によっては上限にさらなる制限が課せられます。

**Note:** In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.

## 日付リテラル

日付リテラル定数は、エクスクラメーションマークで囲んで表します (! ... !)。 日付は ISOフォーマット (!YYYY-MM-DD!) を使って記述します。 下記に、日付定数の例を示します:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Tip:** The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter.

**注:**

- 互換性の理由から、4D は二桁の年次の入力を受け付けます。 A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.
- "地域特有のシステム設定を使う" オプション (<a href="https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575690.ja.html">メソッドページ</a> 参照) にチェックがされている場合、システムで定義されている日付フォーマットを使用する必要があります。 一般的に、US環境においては、日付は月/日/年の形式で入力され、値はスラッシュ "/" で区切られます。

## 日付演算子

| 演算    | シンタックス        | 戻り値     | 式                           | 値            |
| ----- | ------------- | ------- | --------------------------- | ------------ |
| 日付の差  | Date – Date   | Number  | !2017-01-20! - !2017-01-01! | 19           |
| 日付の加算 | Date + Number | 日付      | !2017-01-20! + 9            | !2017-01-29! |
| 日付の減算 | Date – Number | 日付      | !2017-01-20! - 9            | !2017-01-11! |
| 等しい   | Date = Date   | Boolean | !2017-01-20! = !2017-01-01! | true         |

```
	||	||!2017-01-20! = !2017-01-01!	|False|
```

|Inequality	|Date # Date	|Boolean	|!2017-01-20! # !2017-01-01!	|True|
||||!2017-01-20! # !2017-01-20!	|False|
|Greater than	|Date > Date	|Boolean	|!2017-01-20! > !2017-01-01!	|True|
||||!2017-01-20! > !2017-01-20!	|False|
|Less than	|Date < Date	|Boolean	|!2017-01-01! < !2017-01-20!	|True|
||||!2017-01-20! < !2017-01-20!	|False|
|Greater than or equal to	|Date >= Date	|Boolean	|!2017-01-20! >=!2017-01-01!	|True|
||||!2017-01-01!>=!2017-01-20!	|False|
|Less than or equal to	|Date <= Date	|Boolean	|!2017-01-01! <= !2017-01-20!|	True|
||||	!2017-01-20! <= !2017-01-01!|	False|
