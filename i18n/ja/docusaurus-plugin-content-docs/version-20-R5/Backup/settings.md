---
id: settings
title: バックアップ設定
---

Backup settings are defined through three pages in the [Settings dialog box](../settings/overview.md). 次の設定がおこなえます:

- 自動バックアップ用のスケジューラー設定
- 各バックアップに含めるファイル
- 自動タスクの実行を可能にする高度な設定

> Settings defined in this dialog box are written in the _Backup.4DSettings_ file, stored in the [Settings folder](Project/architecture.md#settings-folder).

## スケジューラー

4D や 4D Server で開かれているアプリケーションのバックアップを自動化することができます (クライアントマシンが接続されている必要はありません)。 これはバックアップ周期 (時間、日、週、月単位等) を設定することによりおこないます。現在のバックアップ設定に基づき、4D は自動でバックアップを実行します。

If this application was not launched at the theoretical moment of the backup, the next time 4D is launched, it considers the backup as having failed and proceeds as set in the Settings (refer to [Handling backup issues](backup.md#handling-backup-issues)).

The scheduler backup settings are defined on the **Backup/Scheduler** page of the Structure Settings:

![](../assets/en/Backup/backup02.png)

このページにあるオプションを使用して、アプリケーションの自動バックアップのスケジュールを設定できます。 標準のクイック設定、または完全なカスタマイズを選択できます。 Various options appear depending on the choice made in the **Automatic Backup** menu:

- **Never**: The scheduled backup feature is disabled.
- **Every Hour**: Programs an automatic backup every hour, starting with the next hour.
- **Every Day**: Programs an automatic backup every day. バックアップを何時に開始するかを設定します。
- **Every Week**: Programs an automatic backup every week. バックアップを開始する曜日と時刻を入力するエリアが表示されます。
- **Every Month**: Programs an automatic backup every month. バックアップを開始する日付と時刻を入力するエリアが表示されます。
- **Personalized**: Used to configure "tailormade" automatic backups. このオプションを選択すると、複数の入力エリアが表示されます:
  - **Every X hour(s)**: Allows programming backups on an hourly basis. 1から24までの値を設定できます。
  * **Every X day(s) at x**: Allows programming backups on a daily basis. たとえば、毎日バックアップをおこなうには 1 と設定します。 このオプションを選択した場合、バックアップが開始される時刻を設定しなければなりません。
  * **Every X week(s) day at x**: Allows programming backups on a weekly basis. たとえば、毎週バックアップをおこなうには 1 と設定します。 このオプションを選択した場合、バックアップを開始する曜日と時刻を設定しなければなりません。 複数の曜日を選択することもできます。 たとえば、毎週水曜日と金曜日にバックアップをするようプログラムできます。
  * **Every X month(s), Xth Day at x**: Allows programming backups on a monthly basis. たとえば、毎月バックアップをおこなうには 1 と設定します。 このオプションを選択した場合、バックアップを開始する日付と時刻を設定しなければなりません。

> 夏時間と標準時の切り替えがある場合にはスケジューラーが一時的に影響され、次のバックアップ実行が 1時間ずれる場合があります。 このずれは一回限りであり、その後のバックアップはスケジュール時間どおりに実行されます。

## 設定

ストラクチャー設定のバックアップ/設定ページではバックアップやログファイルの有効化/無効化、および保存先を設定できます。 これらのパラメーターは、4D や 4D Server で開かれる各アプリケーションごとに設定されます。

![](../assets/en/Backup/backup032.png)

> **4D Server:** These parameters can only be set from the 4D Server machine.

### 内容

このエリアでは、次回のバックアップ時にコピー対象とするファイルやフォルダーを指定します。

- **Data**: Application data file. このオプションが選択されている場合、次のものがデータとともにバックアップされます:
  - データベースのカレントログファイル (あれば)
  - the full `Settings` folder located [next to the data file](Project/architecture.md#settings-folder) (if it exists), i.e. the _user settings for data_.
- **Structure**: Application project folders and files. プロジェクトがコンパイルされている場合には、このオプションは .4dz ファイルをバックアップします。 When this option is checked, the full `Settings` folder located [at the same level as the Project folder](Project/architecture.md#settings-folder-1), i.e. the _user settings_, is automatically backed up.
- **User Structure File (only for binary database)**: _deprecated feature_
- **Attachments**: This area allows you to specify a set of files and/or folders to be backed up at the same time as the application. ここではどのようなタイプのファイル (ドキュメントやプラグイン、テンプレート、ラベル、レポート、ピクチャーなど) でも指定できます。 個々のファイル、または丸ごとバックアップするフォルダーを個々に設定できます。 添付エリアには、設定されたファイルのパスが表示されます。
  - **Delete**: Removes the selected file from the list of attached files.
  - **Add folder...**: Displays a dialog box that allows selecting a folder to add to the backup. 復元の場合、フォルダーがその内容物とともに復元されます。 アプリケーションファイルを含むフォルダーを除き、すべてのフォルダーやマシンに接続されたボリュームを選択できます。
  - **Add file...**: Displays a dialog box that allows you to select a file to add to the backup.

### バックアップファイル保存先

このエリアではバックアップファイルの格納場所を確認したり、変更したりできます。

エリアをクリックすると、ファイルの場所がポップアップで表示されます。

To modify the location where these files are stored, click the **...** button. 選択ダイアログが表示され、バックアップファイルを配置するフォルダーやディスクを選択できます。 "使用状況" と "空き容量" エリアは、選択したフォルダーが存在するディスクの状態を自動で表示します。

### ログ管理

The **Use Log File** option, when checked, indicates that the application uses a log file. カレントデータファイル用のログファイルのパス名は、オプションの下にて指定します。 このオプションが選択されている場合、ログファイルなしでアプリケーションを開くことはできません。 For more information about the log file, please refer to [log file](log.md)

By default, any project created with 4D uses a log file (option **Use Log File** checked in the **General Page** of the **Preferences**). The log file is named _data.journal_ and is placed in the Data folder.

> 新しいログファイルを有効にするには、その前にアプリケーションのデータをバックアップしなければなりません。 現在使用しているデータファイルについてこのオプションをチェックすると、バックアップが必要である旨の警告メッセージが表示されます: ログファイルの作成は延期され、実際には次のバックアップの後にログファイルが作成されます。 ログファイルの作成は延期され、実際には次のバックアップの後にログファイルが作成されます。

## Backup & Restore

バックアップ＆復旧の設定は必要に応じて変更します。 デフォルトの設定は、標準的なバックアップ動作をおこないます。

![](../assets/en/Backup/backup04.png)

### 一般設定

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. この機能は以下のように動作します: バックアップ処理が完了したら、アーカイブが作成されたのと同じ場所、同じ名前のもっとも古いアーカイブを削除します。ディスクスペースを確保するため、バックアップ前に削除するよう、削除のタイミングを変更することもできます。
  たとえば、3世代のファイルを保持するよう設定している場合、最初の 3回のバックアップで MyBase-0001、MyBase-0002、MyBase-0003 が作成され、 4回目のバックアップで MyBase-0004 が作成されたのちに MyBase-0001 が削除されます。 この設定はデフォルトで有効になっており、4D は 3世代のバックアップを保持します。
  このメカニズムを無効にするには、チェックボックスの選択を外します。

> このパラメーターは、アプリケーションおよびログファイル両方のバックアップに影響します。

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. そうでない場合、定期的なバックアップはキャンセルされ、次回のスケジュールまで延期されます。 エラーは生成されませんが、バックアップジャーナルにはバックアップが延期された旨記録されます。 このオプションを使用すれば、主に参照目的で使用されているアプリケーションのバックアップに消費されるマシン時間を節約できます。 ストラクチャーや添付ファイルに対して変更がおこなわれていても、データファイルの更新としては扱われない旨注意してください。

> このパラメーターは、アプリケーションおよびログファイル両方のバックアップに影響します。

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). このオプションが機能するには、バックアップファイルが名称変更されたり、移動されたりしていてはなりません。

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). バックアップが実行できなかった場合、4D では再試行することが可能です。
  - **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. 失敗したバックアップはキャンセルされます。 エラーが生成されます。
  - **Retry after X second(s), minute(s) or hour(s)**: When this option is checked, a new backup attempt is executed after the wait period. このメカニズムを使用すると、バックアップをブロックするような特定の状況に対応することが可能となります。 秒、分、あるいは時間単位で待ち時間を設定できます。 次のバックアップ試行にも失敗するとエラーが生成され、ステータスエリアに失敗状況が表示され、バックアップジャーナルにも記録されます。
  - **Cancel the operation after X attempts**: This parameter is used to set the maximum number of failed backup attempts. この最大数に達してもバックアップが正しく実行できなかった場合、バックアップはキャンセルされ、エラー 1401 ("バックアップ試行の最大数に達しました。自動バックアップは無効になります") が生成されます。 この場合、データベースを再起動するか、手動バックアップが成功するまで自動バックアップはおこなわれません。
    このパラメーターは、人による介入が必要となるような問題があり、バックアップ試行が自動的に繰り返されることにより全体的なパフォーマンスに影響するようなケースで使用できます。 デフォルトでこのオプションは選択されていません。

> 定期的なバックアップが実行される予定時刻にアプリケーションが起動されていなかった場合、4D はバックアップが失敗したものとして扱います。

### アーカイブ

これらのオプションはメインのバックアップファイルとログバックアップファイルに適用されます。

- **Segment Size (Mb)**
  4D allows you to segment archives, i.e., to cut it up into smaller sizes. この振る舞いにより、たとえばバックアップファイルを複数の異なるディスク (DVDやUSBデバイス等) に格納できます。 復元時、4D はセグメントを自動的に統合します。 各セグメントには MyApplication[xxxx-yyyy].4BK といった名称がつけられます (xxxx はバックアップ番号、yyyy はセグメント番号)。 たとえば、MyApplication のバックアップが 3つのセグメントに分割されると、次のような名前になります: MyApplication[0006-0001].4BK、MyApplication[0006-0002].4BK、MyApplication[0006-0003].4BK
  The **Segment Size** menu is a combo box that allows you to set the size in MB for each segment of the backup. メニューから定義済み値を選択するか、0~2048 の値を入力できます。 If you pass 0, no segmentation occurs (this is the equivalent of passing **None**).

- **Compression Rate**
  By default, 4D compresses backups to help save disk space. しかし大量のデータがある場合、ファイルの圧縮処理はバックアップにかかる時間を長くします。 The **Compression Rate** option allows you to adjust file compression:
  - **None:** No file compression is applied. バックアップは早くおこなわれますが、ファイルサイズは大きくなります。
  - **Fast** (default): This option is a compromise between backup speed and archive size.
  - **Compact**: The maximum compression rate is applied to archives. アーカイブファイルはディスク上で最小のサイズとなりますが、バックアップの速度は低下します。

- **Interlacing Rate and Redundancy Rate**
  4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. これらのメカニズムを必要に応じて設定できます。 The menus for these options contain rates of **Low**, **Medium**, **High** and **None** (default).
  - **Interlacing Rate**: Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. 率を上げることでリスクがより低減されますが、データの処理により多くのメモリが必要となります。
  - **Redundancy Rate**: Redundancy allows securing data present in a file by repeating the same information several times. 冗長率を高くするとよりファイルが保護されます。しかし書き込みは遅くなり、ファイルサイズも増大します。

### 自動復元とログの統合

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. ユーザーによる介入は必要ありませんが、処理はバックアップジャーナルに記録されます。

- **Integrate the latest logs if the database is incomplete**: When this option is checked, the program automatically integrates the current log file if it contains operations that are not present in the data file. 同じリポジトリに連続した有効な .journal ファイルがある場合、プログラムは必要な .journal ファイルを古いものから最新のものまで、あらかじめ統合しておきます。

  このようなケースは、ディスクに書き込まれていないデータがまだキャッシュ中に存在する状態で、電力の切断が起きた場合や、データファイルを開いた時に異常が検知されて復元処理がおこなわれた場合に発生します。

  :::note

  この機能は、カレントログファイルフォルダーにある全ログファイルがプログラムにより起動時に解析されることを意味します。 したがって、パフォーマンス上の理由から、不要なログファイルがフォルダーに保存されたままにしておかないことが推奨されます。

  :::

ユーザーにダイアログボックスが提示されることはありません。 処理は完全に自動です。 処理はバックアップジャーナルに記録されます。

> 自動復元の場合、復元されるのは次の要素に限られます:
>
> - .4DD ファイル
> - .4DIndx ファイル
> - .4DSyncData ファイル
> - .4DSyncHeader ファイル
> - External Data フォルダー
>
> If you wish to get the attached files or the project files, you must perform a [manual restore](restore.md#manually-restoring-a-backup-standard-dialog).

:::caution

If the [data file is encrypted](../MSC/encrypt.md), make sure you [saved the data encryption key](../MSC/encrypt#saving-the-encryption-key) in a `.4DKeyChain` file stored at the first level of the drive, so that 4D can access it if the automatic restore feature triggered. そうでない場合は、復元中にエラーが返されます。

:::
