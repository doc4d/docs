---
id: vp-print
title: VP PRINT
---

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( _vpAreaName_ : Text  { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| 引数         | タイプ     |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP PRINT` コマンドは、<!-- REF #_method_.VP PRINT.Summary -->_vpAreaName_ 引数で指定したエリアを印刷する印刷ダイアログウィンドウを開きます<!-- END REF -->。

_vpAreaName_ には、印刷する 4D View Pro エリアの名前を渡します。 コマンドによって、システムの印刷ダイアログウィンドウが開かれ、プリンターを指定したりページプロパティを定義したりすることができます。

> 印刷ダイアログウィンドウで定義されるプロパティはプリンター用紙のためのもので、4D View Pro エリアの印刷プロパティではありません。 Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](vp-set-print-info.md) command. プリンターと 4D View Pro エリアの両プロパティが合致することが強く推奨されます。 そうでない場合、ドキュメントが期待通りに印刷されない可能性があります。

任意の _sheet_ 引数として、シートのインデックス (0 起点) を渡すことで、印刷するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートあるいはワークブック全体を明示的に選択することができます:

- `vk current sheet`
- `vk workbook`

> * 4D View Pro エリアは、`VP PRINT` コマンドによってのみ印刷可能です。
> * 4Dコマンドの **印刷** テーマのコマンドは、`VP PRINT` ではサポートされません。
> * このコマンドは、最終的なエンドユーザーが個別に印刷を実行することを想定しています。 For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](vp-export-document.md) method.

#### 例題

以下のコードは:

```4d
 VP PRINT("myVPArea")
```

... 印刷ダイアログウィンドウを開きます:

![](../../assets/en/ViewPro/cmd_vpPrint.PNG)

#### 参照

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
