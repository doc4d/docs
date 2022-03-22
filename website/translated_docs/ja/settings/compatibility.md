---
id: compatibility
title: 互換性ページ
---

互換性ページには、以前の 4Dバージョンとの互換性を管理するためのパラメーターがまとめられています。

> 表示されるオプションの数は、元のデータベース/プロジェクトが作成されたバージョンや、そのデータベース/プロジェクトでおこなわれた設定の変更により異なります。   
> このページでは、v18以降のバージョンから変換された 4Dデータベース/プロジェクトで利用可能な互換性オプションのみを説明します。 それ以前のバージョンから引引き継がれる互換性オプションについては **doc.4d.com** の [互換性ページ](https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.ja.html) を参照ください。

- **旧式ネットワークレイヤーを使用する**: 4D v15 のリリース以降、4Dアプリケーションは 4D Server とリモートの 4Dマシン (クライアント) 間の通信に、*ServerNet* という新しいネットワークレイヤーを使い始めました。 以前のネットワークレイヤーは廃止予定となりますが、既存のデータベースとの互換性を保つために保持されます。 このオプションを使用すると、4D Serverアプリケーションにおいて、必要に応じていつでも以前のネットワークレイヤーを有効化することができます。 *ServerNet* は新規に作成されたデータベースおよび v15 以降から変換されたデータベースにおいては自動的に使用されます (このオプションがチェックされます)。 この設定を変更する場合、変更を反映するにはアプリケーションを再起動する必要があります。 接続していたクライアントアプリケーションも、新しいネットワークレイヤーで接続するため再起動しなければなりません。 **注:** このオプションは、`SET DATABASE PARAMETER` コマンドを使い、プログラミングによって管理することもできます。

- **標準のXPathを使用:** デフォルトでは、v18 R3 より前のバージョンの 4D から変換されたデータベースではチェックが外されており、4D v18 R3 以降で作成されたデータベースではチェックされています。 v18 R3 以降、4D の XPath 実装は、より多くの述語に対応しサポートするために変更されました。 結果的に、以前の標準でない一部の機能は動作しなくなります。 これには以下のような機能が含まれます:
    * initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node
    * no implicit current node - the current node has to be included in the XPath expression
    * no recursive searches in repeated structures - only the first element is parsed.\

    Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option *unchecked*. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [DOM Find XML element](https://doc.4d.com/4dv19R/help/command/en/page864.html) command), make sure the **Use standard XPath** option is *checked*.

-   **Use LF for end of line on macOS:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See [TEXT TO DOCUMENT](https://doc.4d.com/4dv19R/help/command/en/page1237.html), [Document to text](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv19R/help/command/en/page1090.html).

-   **Don't add a BOM when writing a unicode text file by default:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. In previous versions, text files were written with a BOM by default. Select this option if you want to enable the new behavior in converted projects. See [TEXT TO DOCUMENT](https://doc.4d.com/4dv19R/help/command/en/page1237.html), [Document to text](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv19R/help/command/en/page1090.html).

- **Map NULL values to blank values unchecked by default a field creation**: For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).