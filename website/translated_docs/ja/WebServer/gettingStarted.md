---
id: gettingStarted
title: はじめに
---

この章は、データベースのデータを扱う 4D Webサイトをゼロから作成する方法を知りたい、初心者ユーザーを対象としています。 さあ、始めましょう！


## Hello World 例題

まずは、Webサーバーからブラウザーに向けて "Hello World" を送信するところから始めましょう。 もっとも簡単な方法は、プロジェクトを作成して Webサーバーを開始し、`On Web Connection` データベースメソッドにテキストを返す短いコードを書くことです。

### Webサーバーの開始

4D Webサーバーを開始するには:

1. 4Dアプリケーションを起動し、新規プロジェクトを作成します。
2. 上部の **実行** メニューから、**Webサーバー開始** を選択します。

これだけです。 Webサーバーが開始します (メニュー項目が **Webサーバー停止** に変わったのが確認できます)。 これでリクエストを処理できるようになりました。 確認のため、デフォルトホームページを表示してみましょう。

### デフォルトホームページの表示

4D Webサーバーは、Projectフォルダーと同じ階層に作成されたデフォルトの `WebFolder` ルートフォルダーに、デフォルトの `index.html` ページを自動的に作成します。

1. Webブラウザーを起動し、Webサーバーの IPアドレス (4D Webサーバーのデフォルト httpポートは 80) に接続します。 Webサーバーとブラウザーが同じマシンにある場合は、**実行** メニューから **Webサーバーテスト** を選択します。

デフォルトのホームページが表示されます:

![](assets/en/WebServer/defaultHomePage.png)

### Hello World の表示

1. エクスプローラーを開いてデータベースメソッドの一覧を表示し、`On Web Connection` をダブルクリックします。

2. 次のコードを入力します:

```4d
Case of 
    : ($1="/hello")
        WEB SEND TEXT("Hello World!")
    Else 
        // 404エラーなど
End case 
```

[`On Web Connection`](httpRequests.md#on-web-connection) データベースメソッドは、受信リクエストに対して呼び出され、ターゲットURLを引数として `$1` に受け取ります。 この非常にシンプルなコードは、ただテキストをブラウザーに送信します。

3. ブラウザーで次の URL を入力します:

```
http://localhost/hello
```

Webサーバーがリクエストを処理して次を返します:

![](assets/en/WebServer/hello.png)


## データベースのデータを取得する

次に、データベースからデータを取得するのが、いかに簡単か見てみましょう。 まず、テーブルを作成し、そこにデータを入力していきます。

たとえば、数件のレコードを含む 1つのテーブルを持つ基本的なデータベースを作成します:

![](assets/en/WebServer/hello2.png) ![](assets/en/WebServer/hello3.png)

### ページへのデータ表示

データを表示するもっとも簡単な方法は、タグを含む [テンプレートページ](templates.md) を呼び出すことです。

1. 任意のテキストエディターを使用して、以下の行を格納するファイルを作成します:

```html
<html>
<body>
<!--#4DCODE ALL RECORDS([Friends])-->
<!--#4DLOOP [Friends]-->
<!--#4DTEXT [Friends]lastName--> <!--#4DTEXT [Friends]firstName--><BR>
<!--#4DENDLOOP-->
</body>
</html>
```

2. ファイル名を "friends.shtml" とし、プロジェクトの **WebFolder** に保存します。
3. ブラウザーで次の URL を入力します:

```
http://localhost/friends.shtml
```

`.shtml` のページは、Webサーバーによって自動的に処理されます。 データを表示するページが返されます:

![](assets/en/WebServer/hello3bis.png)

### RESTリクエスト

データを *表示* するだけでなく、*使用* するには、ORDA と RESTサーバーを使うことができます。 [ORDAコンセプト](ORDA/overview.md) により、`Friends` テーブルは自動的にデータクラスにマッピングされ、[REST](REST/gettingStarted.md) を通じて利用可能です。


1. RESTサーバーを使ってデータにアクセスしましょう: "ストラクチャー設定" ダイアログボックスで "Web/RESTリソース" ページを選択し、**RESTサーバーとして公開** オプションをチェックします。

![](assets/en/WebServer/hello5.png)

2. ブラウザーで次の URL を入力します:

```
http://localhost/rest/$catalog
```

Webサーバーは結果を JSON で返します:

```json
{
    "__UNIQID": "3F1B6ACFFE12B64493629AD76011922D",
    "dataClasses": [
        {
            "name": "Friends",
            "uri": "/rest/$catalog/Friends",
            "dataURI": "/rest/Friends"
        }
    ]
}
```

カタログ、つまりデータストアで公開されているデータクラスと属性のリストが取得されます。

任意のデータを取得することもできます。

3. 以下のURLを入力します:

```
http://localhost/rest/Friends
```

サーバーは、Friendsデータクラスのエンティティ、つまりデータを返します:

```json
{
    "__DATACLASS": "Friends",
    "__entityModel": "Friends",
    "__GlobalStamp": 0,
    "__COUNT": 4,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-10-27T14:29:01.914Z",
            "__STAMP": 1,
            "ID": 1,
            "lastName": "Smith",
            "firstName": "John"
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2020-10-27T14:29:16.035Z",
            "__STAMP": 1,
            "ID": 2,
            "lastName": "Brown",
            "firstName": "Danny"
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2020-10-27T14:29:43.945Z",
            "__STAMP": 1,
            "ID": 3,
            "lastName": "Purple",
            "firstName": "Mark"
        },
        {
            "__KEY": "4",
            "__TIMESTAMP": "2020-10-27T14:34:58.457Z",
            "__STAMP": 1,
            "ID": 4,
            "lastName": "Dupont",
            "firstName": "Jenny"
        }
    ],
    "__SENT": 4
}
```

この非常にシンプルな例では、Webサーバーが [RESTサーバー](REST/gettingStarted.md) と透過的に通信し、要求されたデータが公開されていればそれを返す様子を示しています。 返されたデータは、Webインターフェース内で javascript や html のコードと簡単に結びつけることができます。 データクラスにバインドされている、洗練された Webインターフェースの例として、ビルトインの [Webデータエクスプローラー](Admin/dataExplorer.md) を参照ください。




## ログインとセッション

上の例で Webリクエストは、アプリケーションへの自由なアクセスを得ています。 しかし、Webアプリケーションの世界では、データアクセスのセキュリティが最優先されます。 4D Webサーバーに接続する際には、ユーザーを認証し、そのナビゲーションを制御する必要があります。

### ユーザーテーブルの作成

The most simple and secured way to log a user on the 4D web server is based upon the following scenario:

- Users are stored in a dedicated, unexposed table (named *WebUsers* for example)
- The *WebUsers* table could be [encrypted](MSC/encrypt.md) and stores the user login and a hash of their password.

1. Create a table with some fields, for example:

![](assets/en/WebServer/helloUsers.png)

2. Write and execute the following code to create a user:

```4d
var $webUser : cs.WebUsersEntity

$webUser:=ds.WebUsers.new()
$webUser.firstName:="John"
$webUser.lastName:="Doe"
// the password would be entered by the user
$webUser.password:=Generate password hash("123")
$webUser.userId:="john@4d.com"
$webUser.save()
```



### ユーザー認証

> To be secure from end to end, it is necessary that the whole connection is established via [https](webServerConfig.md#enable-https).

1. Open the Explorer and create a project method named "login".

3. Write the following code:

```4d
var $indexUserId; $indexPassword : Integer
var $userId; $password : Text
var $user; $info : Object
ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

// get values sent in the header of the request
WEB GET VARIABLES($anames; $avalues)

// look for header login fields
$indexUserId:=Find in array($anames; "userId")
$userId:=$avalues{$indexUserId}
$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

//look for a user with the entered name in the users table
$user:=ds.WebUsers.query("userId = :1"; $userId).first()

If ($user#Null) //a user was found
        //check the password
    If (Verify password hash($password; $user.password))
            //password ok, fill the session
        $info:=New object()
        $info.userName:=$user.firstName+" "+$user.lastName
        Session.setPrivileges($info)
            //You can use the user session to store any information
        WEB SEND TEXT("Welcome "+Session.userName)
    Else 
        WEB SEND TEXT("Wrong user name or password.")
    End if 
Else 
    WEB SEND TEXT("Wrong user name or password.")
End if 
```

3. Display the method properties by clicking on the **[i]** button in the code editor, check the `4D tags and URLs (4DACTION...)` option and click **OK**.

![](assets/en/WebServer/hello0.png)


4. ブラウザーで次の URL を入力します:

```
http://localhost/4DACTION/login/?userID=john@4d.com&password=123
```

> Using such URLs is not recommended, it is only presented here to keep the example simple. A more realistic login request must be handled through a web form and a POST request. See [this page](sessions.md#example) for an example of form POST.

Then you will be logged for the session:

![](assets/en/WebServer/login1.png)

Wrong credentials would be rejected:

![](assets/en/WebServer/login2.png)

Once a user is logged, you can handle the associated session using the `WEB Get Current Session ID` method. See the [User sessions](sessions.md) page. 

