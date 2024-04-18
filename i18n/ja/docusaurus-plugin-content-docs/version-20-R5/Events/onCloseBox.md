---
id: onCloseBox
title: On Close Box
---

| コード | 呼び出し元 | 定義                     |
| --- | ----- | ---------------------- |
| 22  | フォーム  | ウィンドウのクローズボックスがクリックされた |

## 説明

The `On Close Box` event is generated when the user clicks on the clos box of the window.

### 例題

この例題では、レコードのデータ入力に使われるフォームで、ウィンドウを閉じるイベントを処理する方法を示します:

```4d
  //Method for an input form
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("This record has been modified. Save Changes?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 End case
```
