---
id: vp-recompute-formulas
title: VP RECOMPUTE FORMULAS
---

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->

**VP RECOMPUTE FORMULAS** ( _vpAreaName_ : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| 引数         | タイプ  |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | Text | -> | 4D View Pro フォームオブジェクト名 | <!-- END REF --> |

#### 説明

`VP RECOMPUTE FORMULAS` コマンドは、<!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->_vpAreaName_ 引数で指定したエリアの全フォーミュラを即座に評価します<!-- END REF -->。 デフォルトでは、4D はフォーミュラを挿入時、読み込み時、そして書き出し時のタイミングで自動計算します。 `VP RECOMPUTE FORMULAS` コマンドを使用すると、任意のタイミングで強制的に計算を実行することができます(例: フォーミュラに変更が加えられた場合、またはフォーミュラがデータベースへの呼び出しを格納している場合など)。 The command launches the execution of the [VP FLUSH COMMANDS](vp-flush-commands.md) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

> Be sure the [VP SUSPEND COMPUTING](vp-suspend-computing.md) command has not been executed before using `VP RECOMPUTE FORMULAS`, otherwise the command does nothing.

#### 例題

ワークブック内の全フォーミュラを更新します:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### 参照

[VP RESUME COMPUTING](vp-resume-computing.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
