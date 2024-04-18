---
id: blob
title: BLOB
---

BLOB (Binary Large OBject) フィールド・変数・式とは、連続した可変長バイトであり、各バイトを個々にアドレス指定可能な 1つのまとまったオブジェクトとして取り扱うことができます。

BLOB は全体がメモリにロードされます。 BLOB変数はメモリ内にだけ保持され、存在します。 BLOBフィールドは、レコードの他フィールドと同様に、ディスクからメモリにロードされます。

大量のデータを保持できる他のフィールドタイプ (ピクチャーなど) と同様に、レコードを更新しても BLOBフィールドはメモリに複製されません。 Consequently, the result returned by the `Old` and `Modified` commands is not significant when applied to a Blob field.

## BLOB の種類

4Dランゲージでは、BLOB を扱う方法が 2つあります:

- **as a scalar value**: a blob can be stored in a Blob variable or field and altered.
- **as an object (`4D.Blob`)**: a `4D.Blob` is a blob object. You can encapsulate a blob or part of it in a `4D.Blob` without altering the original blob. This method is called [boxing](https://en.wikipedia.org/wiki/Object_type_\(object-oriented_programming\)#Boxing). For more info on how to instantiate a `4D.Blob`, see [Blob Class](../API/BlobClass.md).

各 BLOBタイプには、それぞれ利点があります。 次の表を参考にして、どちらがニーズに合うかを確認してください:

|                     | Blob | 4D.Blob |
| ------------------- | :--: | :---------------------: |
| 変更可能                |   ◯  |            ×            |
| オブジェクトやコレクション内で共有可能 |   ×  |            ◯            |
| 参照渡し\*              |   ×  |            ◯            |
| バイトにアクセスする際のパフォーマンス |   -  |            *            |
| 最大サイズ               |  2GB |           メモリ           |

参照で渡される BLOBオブジェクトとは異なり、スカラーBLOB はメソッドに渡されるとメモリ内で複製されることに注意してください。 When working with methods, using blob objects (`4D.Blob`) is more efficient, as they are passed by reference.

> デフォルトで、4D はスカラーBLOB の最大サイズを 2GB に設定していますが、OSや空き容量によっては、この制限サイズが小さくなる場合があります。

BLOB に演算子を適用することはできません。

## Checking if a variable holds a scalar blob or a `4D.Blob`

Use the [Value type](https://doc.4d.com/4dv20/help/command/en/page1509.html) command to determine if a value is of type Blob or Object.
To check that an object is a blob object (`4D.Blob`), use [OB instance of](https://doc.4d.com/4dv20/help/command/en/page1731.html):

```4d
var $myBlob: Blob
var $myBlobObject: 4D.Blob
$myBlobObject:=4D.Blob.new()

$type:= Value type($myblobObject) // 38 (オブジェクト)
$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  // true
```

## BLOB を引数として渡す

スカラーBLOB や BLOBオブジェクトは、4Dコマンドまたは 4Dプラグインの引数として渡すことができます。

### BLOB および BLOBオブジェクトの 4Dコマンドへの受け渡し

You can pass a scalar blob or a `4D.Blob` to any 4D command that takes a blob as a parameter:

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
```

Some 4D commands alter the original blob, and thus do not support the `4D.Blob` type:

- [DELETE FROM BLOB](https://doc.4d.com/4dv19/help/command/en/page560.html)
- [INSERT IN BLOB](https://doc.4d.com/4dv19/help/command/en/page559.html)
- [INTEGER TO BLOB](https://doc.4d.com/4dv19/help/command/en/page548.html)
- [LONGINT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page550.html)
- [REAL TO BLOB](https://doc.4d.com/4dv19/help/command/en/page552.html)
- [SET BLOB SIZE](https://doc.4d.com/4dv19/help/command/en/page606.html)
- [TEXT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page554.html)
- [VARIABLE TO BLOB](https://doc.4d.com/4dv19/help/command/en/page532.html)
- [LIST TO BLOB](https://doc.4d.com/4dv19/help/command/en/page556.html)
- [SOAP DECLARATION](https://doc.4d.com/4dv19/help/command/en/page782.html)
- [WEB SERVICE SET PARAMETER](https://doc.4d.com/4dv19/help/command/en/page777.html)

### BLOB および BLOBオブジェクトのメソッドへの受け渡し

You can pass blobs and blob objects (`4D.Blob`) to methods. 参照で渡される BLOBオブジェクトとは異なり、スカラーBLOB はメソッドに渡されるとメモリ内で複製されることに注意してください。

### ポインターを使ったスカラーBLOB の参照渡し

スカラーBLOB をメモリ上に複製することなくメソッドに渡すには、ポインターを使用します。 その場合は BLOB変数へのポインターを定義し、そのポインターを引数として渡します。

**Examples:**

```4d
// BLOB型の変数を定義します
var $myBlobVar: Blob
// 4Dコマンドに引数として BLOB を渡します
 SET BLOB SIZE($myBlobVar;1024*1024)
```

```4d
// 外部ルーチンに BLOB を引数として渡します
 $errCode:=Do Something With This blob($myBlobVar)
```

```4d
// BLOB を引数としてメソッドに渡し、戻り値を BLOB で受け取ります
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
```

```4d
// Pass a pointer to the blob as a parameter to your own method,
COMPUTE BLOB(->$myBlobVar)
```

**Note for Plug-in developers:** A BLOB parameter is declared as “&O” (the letter “O”, not the digit “0”).

## BLOB変数の代入

BLOB変数は相互に代入することができます:

**Example:**

```4d
// BLOB型の変数を二つ宣言します
 var $vBlobA; $vBlobB : Blob
// 一つ目の BLOB に10K のサイズを割り当てます
 SET BLOB SIZE($vBlobA;10*1024)
// 一つ目の BLOB を二つ目の BLOB に代入します
 $vBlobB:=$vBlobA
```

## BLOB の自動変換

スカラーBLOB が BLOBオブジェクトに (またはその逆) 割り当てられると、4Dはそれらを自動的に変換します。 例:

```4d
// BLOB型の変数とオブジェクト変数を作成します
var $myBlob: Blob
var $myObject : Object

// $myObject の "blob" というプロパティに BLOB変数を代入します
$myObject:=New object("blob"; $myBlob)

// $myBlob に格納される BLOB は自動的に 4D.Blob に変換されます
$type:= OB Instance of($myObject.blob; 4D.Blob)  // true

// 4D.Blob から スカラーBLOB への変換
$myBlob:= $myObject.blob
$type:=
```

> When converting a `4D.Blob` to a scalar blob, if the size of the `4D.Blob` exceeds the maximum size for scalar blobs, the resulting scalar blob is empty.
> For example, when the maximum size for scalar blobs is 2GB, if you convert a `4D.Blob` of 2.5GB to a scalar blob, you obtain an empty blob.

## スカラーBLOB の変更

BLOBオブジェクトとは異なり、スカラーBLOB は変更することができます。 例:

```4d
var $myBlob : Blob
SET BLOB SIZE ($myBlob ; 16*1024)
```

## BLOB内バイトへの個別アクセス

#### スカラーBLOB のバイトへのアクセス

You can access individual bytes of a scalar blob using curly brackets `{}`. BLOB 内では、各バイトに 0 から N-1 の番号が割り当てられています。 N は BLOB のサイズです:

```4d
  // BLOB型変数を定義します
 var $vBlob : Blob
  // BLOB のサイズを 256バイトに設定します
 SET BLOB SIZE($vBlob;256)
  // 次のループは、BLOB の各バイトをゼロに初期化します
 For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
```

BLOB の各バイトはすべて個別にアドレス指定できるため、BLOB変数またはフィールドには何でも格納できます。

#### Accessing a `4D.Blob`'s bytes

Use square brackets `[]` to directly access a specific byte in a `4D.Blob`

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

Since a `4D.Blob` cannot be altered, you can read the bytes of a `4D.Blob` using this syntax, but not modify them.
