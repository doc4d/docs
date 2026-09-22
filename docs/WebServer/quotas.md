---
id: quotas
title: Web server quotas
---

Web server quotas let you limit traffic, request counts, sessions, and REST entity sets. Quotas can be configured at the server-global level, for all sessions combined, or at the session-default level, for each new session.

## Requirements

Quota configuration requires [scalable sessions](./sessions.md#enabling-web-sessions) to be enabled.

## How to configure quotas

### At startup

You can configure quotas using the `quotas` property in the `settings` object passed to the [`start()`](../API/WebServerClass.md#start) function. For example:

```4d
var $quotas : Object

$quotas:={}
$quotas.inBytesPerMin:=20000000

WEB Server().start({quotas: $quotas})
```

You can also load quotas for the main Web server from a **QuotaManager.json** file stored in the [`Project/Sources`](../Project/architecture.md#sources) folder. The file must contain a JSON object whose properties are quota property names:

```json title="/Project/Sources/QuotaManager.json"
{
    "inBytesPerHour": 100000000,
    "inBytesPerHourPerSession": 10000000,
    "nbRequestsPerMin": 1000,
    "nbRequestsPerMinPerSession": 100
}
```

See the [`4D.QuotaManager` class](../API/QuotaManagerClass.md) for the complete list of quota properties.

When both a valid `settings.quotas` property and a **QuotaManager.json** file are provided, the `settings.quotas` configuration takes priority.

If the **QuotaManager.json** file contains malformed JSON, the Web server does not start and returns error **551 - JSON malformed**.

### At runtime

For a running Web server, you can update quotas through the [`.quotas`](../API/WebServerClass.md#quotas) property. Changes are applied to subsequent Web server activity; session-default quotas apply to new sessions created after the quota value is updated.

```4d
WEB Server().quotas.inBytesPerMin:=20000000
```

### Concrete example

The following example configures quotas for an internal application used by approximately 20 people with occasional usage:

```4d
var $quotas : Object

$quotas:={}

// Maximum number of input bytes accepted in a one-minute time window on the web server
$quotas.inBytesPerMin:=20000000

// Maximum number of output bytes sent in a one-minute time window for a session
$quotas.outBytesPerMinPerSession:=10000000

// Maximum number of active sessions on the web server
$quotas.nbSessions:=50

// Maximum number of unauthenticated sessions on the web server
$quotas.nbGuestSessions:=10

// Maximum number of requests accepted in a one-minute time window on the web server
$quotas.nbRequestsPerMin:=500

// Maximum number of requests accepted in a one-hour time window on the web server
$quotas.nbRequestsPerHour:=20000

WEB Server().start({quotas: $quotas})
```

## Quota enforcement

For each incoming request, the Web server checks quotas during preprocessing, before the [`On Web Connection`](./httpRequests.md#on-web-connection) database method is called:

1. If a session-default quota is configured, it is checked first.
2. If the request is accepted, the server-global quota is checked.
3. The request is processed only if both checks accept it.

If either quota is reached, the request is rejected with an **HTTP 429 Too Many Requests** response. No web process is created and [`On Web Connection`](./httpRequests.md#on-web-connection) is not called.

If an output byte quota is reached while a response is being sent, the current request is interrupted. The preprocessing rules above apply to the next request in the same time window.


### Rate limiting responses

Rate-limiting quotas use fixed time windows. When a quota is reached, subsequent requests are rejected until the current one-minute or one-hour window ends. The  **HTTP 429 Too Many Requests** response includes a `Retry-After` header containing the time to wait before sending another request.

When one of concurrent quotas (`nbSessions`, `nbGuestSessions`, and `nbEntitySetsPerSession`) is reached, the response includes an empty `Retry-After` header until the quota is no longer reached.

The input byte quotas apply to all data received for a request, including its headers and body. The output byte quotas are evaluated against the uncompressed response size, regardless of the Web server compression settings.

:::note

For cross-origin requests, the `Retry-After` header is exposed through the `Access-Control-Expose-Headers` response header when [CORS](./webServerConfig.md#enable-cors-service) is enabled.

:::

## Quota values

Quota limits must be positive integers. An *Undefined* value means that the quota is not configured and is not enforced. Values less than or equal to zero or values that are not integers are treated as *Undefined*.

Quota counters are stored in memory for each 4D Server instance and are not shared between multiple server instances.

## Component Web servers

The same quota configuration and enforcement rules apply to component Web servers as to the host project's Web server. Quotas configured for a component Web server apply only to that server and are independent of the quotas configured for the host Web server or other component Web servers.

The **QuotaManager.json** configuration file applies only to the main Web server. Component Web servers must be configured with `settings.quotas` at startup or the [`.quotas`](../API/WebServerClass.md#quotas) property at runtime.