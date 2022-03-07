---
id: database
title: データベースページ
---

## データストレージページ

このページでは、4Dデータベースが使用するデータストレージに関する設定をおこないます。

### 一般設定


#### 読み込みのみのデータファイルの使用を許可する

このオプションを使用すると、OSレベルでロックされているデータファイルをアプリケーションから開けるようになります。 4Dは、ロックされたデータファイルを開かないようにする自動的なメカニズムを実装しています。 データファイルがロックされていると、4D はデータベースを開かず、以下のような警告メッセージを表示します:

![](assets/en/settings/data-locked.png)

このオプションを選択しないかぎり、ロックされたデータファイルを開くことはできません (4Dデータベースのデフォルト動作)。

#### ロックされたファイルについて

ロックされたファイルは読むことはできても内容を変更することはできません。 たとえば (DVDのような) 編集不可のメディアに格納されたファイルや、このようなメディアからコピーされたファイルは、ロックされていることがあります。 DVDに格納されたプロジェクトを使用するような場合、ロックされたデータファイルを使用できるようアプリケーションを設定することができます。 しかしこの場合、データの追加・編集が保存されないロックされているデータファイルを不注意に使用してしまうリスクがあります。 このような状況にならないよう、4D ではデフォルトでロックされたデータファイルを開くことを禁止しています。

### テンポラリフォルダーの場所

このエリアでは、4D 実行中に作成されるテンポラリーファイルの場所を設定できます。 テンポラリファイルのフォルダーは、一時的にメモリ中のデータをディスクに保存するために必要に応じてアプリケーションが使用します。

現在のフォルダーの場所は "現在:" エリアに表示されます。 このエリアをクリックするとパス名がスクロールダウンリスト形式で表示されます:

![](assets/en/settings/temporary-file-location.png)

3つのオプションから選択できます:

-   **システム**: このオプションが選択されると、4D のテンポラリファイルは Windows または macOS が指定する場所に配置されたフォルダーに作成されます。 システムが指定する場所は [`Temporary folder`](https://doc.4d.com/4dv19R/help/command/ja/page486.html) コマンドで知ることができます。 ファイルは、データベース名とユニークな識別子からなるサブフォルダーに置かれます。
-   **データファイルフォルダー** (デフォルト): このオプションが選択されると、4D のテンポラリファイルはデータベースのデータファイルと同階層に配置される "temporary files" フォルダーに作成されます。
-   **ユーザー指定**: このオプションは、場所をカスタマイズするのに使用します。 場所のオプションを変更した場合、新しい設定を反映するにはデータベースを再起動する必要があります。 4D は選択されたフォルダーに書き込みアクセス権があるかを確認します。 アクセス権がなければ、使用できるフォルダーが見つかるまで 4D は他のオプションを試します。

> このオプションは、ストラクチャー定義がXML形式で書き出されたとき、ストラクチャーの "extra properties" に格納されます ([ストラクチャー定義の書き出しと読み込み](https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.ja.html) 参照)。

### テキスト比較

> これらのオプションのいずれかを変更した場合、新しい設定を反映するにはアプリケーションを終了し、再起動しなければなりません。 データベースが再び開かれると、すべてのインデックスが自動で再作成されます。

-   **文字列の途中に含まれる＠はワイルドカードとして扱わない**: クエリ条件や文字列比較の際に "@" をどのように解釈するかを設定します。 このオプションが選択されていない場合 (デフォルト設定)、"@" はワイルドカードとして扱われ、あらゆる文字の代わりとみなされます ([ワイルドカード記号 (@)](https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.ja.html#463876) 参照)。

    このオプションが選択されている場合、単語内にある "@" は普通の文字として扱われます。 この設定は、"@" が文字列内で使用される電子メールアドレスの検索などに有効です。 このオプションは検索、並び替え、文字列比較、およびテーブルに格納されるデータや配列などメモリ中のデータに影響を与えます。 (インデックス付きか否かにかかわらず) 文字型やテキスト型のフィールドおよび変数が、検索や並び替え時に "@" 文字がどのように解釈されるかの影響を受けます。

     **注:**
    -   検索において、"@" が検索条件の先頭か最後にある場合、"@" はワイルドカードとして扱われます。 単語の中に "@" 文字がある場合のみ (例: bill@cgi.com)、4D は異なった扱いをします。
    -   このオプションは object引数に "@" ワイルドキャラクターを受け入れる [オブジェクト(フォーム)](https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.ja.html) テーマのコマンドの動作にも影響を与えます。
    -   セキュリティの理由で、データベースの Administrator または Designer のみがこのパラメーターを変更できます。

-   **現在のデータ言語**: 文字列の処理と比較に使用する言語を設定します。 言語の選択は、テキストの並べ替えや検索、文字の大小などの比較ルール等に直接影響を与えます。ただし、テキストの翻訳や日付・時刻・通貨のフォーマットはシステムの言語設定が使用され、この設定には影響されません。 デフォルトで 4D はシステム言語を使用します。

    つまり、4Dプロジェクトはシステム言語とは異なる言語で動作することができます。 プロジェクトが開かれるとき、4Dエンジンはデータファイルに使用されている言語を検知し、(インタープリターやコンパイルモードの) ランゲージに提供します。 データベースエンジン、あるいはランゲージのいずれがテキスト比較をおこなうかに関わらず、同じ言語が使用されます。

    > 4D環境設定でも言語を設定できます ([一般ページ](../Preferences/general.md) 参照)。 この場合、その設定は新規に作成されるデータベースに適用されます。

-   **非文字・非数字のみをキーワード区切り文字とする**: 4D が使用するキーワード区切り文字の設定を変更し、その結果、作成されるキーワードインデックスに影響を与えます。 このオプションが選択されていない場合、4D は言語上の特質を考慮する洗練されたアルゴリズムを使用します。

    このアルゴリズムは、文字列中をダブルクリックしたときに選択範囲を決定するためワープロソフトが使用するものと同じです。 このアルゴリズムに関する詳細は以下の Webページを参照ください: `http://userguide.icu-project.org/boundaryanalysis`。

    このオプションが選択されている場合、4D は簡易的なアルゴリズムを使用します。 この設定では、文字でも数字でもない文字がキーワード区切り文字として扱われます。 この設定は日本語など特定の言語の要求に沿うものです。

-   **テキスト検索用の文字列比較を使用する**: このオプションは日本語が選択されている場合にのみ表示されます。 このオプションは "カタカナ-ひらがなでの長音記号" および、"ゝ" または "ゞ" などの繰り返し記号 (踊り字) などの文字の解釈を変更します。 一般的には、この設定が有効化されている方が日本語話者にとって望ましい結果が得られます。

#### Mecab のサポート (日本語版)

日本語版の 4D では、 *Mecab* ライブラリーがサポートされており、日本語用に調整されたキーワードのインデックスアルゴリズムを兼ね備えています。

日本語版の 4D ではこのアルゴリズムがデフォルトで使用されています。 *Mecab* ライブラリーを使用するために必要なファイルはすべて 4Dアプリケーションの **Resources** フォルダー内の **mecab** フォルダー内にインストールされています (日本語版のみ)。

必要であれば *Mecab* アルゴリズムを無効にして、以前と同じ *ICU* ライブラリーを使用することもできます。

*Mecab* を無効化するには、**非文字・非数字のみをキーワード区切り文字とする** のオプションにチェックを入れます:


![](assets/en/settings/non-alphanumeric-chars.png)

> **注:** 日本語版 4D の、 Resources/mecab フォルダーを削除または改名することによっても Mecab を無効化することができます。

## メモリページ

このページでは、データベースのキャッシュメモリに関する設定をおこないます。

### データベースキャッシュ設定

-   **起動時にキャッシュサイズを計算**: このオプションが選択されている場合、キャッシュメモリの管理は、設定された制限に基づき、4D起動時にキャッシュサイズが計算されます。 これにより、ほとんどのケースで高パフォーマンスのメモリ設定がおこなわれます。 キャッシュメモリのサイズは設定されたパラメーターに基づき動的に計算されます。 デフォルトで提案される値は標準の 4D の使用状況に対応します。

    -   **他のアプリケーションとシステムのために予約するメモリ**: システムや他のアプリケーションが使用するために取り置く RAMメモリ量。 4D が実行されるマシン上で他のアプリケーションも実行する場合、必要に応じてこの値を増やします。
    -   **利用可能なメモリからキャッシュに使用する率**: 残りのメモリからキャッシュに割り当てる量の率。<br/> デフォルトでキャッシュに割り当てるサイズを取得するためには、以下の計算式を適用します: (物理メモリ – 予約したメモリ) X キャッシュに使用するメモリのパーセンテージ。 In the adaptive mode, the size of the memory cache varies dynamically depending on the needs of the application and the system. You can set limits using the following two options:
    -   **Minimum Size**: Minimum amount of memory that must be reserved for the cache. This value cannot be less than 100 MB.
    -   **Maximum Size**: Maximum amount of memory that can be used by the cache. This value is virtually unlimited. Setting limits is particularly useful for databases that are distributed on machines for which you do not know the memory configuration a priori. In this case, the limits set let you guarantee a minimum performance in all cases. The following diagram illustrates this behavior:

    Example for calculating cache memory: *Physical memory to reserve = 256 MB Percentage of the available memory used for the cache = 50% Maximum size = 1 GB Minimum size = 128 MB*

    ![](assets/en/settings/memory-maximum-size.png)

-   **Calculation of adaptive cache not checked**:  this mode, you set the size of the memory cache for the database yourself. 4D then displays an entry area that allows setting the memory cache to use as well as information related to the physical memory (RAM available on the machine), the current cache and cache after restart (taking your changes into account).

    The size of the memory cache that you enter will be reserved for the 4D database, regardless of the state of machine resources. This setting can be used in certain specific configurations, or when the database is designed to be used on dissimilar systems in terms of memory. In most cases, the adaptive cache offers better performance.

-   **Flush Cache every ... Seconds/Minutes**: Specifies the time period between each automatic saving of the data cache, i.e., its writing to disk. 4D saves the data placed in the cache at regular intervals. You can specify any time interval between 1 second and 500 minutes. By default, 4D saves your data every 20 seconds. The application also saves your data to disk each time you change to another environment or exit the application. You can also call the [FLUSH CACHE](https://doc.4d.com/4dv19R/help/command/en/page297.html) command to trigger the flush at any moment.

    When you anticipate heavy data entry, consider setting a short time interval between saves. In case of a power failure, you will only lose the data entered since the previous save (if the database is running without a log file).

    If there is a noticeable slowing down of the database each time the cache is flushed, you need to adjust the frequency. This slowness means that a huge amount of records is being saved. A shorter period between saves would therefore be more efficient since each save would involve fewer records and hence be faster.

    By default, 4D displays a small window when the cache is flushed. If you do not want this visual reminder, you can uncheck the **Flushing progress** option on the [Interface page](./interface.md).