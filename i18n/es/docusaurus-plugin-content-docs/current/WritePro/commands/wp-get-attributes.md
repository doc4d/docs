---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *...attribName* ; *...attribValue* ) : Object<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| Parámetros  | Tipo                                           |                             | Descripción                                 |
| ----------- | ---------------------------------------------- | --------------------------- | ------------------------------------------- |
| targetObj   | Object                                         | &#8594; | Rango o elemento o documento 4D Write Pro   |
| attribName  | Text                                           | &#8594; | Nombre del atributo a obtener               |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#8592; | Valor actual del atributo para el objetivo  |
| attribColl  | Collection                                     | &#8594; | Colección de nombres de atributos a obtener |
| Resultado   | Object                                         | &#8592; | Nombres y valores de los atributos          |

<!-- END REF-->

## Descripción

El comando **WP Get attributes**<!--REF #_command_.WP Get attributes.Summary--> devuelve el valor de cualquier atributo en un rango 4D Write Pro, encabezado, cuerpo, pie de página, tabla o documento.<!-- END REF--> Este comando le da acceso a cualquier tipo de atributos internos 4D Write Pro: carácter, párrafo, documento, tabla o imagen.

En *targetObj*, puede pasar:

- un rango, o
- un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen anclada / sección / subsección / hoja de estilo), o
- un documento 4D Write Pro

En *attribName*, pase el nombre del atributo a recuperar.

También puede pasar una colección de nombres de atributos en *attribColl*, en cuyo caso el comando devolverá un objeto que contiene los nombres de atributos pasados en *attribColl* junto con sus valores correspondientes.

Para obtener una lista completa de los atributos que se pueden pasar, así como su ámbito y valores, consulte la sección *Atributos de 4D Write Pro*.

Si hay diferentes valores para el mismo atributo en el elemento pasado como parámetro, el comando devuelve:

- para valores numéricos, wk mixed
- para un array, un array vacio (tab stops, color si *attribValue* se define como array), con una excepción para wk text shadow offset para el que el valor del array siempre contendrá 2 entradas que se pueden definir por separado wk mixed si el desplazamiento horizontal o el desplazamiento vertical (o ambos) están mezclados.
- para valores cadena, una cadena vacía
- para valores imagen, una imagen vacía.

**Nota**: si *targetObj* contiene un párrafo y hojas de estilo de caracter, se devuelve el nombre de la hoja de estilo del párrafo.

## Ejemplo 1

Desea obtener el color de fondo del área seleccionada:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

## Ejemplo 2

Desea obtener el tamaño de fuente, el color de fondo y el estilo de borde del área seleccionada utilizando una colección:

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

## Ver también

[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)
