---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT**<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|21 R6|Recarga la jerarquía de carpetas de los proyectos con carpetas en disco|
|18 R4|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.RELOAD PROJECT.Summary-->El comando **RELOAD PROJECT** recarga las definiciones del archivo fuente (métodos, formularios, etc.) desde el disco para el proyecto en ejecución en el entorno 4D actual.<!-- END REF--> Solo se puede utilizar con proyectos 4D ejecutados en **modo interpretado**. La ejecución del comando es asíncrona.

Por lo general, un proyecto se vuelve a cargar automáticamente cuando la aplicación 4D detecta que se ha agregado, modificado o eliminado un archivo fuente. Es el caso cuando un archivo se editó directamente desde el 4D Developer IDE, o después de que la ventana de la aplicación 4D se mueve del fondo al primer plano del sistema operativo.

Es necesario llamar al comando **RELOAD PROJECT** cuando los mecanismos automáticos de recarga del proyecto no pueden aplicarse, es decir, en los siguientes contextos:

* 4D Server o 4D Developer ejecutan el proyecto y los archivos fuente se modifican por un medio externo, por ejemplo, mediante una acción *pull* desde un repositorio de control de fuente; y no puede (o no quiere) mover manualmente la ventana de la aplicación, por ejemplo, porque quiere tener una ejecución automática.
* 4D Server ejecuta el proyecto en modo sin interfaz y se han modificado los archivos fuente.

El comando no hace nada si el entorno Diseño no está abierto.

Cuando se llama al comando desde:

* un 4D Developer conectado a un 4D Server en la misma máquina, primero se ejecuta en el 4D Server, luego del lado 4D Developer.
* un 4D Developer conectado de forma remota a un 4D Server, se ejecuta solo en el 4D Server.
* un 4D mono usuario o un 4D Server, se ejecuta localmente.

En un [proyecto con carpetas en disco](../../Project/architecture.md#disk-folder-projects), el comando también recarga la jerarquía de carpetas de la página Inicio del Explorador a partir de las carpetas encontradas en el disco bajo `Project/Sources`: carpetas añadidas, renombradas, desplazadas o eliminadas, y elementos desplazados entre carpetas. Un método desplazado a otra carpeta conserva su identidad (los editores abiertos y los puntos de interrupción lo siguen). Los [archivos con errores](../../Develop/explorer.md#files-at-fault) encontrados en el disco se reportan en un diálogo, o en el historial de diagnóstico cuando no hay IDE.

## Ejemplo

En un proyecto con carpetas en disco, desea añadir una carpeta con un método fuera del Explorador y luego mostrarla en la página Inicio:

```4d
var $folder : 4D.Folder:=Folder(fk database folder).folder("Project/Sources/Reports/Methods")
$folder.create()
$folder.file("monthlyReport.4dm").setText("//%attributes = {}\r#DECLARE()\r")
RELOAD PROJECT  // la carpeta Reports y su método monthlyReport aparecen en la página Inicio
```

## Ver también 

  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1739 |
| Hilo seguro | yes |


