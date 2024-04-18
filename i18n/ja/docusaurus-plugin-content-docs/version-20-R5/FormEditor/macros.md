---
id: macros
title: フォームエディターマクロ
---

4D のフォームエディターはマクロをサポートしています。 1つ以上のアクションを実行するための指示をマクロと呼びます。 呼び出されると、マクロは登録された指示を実行し、自動的に指定のアクションをおこないます。

たとえば、定期レポートに特定のフォーマットが指定されている場合 (例: テキストによってフォントカラーが赤や緑であるなど)、マクロを作成してフォントカラーの設定を自動でおこなうことができます。 4Dフォームエディターのマクロでは、次のことがおこなえます:

- 4Dコードを作成・実行する
- ダイアログを表示する
- オブジェクトを選択する
- フォームやフォームオブジェクトおよびそれらのプロパティを追加・編集・削除する
- プロジェクトファイルを編集する (更新・削除)

Macros code supports [class functions](Concepts/classes.md) and [form object properties in JSON](FormObjects/properties_Reference.md) to let you define any custom feature in the Form editor.

ホストプロジェクトおよび、プロジェクト内のコンポーネントにてマクロを定義することができます。 通常は開発用のコンポーネントにマクロをインストールして使用します。

マクロが呼び出されると、指定されている既存の動作はマクロによってオーバーライドされます。

## 例題

フォームの左上に "Hello World" アラートボタンを追加するマクロを作成します。

1. In a `formMacros.json` file within the `Sources` folder of your project, you write:

```js
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Create a 4D class named `AddButton`.

3. Within the `AddButton` class, write the following function:

```4d
Function onInvoke($editor : Object)->$result : Object
	
	var $btnHello : Object
	
	// Create a "Hello" button
	$btnHello:=New object("type"; "button"; \
	"text"; "Hello World!"; \
	"method"; New object("source"; "ALERT(\"Hello World!\")"); \
	"events"; New collection("onClick"); \
	"width"; 120; \
	"height"; 20; \
	"top"; 0; \
	"left"; 0)	
	
	// Add button in the current page
	$editor.editor.currentPage.objects.btnHello:=$btnHello	
	
	// Select the new button in the form editor
	$editor.editor.currentSelection.clear() //unselect elements
	$editor.editor.currentSelection.push("btnHello")	
	
	// Notify the modification to the 4D Form editor
	$result:=New object("currentSelection"; $editor.editor.currentSelection;\  
		"currentPage"; $editor.editor.currentPage)
```

You can then call the macro:
![](../assets/en/FormEditor/macroex1.png)
![](../assets/en/FormEditor/macroex2.png)

## フォームエディターでマクロを呼び出す

4Dプロジェクトにマクロが定義されていると、フォームエディターのコンテキストメニューを使ってマクロを呼び出すことができます:

![](../assets/en/FormEditor/macroSelect.png)

This menu is built upon the `formMacros.json` [macro definition file(s)](#location-of-macros). マクロメニュー項目は ABC順に表示されます。

このメニューは、フォームエディター内で右クリックにより開くことができます。 Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro.

1つのマクロによって複数の処理を実行することができます。 If selected, the **Undo** feature of the Form editor can be used to reverse macro operations globally.

## マクロファイルの場所

All 4D Form Editor macros are defined within a single JSON file per project or component: `FormMacros.json`.

This file must be located in the host or component's **Project** > **Sources** folder:

![](../assets/en/FormEditor/macroStructure.png)

## マクロの宣言

The structure of the `formMacros.json` file is the following:

```js
{
    "macros": {
            <macroName>: {
                "class": <className>,
                <customProperty> : <value>
        }
    }
}
```

JSONファイルの説明です:

| 属性     |               |                    | タイプ    | 説明                                            |
| ------ | ------------- | ------------------ | ------ | --------------------------------------------- |
| macros |               |                    | object | 定義されたマクロのリスト                                  |
|        | `<macroName>` |                    | object | マクロ定義                                         |
|        |               | class              | string | マクロクラス名                                       |
|        |               | `<customProperty>` | any    | (任意) コンストラクターによって取得するカスタム値 |

Custom properties, when used, are passed to the [constructor](#class-constructor) function of the macro.

### 例題

```js
{
   "macros": {
     "Open Macros file": {
       "class": "OpenMacro"
     },
     "Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "right"
     },
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

## マクロのインスタンス化

Each macro you want to instantiate in your project or component must be declared as a [4D class](Concepts/classes.md).

The class name must match the name defined using the [class](#creating-macros) attribute of the `formMacros.json` file.

マクロは、アプリケーションの起動時にインスタンス化されます。 Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes.

## マクロ関数

Every macro class can contain a `Class constructor` and two functions: `onInvoke()` and `onError()`.

### Class constructor

#### Class constructor($macro : Object)

| 引数     | タイプ    | 説明                                                                          |
| ------ | ------ | --------------------------------------------------------------------------- |
| $macro | Object | Macro declaration object (in the `formMacros.json` file) |

Macros are instantiated using a [class constructor](Concepts/classes.md#class-constructor) function, if it exists.

アプリケーションの起動時にクラスがインスタンス化される際に、このコンストラクターが呼び出されます。

Custom properties added to the [macro declaration](#declaring-macros) are returned in the parameter of the class contructor function.

#### 例題

In the `formMacros.json` file:

```js
{
   "macros": {
     "最後に選択したオブジェクトを基準に左揃え": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

以下のように書くことができます:

```4d
// クラス "AlignOnTarget"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam // left    ...
```

### onInvoke()

#### onInvoke($editor : Object) -> $result : Object

| 引数      | タイプ    | 説明                                            |
| ------- | ------ | --------------------------------------------- |
| $editor | Object | フォームプロパティを格納する Form Editor Macro Proxy オブジェクト |
| $result | Object | マクロによって変更されたフォームプロパティ (任意) |

The `onInvoke` function is automatically executed each time the macro is called.

When the function is called, it receives in the `$editor.editor` property a copy of all the elements of the form with their current values. つまり、これらのプロパティに対して、任意の処理を実行することができます。

Once operations are completed, if the macro results in modifying, adding, or removing objects, you can pass the resulting edited properties in `$result`. 返されたプロパティは解析され、フォームに対して変更が適用されます。 戻り値に含まれるプロパティが少ないほど、この処理にかかる時間も削減されます。

Here are the properties returned in the _$editor_ parameter:

| プロパティ                                                            | タイプ        | 説明                                               |
| ---------------------------------------------------------------- | ---------- | ------------------------------------------------ |
| $editor.editor.form              | Object     | フォーム全体                                           |
| $editor.editor.file              | File       | フォームファイルの Fileオブジェクト                             |
| $editor.editor.name              | String     | フォームの名称                                          |
| $editor.editor.table             | number     | フォームのテーブル番号。プロジェクトフォームの場合は 0。                    |
| $editor.editor.currentPageNumber | number     | 現在のページの番号                                        |
| $editor.editor.currentPage       | Object     | 現在のページ (フォームオブジェクトおよび入力順序を格納) |
| $editor.editor.currentSelection  | Collection | 選択されているオブジェクトの名称のコレクション                          |
| $editor.editor.formProperties    | Object     | カレントフォームのプロパティ                                   |
| $editor.editor.target            | string     | マクロ呼び出し時にマウスカーソルが置かれているオブジェクトの名称                 |

Here are the properties that you can pass in the `$result` object if you want the macro processor to execute a modification. いずれのプロパティも任意です:

| プロパティ                             | タイプ        | 説明                                |
| --------------------------------- | ---------- | --------------------------------- |
| currentPage                       | Object     | マクロによって変更されたオブジェクトを含む currentPage |
| currentSelection                  | Collection | マクロによって変更された currentSelection     |
| formProperties                    | Object     | マクロによって変更された formProperties       |
| editor.groups     | Object     | マクロによって変更されたグループ情報                |
| editor.views      | Object     | マクロによって変更されたビュー情報                 |
| editor.activeView | String     | 有効なビュー名                           |

たとえば、currentPage と editor.groups の内容が変わった場合には、戻り値を次のように設定します:

```4d
	$result:=New object("currentPage"; $editor.editor.currentPage ; \ 
			"editor"; New object("groups"; $editor.editor.form.editor.groups))

```

#### `method` attribute

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- 次の構造を持つオブジェクトの使用:

| プロパティ  | タイプ    | 説明          |
| ------ | ------ | ----------- |
| source | String | method code |

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. この機能はマクロコードの場合にのみ有効です。

#### `$4dId` property in `currentPage.objects`

The `$4dId` property defines a unique ID for each object in the current page. This key is used by the macro processor to control changes in `$result.currentPage`:

- if the `$4dId` key is missing in both the form and an object in `$result`, the object is created.
- if the `$4dId` key exists in the form but is missing in `$result`, the object is deleted.
- if the `$4dId` key exists in both the form and an object in `$result`, the object is modified.

#### 例題

選択されているオブジェクトに対して、フォントカラーを赤に、フォントスタイルをイタリックに変更するマクロ関数を定義します。

```4d
Function onInvoke($editor : Object)->$result : Object
	var $name : Text
	
	If ($editor.editor.currentSelection.length>0)		
		// Set stroke to red and style to italic for each selected object
		For each ($name; $editor.editor.currentSelection)
			$editor.editor.currentPage.objects[$name].stroke:="red"
			$editor.editor.currentPage.objects[$name].fontStyle:="italic"

		End for each 
		
	Else 
		ALERT("Please select a form object.")
	End if 
	
	// Notify to 4D the modification
	$result:=New object("currentPage"; $editor.editor.currentPage)
```

### onError()

#### onError($editor : Object; $resultMacro : Object ; $error : Collection)

| 引数           |                                                                                           | タイプ        | 説明                                       |
| ------------ | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- |
| $editor      |                                                                                           | Object     | Object send to [onInvoke](#oninvoke)     |
| $resultMacro |                                                                                           | Object     | Object returned by [onInvoke](#oninvoke) |
| $error       |                                                                                           | Collection | エラースタック                                  |
|              | [].errCode            | Number     | エラーコード                                   |
|              | [].message            | Text       | エラーの詳細                                   |
|              | [].componentSignature | Text       | 内部コンポーネントのシグネチャー                         |

The `onError` function is executed when the macros processor encounters an error.

マクロの実行時に発生したエラーが、マクロの取り消しを不可能にする内容の場合、マクロは実行されません。 たとえば次のような場合が該当します:

- 読み取り専用ファイルのスクリプトを変更・削除しようとしたとき
- 同じ内部ID を持つオブジェクトを複数作成しようとしたとき

#### 例題

マクロクラス定義に、次のような汎用的なエラーコードを書くことができます:

```4d
Function onError($editor : Object; $resultMacro : Object; $error : Collection)
	var $obj : Object
	var $txt : Text
	$txt:=""
	
	For each ($obj; $error)
		$txt:=$txt+$obj.message+" \n"
	End for each 
	
	ALERT($txt)
```
