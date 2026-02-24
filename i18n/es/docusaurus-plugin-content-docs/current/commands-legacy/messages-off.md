---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17 R4|Modificado|
|11 SQL Release 3|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.MESSAGES OFF.Summary-->Los comandos MESSAGES OFF y [MESSAGES ON](messages-on) encienden y apagan los termómetros de progresión mostrados por 4D mientras se ejecutan operaciones de larga duración.<!-- END REF--> Por defecto, se muestran los mensajes. 

Estas son las operaciones que pueden mostrar termómetros de progreso: aplicación de una fórmula, generación de un informe rápido, exportación de datos, importación de datos, ordenación, generación de un gráfico, búsqueda, búsqueda por formulario, búsqueda por fórmula.

La siguiente tabla lista los comandos que muestran termómetros de progreso:

[APPLY TO SELECTION](apply-to-selection)  
[Average](average)  
[BUILD APPLICATION](build-application)  
[DISTINCT VALUES](distinct-values)  
[EXPORT DIF](export-dif)  
[EXPORT SYLK](export-sylk)  
[EXPORT TEXT](export-text)  
  
[IMPORT DIF](import-dif)  
[IMPORT SYLK](import-sylk)  
[IMPORT TEXT](import-text)  
[Max](max)  
[Min](min)  
[ORDER BY](order-by)  
[ORDER BY FORMULA](order-by-formula)  
[QR REPORT](qr-report)  
[QUERY](query)  
[QUERY BY FORMULA](query-by-formula)  
[QUERY BY EXAMPLE](query-by-example)  
[QUERY SELECTION](query-selection)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula)  
[REDUCE SELECTION](reduce-selection)  
[RELATE MANY SELECTION](relate-many-selection)  
[RELATE ONE SELECTION](relate-one-selection)  
[SCAN INDEX](scan-index)  
[Sum](sum)

**Nota para 4D Server:** las ventanas de mensajes de progreso no se muestran en el servidor desde que estas operaciones se listan automáticamente en la *\_o\_PAGE SETUP* de la ventana de administración. Si desea forzar la visualización de estas ventanas de progreso, debe llamar al comando [MESSAGES ON](messages-on) en el servidor. 

## Ejemplo 

El siguiente ejemplo suprime los termómetros de progreso antes de efectuar una ordenación y luego los restablece después de terminar la operación de ordenación:

```4d
 MESSAGES OFF
 ORDER BY([Direcciones];[Direcciones]ZIP;>;[Direcciones]Nombre2;>)
 MESSAGES ON
```

## Ver también 

[MESSAGES ON](messages-on)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 175 |
| Hilo seguro | yes |


