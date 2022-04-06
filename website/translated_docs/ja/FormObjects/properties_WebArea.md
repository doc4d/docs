---
id: propertiesWebArea
title: Webエリア
---

---
## 4Dメソッドコールを許可

Webエリアで実行される JavaScripe コードから 4Dメソッドを呼び出して、戻り値を取得することができます。 4Dメソッドを Webエリアから呼び出せるようにするには、プロパティリストの "4Dメソッドコールを許可" にチェックをする必要があります。

> この機能は Webエリアが [埋め込みWebレンダリングエンジンを使用](#埋め込みwebレンダリングエンジンを使用) している場合に限り、使用可能です。

このプロパティがチェックされている場合、特別な JavaScript オブジェクト `$4d` が Webエリア内にインスタンス化され、これを使用して[4Dプロジェクトメソッドの呼び出しを管理](webArea_overview.md#4dオブジェクトの使用) できるようになります。



#### JSON 文法

| 名称                   | データタイプ | とりうる値                 |
| -------------------- | ------ | --------------------- |
| methodsAccessibility | string | "none" (デフォルト), "all" |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)


---
## 進捗状況変数

倍長整数型変数の名前です。 この変数には 0 から 100 までの値が格納され、この数値は Webエリアに表示されるページのロードされたパーセンテージを表します。 この変数は 4D が自動で更新します。手動で変更することはできません。

> As of 4D v19 R5, this variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

#### JSON 文法

| 名称             | データタイプ | とりうる値      |
| -------------- | ------ | ---------- |
| progressSource | string | 倍長整数型変数の名前 |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)




---
## URL

文字列型の変数で、Webエリアにロードされた URL またはロード中の URL が格納されます。 変数と Webエリア間の連携は双方向でおこなわれます。

*   ユーザーが新しい URL を変数に割り当てると、その URL は自動で Webエリアにロードされます。
*   Webエリアでブラウズされると、自動で変数の内容が更新されます。

このエリアは Webブラウザーのアドレスバーのように機能します。 Webエリアの上側にテキストエリアを置いて、内容を表示させることができます。

### URL変数と WA OPEN URL コマンド

URL変数は [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドと同じ効果をもたらします。 しかしながら、以下の違いに注意してください。
- ドキュメントにアクセスする場合、この変数は RFC準拠 ("file://c:/My%20Doc") な URL のみを受け付け、システムパス名 ("c:\MyDoc") は受け付けません。 [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドは両方の記法を受け付けます。
- URL変数が空の文字列の場合、Webエリアは URL をロードしません。 Webエリアがフォーム上で表示されていない場合 (フォームの別ページに Webエリアがある場合等)、[WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドを実行しても効果はありません。
- [WA SET PAGE CONTENT](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.ja.html): このコマンドを使用する場合、([WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.ja.html) コマンドを呼び出すかあるいはエリアに割り当てられた URL変数への代入を通して) 少なくとも既に 1ページがエリア内に読み込まれている必要があります。
- URL変数がプロトコル (http, mailto, file など) を含まない場合、Webエリアは "http://" を付加します。 [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドはこれを付加しません。

#### JSON 文法

| 名称        | データタイプ | とりうる値 |
| --------- | ------ | ----- |
| urlSource | string | URL   |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)






---
## 埋め込みWebレンダリングエンジンを使用

このオプションを使用して、Webエリアで使用する描画エンジンを 2つのうちから選択することができます:

*   **チェックなし** - `JSON値: system` (デフォルト): この場合、4Dはシステムの最適なエンジンを使用します。 この結果、HTML5 や JavaScript の最新 Web描画エンジンを自動的に利用できることになります。 However, you may notice some rendering differences between platforms. On Windows, 4D uses Microsoft Edge WebView2. macOS では、カレントバージョンの WebKit (Safari) です。

> On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel.

*   **checked** - `JSON value: embedded`: In this case, 4D uses the Chromium Embedded Framework (CEF). 埋め込みWebレンダリングエンジンを使用すると、Webエリアの描画とその動作が (ピクセル単位での若干の相違やネットワーク実装に関連する違いを除き) プラットフォームに関わらず同じになります。 When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are regularly provided through 4D.

CEFエンジンには以下のような制約があります:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) or one assignment to the URL variable associated to the area.

#### JSON 文法

| 名称        | データタイプ | とりうる値                |
| --------- | ------ | -------------------- |
| webEngine | string | "embedded", "system" |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)
