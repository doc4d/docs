---
id: arrays
title: 配列
---

An **array** is an ordered series of **variables** of the same type. Each variable is called an **element** of the array. 配列のサイズとは、配列が持つ要素の数を指します。配列は作成時にサイズが与えられ、要素の追加・挿入・削除によって、または作成時に使用したコマンドの再使用によって、何度でもサイズを変更することができます。 配列要素には、1 から N の番号が付けられます (N は配列のサイズ)。 An array always has a special [element zero](#using-the-element-zero-of-an-array). 配列は 4D の変数です。 他の変数と同様、配列にもスコープがあり、4D ランゲージの規則に従いますが、他と異なるところがいくつかあります。

> In most cases, it is recommended to use **collections** instead of **arrays**. コレクションは配列より柔軟なだけでなく、たくさんの専用メソッドを持ちます。 For more information, please refer to the [Collection](Concepts/dt_collection.md) section.

## 配列の作成

配列は、"配列" テーマの配列宣言コマンドのいずれかを使用して作成します。 配列宣言コマンドは、1次元または 2次元の配列の作成やサイズ変更をすることができます。 For more information about two-dimensional arrays, see the [two dimensional arrays](#two-dimensional-arrays) section.

次のコードは、10個の要素からなる整数配列を作成 (宣言) します:

```4d
 ARRAY INTEGER(aiAnArray;10)
```

次のコードは、さきほど作成した配列を20要素にサイズ変更します:

```4d
ARRAY INTEGER(aiAnArray;20)
```

次のコードは、この配列を要素なしにサイズ変更します:

```4d
ARRAY INTEGER(aiAnArray;0)
```

## 配列要素への値の代入

配列中の要素は中カッコ ({…}) を使用して参照します。 中カッコの中には数字を入れて特定の要素を指定します。この数字を要素番号といいます。 次のコードは、5つの名前を atNames という配列に入れ、それらを警告ウィンドウに表示します:

```4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("要素番号 #"+String($vlElem)+" の値は "+atNames{$vlElem}+" です。 ")
 End for
```

atNames{$vlElem} というシンタックスに注目してください。 atNames{3} のように数値リテラルを使うだけでなく、数値変数によって配列の要素番号を指定することができます。 Using the iteration provided by a loop structure (`For...End for`, `Repeat...Until` or `While...End while`), compact pieces of code can address all or part of the elements in an array.

**Important:** Be careful not to confuse the assignment operator (:=) with the comparison operator, equal (=). 代入と比較は、まったく異なった性質の処理です。

### 配列への配列の代入

文字列やテキスト変数と違って、配列に配列を代入することはできません。 To copy (assign) an array to another one, use `COPY ARRAY`.

## 配列の要素ゼロ

配列は必ず、要素ゼロを持ちます。 ドロップダウンリストなどのフォームオブジェクトに配列が設定されていた場合、要素ゼロが表示されることはありませんが、ランゲージでの利用に制限はありません (\*)。

例として、デフォルト値を指定せずにフォームオブジェクトを初期化したいとします。 このような場合に配列の要素ゼロが利用できます:

```4d
  // method for a combo box or drop-down list  
  // bound to atName variable array
 Case of
    :(Form event code=On Load)
  // Initialize the array (as shown further above)  
  // But use the element zero
		ARRAY TEXT(atName;5)
		atName{0}:=Please select an item"
		atName{1}:="Text1"
		atName{2}:="Text2"
		atName{3}:="Text3"
		atName{4}:="Text4"
		atName{5}:="Text5"
	// Position the array to element 0
  		atName:=0
 End case
```

(\*) ひとつだけ例外があります。配列タイプのリストボックスでは、編集中の元の値を保持するため、内部的に配列の要素ゼロが使用されます。この特別なケースでは、開発者は 0番目の要素を利用できません。

## 二次元配列

配列宣言コマンドはそれぞれ、1次元および 2次元の配列を作成、またはサイズ変更ができます。 例:

```4d
 ARRAY TEXT(atTopics;100;50) // 100行と 50列からなるテキスト配列を作成します
```

2次元配列は、本質的にはランゲージオブジェクトであり、表示や印刷することはできません。

上のコードで作成した atTopics 配列について、次のことが言えます:

- atTopics は、2次元配列です。
- atTopics{8}{5} is the 5th element (5th column...) of the 8th row
- atTopics{20} は 20行目を指し、それ自体が 1次元の配列です。
- `Size of array(atTopics)` returns 100, which is the number of rows
- `Size of array(atTopics{17})` returns 50, which the number of columns for the 17th row

以下の例では、データベースの各テーブルの各フィールドへのポインターが 2次元配列に格納されます:

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Create as many rows (empty and without columns) as there are tables
 $vlLastTable:=Get last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns
  // For each table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Get last field number($vlTable)
  // Give value of elements
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  //Insert a column in a row of the table underway
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  //Assign the "cell" with the pointer
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

このように初期化された 2次元配列を使って、以下の方法で特定のテーブルが持つ全フィールドへのポインターを取得できます:

```4d
  // Get the pointers to the fields for the table currently displayed at the screen:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialize Boolean and Date fields
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Note:** As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes.

## 配列とメモリ

テーブルやレコードを使用してディスク上に格納するデータと異なり、配列は常に全体がメモリに保持されます。

たとえば、米国内の郵便番号がすべて [Zip Codes] テーブルに入力されている場合、約100,000件のレコードになります。 加えて、そのテーブルには郵便番号のほかに、対応する市・郡・州という複数のフィールドがあるとします。 カリフォルニアの郵便番号を選択した場合、4D データベースエンジンは [Zip Codes] テーブルから該当するレコードセレクションを作成して、必要な場合にのみ各レコードをロードします (たとえば表示や印刷時)。 つまり、4Dのデータベースエンジンによってディスクからメモリに部分的にロードされた (フィールドごとに同じタイプの) 順序づけられた一連の値で作業するということです。

同じことを配列で実行するのは、次の理由で禁止すべきです:

- 4つの情報タイプ (郵便番号、市、郡、州) を維持するためには、4つの大きな配列をメモリ内で維持する必要があります。
- 配列は、常に全体がメモリ内に維持されるため、常時使用しない場合でも、作業セッションの間すべてのデータをメモリに置いておく必要があります。
- 配列全体が常にメモリ内に維持されることから、アプリケーションが開始されるたびに 4つの配列をディスクからロードして、終了時にはディスクに保存する必要があります。当該データが作業セッション中に使用・変更されない場合もこれを省略することができません。

**Conclusion:** Arrays are intended to hold reasonable amounts of data for a short period of time. 他方、配列はメモリ内に置かれるため、扱いやすく高速操作が可能です。

しかし、状況によっては何百、何千という要素を持った配列で作業する必要があります。 次の表に、各配列タイプがメモリ上に占めるバイト数を求めるための計算式を示します:

| 配列タイプ   | メモリ使用量の計算式 (バイト単位)                                    |
| ------- | ------------------------------------------------------------------------ |
| Blob    | (1+要素数) \* 12 + 全BLOB要素の合計サイズ                         |
| Boolean | (31+要素数) \ 8                                          |
| 日付      | (1+要素数) \* 6                                          |
| Integer | (1+要素数) \* 2                                          |
| 倍長整数    | (1+要素数) \* 4                                          |
| Object  | (1+要素数) \* 8 + 全オブジェクトの合計サイズ                          |
| Picture | (1+要素数) \* 8 + 全ピクチャーの合計サイズ                           |
| ポインター   | (1+要素数) \* 8 + 全ポインターの合計サイズ                           |
| Real    | (1+要素数) \* 8                                          |
| Text    | (1+要素数) \* 20 + (全テキストの合計サイズ) \* 2 |
| 時間      | (1+要素数) \* 4                                          |
| 2次元     | (1+要素数) \* 16 + 配列サイズの合計                              |

**注:**

- メモリ中のテキストサイズは以下の式で計算されます: ((Length + 1) \* 2)
- 選択した要素や要素数、配列自体の情報を保持するため、さらに数バイトを要します。
