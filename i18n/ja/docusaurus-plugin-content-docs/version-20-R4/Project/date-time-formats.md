---
id: date-time-formats
title: 日付と時間のフォーマット
---



アプリケーション、プラットフォーム、またはインターフェースの要件に従って、4Dプロジェクトにおける日付や時間の表示形式を管理しなくてはならない場合があります。

4Dには、デフォルトの形式に加えて、カスタマイズされた日付と時間のフォーマットを作成および適用するために使用できる包括的なパターンのリストが含まれています。 カスタマイズされたフォーマットパターンは、以下の機能でサポートされています:

- [`String`](https://doc.4d.com/4dv20R/help/command/ja/page10.html) コマンド
- [`OBJECT SET FORMAT`](https://doc.4d.com/4dv20R/help/command/ja/page236.html) および [`OBJECT Get format`](https://doc.4d.com/4dv20R/help/command/ja/page894.html) コマンド
- プロパティリストまたは [`dateFormat`](../FormObjects/properties_Display.md/#日付フォーマット) および [`timeFormat`](../FormObjects/properties_Display.md/#時間フォーマット) のJSONプロパティから利用可能な、フォームオブジェクトの "日付/時間フォーマット" プロパティ


## パターンリスト

以下の表は、日付/時間フォーマットでサポートされているすべてのパターンの一覧です (一部の出力はローカライズされており、システムパラメーターに依存します)。

| 記号  | 意味                                            | パターン          | 出力例                  |
| --- | --------------------------------------------- | ------------- | -------------------- |
| G   | 元号                                            | G, GG, GGG    | 西暦                   |
|     |                                               | GGGG          | 西暦                   |
|     |                                               | GGGGG         | A                    |
| y   | 年                                             | yy            | 96                   |
|     |                                               | y または yyyy    | 1996                 |
| Y   | ウィークカレンダーの年                                   | Y             | 1997                 |
| u   | 拡張年                                           | u             | 4601                 |
| Q   | 四半期                                           | Q             | 2                    |
|     |                                               | QQ            | 02                   |
|     |                                               | QQQ           | Q2                   |
|     |                                               | QQQQ          | 第2四半期                |
|     |                                               | QQQQQ         | 2                    |
| q   | 四半期 (単独)                                      | q             | 2                    |
|     |                                               | qq            | 02                   |
|     |                                               | qqq           | Q2                   |
|     |                                               | qqqq          | 第2四半期                |
|     |                                               | qqqqq         | 2                    |
| M   | 月                                             | M             | 9                    |
|     |                                               | MM            | 09                   |
|     |                                               | MMM           | 9月                   |
|     |                                               | MMMM          | 9月                   |
|     |                                               | MMMMM         | S                    |
| L   | 月 (単独)                                        | L             | 9                    |
|     |                                               | LL            | 09                   |
|     |                                               | LLL           | 9月                   |
|     |                                               | LLLL          | 9月                   |
|     |                                               | LLLLL         | S                    |
| w   | week of year                                  | w             | 27                   |
|     |                                               | ww            | 27                   |
| d   | day in month                                  | d             | 2                    |
|     |                                               | dd            | 2                    |
| D   | day of year                                   | D             | 189                  |
| E   | day of week                                   | E, EE, or EEE | Tue                  |
|     |                                               | EEEE          | Tuesday              |
|     |                                               | EEEEE         | T                    |
|     |                                               | EEEEEE        | Tu                   |
| e   | local day of week                             | e             | 2                    |
|     |                                               | ee            | 02                   |
|     |                                               | eee           | Tue                  |
|     |                                               | eeee          | Tuesday              |
|     |                                               | eeeee         | T                    |
|     |                                               | eeeeee        | Tu                   |
| c   | stand-alone local day of week                 | c or cc       | 2                    |
|     |                                               | ccc           | Tue                  |
|     |                                               | cccc          | Tuesday              |
|     |                                               | ccccc         | T                    |
|     |                                               | cccccc        | Tu                   |
| a   | AM or PM                                      | a, aa, or aaa | PM [abbrev]          |
|     |                                               | aaaa          | PM [wide]            |
|     |                                               | aaaaa         | p                    |
| b   | AM, PM, noon, midnight                        | b, bb, or bbb | mid.                 |
|     |                                               | bbbb          | midnight             |
|     |                                               | bbbbb         | md                   |
| B   | flexible day periods                          | B, BB, or BBB | at night [abbrev]    |
|     |                                               | BBBB          | at night [wide]      |
|     |                                               | BBBBB         | at night [narrow]    |
| h   | hour in am/pm (1~12)                          | h             | 7                    |
|     |                                               | hh            | 07                   |
| H   | hour in day (0~23)                            | H             | 0                    |
|     |                                               | HH            | 00                   |
| K   | hour in am/pm (0~11)                          | K             | 0                    |
|     |                                               | KK            | 00                   |
| k   | hour in day (1~24)                            | k             | 24                   |
|     |                                               | kk            | 24                   |
| m   | minute in hour                                | m             | 4                    |
|     |                                               | mm            | 04                   |
| s   | second in minute                              | s             | 5                    |
|     |                                               | ss            | 05                   |
| X   | Time Zone: ISO8601 basic hm?, with Z for 0    | X             | -08, +0530, Z        |
|     | Time Zone: ISO8601 basic hm, with Z           | XX            | -0800, Z             |
|     | Time Zone: ISO8601 extended hm, with Z        | XXX           | -08:00, Z            |
|     | Time Zone: ISO8601 basic hms?, with Z         | XXXX          | -0800, -075258, Z    |
|     | Time Zone: ISO8601 extended hms?, with Z      | XXXXX         | -08:00, -07:52:58, Z |
| ○   | Time Zone: ISO8601 basic hm?, without Z for 0 | ○             | -08, +0530           |
|     | Time Zone: ISO8601 basic hm, without Z        | xx            | -800                 |
|     | Time Zone: ISO8601 extended hm, without Z     | xxx           | -08:00               |
|     | Time Zone: ISO8601 basic hms?, without Z      | xxxx          | -0800, -075258       |
|     | Time Zone: ISO8601 extended hms?, without Z   | xxxxx         | -08:00, -07:52:58    |
| O   | Time Zone: short localized GMT                | O             | GMT-8                |
|     | Time Zone: long localized GMT (=ZZZZ)         | OOOO          | GMT-08:00            |
| z   | Time Zone: specific non-location              | z, zz, or zzz | -0800                |
|     |                                               | zzzz          | GMT-08:00            |
|     |                                               | zzzzz         | -08:00, -07:52:58, Z |
|     |                                               |               |                      |
| '   | escape for text                               | '             | '                    |
| ' ' | two single quotes produce one                 | ' '           | ' '                  |



## パターンについて


### `y` vs `Y`

`y` は暦年、`Y` は週番号に基づく年です。 たとえば、2010年の1月の最初の日が週番号1ではない場合、y = 2010 かつ Y = 2009 となりえます (2010年の最初の週が始まる日まで)。(週番号の数え方にはいくつかの方式があります)

### `L` (単独) vs `M`

ロシア語、スロバキア語など一部の言語では、単独で使用される月名と日付内の月名が異なります。 たとえば、"2010年1月10日" と "1月の約束" の "1月" が同じ綴りで表現されません。

### `e` vs `c`

`L` と `M` の場合と同様に、`c` は単独で使用される曜日 ("毎週火曜日") に使用するのに対し、`e` は日付内の曜日 ("1951年1月15日火曜日") に使われます。

### `E` vs `e`

`e` はシステムの設定に基づいています。もし週が水曜日から始まるとシステムで定義されている場合、水曜日は数値の "1" (または "0") を持つことになりますが、`E` は常に同じ値を返します (1〜7 または 0〜6)。

### 先頭のゼロ

一般的に、フォーマット文字列の文字数が数値の桁数よりも多い場合、先頭にゼロが追加されます。 例: "yyyyyy" は "001996" と表示されます。

### ローカライズされた出力

一部の出力 ("正午"、"火曜日" など) は、地域設定に応じてローカライズされます。

たとえば、時間 `13:25:34` の場合、米国のシステムでは *in the afternoon*、フランスのシステムでは *après-midi*、日本のシステムでは *昼* と表示されます。


### 追加の文字

フォーマット文字列には、フォーマット文字として解釈されない文字を含めることができます。追加の文字が "a" から "z" または "A" から "Z" の間の文字の場合、それらは一重引用符で囲む必要があります。

例:

"15:30:00" をパターン "HH 'hours and' mm 'minutes'" で表現すると、"15 hours and 30 minutes" と出力されます。

### 先頭と末尾のスペース

パターンの先頭と末尾のスペースは、出力の際に自動でトリミングされます。 結果の文字列の先頭や末尾にスペースを入れるには、一重引用符で囲む必要があります。

例:

" HH : mm : ss " ---> "09 : 10 : 25" <br/> "' 'HH : mm : ss' '" ---> " 09 : 10 : 25 "


## 例題

| 日付/時間      | パターン         | 戻り値              | コメント      |
| ---------- | ------------ | ---------------- | --------- |
| 2000/06/15 | "QQQQ"       | "第2四半期"          | ローカライズ済み  |
| 2001/03/17 | "D"          | "76"             | 年始から 76日目 |
| 1954/03/17 | "w"          | "12"             | 年の 12週目   |
| 1954/03/17 | "eeee"       | "水曜日"            | ローカライズ済み  |
| 15:00:00   | "a"          | "午後"             |           |
| 18:00:00   | "a K"        | "午後 6"           |           |
| 13:30:15   | "aa hh:mm O" | "午後 01:30 GMT+9" |           |



## 参照

カスタムの日付と時刻のフォーマットに関する詳細については、[このブログ記事](https://blog.4d.com/ja/tailored-customization-for-dates-and-times) を参照ください。
