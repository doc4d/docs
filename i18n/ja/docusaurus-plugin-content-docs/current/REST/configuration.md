---
id: configuration
title: サーバー設定
---

4D の RESTサーバーは、標準の HTTPリクエストを用いて外部アプリケーションがアプリケーションのデータにアクセスすることを可能にします。つまり、プロジェクトのデータクラス情報を取得したり、データを操作したり、Webアプリケーションにログインしたり、といったことが可能です。

REST機能を使い始めるまえに、まずは 4D REST サーバーの設定をおこない、これを起動させる必要があります。




## RESTサーバーを開始する

セキュリティ上の理由により、デフォルトでは、4D は RESTリクエストに応答しません。 RESTサーバーを開始し、RESTリクエストを処理するには、**ストラクチャー設定** の **Web** ＞ **Web機能** ページにて、**RESTサーバーとして公開** オプションを有効化する必要があります。

![alt-text](../assets/en/REST/Settings.png)

> RESTサービスは 4D の HTTPサーバーを使用するため、4D Webサーバーが開始されていることを確認してください。

このオプションが有効化されると、「警告: アクセス権が正しく設定されているか確認してください。」という警告メッセージが表示されます。これは REST接続の認証設定がされていない限り、デフォルトではデータベースオブジェクトに自由にアクセスできてしまうためです。

> 変更を反映するには、4Dアプリケーションを再起動する必要があります。


## Controlling REST access

デフォルトでは、REST接続はすべてのユーザーに対してオープンですが、この状態はライセンス管理上もセキュリティ上も推奨されません。

You can configure REST accesses with one of the following means:
- (recommended) enable the **force login** mode and create an [`authentify()`](authUsers.md#authentify) datastore class function to authenticate users and assign privileges to their web session (see [User login modes](authUsers.md#user-login-modes)).
- assign a **Read/Write** user group to REST services in the "**Web** > **Web Features**" page of the Structure Settings;
- write an `On REST Authentication` database method to intercept and handle every initial REST request.


:::info Important

- It is recommended not to enable different REST access control features simultaneously to avoid conflicts.
- If an `On REST Authentication` database method has been defined, any setting made using the "Read/Write" menu on the **Web** > **Web Features** page of the Structure Settings is ignored.

:::

### ストラクチャー設定を使用する

The **Read/Write** menu in the "**Web** > **Web Features**" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.

デフォルトでは、メニューには `\&#060;Anyone&#062;` が選択されています。 これは、REST接続はすべてのユーザーに対してオープンであるという状態を示しています。 グループを指定すると、そのグループに所属する 4Dユーザーアカウントのみが [RESTリクエストを通して 4D にアクセス](authUsers.md) できるようになります。 このグループに所属していないアカウントの場合、4D はリクエストの送信者に対して認証エラーを返します。

> この設定を使用するには、`On REST Authentication` データベースメソッドを定義してはいけません。 これが定義されている場合は、ストラクチャー設定にて指定したアクセス設定は無視されます。

### On REST Authentication データベースメソッドを使用する
`On REST Authentication` データベースメソッド は 4D 上で RESTセッションの開始を管理するための方法を提供します。 RESTリクエストによって新規セッションが開始される際、このデータベースメソッドは自動的に呼び出されます。 [RESTセッション開始のリクエスト](authUsers.md) を受信すると、そのリクエストヘッダーには接続の識別子が含まれています。 これらの識別子を評価するために `On REST Authentication` データベースメソッドは呼び出されます。 評価にあたっては、4Dアプリケーションのユーザーリストを使用することもできますし、独自の識別子のテーブルを使用することもできます。 For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).



## テーブルやフィールドの公開

4Dアプリケーションの RESTサービスが有効化されると、[データストアインターフェース](ORDA/dsMapping.md#データストア) を通して 4Dデータベースのすべてのテーブルとフィールドおよび格納データが RESTセッションによってデフォルトでアクセス可能です。 つまり、すべてのデータにアクセス可能ということです。 たとえば、データベースに [Employee] テーブルが含まれている場合、次のように書くことができます:

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

2. **RESTリソースとして公開** オプションの選択を解除します: ![alt-text](../assets/en/REST/table.png) 公開設定を変更する各テーブルに対して、この手順を繰り返します。


### フィールドの公開

デフォルトでは、すべての 4Dデータベースフィールドが REST に公開されています。

テーブルの一部のフィールドのみを非公開にしたい状況もあるでしょう。 たとえば、[Employees]Salary のようなフィールドは非公開の方がよいでしょう。

フィールドを非公開にするには:

1. ストラクチャーエディターにて対象となるフィールドを選択し、右クリックでコンテキストメニューを開いてフィールドプロパティを選択します。

2. フィールドの **RESTリソースとして公開** オプションの選択を解除します: ![alt-text](../assets/en/REST/field.png) 公開設定を変更する各フィールドに対してこの手順を繰り返します。

> あるフィールドが REST を通してアクセス可能であるためには、その親テーブルも公開されている必要があります。 親テーブルが公開されていない場合、各フィールドの公開設定に関わらず、すべてのフィールドがアクセス不可になります。


## プリエンプティブモード

4D Server上では、**インタプリタモードであっても**、RESTリクエストは自動的にプリエンプティブプロセスで処理されます。 そのため、コードは [プリエンプティブ実行に準拠](../WebServer/preemptiveWeb.md#スレッドセーフなWebサーバーコードの書き方) している必要があります。

> サーバーマシン上のインタープリターWebコードをデバッグするには、あらかじめサーバーのデバッガーを [サーバー](../Debugging/debugging-remote.md) または [リモートマシン](../Debugging/debugging-remote.md#リモート4dクライアントでのデバッガーの有効化) で有効化する必要があります。 これにより、Webプロセスがコオペラティブモードに切り替わり、Webサーバーコードのデバッグが可能になります。

シングルユーザーの 4D では、インタープリターコードは常にコオペラティブモードで実行されます。
