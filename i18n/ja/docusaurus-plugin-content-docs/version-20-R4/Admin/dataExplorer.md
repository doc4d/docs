---
id: dataExplorer
title: データエクスプローラー
---

データエクスプローラーは、プロジェクトのデータストアにあるデータを表示・クエリ・編集するための Webインターフェースを提供します。 このツールを使用すると、すべてのエンティティを簡単に照会し、属性値に基づいて検索・並べ替え・フィルターすることができます。 このツールは、開発プロセスのどの段階においても問題を迅速に特定するだけでなく、データを管理・編集するのにも役立ちます。

![alt-text](../assets/en/Admin/dataExplorer1.png)

## アクセス設定

データエクスプローラーの設定や認証は [`WebAdmin`](webAdmin.md) Webサーバーコンポーネントに依存しています。

- **設定**: データエクスプローラーの設定は、[`WebAdmin` Webサーバーの設定](webAdmin.md#webadmin-設定) を再利用します。
- **認証**: データエクスプローラーへのアクセスは、[認証されたセッションユーザー](webAdmin.md#認証とセッション) が、"WebAdmin" 権限を持っている場合に許可されます。 **データエクスプローラー** のメニュー項目 (後述参照) からデータエクスプローラーにアクセスした場合、認証は自動的におこなわれます。

> データエクスプローラーへのアクセスは、[`.setAdminProtection()`](API/DataStoreClass.md#setadminprotection) 関数を使って無効化できます。

## データエクスプローラーを開く

データエクスプローラーがクリックされると、必要に応じて [`WebAdmin` Webサーバー](webAdmin.md#starting-the-webadmin-web-server) が自動的に開始されます。

データエクスプローラーWebページに接続するには:

- 4Dアプリケーションから (インターフェースあり):
  - Webエリアにデータエクスプローラーを表示した新しい 4Dウィンドウを開くには、**レコード** メニューから **データエクスプローラー** を選択するか、メインツールバーの **データ** ボタンをクリックします。
  - データエクスプローラーを外部ブラウザーで開くには、**レコード** メニューから "**データエクスプローラーをブラウザーで開く**" を選択するか、メインツールバーの **データ** ボタンを **Alt** キー (Windows) または **Option** キー (macOS) を押しながらクリックします。
- 4D Server からは、**ウインドウ** メニューの **データエクスプローラーをブラウザーで開く** を選択します (データエクスプローラーは、外部ブラウザーでのみ開くことができます)。

- ヘッドレス4Dアプリケーションを使用しているかどうかに関わらず、Webブラウザーを開いて次のアドレスを入力します:

 `IPaddress:HTTPPort/dataexplorer`<br /> または<br /> `IPaddress:HTTPSPort/dataexplorer`

 このコンテキストでは、サーバー上で `WebAdmin` セッションを開くために [アクセスキー](webAdmin.md#アクセスキー) の入力を求められます。

![alt-text](../assets/en/Admin/accessKeyEnter.png)

> [HTTPPort](webAdmin.md#http-ポート) および [HTTPSPort](webAdmin.md#https-ポート) の値は、`WebAdmin` 設定内で定義されます。


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

データエクスプローラーは、[ORDAマッピングルール](ORDA/dsMapping.md#変換のルール) に基づいて、ORDAデータモデルへの全体的なアクセスを提供します。

:::info

データベース側で、ORDAモデルやデータが変更された場合 (テーブルの追加、レコードの編集・削除など)、F5キーなどでデータエクスプローラーのページをブラウザーで更新するだけで、変更が反映されます。

:::

ページ下部のセレクターを使って、表示テーマを **ダークモード** に切り替えることができます。

![alt-text](../assets/en/Admin/dark.png)

![alt-text](../assets/en/Admin/dataExplorer2.png)

このページにはいくつかのエリアがあります:

- 左側には **データクラスエリア** と **属性エリア** があり、表示するデータクラスおよび属性を選択できます。 属性は、ストラクチャーにおける作成順にしたがって並べられます。 プライマリーキーおよびインデックス付きの属性には、専用アイコンが表示されます。 表示されているデータクラス名と属性名のリストは、それぞれの検索エリアを使ってフィルターできます。 ![alt-text](../assets/en/Admin/dataExplorer3.png)

- 中央部には、**検索エリア** と **データグリッド** (選択されたデータクラスのエンティティのリスト) があります。 グリッドの各列は、データストアの属性を表します。
  - デフォルトでは、すべてのエンティティが表示されます。 検索エリアを使用して、表示されるエンティティをフィルターできます。 2つのクエリモードがあります: [属性に基づくクエリ](#属性に基づくクエリ) (デフォルト)、および [式による高度なクエリ](#式による高度なクエリ) です。 対応するボタンをクリックして、クエリモードを選択します (**X** ボタンは、クエリエリアをリセットして、フィルターを停止します)。 ![alt-text](../assets/en/Admin/dataExplorer4b.png)
  - 選択されたデータクラスの名前は、データグリッドの上にタブとして追加されます。 これらのタブを使って、選択されたデータクラスを切り替えることができます。 参照されているデータクラスを削除するには、データクラス名の右に表示される "削除" アイコンをクリックします。
  - 左側の属性のチェックを外すことで、表示されている列数を減らせます。 また、ドラッグ＆ドロップでデータグリッドの列の位置を入れ替えることができます。 列のヘッダーをクリックすると、値に応じて [エンティティを並べ替える](#エンティティの並べ替え) ことができます (可能な場合)。
  - 処理に時間がかかる場合は、進捗バーが表示されます。 赤いボタンをクリックすると、いつでも実行中の処理を停止できます:<br/> ![alt-text](../assets/en/Admin/dataExplorer5.png)

- 右側には **詳細エリア** があり、選択されているエンティティおよび **リレートデータ** (あれば) の属性値が表示されます。 エリア下部にある **First** / **Previous** / **Next** / **Last** のリンクをクリックすることで、データクラスのエンティティ間を移動することができます。
  - すべての属性タイプが表示されます (画像、オブジェクト (json で表現) や、[計算属性](../ORDA/ordaClasses.md#計算属性-1) と [エイリアス属性](../ORDA/ordaClasses.md#エイリアス属性-1) も含む)。
  - リレートデータ (N対1 および 1対Nリレーション) は、展開/折りたたみ可能なエリアで表示できます:<br/> ![alt-text](../assets/en/Admin/dataExplorerRelated.png)
  - 右側のエリアでリレート属性名を **Ctrl+Click** (Windows) または **Command+Click** (macOS) すると、その属性値がフローティングエリアに表示されます:<br/> ![alt-text](../assets/en/Admin/dataExplorerFloat.png)


### エンティティの並べ替え

表示されているエンティティのリストを、属性値に応じて並べ替えることができます。 並べ替えには、ピクチャーとオブジェクトを除くすべての属性を使用できます。

- 列のヘッダーをクリックすると、その列の属性値に応じてエンティティを並べ替えます。 デフォルトでは、昇順でソートされます。 2回クリックすると、降順でソートされます。 並べ替えの基準となる列には小さなアイコンが付き、属性名が *イタリック* で表示されます。

![alt-text](../assets/en/Admin/dataExplorer7.png)

- 属性を基準に複数のレベルでソートできます。 たとえば、従業員を都市別にソートした後、給与別にソートすることができます。 これには、**Shift** キーを押しながら、ソート基準とする各列のヘッダーを順にクリックします。

### 属性に基づくクエリ

このモードでは、データグリッドの属性名の上のエリアに検索 (または除外) する値を入力して、エンティティをフィルターします。 1つまたは複数の属性でフィルター可能です。 入力すると、エンティティリストは自動的に更新されます。

![alt-text](../assets/en/Admin/dataExplorer6.png)

複数の属性を指定した場合は、自動的に AND が適用されます。 たとえば次のフィルターでは、*firstname* 属性が "flo" で始まり、*salary* 属性値が > 50000であるエンティティが表示されます:

![alt-text](../assets/en/Admin/dataExplorer9.png)

**X** ボタンは入力された属性値を削除し、フィルターを停止します。

属性のデータ型に応じて、さまざまな演算子やクエリオプションが利用できます。

> ピクチャーやオブジェクト属性はフィルターできません。

#### 比較演算子

数値、日付、時間型の属性では、デフォルトで "=" 演算子が選択されています。 ただし、演算子のリストから別の演算子を選択することができます ("=" アイコンをクリックするとリストが表示されます)。

![alt-text](../assets/en/Admin/DEFilter1.png)

#### 日付

日付型属性では、ピッカーを使って日付を入力することができます (日付エリアをクリックするとカレンダーが表示されます)。

![alt-text](../assets/en/Admin/DEFilter2.png)

#### ブール

ブール型の属性エリアをクリックすると、**true**/**false** 値だけでなく **null**/**not null** 値でもフィルターすることができます。

![alt-text](../assets/en/Admin/DEFilter3.png)

- **null** は、その属性値が定義されていないことを示します。
- **not null** は、属性値が定義されていることを示します (つまり、true または false)。

#### Text

テキストフィルターは、文字の大小を区別しません (a = A)。

フィルターは "～で始まる" タイプです。 たとえば、"Jim" と入力すると、"Jim" と "Jimmy" が表示されます。

ワイルドカード文字 (@) を使って、1つ以上の開始文字を置き換えることもできます。 例:

| フィルター文字列 | 検出結果                     |
| -------- | ------------------------ |
| Bel      | "Bel" で始まるすべての値          |
| @do      | "do" を含むすべての値            |
| Bel@do   | "Bel" で始まり、"do" を含むすべての値 |

"完全一致" のような、より詳細なクエリを作成するには、高度なクエリ機能を使用する必要があります。

### 式による高度なクエリ

このオプションを選択すると、エンティティリストの上にクエリエリアが表示され、コンテンツのフィルターに使用する任意の式を入力することができます。

![alt-text](../assets/en/Admin/dataExplorer8.png)

属性クエリでは利用できない高度なクエリを入力することができます。 たとえば、*firstname* 属性に "Jim" が含まれ、"Jimmy" が含まれていないエンティティを探すには、次のように記述します:

```
firstname=="Jim"
```

[`query()` 関数の説明](API/DataClassClass.md#query) にある ORDA クエリ式を利用することができますが、次の制限および相違点があります:

- セキュリティ上、`eval()` を使った式を実行することはできません。
- プレースホルダーは使用できません。値の指定された *クエリ文字列* を使用しなくてはなりません。
- スペース文字を含む文字列値は、二重引用符 ("") で囲む必要があります。

たとえば、Employee データクラスの場合に、次のように記述できます:

```
firstname = "Marie Sophie" AND manager.lastname = "@th"
```

[`queryPlan`](API/DataClassClass.md#queryplan) と [`queryPath`](API/DataClassClass.md#querypath) を両方表示するには `v` アイコンをクリックします。 このエリアでは、サブクエリのブロックにカーソルを合わせると、サブクエリごとの詳細情報が表示されます。

![alt-text](../assets/en/Admin/dataExplorer12.png)

クエリエリアで右クリックすると、以前の有効なクエリが表示されます:

![alt-text](../assets/en/Admin/dataExplorer11.png)


## データの編集

The Data Explorer allows you to modify attribute values, add or delete entities. These feature is intended to administrators, for example to test implementations or fix issues with invalid data.

### Allow editing

For security reasons, to be able to edit data through the Data Explorer, you first need to enable the editing mode using the **Allow editing** selector. When enabled, edit action buttons are displayed to the right side:

![allow-editing](../assets/en/Admin/editing.png)

This selector is enabled **per dataclass** and **per browser session**.

:::info

The selector is intended to prevent accidental modifications since no confirmation dialog boxes are displayed when editing data through the Data Explorer.

:::

### Entering values

When the **Allow editing** selector is enabled for a dataclass, you can enter values for a new or selected entity through dedicated input widgets in the **Details** area for the selected dataclass.

The following scalar attribute values can be edited:

- text
- boolean
- numeric
- date
- time
- image (you can upload or drag and drop an image)
- object (JSON string)

Blob attributes cannot be modified.

New or modified values are stored in the local cache, you need to [save them explicitely](#saving-modifications) to store them in the data.


### Creating entities

You can create a new, empty entity in the selected table by clicking on the creation button ![new-entity](../assets/en/Admin/data-explorer-new.png). You can then [enter values](#entering-values) for this entity.

The new entity is is kept in the local cache, you need to [save it explicitely](#saving-modifications) to store it in the data.

:::info

Attribute values that need to be calculated by 4D (IDs, computed attributes) will be returned only after you saved the entity.

:::

### Reloading values

The **reload** button ![reload](../assets/en/Admin/data-explorer-reload.png) reloads the entity attribute values from the data file. This button is useful for example when you want to make sure the displayed values are the most recent saved values.


### Saving modifications

Except for [deletion](#deleting-entities) (see below), entity modifications are done locally and need to be saved so that they are stored in the data file.

To save modifications or to save an entity you created in the Data Explorer, click on the **Save** button ![save](../assets/en/Admin/data-explorer-save.png).

:::info

Modifications on an existing entity are automatically saved when you select another entity of the same dataclass.

:::


In case of conflict (e.g. another user has modified the same attribute value on the same entity), an error message is displayed at the bottom of the Data Explorer. You can click on the [**Reload** button](#reloading-values) to get the new value from the data and then, apply and save your modifications.

### Deleting entities

You can delete entities by clicking on the **delete** button ![delete](../assets/en/Admin/data-explorer-delete.png).

To delete a set of entities, select two or more entities in the list area using **Shift+click** (continuous selection) or **Ctrl/Command+click** (discontinuous selection) and click on the **delete** button.

:::note

If some entities could not be deleted because of a conflict (e.g. entities locked on the server), they are highlighted in the list.

:::

:::caution

No confirmation dialog is displayed when you delete entities. Selected entities are immediately deleted from the data.

:::