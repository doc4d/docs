---
id: onAfterKeystroke
title: On After Keystroke
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                      | 定義                                                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 28  | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | フォーカスのあるオブジェクトに文字が入力されようとしている。 `Get edited text` returns the object's text **including** this character. |

<details><summary>履歴</summary>

| リリース  | 内容                                         |
| ----- | ------------------------------------------ |
| 18 R5 | - 入力不可リストボックスのサポート - イベントは IME確定後にトリガーされます |

</details>

## 説明

> The `On After Keystroke` event can generally be replaced by the [`On After Edit`](onAfterEdit.md) event (see below).

After the [`On Before Keystroke`](onBeforeKeystroke.md) and `On After Keystroke` event properties are selected for an object, you can detect and handle the keystrokes within the object, using the `FORM event` command that will return `On Before Keystroke` and then `On After Keystroke` (for more information, please refer to the description of the `Get edited text` command).

> These events are also activated by language commands that simulate a user action like `POST KEY`.

The `On After Keystroke` event is not generated:

- in [list box columns](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
- キーボードを使用せずに (ペーストやドラッグ＆ドロップ、チェックボックス、ドロップダウンリスト、コンボボックス) おこなわれた変更の場合。 To process these events, you must use [`On After Edit`](onAfterEdit.md).

### キーストロークシーケンス

When an entry requires a sequence of keystrokes, the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke event`] events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. このケースは主に以下のように発生します:

- ^ や ~ のような特殊キーが使用された場合: その後に拡張された文字が入力された場合にのみ生成されます (例: "ê" や "ñ")。
- IME (Input Method Editor) が、文字の組み合わせを入力するための中間的なダイアログボックスを表示している場合: IME のダイアログが確定されたときにのみイベントが発生します。

### 参照

[On Before Keystroke](onBeforeKeystroke.md).
