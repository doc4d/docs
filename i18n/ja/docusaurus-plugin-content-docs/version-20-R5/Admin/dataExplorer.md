---
id: dataExplorer
title: データエクスプローラー
---

データエクスプローラーは、プロジェクトのデータストアにあるデータを表示・クエリ・編集するための Webインターフェースを提供します。 このツールを使用すると、すべてのエンティティを簡単に照会し、属性値に基づいて検索・並べ替え・フィルターすることができます。 このツールは、開発プロセスのどの段階においても問題を迅速に特定するだけでなく、データを管理・編集するのにも役立ちます。

![alt-text](../assets/en/Admin/dataExplorer1.png)

## アクセス設定

The Data Explorer relies on the [`WebAdmin`](webAdmin.md) web server component for the configuration and authentication settings.

- **configuration**: the Data Explorer configuration reuses the [`WebAdmin` web server settings](webAdmin.md#webadmin-settings),
- **authentication**: access to the Data Explorer is granted when the [session user is authenticated](webAdmin.md#authentication-and-session) and has the "WebAdmin" privilege. When the Data Explorer is accessed through the **Data Explorer** menu item (see below), an automatic authentication is provided.

> The Data Explorer access can be disabled using the [`.setAdminProtection()`](API/DataStoreClass.md#setadminprotection) function.

## データエクスプローラーを開く

[The `WebAdmin` web server](webAdmin.md#starting-the-webadmin-web-server) is started automatically if necessary when the Data Explorer is clicked on.

データエクスプローラーWebページに接続するには:

- 4Dアプリケーションから (インターフェースあり):
  - To open a new 4D window with the Data Explorer page displayed in a web area, select **Data Explorer** in the **Records** menu or click on the **Data** button in the main toolbar.
  - To open the Data Explorer in an external browser tab, select **Data Explorer In Browser** in the **Records** menu or press the **Alt** key (Windows)/**Option** key (macOS) and click on the **Data** button in the main toolbar.

- From 4D Server, select **Data Explorer In Browser** in the **Window** menu (the Data Explorer can only be opened on an external browser).

- ヘッドレス4Dアプリケーションを使用しているかどうかに関わらず、Webブラウザーを開いて次のアドレスを入力します:

`IPaddress:HTTPPort/dataexplorer`
or
`IPaddress:HTTPSPort/dataexplorer`

In this context, you will be prompted to enter the [access key](webAdmin.md#access-key) to open a `WebAdmin` session on the server:

![alt-text](../assets/en/Admin/accessKeyEnter.png)

> [HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) values are configured in the `WebAdmin` settings.

## 要件

データエクスプローラーは、以下の Webブラウザーをサポートしています。

- Chrome
- Safari
- Edge
- FireFox

データエクスプローラーを使用するための最小解像度は 1280x720 です。 推奨解像度は 1920x1080 です。

## データの閲覧

データエクスプローラーでは、包括的でカスタマイズ可能なデータの表示に加えて、データの照会や並べ替えをおこなうことができます。

### 基本

The Data Explorer provides an overall access to the ORDA data model with respect to the [ORDA mapping rules](ORDA/dsMapping.md#general-rules).

:::info

データベース側で、ORDAモデルやデータが変更された場合 (テーブルの追加、レコードの編集・削除など)、F5キーなどでデータエクスプローラーのページをブラウザーで更新するだけで、変更が反映されます。

:::

You can switch to the **dark mode** display theme using the selector at the bottom of the page:

![alt-text](../assets/en/Admin/dark.png)

![alt-text](../assets/en/Admin/dataExplorer2.png)

このページにはいくつかのエリアがあります:

- On the left side are the **Dataclasses area** and **Attributes area**, allowing you can select the dataclasses and attributes to display. 属性は、ストラクチャーにおける作成順にしたがって並べられます。 プライマリーキーおよびインデックス付きの属性には、専用アイコンが表示されます。 表示されているデータクラス名と属性名のリストは、それぞれの検索エリアを使ってフィルターできます。
  ![alt-text](../assets/en/Admin/dataExplorer3.png)

- The central part contains the **Search area** and the **Data grid** (list of entities of the selected dataclass). グリッドの各列は、データストアの属性を表します。
  - デフォルトでは、すべてのエンティティが表示されます。 検索エリアを使用して、表示されるエンティティをフィルターできます。 Two query modes are available: [Query on attributes](#query-on-attributes) (selected by default), and the [Advanced query with expression](#advanced-query-with-expression). You select the query mode by clicking on the corresponding button (the **X** button allows you to reset the query area and thus stop filtering):
    ![alt-text](../assets/en/Admin/dataExplorer4b.png)
  - 選択されたデータクラスの名前は、データグリッドの上にタブとして追加されます。 これらのタブを使って、選択されたデータクラスを切り替えることができます。 参照されているデータクラスを削除するには、データクラス名の右に表示される "削除" アイコンをクリックします。
  - 左側の属性のチェックを外すことで、表示されている列数を減らせます。 また、ドラッグ＆ドロップでデータグリッドの列の位置を入れ替えることができます。 You can click on a column header to [sort entities](#ordering-entities) according to its values (when possible).
  - 処理に時間がかかる場合は、進捗バーが表示されます。 You can stop the running operation at any moment by clicking on the red button:<br/>
    ![alt-text](../assets/en/Admin/dataExplorer5.png)

- On the right side is the **Details area**: it displays the attribute values of the currently selected entity as well as **related data**, if any. You can browse between the entities of the dataclass by clicking the **First** / **Previous** / **Next** / **Last** links at the bottom of the area.
  - All attribute types are displayed, including pictures, objects (expressed in json) as well as [computed](../ORDA/ordaClasses.md#computed-attributes-1) and [alias](../ORDA/ordaClasses.md#alias-attributes-1) attributes.
  - Related data (many-to-one and one-to-many relations) can be displayed through expandable/collapsable areas:<br/>
    ![alt-text](../assets/en/Admin/dataExplorerRelated.png)
  - **Ctrl+Click** (Windows) or **Command+Click** (macOS) on a related attribute name in the right side area displays the values of the attribute in an independant, floating area:<br/>
    ![alt-text](../assets/en/Admin/dataExplorerFloat.png)

### エンティティの並べ替え

表示されているエンティティのリストを、属性値に応じて並べ替えることができます。 並べ替えには、ピクチャーとオブジェクトを除くすべての属性を使用できます。

- 列のヘッダーをクリックすると、その列の属性値に応じてエンティティを並べ替えます。 デフォルトでは、昇順でソートされます。 2回クリックすると、降順でソートされます。 A column used to sort entities is displayed with a small icon and its name is in _italics_.

![alt-text](../assets/en/Admin/dataExplorer7.png)

- 属性を基準に複数のレベルでソートできます。 たとえば、従業員を都市別にソートした後、給与別にソートすることができます。 To do that, hold down the **Shift** key and click sequentially on each column header to include in the sort order.

### 属性に基づくクエリ

このモードでは、データグリッドの属性名の上のエリアに検索 (または除外) する値を入力して、エンティティをフィルターします。 1つまたは複数の属性でフィルター可能です。 入力すると、エンティティリストは自動的に更新されます。

![alt-text](../assets/en/Admin/dataExplorer6.png)

複数の属性を指定した場合は、自動的に AND が適用されます。 For example, the following filter displays entities with _firstname_ attribute starting with "flo" AND _salary_ attribute value > 50000:

![alt-text](../assets/en/Admin/dataExplorer9.png)

The **X** button allows you to remove entered attributes and thus stop filtering.

属性のデータ型に応じて、さまざまな演算子やクエリオプションが利用できます。

> ピクチャーやオブジェクト属性はフィルターできません。

#### 比較演算子

数値、日付、時間型の属性では、デフォルトで "=" 演算子が選択されています。 ただし、演算子のリストから別の演算子を選択することができます ("=" アイコンをクリックするとリストが表示されます)。

![alt-text](../assets/en/Admin/DEFilter1.png)

#### 日付

日付型属性では、ピッカーを使って日付を入力することができます (日付エリアをクリックするとカレンダーが表示されます)。

![alt-text](../assets/en/Admin/DEFilter2.png)

#### ブール

When you click on a boolean attribute area, you can filter on **true**/**false** values but also on **null**/**not null** values:

![alt-text](../assets/en/Admin/DEFilter3.png)

- **null** indicates that the attribute value was not defined
- **not null** indicates that the attribute value is defined (thus true or false).

#### Text

テキストフィルターは、文字の大小を区別しません (a = A)。

フィルターは "～で始まる" タイプです。 たとえば、"Jim" と入力すると、"Jim" と "Jimmy" が表示されます。

ワイルドカード文字 (@) を使って、1つ以上の開始文字を置き換えることもできます。 例:

| フィルター文字列            | 検出結果                     |
| ------------------- | ------------------------ |
| Bel                 | "Bel" で始まるすべての値          |
| @do    | "do" を含むすべての値            |
| Bel@do | "Bel" で始まり、"do" を含むすべての値 |

"完全一致" のような、より詳細なクエリを作成するには、高度なクエリ機能を使用する必要があります。

### 式による高度なクエリ

このオプションを選択すると、エンティティリストの上にクエリエリアが表示され、コンテンツのフィルターに使用する任意の式を入力することができます。

![alt-text](../assets/en/Admin/dataExplorer8.png)

属性クエリでは利用できない高度なクエリを入力することができます。 For example, if you want to find entities with _firstname_ attribute containing "Jim" but not "Jimmy", you can write:

```
firstname=="Jim"
```

You can use any ORDA query expression as [documented with the `query()` function](API/DataClassClass.md#query), with the following limitations or differences:

- For security, you cannot execute formulas using `eval()`.
- Placeholders cannot be used; you have to write a _queryString_ with values.
- スペース文字を含む文字列値は、二重引用符 ("") で囲む必要があります。

たとえば、Employee データクラスの場合に、次のように記述できます:

```
firstname = "Marie Sophie" AND manager.lastname = "@th"
```

You can click on the `v` icon to display both [`queryPlan`](API/DataClassClass.md#queryplan) and [`queryPath`](API/DataClassClass.md#querypath). このエリアでは、サブクエリのブロックにカーソルを合わせると、サブクエリごとの詳細情報が表示されます。

![alt-text](../assets/en/Admin/dataExplorer12.png)

クエリエリアで右クリックすると、以前の有効なクエリが表示されます:

![alt-text](../assets/en/Admin/dataExplorer11.png)

## データの編集

データエクスプローラーでは、属性値の変更や、エンティティの追加または削除をおこなうことができます。 これらは、たとえば実装をテストしたり、無効データの問題を解決したりするための、管理者用の機能です。

### Allow editing

For security reasons, to be able to edit data through the Data Explorer, you first need to enable the editing mode using the **Allow editing** selector. 有効にすると、編集アクションボタンが右側に表示されます:

![allow-editing](../assets/en/Admin/editing.png)

This selector is enabled **per dataclass** and **per browser session**.

:::info

データエクスプローラーを使用してデータを編集する場合には確認ダイアログボックス等が表示されないため、意図しない変更を防ぐためにこのセレクターは存在しています。

:::

### 値の入力

When the **Allow editing** selector is enabled for a dataclass, you can enter values for a new or selected entity through dedicated input widgets in the **Details** area for the selected dataclass.

次のスカラー属性値が編集できます:

- text
- boolean
- numeric
- date
- time
- ピクチャー (ピクチャーをアップロードまたはドラッグ＆ドロップできます)
- オブジェクト (JSON 文字列)

Blob属性は変更できません。

New or modified values are stored in the local cache, you need to [save them explicitely](#saving-modifications) to store them in the data.

### エンティティの作成

You can create a new, empty entity in the selected table by clicking on the creation button ![new-entity](../assets/en/Admin/data-explorer-new.png). You can then [enter values](#entering-values) for this entity.

The new entity is is kept in the local cache, you need to [save it explicitely](#saving-modifications) to store it in the data.

:::info

4D が計算する必要のある属性値 (ID、計算属性) は、エンティティを保存した後にのみ返されます。

:::

### 値のリロード

The **reload** button ![reload](../assets/en/Admin/data-explorer-reload.png) reloads the entity attribute values from the data file. このボタンは、最新の値を表示させたい場合などに便利です。

### 編集の保存

Except for [deletion](#deleting-entities) (see below), entity modifications are done locally and need to be saved so that they are stored in the data file.

To save modifications or to save an entity you created in the Data Explorer, click on the **Save** button ![save](../assets/en/Admin/data-explorer-save.png).

:::info

既存エンティティへの変更は、同じデータクラスの別エンティティを選択すると自動的に保存されます。

:::

競合の場合 (例: 別のユーザーが同じエンティティの同じ属性値を変更した)、データエクスプローラーの下部にエラーメッセージが表示されます。 You can click on the [**Reload** button](#reloading-values) to get the new value from the data and then, apply and save your modifications.

### エンティティの削除

You can delete entities by clicking on the **delete** button ![delete](../assets/en/Admin/data-explorer-delete.png).

To delete a set of entities, select two or more entities in the list area using **Shift+click** (continuous selection) or **Ctrl/Command+click** (discontinuous selection) and click on the **delete** button.

:::note

競合が起きた (サーバー上でロックされているエンティティなど) ために一部のエンティティを削除できなかった場合、リスト内でハイライト表示されます。

:::

:::caution

エンティティを削除する際に確認ダイアログは表示されません。 選択したエンティティは、データから即時に削除されます。

:::
