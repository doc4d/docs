---
id: plug-ins
title: プラグイン
---

4Dアプリケーションの開発を進めていくと、最初は気付かなかった数多くの機能を発見することでしょう。 You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## プラグインとは何か

プラグインとは、C や C++ などの言語で書かれた、4D 起動時にロードされるコードのことです。 プラグインは、4D に機能を追加します。 プラグインには通常複数のルーチンが含まれています。 プラグインは外部エリアを操作でき、外部プロセスを実行できます。

## プラグインの見つけ方

4Dコミュニティによって多数のプラグインが作成されています。 Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).

## プラグインのインストール

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).

プラグインは 4D 起動時にロードされるので、これらをインストールする際には 4Dアプリケーションを終了する必要があります。 プラグインの利用に特別なライセンスが必要な場合、プラグインはロードされますが、ライセンスをインストールするまで使用することはできません。

## プラグインの使い方

プラグインコマンドは、4D開発において通常の 4Dコマンドと同様に使用できます。 Plug-in commands appear in the **Plug-ins** page of the Explorer.
