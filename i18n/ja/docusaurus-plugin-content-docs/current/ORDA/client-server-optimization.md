---
id: client-server-optimization
title: Client/Server Optimization
---

4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. この最適化機構は、ネットワーク間でやり取りされるデータの量を大幅に縮小させることで 4Dの実行速度を向上させます。 これには以下のような機能が含まれます:

- the **optimization context**
- the **ORDA cache**

## Supported architectures

ORDA client/server architectures that support the optimization are:

- Server datastores accessed by 4D remote desktop applications through [**`ds`**](../API/DataStoreClass.md#ds),
- [Remote datastores](remoteDatastores.md), accessed via [**`Open datastore`**](../API/DataStoreClass.md#open-datastore) (client REST requests).

## Optimization context

最適化コンテキストは、以下の実装に基づいています:

- クライアントがサーバーに対してエンティティセレクションのリクエストを送ると、4D はコード実行の途中で、エンティティセレクションのどの属性がクライアント側で実際に使用されているかを自動的に "学習" し、それに対応した "最適化コンテキスト" をビルドします。 このコンテキストはエンティティセレクションに付随し、使用された属性を保存していきます。 他の属性があとで使用された場合には自動的に情報を更新していきます。 以下のメソッドや関数が学習のトリガーとなります:
  - [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- サーバー上の同じエンティティセレクションに対してその後に送られたリクエストは、最適化コンテキストを再利用して、サーバーから必要な属性のみを取得していくことで、処理を速くします。 For example, in an [entity selection-based list box](#entity-selection-based-list-box), the learning phase takes place during the display of the first row. 次の行からは、表示が最適化されます。 以下の関数は、ソースのエンティティセレクションの最適化コンテキストを、戻り値のエンティティセレクションに自動的に付与します:
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#reusing-the-context-property) below).

- You can build optimization contexts manually using the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function (see [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::note Compatibility Note

Contexts handled in connections established through [`Open datastore`](../API/DataStoreClass.md#open-datastore) can only be used between similar main versions of 4D. For example, a 4D 20.x remote application can only use contexts of a 4D Server 20.x datastore.

:::

### 例題

以下のようなコードがあるとき:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer は Company テーブルを参照します
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in _$sel_ from the second iteration of the loop.

### Reusing the `context` property

You can increase the benefits of the optimization by using the **context** property. このプロパティは、あるエンティティセレクション用に "学習した" 最適化コンテキストを参照します。 これを新しいエンティティセレクションを返す ORDA関数に引数として渡すことで、その返されたエンティティセレクションでは学習フェーズを最初から省略して使用される属性をサーバーにリクエストできるようになります。

> You can also create contexts using the [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function.

エンティティセレクションを扱うすべての ORDA関数は、<strong x-id="1">context</strong> プロパティをサポートします (たとえば <a href="../API/DataClassClass.md#query"><code>dataClass.query( )</code></a> あるいは <a href="../API/DataClassClass.md#all"><code>dataClass.all( )</code></a> など)。 All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). ただし、 コードの他の部分で新しい属性が使用された際にはコンテキストは自動的に更新されるという点に注意してください。 同じコンテキストを異なるコードで再利用しすぎると、コンテキストを読み込み過ぎて、結果として効率が落ちる可能性があります。

> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the [`dataClass.get()`](../API/DataClassClass.md#get) function).

**Example with `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")
 
 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered   
 // and associated to context "shortList"
 
 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated   
 // to context "shortList" is applied
 
 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  
 // is triggered and associated to context "longList"
 
 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  
 // associated to context "longList" is applied
```

### エンティティセレクション型リストボックス

Entity selection optimization is automatically applied to entity selection-based list boxes in 4D client/server desktop applications, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). これによって、"ページ" が追加属性をリクエストしても、リストボックスのコンテキストのオーバーロードが避けられます。 Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

その後、エンティティを走査する関数がサーバーに送信するリクエストにも、同じ最適化が適用されます。 以下の関数は、ソースエンティティの最適化コンテキストを、戻り値のエンティティに自動的に付与します:

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

たとえば、次のコードは選択したエンティティをロードし、所属しているエンティティセレクションを走査します。 エンティティは独自のコンテキストにロードされ、リストボックスのコンテキストは影響されません:

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```

### コンテキストの事前設定

最高のパフォーマンスを得るには、アプリケーションの機能またはアルゴリズムごとに最適化コンテキストが定義されていることが推奨されます。 たとえば、あるコンテキストは顧客に関するクエリに、別のコンテキストは商品に関するクエリに使用することができます。

最高レベルに最適化された最終アプリケーションを提供したい場合、以下の手順でコンテキストを事前に設定することで、学習フェーズを省略することができます:

1. アルゴリズムを設計します。
2. アプリケーションを実行し、自動学習メカニズムに最適化コンテキストを作成させます。
3. Call the [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) or [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) function to collect  contexts. You can use the [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) and [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) functions to analyse how your algorithms use attributes.
4. In the final step, call the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function to build contexts at application startup and [use them](#reusing-the-context-property) in your algorithms.

## ORDAキャッシュ

最適化のため、ORDA経由でサーバーにリクエストしたデータは、(4Dキャッシュとは異なる) ORDAリモートキャッシュに読み込まれます。 ORDAキャッシュはデータクラスごとに構成され、30秒後に失効します。

キャッシュに含まれるデータは、タイムアウトに達すると期限切れとみなされます。 期限切れデータにアクセスする場合は、サーバーにリクエストが送信されます。 期限切れデータは、スペースが必要になるまでキャッシュに残ります。

デフォルトでは、ORDAキャッシュは 4D によって透過的に処理されます。 しかし、以下の ORDAクラスの関数を使用して、その内容を制御することができます:

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)
