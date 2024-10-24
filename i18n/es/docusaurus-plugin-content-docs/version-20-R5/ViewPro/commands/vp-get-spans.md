---
id: vp-get-spans
title: VP Get spans
---

<!-- REF #_method_.VP Get spans.Syntax -->

**VP Get spans** ( _rangeObj_ : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

| Parámetros | Tipo   |                             | Descripción                                      |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------ | ---------------- |
| rangeObj   | Object | ->                          | Objeto rango                                     |                  |
| Result     | Object | <- | Objeto de celdas fusionadas en el rango definido | <!-- END REF --> |

#### Descripción

El comando `VP Get spans` <!-- REF #_method_.VP Get spans.Summary -->recupera los rangos de celdas en el _rangeObj_ designado<!-- END REF -->.

En _rangeObj_, pase un rango de celdas fusionadas que desee recuperar. Si _rangeObj_ no contiene celdas fusionadas, se devuelve un rango vacío.

#### Ejemplo

Para centrar el texto de las celdas fusionadas en este documento:

![](../../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Buscar todas las celdas fusionadas 
$range:=VP Get spans(VP All("ViewProArea"))

//centrar el texto
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### Ver también

[VP ADD SPAN](vp-add-span.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
