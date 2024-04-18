---
id: licenses
title: 4D ライセンスの管理
---

ディスクへのインストール終了後、4D 製品を利用するためにはアクティベーションをおこないます。 Usually, the activation is automatic if you [sign in using your 4D account](GettingStarted/Installation.md) in the Welcome Wizard.

しかし、場合によってはライセンスを手動でアクティベーションする必要があります。たとえば:

- 自動アクティベーションが可能でない場合
- 追加のライセンスを購入した場合

以下の利用モードの場合には、アクティベーションは必要はありません:

- リモートモードで利用される 4D (4D Serverへの接続)
- インタープリターモードのアプリケーションプロジェクトを開く場合で、デザインモードへはアクセスしないローカルモードの4D

## 初回のアクティベーション

With 4D, select the **License Manager...** command from the **Help** menu of the application. 4D Server でおこなう場合は、4D Server アプリケーションを起動します。 The dialog box for choosing the [activation mode](#activation-mode) appears.

![](../assets/en/getStart/server1.png)

4D は 3つのアクティベーションモードを用意しています。 We recommend **Instant Activation**.

### オンラインアクティベーション

ユーザーID (メールアドレスまたは 4Dアカウント) とパスワードを入力します。 既存のユーザーアカウントが無い場合、まず以下のアドレスから作成する必要があります:

[https://account.4d.com/us/login.shtml](https://account.4d.com/us/login.shtml/ja)

![](../assets/en/getStart/activ1.png)

その後、アクティベーションする製品のプロダクト番号を入力します。 このプロダクト番号は製品購入後にメールまたは郵送で提供されています。

![](../assets/en/getStart/activ2.png)

### オフラインアクティベーション

If you are unable to use [instant activation](#instant-activation) because your computer does not have internet access, please proceed to deferred activation using the following steps.

1. In the License Manager window, select the **Deferred Activation** tab.
2. Enter the License Number and your e-mail address, then click **Generate file** to create the ID file (_reg.txt_).

![](../assets/en/getStart/activ3.png)

3. Save the _reg.txt_ file to a USB drive and take it to a computer that has internet access.
4. On the machine with internet access, login to [https://activation.4d.com](https://activation.4d.com).
5. On the Web page, click on the **Choose File...** button and select the _reg.txt_ file from steps 3 and 4; then click on the **Activate** button.
6. シリアルファイルをダウンロードします。

![](../assets/en/getStart/activ4.png)

7. Save the _license4d_ file(s) on a shared media and transfer them back to the 4D machine from step 1.
8. Now back on the machine with 4D, still on the **Deferred Activation** page, click **Next**; then click the **Load...** button and select a _license4d_ file from the shared media from step 7.

![](../assets/en/getStart/activ5.png)

With the license file loaded, click on **Next**.

![](../assets/en/getStart/activ6.png)

9. Click on the **Add N°** button to add another license. これらの手順を、手順6のライセンスがすべて追加されるまで繰り返します。

これで、お使いの4Dアプリケーションのアクティベーションが完了しました。

### 緊急アクティベーション

このモードは、特別に一時的な4Dのアクティベーションをおこなうために使用します。このアクティベーションを行うと、4Dインターネットサイトに接続せずに、最大5日間4Dを利用できます。 このアクティベーションは一回のみ使用することができます。

## ライセンスの追加

アプリケーションの拡張ライセンスは、いつでも追加することができます。

Choose the **License Manager...** command from the **Help** menu of the 4D or 4D Server application, then click on the **Refresh** button:

![](../assets/en/getStart/licens1.png)

This button connects you to our customer database and automatically activates any new or updated licenses related to the current license (the current license is displayed in **bold** in the "Active Licenses" list). その際、4D アカウントとパスワードの入力が必要です。

- If you purchased additional expansions for a 4D Server, you do not need to enter any license number -- just click **Refresh**.
- 4D Server の初回アクティベーション時のみ、サーバーのライセンス番号を入力すれば、購入した他のエクスパンションもすべて自動的に有効化されます。

You can use the **Refresh** button in the following contexts:

- 追加のエクスパンションを購入したとき、またはそれをアクティベートしたいとき。
- パートナーなどの失効した有限ライセンスを更新するとき。

## 4D オンラインストア

4D ストアでは、4D製品の注文、アップグレード、延長、管理等をおこなうことができます。 You can reach the store at the following address: [https://store.4d.com/us/](https://store.4d.com/us/) (you will need to select your country).

Click **Login** to sign in using your existing account or **New Account** to create a new one, then follow the on-screen instructions.

### ライセンス管理

After you log in, you can click on **License list** at the top right of the page:

![](../assets/en/getStart/licens2.png)

ここでは、ライセンスをプロジェクト単位でグループ化して管理することができます。

Select the appropriate license from the list then click **Link to a project... >**:

![](../assets/en/getStart/licens3.png)

既存プロジェクトを選択、または新規プロジェクトを作成します:

![](../assets/en/getStart/licens4.png)

![](../assets/en/getStart/licens5.png)

プロジェクトを利用することで、必要に応じてライセンスを整理することができます:

![](../assets/en/getStart/licens6.png)

## トラブルシューティング

インストールやアクティベーションに失敗する場合は以下の表を参照してください。ほとんどの問題はこれらのケースに当てはまります:

| 症状                                                     | 考えられる原因                              | 解決法                                                                                                                           |
| ------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 4D社のサイトからインストーラーをダウンロードできません。                          | サイトがダウンしている、またはアンチウィルスやファイアウォールなどの影響 | 1- 時間を空けて再度試してください<br />または <br />2- 一時的にアンチウィルスソフトやファイアウォールを無効にしてください。                                                       |
| ディスクに製品をインストールできません (インストールが拒否される)。 | アプリケーションのインストール権限がない                 | アプリケーションをインストールする権限を持ったセッションを開いてください (管理者アクセス)。                                                            |
| オンラインアクティベーションに失敗します。                                  | アンチウィルス、ファイアーウォール、プロキシ               | 1- 一時的にアンチウィルスソフトやファイアウォールを無効にしてください<br />または <br />2- オフラインアクティベーションを試してください。(ただし "R" バージョン用のライセンスでは利用不可) |

この情報で問題が解決しない場合は、お問い合わせください。

## 連絡先

お買い求めいただきました製品のインストールやアクティベーションに関するご質問はフォーディー・ジャパン社、またはお住まいの地域の代理店までお寄せください。

日本にお住まいの方:

- Web: [https://us.4d.com/4d-technical-support](https://us.4d.com/4d-technical-support)
- Tel: 03-4400-1789



- Web: [https://uk.4d.com/4d-technical-support](https://uk.4d.com/4d-technical-support)
-
