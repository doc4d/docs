---
id: backup
slug: backup
title: バックアップ
---

4D では、次の 3つの方法でバックアップを開始することができます:

- Manually, using the **Backup...** item of the 4D **File** menu or the **Backup** button of the [Maintenance and Security Center](MSC/backup.md).
- 自動的に行う方法: ストラクチャー設定からスケジューラーを使用します。
- Programmatically, using the `BACKUP` command.

> 4D Server: A backup can be started manually from a remote machine using a method that calls the `BACKUP` command. いかなる場合でも、このコマンドはサーバー上で実行されます。

## 手動バックアップ

1. Select the **Backup...** command in the 4D **File** menu.
   The backup window appears:
   ![](../assets/en/Backup/backup01.png)
   You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the **Backup/Configuration** page of the Database Settings.

- You can also open the [Maintenance and Security Center](MSC/overview.md) of 4D and display the [Backup page](MSC/backup.md).

The **Database properties...** button causes the Backup/Configuration page of the Structure Settings to be displayed.

2. Click **Backup** to start the backup using current parameters.

## 定期的な自動バックアップ

自動バックアップは指定されたスケジュールに基づいて自動的に実行されます。 They are configured in the **Backup/Scheduler** page of the **Settings**.

ユーザーが一切操作しなくても、このページで指定された時間にバックアップが自動実行されます。 For more information on using this dialog box, refer to [Scheduler in backup settings](settings.md#scheduler).

## BACKUP コマンド

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. You can use the `On Backup Startup` and `On Backup Shutdown` database methods for handling the backup process (see the _4D Language Reference_ manual).

## バックアップ処理の管理

バックアップが開始すると 4Dは、バックアップの進捗状況を知らせるサーモメーターのあるダイアログボックスを表示します:

![](../assets/en/Backup/backupProgress.png)

This thermometer is also displayed on the [Backup page of the MSC](MSC/backup.md) if you have used this dialog box.

The **Stop** button lets the user interrupt the backup at any time (refer to [Handling backup issues](backup.md#handling-backup-issues) below).

The status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server. It is also recorded in the database **Backup journal.txt**.

### バックアップ中のアプリケーションへのアクセス

バックアップ実行中のアプリケーションへのアクセスは、4D によって制限されます。 4D は、バックアップに含まれたファイルタイプに関連するプロセルはすべてロックします: プロジェクトファイルだけがバックアップされている場合、ストラクチャーにはアクセスできませんが、データにはアクセス可能です。

反対に、データだけがバックアップされているのであれば、ストラクチャーへのアクセスは許可されます。 この場合に、アプリケーションへのアクセスが可能かどうかを次に示します:

- シングルユーザー版の 4D の場合、アプリケーションは読み込み、書き込みともにロックされ、すべてのプロセスが停止します。 実行できるアクションはありません。
- 4D Server の場合、アプリケーションへの書き込みだけがロックされ、クライアントマシンはデータを照会することができます。 クライアントマシンからサーバーへ追加・削除・変更のリクエストが送信されると、ウィンドウが表示され、バックアップの終了まで待機するよう要求されます。 アプリケーションが保存されるとウィンドウが閉じられ、要求したアクションが実行されます。 To cancel the request in process and not wait for the end of the backup, simply click the **Cancel operation** button. ただし、バックアップ前に開始したメソッドから要求されたアクションが実行待機中である場合、このアクションをキャンセルすべきではありません。この場合、実行すべき残りの処理だけがキャンセルされてしまうためです。 しかも、メソッドの一部は実行済みなので、データにおいて論理上の不整合が生じる可能性があります。

> When the action waiting to be executed comes from a method and the user clicks the **Cancel operation** button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).

### バックアップ中に問題が発生した場合

バックアップが正常に実行されない場合もあります。 バックアップが不成功に終わる原因としては、ユーザーによる中断、添付ファイルが見つからない場合、保存先ディスクのトラブル、不完全なトランザクションなど、いくつか考えられます。4D は原因に応じて問題に対処します。

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**.

- **User interruption**: The **Stop** button in the progress dialog box allows users to interrupt the backup at any time. この場合、各項目のコピーが中止されてエラー 1406 が生成されます。 You can intercept this error in the `On Backup Shutdown` database method.
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):
  If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Settings.
  再試行にも失敗した場合、システムの警告ダイアログボックスが表示されてエラーが生成されます。 You can intercept this error in the `On Backup Shutdown` database method.

## バックアップジャーナル

バックアップの追跡や検証を容易にするため、バックアップモジュールは実行された各処理の概要を特別なファイルに書き込みます。このファイルは、いわゆる活動記録のようなものです。 処理が定期的または手動のいずれでおこなわれていても、すべてのデータベース操作 (バックアップ、復元、ログファイルの統合) がこのファイルに、日誌のごとく記録されます。 これらの処理が実行された日付と時刻もこのジャーナルに記述されます。

バックアップジャーナルには "Backup Journal[001].txt"という名前が付けられ、プロジェクトの "Logs" フォルダーに配置されます。 バックアップジャーナルは、任意のテキストエディターで開くことができます。

#### バックアップジャーナルのサイズ管理

バックアップ方法によっては、バックアップジャーナルのサイズがすぐに大きくなってしまうことがあります (たとえば、添付ファイルが一緒にバックアップされる場合)。 このサイズを管理するには、2つの方法があります:

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. 10MB よりも大きい場合、カレントファイルはアーカイブされ、[xxx] の番号がインクリメントされた新しいファイルを作成します (例: "Backup Journal[002].txt”)。 ファイル番号が 999 を超えると、ナンバリングは 1 に戻り、既存ファイルが置換されます。
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the _Backup.4DSettings_ file of the project. デフォルトでは、true の値が設定されています。 この値を false に変更すると、バックアップジャーナルには主要な情報のみが記録されます (スタート時の日付と時刻、そしてエラーの有無)。 The XML keys concerning backup configuration are described in the _4D XML Keys Backup_ manual.

## backupHistory.json

All information regarding the latest backup and restore operations are stored in the application's **backupHistory.json** file. 記録されるのは、保存されたファイル (添付含む) のパスのほか、回数、日付、時刻、所要時間、各処理のステータスです。 ファイルサイズを制限するため、バックアップ＆復旧ページの一般設定にある "最新のバックアップのみ保存 X バックアップファイル" に指定した数と同じ分だけ、処理のログを保持します。

The **backupHistory.json** file is created in the current backup destination folder. 以下のコードを実行することで、このファイルの実際のパスを取得することができます:

```4d
$backupHistory:=Get 4D file(Backup history file)
```

> **WARNING**\
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.

> The **backupHistory.json** file is formatted to be used by the 4D application. バックアップ処理のレポートを直接読んで確認するには、バックアップジャーナルの方が適切です。
