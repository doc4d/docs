---
id: authUsers
title: ユーザーとセッション
---

When [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions) (recommended), REST requests can create and use [web user sessions](WebServer/sessions.md), providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.

When a web user session is opened, you can handle it through the `Session` object and the [Session API](API/SessionClass.md). Subsequent REST requests reuse the same session cookie.

> - On 4D Server, opening a REST session might require that a free 4D client license is available, depending on the [user login mode](#user-login-modes).<br/>
> - シングルユーザーの 4D では、テスト目的で RESTセッションを 3つまで開くことができます。


## User login modes

The user login mode allows you to control how REST requests acquire 4D Client licenses. You can choose between two user login modes: "default", or "force login".

You set the user login mode through the `forceLogin` property in the [`roles.json` file](../ORDA/privileges.md#rolesjson-file):

- the **default mode** is used if the "forceLogin" property is missing or set to "false",
- the **force login** mode is used if the "forceLogin" property is set to "true".

:::caution

If you modify this property, the server must be restarted to take the change into account.

:::

:::note

In Qodly Studio for 4D, the mode can be set using the [**Force login** option](../webServer/qodly-studio.md#force-login) in the Privileges panel.

:::


### Default mode

In the default mode, any REST request is processed in a web user session that automatically consumes a license (the web user session is created if it does not already exist). You can use this simple mode if you don't need to control how many licenses are retained on the server. When the default mode is enabled, you can authenticate users through the `On REST Authentication` database method (see below).


### Force login mode

In "force login" mode, license usage is disconnected from web user sessions. A license is required only when the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) is executed, allowing you to control the number of used licenses.

[Descriptive REST requests](#descriptive-rest-requests) are always processed by the server, even if no web user session using a license is opened. In this case, they are processed through "guest" sessions.

All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) function for the session. Executing this function triggers the 4D license consumption.

This mode allows you to implement the following login sequence:

1. At the first REST call (for a webform call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than descriptive requests, no license consumption.
2. You call your exposed [datastore class function](../ORDA/ordaClasses.md#datastore-class) named `authentify()` (created beforehand), in which you check the user credentials and call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) with appropriate privileges.
3. The `/rest/$catalog/authentify` request is sent to the server along with user credentials. This step only requires a basic login form that do not access data; it can be a Qodly form (called via the `/rest/$getWebForm` request).
4. If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted.

![alt-text](../assets/en/REST/force-login-2.jpeg)

### Descriptive REST requests

Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). These requests are:

- [`/rest/$catalog`]($catalog.md) requests (e.g. `/rest/$catalog/$all`) - access to available dataclasses
- `/rest/$catalog/authentify` - the datastore function used to login the user
- `/rest/$getWebForm` - the rendering of a Qodly form

![alt-text](../assets/en/REST/force-login-1.jpeg)


### `Function authentify`

#### シンタックス

```4d
exposed Function authentify({params : type}) {-> result : type}
    // code
```

The `authentify()` function must be implemented in the [DataStore class](../ORDA/ordaClasses.md#datastore-class) of the project and must be called through a REST request.

This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.

The function can receive any authentication or contextual information as [parameter(s)](classFunctions.md#parameters) and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request.

This function should contain two parts:

- some code to identify and authenticate the REST request sender,
- if the authentication is successful, a call to [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) that assigns appropriate privileges to the session.

If the function does not call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected.


#### 例題

You only want to know users to open a web session on the server. You created the following `authentify()` function in the datastore class:

```4d
exposed Function authentify($credentials : Object) : Text

var $users : cs.UsersSelection
var $user : cs.UsersEntity

$users:=ds.Users.query("name = :1"; $credentials.name)
$user:=$users.first()

If ($user#Null) //the user is known
    If (Verify password hash($credentials.password; $user.password))
        Session.setPrivileges("vip")
    Else 
        return "Wrong password"
    End if 
Else 
        return "Wrong user"
End if 
```


To call the `authentify()` function:

**POST** `127.0.0.1:8111/rest/$catalog/authentify`

リクエストのボディ:

```json
[{"name":"Henry",
"password":"123"}]
```



## Using `On REST Authentication`

In default login mode (i.e. the "force login" mode is disabled), you can log in a user to your application by calling [`$directory/login`]($directory.md#directorylogin) in a POST request including the user's name and password in the header. このリクエストは `On REST Authentication` データベースメソッド (存在すれば) を呼び出します。このメソッド内でユーザーの認証をおこなうことができます (後述参照)。

`On REST Authentication` データベースメソッドが定義されてない場合には、`guest` セッションが開かれます。



### 例題

この例では、ユーザーが htmlページにメールアドレスとパスワードを入力し、POST で [`$directory/login`]($directory.md#directorylogin) をリクエストします (htmlページの送信においては、HTTPS接続の使用が推奨されます)。 これによて呼び出された `On REST Authentication` データベースメソッドがユーザー認証をおこない、セッションを確立します。

htmlログインページ:

![alt-text](../assets/en/REST/login.png)


```html
<html><body bgcolor="#ffffff">

<div id="demo">
    <FORM name="myForm">
メールアドレス: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
パスワード: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<button type="button" onclick="onClick()">
ログイン
</button>
<div id="authenticationFailed" style="visibility:hidden;">ログインに失敗しました</div>
</FORM>
</div>

<script>
function sendData(data) {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.status == 200) {      
      window.location = "authenticationOK.shtml"; 
      }
      else {
      document.getElementById("authenticationFailed").style.visibility = "visible";
      }
  };

  XHR.open('POST', 'http://127.0.0.1:8044/rest/$directory/login'); // RESTサーバーアドレス

  XHR.setRequestHeader('username-4D', data.userId);
  XHR.setRequestHeader('password-4D', data.password);
  XHR.setRequestHeader('session-4D-length', data.timeout);

  XHR.send();
};
function onClick()
{
sendData({userId:document.forms['myForm'].elements['userId'].value , password:document.forms['myForm'].elements['password'].value , timeout:120})
}
</script></body></html>

```

サーバーにログイン情報が送信されると、`On REST Authentication` データベースメソッドが呼び出されます:

```4d
    // On REST Authentication データベースメソッド

#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean
var $sales : cs.SalesPersonsEntity

$Accepted:=False

    // ヘッダーに username-4D と password-4D を含めて '/rest' URL が呼び出されました
If ($userId#"")
    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()
    If ($sales#Null)
        If (Verify password hash($password; $sales.password))
            fillSession($sales)
            $Accepted:=True
        End if 
    End if 
End if 
```

> 一旦呼び出されて `True` を返すと、同セッションにおいて `On REST Authentication` データベースメソッドはそれ以上呼び出されません。

`fillSession` プロジェクトメソッドは、たとえば次のようにユーザーセッションを初期化します:

```4d
#DECLARE($sales : cs.SalesPersonsEntity)
var $info : Object

$info:=New object()
$info.userName:=$sales.firstname+" "+$sales.lastname

Session.setPrivileges($info)

Use (Session.storage)
    If (Session.storage.myTop3=Null)
        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
    End if 
End use
```



