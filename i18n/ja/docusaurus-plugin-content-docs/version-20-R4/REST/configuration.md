---
id: configuration
title: サーバー設定
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, _i.e._ to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

REST機能を使い始めるまえに、まずは 4D REST サーバーの設定をおこない、これを起動させる必要があります。

> - On 4D Server, opening a REST session requires that a free 4D client licence is available.<br/>
> - シングルユーザーの 4D では、テスト目的で RESTセッションを 3つまで開くことができます。
> - You need to manage the [session](authUsers.md) for your requesting application.

## RESTサーバーを開始する

セキュリティ上の理由により、デフォルトでは、4D は RESTリクエストに応答しません。 If you want to start the REST Server, you must check the **Expose as REST server** option in the **Web** > **Web Features** page of the structure settings in order for REST requests to be processed.

![alt-text](../assets/en/REST/Settings.png)

> RESTサービスは 4D の HTTPサーバーを使用するため、4D Webサーバーが開始されていることを確認してください。

このオプションが有効化されると、「警告: アクセス権が正しく設定されているか確認してください。」という警告メッセージが表示されます。これは REST接続の認証設定がされていない限り、デフォルトではデータベースオブジェクトに自由にアクセスできてしまうためです。

> 変更を反映するには、4Dアプリケーションを再起動する必要があります。

## アクセス権の設定

デフォルトでは、REST接続はすべてのユーザーに対してオープンですが、この状態はライセンス管理上もセキュリティ上も推奨されません。

REST接続は次の方法で制限することができます:

- assigning a **Read/Write** user group to REST services in the "**Web** > **Web Features**" page of the Structure Settings;
- writing an `On REST Authentication` database method to intercept and handle every initial REST request.

> 上に挙げた 2つの方法を同時に使用することはできません。 Once an `On REST Authentication` database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the **Web** > **Web Features** page of the Structure Settings is ignored.

### ストラクチャー設定を使用する

The **Read/Write** menu in the "**Web** > **Web Features**" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.

By default, the menu displays `\<Anyone>`, which means that REST accesses are open to all users. Once you have specified a group, only a 4D user account that belongs to this group may be used to [access 4D by means of a REST request](authUsers.md). このグループに所属していないアカウントの場合、4D はリクエストの送信者に対して認証エラーを返します。

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. これが定義されている場合は、ストラクチャー設定にて指定したアクセス設定は無視されます。

### On REST Authentication データベースメソッドを使用する

The `On REST Authentication` database method provides you with a custom way of controlling the opening of REST sessions on 4D. RESTリクエストによって新規セッションが開始される際、このデータベースメソッドは自動的に呼び出されます。 When a [request to open a REST session](authUsers.md) is received, the connection identifiers are provided in the header of the request. The `On REST Authentication` database method is called so that you can evaluate these identifiers. 評価にあたっては、4Dアプリケーションのユーザーリストを使用することもできますし、独自の識別子のテーブルを使用することもできます。
For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).

## テーブルやフィールドの公開

Once REST services are enabled in the 4D application, by default a REST session can access all tables and fields of the 4D database through the [datastore interface](ORDA/dsMapping.md#datastore). つまり、すべてのデータにアクセス可能ということです。 たとえば、データベースに [Employee] テーブルが含まれている場合、次のように書くことができます:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```

このリクエストで、salary (給与) フィールドが 10000以上の社員データが取得されます。

> "非表示" 属性を選択されたテーブルやフィールドも、デフォルトで REST に公開されています。

REST 経由でアクセス可能なデータストアオブジェクトを制限するには、アクセス不可にするテーブルやフィールドについて "RESTリソースとして公開" オプションを選択解除する必要があります。 許可されていないリソースへの RESTリクエストがあった場合、4Dはエラーを返します。

### テーブルの公開

デフォルトでは、すべてのテーブルが REST に公開されています。

セキュリティ上の理由から、データベースの一部のテーブルのみを公開したい状況もあるでしょう。 たとえば、[Users] テーブルを作成し、その中にユーザー名とパスワードが保存されている場合、そのテーブルは公開しない方が賢明でしょう。

テーブルを公開したくない場合は:

1. ストラクチャーエディターにて対象となるテーブルを選択し、右クリックでコンテキストメニューを開いてテーブルプロパティを選択します。

2. Uncheck the **Expose as REST resource** option:
   ![alt-text](../assets/en/REST/table.png)
   Do this for each table whose exposure needs to be modified.

### フィールドの公開

デフォルトでは、すべての 4Dデータベースフィールドが REST に公開されています。

テーブルの一部のフィールドのみを非公開にしたい状況もあるでしょう。 たとえば、[Employees]Salary のようなフィールドは非公開の方がよいでしょう。

フィールドを非公開にするには:

1. ストラクチャーエディターにて対象となるフィールドを選択し、右クリックでコンテキストメニューを開いてフィールドプロパティを選択します。

2. Uncheck the **Expose as REST resource** for the field.
   ![alt-text](../assets/en/REST/field.png)
   Repeat this for each field whose exposure needs to be modified.

> あるフィールドが REST を通してアクセス可能であるためには、その親テーブルも公開されている必要があります。 親テーブルが公開されていない場合、各フィールドの公開設定に関わらず、すべてのフィールドがアクセス不可になります。
