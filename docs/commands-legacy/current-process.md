---
id: current-process
title: Current process
slug: /commands/current-process
displayed_sidebar: docs
---

<!--REF #_command_.Current process.Syntax-->**Current process**  -> Function result<!-- END REF-->
<!--REF #_command_.Current process.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Longint | &#8592; | Process number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Current process.Summary-->**Current process** returns the process reference number of the process within which this command is called.<!-- END REF-->

#### Example 

See the examples for [DELAY PROCESS](delay-process.md) and [Process info](../commands/process-info.md).

#### See also 

[Process number](../commands/process-number.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  