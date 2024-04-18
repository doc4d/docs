---
id: restore
title: 復元
---

問題が発生したときは、一連のアプリケーションファイル全体を復元することができます。 主に 2つのカテゴリの問題が発生する可能性があります:

- アプリケーションが使用中に予期せず終了された。 この問題は電力の切断、システムのエラー等により発生する可能性があります。 この場合、問題が発生した瞬間のデータキャッシュの状態により、アプリケーションの復旧には異なる手順が必要となります:
  - キャッシュが空の場合、アプリケーションを問題なく開くことができます。 アプリケーションに対しておこなわれた変更はデータファイルに記録されています。 この場合には、特別な手順は必要ありません。
  - キャッシュに未保存の処理が含まれている場合、データファイルは損傷していませんが、カレントのログファイルを統合する必要があります。
  - キャッシュの内容をデータファイルに書き込み中だった場合、データファイルはおそらく損傷しています。 最新のバックアップから復元をおこない、カレントのログファイルを統合する必要があります。

- アプリケーションファイルを失った。 この問題はアプリケーションが配置されたディスク上のセクターが読み書き不能になった、あるいはウィルス、操作ミス等により発生します。 最新のバックアップから復元をおこない、カレントのログファイルを統合する必要があります。 問題発生後にアプリケーションが損傷しているかどうかを見分けるには、4D でアプリケーションを起動します。 4Dは自己検証をおこない、必要な復元処理手順を示します。 自動モードの場合、この処理はユーザーのアクションなしで直接実行されます。 定期的なバックアップがおこなわれていれば、4D の復元ツールを使用して (ほとんどの場合) 問題が発生する直前の状態までアプリケーションを復旧することができます。

> 問題発生後に、自動で 4Dのアプリケーション復旧処理を起動することができます。 These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.\
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. This function is available on the [Rollback](MSC/rollback.md) page of the MSC.

## 手動でバックアップから復元する (標準ダイアログ)

バックアップモジュールを使用して生成されたアーカイブの内容を、手動で復元することができます。 手動による復元は、たとえばアーカイブ全体 (ストラクチャーファイルや添付されたファイル) を再生成したい場合や、アーカイブの内容を見たい場合などに必要となります。 手動復元の際に、カレントログファイルを統合することもできます。

The manual restore of backups can be carried out either via the standard Open document dialog box, or via the [Restore](../MSC/restore.md) page of the MSC. MSC を使用した復元では詳細なオプション設定をおこなったり、アーカイブの内容をプレビューしたりすることができます。 他方、開かれているアプリケーションに関連したアーカイブのみを復元できます。

標準ダイアログボックスを使用してアプリケーションを手動復元するには:

1. Choose **Restore...** in the 4D application **File** menu.
   アプリケーションプロジェクトが開かれている必要はありません。
   OR
   Execute the `RESTORE` command from a 4D method.
   標準のファイルを開くダイアログボックスが表示されます。
2. Select a backup file (.4bk) or a log backup file (.4bl) to be restored and click **Open**.
   復元したファイルを配置する場所を指定するために、以下のダイアログボックスが表示されます: By default, 4D restores the files in a folder named _Archivename_ (no extension) located next to the archive. 場所が表示されているエリアをクリックして、パスを確認することができます:

![](../assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button.
4D は指定されたすべてのバックアップファイルを展開します。
カレントログファイル、または、バックアップファイルと同じ番号を持つログバックアップファイルが同じフォルダーに存在する場合、4D はその内容を検証します。 データファイル中に無い処理がログファイルに含まれていれば、その処理を統合するかどうか 4D が尋ねてきます。 Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application.
復元と統合が正しく実行されると、4D は処理が成功したことを通知するダイアログを表示します。
5. Click **OK**.

保存先フォルダーが表示されます。 バックアップ時のファイルの位置にかかわらず、4D はすべてのバックアップファイルをこのフォルダーに配置します。 これにより、ファイルを探す手間が省けます。

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.

## 手動でバックアップから復元する (MSC)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).

## 手動でログを統合する

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](../assets/en/Backup/backup08.png)

> このメカニズムを機能させるために、4D はカレントの場所にあるログファイルにアクセスできなければなりません。

カレントログファイルを統合するかしないかを選択することができます。 カレントログファイルを統合しないことにより、データ中に作成されたエラーを再生成しないようにすることもできます。
