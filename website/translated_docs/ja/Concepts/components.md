---
id: components
title: コンポーネント
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that you can install and use in your projects. For example, the [4D SVG component](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Where to find components?

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).


## Installing components

To install a component, you simply need to copy the component files into the [`Components` folder of the project](Project/architecture.md). エイリアスまたはショートカットも使用できます。

インタープリターモードで動作するホストプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。 コンパイルモードで実行されるホストデータベースでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。

## Using components

Component methods and forms can be used as standard elements in your 4D development.

インストールされたコンポーネントにメソッドが含まれている場合、それらはエクスプローラーのメソッドページの **コンポーネントメソッド** テーマに表示されます。

You can select a component method and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](assets/en/Project/compDoc.png)
