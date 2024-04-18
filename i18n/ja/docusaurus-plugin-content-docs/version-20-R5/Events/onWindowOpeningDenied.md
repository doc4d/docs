---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| コード | 呼び出し元                                          | 定義                  |
| --- | ---------------------------------------------- | ------------------- |
| 53  | [Web Area](../FormObjects/webArea_overview.md) | ポップアップウィンドウがブロックされた |

<details><summary>履歴</summary>

| リリース  | 内容         |
| ----- | ---------- |
| 19 R5 | ドロップ時にトリガー |

</details>

## 説明

このイベントは、Webエリアによりポップアップウィンドウがブロックされると生成されます。 4D Webエリアはポップアップウィンドウを許可しません。

You can find out the blocked URL using the `WA Get last filtered URL` command.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system [engines](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](../FormObjects/webArea_overview.md#user-interface) option is also enabled for the area. 次を呼び出すことで、ドロップを受け入れることができます:

```4d
//web area object method
If (FORM Event.code=On Window Opening Denied)
	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
	// or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
	// where UrlVariable is the URL variable associated to the web area
End if 
```

### 参照

[`On Open External Link`](onOpenExternalLink.md)
