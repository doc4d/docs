---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|17 R4|Modificado|
|11 SQL Release 3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.MESSAGES OFF.Summary-->Os comandos MESSAGES OFF e [MESSAGES ON](messages-on) acendem e apagam os termômetros de progressão mostrados por 4D enquanto operações de longa duração são executadas.<!-- END REF--> Automaticamente são mostradas as mensagens. 

| Apply Formula | Quick Report     | Order by     |
| ------------- | ---------------- | ------------ |
| Export Data   | Import Data      | Graph        |
| Query by Form | Query by Formula | Query Editor |

A tabela a seguir lista os comandos que mostram termômetros de progresso:

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

**Nota para 4D Server:** as janelas de mensagens de progresso não se mostram no servidor, estas operações se listam automaticamente na *\_o\_PAGE SETUP* da janela de administração. Se deseja forçar a visualização destas janelas de progresso, deve chamar ao comando [MESSAGES ON](messages-on) no servidor. 

## Exemplo 

O exemplo a seguir elimina os termômetros de progresso antes de realizar uma ordenação e depois os restabelece depois de terminar a operação de ordenação: 

```4d
 MESSAGES OFF
 ORDER BY([Direções];[Direções]CEP;>;[Direções]Nome2;>)
 MESSAGES ON
```

## Ver também 

[MESSAGES ON](messages-on)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 175 |
| Thread-seguro | yes |


