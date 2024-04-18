---
id: picture
title: Picture
---

ピクチャーのフィールド・変数・式に格納されるデータは、任意の Windows または Macintosh の画像です。 In general, this includes any picture that can be put on the pasteboard or read from the disk using 4D commands such as `READ PICTURE FILE`.

4D は Windows と macOS の両方においてネイティブな API を使用してフィールドや変数のピクチャーをエンコード (書き込み) およびデコード (読み込み) します。 これらの実装は現在デジタルカメラで使用されている RAW フォーマット含め、数多くのネイティブなフォーマットへのアクセスを提供します。

- Windows では、4DはWIC (Windows Imaging Component) を使用します。
- macOS では、4D は ImageIO を使用します。

WIC および ImageIO はピクチャー内のメタデータの書き込みを許可しています。 Two commands, `SET PICTURE METADATA` and `GET PICTURE METADATA`, let you benefit from metadata in your developments.

## ピクチャー Codec ID

4D supports natively a wide set of [picture formats](FormEditor/pictures.md#native-formats-supported), such as .jpeg, .png, or .svg.

Picture formats recognized by 4D are returned by the `PICTURE CODEC LIST` command as picture Codec IDs.  これは以下の形式で返されます:

- 拡張子 (例: “.gif”)
- MIME タイプ (例: “image/jpeg”)

それぞれのピクチャーフォーマットに対して返される形式は、当該 Codec が OS レベルで記録されている方法に基づきます。 エンコーディング (書き込み) 用コーデックにはライセンスが必要な場合があるため、利用できるコーデックの一覧は、読み込み用と書き込み用で異なる可能性があることに注意してください。

Most of the [4D picture management commands](https://doc.4d.com/4Dv18/4D/18/Pictures.201-4504337.en.html) can receive a Codec ID as a parameter. It is therefore imperative to use the system ID returned by the `PICTURE CODEC LIST` command.
Picture formats recognized by 4D are returned by the `PICTURE CODEC LIST` command.

## ピクチャー演算子

| 演算     | シンタックス                            | 戻り値     | 動作                                                                                                                                                    |
| ------ | --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 水平連結   | Pict1 + Pict2                     | Picture | Pict1 の右側に Pict2 を追加します                                                                                                                               |
| 垂直連結   | Pict1 / Pict2                     | Picture | Pict1 の下側に Pict2 を追加します                                                                                                                               |
| 排他的論理和 | Pict1 & Pict2 | Picture | Pict1 の前面に Pict2 を重ねます (Pict2 が前面) Produces the same result as `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)`               |
| 包括的論理和 | Pict1 \| Pict2                    | Picture | Pict1 と Pict2 を重ね、そのマスクした結果を返します (両ピクチャーとも同じサイズである必要があります) Produces the same result as `$equal:=Equal pictures(Pict1;Pict2;Pict3)` |
| 水平移動   | Picture + Number                  | Picture | 指定ピクセル分、ピクチャーを横に移動します。                                                                                                                                |
| 垂直移動   | Picture / Number                  | Picture | 指定ピクセル分、ピクチャーを縦に移動します。                                                                                                                                |
| リサイズ   | Picture \* Number                 | Picture | 割合によってピクチャーをサイズ変更します。                                                                                                                                 |
| 水平スケール | Picture \*+ Number                | Picture | 割合によってピクチャー幅をサイズ変更します。                                                                                                                                |
| 垂直スケール | Picture \*\| Number               | Picture | 割合によってピクチャー高さをサイズ変更します。                                                                                                                               |

**注 :**

- \| 演算子を使用するためには、Pict1 と Pict2 が完全に同一のサイズでなければなりません。 二つのピクチャーサイズに違いがある場合、Pict1 | Pict2 は空のピクチャーを生成します。
- The `COMBINE PICTURES` command can be used to superimpose pictures while keeping the characteristics of each source picture in the resulting picture.
- Additional operations can be performed on pictures using the `TRANSFORM PICTURE` command.
- There is no comparison operators on pictures, however 4D proposes the `Equal picture` command to compare two pictures.

### 例題

水平連結

```4d
 circle+rectangle //Place the rectangle to the right of the circle
 rectangle+circle //Place the circle to the right of the rectangle
```

![](../assets/en/Concepts/concatHor.en.png)
![](../assets/en/Concepts/concatHor2.en.png)

垂直連結

```4d
 circle/rectangle //Place the rectangle under the circle
 rectangle/circle //Place the circle under the rectangle
```

![](../assets/en/Concepts/concatVer.en.png)
![](../assets/en/Concepts/concatVer2.en.png)

排他的論理和

```4d
Pict3:=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1
```

![](../assets/en/Concepts/superimpoExc.fr.png)

包括的論理和

```4d
Pict3:=Pict1|Pict2 // 同じサイズの二つのピクチャーを重ね合わせた上でそのマスクの結果を返します。
```

![](../assets/en/Concepts/superimpoInc.fr.png)

水平移動

```4d
rectangle+50 // rectangle を右に 50ピクセル移動します。
rectangle-50 // rectangle を左に 50ピクセル移動します。
```

![](../assets/en/Concepts/hormove.en.png)

垂直移動

```4d
rectangle/50 // rectangle を下に 50ピクセル移動します。
rectangle/-20 // rectangle を上に 20ピクセル移動します。
```

![](../assets/en/Concepts/vertmove.en.png)![](../assets/en/Concepts/vertmove2.en.png)

拡大

```4d
rectangle*1.5 // rectangle を 50%拡大します。
rectangle*0.5 // rectangle を 50%縮小します。
```

![](../assets/en/Concepts/resize.en.png)![](../assets/en/Concepts/resisze2.en.png)

水平スケール

```4d
circle*+3 // circle の幅を 3倍に広げます。
circle*+0.25 // circle の幅を 25%に縮めます。
```

![](../assets/en/Concepts/Horscaling.en.png)![](../assets/en/Concepts/Horscaling2.en.png)

垂直スケール

```4d
circle*|2 // circle の高さを 2倍に伸ばします。
circle*|0.25 // circle の高さを 25%に縮めます。
```

![](../assets/en/Concepts/vertscaling.en.png)![](../assets/en/Concepts/veticalscaling2.en.png)
