---
id: method-get-folders
title: METHOD GET FOLDERS
slug: /commands/method-get-folders
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET FOLDERS.Syntax-->**METHOD GET FOLDERS** ( *arrNoms* : Text array {; *filtro* : Text}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET FOLDERS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrNoms | Text array | &#8592; | Array de nombres de carpetas de la página de inicio |
| filtro | Text | &#8594; | Filtro de nombres |
| * | Operador | &#8594; | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|21 R6|Soporte de los proyectos con carpetas en disco|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.METHOD GET FOLDERS.Summary-->El comando **METHOD GET FOLDERS** devuelve en el array *arrNoms*, los nombres de las carpetas creadas en la página Inicio del Explorador de 4D<!-- END REF-->:  
![](../../assets/en/commands/pict837666.es.png)  
  
Como los nombres de las carpetas deben ser únicos, la jerarquía no se devuelve en este array.   
  
Puede limitar la lista de carpetas pasando una cadena de comparación en el parámetro *filtro*, en este caso, sólo se devuelven las carpetas cuyos nombres coincidan con el filtro. Puede utilizar el carácter @ para definir los filtros de tipo "comienza por", "termina en" o "contiene". Si pasa una cadena vacía, el parámetro *filtro* se ignora.   
  
Si se ejecuta este comando desde un componente, devuelve por defecto las rutas de los métodos del componente. Si pasa el parámetro *\**, el array contendrá las rutas de los métodos de la base local.

En un [proyecto con carpetas en disco](../../Project/architecture.md#disk-folder-projects), el comando devuelve los nombres de las carpetas encontradas en el disco bajo `Project/Sources`, incluidas las carpetas vacías, y las carpetas nombradas en el archivo `tableFolders.json`. Las carpetas de tipo (`Methods`, `Classes`, `Forms`, `WebForms`) y las carpetas fijas (`DatabaseMethods`, `TableForms`, `Triggers`, `Shared`) no se devuelven. El archivo `folders.json` se ignora.

## Ejemplo

En un proyecto con carpetas en disco con las carpetas `Sources/Invoices` y `Sources/Invoices/Archive`, desea obtener los nombres de las carpetas de la página Inicio:

```4d
ARRAY TEXT($folders; 0)
METHOD GET FOLDERS($folders)
// $folders contiene "Invoices" y "Archive"
```

## Ver también 

[METHOD GET PATHS](../commands/method-get-paths)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1206 |
| Hilo seguro | no |


