---
id: debugging-remote
title: リモートマシンからのデバッグ
---

## 概要

4Dデータベースが 4D Server 上で動いている場合、プロジェクトにログインしているリモート4Dクライアントからサーバーで実行中の 4Dコードをデバッグすることができます。 特定のリモートマシンでデバッガーを起動すると、そのリモートマシン上で直接、コードの実行をモニターすることができます。

リモートマシン上で起動された [デバッガー](debugger.md) には、サーバーコードのデバッグ中であることを示すサーバーアイコンと青い背景色のデバッグアイコンが表示されます:

![debugger-window-remote](assets/en/Debugging/debuggerWindowRemote.png)

この機能は、4D Server がヘッドレスモード ([コマンドラインインターフェース](../Admin/cli.md) 参照) で実行中、あるいはサーバーマシンへのアクセスが難しい場合などに特に有用です。


## 有効化済デバッガー

4D Serverアプリケーションのデバッグは、一度に一つのデバッガーのみがおこなえます。 これを **有効化済デバッガー** と呼びます。 有効化済デバッガーには、以下の 2種類あります:

* ローカルの 4D Serverデバッガー (デフォルト) - サーバーがヘッドレス実行されていない場合
* リモート4Dクライアントのデバッガー - リモートセッションがデザインモードにアクセス可能な場合

有効化済デバッガーは、4D Server が次のいずれかに遭遇した場合に呼び出されます:
* ブレークポイント
* `TRACE` コマンド
* キャッチコマンド
* エラー

エラーメッセージは、デバッガーが有効化されているマシンに送られるという点に注意してください。 これはつまり、リモートデバッガーの場合には、サーバーのエラーメッセージがリモート4Dクライアント上で表示されるということです。

注:
* `On Server Startup` データベースメソッドで実行されたコードはリモートでデバッグすることができません。 これはサーバー側でしかデバッグすることができません。
* デバッガーが有効化されていない場合、実行中のコードがデバッグコマンドによって中断されることはありません。

## リモート4Dクライアントでのデバッガーの有効化

デフォルトでは、サーバーのデバッガーはリモート4Dクライアント上で有効化されていません:
* 4D Server がヘッドレス実行中でない場合、デバッガーはサーバー側で有効化されています。
* 4D Server がヘッドレス実行中の場合には、サーバーのデバッガーは有効化されていない状態です。

4D Serverアプリケーションに接続できるリモート4Dクライアントであれば、サーバーのデバッガーを有効化することができます。

> リモート4Dクライアントのユーザーセッションは、データベースのデザイン環境へのアクセス権を持っている必要があります。

サーバーのデバッガーをリモート4Dクライアントで有効化するには:

* 4D Server のメニューバーから、**編集** ＞ **デバッガを無効化する** を選択し、リモートマシンからデバッガーを利用できるようにします。
    - This step is useless if the 4D Server is running headless.
    - You can attach the debugger back to the server by selecting **Edit** > **Attach debugger** (if not attached to a remote 4D client, see [Rejected attachment requests](#rejected-attachment-requests)).
* In a remote 4D client connected to the server, select **Run** > **Attach Remote Debugger**

If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the menu command becomes **Detach Remote Debugger**.

The debugger is then attached to the remote 4D client:
* until the end of the user session
* until you select `Detach Remote Debugger`

## Attach Debugger or Remote Debugger at Startup

4D allows you to automatically attach the debugger to a remote 4D client or the server at startup:

* On the server (if not headless), this option is named **Attach Debugger At Startup**. When the server is started, it automatically attaches the debugger (default).

> **Warning**: If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server.

* On a remote 4D client, this option is named **Attach Remote Debugger At Startup**. When selected, the remote 4D client will automatically try to attach the remote debugger at each subsequent connection to the same 4D Server database. If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the remote debugger is automatically attached to the remote 4D client and the **Detach Remote Debugger option is displayed**.

> This setting is applied per project and is stored locally in the [`.4DPreferences`](Project/architecture.md#userpreferencesusername) file.

## Rejected attachment requests

While the debugger is already attached to a remote 4D client, or to 4D Server (default), no other machine can attach the debugger.

If a machine tries to attach the debugger while it is already attached, the attachment is rejected and a dialog box appears:

![attach-debugger-dialog](assets/en/Debugging/attach-debugger-dialog.png)

![attach-debugger-dialog-2](assets/en/Debugging/attach-debugger-dialog-2.png)

Attaching the debugger in this case requires that:

* the attached debugger is detached from the remote 4D client using the **Detach remote debugger** menu command or from the server using the **Detach debugger** command
* the attached remote 4D client session is closed
