---
id: overview
title: 概要
---

環境設定は、作業環境に影響する様々なオプションを指定します (例: デフォルトオプション、表示テーマ、メソッドエディター機能、ショートカット)。 これらの設定は、4D や 4D Server アプリケーションで開くすべてのプロジェクトに適用されます。

**4D Server**: 複数のユーザーが同時に環境設定を更新しようとすると、オブジェクトのロックが発生します。 一度に一人のユーザーのみが環境設定ダイアログボックスを使用できます。
> 4D は開かれているプロジェクト固有の設定をおこなうための **ストラクチャー設定** ダイアログも提供しています (**デザイン** メニューから利用可能です)。 詳細はデータベース設定の章を参照ください。

## アクセス

環境設定ダイアログボックスにアクセスするには **編集** (Windows) または **4D** アプリケーションメニュー (macOS) から **環境設定...** を選択します:

![](assets/en/Preferences/overviewAccess.png)

このメニューコマンドは、プロジェクトが開かれていない場合でも利用できます。

`OPEN SETTINGS WINDOW` コマンドや、"環境設定" 標準アクションを (ボタンやメニューに割り当てて) 使用することで、アプリケーションモードでも環境設定ダイアログボックスを表示できます。

## ストレージ

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

*   Windows: `{disk}\Users\{UserName}\AppData\Roaming\4D`
*   macOS: `{disk}:Users:{UserName}:Library:Application Support:4D`

## Customizing parameters and reset settings

In settings dialog boxes, parameters whose values have been modified appear in bold:

![](assets/en/Preferences/overviewUser.png)

Preferences indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted database.

A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized.

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Reset to factory settings** button:

![](assets/en/Preferences/overviewSettings.png)

This button resets all the parameters of the current page. It becomes active when at least one parameter has been modified on the current page.

