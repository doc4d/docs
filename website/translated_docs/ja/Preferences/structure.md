---
id: structure
title: ストラクチャーページ
---

## プライマリーキー

環境設定内のこれらのオプションによって、新しくテーブルが追加されたとき、または [プライマリーキー管理](hthttps://doc.4d.com/4Dv19/4D/19/Primary-key-manager.300-5416826.ja.html) 機能の使用によって 4D が自動的に追加するプライマリーキーのデフォルトの名前と型を変更することができます。

次のオプションから選択することができます:

*   **Name** (デフォルトでは "ID"): プライマリーキーのフィールドのデフォルト名を設定します。 [4D の命名規則](Concepts/identifiers.md#テーブルとフィールド) に従う範囲内であればどんな名前も使用できます。
*   **Type** ([Longint](Concepts/number.md) by default): Sets the default type of primary key fields. UUID を選択することもできます。 In this case, the primary key fields created by default are of the [Alpha type](Concepts/string.md) and have the **UUID Format** and **Auto UUID** field properties checked.

## ストラクチャーエディター

このオプショングループでは、4Dストラクチャーエディターの表示を設定します。

### ストラクチャーの描画クォリティ

このオプションで、ストラクチャーエディターの描画レベルを変更できます。 デフォルトで品質は **高** に設定されています。 標準品質を選択して、表示速度を優先させることができます。 この設定の効果は主にズーム機能を使用する際に実感することができます ([ストラクチャーエディター](https://doc.4d.com/4Dv19/4D/19/Structure-editor.300-5416818.ja.html) のズーム参照)。

### フォルダーが表示対象外のとき

This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see [Highlight/dim tables by folder](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928)). The possible options are Dimmed (a shadow replaces the table image) and Invisible (the table disappears completely).

