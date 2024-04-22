---
id: quick-tour
title: 概要
sidebar_label: 概要
---

4D ランゲージを使用して "Hello, world!" メッセージを表示するには複数の方法があります。 一番簡単な方法はおそらく、プロジェクトメソッドにコードを1行、次のように書くやり方です:

```4d
ALERT("Hello, World!")
```

このコードは、 "Hello, World!" メッセージが表示された、OK ボタンの付いたプラットフォームの標準的なアラートダイアログボックスを開きます。 コードを実行するには、コードエディターの左上にある実行ボタンをクリックします:

![hello-world](../assets/en/Concepts/helloworld.png)

あるいは、フォーム内のボタンにこのコードを付けた場合、フォームを実行した状態でボタンをクリックすると、その都度アラートメッセージが表示されます。 いずれの方法でも、前述の1行のコードを実行するだけで目的達成です！

## 値の代入

変数、フィールド、配列要素などを対象に、データを格納したり、格納したデータを別の対象にコピーしたりすることができます。 変数にデータを格納することを、変数にデータを代入すると言い、代入演算子 (:=) を使っておこないます。 代入演算子はフィールドや配列要素に対してデータを代入する場合にも使います。

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

代入演算 (:=) は必ず他の演算と区別しなければなりません。 代入演算子は、被演算子を組み合わせて新しい一つのものにするのではなく、演算子の右側の式の値を左側の変数やフィールドにコピーします。

**Important:** Do NOT confuse the assignment operator := with the equality comparison operator =. (=) とは異なる代入演算子が採用されたのは意図的なことで、他のプログラミング言語で (==) や (===) の使用によって度々起こる間違いを避けるためです。 このような間違いはコンパイラーにとっても発見しにくく、時間を消耗するトラブルシューティングのもとです。

## 変数

4D ランゲージは強い型付けの言語ですが、多くの場合に柔軟性も発揮します。 You create a typed variable using the `var` keyword. たとえば、日付型の変数を作成するには、次のように書くことができます:

```4d
var MyDate : Date
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs.Person 
// Person ユーザークラスの変数
```

推奨はされませんが、変数を使用することで宣言することもでき、必ずしも正式に宣言する必要はありません。 たとえば、今日の日付に 30日足した値を格納した変数が欲しい場合、次のように書くことができます:

```4d
MyOtherDate:=Current date+30
```

上のコードは "MyOtherDate に、現在の日付に 30日を加算した値を代入します" という意味です。 この 1行で変数が宣言され、変数に (仮の) データ型とデータが割り当てられます。 このように代入によって宣言された変数はデータ型が規定されていないと解釈され、コードの違う行では別のデータ型の値を代入することもでき、その際にはデータ型を動的に変化させます。 A variable typed with `var` cannot change the type. In [compiled mode](interpreted.md) however, the type can never be changed, regardless of how the variable was declared.

## コマンド

4D コマンドとは、処理を実行するために 4D に組み込まれている命令文のことです。 コマンドに引数を渡す場合は、コマンド名の後の括弧 () に引数を入れ、セミコロン (;) で区切ります。 例:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

コレクションやオブジェクトにコマンドが属している場合、それらは名前付き関数であり、ドット記法を用いて使用します。 例:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

4D プラグインや 4D コンポーネントを利用して、4D 開発環境に新しくコマンドを追加することもできます。

4D のユーザーコミュニティーや、サードパーティーデベロッパーによるプラグインが多数存在します。 For example, using the [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) on macOS:

```4d
PDF REMOVE PAGE(path;page)
```

4D SVG はアプリケーションの機能を拡張するユーティリティコンポーネントの一例です:

```4d
// 図の描画
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG は 4D に含まれています。

## 定数

4D では多くの定義済定数が用意されており、それらの値は名前によってアクセスすることができます。 定義済みの定数によって、より可読性の高いコードを書くことができます。 For example, `Read Mode` is a constant (value 2).

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // ドキュメントを読み取り専用モードで開きます
```

> コードエディターにおいて、定義済定数はデフォルトで <u>下線付き</u> で表示されます。

## メソッド

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. プロジェクトメソッドとはユーザー定義のメソッドで、コマンドや演算子などの要素から成り立ちます。
プロジェクトメソッドは汎用性のあるメソッドですが、そうではない他の種類のメソッドも存在します: オブジェクトメソッド、フォームメソッド、テーブルメソッド (トリガー)、データベースメソッド。

メソッドは、一つ以上のステートメントで構成されます。ステートメントとは、メソッドの1行のことで1つの命令を実行します。 ステートメントは 1つの命令を実行し、単純な場合もあれば複雑な場合もあります。

たとえば、次のステートメントは確認ダイアログボックスを表示します:

```4d
CONFIRM("このアカウントを本当に閉じますか？";"はい";"いいえ")
```

メソッドは、テストとループの制御フローの実行を含みます。 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
For($vlChar;1;Length(vtSomeText))
	//Do something with the character if it is a TAB


	If(Character code(vtSomeText[[$vlChar]])=Tab)
		//...
	End if
End for
```

プロジェクトメソッドは他のプロジェクトメソッドを呼び出すことができ、その際に引数を渡すことも可能です。 メソッドに引数を渡す場合は、メソッド名の後の括弧 () に引数を入れ、 セミコロン (;) で区切ります。 引数が宣言されていれば、これらは受け取り側のメソッドにて直接利用することができます。 メソッドの一つの値を戻り値とすることができ、この戻り値は宣言する必要があります。 メソッドを呼び出すには、メソッド名を書きます:

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something  
#DECLARE ($in : Text) -> $out : Text
$out:=Uppercase($in)
```

## データタイプ

4D ランゲージで扱うデータにはいくつかの種別があり、これらのデータ種別を "データタイプ" と呼びます。 基本のデータタイプ (文字、数値、日付、時間、ブール、ピクチャー、ポインター、配列) と混合型のデータタイプ (BLOB、オブジェクト、コレクション) があります。

データタイプのうち、文字タイプと数値タイプは、複数の類似するフィールドタイプに対応する点に注意してください。 これらのフィールドにデータが格納されるとき、4D ランゲージはフィールドタイプに合致するデータタイプへとデータを自動的に変換します。 反対に、たとえば整数フィールドのデータを呼び出すと、そのデータは自動的に数値タイプとして扱われます。 つまり、4D ランゲージを使用する際に、類似するフィールドタイプを厳密に区別する必要はありません。

しかし、プログラミングにおいて異なるデータタイプを混同しないようにすることは重要です。 "ABC" を日付フィールドに格納しても意味がないように、日付型の変数に "ABC" を格納することも意味がありません。 4D は、コードに書かれたことをできるだけ有効にしようとします。 たとえば、日付に数値を加算した場合は、日付に日数を加算したいものと認識します。しかし、日付に文字列を加算した場合には、4D はその操作が意味を持たないことを警告します。

あるタイプとして格納したデータを、別のタイプとして使用する場合があります。 4D ランゲージには、データタイプを変換するためのコマンドが用意されています。 たとえば、数値で始まり、"abc" 等の文字で終了する部品番号を作成する場合、 以下のように記述することができます:

```4d
[Products]Part_Number:=String(Number)+"abc"
```

If _Number_ is 17, then _[Products]Part Number_ will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## オブジェクトとコレクション

4D ランゲージのオブジェクトとコレクションは、オブジェクト記法を使用して値を代入・取得することができます。 例:

```4d
employee.name:="Smith"
```

大カッコ内と文字列の組み合わせを用いることもできます:

```4d
$vName:=employee["name"]
```

オブジェクトプロパティ値には、オブジェクトやコレクションも設定することが可能です。これらのサブプロパティにアクセスするため、オブジェクト記法では連続した字句を受け入れることができます:

```4d
$vAge:=employee.children[2].age
```

オブジェクトのプロパティ値が、メソッド (フォーミュラ) をカプセル化したオブジェクトである場合には、プロパティ名の後に括弧 ( ) をつけることで実行できます:

```
$f:=New object
$f.message:=Formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```

コレクションの要素にアクセスするためには、大カッコでくくった要素番号を渡します:

```4d
var myColl : Collection
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  // コレクションの 4番目の要素にアクセスします (0起点)
```

## クラス

4D ランゲージではオブジェクトクラスがサポートされています。 Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the _class store_ (`cs`) and use the `new()` member function. 引数を渡すこともできます。

```4d
// 4D メソッド内
$o:=cs.myClass.new()
```

In the `myClass` class method, use the `Function <methodName>` statement to define the _methodName_ class member function. A class member function can receive and return parameters like any method, and use `This` as the object instance.

```4d

//in the myClass.4dm file
Function hello -> $welcome : Text
  $welcome:="Hello "+This.who
```

To execute a class member function, just use the `()` operator on the member function of the object instance.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d
// Rectangle.4dm ファイル内
Class constructor ($width : Integer; $height : Integer)
This.height:=$height
This.width:=$width 
This.name:="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. 例:

```4d
// Square.4dm ファイル内
Class extends rectangle

Class constructor ($length : Integer)
  // 親クラスのコンストラクターを呼び出します   
  // 長方形の高さ・幅パラメーターに正方形の一辺の長さを引数として渡します
Super($length;$length)

This.name:="Square"
```

## 演算子

プログラミング言語を使用する際に、データのみを必要とする場合は非常に稀です。 データを加工、または何らかの目的のために使用することがほとんどです。 そういった計算は演算子を使っておこないます。 一般的に演算子とは、2つのデータをもとに処理をおこない、1つの新しいデータを生成します。 日常的に使用されている演算子も多くあります。 たとえば、1 + 2 という式は加算演算子 (プラス記号) を使用し、2つの数値を足し合わせて、3という結果を返します。 以下に、よく知られている 4つの演算子を示します:

| 演算子 | 演算                          | 例題            |
| --- | --------------------------- | ------------- |
| -   | 加算 (足し算) | 1 + 2 の結果は 3  |
| –   | 減算 (引き算) | 3 - 2 の結果は 1  |
| *   | 乗算 (かけ算) | 2 \* 3 の結果は 6 |
| /   | 除算 (割り算) | 6 / 2 の結果は 3  |

数値演算子は、使用可能な演算子のうちの 1種にすぎません。 4Dは、数値・テキスト・日付・ピクチャー等、異なるタイプのデータを扱うために、各データタイプで演算を実行するための演算子を備えています。

対象のデータタイプによって、同じ記号が異なる処理に使用される場合があります。 例えば、データタイプによってプラス記号 (+) は下記のように異なる演算を実行します:

| データタイプ | 演算                          | 例題                                                                    |
| ------ | --------------------------- | --------------------------------------------------------------------- |
| Number | 加算 (足し算) | 1 + 2 は数値を加算し、結果は 3 です。                                               |
| String | 連結 (結合)  | "みなさん" + "こんにちは" は文字を連結 (結合) し、結果は "みなさんこんにちは" です。 |
| 日付と数値  | 日付の加算                       | !2006/12/4!  + 20 は、2006年12月4日に 20日を加算し、結果は 2006年12月24日です。            |

## 式

式は、値を返します。 4D ランゲージでコードを書く際には、意識していなくても常に式を使用しています。 式は、"フォーミュラ" と呼ぶこともあります。

コマンド・演算子・変数・フィールド・オブジェクトプロパティ・コレクション要素等、複数のランゲージの要素を組み合わせて式は構成されます。 式により、ステートメント (メソッドの 1文や 1行) を構成します。 データが必要なとき、式が必要になります。

式が単独で使われることはほとんどありませんが、 単独で使用できる場合がいくつかあります :

- フォーミュラエディター (フォーミュラによるクエリや並べ替えなど)
- The `EXECUTE FORMULA` command
- フォームオブジェクトやウィジェットのデータソースとして
- デバッガー内で式の値を確認することができます
- クイックレポートエディターでカラムにフォーミュラを使用することができます

### 式のタイプ

生成する値のタイプによって、式のタイプを定義することができます。 式のタイプは複数あります。 様々なタイプの式の例を以下に示します。

| 式                                                                                     | タイプ         | 説明                                                                                                                                            |
| ------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| "こんにちは"                                                                               | String      | これは文字列定数 "こんにちは" です。 文字列定数であることを表すために二重引用符が必要です。                                                                                              |
| "みなさん" + "こんにちは"                                                                      | String      | 2つの文字列 "みなさん" と "こんにちは" が + 演算子により結合され、 "みなさんこんにちは" を返します。                                                                                    |
| [People]Name + "様"                | String      | 2つの文字列の結合です。[People]Name フィールドと文字列 "様" が結合されます。 フィールドの値が "小林" の場合、"小林様" を返します。            |
| Uppercase ("smith")                                                | String      | This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. そして "SMITH" を返します。 |
| 4                                                                                     | Number      | これは数値定数 4です。                                                                                                                                  |
| 4 \* 2                                                                                | Number      | 2つの数値、4 と 2 の乗算です。乗算演算子の (\*) を使用しています。 数値の 8を返します。                                                                        |
| myButton                                                                              | Number      | これはボタンに紐づけられた変数です。 ボタンの現在の値を返します: クリックされた場合に 1、それ以外は 0 を返します。                                                                 |
| !06/12/24! または !2006/12/24!                                                           | 日付          | この式は日付定数で 2006年12月24日を表します。                                                                                                                   |
| Current date + 30                                                                     | 日付          | This is a date expression that uses the `Current date` command to get today’s date. 現在の日付に 30日を加えた日付を返します。                    |
| ?8:05:30?                                             | 時間          | これは時間定数で、8時5分30秒を表します。                                                                                                                        |
| ?2:03:04? + ?1:02:03? | 時間          | 2つの時間の足し算をおこない、3時5分7秒を返します。                                                                                                                   |
| true                                                                                  | Boolean     | このコマンドはブール値の true (真) を返します。                                                                                               |
| 10 # 20                                                                               | Boolean     | これは 2つの数値の論理比較です。 #記号は、"等しくない" を表します。 10と20は "等しくない" ため、この式は true (真) を返します。                                               |
| "ABC" = "XYZ"                                                                         | Boolean     | これは文字列の論理比較です。 文字列は等しくないため、式は FALSE (偽) を返します。                                                                             |
| My Picture + 50                                                                       | Picture     | この式は My Picture 変数に入っているピクチャーを右に 50ピクセル移動したピクチャーを返します。                                                                                        |
| ->[People]Name                    | ポインター       | この式は [People]Name フィールドへのポインターを返します。                                                      |
| Table (1)                                                          | ポインター       | このコマンドは一番目に定義されたテーブルへのポインターを返します。                                                                                                             |
| JSON Parse (MyString)                                              | Object      | このコマンドは MyString が適切なフォーマットであれば、オブジェクトとして返します。                                                                                                |
| JSON Parse (MyJSONArray)                                           | Collection  | このコマンドは MyJSONArray が適切なフォーマットであれば、コレクションとして返します。                                                                                             |
| Form.pageNumber                                                       | オブジェクトプロパティ | オブジェクトプロパティは式として、サポートされているいずれのタイプでもありえます。                                                                                                     |
| Col[5]                            | コレクション要素    | コレクション要素は式として、サポートされているいずれのタイプでもありえます。                                                                                                        |
| $entitySel[0]                     | Entity      | ORDA のエンティティセレクションの要素である、エンティティを返します。 This kind of expression is **non-assignable**                                                           |

### 代入可 vs 代入不可の式

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. 式には演算子も含められます。 たとえば、4 + 2 という式は加算演算子を使って二つの数値を加算し、結果の 6 を返します。 In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them.
In 4D, expressions can be **assignable**. 代入演算子の左側に使えるものが、代入可能な式です。 例:

```4d
// 変数 $myVar は代入可能です:  
$myVar:="Hello" // $myVar に "Hello" を代入します
//Form.pageNumber は代入可能です:  
Form.pageNumber:=10 // Form.pageNumber に 10 を代入します
//Form.pageTotal-Form.pageNumber は代入不可です:
Form.pageTotal- Form.pageNumber:=10 // 代入不可のため、エラー
```

このように、リテラル定数ではなくても、演算子を使っている式は代入不可です。 For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.

## ポインター

ポインターは、プログラミングにおいてデータを参照するための高度な方法です。 4D ではテーブル、フィールド、変数、配列、配列要素を参照するためにポインターを使用することができます。

対象へのポインターは、その対象の前にポインター記号 (->) を付けることで取得することができます。反対にポインターから対象を取得するには、ポインター名の後にポインター記号をつけます:

```4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## 行を分割する

You can write a single statement on several lines by terminating each line of the statement with a trailing backslash `\` character. このように複数行に分かれたコードを、4Dランゲージは一行と解釈します。 たとえば、以下のステートメントは同等です:

```4d
$str:=String("hello world!")
```

```4d
$str:=String("hello"+\
" world"+\
+"!")
```

## コメント

コメントとは、コード内の実行されないテキストのことです。 これらのテキストは、コード実行時にインタープリターによって無視されます。

コメントの書き方は2通りあります:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

これらの書き方は同時に使用できます。

#### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. 例:

```4d
// これはコメントです
For($vCounter;1;100) // ループを開始します
  // コメント
  // コメント
  // コメント
 End for
```

#### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. 例:

```4d
For /* inline comment */ ($vCounter;1;100)
	...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. この形式のコメントは入れ子にすることができ、4D コードエディターではこれを展開したり折りたたんだりすることができます。 例:

```4d
For ($vCounter;1;100)
/*
comments  
	/*
	other comments
	*/
*/
...
End for
```

## エスケープシーケンス

4Dランゲージでは、エスケープシーケンス (エスケープ文字) を使用できます。 エスケープシーケンスとは、特別な文字の代わりに使用される一連の文字です。

The sequence consists of a backslash `\`, followed by a character. For instance, `\t` is an escape sequence for the **Tab** character. Escape sequences facilitate the entry of special characters: the previous example (`\t`) replaces the entry "Character(Tab)".

4D では以下のエスケープシーケンスを使用できます:

| エスケープシーケンス | 意味する文字                             |
| ---------- | ---------------------------------- |
| `\n`      | LF (行送り)        |
| `\t`      | HT (タブ)         |
| `\r`      | CR (改行)         |
| `\\`     | `\` (バックスラッシュ) |
| `\"`      | " (引用符)         |

> エスケープシーケンスでは文字の大小は区別されません。

In the following example, the **Carriage return** character (escape sequence `\r`) is inserted in a statement in order to obtain a dialog box:

`ALERT("The operation has been completed successfully.\rYou may now disconnect.")`
