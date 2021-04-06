---
id: sessionClass
title: セッション
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### 概要


|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #sessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #sessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #sessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #sessionClass.idleTimeout.Syntax -->](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #sessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #sessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #sessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.userName.Summary -->|




## Session

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #_command_.Session.Syntax -->
**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| 参照  | タイプ        |    | 説明             |
| --- | ---------- |:--:| -------------- |
| 戻り値 | 4D.Session | <- | Session オブジェクト |
<!-- END REF -->


#### 説明

`Session` コマンドは、 <!-- REF #_command_.Session.Summary -->カレントのスケーラブルユーザーWebセッションに対応する `Session` オブジェクトを返します<!-- END REF -->。

This command only works when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions). It returns *Null* when sessions are disabled or when legacy sessions are used.

When scalable sessions are enabled, the `Session` object is available from any web processes in the following contexts:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.


#### 例題

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Sesion is null")
 End case
```



<!-- REF sessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**<!-- END REF -->

<!-- REF #sessionClass.clearPrivileges().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

`.clearPrivileges()` 関数は、 <!-- REF #sessionClass.clearPrivileges().Summary -->対象セッションに紐づいているアクセス権をすべて削除します<!-- END REF -->。 結果的に、当該セッションは自動的にゲストセッションになります。


#### 例題

```4d
// セッションを無効にします
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest は true
```

<!-- END REF -->



<!-- REF sessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### 説明

`.expirationDate` プロパティは、 <!-- REF #sessionClass.expirationDate.Summary -->セッションcookie の有効期限<!-- END REF -->を返します。 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

このプロパティは **読み取り専用** です。 [`.idleTimeout`](#idletimeout) プロパティ値が変更された場合、有効期限は自動的に再計算されます。

#### 例題

```4d
var $expiration : Text
$expiration:=Session.expirationDate // 例: "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF sessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #sessionClass.hasPrivilege().Syntax -->
**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #sessionClass.hasPrivilege().Params -->
| 参照        | タイプ  |    | 説明                                                |
| --------- | ---- |:--:| ------------------------------------------------- |
| privilege | テキスト | <- | 確認するアクセス権の名称                                      |
| 戻り値       | ブール  | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |
<!-- END REF -->


#### 説明

`.hasPrivilege()` 関数は、 <!-- REF #sessionClass.hasPrivilege().Summary -->対象セッションに *privilege* のアクセス権が紐づいていれば true、でなければ false を返します<!-- END REF -->。


#### 例題

"WebAdmin" アクセス権がセッションに紐づいているかを確認します:

```4d
If (Session.hasPrivilege("WebAdmin"))
    // アクセス権が付与されているので、何もしません
Else
    // 認証ページを表示します

End if
```

<!-- END REF -->

<!-- REF sessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.idleTimeout.Syntax -->
**.idleTimeout** : Integer<!-- END REF -->

#### 説明

`.idleTimeout` プロパティは、 <!-- REF #sessionClass.idleTimeout.Summary -->対象セッションが 4D によって終了されるまでの、非アクティブタイムアウト時間 (分単位)<!-- END REF -->を格納します。

プロパティ未設定時のデフォルト値は 60 (1時間) です。

このプロパティが設定されると、それに応じて [`.expirationDate`](#expirationdate) プロパティも更新されます。

> 60 (分) 未満の値を指定することはできません (60 未満の値を設定した場合、タイムアウトは 60 (分) に設定されます)。


このプロパティは **読み書き可能** です。

#### 例題

```4d
If (Session.isGuest())
        // A Guest session will close after 60 minutes of inactivity
    Session.idleTimeout:=60
Else
        // Other sessions will close after 120 minutes of inactivity
    Session.idleTimeout:=120
End if

```

<!-- END REF -->


<!-- REF sessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.isGuest().Syntax -->
**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #sessionClass.isGuest().Params -->
| 参照  | タイプ |    | 説明                                              |
| --- | --- |:--:| ----------------------------------------------- |
| 戻り値 | ブール | <- | True if session is a Guest one, False otherwise |
<!-- END REF -->

#### 説明

The `.isGuest()` function <!-- REF #sessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.


#### 例題

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
    //Do something for Guest user
End if
```


<!-- END REF -->


<!-- REF sessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.setPrivileges().Syntax -->
**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #sessionClass.setPrivileges().Params -->
| 参照         | タイプ    |    | 説明                                                         |
| ---------- | ------ |:--:| ---------------------------------------------------------- |
| privilege  | テキスト   | -> | Privilege name                                             |
| privileges | コレクション | -> | Collection of privilege names                              |
| settings   | オブジェクト | -> | Object with a "privileges" property (string or collection) |
<!-- END REF -->

#### 説明

The `.setPrivileges()` function <!-- REF #sessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the parameter to the session<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

| プロパティ      | タイプ                | 説明                                                 |
| ---------- | ------------------ | -------------------------------------------------- |
| privileges | Text or Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| userName   | テキスト               | User name to associate to the session (optional)   |

If the `privileges` property contains an invalid privilege name, it is ignored.

> In the current implementation (v18 R6), only the "WebAdmin" privilege is available.

By default when no privilege is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### 例題

In a custom authentication method, you set the "WebAdmin" privilege to the user:

```4d
var $userOK : Boolean

... //Authenticate the user

If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```


<!-- END REF -->

<!-- REF sessionClass.storage.Desc -->
## .storage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.storage.Syntax -->
**.storage** : Object<!-- END REF -->

#### 説明

The `.storage` property contains <!-- REF #sessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

This property is **read only** itself but it returns a read-write object.

#### 例題

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if 

```

<!-- END REF -->





<!-- REF sessionClass.userName.Desc -->
## .userName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.userName.Syntax -->
**.userName** : Text<!-- END REF -->

#### 説明

The `.userName` property contains <!-- REF #sessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. You can use it to identify the user within your code.

This property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**. 



<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
