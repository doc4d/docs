---
id: components
title: コンポーネント
---

4D のコンポーネントとは、プロジェクトにインストール可能な、1つ以上の機能を持つ 4Dコードやフォームの一式です。 For example, the [4D SVG component](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## コンポーネントの見つけ方

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component\&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).

## コンポーネントのインストール

To install a component, you simply need to copy the component files into the [`Components` folder of the project](Project/architecture.md). エイリアスまたはショートカットも使用できます。

インタープリターモードで動作するホストプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。 コンパイルモードで実行されるホストデータベースでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。

## コンポーネントの使い方

公開されているコンポーネントコード (メソッドや関数) とフォームは、4D開発において標準の要素として使用できます。

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. この名前空間を使用して、コンポーネントの関数にアクセスします。

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
