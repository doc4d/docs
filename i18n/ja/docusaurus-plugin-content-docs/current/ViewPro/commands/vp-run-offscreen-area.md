---
id: vp-run-offscreen-area
title: VP Run offscreen area
---

<!-- REF #_method_.VP Run offscreen area.Syntax -->

**VP Run offscreen area** ( _parameters_ : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

| 引数         | タイプ    |    | 説明                                                    |                  |
| ---------- | ------ | -- | ----------------------------------------------------- | ---------------- |
| parameters | Object | -> | オフスクリーンエリアの属性を格納するオブジェクト                              |                  |
| 戻り値        | Mixed  | <- | `.onEvent` オブジェクトの `.result` プロパティ、または値を返さない場合には Null | <!-- END REF --> |

#### 説明

`VP Run offscreen area` コマンドは、<!-- REF #_method_.VP Run offscreen area.Summary -->メモリ内にオフスクリーンエリアを作成し、これを利用して 4D View Pro エリアのコマンドやファンクションを処理することができます<!-- END REF -->。

_parameters_ オブジェクトには、以下の任意のプロパティのいずれかを渡します。 これらのプロパティは `onEvent` コールバックメソッド内において `This` コマンドを介して利用可能であり、そのインスタンスを参照することができます:

| プロパティ              | タイプ                                | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | text                               | オフスクリーンエリアの名前。 省略時あるいは null の場合、一般的な名前 (例: "OffscreenArea1") が割り当てられます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| onEvent            | object (フォーミュラ) | オフスクリーンエリアの準備ができたときに実行されるコールバックメソッド。 It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](../configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                            | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. False の場合、_onEvent_ コールバックメソッド内で `CANCEL` あるいは `ACCEPT` コマンドを使用する必要があります。                                                                                                                                                                                                                                                                                                                                                                   |
| timeout            | number                             | イベントが何も生成されない場合にエリアが自動的に閉まるまでの最大時間 (秒単位)。 0 に設定した場合、エリアは自動的には閉まりません。 デフォルト値: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| result             | mixed                              | 処理の結果 (あれば)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `<customProperty>` | mixed                              | _onEvent_ コールバックメソッドで利用可能なカスタムの属性。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

以下のプロパティは、必要に応じてコマンドによって自動的に追加されます:

| プロパティ          | タイプ     | 説明                           |
| -------------- | ------- | ---------------------------- |
| timeoutReached | boolean | タイムアウトを超えた場合に true の値で追加されます |

> オフスクリーンエリアは、`VP Run offscreen area` コマンドの実行中にしか利用できません。 実行が終わるとエリアは自動的に消去されます。

コールバックメソッドでは、以下のコマンドを使用することができます:

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

#### 例題 1

オフスクリーンの 4D View Pro エリアを作成し、そこからセルの値を取得します:

```4d
// cs.OffscreenArea クラス宣言 
Class constructor ($path : Text)
    This.filePath:=$path

// この関数はオフスクリーンエリアの各イベントごとに呼び出されます
Function onEvent()
    Case of
       :(FORM Event.code=On VP Ready)
            VP IMPORT DOCUMENT(This.area;This.filePath)
            This.result:=VP Get value(VP Cell(This.area;6;22))

            ALERT("The G23 cell contains the value: "+String(This.result))
    End case
```

_OffscreenArea_ コールバックメソッドの内容は以下の通りです:

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### 例題 2

大きなドキュメントをオフスクリーンで読み込み、計算の評価が完了するのを待ってドキュメントを PDF として書き出します:

```4d
// cs.OffscreenArea クラス宣言
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // ドキュメントの読み込み
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // 計算が完了したかを検証するタイマーをスタートさせます
 // この間に "On VP Range Changed" イベントが発生した場合、タイマーはリスタートされます
 // 時間はコンピューターの設定に応じて定義されなければなりません
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // 計算の完了を検知し、 タイマーを再スタートさせます
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // この時点以降、他の 4D View コマンドを呼び出してもタイマーが再スタートしないようにします
         This.isWaiting:=False
 


 // タイマーを停止します
   SET TIMER(0)
 
 // PDF 書き出しを開始します
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

_OffscreenArea_ コールバックメソッドの内容は以下の通りです:

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

#### 参照

[ブログ記事 (英文): End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
