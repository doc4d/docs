---
id: imapTransporterClass
title: IMAPTransporter
---

`IMAPTransporter` クラスを使って、IMAP メールサーバーからメッセージを取得することができます。


### IMAP Transporter オブジェクト

IMAP Transporter オブジェクトは [IMP New transporter](#imap-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getBoxList().Syntax -->](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMails().Syntax -->](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.move().Syntax -->](#move)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.move().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.numToID().Syntax -->](#numToID)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.searchMails().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.selectBox().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



## IMAP New transporter

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->
**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF imapTransporterClass.IMAP New transporter.Params -->
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |
<!-- END REF -->


#### 説明

`IMAP New transporter` コマンドは、*server* 引数の指定に応じて <!-- REF #_command_.IMAP New transporter.Summary -->新規の IMAP接続を設定します<!-- END REF --> 。戻り値は、新しい *IMAP transporter* オブジェクトです。 返された transporter オブジェクトは、通常メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                              | デフォルト値 (省略時)                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Summary -->| 300                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *必須*                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| なし                               |
| **password** : Text<p>User password for authentication on the server (not returned in *[IMAP transporter](#imap-transporter-object)* object)                                                                  | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| なし                               |
> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。


#### 戻り値

この関数は、[**IMAP transporter オブジェクト**](#imap-transporter-オブジェクト) を返します。 返されるプロパティはすべて **読み取り専用** です。
> IMAP接続は、transporter オブジェクトが消去された時点で自動的に閉じられます。

#### 例題

```4d
 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" // Logsフォルダーに保存するログファイル

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("エラーが発生しました: "+$status.statusText)
 End if
```



<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->



<!-- INCLUDE transporter.authenticationMode.Desc -->





<!-- INCLUDE transporter.checkConnection().Desc -->



## .checkConnectionDelay

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.checkConnectionDelay.Syntax -->
**.checkConnectionDelay** : Integer<!-- END REF -->


#### 説明

`.checkConnectionDelay` 関数は、 <!-- REF #imapTransporterClass.checkConnectionDelay.Summary -->サーバー接続をチェックするまでの最長時間 (秒単位)<!-- END REF -->を格納します。  関数呼び出しの間隔がこの時間を超過する場合、サーバー接続が確認されます。 プロパティが *server* オブジェクトによって設定されていない場合は、デフォルトで 300 という値が使用されます。
> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。 



<!-- INCLUDE transporter.connectionTimeOut.Desc -->



<!-- REF imapTransporterClass.copy().Desc -->
## .copy()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.copy().Params -->
| 参照             | タイプ    |    | 説明                              |
| -------------- | ------ |:--:| ------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | テキスト   | -> | メッセージのコピー先のメールボックス              |
| 戻り値            | オブジェクト | <- | copy処理のステータス                    |
<!-- END REF -->


#### 説明

`.copy()` 関数は、 <!-- REF #imapTransporterClass.copy().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へとコピーします<!-- END REF -->。

以下のものを渡すことができます:

- *msgsIDs* には、コピーするメッセージの固有ID を格納したコレクション
- *allMsgs* には、選択されているメールボックスの全メッセージをコピーするための定数 (倍長整数型):

*destinationBox* には、メッセージのコピー先メールボックスの名称をテキスト値で渡すことができます。


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
| errors     | \[].errcode            | 数値     | 4Dエラーコード                                           |
| errors     | \[].message            | テキスト   | 4Dエラーの詳細                                           |
| errors     | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |




#### 例題 1

選択されたメッセージをコピーします:


```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  //  メッセージの固有ID のコレクションを取得します
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // 見つかったメッセージを "documents" メールボックスへコピーします
 $status:=$transporter.copy($mailIds;"documents")
```

#### 例題 2

カレントメールボックスの全メッセージをコピーします:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // 全メッセージを "documents" メールボックスへコピーします
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->



<!-- REF imapTransporterClass.delete().Desc -->
## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.delete().Syntax -->
**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.delete().Params -->
| 参照      | タイプ    |    | 説明                              |
| ------- | ------ |:--:| ------------------------------- |
| msgsIDs | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| 戻り値     | オブジェクト | <- | delete処理のステータス                  |
<!-- END REF -->


#### 説明

The `.delete()` function <!-- REF #imapTransporterClass.delete().Summary -->sets the "delete" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

以下のものを渡すことができます:

- `msgsIDs` には、削除するメッセージの固有ID を格納したコレクション
- `allMsgs` には、選択されているメールボックスの全メッセージを削除するための定数 (倍長整数型):

この関数を実行しても、メールが実際に削除される訳ではありません。 "削除済み" フラグがつけられたメッセージも引き続き [.searchMails()](#searchmails) 関数によって検索可能です。 Flagged messages will be deleted from the IMAP server only by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
| errors     | \[].errcode            | 数値     | 4Dエラーコード                                           |
| errors     | \[].message            | テキスト   | 4Dエラーの詳細                                           |
| errors     | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |




#### 例題 1

選択されたメッセージを削除します:


```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Inbox")

  // メッセージの固有ID のコレクションを取得します
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // 選択されたメッセージを削除します
 $status:=$transporter.delete($mailIds)
```

#### 例題 2

カレントメールボックスの全メッセージを削除します:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Junk Email")

  // カレントメールボックスの全メッセージを削除します
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->



<!-- REF imapTransporterClass.getBoxInfo().Desc -->
## .getBoxInfo()

<details><summary>履歴</summary>
| バージョン  | 内容        |
| ------ | --------- |
| v18 R5 | name が任意に |
| v18 R4 | 追加        |
</details>

<!-- REF #imapTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxInfo().Params -->
| 参照   | タイプ    |    | 説明             |
| ---- | ------ |:--:| -------------- |
| name | テキスト   | -> | メールボックスの名称     |
| 戻り値  | オブジェクト | <- | boxInfo オブジェクト |
<!-- END REF -->


#### 説明

`.getBoxInfo()` 関数は、 <!-- REF #imapTransporterClass.getBoxInfo().Summary -->*name* が指定するメールボックスに対応する `boxInfo` オブジェクトを返します<!-- END REF -->。 この関数は、[`.selectBox()`](#selectbox) と同じ情報を返しますが、カレントメールボックスは変えません。

任意の *name* パラメーターには、アクセスするメールボックスの名称を渡します。 この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。


**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 説明                                         |
| ---------- | ------ | ------------------------------------------ |
| name       | text   | メールボックスの名称                                 |
| mailCount  | number | メールボックス内のメッセージの数                           |
| mailRecent | number | (新しいメッセージであることを表す) "recent" フラグがついたメッセージの数 |



#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX には "+String($info.mailRecent)+" 件の最近のメールがあります。")
```

<!-- END REF -->




<!-- REF imapTransporterClass.getBoxList().Desc -->
## .getBoxList()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getBoxList().Syntax -->
**.getBoxList()** : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxList().Params -->
| 参照  | タイプ    |    | 説明                    |
| --- | ------ |:--:| --------------------- |
| 戻り値 | コレクション | <- | mailbox オブジェクトのコレクション |
<!-- END REF -->


#### 説明

`.getBoxList()` 関数は、 <!-- REF #imapTransporterClass.getBoxList().Summary -->利用可能なメールボックスの情報を mailbox オブジェクトのコレクションとしてを返します<!-- END REF -->。 この関数を使用すると、IMAPメールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

#### 戻り値

返されるコレクションの各オブジェクトには、以下のプロパティが格納されています:

| プロパティ            | タイプ     | 説明                                                                         |
| ---------------- | ------- | -------------------------------------------------------------------------- |
| \[].name        | text    | メールボックスの名称                                                                 |
| \[].selectable  | boolean | アクセス権でメールボックスを選択できるかどうかを表します: <ul><li>true - メールボックスは選択可能</li><li>false - メールボックスは選択不可能</li></ul>                     |
| \[].inferior    | boolean | アクセス権でメールボックス内に下の階層レベルを作成できるかどうかを表します: <ul><li>true - 下の階層レベルは作成可能</li><li>false - 下の階層レベルは作成不可能</li></ul>            |
| \[].interesting | boolean | サーバーがメールボックスに “interesting” のマーク付けをしているかどうかを表します: <ul><li>true - メールボックスはサーバーから "interesting" のマーク付けをされています。 たとえば、メールボックスには新着メッセージが入っている場合が考えられます。</li><li>false - メールボックスはサーバーから "interesting" のマーク付けをされていません。</li></ul> |


アカウントにメールボックスが一つもない場合、空のコレクションが返されます。
> * 開いている接続がない場合、`.getBoxList()` は接続を開きます。
> * 接続が指定された時間 (`IMAP New transporter` 参照) 以上に使用されなかった場合には、`.checkConnection( )` 関数が自動的に呼び出されます。


#### 例題


```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("新規メールが届いています: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->



<!-- REF imapTransporterClass.getDelimiter().Desc -->
## .getDelimiter()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getDelimiter().Syntax -->
**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #imapTransporterClass.getDelimiter().Params -->
| 参照  | タイプ  |    | 説明      |
| --- | ---- |:--:| ------- |
| 戻り値 | テキスト | <- | 階層区切り文字 |
<!-- END REF -->


#### 説明

The `.getDelimiter( )` function <!-- REF #imapTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

この区切り文字は以下のように使用することができます:

*   下層レベルのメールボックスを作成する
*   メールボックスの階層内での上層・下層レベルを検索する


#### 戻り値

メールボックス名の区切り文字
> * If there is no open connection, `.getDelimiter( )` will open a connection.
> * If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection( )`](#checkconnection) function is automatically called.



#### 例題


```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("新規メールが届いています: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->



<!-- REF imapTransporterClass.getMail().Desc -->
## .getMail()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getMail().Params -->
| 参照        | タイプ    |    | 説明                                               |
| --------- | ------ |:--:| ------------------------------------------------ |
| msgNumber | 整数     | -> | メッセージのシーケンス番号                                    |
| msgID     | テキスト   | -> | メッセージの固有ID                                       |
| options   | オブジェクト | -> | メッセージ管理オプション                                     |
| 戻り値       | オブジェクト | <- | [Email オブジェクト](emailObjectClass.md#email-オブジェクト) |
<!-- END REF -->


#### 説明

`.getMail()` 関数は、 <!-- REF #imapTransporterClass.getMail().Summary -->`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメールを `Email` オブジェクトとして返します<!-- END REF -->。 この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

最初の引数として、次のいずれかを渡すことができます:

*   *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
*   *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *options* 引数として、メッセージの扱い方を定義する追加のオブジェクトを渡すことができます。 次のプロパティを利用することができます:

| プロパティ      | タイプ     | 説明                                                                         |
| ---------- | ------- | -------------------------------------------------------------------------- |
| updateSeen | boolean | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | boolean | true を渡すとメッセージ本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true           |
> * The function generates an error and returns **Null** if *msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> * If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.


#### 戻り値

`.getMail()` は、以下の IMAP特有のプロパティを持つ [`Email` オブジェクト](emailObjectClass.md#email-オブジェクト)を返します: *id*、*receivedAt*、および *size*。

#### 例題

ID = 1のメッセージを取得します:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  // transporter を作成します
 $transporter:=IMAP New transporter($server)

  //メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Inbox")

  // ID = 1 の Emailオブジェクトを取得します
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->



<!-- REF imapTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.getMails().Syntax -->
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getMails().Params -->
| 参照       | タイプ    |    | 説明                                                       |
| -------- | ------ |:--:| -------------------------------------------------------- |
| ids      | コレクション | -> | メッセージID のコレクション                                          |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号                                          |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号                                         |
| options  | オブジェクト | -> | メッセージ管理オプション                                             |
| 戻り値      | オブジェクト | <- | 次のコレクションを格納したオブジェクト:<br><ul><li>[Email オブジェクト](emailObjectClass.md#email-オブジェクト) のコレクション</li><li>見つからなかったメッセージの ID または番号のコレクション</li></ul> |
<!-- END REF -->


#### 説明

`.getMails()` 関数は、 <!-- REF #imapTransporterClass.getMails().Summary -->`Email` オブジェクトのコレクションを格納したオブジェクトを返します<!-- END REF -->。

**第一シンタックス:**

***.getMails( ids { ; options } ) -> result***

第一シンタックスを使用すると、メッセージID に基づいてメッセージを取得することができます。

*ids* 引数として、取得するメッセージID のコレクションを渡します。 これらの ID は [`.getMail()`](#getmail) で取得することができます。

任意の *options* 引数を渡すと、返されるメッセージのパーツを定義することができます。 利用可能なプロパティについては、以下の **オプション** の表を参照ください。

**第二シンタックス:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

第二シンタックスを使用すると、連続したレンジに基づいてメッセージを取得することができます。 渡される値はメールボックス内でのメッセージの位置を表します。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。

任意の *options* 引数を渡すと、返されるメッセージのパーツを定義することができます。

**オプション**

| プロパティ      | タイプ | 説明                                                                     |
| ---------- | --- | ---------------------------------------------------------------------- |
| updateSeen | ブール | true 時には、指定されたメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | ブール | true を渡すと指定されたメッセージの本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true |
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> * If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).


#### 戻り値

`.getMails()` は、以下のコレクションを格納したオブジェクトを返します。


| プロパティ    | タイプ    | 説明                                                                                                 |
| -------- | ------ | -------------------------------------------------------------------------------------------------- |
| list     | コレクション | [`Email`](emailObjectClass.md#email-オブジェクト) オブジェクトのコレクション。 Email オブジェクトが見つからない場合、空のコレクションが返されます。   |
| notFound | コレクション | 使用したシンタックスによって返されるものが異なります:<br><ul><li>第一シンタックス - 指定した ID のうち、存在しなかったメッセージの ID</li><li>第二シンタックス - startMsg と endMsg の間の番号のうち、存在しなかったメッセージの番号</li></ul>すべてのメッセージが見つかった場合には、空のコレクションが返されます。 |


#### 例題

直近の 20件のメールを、"既読" ステータスを変更せずに取得します:

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter 

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
        // 直近20件のメッセージのヘッダーを、"既読" にせずに取得します
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
        New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
        // ...
    End for each
 End if
```

<!-- END REF -->



<!-- REF imapTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #imapTransporterClass.getMIMEAsBlob().Params -->
| 参照         | タイプ  |    | 説明                                                            |
| ---------- | ---- |:--:| ------------------------------------------------------------- |
| msgNumber  | 整数   | -> | メッセージのシーケンス番号                                                 |
| msgID      | テキスト | -> | メッセージの固有ID                                                    |
| updateSeen | ブール  | -> | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 |
| 戻り値        | BLOB | <- | メールサーバーから返された MIME文字列の BLOB                                   |
<!-- END REF -->


#### 説明

`.getMIMEAsBlob()` 関数は、 <!-- REF #imapTransporterClass.getMIMEAsBlob().Summary -->`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します<!-- END REF -->。

最初の引数として、次のいずれかを渡すことができます:

*   *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
*   *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *updateSeen* 引数を渡すと、メールボックス内でメッセージが "既読" とマークされるかどうかを指定します。 以下のものを渡すことができます:

*   **True** - メッセージは "既読" とマークされます (このメッセージが読まれたことを表します)
*   **False** - メッセージの "既読" ステータスは変化しません。
> * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox( )`.


#### 戻り値

`.getMIMEAsBlob()` は `BLOB` を返します。この BLOB はデータベースにアーカイブしたり、`MAIL Convert from MIME` コマンドを使用して [`Email` オブジェクト](emailObjectClass.md#email-object) へと変換したりすることができます。


#### 例題


```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  // transporter を作成します
 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Inbox")

  // BLOB を取得します
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->



<!-- INCLUDE transporter.host.Desc -->




<!-- INCLUDE transporter.logFile.Desc -->



<!-- REF imapTransporterClass.move().Desc -->
## .move()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.move().Syntax -->
**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.move().Params -->
| 参照             | タイプ    |    | 説明                              |
| -------------- | ------ |:--:| ------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | テキスト   | -> | メッセージの移動先のメールボックス               |
| 戻り値            | オブジェクト | <- | move処理のステータス                    |
<!-- END REF -->


#### 説明

`.move()` 関数は、 <!-- REF #imapTransporterClass.move().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へと移動します<!-- END REF -->。

以下のものを渡すことができます:

- *msgsIDs* には、移動するメッセージの固有ID を格納したコレクション
- *allMsgs* には、選択されているメールボックスの全メッセージを移動するための定数 (倍長整数型):

*destinationBox* には、メッセージの移動先メールボックスの名称をテキスト値で渡すことができます。

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
| errors     | \[].errcode            | 数値     | 4Dエラーコード                                           |
| errors     | \[].message            | テキスト   | 4Dエラーの詳細                                           |
| errors     | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |




#### 例題 1

選択されたメッセージを移動します:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // メッセージの固有IDのコレクションを取得します
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // カレントメールボックス内で見つかったメッセージを "documents" メールボックスに移動します
 $status:=$transporter.move($mailIds;"documents")
```

#### 例題 2

カレントメールボックスの全メッセージを移動します:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // カレントメールボックスの全メッセージを "documents" メールボックスに移動します
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->



<!-- REF imapTransporterClass.numToID().Desc -->
## .numToID()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.numToID().Syntax -->
**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.numToID().Params -->
| 参照       | タイプ    |    | 説明               |
| -------- | ------ |:--:| ---------------- |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号  |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号 |
| 戻り値      | コレクション | <- | 固有ID のコレクション     |
<!-- END REF -->


#### 説明

`.numToID()` 関数は、現在選択されているメールボックスにおいて、 <!-- REF #imapTransporterClass.numToID().Summary -->*startMsg* および *endMsg* で指定された連続した範囲のメッセージのシーケンス番号を IMAP固有IDへと変換します<!-- END REF --> 。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。


#### 戻り値

メソッドは文字列 (固有ID) のコレクションを返します。

#### 例題


```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // 最も古い 5通のメッセージID を取得します
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  // カレントメールボックスからメッセージを削除します
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->



<!-- INCLUDE transporter.port.Desc -->


<!-- REF imapTransporterClass.searchMails().Desc -->
## .searchMails()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.searchMails().Syntax -->
**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.searchMails().Params -->
| 参照             | タイプ    |    | 説明             |
| -------------- | ------ |:--:| -------------- |
| searchCriteria | テキスト   | -> | 検索条件           |
| 戻り値            | コレクション | <- | メッセージ番号のコレクション |
<!-- END REF -->


#### 説明

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

`.searchMails()` 関数は、 <!-- REF #imapTransporterClass.searchMails().Summary -->カレントメールボックスにおいて *searchCriteria* の検索条件に合致するメッセージを検索します<!-- END REF -->。 *searchCriteria* 引数には、一つ以上の検索キーを格納します。

*searchCriteria* はテキスト型の引数で、一つ以上の検索キー (詳細は後述の [利用可能な検索キー](#利用可能な検索キー) 参照) を格納し、検索する値を渡します (渡さない場合もあります)。 検索キーは単一または複数の項目からなります。 たとえば:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> 文字の大小は通常区別されません。

- *searchCriteria* 引数が null 文字列の場合、検索は "すべてを選択" と同等です。
- 引数が複数の検索キーを格納している場合、それらすべてに合致する和集合 (AND) が検索結果になります。

```
searchCriteria = FLAGGED FROM "SMITH"
```
... この検索結果は \Flagged フラグが設定されていて、かつ Smith から送られたメッセージをすべて返します。
- **OR** および **NOT** 演算子を、以下のように使用することができます:

```
searchCriteria = OR SEEN FLAGGED
```
... \Seen フラグが設定されている、あるいは \Flagged フラグが設定されているメッセージをすべて返します。

```
searchCriteria = NOT SEEN
```
... \Seen フラグが設定されていないメッセージをすべて返します。

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```
... content-type ヘッダーが "Mixed" を格納しているもののうち、"Text" は格納していないメッセージを返します。

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```
... content-type ヘッダーが "e" を格納しているもののうち、Subject ヘッダーが "o"を格納していないもの、かつ content-type ヘッダーが"Mixed" でないメッセージを返します。

最後の 2例については、最初の検索キーリストのカッコを取り除いてしまうと検索結果が異なることに注意してください。

- The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands). By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```
... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.


#### Search value types

Search-keys may request the value to search for:

- **Search-keys with a date value**: the date is a string that must be formatted as follows: *date-day+"-"+date-month+"-"+date-year* where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters). Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

- **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. Matching is not case-sensitive.

- **Search-keys with a field-name value**: the field-name is the name of a header field. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Examples: `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.


#### Authorized search-keys

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
**KEYWORD** <flag>: Messages with the specified keyword set.  
**UNKEYWORD** <flag>: Messages that do not have the specified keyword set.  
**BEFORE** <date>: Messages whose internal date is earlier than the specified date.  
**ON** <date>: Messages whose internal date is within the specified date.  
**SINCE** <date>: Messages whose internal date is within or later than the specified date.  
**SENTBEFORE** <date>: Messages whose Date header is earlier than the specified date.  
**SENTON** <date>: Messages whose Date header is within the specified date.  
**SENTSINCE** <date>: Messages whose Date header is within or later than the specified date.  
**TO** <string>: Messages that contain the specified string in the TO header.  
**FROM** <string>: Messages that contain the specified string in the FROM header.  
**CC** <string>: Messages that contain the specified string in the CC header.  
**BCC** <string>: Messages that contain the specified string in the BCC header.  
**SUBJECT** <string>: Messages that contain the specified string in the Subject header.  
**BODY** <string>: Messages that contain the specified string in the message body.  
**TEXT** <string>: Messages that contain the specified string in the header or in the message body.  
**HEADER** <field-name> <string>: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
**UID** <message UID>: Messages with unique identifiers corresponding to the specified unique identifier set.  
**LARGER** <n>: Messages with a size larger than the specified number of bytes.  
**SMALLER** <n>: Messages with a size smaller than the specified number of bytes.  
**NOT** <search-key>: Messages that do not match the specified search key.  
**OR** <search-key1> <search-key2>: Messages that match either search key.  


<!-- END REF -->


<!-- REF imapTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.selectBox().Syntax -->
**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.selectBox().Params -->
| 参照    | タイプ    |    | 説明             |
| ----- | ------ |:--:| -------------- |
| name  | テキスト   | -> | メールボックスの名称     |
| state | 整数     | -> | メールボックスのアクセス状態 |
| 戻り値   | オブジェクト | <- | boxInfo オブジェクト |
<!-- END REF -->


#### 説明

`.selectBox()` 関数は、 <!-- REF #imapTransporterClass.selectBox().Summary -->*name* に指定したメールボックスをカレントメールボックスとして選択します<!-- END REF -->。 この関数を使用するとメールボックスに関する情報を取得することができます。
> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

| 定数                    | 結果 | 説明                                                                                                                                                                    |
| --------------------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1  | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                 |
| IMAP read write state | 0  | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value) |
> * The function generates an error and returns **Null** if name designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 説明                                        |
| ---------- | ------ | ----------------------------------------- |
| name       | テキスト   | メールボックスの名称                                |
| mailCount  | number | メールボックス内のメッセージの数                          |
| mailRecent | number | Number of messages with the "recent" flag |


#### 例題


```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->




<!-- INCLUDE transporter.user.Desc -->




<style> h2 { background: #d9ebff;}</style>








