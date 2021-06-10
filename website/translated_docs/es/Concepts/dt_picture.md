---
id: imagen
title: Imagen
---

Un campo, variable o expresión de tipo Imagen puede ser cualquier imagen de Windows o Macintosh. En general, esto incluye toda imagen que pueda ser puesta en el portapapeles o leída desde el disco utilizando comandos 4D como `READ PICTURE FILE`.

4D utiliza APIs nativas para codificar (escribir) y decodificar (leer) los campos y las variables de las imágenes tanto en Windows como en macOS. Estas implementaciones dan acceso a numerosos formatos nativos, incluido el formato RAW, utilizado actualmente por las cámaras digitales.

*   en Windows, 4D utiliza WIC (Windows Imaging Component).
*   en macOS, 4D utiliza ImageIO.

WIC e ImageIO permiten el uso de metadatos en las imágenes. Dos comandos, `SET PICTURE METADATA` y `GET PICTURE METADATA`, le permiten beneficiarse de los metadatos en sus desarrollos.

## Identificadores de códecs de imágenes

4D soporta de forma nativa un amplio conjunto de [formatos de imagen](FormEditor/pictures.md#native-formats-supported), como .jpeg, .png o .svg.

Los formatos de imágenes reconocidos por 4D son devueltos por el comando `PICTURE CODEC LIST` como identificadores de códecs de imágenes.  Se pueden devolver de las siguientes formas:

*   Como una extensión (por ejemplo ".gif")
*   Como un tipo MIME (por ejemplo, "image/jpeg")

La forma devuelta para cada formato dependerá de la forma en que se registre el códec a nivel del sistema operativo. Tenga en cuenta que la lista de códecs disponibles para lectura y escritura puede ser diferente, ya que los códecs de codificación pueden requerir licencias específicas.

La mayoría de los comandos de gestión de imágenes [4D](https://doc.4d.com/4Dv18/4D/18/Pictures.201-4504337.en.html) pueden recibir un Codec ID como parámetro. Por lo tanto, es imperativo utilizar el ID del sistema devuelto por el comando `PICTURE CODEC LIST`. Los formatos de imágenes reconocidos por 4D son devueltos por el comando `PICTURE CODEC LIST`.



## Operadores de imágenes

| Operación                 | Sintaxis               | Devuelve | Acción                                                                                                                                                                                |
| ------------------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concatenación horizontal  | Imagen1 + Imagen2      | Imagen   | Añadir Imagen2 a la derecha de Imagen1                                                                                                                                                |
| Concatenación vertical    | Imagen1 / Imagen2      | Imagen   | Añadir Imagen2 debajo de Imagen1                                                                                                                                                      |
| Superposición exclusiva   | Imagen1 & Imagen2      | Imagen   | Superpone Imagen2 sobre Imagen1 (Imagen2 en primer plano). Produce el mismo resultado que `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)`                                       |
| Superposición inclusiva   | Imagen1 &#124; Imagen2 | Imagen   | Superpone Imagen2 sobre Imagen1 y devuelve la máscara resultante si ambas imágenes tienen el mismo tamaño. Produce el mismo resultado que `$equal:=Equal pictures(Pict1;Pict2;Pict3)` |
| Desplazamiento horizontal | Imagen + Número        | Imagen   | Mover la imagen horizontalmente un Número de píxeles                                                                                                                                  |
| Movimiento vertical       | Imagen / Número        | Imagen   | Mover la imagen verticalmente un Número de píxeles                                                                                                                                    |
| Redimensionamiento        | Imagen * Número        | Imagen   | Redimensiona la imagen según el porcentaje Número                                                                                                                                     |
| Escala horizontal         | Imagen *+ Número       | Imagen   | Redimensionar la imagen horizontalmente al porcentaje Número                                                                                                                          |
| Escala vertical           | Imagen *&#124; Número  | Imagen   | Redimensionar la imagen verticalmente al porcentaje Número                                                                                                                            |

**Notas:**

- Para poder utilizar el operador |, Imag1 e Imag2 deben tener exactamente la misma dimensión. Si ambas imágenes tienen un tamaño diferente, la operación Imagen1 | Imagen2 produce una imagen en blanco.
- El comando `COMBINE PICTURES` puede utilizarse para superponer imágenes manteniendo las características de cada imagen fuente en la imagen resultante.
- Se pueden realizar operaciones adicionales en las imágenes utilizando el comando `TRANSFORM PICTURE`.
- No hay operadores de comparación de imágenes, sin embargo 4D propone el comando `Equal picture` para comparar dos imágenes.


### Ejemplos

Concatenación horizontal
```4d
 circle+rectangle //Colocar el rectángulo a la derecha del círculo
 rectangle+circle //Colocar el círculo a la derecha del rectángulo
```
![](assets/en/Concepts/concatHor.en.png) ![](assets/en/Concepts/concatHor2.en.png)

Concatenación vertical
```4d
 circle/rectangle //Place the rectangle under the circle
 rectangle/circle //Place the circle under the rectangle
```
![](assets/en/Concepts/concatVer.en.png) ![](assets/en/Concepts/concatVer2.en.png)

Superposición exclusiva
```4d
Pict3:=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1
```
![](assets/en/Concepts/superimpoExc.fr.png)

Superposición inclusiva
```4d
Pict3:=Pict1|Pict2 // Recovers resulting mask from superimposing two pictures of the same size
```
![](assets/en/Concepts/superimpoInc.fr.png)

Desplazamiento horizontal
```4d
rectangle+50 //Move the rectangle 50 pixels to the right
rectangle-50 //Move the rectangle 50 pixels to the left
```
![](assets/en/Concepts/hormove.en.png)

Movimiento vertical

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

Escala horizontal

```4d
circle*+3 //The circle becomes 3 times wider
circle*+0.25 //The circle's width becomes a quarter of what it was
```

![](assets/en/Concepts/Horscaling.en.png)![](assets/en/Concepts/Horscaling2.en.png)

Escala vertical

```4d
circle*|2 //The circle becomes twice as tall
circle*|0.25 //The circle's height becomes a quarter of what it was
```

![](assets/en/Concepts/vertscaling.en.png)![](assets/en/Concepts/veticalscaling2.en.png)
