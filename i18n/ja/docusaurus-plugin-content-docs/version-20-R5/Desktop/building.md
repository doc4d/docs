---
id: building
title: アプリケーションビルド
---

4D にはプロジェクトパッケージ (ファイナルビルド) を作成するためのアプリケーションビルダーが統合されています。 このビルダーを使用すれば、コンパイルされた 4D アプリケーションの展開を簡易化することができます。 OS ごとに異なる特定の処理を自動で処理し、クライアント/サーバーアプリケーションの展開が容易になります。

アプリケーションビルダーでは以下のことを行えます:

- Build a compiled structure or component, without interpreted code,
- Build a stand-alone, double-clickable application, _i.e._, merged with 4D Volume Desktop, the 4D database engine,
- XML形式のプロジェクトファイル定義を用いて、同じコンパイル済みストラクチャーから異なるアプリケーションのビルド
- クライアント/サーバーアプリケーションのビルド
- クライアントとサーバーの自動更新機能を備えたクライアント/サーバーアプリケーションのビルド
- Save your build settings for future use (_Save settings_ button).

> Compiled applications are based upon [.4dz files](#build-compiled-structure) that are **read-only**. Keep in mind that using commands or functions that modify the source files (such as `CREATE INDEX` or `CREATE TABLE` (SQL)) is not possible by default in compiled applications. However, you can build specific applications that support local modifications by using the `PackProject` XML key (see [doc.4d.com](https://doc.4d.com)).

## 概要

プロジェクトパッケージをビルドするには次の方法があります:

- either the [`BUILD APPLICATION`](https://doc.4d.com/4dv20/help/command/en/page871.html) command,
- or the [Build Application dialog](#application-builder).

:::tip

You can also download and use [`Build4D`](https://github.com/4d-depot/Build4D), a component that provides classes to compile, build, and sign 4D projects, even from a headless application.

:::

### アプリケーションビルド

To display the Build application dialog, select **Design** > **Build Application...** from the menu bar.

![](../assets/en/Project/buildappProj.png)

アプリケーションビルドウィンドウには複数のページがあり、タブを使用してページを移動できます:

![](../assets/en/Project/appbuilderProj.png)

ビルドをおこなう前にプロジェクトはコンパイルされていなければなりません。 まだコンパイルされていないプロジェクトでこのメニューコマンドを選択する、あるいはコンパイル後にコードが変更されていると、プロジェクトを (再) コンパイルしなければならない旨の警告ダイアログが表示されます。

### buildApp.4DSettings

Each build application parameter is stored as an XML key in the application project file named `buildApp.4DSettings` XML file, located in the [`Settings` folder of the project](../Project/architecture.md#settings-1).

アプリケーションビルドダイアログが初めて表示されるときにはデフォルトパラメーターが使用されます。 The contents of the project file are updated, if necessary, when you click **Build** or **Save settings**. You can define several other XML settings file for the same project and employ them using the [BUILD APPLICATION](https://doc.4d.com/4dv19/help/command/en/page871.html) command.

また、XML キーを使用すれば、アプリケーションビルドダイアログには表示されない追加の設定をおこなうことができます。 The description of these keys are detailed in the [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html) manual.

### ログファイル

When an application is built, 4D generates a log file named _BuildApp.log.xml_ in the **Logs** folder of the project. ログファイルにはビルド毎に以下の情報が書き込まれます:

- ターゲットビルドの開始と終了
- 生成されたファイルの名称とフルパス
- ビルドの日付と時刻
- 発生したエラー
- 署名の問題 (例: 署名されていないプラグイン)

アプリケーションを公証する場合などは、このファイルを確認することで、後の運用手順で時間を節約できることがあります。

> Use the `Get 4D file(Build application log file)` command to get the log file location.

## アプリケーション名と保存先フォルダー

![](../assets/en/Project/buidappstructureProj.png)

Enter the name of the application in **Application Name**.

Specify the folder for the built application in **Destination Folder**. If the specified folder does not already exist, 4D will create a _Build_ folder for you.

## コンパイル済みストラクチャーページ

このページでは、標準のコンパイル済みストラクチャーファイルやコンパイル済みコンポーネントをビルドできます。

![](../assets/en/Project/appbuilderProj.png)

### コンパイル済みストラクチャーをビルド

インタープリターコードを含まないアプリケーションをビルドします。

This feature creates a _.4dz_ file within a `Compiled Database/<project name>` folder. たとえば、アプリケーション名を "MyProject" にした場合、4D は次のものを作成します:

`<destination>/Compiled Database/MyProject/MyProject.4dz`

.4dz ファイルは ZIP 圧縮されたプロジェクトフォルダーです (<strong>注:</strong> バイナリデータベースの場合に生成される .4DC ファイルと同義ではないことに注意が必要です)。 .4dz ファイルを開けるのは 4D Server、4D Volume ライセンス (組み込みアプリケーション)、および 4D です。 圧縮・最適化された .4dz ファイルによってプロジェクトパッケージの展開が容易になります。

> When generating .4dz files, 4D uses a **standard** zip format by default. このフォーマットの利点は、あらゆる解凍ツールで簡単に読み取ることができることです。 If you do not want to use this standard format, add the `UseStandardZipFormat` XML key with value `False` in your [`buildApp.4DSettings`](#build-application-settings) file (for more information, see the [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html) manual).

#### 関連するフォルダーを含む

When you check this option, any folders related to the project are copied into the Build folder as _Components_ and _Resources_ folders. For more information about these folders, refer to the [description of project architecture](Project/architecture.md).

### コンポーネントをビルド

ストラクチャーからコンパイル済みコンポーネントをビルドします。

A [component](../Extensions/develop-components.md) is a standard 4D project in which specific functionalities have been developed. Once the component has been configured and [installed in another 4D project](../Project/components.md) (the host application project), its functionalities are accessible from the host project.

If you have named your application, _MyComponent_, 4D will create a _Components_ folder containing _MyComponent.4dbase_ folder:

`<destination>/Components/MyComponent.4dbase/MyComponent.4DZ`.

The _MyComponent.4dbase_ folder contains:

- _MyComponent.4DZ_ file
- A _Resources_ folder - any associated Resources are automatically copied into this folder. コンポーネントは、他のコンポーネントやプラグインを使用できないため、その他の "Components" や "Plugins" フォルダーはコピーされません。

The _MyComponent.4dbase_ folder is the [package folder of the compiled component](../Project/components.md).

## アプリケーションページ

このタブでは、スタンドアロンのシングルユーザー版アプリケーションをビルドします:

![](../assets/en/Project/standaloneProj.png)

### スタンドアロンアプリケーションをビルド

Checking the **Build stand-alone Application** option and clicking **Build** will create a stand-alone (double-clickable) application directly from your application project.

ビルドには次のものが必要です:

- 4D Volume Desktop (4Dデータベースエンジン)
- an [appropriate license](#licenses)

Windows においては、.exe 拡張子のついた実行ファイルが作成されます。 macOS においては、ソフトウェアパッケージが作成されます。

この処理はコンパイル済みストラクチャーファイルと4D Volume Desktopを統合します。 4D Volume Desktop が提供する機能はライセンスページで指定するライセンス情報に基づきます。 For more information about this point, refer to the sales documentation and to the [4D Store](http://www.4d.com/).

You can define a default data file or allow users to [create and use their own data file](#management-of-data-files).

It is possible to [automate the update of merged single-user applications](#automatic-updating-of-server-or-single-user-applications) by means of a sequence of language commands.

#### 4D Volume Desktopの場所

ダブルクリックで起動されるアプリケーションをビルドするには、まず 4D Volume Desktop が格納されているフォルダーの場所を指定しなければなりません:

- _Windows_ - the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. これらは、選択されたフォルダー内で同じ階層に置かれている必要があります。
- _macOS_ - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.

To select the 4D Volume Desktop folder, click on the **[...]** button. フォルダーを選択するダイアログが表示されたら、4D Volume Desktop フォルダー (Windows) またはパッケージ (macOS) を選択します。

フォルダーが選択されるとその完全パス名が表示され、そこに 4D Volume Desktop が含まれていればビルドボタンが有効になります。

> 4D Volume Desktop のバージョン番号は、4D Developer のバージョン番号と合致する必要があります。 たとえば、4D Developer の v18 を利用していれば、4D Volume Desktop v18 が必要です。

#### データリンクモードの基準

このオプションを使って、組み込みアプリケーションとローカルデータファイルとのリンクモードを選択します。 二種類のリンクモードから選択可能です:

- **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 アプリケーションを複製する場合を除いて、通常は組み込みアプリに対してこのモードが使用されるべきです。

- **By application path** - The merged 4D application will parse the application's _lastDataPath.xml_ file and try to open the data file with an "executablePath" attribute that matches the application's full path. 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 ない場合は、最後に開かれたデータファイルを開きます (デフォルトモード)。

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.

#### 生成されるファイル

When you click on the **Build** button, 4D automatically creates a **Final Application** folder in the specified **Destination Folder**. その中に指定したアプリケーション名のサブフォルダーを作成します。

アプリケーション名に "MyProject"と指定した場合、MyProject サブフォルダー内には以下のファイルが置かれます:

- _Windows_
  - MyProject.exe - 実行可能ファイル、そして MyProject.rsr (アプリケーションリソースファイル)
  - 4D Extensions および Resources フォルダー、さまざまなライブラリ (DLL)、 Native Components フォルダー、SASL Plugins フォルダーなど、アプリケーション実行に必要なファイル
  - Databaseフォルダー: Resources フォルダーと MyProject.4DZ ファイルが格納されています。 これらはプロジェクトのコンパイル済みストラクチャーおよびプロジェクトの Resources フォルダーです。
    **Note**: This folder also contains the _Default Data_ folder, if it has been defined (see [Data file management in final applications](#data-file-management-in-final-applicatons).
  - (オプション) データベースに含まれるコンポーネントやプラグインが配置された Components フォルダーおよび Plugins フォルダー。 For more information about this, refer to the [Plugins and components](#plugins-and-components) section.
  - Licenses フォルダー - アプリケーションに統合されたライセンス番号の XML ファイルが含まれます。 For more information about this, refer to the [Licenses & Certificate](#licenses-and-certificate) section.
  - Additional items added to the 4D Volume Desktop folder, if any (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)).

実行ファイルの動作には、これらすべての項目が同じフォルダー内に必要です。

- _macOS_
  - MyProject.app という名称のソフトウェアパッケージに、プラグインやコンポーネント、ライセンスなど必要な項目がすべて格納されます。 For more information about integrating plug-ins and components, refer to the [Plugins and components](#plugins-and-components) section. For more information about integrating licenses, refer to the [Licenses & Certificate](#licenses-and-certificate) section. **Note**: In macOS, the [Application file](https://doc.4d.com/4Dv18R4/4D/18-R4/Application-file.301-4982855.en.html) command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).

#### 4D Volume Desktop フォルダーのカスタマイズ

When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > _Final Application_ folder. 必要に応じて、このコピー元である 4D Volume Desktop フォルダーの内容をカスタマイズすることできます。 たとえば:

- 特定の言語バージョンに対応する 4D Volume Desktop をインストールする
- Add a custom _PlugIns_ folder;
- Customize the contents of the _Resources_ folder.

> macOS では、4D Volume Desktop はソフトウェアパッケージ形式で提供されています。 In order to modify it, you must first display its contents (**Control+click** on the icon).

#### Webファイルの場所

ダブルクリックで起動可能なアプリケーションを Webサーバーとして使用する場合、Web フォルダーやファイルは特定の場所にインストールする必要があります :

- _cert.pem_ and _key.pem_ files (optional): These files are used for TLS connections and by data encryption commands,
- デフォルト Web ルートフォルダー

インストール場所:

- **on Windows**: in the _Final Application\MyProject\Database_ subfolder.
- **on macOS**: next to the _MyProject.app_ software package.

## クライアント/サーバーページ

このページでは、クライアントの自動更新もサポートできるクロスプラットフォームなクライアント/サーバーアプリケーションをビルドするための設定をおこないます。

![](../assets/en/Desktop/client-server-buildapp.png)

### クライアント/サーバーアプリケーションとは

クライアント/サーバーアプリケーションは、以下の3つの項目の組み合わせから成ります:

- コンパイルされた 4Dプロジェクト
- 4D Server アプリケーション
- 4D Volume Desktop アプリケーション (macOS / Windows)

ビルドを行うと、クライアント/サーバーアプリケーションは 2つのカスタマイズされたパーツ (サーバーと、各クライアントマシンにインストールするクライアント) で構成されます。

> If you want to deploy a client/server application in an heterogeneous environment (client applications running on Intel/AMD and Apple Silicon machines), it is recommended to [compile the project for all processors](Project/compiler.md#compilation-target) on a macOS machine, so that all client applications will run natively.

ビルドされたクライアント/サーバーアプリケーションは起動や接続処理が簡易です:

- サーバーを起動するには、サーバーアプリケーションをダブルクリックします。 プロジェクトファイルを選択する必要はありません。
- クライアントを起動するにも、同様にクライアントアプリケーションをダブルクリックします。すると、サーバーアプリケーションへの接続が直接おこなわれるため、 接続ダイアログでサーバーを選択する必要はありません。 The client targets the server either using its name, when the client and server are on the same sub-network, or using its IP address, which is set using the `IPAddress` XML key in the buildapp.4DSettings file. If the connection fails, [specific alternative mechanisms can be implemented](#management-of-client-connections). You can "force" the display of the standard connection dialog box by holding down the **Option** (macOS) or **Alt** (Windows) key while launching the client application.
  サーバーアプリケーションには、対応するクライアントアプリケーションのみが接続できます。 標準の 4Dアプリケーションを使用してサーバーアプリケーションに接続を試みると、接続は拒否されエラーが返されます。
- A client/server application can be set so that the client portion [can be updated automatically over the network](#copy-of-client-applications-in-the-server-application). クライアントアプリケーションは最初のバージョンのみビルドして配布する必要があります。以降のアップデートは、自動アップデート機構を利用することで管理します。
- It is also possible to automate the update of the server part through the use of a sequence of language commands ([SET UPDATE FOLDER](https://doc.4d.com/4dv19/help/command/en/page1291.html) and [RESTART 4D](https://doc.4d.com/4dv19/help/command/en/page1292.html).

### サーバーアプリケーションをビルド

アプリケーションのサーバー部分をビルドするにはこのオプションを選択します。 ビルドに使用する 4D Server アプリケーションの場所を選択する必要があります。 この 4D Server はビルドをおこなうプラットフォームに対応していなければなりません (たとえば、Windows 用のサーバーアプリケーションをビルドするには Windows 上でビルドを実行する必要があり、Windows 版の 4D Server アプリケーションを指定する必要があります)。

#### 4D Server の場所

Click on the **[...]** button and use the _Browse for folder_ dialog box to locate the 4D Server application. macOS では 4D Server パッケージを選択します。

#### 現在のバージョン

生成されるアプリケーションのバージョン番号を指定します。 このバージョン番号をもとに、クライアントアプリケーションからの接続を受け入れたり拒否したりできます。 The interval of compatibility for client and server applications is set using specific [XML keys](#buildapp4dsettings)).

#### ビルドしたサーバーアプリケーションにプロジェクトのユーザーとグループを埋め込む

**Preliminary Note:** The following terms are used in this section:

| 名称                  | 定義                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| プロジェクトのディレクトリファイル   | [directory.json](../Users/handling_users_groups.md#directoryjson-file) file located in the [Settings folder](../Project/architecture.md#settings-1) of the project         |
| アプリケーションのディレクトリファイル | [directory.json](../Users/handling_users_groups.md#directoryjson-file) file located in the [Settings folder](../Project/architecture.md#settings-1) of the built 4D Server |
| データのディレクトリファイル      | [directory.json](../Users/handling_users_groups.md#directoryjson-file) file in the [Data > Settings folder](../Project/architecture.md#settings)                           |

このオプションをチェックすると、ビルド時にプロジェクトのディレクトリファイルがアプリケーションのディレクトリファイルとしてコピーされます。

ビルドした 4D Server アプリケーションを実行すると:

- データのディレクトリファイルがサーバーにある場合は、それがロードされます。
- データのディレクトリファイルがサーバーにない場合は、アプリケーションのディレクトリファイルがロードされます。

アプリケーションのディレクトリファイルは読み取り専用です。 ユーザー・グループ・パーミッションに対してサーバー実行中におこなわれた変更は、データのディレクトリファイルに保存されます。 データのディレクトリファイルが存在しない場合は、自動作成されます。 アプリケーションのディレクトリファイルが埋め込まれている場合は、データのディレクトリファイルとして複製されます。

プロジェクトのディレクトリファイルを埋め込むことで、基本的なセキュリティのユーザーとグループ構成でクライアント/サーバーアプリケーションを運用することができます。 その後の編集は、データのディレクトリファイルに追加されます。

#### Silicon macOS クライアントからの接続を許可

Windows でサーバーアプリケーションをビルドする際、Apple Silicon クライアントが接続できるようにするには、このオプションをチェックします。 その後、Apple Silicon/Intel用にコンパイルされたストラクチャーへのパスを指定します。

Windows でビルドされたサーバーアプリケーションに Apple Silicon クライアントが接続できるようにするには、まず macOS 上で Apple Silicon と Intel 向けにコンパイルされたプロジェクトを用いてクライアントアプリケーションをビルドする必要があります。 This automatically creates a compiled structure, identical to the one created with the **[Build compiled structure](#build-compiled-structure)** option (without the related folders).

その後、そのストラクチャーを Windowsマシンにコピーし、それを使ってサーバーアプリケーションをビルドすることができます:

![](../assets/en/Desktop/allow-mac-clients.png)

#### コンパイル済みストラクチャーの場所

Path to compiled structure of the Apple Silicon/Intel client application used to build a Windows Server (see [Allow connection of Silicon Mac clients](#allow-connection-of-silicon-mac-clients).

#### データリンクモードの基準

このオプションを使って、組み込みアプリケーションとローカルデータファイルとのリンクモードを選択します。 二種類のリンクモードから選択可能です:

- **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 アプリケーションを複製する場合を除いて、通常は組み込みアプリに対してこのモードが使用されるべきです。

- **By application path** - The merged 4D application will parse the application's _lastDataPath.xml_ file and try to open the data file with an "executablePath" attribute that matches the application's full path. 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 ない場合は、最後に開かれたデータファイルを開きます (デフォルトモード)。

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.

### クライアントアプリケーションをビルド

アプリケーションのクライアント部分をビルドするにはこのオプションを選択します。

このオプションをチェックすると同時に:

- along with the [**Build server application**](#build-server-application) option to build matching server and client parts for the current platform and (optionally) include the automatic update archive files,
- without selecting the [**Build server application**](#build-server-application) option, usually to build the update archive file to be selected from the "concurrent" platform when building the server part.

#### 4D Volume Desktopの場所

クライアントアプリケーションのビルドに使用する 4D Volume Desktop アプリケーションの場所を指定します。

> 4D Volume Desktop のバージョン番号は、4D Developer のバージョン番号と合致する必要があります。 たとえば、4D Developer の v19 を利用していれば、4D Volume Desktop v19 が必要です。

この 4D Volume Desktop はビルドをおこなうプラットフォームに対応していなければなりません。 異なるプラットフォーム用のクライアントアプリケーションをビルドするには、そのプラットフォームで 4D アプリケーションを実行し、追加のビルド処理をしなければなりません。

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. For more information about this file, refer to the description of the [`BUILD APPLICATION`](https://doc.4d.com/4dv19/help/command/en/page871.html) command. 接続失敗時の特定の機構を実装することもできます。 The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### サーバーアプリケーション内部のクライアントアプリケーションのコピー

このエリアのオプションは、クライアント/サーバーアプリケーションの新しいバージョンがビルドされた際の、ネットワーク越しにクライアントを自動更新するメカニズムを設定します。 These options are only enabled when the **Build client application** option is checked.

- **Allow automatic update of Windows client application** - Check this option to build a `.4darchive` file that can be sent to your client applications on the Windows platform in case of update.
- **Allow automatic update of Macintosh client application** - Check this option to build a `.4darchive` file that can be sent to your client applications on the Macintosh platform in case of update.

The `.4darchive` is copied at the following location:

```
<ApplicationName>_Build/Client Server executable/Upgrade4DClient/
```

#### 別プラットフォームのクライアントアーカイブの選択

You can check the **Allow automatic update...** option for client applications running on the concurrent platform. このオプションは、以下の場合にのみ有効です:

- the **Build server application** option is checked,
- the **Allow automatic update...** option for client applications running on the current platform is checked.

This feature requires that you click on the **[...]** button and designate the location on your disk of the file to use for the update. 選択するファイルは、現在のサーバープラットフォームによって異なります:

| 現在のサーバープラットフォーム | 必要なファイル                                                      | 詳細                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS           | Windows 4D Volume Desktop _or_ Windows client update archive | By default, you select the `4D Volume Desktop` application for Windows. To select a `.4darchive` file previously built on Windows, press **Shift** while clicking on [...] |
| Windows         | macOS クライアントアップデートアーカイブ                                      | Select a signed `.4darchive` file previously built on macOS                                                                                                                                                                                                                                    |

You can build specific a `.4darchive` file on the concurrent platform by selecting only the [**Build client application**](#build-client-application) and the appropriate [**Allow automatic update...**](#copy-of-client-applications-inside-the-server-application) option.

#### 更新通知の表示

サーバーアプリケーションが更新されると、クライアントアプリケーションへの更新通知が自動でおこなわれます。

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a ._4darchive_ update file is available for each platform:

クライアントアプリケーションに更新を通知するには、古いサーバーアプリケーションを新しいバージョンで置き換えて起動します。 あとの処理は自動でおこなわれます。

古いバージョンのクライアントが、更新されたサーバーに接続を試みると、新しいバージョンが利用可能である旨を伝えるダイアログがクライアントマシン上に表示されます。 ユーザーはバージョンを更新するか、ダイアログをキャンセルできます。

- If the user clicks **OK**, the new version is downloaded to the client machine over the network. ダウンロードが完了すると古いクライアントアプリケーションが閉じられて、新しいバージョンが起動しサーバーに接続します。 古いバージョンのアプリケーションはマシンのゴミ箱に移動されます。
- If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. そうでなければ (デフォルトで) 接続がおこなわれます。

#### 自動更新の強制

更新のダウンロードをキャンセルさせたくない場合、 たとえば新しいメジャーバージョンの 4D Server を使用するような場合、新しいバージョンのクライアントアプリケーションを各クライアントマシンに必ずインストールしなければなりません。

更新を強制するには、サーバーアプリケーションと互換性のあるバージョン番号の範囲からクライアントアプリケーションの現バージョン番号を除外します。 すると、未更新クライアントからの接続は更新メカニズムによって拒否されます。 たとえば、クライアントサーバーアプリケーションの新しいバージョン番号がの 6 の場合、バージョン番号が 5 以下のクライアントアプリケーションを許可しないようにできます。

The [current version number](#current_version) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#buildapp4dsettings).

#### エラーが発生する場合

クライアントアプリケーションの更新を実行できなかった場合、クライアントマシンには次のメッセージが表示されます: "クライアントアプリケーションの更新に失敗しました。 アプリケーションは終了します。 "

このエラーが発生する原因は複数ありえます。 このエラーが表示されるような場合は、まず次の点をチェックしてみてください:

- **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example _ClientMacFolderToWin_). とくに 4D Volume Desktop へのパスをチェックしてください。
- **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.

### 生成されるファイル

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, `<ApplicationName>Client` and `<ApplicationName>Server`.

> エラーが発生した場合これらのフォルダーは作成されません。 In this case, open the [log file](#log-file) in order to find out the cause of the error.

The `<ApplicationName>Client` folder contains the client portion of the application corresponding to the execution platform of the application builder. このフォルダーを各クライアントにインストールします。 The `<ApplicationName>Server` folder contains the server portion of the application.

これらのフォルダーの内容はカレントのプラットフォームにより異なります:

- _Windows_ - Each folder contains the application executable file, named `<ApplicationName>Client.exe` for the client part and `<ApplicationName>Server.exe` for the server part as well as the corresponding .rsr files. これらのフォルダーには、アプリケーション実行のために必要な様々なファイルやフォルダー、および元の 4D Server や 4D Volume Desktop に追加されたカスタマイズ項目も格納されます。
- _macOS_ - Each folder contains only the application package, named `<ApplicationName> Client` for the client part and `<ApplicationName> Server` for the server part. 各パッケージには動作に必要なすべてのファイルが含まれます。 macOS では、アプリケーションを実行するためにパッケージをダブルクリックします。

> ビルドされた macOSパッケージには、Windows版のサブフォルダーと同じものが格納されています。 ビルドされた macOS パッケージの内容を表示するにはアイコンを **Control+クリック** して、"パッケージの内容を表示"を選択します。

If you checked the “Allow automatic update of client application” option, an additional subfolder called _Upgrade4DClient_ is added in the `<ApplicationName>Server` folder/package. このサブフォルダーには macOS/Windows 版のクライアントアプリケーションが圧縮されて格納されます。 クライアントアプリケーションを自動更新するときに、このファイルは使用されます。

#### Webファイルの場所

サーバーやクライアントを Webサーバーとして使用する場合、Webサーバーが使用するファイルを特定の場所に配置しなければなりません :

- _cert.pem_ and _key.pem_ files (optional): These files are used for TLS connections and by data encryption commands,
- デフォルト Web ルートフォルダー (WebFolder)

インストール場所:

- **on Windows**
  - **Server application** - in the `Client Server executable/<ApplicationName>Server/Server Database` subfolder.
  - **Client application** - in the `Client Server executable/<ApplicationName>Client` subfolder.

- **on macOS**
  - **Server application** - next to the `<ApplicationName>Server` software package.
  - **Client application** - next to the `<ApplicationName>Client` software package.

### シングルユーザークライアントアプリケーションの埋め込み

4D ではクライアントアプリケーションにコンパイル済ストラクチャーを埋め込むことができます。 This feature can be used, for example, to provide users with a "portal" application, that gives access to different server applications thanks to the `OPEN DATABASE` command executing a `.4dlink` file.

To enable this feature, add the `DatabaseToEmbedInClientWinFolder` and/or `DatabaseToEmbedInClientMacFolder` keys in the _buildApp_ settings file. When one of these keys is present, the client application building process generates a single-user application: the compiled structure, instead of the _EnginedServer.4Dlink_ file, is placed in the "Database" folder.

- シングルユーザーアプリケーション内に "Default Data" フォルダーがあれば、アプリケーションにはライセンスが埋め込まれます。
- シングルユーザーアプリケーション内に "Default Data" フォルダーがなければ、データファイルおよびライセンスなしでアプリケーションが実行されます。

基本シナリオは以下の通りです:

1. アプリケーションビルド ダイアログボックス内にて、"コンパイルされたストラクチャーをビルド" オプションを選択し、シングルユーザーモードで使用されるアプリケーションの .4DC または .4DZ ファイルを生成します。
2. In the _buildApp.4DSettings_ file of the client-server application, use following xml key(s) to indicate the path to the folder containing the compiled single user application:

- `DatabaseToEmbedInClientWinFolder`
- `DatabaseToEmbedInClientMacFolder`

3. クライアント/サーバーアプリケーションをビルドします。 これは以下のように動作します:

- シングルユーザーアプリケーションのフォルダー全体が、組み込みクライアントの "Database" フォルダー内にコピーされます。
- the _EnginedServer.4Dlink_ file of the "Database" folder is not generated
- シングルユーザーアプリケーションのコピーが持つ .4DC、.4DZ、.4DIndy ファイルは、組み込みクライアントの名前へとファイル名が変更されます。
- the `PublishName` key is not copied in the _info.plist_ of the merged client
- シングルユーザーデータベースに "Default Data" フォルダーがない場合、組み込みクライアントはデータなしで実行されます。

Automatic update 4D Server features ([Current version](#current-version) number, `SET UPDATE FOLDER` command...) work with single-user application as with standard remote application. At connection, the single-user application compares its `CurrentVers` key to the 4D Server version range. レンジ外だった場合、アップデートされているシングルユーザーアプリケーションがサーバーからダウンロードされ、アップデーターがローカルアップデートプロセスを実行します。

### クライアントおよびサーバーキャッシュフォルダー名のカスタマイズ

クライアントおよびサーバーのキャッシュフォルダーは、リソースやコンポーネントなどの共有要素を格納するのに使用されます。 これらは、サーバーとリモートクライアント間の通信を管理するのに必要です。 クライアント/サーバーアプリケーションは、クライアントおよびサーバーシステム両方のキャッシュフォルダーにデフォルトパス名を使用します。

特殊な場合においては、特定のアーキテクチャーを実装するために、これらのフォルダー名をカスタマイズする必要があるかもしれません (後述参照)。 4D provides you with the `ClientServerSystemFolderName` and `ServerStructureFolderName` keys to be set in the _buildApp_ settings file.

#### クライアントキャッシュフォルダー

それぞれ異なるデータセットを使用している以外は同様の複数の組み込みサーバーにクライアントアプリケーションが接続するような場合、クライアント側のキャッシュフォルダー名をカスタマイズすると便利かもしれません。 このような場合に、同じローカルリソースを複数回ダウンロードするのを避けるため、同一のローカルキャッシュフォルダーを使用することができます。

- Default configuration (_for each connection to a server, a specific cache folder is downloaded/updated_):

![](../assets/en/Admin/cachea.png)

- Using the `ClientServerSystemFolderName` key (_a single cache folder is used for all servers_):

![](../assets/en/Admin/cacheb.png)

#### サーバーキャッシュフォルダー

それぞれ異なる 4Dのバージョンでビルドされた同じサーバーアプリケーションを同一のマシン上で実行する場合、サーバー側のキャッシュフォルダー名をカスタマイズすると便利です。 各サーバーで独自のリソースを使用するには、サーバーキャッシュフォルダーをカスタマイズする必要があります。

- Default configuration (_same server applications share the same cache folder_):

![](../assets/en/Admin/cacheServera.png)

- Using the `ServerStructureFolderName` key (_a dedicated cache folder is used for each server application_):

![](../assets/en/Admin/cacheServerb.png)

## Plugins & components page

On this tab, you set each [**plug-in**](Concepts/plug-ins.md), [**component**](../Project/components.md), and [**module**](#deselecting-modules) that you will use in your stand-alone or client/server application.

このページには、現在の 4Dアプリケーションにロードされている要素がリストされます:

![](../assets/en/Desktop/buildappcomps.png)

- **Active** column - Indicates that the items will be integrated into the application package built. デフォルトですべての項目が選択されています。 プラグインやコンポーネント、モジュールを除外するには、チェックボックスの選択を外します。

- **Plugins and components** column - Displays the name of the plug-in/component/module.

- **ID** column - Displays the element's identification number (if any).

- **Type** column - Indicates the type of item: Plug-in, Component, or Module.

### プラグインやコンポーネントの追加

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

同じプラグインの異なるバージョンが見つかった場合 (現在 4D にロードされているものと同じプラグインが、ソースアプリケーションのフォルダーにも配置されている場合など)、4D Volume Desktop/4D Server フォルダーにインストールされているバージョンが優先されます。 他方、同じコンポーネントが両方にインストールされていた場合は、アプリケーションを開くことはできません。

> 配布するアプリケーションでプラグインやコンポーネントを使用するには、それぞれ適切なライセンスが必要な場合があります。

### モジュールの選択解除

モジュールとは、特定の機能を制御するために 4D で使用される組み込みのコードライブラリです。 ビルドするアプリケーションがモジュールの機能を使用しないことが分かっている場合、アプリケーションのファイルサイズを小さくするために、そのモジュールの選択をリストで解除することができます。

> **Warning:** Deselecting a module could prevent your built application from working as expected. 特定のモジュールが、アプリケーションから呼び出されることがないことが確実でない場合は、選択したままにしておくことが推奨されます。

以下の任意モジュールは、選択を解除することができます:

- **CEF**: Chromium embedded library. It is necessary to run [Web areas](../FormObjects/webArea_overview.md) that use the embedded rendering engine and [4D View Pro areas](../FormObjects/viewProArea_overview.md). CEF が選択されていない状態でこれらのエリアを呼び出すと、空白が表示されたり、エラーが発生したりします。
- **MeCab**: Library used for text indexing in Japanese language (see this [settings paragraph](../settings/database.md#support-of-mecab-japanese-version)). このモジュールの選択を解除すると、テキストインデックスが日本語で再構築されます。

> If you deselect MeCab for an application in Japanese language used on heterogeneous platforms, make sure to deselect it on both client/server build and [client application build](#build-client-application) (for the concurrent platform), otherwise major malfunctions will occur in the application.

- **SpellChecker**: Used for built-in [spellchecking features](../FormObjects/properties_Entry.md#auto-spellcheck) and commands available for input areas and 4D Write Pro areas.
- **4D Updater**: Controls the [automatic update](#what-is-a-clientserver-application) of client parts and is used by the `SET UPDATE FOLDER` command for [automated server updates](#automatic-updating-of-server-or-single-user-applications).

## Licenses & Certificate page

The Licences & Certificate page can be used to:

- シングルユーザーのスタンドアロンアプリケーションに統合するライセンス番号を指定します。
- macOS 環境下では、証明書を使用してアプリケーションに署名をすることができます。

![](../assets/en/Admin/buildappCertif.png)

### ライセンスリスト

アプリケーションに統合するのに使用できる配布ライセンスの一覧を表示します。 デフォルトでリストは空です。 You must explicitly add your _4D Developer Professional_ license as well as each _4D Desktop Volume_ license to be used in the application built. 現在使用しているものとは別の 4D Developer Professional ライセンス (およびその付属ライセンス) を追加することもできます。

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the _Licenses_ folder of your machine. For more information about the location of this folder, refer to the [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

開発ライセンスとそれに対応した配布ライセンスを選択します。 These files were generated or updated when the _4D Developer Professional_ license and the _4D Desktop Volume_ licenses were purchased.

ファイルを選択すると、リストに選択内容が反映されます:

- **License #** - Product license number
- **License** - Name of the product
- **Expiration date** - Expiration date of the license (if any)
- **Path** -  Location on disk

ライセンスが有効でない場合、警告が表示されます。

必要なだけ有効なファイルを選択することができます。 実行可能アプリケーションをビルドする際に、4D は最も適切なライセンスを使用します。

> "R-リリース" バージョンのアプリケーションをビルドするには、専用の "R" ライセンスが必要です ("R" 製品用のライセンス番号は "R-" から始まる番号です)。

アプリケーションビルド後、配布ライセンスファイルは実行可能ファイルと同階層 (Windows) やパッケージ内 (macOS) に自動でコピーされます。

### OS X 署名に使用する証明書

アプリケーションビルダーは、macOS 環境下において組み込み4Dアプリに署名をする機能を備えています (macOS のシングルユーザーアプリ、コンポーネント、サーバーおよびクライアントアプリ)。 アプリケーションを署名することにより、 macOS において「Mac App Store と確認済みの開発元からのアプリケーションを許可」のオプションが選択されているときに Gatekeeper の機能を使用してアプリケーションを実行することが可能になります (後述の "Gatekeeper について" を参照ください)。

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:

![](../assets/en/Admin/buildapposxcertProj.png)

このオプションは Windows と macOS 両方の環境で表示されますが、macOS の場合においてのみ有効です。

- **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. この認証名は通常、キーチェーンアクセスユーティリティ内の証明書の名前と一緒です (下図の赤枠):

![](../assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).

> この証明書の取得には Apple の codesign ユーティリティが必要になります。このユーティリティはデフォルトで提供されており、通常 “/usr/bin/” フォルダーにあります。 エラーが起きた際には、このユーティリティがディスク上にあるかどうかを確認してください。

- **Generate self-signed certificate** - runs the "Certificate Assistant" that allows you to generate a self-signed certificate. Apple 社のデベロッパー認証を持たない場合には、自己署名証明書を提供する必要があります。 この証明書を使うと、アプリケーションを内部的に運用する場合に警告が表示されません。 アプリケーションを外部で運用する場合 (http やメールを介した場合) には、アプリケーションの開発者が不明であるという警告が macOS での起動時に表示されます。 その場合でもユーザーはアプリケーションを "強制的" に起動することができます。 In the "Certificate Assistant", be sure to select the appropriate options:
  ![](../assets/en/Admin/Cert1.png)
  ![](../assets/en/Admin/Cert2.png)

> Apple Developer Program に加入し、アプリケーションの公証 (後述参照) に必要なデベロッパー認証を取得することが推奨されます。

#### Gatekeeper について

Gatekeeper とは macOS のセキュリティ機能で、インターネットからダウンロードしてきたアプリケーションの実行を管理するものです。 もしダウンロードしたアプリケーションが Apple Store からダウンロードしたものではない、または署名されていない場合には実行が拒否されます。

> On Apple Silicon machines, 4D [components](#components) need to be actually signed. 署名されていないコンポーネントの場合、アプリケーション起動時にエラー ("lib4d-arm64.dylib を開けません...") が発生します。

The **Sign application** option of the 4D application builder lets you generate applications and components that are compatible with this option by default.

#### ノータリゼーション (公証) について

macOS 10.14.5 (Mojave) および 10.15 (Catalina) において、アプリケーションのノータリゼーション (公証) が Apple より強く推奨されています。公証を得ていないアプリケーションをインターネットからダウンロードした場合、デフォルトでブロックされます。

The 4D [built-in signing features](#os-x-signing-certificate) have been adapted to meet all of Apple's requirements to allow using the Apple notary service. 公証自体はデベロッパーによっておこなわなくてはいけないもので、4D とは直接関係ありません。なお、Xcode のインストールが必須である点に注意してください。 Please refer to [this 4D blog post](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) that provides a step-by-step description of the notarization process.

For more information on the notarization concept, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## アプリケーションアイコンのカスタマイズ

4Dは、ダブルクリックで実行可能なアプリケーションにデフォルトアイコンを割り当てますが、アプリケーションごとにこのアイコンをカスタマイズできます。

- **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. icns タイプのアイコンファイルを作成し、それを Project フォルダーと同階層に配置しておきます。

> Apple, Inc. provides a specific tool for building _icns_ icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

Your icon file must have the same name as the project file and include the _.icns_ extension. 4D automatically takes this file into account when building the double-clickable application (the _.icns_ file is renamed _ApplicationName.icns_ and copied into the Resources folder; the _CFBundleFileIcon_ entry of the _info.plist_ file is updated).

- **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (_.ico_ extension), prior to building the application file, and place it next to the project folder.

Your icon file must have the same name as the project file and include the _.ico_ extension. 4Dは自動でこのファイルを認識し、アイコンとして使用します。

You can also set specific [XML keys](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) in the buildApp.4DSettings file to designate each icon to use. 次のキーが利用できます:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath

## データファイルの管理

### データファイルを開く

ユーザーが組み込みアプリ、またはアプリのアップデート (シングルユーザー、またはクライアント/サーバーアプリ) を起動すると、4D は有効なデータファイルを選択しようとします。 アプリケーションによって、複数の場所が順次検索されます。

組み込みアプリ起動時のオープニングシーケンスは以下のようになっています:

1. 4D tries to open the last data file opened, [as described below](#last-data-file-opened) (not applicable during initial launch).
2. 見つからない場合、4D は .4DZ ファイルと同階層の Default Data フォルダー内にあるデータファイルを、読み取り専用モードで開こうとします。
3. これも見つからない場合、4D は標準のデフォルトデータファイルを開こうとします (.4DZ ファイルと同じ場所にある、同じ名前のファイル)。
4. これも見つからない場合、4D は "データファイルを開く" ダイアログボックスを表示します。

### 最後に開かれたデータファイル

#### 最後に開かれたファイルへのパス

4D でビルドされたスタンドアロンまたはサーバーアプリケーションは、最後に開かれたデータファイルのパスをアプリケーションのユーザー設定フォルダー内に保存します。

アプリケーションのユーザー設定フォルダーの場所は、以下のコマンドで返されるパスに対応しています:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

The data file path is stored in a dedicated file, named _lastDataPath.xml_.

これにより、アプリケーションのアップデートを提供したときにも、ローカルのユーザーデータファイル (最後に使用されたデータファイル) が初回の起動から自動的に開かれます。

このメカニズムは標準的な運用に適しています。 しかしながら特定の場合、たとえば組み込みアプリケーションを複製した場合などにおいて、データファイルとアプリケーションのリンクを変えたいことがあるかもしれません (次章参照)。

#### データリンクモードの設定

コンパイルされたアプリケーションでは、4D は最後に使用されたデータファイルを自動的に使用します。 By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

異なるデータファイルを使用するために組み込みアプリを複製する場合には、この方法は適さないかもしれません。 複製されたアプリは同じアプリケーションユーザー設定フォルダーを共有するため、同じデータファイルを使用することになります (最後に使用されたファイルが開かれるため、データファイル名を変更した場合でも結果は同じです)。

そのため 4D では、アプリケーションパスを使用してデータファイルとリンクすることも可能です。 このとき、データファイルは特定のパスを使用してリンクされるので、最後に開かれたファイルであるかは問われません。 You therefore link your data **by application path**.

このモードを使えば、組み込みアプリがいくつあっても、それぞれが専用のデータファイルを使えます。 However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the _lastDataPath.xml_ file is updated accordingly).

_Duplication when data linked by application name:_
![](../assets/en/Project/datalinking1.png)

_Duplication when data linked by application path:_
![](../assets/en/Project/datalinking2.png)

このデータリンクモードはアプリケーションビルドの際に選択することができます。 これには、次の二つの方法があります:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).

### デフォルトのデータフォルダーを定義する

4D では、アプリケーションビルド時にデフォルトのデータファイルを指定することができます。 When the application is launched for the first time, if no local data file is found (see [opening sequence described above](#opening-the-data-file)), the default data file is automatically opened silently in read-only mode by 4D. この機能を使って、組み込みアプリを初回起動したときのデータファイル作成・選択の操作をより制御することができます。

具体的には、次のような場合に対応できます:

- 新しい、またはアップデートされた組み込みアプリを起動したときに、"データファイルを開く" ダイアログが表示されるのを防ぐことができます。 たとえば、デフォルトデータファイルが開かれたことを起動時に検知して、独自のコードやダイアログを実行して、ローカルデータファイルの作成や選択を促すことができます。
- デモアプリなどの用途で、読み取り専用データしか持たない組み込みアプリを配布することができます。

デフォルトのデータファイルを定義・使用するには:

- デフォルトのデータファイル (名称は必ず "Default.4DD") を、データベースプロジェクトのデフォルトフォルダー (名称は必ず "Default Data") 内に保存します。 このデフォルトのデータファイルには、プロジェクト構成に応じて必要なファイルもすべて揃っている必要があります: インデックス (.4DIndx)、外部BLOB、ジャーナル、他。 必ず、有効なデフォルトデータファイルを用意するようにしてください。 なお、デフォルトデータファイルはつねに読み取り専用モードで開かれるため、データファイルの作成前に、あらかじめ大元のストラクチャー設定の "ログを使用" オプションを非選択にしておくことが推奨されます。
- アプリケーションをビルドすると、このデフォルトデータフォルダーが組み込みアプリに統合されます。 同フォルダー内ファイルはすべて一緒に埋め込まれます。

この機能を図示すると次のようになります:

![](../assets/en/Project/DefaultData.png)

デフォルトのデータファイルが初回起動時に検知された場合、データファイルは自動的に読み取り専用モードで開かれ、データファイルの変更を伴わないカスタムオペレーションを実行できるようになります。

## クライアント接続の管理

ここでは、組み込みクライアントアプリが運用環境において対象サーバーへと接続する際のメカニズムについて説明します。

### 接続シナリオ

組み込みクライアントアプリの接続プロシージャーは、専用サーバーが使用不可能な場合にも柔軟に対応します。 4Dクライアントアプリのスタートアップシナリオは、次のとおりです:

1. If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application connects to the specified server address.\
   OR\
   The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).

2. これが失敗した場合、クライアントアプリケーションは、アプリケーションのユーザー設定フォルダーに保存されている情報 ("lastServer.xml" ファイル、詳細は後述参照) を使用してサーバーへの接続を試みます。

3. これが失敗した場合、クライアントアプリケーションは接続エラーダイアログボックスを表示します。

- If the user clicks on the **Select...** button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.
- If the user clicks on the **Quit** button, the client application quits.

4. 接続が成功した場合、クライアントアプリケーションは将来の使用のために、その接続情報をアプリケーションのユーザー設定フォルダーに保存します。

この手順を図示すると以下のようになります:

![](../assets/en/Desktop/client-connect.png)

### 最後に使用したサーバーパスを保存する

最後に使用され検証されたサーバーパスは、アプリケーションのユーザー設定フォルダー内の "lastServer.xml" ファイルに自動的に保存されます。 このフォルダーは次の場所に保存されています:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

このメカニズムは、最初に指定したサーバーが何らかの理由 (例えばメンテナンスモードなど) で一時的に使用できないケースに対応します。 こういった状態が初めて起こったときにはサーバー選択ダイアログボックスが表示され (ただし許可されていた場合に限ります、後述参照)、ほかのサーバーをユーザーが手動で選択すると、その接続が成功した場合にはそのパスが保存されます。 それ以降に接続ができなかった場合には、"lastServer.xml" のパス情報によって自動的に対処されます。

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. このメカニズムはあくまで一時的な接続不可状態の場合を想定しています。
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.

### エラー時のサーバー選択ダイアログボックス使用の可・不可

組み込みクライアントアプリがサーバーに接続できない場合、標準のサーバー選択ダイアログボックスを表示するかどうかは設定しておくことができます。 The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. デフォルトの挙動です。 The application can only quit.\
  `ServerSelectionAllowed`: **False** or key omitted
  ![](../assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.
  `ServerSelectionAllowed`: **True**
  ![](../assets/en/Project/connect2.png)
  ![](../assets/en/Project/connect3.png)

## サーバーまたはシングルユーザーアプリケーションの自動更新

原則的に、サーバーアプリケーションや組み込みのシングルユーザーアプリケーションを更新するには、ユーザーの介入 (またはカスタムのシステムルーチンのプログラミング) が必要です。組み込みアプリケーションの新しいバージョンが利用可能になるたびに、運用中のアプリケーションを終了して、古いファイルを新しいファイルに手動で置き換え、その後アプリケーションを再起動してカレントのデータファイルを選択しなければなりません。

You can automate this procedure to a large extent using the following language commands: [`SET UPDATE FOLDER`](https://doc.4d.com/4dv19/help/command/en/page1291.html), [`RESTART 4D`](https://doc.4d.com/4dv19/help/command/en/page1292.html), and also [`Get last update log path`](https://doc.4d.com/4dv19/help/command/en/page1301.html) for monitoring operations. これらのコマンドを使い、4Dアプリケーションに、以下に説明する自動更新手順をトリガーする機能を実装します。 具体的には、メニューコマンドや、バックグラウンドで動作するプロセスなどを実装し、サーバーにアーカイブがあるかどうかを定期的にチェックします。

> You also have XML keys to elevate installation privileges so that you can use protected files under Windows (see the [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html) manual).

以下に、サーバーや組み込みシングルユーザーアプリケーションをアップデートする場合のシナリオを説明します:

1. HTTPサーバーなどを使用して、サーバーアプリケーションまたは組み込みシングルユーザーアプリケーションの新バージョンを本番環境のマシンに転送します。
2. In the application in production, you call the `SET UPDATE FOLDER` command: this command designates the location of the folder where the "pending" update of the current application is found. 任意で、本番環境バージョンのカスタム要素 (ユーザーファイル) をこのフォルダーにコピーすることもできます。
3. In the application in production, call the `RESTART 4D` command: this command automatically triggers execution of a utility program named "updater" that exits the current application, replaces it using the "pending" update if one is specified, and restarts the application with the current data file. 旧バージョンは名称変更されます。

> この手順は、サービスとして実行される Windowsサーバーアプリケーションと互換性があります。

### アップデートログ

インストール手順により、ターゲットマシン上の組み込みアプリケーション (クライアント、サーバー、またはシングルユーザー) の更新処理の詳細が記録されたログファイルが作成されます。 このファイルは、インストール中に発生したエラーの分析に役立ちます。

The update log is named `YYYY-MM-DD_HH-MM-SS_log_X.txt`, for example, `2021-08-25_14-23-00_log_1.txt` for a file created on August 25, 2021 at 14:23.

このファイルは、システムユーザーフォルダー内の "Updater" アプリケーションフォルダー内に作成されます。 You can find out the location of this file at any time using the [`Get last update log path`](https://doc.4d.com/4dv19/help/command/en/page1301.html) command.
