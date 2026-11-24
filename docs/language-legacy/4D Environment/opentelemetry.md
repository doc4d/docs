---
id: opentelemetry
title: OpenTelemetry
slug: /commands/opentelemetry
displayed_sidebar: docs
---

<!-- REF #_command_.OpenTelemetry.Syntax -->**OpenTelemetry** : 4D.OpenTelemetry<!-- END REF -->
<!--REF #_command_.OpenTelemetry.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | [4D.OpenTelemetry](../../API/OpenTelemetryClass.md) | &#8592; | OpenTelemetry connector |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Created|

</details>
</div>

## Description

The `OpenTelemetry` command <!-- REF #_command_.OpenTelemetry.Summary -->returns the `4D.OpenTelemetry` object that controls the OpenTelemetry connector of the application<!-- END REF -->.

The OpenTelemetry connector sends traces of the application (database calls, method and command calls, outgoing HTTP calls, client/server requests, and REST and web requests) to an OpenTelemetry collector or to a file. For an overview, see [OpenTelemetry connector](../../Debugging/opentelemetry.md).

With the [`4D.OpenTelemetry`](../../API/OpenTelemetryClass.md) object, you can:

- start the connector with a configuration, or replace the configuration of the running connector ([`.start()`](../../API/OpenTelemetryClass.md#start)),
- stop the connector ([`.stop()`](../../API/OpenTelemetryClass.md#stop)) and know whether it runs ([`.isRunning`](../../API/OpenTelemetryClass.md#isrunning)),
- create your own spans ([`.startSpan()`](../../API/OpenTelemetryClass.md#startspan)) and add attributes to the current span ([`.setAttributes()`](../../API/OpenTelemetryClass.md#setattributes)).

The connector is available with 4D and 4D Server. On a remote 4D, `.start()` returns an error.

## Example 1

You want to trace the REST requests and the database calls of the application, and to write the spans to a file:

```4d
var $result : Object
$result:=OpenTelemetry.start({exporter: "file"; categories: {rest: True; database: True}})
If ($result.success)
	// the spans are written in the OpenTelemetryTraces.jsonl file of the Logs folder
End if
```

## Example 2

You want to measure the creation of an invoice in a span of its own:

```4d
var $span : 4D.Span:=OpenTelemetry.startSpan("invoice"; {customerID: $customerID})
// ... code that creates the invoice
$span.end()
```

## See also

- [OpenTelemetry class](../../API/OpenTelemetryClass.md)
- [Span class](../../API/SpanClass.md)
- [OpenTelemetry connector](../../Debugging/opentelemetry.md)
- [Log files](../../Debugging/debugLogFiles.md)

## Properties

|  |  |
| --- | --- |
| Command number | 1873 |
| Thread safe | yes |
