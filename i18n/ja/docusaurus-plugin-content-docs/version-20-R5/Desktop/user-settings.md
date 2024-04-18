---
id: user-settings
title: ユーザー設定
---

4Dでは、プロジェクトの設定について 2つの運用モードが提供されています:

- **Standard** mode: all [settings](../settings/overview.md) are stored in the [_settings.4DSettings_ file at the project level](../Project/architecture.md#sources) and are applied in all cases. これはデフォルトのモードで、開発段階 (すべてのアプリケーション) に適しています。

- **User settings** mode: part of the custom settings are stored in a _settings.4DSettings_ file [in the Settings folder](../Project/architecture.md#settings-user) (for all data files) or [in the Data folder](../Project/architecture.md#settings-user-data) (for this data file) and are used instead of the structure settings. このモードは、デスクトップアプリケーションの運用段階に適しています。 You enable this mode using an option located on the [Security page](../settings/security.md) of the Settings.

ユーザー設定を定義することで、4D アプリケーションを更新しても、カスタム設定を保持できるようになります。あるいは、異なる場所に展開する同じアプリケーションに対し、異なる設定を適用することが可能になります。 また、設定ファイルの内容は XML で記述されるため、プログラムによる設定の管理もできるようになります。

4D は 2種類のユーザー設定を生成し使用することができます:

- **User Settings**: They are used instead of structure settings for any data file opened with the application.
- **User Settings for Data file**: They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.

このオプションを使用すると、それぞれが異なる設定を持つデータファイルを複数使用する同じデスクトップアプリケーションのコピーを複数配布したりアップデートしたりすることが容易になります。

以下の設定の場合を考えてみましょう。とあるアプリケーションが複製され、それぞれで異なる設定 (ポートID) を使用します。 このユーザー設定がデータファイルとリンクしていた場合、ポートID を手動で変えることななくアプリケーションをアップデートすることができます:

![](../assets/en/settings/user-settings-config.png)

## ユーザー設定の有効化

To enable user settings, you need to check the **Settings** > **Security** > **Enable User Settings** option:

![](../assets/en/settings/user-settings-enable.png)

このオプションをチェックすると、設定が 3つのダイアログに分けられます:

- **ストラクチャー設定**
- **ユーザー設定**
- **データファイル用のユーザー設定**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate _settingsType_ selector.

ストラクチャー設定ダイアログボックスは、標準の設定ダイアログと同じで、そのすべてのプロパティにアクセスできます (これらの設定はユーザー設定によってオーバーライドできます)。

## ユーザー設定とデータファイル用のユーザー設定

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **ストラクチャー設定のページ**                                                                        | **ユーザー設定のページ**       | **データファイル用のユーザー設定のページ** |
| ---------------------------------------------------------------------------------------- | -------------------- | ----------------------- |
| [General page](../settings/general.md)                                                   | N/a                  | N/a                     |
| [Interface page](../settings/interface.md)                                               | 標準設定と同じ              | 標準設定と同じ                 |
| [Compiler page](../settings/compiler.md)                                                 | N/a                  | N/a                     |
| [Database/Data storage page](../settings/database.md#data-storage)                       | N/a                  | N/a                     |
| [Database/Memory page](../settings/database.md#memory)                                   | 標準設定と同じ              | 標準設定と同じ                 |
| [Backup/Scheduler page](../settings/backup.md#scheduler)                                 | N/a                  | 標準設定と同じ                 |
| [Backup/Configuration page](../settings/backup.md#configuration)                         | N/a                  | 標準設定と同じ                 |
| [Backup/Backup & Restore page](../settings/backup.md#backup-restore) | N/a                  | 標準設定と同じ                 |
| [Client-server/Network options page](../settings/client-server.md#network-options)       | 標準設定と同じ              | 標準設定と同じ                 |
| [Client-server/IP configuration page](../settings/client-server.md#ip-configuration)     | 標準設定と同じ              | 標準設定と同じ                 |
| [Web/Configuration page](../settings/web.md#configuration)                               | 標準設定と同じ              | 標準設定と同じ                 |
| [Web/Options (I) page](../settings/web.md#options)                    | 標準設定と同じ              | 標準設定と同じ                 |
| [Web/Options (II) page](../settings/web.md#options-ii)                | 標準設定と同じ              | 標準設定と同じ                 |
| [Web/Log (type) page](../settings/web.md#log)                         | 標準設定と同じ              | 標準設定と同じ                 |
| [Web/Log (backup) page](../settings/web.md#log)                       | 標準設定と同じ              | 標準設定と同じ                 |
| [Web/Web Services page](../settings/web.md#web-services)                                 | メソッドプリフィクスオプションは使用不可 | メソッドプリフィクスオプションは使用不可    |
| [SQL page](../settings/sql.md)                                                           | 標準設定と同じ              | 標準設定と同じ                 |
| [PHP page](../settings/php.md)                                                           | 標準設定と同じ              | 標準設定と同じ                 |
| [Security page](../settings/security.md)                                                 | N/a                  | N/a                     |
| [Compatibility page](../settings/compatibility.md)                                       | N/a                  | N/a                     |

When you edit settings in this dialog box, they are automatically stored in the corresponding _settings.4DSettings_ file (see below) or the _Backup.4DSettings_ file (check the [Backup settings](../Backup/settings.md) page for more information).

## `SET DATABASE PARAMETER` and user settings

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command are automatically saved in the user settings for the data file.

> `Table sequence number` is an exception; this setting value is always saved in the data file itself.

## settings.4DSettings ファイル

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. これらのファイルの場所は、ユーザー設定の種類に応じて決まります。

### ユーザー設定

標準のユーザー設定ファイルは自動的に作成され、以下の場所にある Settingsフォルダー内に保存されます:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where _ProjectFolder_ is the name of the folder containing the project structure file.

組み込みアプリケーションでは、ユーザー設定ファイルは以下の場所に配置されます:

- シングルユーザー版の場合: ProjectFolder/Database/Settings/settings.4DSettings
- クライアント‐サーバー版の場合: ProjectFolder/Server Database/Settings/settings.4DSettings

### データファイル用のユーザー設定

データファイルにリンクされているユーザー設定ファイルは自動的に作成され、以下の場所にある Settingsフォルダー内に保存されます:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where _Data_ is the name of the folder containing the current data file of the application.

> データファイルがプロジェクトストラクチャーファイルと同階層に位置している場合、ストラクチャー用とデータ用のユーザー設定ファイルは同じ場所の同じファイルを共有します。 The **User Settings for Data File...** menu command is not proposed.

:::note

設定ファイルは XMLファイルであり、4D の XMLコマンドや、XMLエディターを使用して読み込んだり変更したりすることができます。 つまり、特にコンパイルされて 4D Volume Desktop と組み込まれたアプリケーションにおいて、設定内容をプログラムで管理することが可能です。 このファイルをプログラムで編集した場合、変更内容が反映されるのはデータベース再起動後です。

:::

## 設定の優先順位

設定は 3つの階層に保存することが可能です。 ある階層で定義されたそれぞれの設定は、前のレベルで定義された設定を上書きします (あれば):

| **優先度**                  | **Name**                                              | **Location**                                                                                                                                                                                                        | **Comments**                                                          |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 3 (低) | ストラクチャー設定 (あるいは、"ユーザー設定" 機能無効時の設定) | _**settings.4DSettings**_ file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | ユーザー設定が有効化されていない場合の固有の保存位置。 アプリケーションの複製すべてに適用。                        |
| 2                        | ユーザー設定 (全データファイル)                  | _**settings.4DSettings**_ file in the Settings folder at the same level as the Project folder                                                                                                       | ストラクチャー設定を上書きします。 アプリケーションパッケージ内に保存されます。                              |
| 1 (高) | ユーザー設定 (カレントデータファイル)               | _**settings.4DSettings**_ file in the Settings folder at the same level as the data file                                                                                                            | ストラクチャー設定とユーザー設定を上書きします。 その設定とリンクされたデータファイルがアプリケーションによって使用されたときにのみ適用。 |

ユーザー設定ファイルには関連した設定の一部しか含まれない一方、ストラクチャーファイルには、コア設定を含めたカスタム設定がすべて格納されているという点に注意してください。
