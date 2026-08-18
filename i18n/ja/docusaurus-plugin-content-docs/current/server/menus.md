---
id: menus
title: メニュー
---

4D Server アプリケーションのインタフェースは以下のメニューで構成されています: **ファイル**、**編集**、**ウィンドウ**、**ヘルプ**。 macOS ではいくつかのコマンドは**4D Server** メニュー (アプリケーションメニュー) に置かれます。

## File

### 新規

この階層コマンドにはサブメニューがあり、サーバマシン上で[プロジェクト](../GettingStarted/creating.md#プロジェクトの作成) やデータファイルを新しく作成するために使用します。

### 開く.../最近使用したデータベースを開く

これらのコマンドを使用して[4D Serverでデータベース/プロジェクト](../Desktop/clientServer.md#リモートプロジェクトを開く) を開くことができます。 **最近使用したデータベース** コマンドは、4D Server が最近開いたことのあるデータベースを含むサブメニューを表示します。 このメニューをリセットするには、**メニュークリア** コマンドを選択します。

### プロジェクトを閉じる...

このコマンドは4D Serverを終了せずに、現在のプロジェクトを閉じます。 このコマンドを選択するとサーバ終了ダイアログが表示され、接続ユーザの[接続解除モード](../server/exit.md) を指定できます。

### ウィンドウを閉じる

このコマンドは4D Server アプリケーションの最前面にあるウィンドウを閉じます。

### すべてのウィンドウを閉じる

このコマンドは4D Serverアプリケーションのすべてのウィンドウを閉じます。 この場合、データベースが公開されていることを示す要素は**ファイル**メニューの**データベースを閉じる...** が有効化されているという点のみになるという点に注意してください。

### 現在のアプリケーションをサービスとして登録 / 現在のアプリケーションの登録解除 / すべてのサーバサービスの登録解除

(Windowsで利用可能) これらのコマンドを使用して[サービスとして登録するアプリケーション](./service.md) を管理します。

### データバッファをフラッシュ

このコマンドはキャッシュ中のデータを"強制的に" ディスクに保存します。 デフォルトで、4D Server は[データベース環境設定 (データベース/データ管理ページ) で指定された時間](../settings/database.md#データベースキャッシュ設定) が経過すると自動でキャッシュをフラッシュします。

### バックアップ

このコマンドを使用していつでもデータベースのバックアップを起動できます。 このコマンドを選択すると、以下のダイアログボックスが表示されます:

![](../assets/en/server/backup.png)

- **バックアップ** ボタンは、[データベース環境設定で設定された (バックアップするファイル、アーカイブの場所、保持するセット数などの) パラメタ](../settings/backup.md) を使用して、即座にバックアップを起動します。
- **環境設定** ボタンは[環境設定のバックアップテーマ](../settings/backup.md) を開き、現在のバックアップ設定を確認して、必要であれば編集できます。
- **キャンセル**ボタンはバックアップ処理を中断します。

### 復元...

このコマンドはファイルを開くダイアログを表示し、復元するアーカイブファイルを選択できます。

### 終了

このコマンドを使用して[4D Serverアプリケーションを閉じる](./exit.md) ことができます。

:::note

macOS では**終了**コマンドは**4D Server** メニュー (アプリケーションメニュー) 内にあります。

:::

## 編集

4D Serverの**編集**メニューは標準のコピー/ペーストコマンドや、**クリップボード表示**コマンド等を含みます。

このメニューには**環境設定...** (Windows 環境下) and **データベース設定** コマンドが含まれ、これらを使用することでアプリケーション内のそれに対応するダイアログボックスを表示することができます。 このダイアログボックスを使用して開発者の[設定](../Preferences/overview.md) や、プロジェクトの様々な[動作](../settings/overview.md) を定義できます。

:::note

macos では、**環境設定... \*\* コマンドは**4D Server\*\* メニュー (アプリケーションメニュー) 内にあります。

:::

**編集** メニューには**デバッガを終了** および **開始時にデバッガを起動** コマンドが含まれ、これによってコードのデバッギングを管理することができます:

### Detach Debugger

If you select this option, the debugger can be attached to a remote 4D. The menu command becomes **Attach Debugger**, so that you can attach the debugger back to the server (if not still attached to a remote 4D).

### Attach Debugger At Startup

(selected by default) This option automatically attaches the debugger to the server each time the project is launched. Deselect this option if you want to attach permanently the debugger to a remote 4D.

*Warning*: If this option is selected for a server which is subsequently launched in headless mode, it will not be possible to use the debugger on this server.

For more information, please refer to [Debugging from Remote Machines](../Debugging/debugging-remote.md).

## Window

The first part of the **Window** menu includes standard commands for organizing workspace windows (these commands differ depending on the platform).

It also contains display commands for windows specific to 4D Server:

### 管理

This command displays the [4D Server Administration window](../ServerWindow/overview.md) if it has been closed or minimized.

### Project Dependencies

Displays the [Dependency manager](../Project/components.md).

### ランタイムエクスプローラー

This command displays the 4D Server Runtime Explorer window.

![](../assets/en/server/runtime-explorer.png)

The Runtime Explorer enables you to view the status of the database various structural elements and to check that the available resources are correctly managed. The Runtime Explorer is particularly useful while developing or analyzing a database.

The Runtime Explorer window contains four pages that can be accessed by clicking on the following buttons: **Watch**, **Process**, **Break** and **Catch**. The Runtime Explorer works the same way in 4D Server and 4D.

### Data Explorer in Browser

Displays the [Data Explorer](../Admin/dataExplorer.md) in your default browser.

### Qodly Studio

Displays the [Qodly Studio interface](https://developer.4d.com/qodly/4DQodlyPro/qodlyStudioInterface) in your default browser on the server machine.

### Qodlyアプリケーションのプレビュー

Displays the start page of your Qodly application in your default browser on the server machine. See [this section](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#preview-qodly-application) for more information.

## ヘルプ

### Maintenance Security Center

This command displays the [Maintenance and Security Center](../MSC/overview.md) (MSC) which groups together all the tools required for verification, analysis, maintenance, back-up, compacting and encryption of data and structure files.
This command is available even when no project is opened by 4D Server: in this case, it can be used to open a project in "maintenance mode" (it displays the standard open file dialog box so that you can designate the project to be opened). Maintenance mode is used more particularly for operations such as compacting or opening damaged projects.

### Online documentation

Opens the 4D documentation home page.

### License manager...

This command displays the License manager, used to view, manage, and activate [licenses](../Admin/licenses.md) in your 4D environment.

### About 4D Server...

Displays the 4D Server **About...** window.
