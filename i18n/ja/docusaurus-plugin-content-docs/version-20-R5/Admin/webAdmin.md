---
id: webAdmin
title: WebAdmin
---

An embedded web server component, named `WebAdmin`, is used by 4D and 4D Server to provide a secured web access to specific management features such as the [Data Explorer](dataExplorer.md). ブラウザーや、任意の Webアプリケーションから、ローカルまたはリモートでこの Webサーバーに接続し、関連の 4Dアプリケーションにアクセスすることができます。

WebAdmin 内部コンポーネントは、"WebAdmin" 権限を持つユーザーの認証を処理し、管理セッションを開いて専用インターフェースにアクセスできるようにします。

この機能は、ヘッドレスで動作する 4Dアプリケーションでも、インターフェースを持つ 4Dアプリケーションでも使用できます。

## WebAdmin Webサーバーの起動

By default, the `WebAdmin` web server is not launched. 起動時に開始するように設定するか、(インターフェース付きの場合は) メニューから手動で開始する必要があります。

### 自動スタートアップ

You can configure the `WebAdmin` web server to be launched at 4D or 4D Server application startup (before any project is loaded).

- If you use a 4D application with interface, select the **File > Web Administration > Settings...** menu item.

![alt-text](../assets/en/Admin/waMenu1.png)

Check the **Launch WebAdmin server at startup** option in the settings dialog box:

![alt-text](../assets/en/Admin/waSettings.png)

- Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following _Command Line Interface_ argument:

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> If the TCP port used by the `WebAdmin` web server ([HTTPS](#https-port) or [HTTP](#http-port), depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. 利用可能なポートがない場合、Webサーバーは開始せず、エラーが表示されるか、(ヘッドレスアプリケーションの場合は) コンソールのログに記録されます。

### 開始と停止

If you use a 4D application with interface, you can start or stop the `WebAdmin` web server for your project at any moment:

Select the **File > Web Administration > Start Server** menu item.

![alt-text](../assets/en/Admin/waMenu2.png)

The menu item becomes **Stop Server** when the server is launched; select **Stop Server** to stop the `WebAdmin` web server.

## WebAdmin 設定

Configuring the `WebAdmin` component is mandatory in particular to define the [**access key**](#access-key). デフォルトで、アクセスキーが設定されていない場合は、URL経由のアクセスは許可されません。

You can configure the `WebAdmin` component using the [Web Administration settings dialog box](#settings-dialog-box) (see below).

> If you use a headless 4D application, you can use [_Command Line Interface_ arguments](#webadmin-headless-configuration) to define basic settings. 高度なパラメーターを定義するには、設定ファイルをカスタマイズする必要があります。

### 設定ダイアログボックス

To open the Web Administration settings dialog box, select the **File > Web Administration > Settings...** menu item.

![alt-text](../assets/en/Admin/waMenu1.png)

次のようなダイアログボックスが表示されます:

![alt-text](../assets/en/Admin/waSettings2.png)

#### WebAdmin サーバーをスタートアップ時に起動

Check this option if you want the `WebAdmin` web server to be automatically launched when the 4D or 4D Server application starts ([see above](#launching-at-startup)). デフォルトでは、このオプションはチェックされていません。

#### ローカルホストでHTTP接続を受け入れる

When this option is checked, you will be able to connect to the `WebAdmin` web server through HTTP on the same machine as the 4D application. デフォルトでは、このオプションはチェックされています。

**注:**

- ローカルホスト以外による HTTP接続は受け付けません。
- Even if this option is checked, when [Accept HTTPS](#accept-https) is checked and the TLS configuration is valid, localhost connections use HTTPS.

#### HTTP ポート

Port number to use for connections through HTTP to the `WebAdmin` web server when the **Accept HTTP connections on localhost** option is checked. デフォルト値は 7080 です。

#### HTTPSを受け入れる

When this option is checked, you will be able to connect to the `WebAdmin` web server through HTTPS. デフォルトでは、このオプションはチェックされています。

#### HTTPS ポート

Port number to use for connections through HTTPS to the `WebAdmin` web server when the **Accept HTTPS** option is checked. デフォルト値は 7443 です。

#### 認証フォルダパス

TLS証明書ファイルが置かれているフォルダーのパスです。 デフォルトでは認証フォルダパスは空で、4D または 4D Server は 4Dアプリケーションに組み込まれた証明書ファイルを使用します (カスタム証明書はプロジェクトフォルダーの隣に保存する必要があります)。

#### デバッグログモード

Status or format of the HTTP request log file (HTTPDebugLog__nn_.txt, stored in the "Logs" folder of the application -- _nn_ is the file number). 次のオプションから選択することができます:

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### アクセスキー

Defining an access key is mandatory to unlock access to the `WebAdmin` web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the [Data Explorer page](dataExplorer.md). 接続リクエストがあった場合には、エラーページが返されます:

![alt-text](../assets/en/Admin/accessKey.png)

アクセスキーはパスワードに似ていますが、ログインとは関係ありません。

- To define a new access key: click the **Define** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.

#### Qodly Studio へのアクセスを有効化する

:::note

このオプションは、Qodly Studio ライセンスが有効な場合にのみ表示されます。

:::

This option enables user access to [Qodly Studio](../WebServer/qodly-studio.md) at the 4D application level. Note that you also need to [enable the access at every project level](../settings/web.md#enable-access-to-qodly-studio).

## WebAdmin のヘッドレス設定

All [WebAdmin settings](#webadmin-settings) are stored in the `WebAdmin.4DSettings` file. There is one default `WebAdmin.4DSettings` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `WebAdmin.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `WebAdmin.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the [Command line interface](cli.md) to support this feature.

> The access key is not stored in clear in the `.4DSettings` file.

例:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
	"my Fabulous AccessKey" --webadmin-auto-start true   
	--webadmin-store-settings

```

## 認証とセッション

- 事前に本人確認せずに URL経由で Web管理ページにアクセスした場合、認証が必要になります。 The user must enter the [access key](#access-key) in an authentication dialog box. If the access key was not defined in the `WebAdmin` settings, no access via URL is possible.

- When a web management page is accessed directly from a 4D or 4D Server menu item (such as **Records > Data Explorer** or **Window > Data Explorer** (4D Server)), access is granted without authentication, the user is automatically authenticated.

Once the access is granted, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `WebAdmin` component delivers requested pages.
