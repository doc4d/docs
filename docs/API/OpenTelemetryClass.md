---
id: OpenTelemetryClass
title: OpenTelemetry
---

The `OpenTelemetry` class controls the [OpenTelemetry connector](../Debugging/opentelemetry.md) of the application: it starts and stops the connector, and lets your code create its own spans and add attributes to the current span.

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Class added|

</details>

### OpenTelemetry Object

`OpenTelemetry` objects are returned by the [`OpenTelemetry`](../commands/opentelemetry) command.

The connector is available with 4D and 4D Server. It is not available on a remote 4D: there, [`.start()`](#start) returns an error and the connector stays stopped.

### Summary

||
|---|
|[<!-- INCLUDE #OpenTelemetryClass.isRunning.Syntax -->](#isrunning)<br/><!-- INCLUDE #OpenTelemetryClass.isRunning.Summary -->|
|[<!-- INCLUDE #OpenTelemetryClass.setAttributes().Syntax -->](#setattributes)<br/><!-- INCLUDE #OpenTelemetryClass.setAttributes().Summary -->|
|[<!-- INCLUDE #OpenTelemetryClass.start().Syntax -->](#start)<br/><!-- INCLUDE #OpenTelemetryClass.start().Summary -->|
|[<!-- INCLUDE #OpenTelemetryClass.startSpan().Syntax -->](#startspan)<br/><!-- INCLUDE #OpenTelemetryClass.startSpan().Summary -->|
|[<!-- INCLUDE #OpenTelemetryClass.stop().Syntax -->](#stop)<br/><!-- INCLUDE #OpenTelemetryClass.stop().Summary -->|



<!-- REF opentelemetry.isRunning.Desc -->
## .isRunning

<!-- REF #OpenTelemetryClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->

#### Description

The `.isRunning` property contains <!-- REF #OpenTelemetryClass.isRunning.Summary -->**True** if the OpenTelemetry connector is started<!-- END REF -->, and **False** otherwise.

The connector can be started by code with [`.start()`](#start), or at startup by the [`logConfig.json` file or the `OTEL_*` environment variables](../Debugging/opentelemetry.md#starting-the-connector-at-startup).

This property is **read-only**.

#### Example

You start the connector only if it does not run yet:

```4d
If (Not(OpenTelemetry.isRunning))
	OpenTelemetry.start({categories: {rest: True}})
End if
```

<!-- END REF -->


<!-- REF opentelemetry.setAttributes().Desc -->
## .setAttributes()

<!-- REF #OpenTelemetryClass.setAttributes().Syntax -->**.setAttributes**( *attributes* : Object )<!-- END REF -->

<!-- REF #OpenTelemetryClass.setAttributes().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|attributes|Object|&#8594;|Attributes to add to the current span|
</div>
<!-- END REF -->

#### Description

The `.setAttributes()` function <!-- REF #OpenTelemetryClass.setAttributes().Summary -->adds *attributes* to the current span (does nothing when the connector is stopped)<!-- END REF -->.

The current span is the innermost span running in the process: a span created with [`.startSpan()`](#startspan) and not ended yet, the span of the running method (when the `methods` category is on), or the span of the request that the process serves (REST, web or client/server request).

In *attributes*, pass an object with one property per attribute. The property name is the attribute name. Its value can be a Text, a Number, a Boolean, or a collection of values of one of these types. Integer numbers are sent as integers. Any other value is sent as its JSON text. An attribute that already exists is replaced.

When the connector is stopped, or when there is no current span, `.setAttributes()` does nothing and raises no error.

#### Example

In a function called by a REST request, you add the customer to the current span:

```4d
OpenTelemetry.setAttributes({customerID: $customer.ID; vip: $customer.vip})
```

<!-- END REF -->


<!-- REF opentelemetry.start().Desc -->
## .start()

<!-- REF #OpenTelemetryClass.start().Syntax -->**.start**( { *config* : Object } ) : Object<!-- END REF -->

<!-- REF #OpenTelemetryClass.start().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|config|Object|&#8594;|Connector configuration: endpoint, serviceName, samplingRatio, headers, categories, exporter, resourceAttributes, httpBodies|
|Result|Object|&#8592;|Status of the start: success, errors|
</div>
<!-- END REF -->

#### Description

The `.start()` function <!-- REF #OpenTelemetryClass.start().Summary -->starts the OpenTelemetry connector with *config*, or replaces the configuration of the running connector<!-- END REF -->. 4D does not need to restart.

When the connector is already running, `.start()` sends its pending spans, then applies the new configuration. The new configuration does not keep any setting of the previous one.

In *config*, you can pass an object with the following properties. All of them are optional, and unknown properties are ignored.

|Property|Type|Description|Default|
|---|---|---|---|
|endpoint|Text|Address of the OTLP/HTTP collector. 4D sends the spans with a `POST` request to `<endpoint>/v1/traces`, in binary Protobuf format. Used when `exporter` is `"otlp"`.|`"http://localhost:4318"`|
|serviceName|Text|Name of the service in the monitoring tool (`service.name` resource attribute)|The value of the `OTEL_SERVICE_NAME` environment variable, else the name of the built application, else the name of the project|
|samplingRatio|Real|Ratio of the new traces to record, from 0 (none) to 1 (all). A trace that comes from another service with a `traceparent` header is recorded or not as the caller decided (see [Sampling](../Debugging/opentelemetry.md#sampling)).|1|
|headers|Object|HTTP headers sent with the requests to the collector, for example an authentication header. One property per header, with a Text value.|No header|
|categories|Object|Categories of operations to trace. One Boolean property per category: `database`, `methods`, `network`, `clientServer`, `rest` (see [Categories](../Debugging/opentelemetry.md#categories)). An omitted category is off.|All categories off|
|exporter|Text|`"otlp"`: the spans are sent to `endpoint`. `"file"`: the spans are written in the `OpenTelemetryTraces.jsonl` file of the [Logs folder](../Project/architecture.md#logs), one OTLP JSON object per line (see [Exporters](../Debugging/opentelemetry.md#exporters)).|`"otlp"`|
|resourceAttributes|Object|Attributes added to the resource of all the spans (for example `deployment.environment`). Same value types as for [`.setAttributes()`](#setattributes).|No attribute|
|httpBodies|Boolean|**True** to record the bodies of the HTTP requests and responses in the `network` and `rest` spans|**False**|

If *config* is omitted, the connector starts with the default values: only the spans created by code with [`.startSpan()`](#startspan) are sent.

`.start()` does not start or change the connector, and returns `success` **False** with an error, when:

- a property of *config* has a wrong type (for example a text in `samplingRatio`),
- a property of *config* has a wrong value (for example a `samplingRatio` of 2, or an `exporter` other than `"otlp"` or `"file"`),
- it is called on a remote 4D,
- the [`logConfig.json` file](../Debugging/opentelemetry.md#starting-the-connector-at-startup) has an `openTelemetry` section and `"forceConfiguration": true`: calls by code are then ignored.

The errors are returned in the result: they are not thrown.

#### Returned object

The function returns an object describing the start status. This object can contain the following properties:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|**True** if the connector was started with *config*, **False** otherwise|
|errors||Collection|4D error stack (not returned if the connector was started)|
||\[].errCode|Number|4D error code|
||\[].message|Text|Description of the 4D error|
||\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example 1

You send the spans of the REST requests, the database calls, and the outgoing HTTP calls to a collector that requires an authentication token:

```4d
var $config : Object:={}
$config.endpoint:="https://otel.example.com"
$config.headers:={Authorization: "Bearer "+$token}
$config.serviceName:="Invoices"
$config.categories:={rest: True; database: True; network: True}

var $result : Object:=OpenTelemetry.start($config)
If (Not($result.success))
	ALERT($result.errors[0].message)
End if
```

#### Example 2

You want to try the connector without a collector, and to keep a quarter of the traces:

```4d
var $result : Object
$result:=OpenTelemetry.start({exporter: "file"; samplingRatio: 0.25; categories: {methods: True; database: True}})
// the spans are written in Logs/OpenTelemetryTraces.jsonl
```

#### Example 3

You add the environment to the resource of all the spans:

```4d
var $attributes : Object:={}
$attributes["deployment.environment"]:="production"
var $result : Object:=OpenTelemetry.start({resourceAttributes: $attributes; categories: {rest: True}})
```

<!-- END REF -->


<!-- REF opentelemetry.startSpan().Desc -->
## .startSpan()

<!-- REF #OpenTelemetryClass.startSpan().Syntax -->**.startSpan**( *name* : Text {; *attributes* : Object} ) : 4D.Span<!-- END REF -->

<!-- REF #OpenTelemetryClass.startSpan().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|name|Text|&#8594;|Name of the span|
|attributes|Object|&#8594;|Attributes of the span|
|Result|4D.Span|&#8592;|New span, child of the current span, that becomes the current span until its end|
</div>
<!-- END REF -->

#### Description

The `.startSpan()` function <!-- REF #OpenTelemetryClass.startSpan().Summary -->starts a custom span, child of the current span<!-- END REF -->, and returns it as a [`4D.Span`](SpanClass.md) object.

The span is named *name*. It starts when `.startSpan()` is called and lasts until you call its [`.end()`](SpanClass.md#end) function. Its kind is `INTERNAL`.

The new span is a child of the current span of the process (for example the span of the running method or of the request being served). If there is no current span, it starts a new trace. Until it ends, the new span is the current span of the process: the spans created meanwhile in the process are its children, and [`.setAttributes()`](#setattributes) adds attributes to it.

In *attributes*, you can pass the attributes of the span, with the same value types as for [`.setAttributes()`](#setattributes).

Custom spans are sent whatever the [categories](../Debugging/opentelemetry.md#categories) of the configuration.

When the connector is stopped, `.startSpan()` returns an inert `4D.Span` object whose functions do nothing. No error is raised, so you can leave your custom spans in the code.

#### Example

You trace the import of a file in a span of its own, with the name of the file:

```4d
var $span : 4D.Span:=OpenTelemetry.startSpan("import"; {file: $file.name})
// ... code that imports the file:
// the spans of the methods and database calls made here are children of "import"
$span.end()
```

<!-- END REF -->


<!-- REF opentelemetry.stop().Desc -->
## .stop()

<!-- REF #OpenTelemetryClass.stop().Syntax -->**.stop**()<!-- END REF -->

#### Description

The `.stop()` function <!-- REF #OpenTelemetryClass.stop().Summary -->stops the OpenTelemetry connector after sending the pending spans<!-- END REF -->.

No span is created for the operations that start after the call. The spans waiting to be sent are sent first, within the export timeout (10 seconds). Spans that cannot be sent within this time are lost.

If the connector is already stopped, `.stop()` does nothing.

If the [`logConfig.json` file](../Debugging/opentelemetry.md#starting-the-connector-at-startup) has an `openTelemetry` section and `"forceConfiguration": true`, `.stop()` is ignored and the connector keeps running.

The connector is also stopped, after sending its pending spans, when 4D or 4D Server quits.

#### Example

You stop the connector at the end of a test session:

```4d
OpenTelemetry.stop()
// OpenTelemetry.isRunning is False
```

<!-- END REF -->
