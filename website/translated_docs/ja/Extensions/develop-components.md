---
id: develop-components
title: コンポーネントの開発
---

A 4D component is a set of 4D functions, methods, and forms representing one or more functionalities that can be [installed and used in 4D applications](Concepts/components.md). たとえば、メールの送受信をおこない、それらを 4D アプリケーションに格納するための機能を持ったコンポーネントを作成できます。

ニーズに合わせて独自の 4Dコンポーネントを開発し、それを非公開とすることができます。 また、作成した [コンポーネントを4Dコミュニティで共有](https://github.com/topics/4d-component) することもできます。


## 定義

- **マトリクスプロジェクト**: コンポーネント開発に使用する4D プロジェクト。 マトリクスプロジェクトは特別な属性を持たない標準のプロジェクトです。 マトリクスプロジェクトはひとつのコンポーネントを構成します。
- **ホストプロジェクト**: コンポーネントがインストールされ、それを使用するアプリケーションプロジェクト。
- **コンポーネント**: ホストアプリケーションによって使用される目的で、同アプリケーションの [`Components`](Project/architecture.md) フォルダーにコピーされたマトリクスプロジェクト (コンパイル済み または [ビルド済み](Desktop/building.md#コンポーネントをビルド))。

## 画面の説明

4D コンポーネントの作成とインストールは直接 4D を使用しておこないます:

- コンポーネントをインストールするには、[プロジェクトの `Components` フォルダー](Project/architecture.md) にコンポーネントファイルをコピーします。 エイリアスまたはショートカットも使用できます。
- A project can be both a matrix and a host, in other words, a matrix project can itself use one or more components. しかしコンポーネントが "サブコンポーネント" を使用することはできません。
- A component can call on most of the 4D elements: classes, functions, project methods, project forms, menu bars, choice lists, and so on. 反面、コンポーネントが呼び出せないものは、データベースメソッドとトリガーです。
- You cannot use the datastore, standard tables, or data files in 4D components. しかし、外部データベースのメカニズムを使用すればテーブルやフィールドを作成し、そこにデータを格納したり読み出したりすることができます。 外部データベースは、メインの 4D データベースとは独立して存在し、SQLコマンドでアクセスします。
- インタープリターモードで動作するホストプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。 コンパイルモードで実行されるホストデータベースでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。




## ランゲージコマンドのスコープ

[使用できないコマンド](#使用できないコマンド) を除き、コンポーネントではすべての 4D ランゲージコマンドが使用できます。

コマンドがコンポーネントから呼ばれると、コマンドはコンポーネントのコンテキストで実行されます。ただし `EXECUTE METHOD` および `EXECUTE FORMULA` コマンドは除きます。このコマンドは、パラメーターにて指定されたメソッドのコンテキストを使用します。 また、ユーザー＆グループテーマの読み出しコマンドはコンポーネントで使用することができますが、読み出されるのはホストプロジェクトのユーザー＆グループ情報であることに注意してください (コンポーネントに固有のユーザー＆グループはありません)。

`SET DATABASE PARAMETER` と `Get database parameter` コマンドは例外となります: これらのコマンドのスコープはグローバルです。 これらのコマンドがコンポーネントから呼び出されると、結果はホストプロジェクトに適用されます。

さらに、`Structure file` と `Get 4D folder` コマンドは、コンポーネントで使用するための設定ができるようになっています。

`COMPONENT LIST` コマンドを使用して、ホストプロジェクトにロードされたコンポーネントのリストを取得できます。


### 使用できないコマンド

(読み取り専用モードで開かれるため) ストラクチャーファイルを更新する以下のコマンドは、コンポーネントで使用することができません。 Their execution in a component will generate the error -10511, "The CommandName command cannot be called from a component":

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**注:**

- `Current form table` コマンドは、プロジェクトフォームのコンテキストで呼び出されると `Nil` を返します。 ゆえにこのコマンドをコンポーネントで使用することはできません。
- SQLデータ定義言語のコマンド (`CREATE TABLE`、`DROP TABLE`等) をコンポーネントのフレームワークで使用することはできません。 ただし、外部データベースの場合は使用することができます (`CREATE DATABASE` SQL コマンド参照)。



## プロジェクトメソッドの共有

All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed within the component.

他方、デフォルトでは、これらのプロジェクトメソッドはホストプロジェクトに表示されず、呼び出すこともできません。 In the matrix project, you must explicitly designate the methods that you want to share with the host project by checking the **Shared by components and host project** box in the method properties dialog box:

![](assets/en/Concepts/shared-methods.png)

Shared project methods can be called in the code of the host project (but they cannot be modified in the Method editor of the host project). These methods are **entry points** of the component.

セキュリティのため、デフォルトでは、コンポーネントはホストプロジェクトのプロジェクトメソッドを実行することはできません。 特定の場合に、ホストプロジェクトのプロジェクトメソッドにコンポーネントがアクセスできるようにする必要があるかもしれません。 そうするには、ホストプロジェクトのプロジェクトメソッド側で、コンポーネントからのアクセスを可能にするよう明示的に指定しなければなりません。これはメソッドプロパティダイアログボックスの、**コンポーネントとホストプロジェクト間で共有** で設定します。

![](assets/en/Concepts/pict516563.en.png)

ホストプロジェクトのプロジェクトメソッドがコンポーネントから利用可能になっていれば、`EXECUTE FORMULA` または `EXECUTE METHOD` コマンドを使用して、コンポーネント側からホストのメソッドを実行することができます。 たとえば:

```4d 
// ホストメソッド
component_method("host_method_name")
```


```4d
// コンポーネントメソッド
 C_TEXT($1)
 EXECUTE METHOD($1)
```

> インタープリターコンポーネントがインストールされたインタープリターホストデータベースは、それがインタープリターコンポーネントのメソッドを呼び出さなければ、コンパイル/シンタックスチェックができます。 そうでない場合、コンパイルまたはシンタックスチェックを実行しようとすると警告ダイアログが表示され、操作を実行することはできません。   
> 一般的に、インタープリターメソッドはコンパイル済みメソッドを呼び出せますが、逆はできません。これをおこなうには `EXECUTE METHOD`   や `EXECUTE FORMULA` コマンドを使用します。


## Sharing of classes and functions

By default, component classes and functions cannot be called from the 4D method editor of the host project. If you want your component classes and functions to be exposed in the host projects, you need to declare a component namespace. Additionally, you can control how component classes and functions are suggested in the host method editor.

### Declaring the component namespace

To allow classes and functions of your component to be exposed in the host projects, enter a value in the [**Component namespace in the class store** option in the General page](../settings/general.md#component-namespace-in-the-class-store) of the matrix project Settings. By default, the area is empty: component classes are not available outside of the component context.

![](assets/en/settings/namespace.png)

> A *namespace* ensures that no conflict emerges when a host project uses different components that have classes or functions with identical names. A component namespace must be compliant with [property naming rules](../Concepts/identifiers.md#object-properties).

When you enter a value, you declare that component classes and functions will be available in the [user class store (**cs**)](../Concepts/classes.md#cs) of the host project's code, through the `cs.<value>` namespace. For example, if you enter "eGeometry" as component namespace, assuming that you have created a `Rectangle` class containing a `getArea()` function, once your project is installed as a component, the developer of the host project can write:

```4d
//in host project
var $rect: cs.eGeometry.Rectangle 
$rect:=cs.eGeometry.Rectangle.new(10;20)
$area:=$rect.getArea()
```

Of course, it is recommended to use a distinguished name to avoid any conflict. If a user class with the same name as a component already exists in the project, the user class is taken into account and the component classes are ignored.

A component's ORDA classes are not available in its host project. For example, if there is a dataclass called Employees in your component, you will not be able to use a "cs.Mycomponent.Employee" class in the host project.

### Hidden classes

Just like in any project, you can create hidden classes and functions in the component by prefixing names with an underscore ("_"). When a [component namespace is defined](#declaring-the-component-namespace), hidden classes and functions of the component will not appear as suggestions when using code completion.

Note however that they can still be used if you know their names. For example, the following syntax is valid even if the `_Rectangle` class is hidden:

```4d
$rect:=cs.eGeometry._Rectangle.new(10;20)
```

> Non-hidden functions inside a hidden class appear as suggestions when you use code completion with a class that [inherits](../Concepts/classes.md#inheritance) from it. For example, if a component has a `Teacher` class that inherits from a `_Person` class, code completion for `Teacher` suggests non-hidden functions from `_Person`.


## Code completion for compiled components

To make your component easier to use for developers, you can check the [**Generate syntax file for code completion when compiled** option in the General page](../settings/general.md#component-namespace-in-the-class-store) of the matrix project Settings.

A syntax file (JSON format) is then automatically created during the compilation phase, filled with the syntax of your component's classes, functions, and [exposed methods](#sharing-of-project-methods), and placed in the \Resources\en.lproj folder of the component project. 4D uses the contents of that syntax file to generate contextual help in the code editor, such as code completion and function syntax:

![](assets/en/settings/syntax-code-completion-2.png) ![](assets/en/settings/syntax-code-completion-1.png)

If you don't enter a [component namespace](#declaring-the-component-namespace), the resources for the classes and exposed methods are not generated even if the syntax file option is checked.



## 変数の渡し方

ローカル、プロセス、インタープロセス変数は、コンポーネントとホストプロジェクト間で共有されません。 ホストプロジェクトからコンポーネントの変数を編集、またはその逆をおこなう唯一の方法はポインターを使用することです。

配列を使用した例:

```4d
// ホストプロジェクト側:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

// コンポーネント側で AMethod プロジェクトメソッドは以下の通りです:
     APPEND TO ARRAY($1->;2)
```

変数を使用した例:

```4d
C_TEXT(myvariable)
component_method1(->myvariable)
```

```4d
C_POINTER($p)
$p:=component_method2(...)
```

ポインターを使用しない場合でも、コンポーネント側からホストデータベースの (変数そのものではなく) 変数の値にアクセスすること自体は可能ですし、その逆も可能です:

```4d
// ホストデータベース内
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method は $1 に "DoSomething" を受け取ります ($input_t 変数を受け取るわけではありません)
```


ホストプロジェクトとコンポーネント間でポインターを使用して通信をおこなうには、以下の点を考慮する必要があります:

- `Get pointer` をコンポーネント内で使用した場合、このコマンドはホストプロジェクトの変数へのポインターを返しません。また逆にこのコマンドをホストプロジェクトで使用した場合も同様です。

- コンパイル済みプロジェクトでは、コンパイルされたコンポーネントしか使用できませんが、インタープリタープロジェクトの場合には、インタープリターおよびコンパイル済みコンポーネントを同時に使用することができます。 この場合、ポインターの利用は以下の原則を守らなければなりません: インタープリターモードでは、コンパイルモードにおいて作成されたポインターを解釈できます。逆にコンパイルモードでは、インタープリターモードにて作成されたポインターを解釈することはできません。 以下の例でこの原則を説明します: 同じホストプロジェクトにインストールされた 2つのコンポーネント C ( コンパイル済) と I ( インタープリタ) があります:
 - コンポーネントC が定義する変数 `myCvar` があるとき、コンポーネントI はポインター `->myCvar` を使用して変数の値にアクセスすることができます。
 - コンポーネントI が定義する変数 `myIvar` があるとき、コンポーネントC はポインター `->myIvar` を使用しても変数の値にアクセスすることはできません。 このシンタックスは実行エラーを起こします。

- `RESOLVE POINTER` を使用したポインターの比較はお勧めできません。 変数の分離の原則により、ホストプロジェクトとコンポーネント (あるいは他のコンポーネント) で同じ名前の変数が存在することができますが、根本的にそれらは異なる内容を持ちます。 両コンテキストで、変数のタイプが違うことさえありえます。 ポインター `myptr1` と `myptr2` がそれぞれ変数を指すとき、以下の比較は正しくない結果となるかもしれません:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      // 変数が異なっているにもかかわらず、このテストはtrue を返します
```
このような場合には、ポインターを比較しなければなりません:
```4d
     If(myptr1=myptr2) // このテストはFalse を返します
```

## エラー処理

`ON ERR CALL` コマンドによって実装された [エラー処理メソッド](Concepts/error-handling.md) は、実行中のプロジェクトに対してのみ適用されます。 コンポーネントによって生成されたエラーの場合、ホストプロジェクトの `ON ERR CALL` エラー処理メソッドは呼び出されず、その逆もまた然りです。


## ホストプロジェクトのテーブルへのアクセス

コンポーネントでテーブルを使用することはできませんが、ホストプロジェクトとコンポーネントはポインターを使用して通信をおこなうことができます。 たとえば、以下はコンポーネントで実行可能なメソッドです:

```4d
// コンポーネントメソッドの呼び出し
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

コンポーネント内の `methCreateRec` メソッドのコード:

```4d
C_POINTER($1) // ホストプロジェクトのテーブルへのポインター
C_POINTER($2) // ホストプロジェクトのフィールドへのポインター
C_TEXT($3) // 代入する値

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

> コンポーネントのコンテキストにおいて、テーブルフォームへの参照はすべてホスト側のテーブルフォームへの参照だと 4D はみなします (コンポーネントはテーブルを持つことができないからです)。

## テーブルやフィールドの利用

コンポーネントは、マトリクスプロジェクトのストラクチャーで定義されたテーブルやフィールドを使用することはできません。 しかし外部データベースを作成し、そのテーブルやフィールドを必要に応じ利用することはできます。 外部データベースの作成と管理は SQL を用いておこないます。 外部データベースは、メインの4Dプロジェクトから独立している別の 4Dプロジェクトですが、メインプロジェクトから操作が可能です。 外部データベースの利用は、そのデータベースを一時的にカレントデータベースに指定することです。言い換えれば、4Dが実行する SQL クエリのターゲットデータベースとして外部データベースを指定します。 外部データベースの作成は SQL の `CREATE DATABASE` コマンドを使用します。

### 例題

以下のコードはコンポーネントに実装されており、外部データベースに対して3つの基本的なアクションをおこないます:

- 外部データベースを作成します (存在しない場合)
- 外部データベースにデータを追加します
- 外部データベースからデータを読み込みます

外部データベースの作成:

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) データを許可されているディレクトリに保存します
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

外部データベースへのデータ書き込み:

```4d
 $Ptr_1:=$2 // retrieves data from the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;


 End SQL
```

外部データベースからデータを読み込み:

```4d
 $Ptr_1:=$2 // ホストプロジェクトへのデータアクセスはポインターを通じておこないます
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```


## フォームの使用

- 特定のテーブルに属さない" プロジェクトフォーム" のみが、コンポーネント内で利用できます。 マトリクスプロジェクトのすべてのプロジェクトフォームをコンポーネントで使用することができます。
- コンポーネントはホストプロジェクトのテーブルフォームを使用できます。 この場合、コンポーネントのコードでフォームを指定するにあたっては、テーブル名ではなく、テーブルへのポインターを使用しなければならないことに注意してください。

> コンポーネントが `ADD RECORD` コマンドを使用すると、ホストプロジェクトのコンテキストで、ホストプロジェクトのカレントの入力フォームが表示されます。 Consequently, if the form includes variables, the component will not have access to them.

- コンポーネントフォームをホストプロジェクト内でサブフォームとして公開することができます。 これは具体的には、グラフィックオブジェクトを提供するコンポーネントを開発できることを意味します。 たとえば、4D社が提供するウィジェットはコンポーネントのサブフォーム利用に基づいています。

> コンポーネントのコンテキストにおいては、参照されるプロジェクトフォームはすべてコンポーネント内に存在している必要があります。 たとえば、コンポーネント内において、`DIALOG` または `Open form window` コマンドを使用してホスト側のプロジェクトフォームを参照しようとした場合にはエラーが生成されます。


## リソースの使用

コンポーネントは、自身の Resourcesフォルダーにあるリソースを使用することができます。

これによって自動メカニズムが有効となり、コンポーネントの Resources フォルダー内で見つかった XLIFF ファイルは、 同コンポーネントによってロードされます。

1つ以上のコンポーネントを含むホストプロジェクトでは、ホストプロジェクトと同様にそれぞれのコンポーネントも固有のリソースチェーンを持っています。 リソースは異なるプロジェクト間で分離されます。コンポーネントA のリソースにコンポーネントB やホストプロジェクトからアクセスすることはできません。


## 初期化のコードの実行

コンポーネントは、ホストデータベースを開いたときまたは閉じたときに、自動的に 4Dコードを実行することができます。これによってたとえば、ホストデータベースに関連する設定やユーザーの状態などを読み込み・保存することができます。

初期化やデータベースを閉じるコードの実行は、 `On Host Database Event` データベースメソッド を使用しておこなわれます。

> セキュリティ上の理由から、`On Host Database Event` データベースメソッドを使用可能にするためには、その実行をホストデータベースで明示的に許可する必要があります。 To do this, you must check the [**Execute "On Host Database Event" method of the components** option](../settings/security.md#options) in the Security page of the Settings.


## コンポーネントの保護: コンパイル

By default, all the code of a matrix project installed as a component is potentially visible from the host project. 特に:

- エクスプローラーのメソッドページに存在する共有のプロジェクトメソッドは、ホストプロジェクトのメソッドから呼び出し可能です。 エクスプローラーのプレビューエリアでそれらの内容を選択してコピーすることが可能です。 また、その内容はデバッガーで見ることもできます。 しかし、それらをメソッドエディター上で開いたり編集したりすることはできません。
- マトリクスプロジェクトの他のプロジェクトメソッドはエクスプローラーに現れません。しかし、ホストプロジェクトのデバッガーには内容が表示されます。
- The non-hidden classes and functions can be viewed in the debugger [if a namespace is declared](#declaring-the-component-namespace).

To protect the code of a component effectively, simply [compile and build](Desktop/building.md#build-component) the matrix project and provide it in the form of a .4dz file. コンパイルされたマトリクスプロジェクトがコンポーネントとしてインストールされると:

- The shared project methods, classes and functions can be called in the methods of the host project. Shared project methods are also visible on the Methods Page of the Explorer. しかし、その内容はプレビューエリアにもデバッガーにも表示されません。
- マトリクスプロジェクトの他のプロジェクトメソッドは一切表示されません。


## コンポーネントの共有

開発したコンポーネントを [GitHub](https://github.com/topics/4d-component) で公開し、4D開発者のコミュニティをサポートすることをお勧めします。 We recommend that you use the **`4d-component`** topic to be correctly referenced.  