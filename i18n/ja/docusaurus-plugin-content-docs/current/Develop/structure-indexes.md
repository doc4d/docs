---
id: structure-indexes
title: インデックス
---

頻繁に検索や並び替えで使用されるフィールドに、インデックスを設定できます。例えば姓、会社名、製品名などの属性(フィールド)を使用してエンティティ(レコード)の検索や並び替えを行う場合、これらのフィールドにインデックスを設定することができます。またこのプロパティはテーブル間でのリレーションを確立するためにも使用されます。

フィールドにインデックスが設定されると、4D はそのフィールド用に内部的なインデックステーブルを作成します。このテーブルを使用して、4D はそのフィールドに対する素早い検索や並び替えを実行できるようになります。インデックスが設定されていないフィールドを使用して検索や並び替えを行う場合、4D はシーケンシャルにデータをロードし、レコード毎順番に評価します。インデックスを使用すれば、4D はすべてのレコードを読み込むことなく検索や並び替えを行えます。

インデックスは文字、テキスト、日付、時間、ブール、整数、倍長整数、64bit 整数、実数、ピクチャー、そしてオブジェクト型に設定できます。レコードの作成、削除、編集を行うと、4D は自動でそのインデックステーブルを更新します。既に存在するフィールドにインデックスを作成すると、4D は自動で既存のデータをインデックス化します。必要なだけフィールドにインデックスを設定できます。データベースを上位バージョンに変換する際や[データ圧縮](../MSC/compact.md) 時など、特定の処理を行った際にもインデックスが再構築されます。

各インデックステーブルの上限は次のとおりです:

- 文字、テキスト、フロートインデックスのキー: 1280億
- そのほかのインデックスタイプ (スカラーデータ) のキー: 2560億

すべてのフィールドにインデックスを設定するようなことはしないでください。インデックスはデータベースのサイズを増大させ、ディスク上のスペースを消費します。またインデックスを設定すればするほど、レコードの保存に時間を要するようになる点に留意してください。4D はレコードを受け入れるたびにインデックステーブルを更新しなければならないためです。

ストラクチャーエディター中で、インデックスが設定されたフィールドは**太字**で表示されます。

## インデックスのタイプ

4D では4種類のインデックスタイプを提供しています。そのいずれを選択するかは一般的に期待する結果と、フィールドに現れるデータに基づきます。各インデックスタイプの説明は以下の通りです:

- **標準インデックス:** これは1つのフィールドで構成されるインデックスで、標準のデータベース処理 (検索や並び替え) の速度を向上するために使用します。 4Dではさらにこのタイプのインデックスに対し、BツリーまたはクラスターBツリーを選択できます(ただしオブジェクトフィールドを除く)。
- **複合インデックス:** このインデックスは、しばしばともに検索条件に使用される2つ以上のフィールドの合成値(例えば LastName+FirstName) を格納します。
- **キーワードインデックス:** このインデックスは文字、テキストおよびピクチャーフィールドでのみ使用できます。テキスト内部の検索を容易にする目的で使用されます。またピクチャーの場合は、ピクチャーに割り当てたキーワードで検索を行うために使用できます。
- **ベクトルインデックス:** このインデックスは、[埋め込み](./field-properties.md#4dvectorクラス) を保存しているオブジェクトフィールドに対するAI ベースのクエリの速度を向上させるために設計されています。

### 標準インデックス

標準インデックスはデータベース処理の速度を向上する目的で使用されます(標準のインデックスは、キーワードインデックスや複合インデックスとは異なり、一般的なインデックスを参照します)。 4D は2つのタイプの標準インデックス、BツリーとクラスターBツリーを提供します。

- **Bツリー:** 標準のBツリータイプインデックス。この汎用目的のインデックスはほとんどのインデックスの要件を満たします。
- **クラスターBツリー:** クラスターを使用したBツリータイプのインデックス。このアーキテクチャーはインデックスに含まれるキーの量が少ない場合 (例えば同じ値がデータ中に繰り返し現れる場合) に有効です。

:::note

テキストタイプのフィールドに割り当てたBツリーインデックスは、フィールドの最初の1024文字 (最大) を格納します。そのため、このコンテキストにおいては、1024文字を超える検索をインデックスを使用して行うと失敗します。

:::

インデックスアーキテクチャーの選択を容易にするために、自動オプションを選択できます。この場合4D は自動でデータのタイプに応じインデックスのタイプを選択します。オブジェクト型のフィールドでは、選択できるオプションは**自動** オプションのみです(ただしそのフィールドに4D.Vector クラスを割り当てた場合を除く([以下参照](#ベクトルインデックス)))。この場合、**自動** オプションを使用すれば、全ての属性パスは自動的にインデックスされます。

### 複合インデックス

複合インデックスでは、レコード毎に2つ以上のフィールドの値の合成値を格納します。よく見られる例はFirstName+LastName フィールドの複合インデックスです。この場合、“Peter Smith”の検索は標準の検索(まず“Smith”を検索し次に“Peter”を検索する) よりも速くなります。

4D は検索や並び替えの際に自動で複合インデックスを利用します。例えば複合インデックス “City+ZipCode” が存在するとき、“lastname=carter & city=new york & zipcode =102@”のような検索を行うと、自動でその複合インデックスが利用されます。

ストラクチャーエディターでは、複合インデックスはインデックス作成ダイアログでのみ作成することができます。このダイアログボックスについては後述の“インデックスの作成”を参照してください。

### キーワードインデックス

キーワードインデックスは文字、テキスト、およびピクチャーフィールドに使用することができます。

- 文字およびテキストフィールドにこのタイプのインデックスを割り当てると、フィールドに格納されたテキストは単語ごとにインデックス化されます。 1文字や2文字の単語も含め、すべての単語がインデックス化されます。このタイプのインデックスはテキストフィールドのキーワードによる検索速度を劇的に向上させます。  
  文字やテキストフィールドには標準のインデックスとキーワードインデックス両方を割り当てることができます (データがレコード内に保存されている場合)。 4D はコンテキストに応じて適切なインデックスを使用します。

- ピクチャーフィールドにキーワードインデックスを使用すると、ピクチャーに割り当てられたキーワード (メタデータ) に対する検索が劇的に速くなります。警告: ピクチャーキーワードインデックスはIPTC/Keywordsタイプのメタデータを使用します。これらのタイプのメタデータは特にTIFFとJPEGでサポートされています (BMP、PNG、GIFではサポートされていません)。他のタイプのメタデータはインデックスでサポートされません。  
  ピクチャーのキーワードインデックスは、ピクチャーフィールドが保存 (レコードが作成・更新される、ピクチャーが読み込まれるなど) されるたびにIPTC/Keywordsタイプのキーワードがあれば、4Dが自動で更新します。 IPTC/Keywords タイプのメタデータは、ピクチャー内にあるのが見つかったときに4D によって自動的にインデックス化されます(ピクチャーフィールドのインデックスに含めるために[`SET PICTURE METADATA`](../commands/set-picture-metadata) コマンドを呼び出す必要はありません)。

キーワードインデックスに含まれるキーワードのリストを取得するために[`DISTINCT VALUES`](../commands/distinct-values) コマンドを使用できます。

テキストやピクチャーフィールドのキーワードインデックスは [`%` 演算子](../Concepts/dt_string.md#キーワード)で使用します。インデックスの値を明示的に使用するには、この演算子をクエリまたは並び替えフォーミュラで使用しなければなりません。例:

```4d
QUERY([PICTURES];[PICTURES]Photos %"cats")
// cats キーワードを持つ写真を探す
```

この書式はすべてのクエリおよび並び替えコマンドで同様に動作します: [`QUERY BY FORMULA`](../commands/query-by-formula)、[`QUERY SELECTION`](../commands/query-selection)、[`ORDER BY`](../commands/order-by) 等。

### ベクトルインデックス

ベクトルインデックスは、`4D.Vector` [クラス](./field-properties.md#4dvector-クラス)として設定されたオブジェクト型フィールドに対して割り当て可能です。この場合、以下のオプションが利用可能です:

![](../assets/en/Develop/vector-index.png)

- **コサイン**: このベクトルインデックスは[コサイン類似度](../API/VectorClass.md#異なるベクトル計算を理解する) 計算に対して最適化されています。
- **ドット**: このベクトルインデックスは[ドット類似度](../API/VectorClass.md#異なるベクトル計算を理解する) 計算に対して最適化されています。
- **ユークリッド**: このベクトルインデックスは [ユークリッド距離](../API/VectorClass.md#異なるベクトル計算を理解する) 計算に対して最適化されています。
- **自動**: 標準のオブジェクトインデックスタイプ([上記参照](#標準インデックス))。 Null ベクトルを管理したい場合にはこのインデックスタイプを選択できます。その場合、自動的に使用されます。

You can select one or more index types for your vector fields, the appropriate index will be automatically used depending on the actual computation. For optimization reasons, it is recommended to only select necessary index types.

:::tip 関連したblog 記事

[Vector Indexing in 4D: Faster Similarity Search for 4D.Vector Fields](http://blog.4d.com/vector-indexing-in-4d-faster-similarity-search-for-4d-vector-fields)

:::

:::warning Limitation: Vector indexes and transactions

Vector indexes are not compatible with [transaction processing](../Develop/transactions). When vector-indexed records are inserted, updated, or deleted within a transaction, the corresponding index changes are not committed or rolled back with the transaction. As a result, the vector index may become inconsistent with the database state after a rollback, and search results may not reflect the persisted data.

:::

## Index List

The ![](../assets/en/Develop/index-list.png) button of the toolbar in the Structure editor displays the Index List window. This window displays the list of all the indexes of the structure, regardless of their type:

![](../assets/en/Develop/index-window.png)

The Index List can be used to view the main properties of the indexes:

- **Type:** Index type. Each type of index (B-tree, Cluster B-tree, Keyword, Euclidean, Cosine, Dot) is depicted with a different icon.
- **Description:** Table and field(s) of index. For a composite index, this list contains all the fields of the index.
- **Name:** Index name. This property is used in particular by the language commands. You can change or add an index name by double-clicking in this column.

The **[+]** button displays the index property dialog box and allows you to edit the selected index or to add a new index when no index was selected.  
The **[-]** button deletes the selected index (a confirmation dialog box appears).  
This button can be used more particularly to delete composite indexes.

Two additional commands are available in the menu associated with the tool button (enabled when an index is selected:

- **Edit:** Displays the properties of the selected index in the index property dialog box (see next paragraph). This command has the same effect as double-clicking on a row of the list (except for in the name area).
- **Rebuild:** Can be used to delete and rebuild the selected index. A confirmation dialog box appears when you select this command.

## Creating an index

To create a **standard index** directly:

1. Select a field then choose a value from the "Index" menu of the **Inspector palette**.
   **OR**  
   Right-click on the field then select a value from the **Index>** submenu of the context menu.

To create a **composite index** or any other type of index using the index creation dialog box:

1. Select several fields while holding down the **Shift** key (for adjacent selection) or **Ctrl** (Windows) or **Command** (macOS) button then right click on one of the fields and select **New Composite Index...** in the context menu.
   **OR**  
   Select the **New Index...** in the context menu of the table or select **Index** in the add objects menu of the Structure editor tool bar.

The index configuration dialog box then appears.

![](../assets/en/Develop/index-add.png)

It contains the following elements:

- **Table:** List of all the database tables. Choose the table to which the index will belong from this menu.
- **Name:** Index name entry area. This name is used by the 4D language commands.
- **Type:** Selection menu for type of index to be created. If you keep the "Automatic" option, 4D will automatically choose the index type according to the contents of the field.
- **List of Fields:** This area is used to specify the field(s) associated with the index. It can contain a field by default depending on the current selection in the editor.

To add a field to the index, click on the **[+]** button. The list of fields of the selected table is displayed so that you can indicate the field to be added to the index.

- If you want to create a composite index, add each field to be included in the index successively. Once the list is completed, you can reorder the fields using the arrow buttons or using drag and drop.
- If you create a composite index based on primary key fields, make sure you put the fields in the same order in the primary key and in the index.
- If you have chosen the “Keyword Index” type, only Alpha, Text, or Picture fields can be selected. Also in this case, you can include only one field in the index.

To delete a field from the index, select it in the list and click on the **[-]** button.

Once the index has been configured, click on **OK** to generate the index.

## Deleting an index in the Structure editor

You can delete indexes that are no longer useful at any time. This can be carried out directly in the Structure editor or using the [Index List](#index-list) window.

To delete a standard index in the Structure editor:

1. Select the field associated with the index you want to delete, then choose the **None** or uncheck the **Keyword Index** option (for a keyword index) in the Index menu of the **Inspector palette**
   **OR**  
   Right-click on the field associated with the index, then choose the **None** or uncheck the **Keywords** option from the **Index>** submenu of the context menu.

The deletion (and viewing) of a composite index can only be carried out from the List Index window, see above.

## Reindexing a field

You can reindex a field at any time; in other words, rebuild the index table(s) associated with it, in accordance with the data present. This can be useful in the case of application maintenance.

Reindexing can be carried out using the **Rebuild** command in the [Index List](#index-list) window.

Note that modifying the [data language](../settings/database.md#text-comparison) or maintenance operations such as [compacting](../MSC/compact.md) will also cause the indexes to be rebuilt.
