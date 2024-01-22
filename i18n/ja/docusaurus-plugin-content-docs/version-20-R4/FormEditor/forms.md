---
id: forms
title: Forms
---

フォームはデスクトップアプリケーションにおいて、データの入力・修正・印刷をおこなうためのインターフェースとなります。 フォームを使用することで、ユーザーはデータベースのデータをやり取りし、レポートを印刷します。 フォームを使用して、カスタムダイアログボックスやパレット、そのほかのカスタムウィンドウを作成します。

![](../assets/en/FormObjects/form1.png)

また、以下の機能により、フォームは他のフォームを含むことができます:

- [subform objects](FormObjects/subform_overview.md)
- [inherited forms](properties_FormProperties.md#inherited-forms)

## フォームを作成する

4Dフォームの追加や変更は、以下の要素を使っておこないます:

- **4D Developer interface:** Create new forms from the **File** menu or the **Explorer** window.
- **Form Editor**: Modify your forms using the **[Form Editor](FormEditor/formEditor.md)**.
- **JSON code:** Create and design your forms using JSON and save the form files at the [appropriate location](Project/architecture.md#sources-folder). 例:

```
{
    "windowTitle": "Hello World",
    "windowMinWidth": 220,
    "windowMinHeight": 80,
    "method": "HWexample",
    "pages": [
        null,
        {
            "objects": {
                "text": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 50,
                "top": 120,
                "width": 120,
                "height": 80
                },
                "image": {
                "type": "picture",
                "pictureFormat": "scaled",
                "picture": "/RESOURCES/Images/HW.png",
                "alignment":"center", 
                "left": 70,
                "top": 20, 
                "width":75, 
                "height":75        
                },
                "button": {
                "type": "button",
                "text": "OK",
                "action": "Cancel",
                "left": 60,
                "top": 160,


                "width": 100,
                "height": 20
                }
            }
        }
    ]
}
```

## プロジェクトフォームとテーブルフォーム

2つのカテゴリーのフォームが存在します:

- **Project forms** - Independent forms that are not attached to any table. このタイプのフォームは、おもにインターフェースダイアログボックスやコンポーネントを作成するのに使用されます。 プロジェクトフォームを使用してより簡単に OS標準に準拠するインターフェースを作成できます。

- **Table forms** - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. 通常、テーブルには入力フォームと出力フォームが別々に存在します。

フォームを作成する際にフォームカテゴリーを選択しますが、後から変更することも可能です。

## フォームのページ

各フォームは、少なくとも 2つのページで構成されています:

- ページ1: デフォルトで表示されるメインページ
- ページ0: 背景ページ。このページ上に置かれたオブジェクトはすべてのページで表示されます

1つの入力フォームに複数のページを作成することができます。 一画面に納まりきらない数のフィールドや変数がある場合は、これらを表示するためにページを追加することができます。 複数のページを作成すると、以下のようなことが可能になります:

- もっとも重要な情報を最初のページに配置し、他の情報を後ろのページに配置する。
- トピックごとに、専用ページにまとめる。
- Reduce or eliminate scrolling during data entry by setting the [entry order](../FormEditor/formEditor.html#data-entry-order).
- フォーム要素の周りの空間を広げ、洗練された画面をデザインする。

複数ページは入力フォームとして使用する場合にのみ役立ちます。 印刷出力には向きません。 マルチページフォームを印刷すると、最初のページしか印刷されません。

フォームのページ数には制限がありません。 フォーム内の複数ページ上に同じフィールドを何度でも表示することができます。 しかし、フォームのページ数が多くなるほど、フォームの表示に要する時間が長くなります。

マルチページフォームには、1つの背景ページと複数の表示ページが存在します。 背景ページ上に置かれたオブジェクトはすべての表示ページに現れますが、それらのオブジェクトの選択や編集は背景ページでのみ可能です。 複数ページフォームでは、ボタンパレットを背景ページに置くべきです。 また、ページ移動ツールオブジェクトを背景ページに配置し、ユーザーに提供する必要があります。

## 継承フォーム

4D forms can use and be used as "inherited forms," meaning that all of the objects from _Form A_ can be used in _Form B_. In this case, _Form B_ "inherits" the objects from _Form A_.

継承フォームへの参照は常にアクティブです。そのため、継承フォームの要素が変更されると (たとえば、ボタンスタイル)、この要素を使用する全フォームが自動的に変更されます。

テーブルフォームおよびプロジェクトフォームの両方を継承フォームとして使用できます。 ただし、継承フォームに含まれる要素は、異なるデータベーステーブルでの使用に対応していなければなりません。

フォームが実行されると、オブジェクトがロードされ、次の順序で組み立てられます:

1. 継承フォームの 0ページ
2. 継承フォームの 1ページ
3. 開かれたフォームの 0ページ
4. 開かれたフォームのカレントページ

This order determines the default [entry order](../FormEditor/formEditor.html#data-entry-order) of objects in the form.

> 継承フォームの 0ページと 1ページだけが他のフォームに表示可能です。

継承フォームとして使用される場合、継承フォームのプロパティとフォームメソッドは使用されません。 他方、継承フォームに含まれるオブジェクトのメソッドは呼び出されます。

To define an inherited form, the [Inherited Form Name](properties_FormProperties.md#inherited-form-name) and [Inherited Form Table](properties_FormProperties.md#inherited-form-table) (for table form) properties must be defined in the form that will inherit something from another form.

A form can inherit from a project form, by setting the [Inherited Form Table](properties_FormProperties.md#inherited-form-table) property to `\<None>` in the Property List (or " " in JSON).

To stop inheriting a form, select `\<None>` in the Property List (or " " in JSON) for the [Inherited Form Name](properties_FormProperties.md#inherited-form-name) property.

> 任意のフォームで継承フォームを設定し、そのフォームを第3のフォームの継承フォームとして使用することができます。 再帰的な方法で各オブジェクトが連結されます。 4Dは、再帰的ループを見つけ出し (たとえば、[テーブル1]フォーム1 が [テーブル1]フォーム1 を継承フォームとして定義している、つまり自分自身を継承している場合)、フォームの連鎖を中断します。

## プロパティ一覧

[Associated Menu Bar](properties_Menu.md#associated-menu-bar) - [Fixed Height](properties_WindowSize.md#fixed-height) - [Fixed Width](properties_WindowSize.md#fixed-width) - [Form Break](properties_Markers.md#form-break) - [Form Detail](properties_Markers.md#form-detail) - [Form Footer](properties_Markers.md#form-footer) - [Form Header](properties_Markers.md#form-header) - [Form Name](properties_FormProperties.md#form-name) - [Form Type](properties_FormProperties.md#form-type) - [Inherited Form Name](properties_FormProperties.md#inherited-form-name) - [Inherited Form Table](properties_FormProperties.md#inherited-form-table) - [Maximum Height](properties_WindowSize.md#maximum-height-minimum-height) - [Maximum Width](properties_WindowSize.md#maximum-width-minimum-width) - [Method](properties_Action.md#method) - [Minimum Height](properties_WindowSize.md#maximum-height-minimum-height) - [Minimum Width](properties_WindowSize.md#maximum-width-minimum-width) - [Pages](properties_FormProperties.md#pages) - [Print Settings](properties_Print.md#settings) - [Published as Subform](properties_FormProperties.md#published-as-subform) - [Save Geometry](properties_FormProperties.md#save-geometry) - [Window Title](properties_FormProperties.md#window-title)
