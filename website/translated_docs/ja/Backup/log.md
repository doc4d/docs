---
id: log
title: ログファイル (.journal)
---

継続的に使用されるアプリケーションでは、変更・追加・削除の操作は常に記録されます。 定期的にデータをバックアップすることは重要ですが、バックアップだけでは (予期しない障害の場合に)、前回のバックアップ以降に入力されたデータを回復することができません。 この必要性に対応するため、4D は専用ツールであるログファイルを提供しています。 このファイルを使用すると、データのセキュリティが常に保証されます。

また、4D は常にメモリー上のデータキャッシュを使用して作業をおこなっています。 アプリケーションのデータへの変更はすべて、ハードディスクへ書き込む前に、キャッシュへ一時的に保存されます。 これにより、アプリケーションの処理速度が向上します。実際、メモリーへのアクセスは、ハードディスクへのアクセスよりも高速です。 キャッシュに保存したデータをディスクへ書き込む前に障害が発生した場合は、カレントログファイルを組み込んでアプリケーションを完全に復旧しなくてはなりません。

さらに 4D には、カレントログファイルの内容を解析する機能が組み込まれており、これによってアプリケーションのデータ上で実行されたすべての処理をさかのぼることができます。 これらの機能は MSC にて提供されています ([ログ解析](MSC/analysis.md) ページおよび [ロールバック](MSC/rollback.md) ページ参照)。

## ログファイルについて

4D が生成するログファイルには、アプリケーション上でおこなわれた操作がすべて順次記録されています。 デフォルトでは、すべてのテーブルのデータログが取られています (つまりログファイルに含まれています)。しかし、**ログファイルに含める** のプロパティを選択解除することによって特定のテーブルをログに含めないようにすることもできます。

したがって、ユーザーが実行した各操作により、2つのアクションが同時におこなわれます。1つは、データファイルに対するアクション (命令を通常どおりに実行)、もう1つはログファイルに対するアクション (処理の説明を記録) です。 ログファイルは個別に作成され、ユーザーの作業を妨げたり作業速度を低下させることはありません。 1つのアプリケーションでは、一度に 1つのログファイルだけを扱うことができます。 ログファイルには、次の操作が記録されます:

- データファイルの開閉
- プロセス (コンテキスト) の開閉
- レコードまたは BLOB の追加
- レコードの変更
- レコードの削除
- トランザクションの作成や終了

これらのアクションについての詳細は、MSC の [ログ解析](MSC/analysis.md) ページを参照ください。

ログファイルは 4D により管理されます。 ログファイルは、データファイルに影響を与えるすべての操作を区別なく盛り込み、ユーザーがおこなった操作や 4Dメソッド、SQLエンジン、プラグイン、Webブラウザーやモバイルアプリなどによる処理など、あらゆる操作を記録します。

ログファイルの機能をまとめた図を次に示します:

![](assets/en/Backup/backup05.png)


カレントログファイルはカレントデータファイルと一緒に自動保存されます。 このメカニズムには、2つの際立った利点があります:

- ログファイルが保存されるディスクの容量が一杯にならないようにします。 バックアップを実行しない場合、ログファイルは使用するにつれて徐々に大きくなり、 いずれはディスクの空き容量をすべて使い果たしてしまいます。 データファイルをバックアップするたびに、4D や 4D Server はカレントログファイルをクローズし、その直後に空ファイルを新たに開くため、ディスクフルになる危険を避けることができます。 この後、古いログファイルはアーカイブに保存され、バックアップのセット (世代) を管理するメカニズムに従って最終的には破棄されます。
- 後からアプリケーションの解析や修復をおこなえるように、各バックアップに対応するログファイルを保管します。 ログファイルの統合は、それが対応するアプリケーションからのみ実行できます。 バックアップに正しくログファイルを統合するため、バックアップとアーカイブ化されたログファイルは一緒に保管することが重要です。


## ログファイルの作成

By default, any application project created with 4D uses a log file (option set in the **General** page of the Preferences). ログファイルには *data.journal* のように名前が付けられ、Data フォルダー内に置かれます。

You can find out if your application uses a log file at any time: just check whether the **Use Log** option is selected on the **Backup/Configuration** page of the Settings. If you deselected this option, or if you use an application without a log file and wish to set up a backup strategy with a log file, you will have to create one.

ログファイルを作成するには、次の手順に従ってください:

1. On the **Backup/Configuration** page of the Structure Settings, check the **Use Log** option. 標準の "ファイルを開く/新規作成" ダイアログボックスが表示されます。 ログファイルにはデフォルトで *data.journal* という名前が付けられます。

2. デフォルトの名前を使用するか、またはその名前を変更し、次にファイルの保管場所を選択します。 If you have at least two hard drives, it is recommended that you place the log file on a disk other than the one containing the application project. If the application hard drive is lost, you can still recall your log file.

3. **保存** をクリックします。 開いたログファイルのアクセスパスと名前がダイアログボックスの **ログを使用** エリアに表示されます。 このエリアをクリックすると、ポップアップメニューが表示され、ディスク上のフォルダーを確認できます。

4. Validate the Settings dialog box.

In order for you to be able to create a log file directly, the data must be in one of the following situations:

- データファイルが空である。
- You just performed a backup and no changes have yet been made to the data.

In all other cases, when you validate the Settings dialog box, an alert dialog box will appear to inform you that it is necessary to perform a backup. **OK** をクリックするとバックアップが開始され、その後にログファイルが作成されます。 If you click **Cancel**, the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the application. This precaution is indispensable because, in order to restore an application after any incidents, you will need a copy of the application into which the operations recorded in the log file will be integrated.

Without having to do anything else, all operations performed on the data are logged in this file and it will be used in the future when the application is opened.

新規データファイルを作成したら、別のログファイルを作成しなくてはなりません。 また、ログファイルに関連付けられていない (あるいはログファイルが見つからない) 別のデータファイルを開いた場合、他のログファイルを設定するか、作成しなくてはなりません。



## ログファイルを中止する

If you would like to stop logging operations to the current log file, simply deselect the **Use Log** option on the **Backup/Configuration** page of the Settings.

すると、4D は警告メッセージを表示して、この動作によりログファイルによるセキュリティが利用できなくなることを知らせます:

![](assets/en/Backup/backup06.png)

If you click **Stop**, the current log file is immediately closed (the Settings dialog box does not need to be validated afterwards).

カレントログファイルが大きすぎるため、それをクローズしたい場合は、データファイルのバックアップを実行してください。これにより、ログファイルのバックアップが作成されます。

> **4D Server:** `New log file` コマンドはカレントログファイルを自動的に閉じて、新しいログファイルを開始します。 実行中に何らかの理由でログファイルが利用不能になった場合、エラー 1274 が生成され、4D Server は一切のデータ書き込みを許可しなくなります。 再びログファイルが利用可能になったらフルバックアップを実行しなければなりません。