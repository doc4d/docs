---
id: plug-ins
title: プラグイン
---

4Dアプリケーションの開発を進めていくと、最初は気付かなかった数多くの機能を発見することでしょう。 それだけでなく、**プラグイン** を4D開発環境に追加することで、標準の4Dの機能を高めることもできます。

## プラグインとは何か

A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. プラグインは、4D に機能を追加します。 A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes.

## Where to find plug-ins?

Multiple plug-ins have already been written by the 4D community. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).


## プラグインのインストール

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](Project/architecture#plugins).

プラグインは 4D 起動時にロードされるので、これらをインストールする際には 4Dアプリケーションを終了する必要があります。 If a plug-in requires a specific license for use, it will be loaded but not available for use.


## Using plug-ins

Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the **Plug-ins** page of the Explorer. 


