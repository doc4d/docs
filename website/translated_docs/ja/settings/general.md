---
id: general
title: 一般ページ
---

一般ページでは、4Dプロジェクトの一般的なパラメーターを設定します。

## デザイン

このエリアには **ツールバー表示** オプションがあります。 このオプションがチェックされていると、デザインモードで 4Dツールバーが表示されます。

## 一般

このエリアでは、プロジェクトの起動と実行かかわる設定をおこないます。

### 起動時モード

このメニューを使用して、データベースのデフォルトの起動モードを、**デザイン** モードまたは **アプリケーション** モードに設定できます。 特記されない限り、パスワードアクセスシステムが無効の場合には、4D はデフォルトでデザインモードで開きます。


## Component

This area allows [component developers](../Extensions/develop-components.md) to configure how their component classes and functions will be exposed in the 4D method editor once the component is installed.

### Component namespace in the class store

Use this area to declare a namespace for the component classes and functions in the code on host projects. See [Declaring the component namespace](../Extensions/develop-components.md#declaring-the-component-namespace).

### Generate syntax file for code completion when compiled

When you check this option, a syntax file (JSON format) is automatically created during the compilation phase. See [Code completion for compiled components](../Extensions/develop-components.md#code-completion-for-compiled-components). 
