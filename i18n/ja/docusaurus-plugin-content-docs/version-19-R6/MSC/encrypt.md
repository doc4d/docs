---
id: encrypt
title: 暗号化ページ
sidebar_label: 暗号化ページ
---

このページを使用して、データベースの各テーブルに対して定義された **暗号化可能** 属性に基づいて、データファイルを暗号化または *復号化* (つまりデータから暗号化を解除) することができます。

> 4D のデータ暗号化についての詳細な情報に関しては、*デザインリファレンス* マニュアルの [データの暗号化](https://doc.4d.com/4Dv18/4D/18/Encrypting-data.300-4575694.ja.html) の章を参照してください。 また、[A deeper look into 4D data encryption](https://blog.4d.com/a-deeper-look-into-4d-data-encryption/) のブログ記事 (英文) も参照ください。

暗号化/復号化操作をおこなうたびに、新しいフォルダーが作成されます。 そのフォルダーは "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*" あるいは "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*" と名前が付けられます。
> 暗号化は [メンテナンスモード](overview.md#メンテナンスモードでの表示) でのみ利用可能です。 標準モードでこの操作を実行しようとすると、警告ダイアログが表示され、アプリケーションを終了してメンテナンスモードで再起動することを知らせます。

**警告:**

- データファイルの暗号化は時間がかかる操作です。 実行中は (ユーザーによって割り込み可能な) 進捗インジケーターが表示されます。 また、アプリケーションの暗号化操作には必ず圧縮のステップが含まれるという点に注意してください。
- 暗号化操作をおこなうたびに、その操作はデータファイルのコピーを作成し、その結果アプリケーションファイルのサイズは増大します。 アプリケーションのサイズが過剰に増加しな いよう、これを考慮することが大切です (とくに、4Dアプリケーションがパッケージとして表示される macOS の場合)。 パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除/移動することも役立ちます。

## データを初めて暗号化する場合

MSC でデータファイルを初めて暗号化する場合、以下のような手順を踏む必要があります:

1. ストラクチャーエディターにおいて、データを暗号化したいテーブルに対して **暗号化可能** 属性にチェックを入れます。 詳細は "テーブルプロパティ" の章を参照してください。
2. MSC の暗号化ページを開きます。 If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page: ![](../assets/en/MSC/MSC_encrypt1.png) Otherwise, the following message is displayed: ![](../assets/en/MSC/MSC_encrypt2.png) This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted. **Note:**The same message is displayed when the **Encryptable** status has been modified in an already encrypted data file or after the data file has been decrypted (see below).
3. Click on the Encrypt picture button.  
   ![](../assets/en/MSC/MSC_encrypt3.png)  
   You will be prompted to enter a passphrase for your data file: ![](../assets/en/MSC/MSC_encrypt4.png) The passphrase is used to generate the data encryption key. パスフレーズはパスワードの強化版のようなもので、大量の文字を含めることができます。 たとえば、"We all came out to Montreux" あるいは "My 1st Great Passphrase!!" のようなパスフレーズを入力することが可能です。 The security level indicator can help you evaluate the strength of your passphrase: ![](../assets/en/MSC/MSC_encrypt5.png) (deep green is the highest level)
4. Enter を押して安全なパスフレーズの入力を確定します。

暗号化プロセスがスタートします。 MSC が標準モードで開かれていた場合、アプリケーションはメンテナンスモードで再起動されます。

4D では暗号化キーを保存することができます (以下の [暗号化キーを保存する](#暗号化キーを保存する) の段落を参照してください)。 暗号化キーの保存は、このタイミングか、あるいは後でおこなうこともできます。 また暗号化ログファイルを開くこともできます。

暗号化プロセスが正常に完了した場合、暗号化ページは [暗号化メンテナンスオペレーション](#暗号化メンテナンスオペレーション) ボタンを表示します。

**警告**: 暗号化操作の最中、4D は新しい、空のデータファイルを作成したうえで、元のデータファイルからデータを注入します。 "暗号化可能" テーブルに属しているレコードは暗号化後にコピーされ、他のレコードは単にコピーされるだけです (圧縮オペレーションも実行されます)。 操作が正常に完了した場合、もとのデータファイルは "Replaced Files (Encrypting)" フォルダーへ移動されます。 暗号化されたデータファイルを配布する場合、暗号化されていないデーファイルをアプリケーションフォルダーからすべて移動/削除しておくようにしてください。

## 暗号化メンテナンスオペレーション

When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](../assets/en/MSC/MSC_encrypt6.png)

### カレントの暗号化キーを入力する

セキュリティ上の理由から、すべての暗号化メンテナンスオペレーションはカレントのデータ暗号化キーの入力を要求します。

- データ暗号化キーが既に 4Dキーチェーン (1) に読み込まれている場合、そのキーは 4D によって自動的に再利用されます。
- データ暗号化キーが見つからない場合、それを入力する必要があります。 以下のようなダイアログが表示されます: ![](../assets/en/MSC/MSC_encrypt7.png)

この段階では 2つの選択肢があります:

- カレントのパスフレーズ (2) を入力し、**OK** をクリックする。 または
- USBキーなどのデバイスを接続して、**デバイスをスキャン** ボタンをクリックする。

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session. (2) The current passphrase is the passphrase used to generate the current encryption key.

いずれの場合においても、有効なパスフレーズ/暗号化キーが提供されると、4D は (まだメンテナンスモードではなかった場合は) メンテナンスモードで再起動し、選択されたオペレーションを実行します。

### カレントの暗号化キーでデータを再暗号化する

この操作は、データを格納している 1つ以上のテーブルにおいて **暗号化可能** 属性が変更された場合に有用です。 この場合、データの整合性を保つために、4D はアプリケーション内のそのテーブルのレコードへの書き込みアクセスを禁止します。 有効な暗号化ステータスを得るために、データの再暗号化が必要になります。

1. **カレントの暗号化キーでデータを再暗号化** をクリックします。
2. カレントのデータ暗号化キーを入力します。

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](../assets/en/MSC/MSC_encrypt8.png)

### パスフレーズを変更してデータを再暗号化する

この操作は、カレントの暗号化データキーを変更したい場合に有用です。 たとえば、セキュリティ上のルール (3ヶ月ごとにパスプレーズを変更する必要があるなど) を遵守するために変更をおこないたいケースが考えられます。

1. **パスフレーズを変更してデータを再暗号化する** をクリックします。
2. カレントのデータ暗号化キーを入力します。
3. Enter the new passphrase (for added security, you are prompted to enter it twice): ![](../assets/en/MSC/MSC_encrypt9.png) The data file is encrypted with the new key and the confirmation message is displayed. ![](../assets/en/MSC/MSC_encrypt8.png)

### 全データを復号化

この操作は、データファイルからすべての暗号化を取り除きます。 データを暗号化しておきたくない場合、以下の手順に従ってください:

1. **全データを復号化** をクリックします。
2. カレントのデータ暗号化キーを入力します ([カレントの暗号化キーを入力する](#カレントの暗号化キーを入力する) 参照)。

The data file is fully decrypted and a confirmation message is displayed: ![](../assets/en/MSC/MSC_encrypt10.png)
> データファイルが復号化されると、テーブルの暗号化ステータスは暗号化可能属性と合致しなくなります。 ステータスを合致させるためには、データベースのストラクチャーレベルにおいてすべての **暗号化可能** 属性を選択解除しなければなりません。

## 暗号化キーを保存する

4D ではデータ暗号化キーを専用ファイルに保存しておくことができます。 このファイルを USBキーなどの外部デバイスに保存しておくと、暗号化されたアプリケーションを使うのが簡単になります。なぜならユーザーは暗号化されたデータにアクセスするには、アプリケーションを開く前にデバイスを接続してキーを提供すればよいからです。

新しいパスフレーズが提供されるたびに暗号化キーを保存することができます:

- アプリケーションが最初に暗号化されたとき
- アプリケーションが新しいパスフレーズで再暗号化されたとき

連続した暗号化キーを同じデバイスに保存することが可能です。

## ログファイル

暗号化オペレーションが完了すると、4D はアプリケーションの Logsフォルダー内にファイルを生成します。 このファイルは XML形式で作成され、"*ApplicationName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" または "*ApplicationName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" という名前がつけられます。

新しくログファイルが生成されるたび、MSCページに **ログファイルを開く** ボタンが表示されます。

このログファイルには、暗号化/復号化プロセスの間に実行された内部オペレーションがすべて記録されているほか、エラー (あれば) が記録されています。
