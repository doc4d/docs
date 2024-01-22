---
id: onVpReady
title: On VP Ready
---

| コード | 呼び出し元                                                   | 定義                       |
| --- | ------------------------------------------------------- | ------------------------ |
| 9   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | 4D View Pro エリアのロードが完了した |

## 説明

このイベントは、4D View Pro エリアのロードが終わった時に生成されます。

このイベントは、エリアの初期化コードを書く際に必要になります。 Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the `On VP Ready` form event of the area. このフォームイベントは、エリアの読み込みが完了したときに一回生成されます。 同イベントの利用によって、有効なコンテキスト内でコードが実行されることを確実にできます。 An error is returned if a 4D View Pro command is called before the `On VP Ready` form event is generated.

> 4D View Pro エリアは非同期的に 4Dフォーム上に読み込まれます。 It means that the standard [On load](onLoad.md) form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. `On VP Ready` is always generated after [On load](onLoad.md).
