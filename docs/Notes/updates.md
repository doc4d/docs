---
id: updates
title: Documentation updates
---

The list of main updates in this documentation. For general information about new features in the 4D products, see the **release notes** on [doc.4d.com](https://doc.4d.com). 


## 4D v19 R5

- New 4D View pro commands added: [VP SET DATA CONTEXT](ViewPro/method-list.md#vp-set-data-context), [VP Get data context](ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](ViewPro/method-list.md#vp-get-binding-path). The contents of a data context can be exported as cell values using a new option in [VP EXPORT DOCUMENT](ViewPro/method-list.md#vp-get-binding-path) and [VP Export to object](ViewPro/method-list.md#vp-get-binding-path).

- The project [directory.json file](../Users/handling_users_groups.md#directoryjson-file) can now be [embedded in the server](Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.

- For Client/Server configurations, new [class functions](../ORDA/remoteDatastores.md#clientserver-optimization) are available, allowing you to handle optimization contexts as well as the ORDA cache. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#preconfiguring-contexts) for more information. 
    > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.

- The [DataClass class](../API/DataClassClass.md) has a new [.getCount()](../API/DataClassClass.md#getcount) function that returns the number of entities in a dataclass.



## 4D v19 R4

- [Alias attributes](ORDA/ordaClasses.md#alias-attributes) are available in ORDA classes.
- Support for [break and continue](Concepts/cf_looping.md#break-and-continue) statements in loops.
- Support for [return](Concepts/flow-control.md#return-expression) statement and [return expression](Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](Concepts/operators.md#compound-assignment-operators), [short-circuit operators](Concepts/operators.md#short-circuit-operators), and [ternary operator](Concepts/operators.md#ternary-operator)
- The [Code Editor](code-editor/navigation.md) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](REST/$lock.md) entities.   
- [4D View Pro](ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list.md#vp-paste-from-object).
- New [SystemWorker class](API/SystemWorkerClass.md).


## 4D v19 R3
 
- [Computed properties](Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](ORDA/ordaClasses.md#function-query-attributename) and [orderBy](ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](API/DataClassAttributeClass.md#exposed) and [`readOnly`](API/DataClassAttributeClass.md#readonly).
- [ZIP archives](API/ZipArchiveClass.md#zip-create-archive) now supports *LZMA* and *xz* compression algorithms. 
- A [new build option](Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows. 
- Extended [support of dark mode](Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](Concepts/parameters.md#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](WebServer/sessions.md#preemptive-mode). 
- The new [4D NetKit](Extensions/overview.md#list-of-4d-components) component allows you to connect to third-party APIs such as Microsoft Graph.


## 4D v19 R2
 
- A [default .gitignore file](Preferences/general.md#create-gitignore-file) can be created with new projects
- New [Blob class API](API/BlobClass.md) to handle new [`4D.Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](API/FileClass.md#settext)


## 4D v19
 
- [IMAPTransporter Class](API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](WebServer/webServerConfig.md#session-cookie-samesite) setting. 
- Dark and light color scheme support for [forms](FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](FormEditor/createStylesheet.md#media-queries)
- New default dark and light themes in [method editor preferences](Preferences/methods.md#theme-list). 
- [Native compilation](Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](Admin/cli.md) page.



## 4D v18 R6
 
- [Entity Selection Class](API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](Admin/webAdmin.md) web server component
- New [DataExplorer](Admin/dataExplorer) interface
- New web [user sessions](WebServer/sessions.md) and [their API](API/SessionClass.md).