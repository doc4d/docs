---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Session objects are returned by the [`Session`](#session) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### セッションの種類

このクラスは 3種類のセッションをサポートしています:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). これらは Web および REST 接続に使用され、権限を割り当てることができます。
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.

:::note

The availability of properties and functions in the `Session` object depend on the session type.

:::

### 概要

|                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->                          |

## Session

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->

| 引数  | タイプ                        |     | 説明             |
| --- | -------------------------- | :-: | -------------- |
| 戻り値 | 4D.Session |  <- | Session オブジェクト |

<!-- END REF -->

#### 説明

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->.

コマンドを呼び出したプロセスによって、カレントユーザーセッションは次のいずれかです:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions)),
- リモートクライアントセッション
- ストアドプロシージャーセッション

For more information, see the [Session types](#session-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns _Null_.

#### Webセッション

The `Session` object of web sessions is available from any web process:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
- セミダイナミックページにおいて、4Dタグ (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) を介して処理されるコード
- "公開オプション: 4DタグとURL(4DACTION...)" を有効化されたうえで、4DACTION/ URL から呼び出されたプロジェクトメソッド
- モバイルリクエスト用の [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) データベースメソッド
- ORDA functions [called with REST requests](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](WebServer/sessions.md) section.

#### リモートクライアントセッション

The `Session` object of remote client sessions is available from:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- トリガー
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

For more information on remote user sessions, please refer to the [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions) paragraph.

#### ストアドプロシージャーセッション

すべてのストアドプロシージャープロセスは、同じ仮想ユーザーセッションを共有します。 The `Session` object of stored procedures is available from:

- methods called with the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command,
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [4D Server and the 4D Language](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html) page.

#### 例題

"公開オプション: 4DタグとURL(4DACTION...)" を有効にした `action_Session` メソッドを定義しました。 ブラウザーに次の URL を入力してメソッドを呼び出します:

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
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| 引数  | タイプ     |     | 説明                  |
| --- | ------- | :-: | ------------------- |
| 戻り値 | Boolean |  <- | 実行が正常に終わった場合には true |

<!-- END REF -->

#### 説明

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. 結果的に、当該セッションは自動的にゲストセッションになります。

#### 例題

```4d
// セッションを無効にします
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() // $isGuest は true
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### 説明

:::note

このプロパティは、Webユーザーセッションの場合にのみ使用できます。

:::

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`。

このプロパティは **読み取り専用** です。 [`.idleTimeout`](#idletimeout) プロパティ値が変更された場合、有効期限は自動的に再計算されます。

#### 例題

```4d
var $expiration : Text
$expiration:=Session.expirationDate // 例: "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| 引数        | タイプ     |     | 説明                                               |
| --------- | ------- | :-: | ------------------------------------------------ |
| privilege | Text    |  <- | 確認するアクセス権の名称                                     |
| 戻り値       | Boolean |  <- | True if session has _privilege_, False otherwise |

<!-- END REF -->

#### 説明

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.

#### 例題

"WebAdmin" アクセス権がセッションに紐づいているかを確認します:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

End if
```

<!-- END REF -->

<!-- REF SessionClass.id.Desc -->

## .id

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### 説明

The `.id` property contains <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->. この一意の文字列は、サーバーによって各セッションに対して自動的に割り当てられ、そのプロセスを識別することを可能にします。

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### 説明

:::note

このプロパティは、Webユーザーセッションの場合にのみ使用できます。

:::

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

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

<!-- REF SessionClass.info.Desc -->

## .info

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### 説明

:::note

このプロパティは、リモートクライアントおよびストアドプロシージャーセッションの場合にのみ使用できます。

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->.

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| プロパティ            | タイプ                              | 説明                                                                                  |
| ---------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| type             | Text                             | セッションタイプ: "remote" または "storedProcedure"                            |
| userName         | Text                             | 4D user name (same value as [`.userName`](#username))            |
| machineName      | Text                             | リモートセッション: リモートマシンの名前。 ストアドプロシージャーセッション: サーバーマシンの名前 |
| systemUserName   | Text                             | リモートセッション: リモートマシン上で開かれたシステムセッションの名前。                               |
| IPAddress        | Text                             | リモートマシンの IPアドレス。                                                                    |
| hostType         | Text                             | ホストタイプ: "windows" または "mac"                                         |
| creationDateTime | 日付 (ISO 8601) | セッション作成の日時                                                                          |
| state            | Text                             | セッションの状態: "active", "postponed", "sleeping"                         |
| ID               | Text                             | Session UUID (same value as [`.id`](#id))                        |
| persistentID     | Text                             | セッションの永続的な ID                                                                       |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::

<!-- END REF -->

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| 引数  | タイプ     |     | 説明                            |
| --- | ------- | :-: | ----------------------------- |
| 戻り値 | Boolean |  <- | ゲストセッションの場合は true、それ以外は false |

<!-- END REF -->

#### 説明

:::note

This function always returns **True** with remote client and stored procedure sessions.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### 例題

`On Web Connection` データベースメソッドにて:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->

## .setPrivileges()

<details><summary>履歴</summary>

| リリース  | 内容               |
| ----- | ---------------- |
| 19 R8 | roles プロパティをサポート |
| 18 R6 | 追加               |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| 引数         | タイプ        |     | 説明                                                             |
| ---------- | ---------- | :-: | -------------------------------------------------------------- |
| privilege  | Text       |  -> | アクセス権の名称                                                       |
| privileges | Collection |  -> | アクセス権の名称のコレクション                                                |
| settings   | Object     |  -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |
| 戻り値        | Boolean    |  <- | 実行が正常に終わった場合には true                                            |

<!-- END REF -->

#### 説明

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- _privilege_ には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- _privileges_ には、アクセス権の名称を文字列のコレクションとして渡します。

- _settings_ には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | タイプ                 | 説明                                                                                                       |
| ---------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| privileges | Text または Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| roles      | Text または Collection | <li>String containing a role, or</li><li>Collection of strings containing roles</li>                     |
| userName   | Text                | (任意) セッションと紐づけるユーザー名                                                                  |

:::note

権限とロールは、プロジェクトの [`roles.json`](../ORDA/privileges.md#rolesjson-ファイル) ファイルで定義されます。 詳細については、[**権限**](../ORDA/privileges.md) を参照してください。

:::

`privileges` または `roles` プロパティに、[`roles.json`](../ORDA/privileges.md#rolesjson-ファイル) ファイルで宣言されていない名前が含まれている場合、その名前は無視されます。

セッションにアクセス権またはロールが紐づいていない場合、そのセッションはデフォルトで [ゲストセッション](#isguest) です。

[`userName`](#username) プロパティは Session オブジェクトレベルで利用可能です (読み取り専用)。

#### 例題

カスタムな認証メソッドにおいて、ユーザーに "WebAdmin" アクセス権を付与します:

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

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### 説明

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

> サーバーの `Storage` オブジェクトと同様に、`.storage` プロパティは常に "single" で存在します。 共有オブジェクトや共有コレクションを `.storage` に追加しても、共有グループは作成されません。

このプロパティは **読み取り専用** ですが、戻り値のオブジェクトは読み書き可能です。

<Tabs>

<TabItem value="Web session example">

クライアントの IP を `.storage` プロパティに保存します。 `On Web Authentication` データベースメソッドに以下のように書けます:

```4d
If (Session.storage.clientIP=Null) // 最初のアクセス
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if
```

</TabItem>

<TabItem value="Remote session example">

You want to share data between processes in the same session:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### 説明

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. このプロパティは、コード内でユーザーを確認するのに使用できます。

- Webセッションでは、このプロパティはデフォルトで空の文字列です。 これは、[`setPrivileges()`](#setprivileges) 関数の `privileges` プロパティを使って設定することができます。
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

このプロパティは **読み取り専用** です。

<!-- END REF -->
