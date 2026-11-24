---
id: SpanClass
title: Span
---

The `Span` class lets your code end a custom span of the [OpenTelemetry connector](../Debugging/opentelemetry.md) and add attributes to it.

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Class added|

</details>

### Span Object

`Span` objects are returned by the [`OpenTelemetry.startSpan()`](OpenTelemetryClass.md#startspan) function.

A span is one timed operation of a trace. A custom span starts when it is created and lasts until its [`.end()`](#end) function is called. Until then, it is the current span of the process: the spans created meanwhile in the process (methods, commands, database calls...) are its children.

If the `Span` object is released before `.end()` is called (for example when the variable that holds it is cleared at the end of the method), the span is ended at that moment.

When the connector is stopped, `.startSpan()` returns an inert `Span` object: its functions do nothing and raise no error.

### Summary

||
|---|
|[<!-- INCLUDE #SpanClass.end().Syntax -->](#end)<br/><!-- INCLUDE #SpanClass.end().Summary -->|
|[<!-- INCLUDE #SpanClass.setAttributes().Syntax -->](#setattributes)<br/><!-- INCLUDE #SpanClass.setAttributes().Summary -->|



<!-- REF span.end().Desc -->
## .end()

<!-- REF #SpanClass.end().Syntax -->**.end**()<!-- END REF -->

#### Description

The `.end()` function <!-- REF #SpanClass.end().Summary -->ends the span<!-- END REF -->. The span is then sent with the other spans, and the span that was current before it was created becomes the current span of the process again.

Calling `.end()` on a span that is already ended does nothing.

#### Example

You measure the time spent to compute a report:

```4d
var $span : 4D.Span:=OpenTelemetry.startSpan("monthly report")
// ... code that computes the report
$span.end()
$span.end() // does nothing: the span is already ended
```

<!-- END REF -->


<!-- REF span.setAttributes().Desc -->
## .setAttributes()

<!-- REF #SpanClass.setAttributes().Syntax -->**.setAttributes**( *attributes* : Object )<!-- END REF -->

<!-- REF #SpanClass.setAttributes().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|attributes|Object|&#8594;|Attributes to add to the span|
</div>
<!-- END REF -->

#### Description

The `.setAttributes()` function <!-- REF #SpanClass.setAttributes().Summary -->adds *attributes* to the span<!-- END REF -->.

In *attributes*, pass an object with one property per attribute. The property name is the attribute name. Its value can be a Text, a Number, a Boolean, or a collection of values of one of these types. Integer numbers are sent as integers. Any other value is sent as its JSON text. An attribute that already exists is replaced.

Unlike [`OpenTelemetry.setAttributes()`](OpenTelemetryClass.md#setattributes), which applies to the current span of the process, this function applies to the span on which it is called, even if it is not the current span.

#### Example

You add the number of imported lines to the span once the import is done:

```4d
var $span : 4D.Span:=OpenTelemetry.startSpan("import"; {file: $file.name})
var $count : Integer
// ... code that imports the file and counts the lines in $count
$span.setAttributes({lines: $count; complete: True})
$span.end()
```

<!-- END REF -->
