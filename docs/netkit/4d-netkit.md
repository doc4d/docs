---
id: netkit
title: netkit
---

# 4D NetKit

## Overview
4D NetKit is a built-in 4D component that allows you to interact with third-party web services and their APIs, such as [Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview).

## Table of contents

* [OAuth2Provider class](#oauth2provider)
* [Office365Provider class](#office365provider)
* [Tutorial : Authenticate to the Microsoft Graph API in service mode](#authenticate-to-the-microsoft-graph-api-with-4d-netkit-in-service-mode)
* [Tutorial : Authenticate to the Microsoft Graph API in signedIn mode (4D NetKit), then send an email (SMTP Transporter class)](#authenticate-to-the-microsoft-graph-api-in-signedin-mode-and-send-an-email-with-smtp)

## OAuth2Provider

The `OAuth2Provider` class allows you to request authentication tokens to third-party web services providers in order to use their APIs in your application. This is done in two steps:

1. Using the `New OAuth2 provider` component method, you instantiate an object of the `OAuth2Provider` class that holds authentication information.
2. You call the `OAuth2ProviderObject.getToken()` class function to retrieve a token from the web service provider.

Here's a diagram of the authorization process:
![authorization-flow](Documentation/Assets/authorization.png)

This class can be instantiated in two ways: 
* by calling the `New OAuth2 provider` method 
* by calling the `cs.NetKit.OAuth2Provider.new()` function 

### **New OAuth2 provider**

**New OAuth2 provider**( *paramObj* : Object ) : cs.NetKit.OAuth2Provider

#### Parameters 
|Parameter|Type||Description|
|---------|--- |:---:|------|
|paramObj|Object|->| Determines the properties of the object to be returned |
|Result|cs.NetKit.OAuth2Provider|<-| Object of the OAuth2Provider class

#### Description

`New OAuth2 provider` instantiates an object of the `OAuth2Provider` class.

In `paramObj`, pass an object that contains authentication information.

The returned object's properties correspond to those of the `paramObj` object passed as a parameter. 

The available properties of `paramObj` are:

|Parameter|Type|Description|Can be Null or undefined|
|---------|--- |------|------|
| name | text | Name of the provider. Currently, the only provider available is "Microsoft". |No
| permission | text | <ul><li> "signedIn": Azure AD will sign in the user and ensure they gave their consent for the permissions your app requests (opens a web browser).</li><li>"service": the app calls Microsoft Graph [with its own identity](https://docs.microsoft.com/en-us/graph/auth-v2-service) (access without a user).</li></ul>|No
| clientId | text | The client ID assigned to the app by the registration portal.|No
| redirectURI | text | (Not used in service mode) The redirect_uri of your app, the location where the authorization server sends the user once the app has been successfully authorized. When you call the `.getToken()` class function, a web server included in 4D NetKit is started on the port specified in this parameter to intercept the provider's authorization response.|No in signedIn mode, Yes in service mode
| scope | text or collection | Text: A space-separated list of the Microsoft Graph permissions that you want the user to consent to.</br> Collection: Collection of Microsoft Graph permissions. |No
| tenant | text | The {tenant} value in the path of the request can be used to control who can sign into the application. The allowed values are: <ul><li>"common" for both Microsoft accounts and work or school accounts </li><li>"organizations" for work or school accounts only </li><li>"consumers" for Microsoft accounts only</li><li>tenant identifiers such as tenant ID or domain name.</li></ul> Default is "common". |Yes
| authenticateURI | text | Uri used to do the Authorization request. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize". |Yes
| tokenURI | text | Uri used to request an access token. By default: "https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token". |Yes
| clientSecret | text | The application secret that you created for your app in the app registration portal. Required for web apps. |Yes
| token | object | If this property exists, the `getToken()` function uses this token object to calculate which request must be sent. It is automatically updated with the token received by the `getToken()` function.   |Yes
| timeout|real| Waiting time in seconds (by default 120s).|Yes

### OAuth2ProviderObject.getToken()

**OAuth2ProviderObject.getToken()** : Object

|Parameter|Type||Description|
|---------|--- |------|------|
|Result|Object|<-| Object that holds information on the token retrieved


#### Description 

`.getToken()` returns an object that contains a `token` property (as defined by the [IETF](https://datatracker.ietf.org/doc/html/rfc6749#section-5.1)), as well as optional additional information returned by the server:

Property|Object properties|Type|Description |
|--- |---------| --- |------|
|token||Object| Token returned |
|| expires_in | Text | How long the access token is valid (in seconds). |
|| access_token |Ttext | The requested access token. |
|| refresh_token | Text | Your app can use this token to acquire additional access tokens after the current access token expires. Refresh tokens are long-lived, and can be used to retain access to resources for extended periods of time. Available only if the value of the `permission` property is "signedIn". |
|| token_type | Text | Indicates the token type value. The only token type that Azure AD supports is "Bearer". |
||scope|Text| A space separated list of the Microsoft Graph permissions that the access_token is valid for.|
|tokenExpiration || Text | Timestamp (ISO 8601 UTC) that indicates the expiration time of the token|

If the value of `token` is empty, the command sends a request for a new token.

If the token has expired: 
*   If the token object has the `refresh_token` property, the command sends a new request to refresh the token and returns it.
*   If the token object does not have the `refresh_token` property, the command automatically sends a request for a new token. 

When requesting access on behalf of a user ("signedIn" mode) the command opens a web browser to request authorization.

In "signedIn" mode, when `.getToken()` is called, a web server included in 4D NetKit starts automatically on the port specified in the [redirectURI parameter](#description) to intercept the provider's authorization response and display in the browser.

## Office365Provider

The `Office365Provider` class allows you to get information from Office365 applications, such as user information, after a valid token request (see [OAuth2Provider object](#new-auth2-provider)).

This class can be instantiated in two ways: 
* by calling the `New Office365 provider` method 
* by calling the `cs.NetKit.Office365Provider.new()` function 

### **New Office365 provider**

**New Office365 provider**( *paramObj* : Object { ; options : Object } ) : cs.NetKit.Office365Provider

#### Parameters 
|Parameter|Type||Description|
|---------|--- |:---:|------|
|paramObj|cs.NetKit.OAuth2Provider|->| Object of the OAuth2Provider class  |
|options|Object|->| Additional options |
|Result|cs.NetKit.Office365Provider|<-| Object of the Office365Provider class|

#### Description

`New Office365 provider` instantiates an object of the `Office365Provider` class.

In `paramObj`, pass an [OAuth2Provider object](#new-auth2-provider).

In `options`, pass an object that specifies the following options:

|Property|Type|Description|
|---------|---|------|
|mailType|Text|Indicates the Mail type used to send or receive emails. Possible types are: <ul><li>MIME</li><li>JMAP</li><li>Microsoft (default)</li></ul>  |

The returned object can be used with the `Office365Provider` class functions to retrieve information on users. That information varies depending on the information set in the `OAuth2Provider` object.

The returned object has a `mailer` property that has functions and properties related to emails:
|Property|Type|Description|
|---------|---|------|
|type|Text|Indicates the Mail type used to send or receive emails. Possible types are: <ul><li>MIME</li><li>JMAP</li><li>Microsoft (default)</li></ul>|
|userId|Text|User identifier used to identify the user in Service mode. Can be the "id" or the "userPrincipalName"|
|send()|Function|Sends the email passed as a parameter|

### Office365Provider.user.get()

**Office365Provider.user.get**( *id* : Text { ; *select* : Text }) : Object<br/>**Office365Provider.user.get**( *userPrincipalName* : Text { ; *select* : Text }) : Object

#### Parameters 
|Parameter|Type||Description|
|---------|--- |:---:|------|
|id|Text|->| Unique identifier of the user to search for |
|userPrincipalName|Text|->| User principal name (UPN) of the user to search for|
|select|Text|->| Set of properties to be returned|
|Result|Object|<-| Object holding information on the user|

#### Description

`Office365Provider.user.get()` returns information on the user whose ID matches the *id* parameter, or whose User Principal Name (UPN) matches the *userPrincipalName* parameter. 

> The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, it should correspond to the user's email name.

If the ID or UPN is not found or connection fails, the command returns an object with `Null` as a value and throws an error.

In *select*, you can pass a string that contains a specific set of properties you want to retrieve. Each property must be separated by a comma (,). If the select parameter is omitted, the function returns an object with a predefined set of properties (see below).

> The list of available properties is available on [Microsoft's documentation website](https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0).

#### Returned object

By default, if the *select* parameter is omitted, the command returns an object with the following properties:

| Property | Type | Description
|---|---|---|
id | Text | Unique identifier for the user    
businessPhones | Collection | The user's phone numbers.
displayName | Text | Name displayed in the address book for the user.|
givenName | Text | The user's first name.
jobTitle | Text | The user's job title.
mail | Text | The user's email address.
mobilePhone | Text | The user's cellphone number.
officeLocation | Text | The user's physical office location.
preferredLanguage | Text | The user's language of preference.
surname | Text | The user's last name.
userPrincipalName | Text | The user's principal name.

Otherwise, the object contains the properties specified in the `select` parameter.

For more details on user information, see [Microsoft's documentation website](https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0).

### Office365Provider.user.getCurrent()

**Office365Provider.user.getCurrent**({*select* : Text}) : Object

#### Description

`Office365Provider.user.getCurrent()` returns information on the current user. In this case, it requires a [signed-in user](https://docs.microsoft.com/en-us/graph/auth-v2-user), and therefore a delegated permission.

The command returns a `Null` object if the session is not a sign-in session.

In *select*, pass a string that contains a set of properties you want to retrieve. Each property must be separated by a comma (,).

By default, if the *select* parameter is not defined, the command returns an object with a default set of properties (see the [property table](#returned-object)).

#### Example 

To retrieve information from the current user:

```4d
var $userInfo; $params : Object
var $oAuth2 : cs.NetKit.OAuth2Provider
var $Office365 : cs.NetKit.Office365Provider

// Set up parameters: 
$params:=New object
$params.name:="Microsoft"
$params.permission:="signedIn"
$params.clientId:="your-client-id" // Replace with your Microsoft identity platform client ID
$params.redirectURI:="http://127.0.0.1:50993/authorize/"
$param.scope:="https://graph.microsoft.com/.default"

$oAuth2:=New Oauth2 provider($params) //Creates an OAuth2Provider Object

$Office365:=New Office365 provider($oAuth2) // Creates an Office365Provider object

// Return the properties specified in the parameter.
$userInfo:=$Office365.user.getCurrent("id,userPrincipalName,\
principalName,displayName,givenName,mail") 
```

### Office365Provider.user.list()

**Office365Provider.user.list**({*options*: Object}) : Object

#### Parameters 
|Parameter|Type||Description|
|---------|--- |:---:|------|
|options|Object|->| Additional options for the search|
|result|Object|<-| Object holding a collection of users and additional info on the request|

#### Description

`Office365Provider.user.list()` returns a list of Office365 users. 

In *options*, you can pass an object to specify additional search options. The following table groups the available search options: 

| Property | Type | Description |
|---|---|---|
| search | Text | Restricts the results of a request to match a search criterion. The search syntax rules are available on [Microsoft's documentation website](https://docs.microsoft.com/en-us/graph/search-query-parameter#using-search-on-directory-object-collections).|
| filter | Text | Allows retrieving just a subset of users. See [Microsoft's documentation on filter parameter](https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter). | 
| select | Text | Set of properties to retrieve. Each property must be separated by a comma (,). By default, if `select` is not defined, the returned user objects have a [default set of properties](#returned-object)|
|top| Integer | Defines the page size for a request. Maximum value is 999. If `top` is not defined, the default value is applied (100). When a result set spans multiple pages, you can use the `.next()` function to ask for the next page. See [Microsoft's documentation on paging](https://docs.microsoft.com/en-us/graph/paging) for more information. |
|orderBy| Text | Defines how the returned items are ordered. By default, they are arranged in ascending order. The syntax is "fieldname asc" or "fieldname desc". Replace "fieldname" with the name of the field to be arranged.  | 

#### Returned object 

The returned object holds a collection of users as well as status properties and functions that allow you to navigate between different pages of results. 

By default, each user object in the collection has the [default set of properties listed in the `Office365Provider.user.get()` function](#returned-object). This set of properties can be customized using the `select` parameter.

| Property | Type | Description | 
|---|---|---|
| errors |  Collection | Collection of 4D error items (not returned if an Office 365 server response is received): <ul><li>[].errcode is the 4D error code number</li><li>[].message is a description of the 4D error</li><li>[].componentSignature is the signature of the internal component that returned the error</li></ul>|
| isLastPage |  Boolean | `True` if the last page is reached |
| page |  Integer | User information page number. Starts at 1. By default, each page holds 100 results. Page size limit can be set in the `top` option. |
| next() |  Function | Function that updates the `users` collection with the next user information page and increases the `page` property by 1. Returns a boolean value: <ul><li>If a next page is successfully loaded, returns `True`</li><li>If no next page is returned, the `users` collection is not updated and `False` is returned</li></ul>  |
| previous() |  Function | Function that updates the `users` collection with the previous user information page and decreases the `page` property by 1. Returns a boolean value: <ul><li>If a previous page is successfully loaded, returns `True`</li><li>If no previous `page` is returned, the `users` collection is not updated and `False` is returned</li></ul>  |
| statusText |  Text | Status message returned by the Office 365 server, or last error returned in the 4D error stack |
| success |  Boolean | `True` if the `Office365Provider.user.list()` operation is successful, `False` otherwise |
| users | Collection | Collection of objects with information on users.| 


#### Example

```4d
var $oAuth2 : cs.NetKit.OAuth2Provider
$Office365 : cs.NetKit.Office365Provider
$userInfo; $params; $userList; $userList2; $userList3; $userList4 : Object
var $col : Collection

// Set up parameters: 
$params:=New object
$params.name:="Microsoft"
$params.permission:="signedIn"
$params.clientId:="your-client-id" // Replace with your Microsoft identity platform client ID
$params.redirectURI:="http://127.0.0.1:50993/authorize/"
$params.scope:="https://graph.microsoft.com/.default"

// Create an OAuth2Provider Object
$oAuth2:=New OAuth2 provider($params) 

// Create an Office365Provider object
$Office365:=New Office365 provider($oAuth2) 

// Return a list with the first 100 users
$informationList1:=$Office365.user.list() 

// Return a list of users whose displayName is Jean
$userList2:=$Office365.user.list(New object("filter"; "startswith(displayName,'Jean')"))

// return a list of users whose display names contain "F" and arrange it in descending order.
$userList3:=$Office365.user.list(New object("search"; "\"displayName:F\""; "orderBy"; "displayName desc"; "select"; "displayName"))

// Create a list filled with all the userPrincipalName 
$userList4:=$Office365.user.list(New object("select"; "userPrincipalName"))
$col:=New collection
Repeat 
    $col.combine($userList4.users)
Until (Not($userList4.next()))
```

## Tutorials

### Authenticate to the Microsoft Graph API in service mode

#### Objectives

Establish a connection to the Microsoft Graph API in service mode.

#### Prerequisites

* You have registered an application with the [Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) and obtained your application ID (also called client ID) and client secret.

> Here, the term "application" does not refer to an application built in 4D. It refers to an entry point you create on the Azure portal. You use the generated client ID to tell your 4D application to trust the Microsoft identity platform.

#### Steps

Once you have your client ID and client secret, you're ready to establish a connection to your Azure application.

1. Open your 4D application, create a method and insert the following code:

```4d
var $oAuth2 : cs.NetKit.OAuth2Provider
var $token : Object

$param:=New object()
$param.name:="Microsoft"
$param.permission:="service"

$param.clientId:="your-client-id" // Replace with your Microsoft identity platform client ID
$param.clientSecret:="your-client-secret" // Replace with your client secret
$param.tenant:="your-tenant-id" // Replace with your tenant ID
$param.tokenURI:="https://login.microsoftonline.com/your-tenant-id/oauth2/v2.0/token/" //Replace ID
$param.scope:="https://graph.microsoft.com/.default"

$oAuth2:=New OAuth2 provider($param)

$token:=$oAuth2.getToken()
```

2. Execute the method to establish the connection.

### Authenticate to the Microsoft Graph API in signedIn mode and send an email with SMTP

#### Objectives 

Establish a connection to the Microsoft Graph API in signedIn mode, and send an email using the [SMTP Transporter class](http://developer.4d.com/docs/fr/API/SMTPTransporterClass.html).

In this example, we get access [on behalf of a user](https://docs.microsoft.com/en-us/graph/auth-v2-user).

#### Prerequisites

* You have registered an application with the [Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) and obtained your application ID (also called client ID).

> Here, the term "application" does not refer to an application built in 4D. It refers to an entry point you create on the Azure portal. You use the generated client ID to tell your 4D application to trust the Microsoft identity platform.

* You have a Microsoft e-mail account. For example, you signed up for an e-mail account with Microsoft's webmail services designated domains (@hotmail.com, @outlook.com, etc.).

#### Steps

Once you have your client ID, you're ready to establish a connection to your Azure application and send an email:

1. Open your 4D application, create a method and insert the following code:

```4d
var $token; $param; $email : Object
var $oAuth2 : cs.NetKit.OAuth2Provider
var $address : Text

// Configure authentication

$param:=New object
$param.name:="Microsoft"
$param.permission:="signedIn"
$param.clientId:="your-client-id" // Replace with your Microsoft identity platform client ID
$param.redirectURI:="http://127.0.0.1:50993/authorize/"
$param.scope:="https://outlook.office.com/SMTP.Send" // Get consent for sending an smtp email

// Instantiate an object of the OAuth2Provider class
$oAuth2:=New OAuth2 provider($param)

// Request a token using the class function

// Send a token request and start the a web server on the port specified in $param.redirectURI 
//to intercept the authorization response
$token:=$oAuth2.getToken() 

// Set the email address for SMTP configuration 
$address:= "email-sender-address@outlook.fr" // Replace with your Microsoft email account address

// Set the email's content and metadata
$email:=New object
$email.subject:="My first mail"
$email.from:=$address
$email.to:="email-recipient-address@outlook.fr" // Replace with the recipient's email address
$email.textBody:="Test mail \r\n This is just a test e-mail \r\n Please ignore it"

// Configure the SMTP connection
$parameters:=New object
$parameters.accessTokenOAuth2:=$token
$parameters.authenticationMode:=SMTP authentication OAUTH2
$parameters.host:="smtp.office365.com"
$parameters.user:=$address

// Send the email 

$smtp:=SMTP New transporter($parameters)
$statusSend:=$smtp.send($email)

```

2. Execute the method. Your browser opens a page that allows you to authenticate.

3. Log in to your Microsoft Outlook account and check that you've received the email.
