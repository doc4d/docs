---
id: propertiesPicture
title: Picture
---

## パス名

Pathname of a static source picture for a [picture button](pictureButton_overview.md), [picture pop-up Menu](picturePopupMenu_overview.md), or [static picture](staticPicture.md). POSIX シンタックスを使用します。

ピクチャーパスに指定できる場所は次の 3箇所です:

- in the **Resources** folder of the project. プロジェクト内の複数のフォームで画像を共有する場合に適切です。 In this case, the Pathname is "/RESOURCES/\<picture path\>".
- in an image folder (e.g. named **Images**) within the form folder. 特定のフォームでしか画像が使われない場合や、そのフォームの全体を複製してプロジェクト内、または別のプロジェクトに移動させたい場合に適切です。 In this case, the Pathname is "\<picture path\>" and is resolved from the root of the form folder.
- 4D のピクチャー変数。 フォーム実行時に、ピクチャーがメモリに読み込まれている必要があります。 この場合、パス名は "var:\\<variableName\>"。

#### JSON 文法

|    名称   | データタイプ | とりうる値                                                                               |
| :-----: | :----: | ----------------------------------------------------------------------------------- |
| picture |  text  | POSIXシンタックスの相対パスまたはファイルシステムパス、ピクチャー変数の場合は "var:\\<variableName\>" |

#### 対象オブジェクト

[Picture button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Static Picture](staticPicture.md)

---

## 表示

### スケーリング

`JSON 文法では: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### 繰り返し

`JSON 文法では: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

フィールドがオリジナルのピクチャーよりも小さいサイズにされた場合、ピクチャーはトランケート (中央合わせなし) されます。

### 中央合わせ / トランケート (中央合わせしない)

`JSON 文法では: "truncatedCenter" / "truncatedTopLeft"`

The **Center** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 上下、および左右のはみ出し量は同じになります。

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. ピクチャーは右と下にはみ出します。

> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### JSON 文法

| 名称            | データタイプ | とりうる値                                                    |
| ------------- | ------ | -------------------------------------------------------- |
| pictureFormat | string | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### 対象オブジェクト

[Static Picture](staticPicture.md)
