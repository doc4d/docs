---
id: opentelemetry
title: OpenTelemetry connector
---

4D and 4D Server include an [OpenTelemetry](https://opentelemetry.io/) connector. When it runs, it creates **spans** for the operations of the application (database calls, method and command calls, outgoing HTTP calls, client/server requests, REST and web requests) and sends them to an OpenTelemetry collector or to a monitoring tool that accepts OpenTelemetry data. You can then follow each request through the application, see where its time is spent, and follow a request across several services.

The connector sends **traces** only (no metrics and no logs). It is stopped by default: an application that does not start it behaves as before.

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Added|

</details>

## Overview

A **span** is one timed operation, such as a REST request, a method call, or a query. It has a name, a start, an end, a kind (`SERVER`, `CLIENT`, or `INTERNAL`), and attributes. The spans of one operation form a **trace**: each span is a child of the span that was running when it started.

In 4D, each process has a current span. A span created in a process is a child of its current span, and becomes the current span until it ends. For example, with the `rest`, `methods`, and `database` categories on, a REST request that calls a function running an ORDA query gives the following trace:

```
POST /rest/Employee/findSmith         (SERVER, rest)
 └ Employee.findSmith                 (INTERNAL, methods)
    └ Employee.query                  (INTERNAL, methods)
       └ query Employee               (CLIENT, database)
```

The connector is available:

- with 4D (single-user) and 4D Server, on Windows and macOS,
- not on a remote 4D: the remote 4D sends no span, and the client/server requests it sends are traced by 4D Server.

You control the connector:

- by code, with the [`OpenTelemetry`](../commands/opentelemetry) command, which returns the [`4D.OpenTelemetry`](../API/OpenTelemetryClass.md) object,
- at startup, with the [`logConfig.json` file or the `OTEL_*` environment variables](#starting-the-connector-at-startup), without changing the code.

## Starting the connector by code

Call [`OpenTelemetry.start()`](../API/OpenTelemetryClass.md#start) with a configuration object, and [`OpenTelemetry.stop()`](../API/OpenTelemetryClass.md#stop) to stop it. You do not need to restart 4D. Calling `.start()` on a running connector replaces its configuration.

The configuration object can contain the following properties (see [`.start()`](../API/OpenTelemetryClass.md#start) for details):

|Property|Type|Description|Default|
|---|---|---|---|
|endpoint|Text|Address of the OTLP/HTTP collector|`"http://localhost:4318"`|
|serviceName|Text|Name of the service (`service.name`)|See [Service name](#service-name)|
|samplingRatio|Real|Ratio of the new traces to record, from 0 to 1|1|
|headers|Object|HTTP headers sent to the collector|No header|
|categories|Object|One Boolean per [category](#categories): `database`, `methods`, `network`, `clientServer`, `rest`|All off|
|exporter|Text|`"otlp"` or `"file"` (see [Exporters](#exporters))|`"otlp"`|
|resourceAttributes|Object|Attributes added to the resource of all the spans|No attribute|
|httpBodies|Boolean|Record the bodies of HTTP requests and responses|**False**|

```4d
var $result : Object
$result:=OpenTelemetry.start({endpoint: "http://localhost:4318"; categories: {rest: True; database: True; network: True}})
```

## Categories

Each category of operations has its own switch in the `categories` object of the configuration. A category that is off creates no span. Each span follows its own category: for example, with `database` on and `methods` off, a `QUERY` call gives a database span only, which is a child of the nearest span that is recorded.

|Category|Key|Operations|Span kind|
|---|---|---|---|
|Database calls|`database`|ORDA functions, classic data commands, and SQL run by 4D code|`CLIENT`|
|Method calls|`methods`|Methods, class functions, member functions of 4D classes, commands, and plug-in commands|`INTERNAL` (`SERVER` for a trace root)|
|Network calls|`network`|Outgoing HTTP calls|`CLIENT`|
|Client/server requests|`clientServer`|Requests that 4D Server receives from remote 4D applications|`SERVER`|
|REST calls|`rest`|REST and web requests that 4D receives|`SERVER`|

The spans created by code with [`OpenTelemetry.startSpan()`](../API/OpenTelemetryClass.md#startspan) do not belong to a category: they are always sent when the connector runs.

### Method calls

With the `methods` category on, 4D creates a span for each call that the [debug log](debugLogFiles.md#4ddebuglogtxt-tabular) records:

- project methods, database methods, form and object methods, and class functions: the span is named after the method path as the debug log writes it, for example `MyMethod` or `[Table]Form.Object`,
- member functions of 4D classes: the span is named `className.functionName`, for example `collection.query`. A class function or a formula called as a member function has its own method span instead,
- built-in commands, named after the command, for example `Current date`,
- plug-in commands, named after the command.

Commands that the debug log never records are not traced. The `commandList` option of the [debug log](debugLogFiles.md#json-file-description) has no effect on the spans.

Each span lasts from the call to the return, and is a child of the span of its caller. A call made when no span is current (stored procedure, worker call, database method, form event at the top level of a process...) starts a new trace, and its span kind is `SERVER`.

The method spans have the following attributes:

|Attribute|Description|
|---|---|
|`4d.process.id`|Number of the process|
|`4d.parameters`|Parameters of the call, as the debug log writes them. For commands, in interpreted and compiled mode. For methods, in interpreted mode only|

When a 4D error is raised, the span of the running method, and the span of the command or function that raised the error, are marked as error, with the error code and text.

:::note

With the `methods` category on, every command call creates a span. Turn it on when you need the details of the code, and use the other categories for permanent monitoring.

:::

### Database calls

With the `database` category on, 4D creates a `CLIENT` span for each database operation:

- **ORDA functions** that read or write the data:
	- DataClass: `query()`, `get()`, `all()`, `fromCollection()`,
	- EntitySelection: `query()`, `orderBy()`, `orderByFormula()`, `first()`, `last()`, `drop()`,
	- Entity: `save()`, `drop()`, `reload()`, `lock()`, `unlock()`, `first()`, `last()`, `next()`, `previous()`.

	The span is named `<function> <dataclass>`, for example `query Employee`. Functions that do not access the data, such as `getKey()` or `toObject()`, create no database span.
- **Classic data commands**: queries, selections, records, and relations, for example `QUERY`, `ALL RECORDS`, `ORDER BY`, `LOAD RECORD`, `SAVE RECORD`, `DELETE RECORD`, `DELETE SELECTION`, or `RELATE ONE`. The span is named `<COMMAND> <table>`, for example `QUERY Employee`. With the `methods` category also on, the database span is a child of the span of the command.
- **SQL run by 4D code**: `Begin SQL`/`End SQL`, `SQL EXECUTE`, `QUERY BY SQL`, and `SQL EXECUTE SCRIPT`. A statement span is named `SQL <keyword>`, for example `SQL SELECT`. The queries that the SQL server receives from external clients are not traced.

The database spans have the following attributes:

|Attribute|Description|
|---|---|
|`db.system.name`|`"4d"`|
|`db.operation.name`|Function, command, or SQL keyword|
|`db.collection.name`|Name of the dataclass or table|
|`db.query.text`|For an ORDA query, the query string and the values of its placeholders (for example `name = :1; :1 = "Smith"`). For a classic command, the command and its parameters as the debug log writes them. For SQL, the statement text with its literal values|

The query values are recorded as they are: keep this in mind if your queries contain personal data.

A span is marked as error when the operation fails (for example an invalid query string, or a `save()` that returns `success` **False**).

```4d
// with categories: {database: True}
var $employees : cs.EmployeeSelection
$employees:=ds.Employee.query("name = :1"; "Smith")
// span "query Employee", db.query.text: name = :1; :1 = "Smith"
```

### Network calls

With the `network` category on, 4D creates a `CLIENT` span for each outgoing HTTP call made with:

- [`HTTP Request`](../commands/http-request) and [`HTTP Get`](../commands/http-get): the span lasts until the command returns, and is a child of the span of the command,
- [`4D.HTTPRequest`](../API/HTTPRequestClass.md): the span lasts from the sending of the request to the response or the failure. Its parent is the span that was current when the request was created,
- requests to a remote datastore opened with [`Open datastore`](../commands/open-datastore), including the login request (whose body is never recorded).

The span is named after the HTTP method, for example `GET`, and has the following attributes:

|Attribute|Description|
|---|---|
|`http.request.method`|HTTP method|
|`url.full`|URL of the request, with the secrets of the query string masked|
|`server.address`, `server.port`|Server called|
|`http.response.status_code`|Status of the response|
|`http.request.header.<name>`, `http.response.header.<name>`|Headers of the request and of the response, with the credentials masked as in the [HTTP debug log](debugLogFiles.md#httpdebuglogtxt)|

The bodies of the request and of the response are recorded only when the `httpBodies` property of the configuration is **True**.

The span is marked as error when the call fails (for example an unreachable host or a timeout), or when the response status is 4xx or 5xx.

### Client/server requests

With the `clientServer` category on, 4D Server creates a `SERVER` span for each request that a remote 4D sends to it, from the reception of the request to the sending of the reply. The span is named after the request, for example `Execute on server`, `Save record`, or `ORDA Query Employee`.

The span is the current span of the server process that runs the request: a method with the [Execute on Server](../Desktop/clientServer.md#execute-on-server-attribute) attribute called from the remote 4D, and the ORDA code it runs, give child spans. A stored procedure started with `EXECUTE ON SERVER` runs in a new process: its spans are not children of the request span.

The client/server spans have the following attributes:

|Attribute|Description|
|---|---|
|`4d.client.machine`|Machine name of the remote 4D (`machineName` of [`Session.info`](../API/SessionClass.md#info))|
|`4d.client.user`|User of the remote 4D (`userName` of [`Session.info`](../API/SessionClass.md#info))|
|`4d.process.id`|Number of the server process|
|`4d.request.id`|Number of the request, as written in the [request log](debugLogFiles.md#4drequestslogtxt)|

The span is marked as error when the request returns an error.

These spans are created on 4D Server only. A remote 4D sends no span.

### REST calls

With the `rest` category on, 4D creates a `SERVER` span for each request that the [web server](../WebServer/webServer.md) receives: [REST requests](../REST/REST_requests.md), [HTTP request handlers](../WebServer/http-request-handler.md), `4DACTION` URLs, `On Web Connection`, and static pages. The span lasts from the reception of the request to the sending of the response.

The span is named `<METHOD> <route>`, without keys nor query values, for example:

- `GET /rest/Employee`,
- `POST /rest/Employee/findSmith` (dataclass function), `POST /rest/$catalog/<function>` (datastore function), `POST /rest/$singleton/<singleton>/<function>` (singleton function),
- `GET /4DACTION/<method>`,
- `<METHOD> <pattern>` for an HTTP request handler, and `<METHOD> <path>` for the other requests.

The REST spans have the following attributes:

|Attribute|Description|
|---|---|
|`http.request.method`|HTTP method|
|`url.path`, `url.scheme`|Path and scheme of the request|
|`client.address`|Address of the client|
|`user_agent.original`|User agent of the client|
|`http.response.status_code`|Status of the response|
|`http.request.header.<name>`|Headers of the request, with the credentials masked as in the [HTTP debug log](debugLogFiles.md#httpdebuglogtxt)|

The text bodies of the request and of the response (up to 64K characters) are recorded only when the `httpBodies` property of the configuration is **True**, and never for the requests whose bodies contain credentials.

The span is marked as error when the response status is 5xx.

The request span is the current span of the process that runs the request (REST function, `4DACTION` method, `On Web Connection`...): the method, database, and network spans of the request are its descendants.

## Trace context

4D follows the [W3C Trace Context](https://www.w3.org/TR/trace-context/) standard, so that a trace can go through several services.

**Incoming requests**: when a REST or web request has a valid `traceparent` header, its span has the trace ID of the header and is a child of the caller's span. The `tracestate` header is kept with the trace. A request without `traceparent`, or with an invalid one, starts a new trace, and is answered as if the header was not there. With the `rest` category off, the operations of the request still join the caller's trace.

**Outgoing HTTP calls**: when the connector runs and a span is current, 4D adds the `traceparent` header (with the ID of the HTTP call's span, or of the current span when the `network` category is off) and the `tracestate` header received with the request, to the requests sent by [`HTTP Request`](../commands/http-request), [`HTTP Get`](../commands/http-get), and [`4D.HTTPRequest`](../API/HTTPRequestClass.md). The called service can then add its spans to the same trace.

- If the code sets a `traceparent` header itself, 4D sends it unchanged.
- When the connector is stopped, 4D adds no header.
- The requests that the connector sends to the collector are never traced and never carry these headers.

## Sampling

By default, every trace is recorded. To reduce the volume of data, set the `samplingRatio` property of the configuration: for example, with 0.25, about a quarter of the new traces are recorded, and the others are not recorded at all.

When a trace comes from another service with a `traceparent` header, the sampled flag of the header decides, whatever the ratio: the trace is recorded if the caller recorded it.

A trace is always complete: when it is recorded, all its spans are recorded.

## Service name

The monitoring tool shows the spans under the `service.name` resource attribute. Its value is, in this order:

1. the `serviceName` property of the configuration,
2. the `OTEL_SERVICE_NAME` environment variable,
3. the name of the built application,
4. the name of the project.

You can add other resource attributes, such as `deployment.environment`, with the `resourceAttributes` property of the configuration.

## Exporters

The `exporter` property of the configuration sets where the spans go:

- `"otlp"` (default): the spans are sent with OTLP over HTTP, in binary Protobuf format, with a `POST` request to `<endpoint>/v1/traces`. The HTTP headers of the `headers` property are added to the requests, for example to authenticate with the collector. The requests use the HTTP client and the TLS settings of 4D.
- `"file"`: the spans are written in the `OpenTelemetryTraces.jsonl` file of the [Logs folder](../Project/architecture.md#logs), one OTLP JSON object per line. Use it to try the connector without a collector. Past 10 MB, the file is renamed `OpenTelemetryTraces_<n>.jsonl` and a new file is started; the oldest files are deleted as for the other log files.

```4d
// writes the spans in Logs/OpenTelemetryTraces.jsonl
var $result : Object:=OpenTelemetry.start({exporter: "file"; categories: {methods: True}})
```

The spans are queued in memory and sent in batches by a background process named `OpenTelemetry`. 4D never waits for the collector, and the code gets no error when it is slow or unreachable: when the queue is full, new spans are dropped. The errors of the connector (dropped spans, failed exports) are written in the [diagnostic log](debugLogFiles.md#4ddiagnosticlogtxt), prefixed with `OpenTelemetry:`.

When the connector stops, or when 4D quits, the pending spans are sent within 10 seconds.

## Starting the connector at startup

You can start the connector before any code runs, without changing the code, with the `logConfig.json` file or with environment variables. The connector then also traces the `On Startup` or `On Server Startup` database method. The startup settings are ignored on a remote 4D.

### logConfig.json

Add an `openTelemetry` section to the [log configuration file](debugLogFiles.md#using-a-log-configuration-file). It contains a `state` property (1 to start the connector, 0 to stop it if the file started it) and the properties of the [configuration object](#starting-the-connector-by-code):

```json
{
	"openTelemetry": {
		"state": 1,
		"endpoint": "http://collector.example.com:4318",
		"serviceName": "Invoices",
		"categories": {
			"rest": true,
			"database": true,
			"clientServer": true
		}
	}
}
```

The file is applied when 4D or 4D Server starts, and on 4D Server when you click the [Load logs configuration file](../ServerWindow/maintenance.md#load-logs-configuration-file) button of the Maintenance page. If a value is wrong (for example a `samplingRatio` of 2), the connector does not start and the error is written in the [diagnostic log](debugLogFiles.md#4ddiagnosticlogtxt).

### Environment variables

4D reads the following standard OpenTelemetry environment variables at startup:

|Variable|Description|
|---|---|
|`OTEL_EXPORTER_OTLP_ENDPOINT`|Address of the collector (`endpoint`). 4D sends the spans to `<address>/v1/traces`|
|`OTEL_EXPORTER_OTLP_TRACES_ENDPOINT`|Full URL to which the spans are sent|
|`OTEL_EXPORTER_OTLP_HEADERS`|HTTP headers sent to the collector, in the `key1=value1,key2=value2` format (URL-encoded keys and values)|
|`OTEL_SERVICE_NAME`|Name of the service|
|`OTEL_TRACES_SAMPLER_ARG`|Sampling ratio, from 0 to 1. An invalid value is ignored, with a warning in the diagnostic log|
|`OTEL_SDK_DISABLED`|`true` prevents the startup activation by the file and by the variables|

The connector starts when one of the endpoint variables is set, or when the `openTelemetry` section of `logConfig.json` has `state` 1. When only the variables start it, all the categories are on. When both are used, a variable wins over the same setting of the file.

### Precedence with the code

Calls by code win over the startup settings: [`.start()`](../API/OpenTelemetryClass.md#start) replaces the configuration, and [`.stop()`](../API/OpenTelemetryClass.md#stop) stops the connector. `OTEL_SDK_DISABLED` does not prevent the calls by code.

If `logConfig.json` has an `openTelemetry` section and `"forceConfiguration": true`, calls by code are ignored: `.start()` returns `success` **False** with an error, and `.stop()` does nothing.

## Custom spans and attributes

Your code can create its own spans with [`OpenTelemetry.startSpan()`](../API/OpenTelemetryClass.md#startspan), end them with [`.end()`](../API/SpanClass.md#end), and add attributes to the current span with [`OpenTelemetry.setAttributes()`](../API/OpenTelemetryClass.md#setattributes), for example a customer ID. When the connector is stopped, these functions do nothing and raise no error.

```4d
OpenTelemetry.setAttributes({customerID: $customerID})
var $span : 4D.Span:=OpenTelemetry.startSpan("invoice")
// ... code that creates the invoice
$span.end()
```

## See also

- [`OpenTelemetry`](../commands/opentelemetry) command
- [OpenTelemetry class](../API/OpenTelemetryClass.md)
- [Span class](../API/SpanClass.md)
- [Log files](debugLogFiles.md)
