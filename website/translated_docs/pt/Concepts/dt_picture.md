---
id: imagem
title: Imagem
---

Um campo, variável ou expressão pode ser qualquer imagem de Windows ou Macintoh. Em geral, isto inclui qualquer imagem que possa ser colocada na pasta ou lida a partir do disco utilizando comandos 4D, tais como `LEIA O ARQUIVO DE IMAGENS`.

4D usa APIs nativas para codificar (escrever) e decodificar (ler) campos de imagens e variáveis sob Windows e macOS. Essas implementações oferecem acesso a inúmeros formatos nativos, incluindo o formato RAW atualmente utilizado por câmeras digitais.

*   no Windows, 4D usa o WIC (Componente de Imagens Windows).
*   no macOS, 4D usa ImageIO.

WIC e ImageIO permitem o uso de metadados nas fotos. Dois comandos, `SET PICTURA METADATA` e `GET PICTURE METADATA`, permitem que você se beneficie com metadados em seus desenvolvimentos.

## IDs de códigos de imagem

4D suporta nativamente um amplo conjunto de formatos de imagem [](FormEditor/pictures.md#native-formats-supported), tais como .jpeg, .png, ou .svg.

Os formatos de imagens reconhecidos por 4D são retornados pelo comando `PICTURE CODEC LIST` como picture Codec IDs.  Eles podem ser devolvidos nos seguintes formulários:

*   Como uma extensão (por exemplo ".gif")
*   Como um tipo MIME (por exemplo, “image/jpeg”)

O formulário retornado para cada formato dependerá da forma como o Codec é gravado no nível do sistema operacional. Note que a lista de codecs disponíveis para leitura e escrita pode ser diferente desde que a codificação de codecs pode exigir licenças específicas.

A maioria dos [comandos de gerenciamento de imagens 4D](https://doc.4d.com/4Dv18/4D/18/Pictures.201-4504337.en.html) pode receber um Codec ID como parâmetro. É imperativo, portanto, usar a ID do sistema retornada pelo comando `PICTURE CODEC LIST`. Os formatos de imagem reconhecidos por 4D são devolvidos pelo comando `PICTURE CODEC LIST` .



## Operadores Bitwise

| Operação                | Sintaxe                | Retorna | Ação                                                                                                                                                                       |
| ----------------------- | ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concatenação horizontal | Foto1 + Foto2          | Imagem  | Adicionar Pict2 à direita da Pict1                                                                                                                                         |
| Concatenação vertical   | Pict1 / Pict2          | Imagem  | Acrescentar Pict2 ao fundo de Pict1                                                                                                                                        |
| Sobreposição exclusiva  | Pict1 & Pict2          | Imagem  | Sobrepõe Pict2 no topo de Pict1 (Pict2 em primeiro plano). Produz o mesmo resultado que `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)`                              |
| Sobreposição inclusiva  | Pict1 &#124; Pict2     | Imagem  | Sobrepõe Pict2 em Pict1 e devolve a máscara resultante se ambas as imagens tiverem o mesmo tamanho. Produz o mesmo resultado que `$equal:=Fotos iguais(Pict1;Pict2;Pict3)` |
| Movimento horizontal    | Imagem + Número        | Imagem  | Mover imagem horizontalmente número pixels                                                                                                                                 |
| Movimento vertical      | Imagem / Número        | Imagem  | Mover imagem em pixels do número vertical                                                                                                                                  |
| Redimensionamento       | Imagem * Número        | Imagem  | Redimensionar imagem por proporção número                                                                                                                                  |
| Horizontal scaling      | Picture *+ Number      | Imagem  | Resize Picture horizontally by Number ratio                                                                                                                                |
| Vertical scaling        | Picture *&#124; Number | Imagem  | Resize Picture vertically by Number ratio                                                                                                                                  |

**Notas:**

- In order to use the | operator, Pict1 and Pict2 must have exactly the same dimension. If both pictures are a different size, the operation Pict1 | Pict2 produces a blank picture.
- The `COMBINE PICTURES` command can be used to superimpose pictures while keeping the characteristics of each source picture in the resulting picture.
- Additional operations can be performed on pictures using the `TRANSFORM PICTURE` command.
- There is no comparison operators on pictures, however 4D proposes the `Equal picture` command to compare two pictures.


### Exemplos

Concatenação horizontal
```4d
 circle+rectangle //Place the rectangle to the right of the circle
 rectangle+circle //Place the circle to the right of the rectangle
```
![](assets/en/Concepts/concatHor.en.png) ![](assets/en/Concepts/concatHor2.en.png)

Concatenação vertical
```4d
 circle/rectangle //Place the rectangle under the circle
 rectangle/circle //Place the circle under the rectangle
```
![](assets/en/Concepts/concatVer.en.png) ![](assets/en/Concepts/concatVer2.en.png)

Sobreposição exclusiva
```4d
Pict3:=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1
```
![](assets/en/Concepts/superimpoExc.fr.png)

Sobreposição inclusiva
```4d
Pict3:=Pict1|Pict2 // Recovers resulting mask from superimposing two pictures of the same size
```
![](assets/en/Concepts/superimpoInc.fr.png)

Movimento horizontal
```4d
rectangle+50 //Move the rectangle 50 pixels to the right
rectangle-50 //Move the rectangle 50 pixels to the left
```
![](assets/en/Concepts/hormove.en.png)

Movimento vertical

```4d
rectangle/50 //Move the rectangle down by 50 pixels
rectangle/-20 //Move the rectangle up by 20 pixels
```
![](assets/en/Concepts/vertmove.en.png)![](assets/en/Concepts/vertmove2.en.png)

Resize

```4d
rectangle*1.5 //The rectangle becomes 50% bigger
rectangle*0.5 //The rectangle becomes 50% smaller
```
![](assets/en/Concepts/resize.en.png)![](assets/en/Concepts/resisze2.en.png)

Horizontal scaling

```4d
circle*+3 //The circle becomes 3 times wider
circle*+0.25 //The circle's width becomes a quarter of what it was
```

![](assets/en/Concepts/Horscaling.en.png)![](assets/en/Concepts/Horscaling2.en.png)

Vertical scaling

```4d
circle*|2 //The circle becomes twice as tall
circle*|0.25 //The circle's height becomes a quarter of what it was
```

![](assets/en/Concepts/vertscaling.en.png)![](assets/en/Concepts/veticalscaling2.en.png)
