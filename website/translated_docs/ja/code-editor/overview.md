---
id: overview
title: About 4D Code
---


The 4D code used across your application is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md).

The 4D IDE provides you with various features to create, edit, export, or delete your code. You will usually use the 4D [code editor](write-class-method.md) to work with your code.


## Creating methods

A method in 4D is stored in a **.4dm** file located in the appropriate folder of the [`/Project/Sources/`](../Project/architecture.md#sources) folder.

You can create [several types of methods](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](write-class-method.md#shortcuts).
- Triggers can also be created or opened from the Structure editor.
- Form methods can also be created or opened from the [Form editor](../FormEditor/formEditor.md).

## クラスの作成

4D においてユーザークラスとは、[`/Project/Sources/Classes/`](../Project/architecture.md#sources) フォルダーに保存された専用のメソッドファイル (**.4dm**) によって定義されます。 ファイル名がクラス名になります。

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

詳細については、[クラス](../Concepts/classes.md) を参照してください。


## メソッドやクラスの削除

既存のメソッドやクラスを削除するには:

- ディスク上で "Sources" フォルダーより* .4dm* ファイルを削除します。
- 4D エクスプローラーでは、メソッドやクラスを選択した状態で ![](assets/en/Users/MinussNew.png) をクリックするか、コンテキストメニューより **移動 ＞ ゴミ箱** を選択します。

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).


## コードのインポートとエクスポート

You can import and export a method or a class code in the form of a file. These commands are found in the **Method** menu of the Code editor.

- When you select the **Export Method...** command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). As with printing, exporting does not take the collapsed state of code structures into account and the entire code is exported.
- When you select the **Import Method...** command, a standard file opening dialog box appears, allowing you to designate the file to be imported. Importing replaces the selected text in the method. To replace an existing method by an imported method, select the entire contents of the method before carrying out the import.

The import/export function is multi-platform: a method exported under Mac OS can be imported under Windows and vice versa; 4D handles the conversion of characters when necessary.

4D can export and import methods in two formats:

- 4D method (extension *.c4d*): In this format, methods are exported in encoded form. The names of objects are tokenized. This format is used in particular for exchanging methods between 4D applications and plug-ins in different languages. Conversely, it is not possible to display them in a text editor.
- Text (extension *.txt*): In this format, methods are exported in text-only form. In this case, the methods are readable using a standard text editor or a source control tool.


## プロジェクトメソッドプロパティ

プロジェクトメソッドを作成した後、その名称やプロパティを変更することができます。 プロジェクトメソッドのプロパティは主に、実行アクセスやセキュリティ条件 (ユーザー、統合されたサーバーやサービスからのアクセスの可否) に加えて、実行モードに関する設定が含まれます。

他のタイプのメソッドには専用のプロパティがありません。 これらのメソッドのプロパティは、それらが関連付けられているオブジェクトに基づいて決定されます。

To display the **Method Properties** dialog box for a project method, you can either:

- [コードエディター](write-class-method.md)において、**メソッド** メニューから **メソッドプロパティ...** を選択します。
- または、エクスプローラーの **メソッド** ページでプロジェクトメソッドを選択し、コンテキストメニューまたはオプションメニューから **メソッドプロパティ...** を選択します。


> 一回の処理で複数のプロジェクトメソッドの属性を設定するために、属性の一括設定を使用できます ([属性の一括設定](#属性の一括設定) 参照)。

#### 名称

**メソッドプロパティ** ウィンドウの **名称** エリア、またはエクスプローラーでプロジェクトメソッド名を変更できます。

新しい名称は 4D の命名規則に沿っていなければなりません ([識別子](../Concepts/identifiers.md) 参照)。 同じ名称のメソッドが既に存在する場合、4D はその旨を知らせるメッセージを表示します。 名称変更後、4D メソッドリストをソートします。

**警告:** プロジェクトメソッドの名前を変更すると、そのメソッドを旧名称で呼び出している他のメソッドやフォーミュラなど、アプリケーションの機能が無効になるリスクがあります。 このため、この変更を手動ではなく、[名称変更](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.ja.html) で説明されているプロジェクトメソッド名の名称変更機能によりおこなうことが強く推奨されます。 この機能を使用すれば、デザイン環境における当該メソッドの呼び出し箇所がすべて自動的に更新されます (ただし EXECUTE METHOD など、文字列としてメソッド名が参照されている個所を除きます)。

4D Server の場合、名称変更は変更終了後にサーバーに反映されます。 複数のユーザーが同時に名称を変更しようとすると、最後におこなわれた名称変更が適用されます。 メソッドのオーナーを指定すれば特定のユーザー以外はメソッド名を変更できないようにできます。

> データベースメソッドの名称を変更することはできません。 オブジェクトに紐付いたトリガー、フォームメソッド、オブジェクトメソッドも同様です。これらは関連先のオブジェクトにより名称を決定されます。

#### 属性

属性を使用して、プロジェクトメソッドがどのコンテキストにおいて利用可能かを指定できます。 エクスプローラーを使用して複数のプロジェクトメソッドに対し、属性を一括して設定することもできます (後述参照)。

##### 非表示

ユーザーに対し、**実行** メニューの **メソッド...** から特定のメソッドを実行させたくない場合、このオプションを選択すればそのメソッドを非表示にできます。 非表示のメソッドはメソッド実行ダイアログボックスに表示されなくなります ([メソッド実行ダイアログボックスから実行](#メソッド実行ダイアログボックスから実行) 参照)。

プロジェクトメソッドを非表示にしても、データベースプログラマーはそれを使用することができます。 メソッドを非表示にしてもエクスプローラーのメソッドページやコードエディターのメソッドリストには表示されます。

##### コンポーネントとホストプロジェクト間で共有

この属性は、コンポーネントのフレームワークで使用されます。 このオプションが選択されていると、アプリケーションがホストデータベースとして実行されている場合、そのメソッドがコンポーネントから実行可能になります。 また、アプリケーションがコンポーネントとして実行されている場合、そのメソッドはホストデータベースから実行可能となります。

コンポーネントについては [4Dコンポーネントの開発とインストール](../Extensions/develop-components.md) を参照ください。

##### サーバー上で実行

この属性は、クライアント/サーバーモードの 4Dアプリケーションでのみ考慮されます。 このオプションが選択されていると、そのプロジェクトメソッドは呼び出し方に関わらず常にサーバー上で実行されます。

このオプションに関する詳細は 4D Serverリファレンスマニュアルの [サーバー上で実行属性](https://doc.4d.com/4Dv19R5/4D/19-R5/Execute-on-Server-attribute.300-5878333.ja.html) を参照ください。

#### 実行モード

このオプションを使用すると、メソッドのプリエンプティブ実行が可能であることを宣言できます。 デフォルトでは、4D はアプリケーション内のプロジェクトメソッドをすべてコオペラティブモードで実行します。

プリエンプティブモード機能を利用したい場合、プリエンプティブモードで実行したいメソッドをすべて明示的に宣言する必要があります。 その後、コンパイラーがこれらのメソッドが実際にスレッドセーフであるかどうかをチェックします。

**注:** プリエンプティブモードでの実行は、コンパイルモードでのみ利用可能です。 詳細については、[プリエンプティブ4Dプロセス](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.ja.html) の章を参照ください。

以下のオプションが提供されています:

-   **プリエンプティブプロセスで実行可能**: このオプションをチェックすると、当該メソッドはプリエンプティブプロセスでの実行が可能であり、可能な場合にはプリエンプティブモードで実行するべきと宣言します。 メソッドの "preemptive" プロパティは "capable" に設定されます。

このオプションがチェックされている場合、4Dコンパイラーはメソッドが実際にプリエンプティブモードで実行可能かどうかを検証し、そうでない場合 (たとえば、プリエンプティブモードで実行不可能なコマンドやメソッドを直接的あるいは間接的に呼び出している場合など) にはエラーを返します。なお、コールチェーンはすべて解析されますが、最初のサブレベルに対してのみエラーが報告されます。 エラーの場合には、メソッドを編集してスレッドセーフにするか、あるいは別のオプションを選択します。

メソッドのプリエンプティブ性が証明されると、内部で "thread safe" というタグ付けがされ、すべての要件が満たされればプリエンプティブモードで実行されます。 このプロパティはプリエンプティブモードの資格を定義しますが、メソッドが実際にプリエンプティブモードで実行されることを保証するものではありません。プリエンプティブ実行モードは特定のコンテキストを必要とするからです ([プロセスがプリエンプティブに実行される条件とは？](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.ja.html#2822148) を参照ください)。

-   **プリエンプティブプロセスでは実行不可**: このオプションをチェックすると、当該メソッドはプリエンプティブモードでの実行は不可能であると宣言し、以前の 4D のバージョンと同様に常にコオペラティブモードで実行されます。 メソッドの "preemptive" プロパティは "incapable" に設定されます。

このオプションがチェックされている場合、4Dコンパイラーはメソッドがプリエンプティブ実行可能かどうかを検証しません。メソッドは内部で自動的に "thread unsafe" とタグ付けされます (たとえ、理論的にはスレッドセーフであってもです)。 ランタイムで呼び出された場合、このメソッドは同じスレッド内の他のメソッドを "汚染" し、他のメソッドがスレッドセーフであったとしても、スレッドはコオペラティブモードでの実行を強制されます。

-   **特に設定しない** (デフォルト): このオプションをチェックすると、当該メソッドについてはプリエンプティブプロパティを管理しないことを宣言します。 メソッドの "preemptive" プロパティは "indifferent" に設定されます。

このオプションがチェックされているとき、4Dコンパイラーはメソッドのプリエンプティブ性を評価し、内部的に "thread safe" あるいは "thread unsafe" のタグ付けをします。 プリエンプティブ実行に関するエラーは報告されません。 メソッドがスレッドセーフと評価されていれば、ランタイムでプリエンプティブコンテキストから呼び出された場合にはプリエンプティブスレッド実行を妨げません。 逆に、メソッドがスレッドアンセーフであると評価された場合には、ランタイムで呼び出された場合に、プリエンプティブなスレッド実行を不可能にします。

このオプションを使用した場合、内部でのスレッドセーフ評価に関わらず、最初の親メソッドとしてメソッドが 4D から直接呼び出された場合 (たとえば [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.ja.html) コマンドから呼び出された場合など)、メソッドは常にコオペラティブモードで実行されます。 内部で "thread-safe" とタグ付けされている場合、そのタグはコールチェーン内で他のメソッドから呼び出された場合に限り考慮されます。

***特殊なケース*:** メソッドの **コンポーネントとホストプロジェクト間で共有** プロパティがチェックされている場合 ([プロジェクトメソッドプロパティ](https://doc.4d.com/4Dv19R5/4D/19-R5/Project-method-properties.300-5851552.ja.html) 参照)、**特に設定しない** オプションを選択するとメソッドは自動的にスレッドアンセーフであるとタグ付けされます。 If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**.

#### 公開オプション

公開オプション属性は、当該メソッドの呼び出しが明示的に許可された外部サービスを指定します。

##### Webサービス

この属性を使用して、SOAPリクエストでアクセス可能な Webサービスとして当該メソッドを公開することができます。 For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). この場合、設定は保存できません。

##### WSDL を公開

この属性は "Webサービス" 属性が設定されている場合にのみ利用可能です。 この属性を設定すると、当該メソッドが 4Dアプリケーションの WSDLに 含まれます。 For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

##### 4D タグと URL(4DACTION...)

このオプションは、4D Webサーバーのセキュリティを強化するために使用されます。このオプションが選択されていない場合、4DACTION URL を使用した HTTPリクエスト、および4DSCRIPT、4DTEXT、4DHTML タグ (さらには以前の 4DVAR や 4DHTMLVAR タグ) から当該メソッドを直接呼び出すことができません。 For more information, refer to [URLs and Form Actions](https://doc.4d.com/4Dv19R5/4D/14-R2/URLs-and-Form-Actions.300-1342176.en.html) and [4D Transformation Tags](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-Transformation-Tags.300-5830552.en.html) in the 4D *Language Reference* manual.

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

セキュリティのため、このオプションはデフォルトで選択されていません。 Web機能から直接呼び出されるメソッドには、このオプションを明示的に選択しなければなりません。

##### SQL

この属性が選択されていると、当該プロジェクトメソッドは 4D の SQLエンジンから実行可能となります。 デフォルトでは選択されておらず、明示的に許可されない限り 4Dメソッドは保護されており、4D SQLエンジンから呼び出すことはできません。

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**注:**

-   メソッドに "SQL" 属性が設定されていても、メソッドの実行時にはデータベース設定およびメソッドプロパティに設定されたアクセス権が考慮されます。
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### REST サーバー

*このオプションは、従来のカレントレコードおよびカレントセレクションの概念に依存しており、廃止予定となっています。 It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. *

#### 属性の一括設定

"メソッド属性" ダイアログボックスを使用して、一回の操作で複数のプロジェクトメソッドに対して属性 (非表示、Webサービスで公開、等) を設定することができます。 この機能は、多数のプロジェクトメソッドの属性を一括して変更する場合に便利です。 また、開発の段階で、類似のメソッド群に共通の属性を素早く適用するのに使用することもできます。

メソッド属性の一括設定をおこなうには:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. "メソッド属性" ダイアログボックスが表示されます:
2.  "一致するメソッド名" エリアに属性を一括設定するメソッドを指定するための名前条件を入力します。 入力した文字列を使用してメソッド名が検索されます。 "@" をワイルドカード文字として使用し、メソッドグループを選択できます:
   -   前方一致で検索するには、文字列の最後に "@" を加えます。 例: web@
    -   含む検索をするには、文字列の中に "@" を加えます。 例: web@write
    -   後方一致で検索するには、文字列の先頭に "@" を加えます。 例: @write
    -   To designate all of the methods, just type @ in the area.\
      **Notes:**
        -   文字の大小は区別されません。
        -   "@" は文字列内で複数回使用できます (例: dtro_@web@pro.@)
3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied. **Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.
4.  Click on **Apply**. 検索条件に合致するプロジェクトメソッドに対し、属性の変更は即座に反映されます。

