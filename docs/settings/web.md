---
id: web
title: Web page
---

 [Symbol file](../Project/compiler.md#symbol-file)

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.html) . For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## Configuration 

### Publishing Information

#### Launch Web Server at Startup  

Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the [Web server administration](../WebServer/webServerAdmin.html#starting-the-4d-web-server) section.

#### HTTP Port  

By default, 4D publishes a Web database on the standard TCP/IP (HTTP) port, which is port 80. If that port is already used by another Web service, you need to change the port used by 4D for this database. Modifying the HTTP port allows you to start the 4D Web server under macOS without being the root user of the machine (see [Web server configuration](../WebServer/webServerConfig.html#http-port)).

To do so, go to the **HTTP Port** enterable area and indicate an appropriate value (a HTTP port not already used by another TCP/IP service running on the same machine).

> **Note:** If you specify 0, 4D will use the default HTTP port 80.

From a Web browser, you need to include that non-default HTTP port number into the address you enter for connecting to the Web database. The address must have a suffix consisting of a colon followed by the port number. For example, if you are using the HTTP port number 8080, you will specify "123.4.567.89:8080".

#### Defining the IP Address for the HTTP Requests  

You can define the IP address on which the Web server must receive HTTP requests.

By default, the server responds to all IP addresses (**Any** option), including IPv4 and IPv6 addresses. 

The drop-down list automatically lists all available IPv4 addresses on the machine. When you select a specific address, the server only responds to requests sent to this address. This feature is for 4D Web Servers located on machines with multiple TCP/IP addresses. It is, for example, frequently the case of most Internet host providers.

> **Note:** For clarity, IPv6 addresses are not listed in the IP address drop-down list. If you need to filter IPv6 addresses, it is recommended to configure appropriately the firewall settings of the system.

Implementing a MultiHoming system requires specific configurations on the Web server machine:

-   **Installing secondary IP addresses on Mac OS**

To configure a MultiHoming system on Mac OS:

1.  Open the **TCP/IP** Control Panel.
2.  Select the **Manually** option from the **Configuration** pop up menu.
3.  Create a text file called "Secondary IP Addresses" and save it in the Preferences subfolder of your System folder.\
    Each line of the "Secondary IP Addresses" file should contain a secondary IP address and an optional subnet mask and router address for the secondary IP address.

Please check the Apple documentation for more information.

-   **Installing secondary IP addresses on Windows**

To configure a MultiHoming system on Windows:

1.  Select the following sequences of commands (or their equivalents according to your version of Windows):\
    **Start** menu > **Control Panel** > **Network and Internet Connections** > **Network connections** > **Local Area Connection** (Properties) >** Internet Protocol (TCP/IP)** > **Properties** button > **Advanced...** button. The "Advanced TCP/IP Settings" dialog is displayed.
2.  Click the **Add...**. button in the "IP Addresses" area, and add additional IP addresses.

You can define up to 5 different IP addresses. You may need to consult your systems administrator in order to do so.

#### Enable HTTPS  

Indicates whether or not the Web server will accept secure connections. This option is described in the [WEB SERVICE SET PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page777.html) section.

#### HTTPS Port  

Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). By default, the HTTPS port number is set to 443 (standard value).\
You may consider changing this port number for two main reasons:

-   for security reasons --- hacker attacks against Web servers are generally concentrated on standard HTTP ports (80 and 443).
-   for Mac OS X, in order to allow "standard" users to launch the 4D Web server in a secured mode --- in macOS, the use of TCP/IP ports reserved for Web publications (0 to 1023) requires specific access privileges: only the root user can launch an application using these ports. In order for standard users to be able to launch the Web server, one solution is to modify the port numbers (see [Web server configuration](../WebServer/webServerConfig.html#http-port).
    You can pass any valid value (in order to avoid access restrictions on macOS, you should pass a value greater than 1023). For more information about port numbers, refer to the HTTP Port paragraph above.

#### Allow database access through 4DSYNC URLs

***Compatibility Note**: This option is deprecated as for 4D v18. For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.

## Options (I)

###  Web/Options (I) page

#### Cache  

The 4D Web Server has a cache that allows you to load static pages, GIF images, JPEG images (<128 kb) and style sheets (.css files) in memory, as they are requested.
Using the cache allows you to significantly increase the Web server's performance when sending static pages.

The cache is shared between all the Web processes. You can set the size of the cache in the Settings. By default, the cache of the static pages is enabled for new databases. To disable it, just uncheck the **Use the 4D Web cache **option.

You can modify the size of the cache in the **Pages Cache Size **area. The value you set depends on the number and size of your Web site's static pages, as well as the resources that the host machines has at its disposal.

**Note:** While using your Web database, you can check the performance of the cache by using the routine [WEB GET STATISTICS](https://doc.4d.com/4dv19R/help/command/en/page658.html). If, for example, you notice that the cache's rate of use is close to 100%, you may want to consider increasing the size that has been allocated to it.
The /4DSTATS and /4DHTMLSTATS URLs allow you to also obtain information about the cache's state. See [Administration URLs](../WebServer/webServerAdmin.html#administration-urls) for more information.

When the cache is enabled, the 4D Web server looks for any static page requested by the browser in the cache first. If it finds the page, it sends it immediately. If not, 4D loads the page from disk and places it in the cache.
When the cache is full and additional space is required, 4D "unloads" the oldest pages first, among the least demanded ones.

#### Clearing the Cache  

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).
To do so, you just have to click on the **Clear Cache** button. The cache is then immediately cleared.

**Note:** You can also use the special URL .

### Web Process  

This area allows you to configure how the web server will handle user sessions and their associated processes. 

> Note: the **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Scalable sessions (multi-process sessions)  

When you select this option (recommended), a user session is managed through a **Session** object. 

No other settings are available. Scalable sessions:

-   can use any number of processes,
-   can be assigned privileges,
-   can share information between processes
-   always use thread-safe code (see [Using preemptive Web processes](../WebServer/preemptiveWeb.html))
-   always reuse temporary contexts (see [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)).

Scalable sessions are detailed on the [User sessions page](https://developer.4d.com/docs/en/WebServer/Sessions.html).

#### No sessions  

When this option is selected, the web server does not provide any specific support for user sessions. Successive requests from web clients are always independent and no context is maintained on the server. 

In this mode, you can configure additional web server setttings:

-   [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
-   [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
-   [Use preemptive processes](#use-preemptive-web-processes)

#### Legacy sessions (single process sessions)

*Compatibility Note:* This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.*

This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section.

In this mode, you can configure additional web server settings:

-   [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
-   [Use preemptive processes](#use-preemptive-web-processes)
-   [Inactive Process Timeout](#inactive-process-timeout)

The [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Maximum Concurrent Web Processes  

This option indicates the strict upper limit of **Maximum Concurrent Web Processes** of any type (standard Web processes or belonging to the "pool of processes") that can be open simultaneously on the server. This parameter allows prevention of 4D Server saturation as the result of massive number of requests.

By default, this value is 100. You can set the number anywhere between 10 and 32000.

When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the following message "Server unavailable" (status HTTP 503 -- Service Unavailable) for each new request.

**Note:** You can also set the maximum number of Web processes using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.

##### How to determine the right value?  

In theory, the maximum number of Web processes is the result of the following formula: Available memory/Web process stack size(*).\
Another solution is to visualize the information on Web processes displayed in the Runtime Explorer: the current number of Web processes and the maximum number reached since the Web server boot are indicated.

(*) The stack size allocated by 4D for a Web process is around 512 KB (indicative value, ​​which may vary based on context). 

### Reuse Temporary Contexts (4D in remote mode)  

Allows you to optimize the operation of the 4D Web server in remote mode by reusing Web processes created for processing previous Web requests. In fact, the Web server of a 4D client needs a specific Web process for the handling of each Web request; when necessary, this process connects to the 4D Server machine in order to access the data and database engine. It then generates a temporary context using its own variables, selections, etc. Once the request has been dealt with, this process is killed.

When the **Reuse Temporary Contexts** option is checked, 4D maintains the specific Web processes created on the client machine and reuses them for subsequent requests. By removing the process creation stage, Web server performance is improved.

In return, you must make sure in this case to systematically initialize the variables used in 4D methods in order to avoid getting incorrect results. Similarly, it is necessary to erase any current selections or records defined during the previous request.

#### Inactive Process Timeout  

Allows you to set the maximum timeout before closing for inactive Web processes on the server.

#### Use preemptive processes  

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.html).

**Note:** This option does not apply to Web service processes (server or client). Preemptive mode is supported by Web service processes at method level: you just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler. 

### Web Passwords  

Set the authentication system that you want to apply to your Web server. The authentication concerns the way the information concerning the user name and password are collected and processed. For the user, the authentication mode is transparent.

**Notes: **

-   You must restart the web server in order for the changes made to these parameters to be taken into account.
-   These parameters are detailed in the [Connection Security](https://doc.4d.com/4Dv19/4D/14-R2/Connection-Security.300-1342179.en.html) section.

#### Custom  

No authentication is provided by the web server, authentication must be done by your code. When this option is selected:

-   If the [On Web Authentication database method](https://doc.4d.com/4Dv19/4D/19/On-Web-Authentication-database-method.301-5392848.en.html) exists, it is executed and, in addition to $1 and $2, only the IP addresses of the browser and the server ($3 and $4) are provided, the user name and password ($5 and $6) are empty. In this case, you can filter connections according to the IP address of the browser and/or the requested IP address of the server.
-   If the [On Web Authentication database method](https://doc.4d.com/4Dv19/4D/19/On-Web-Authentication-database-method.301-5392848.en.html) does not exist, connections are automatically accepted.

#### Passwords with BASIC protocol  

Standard authentication in BASIC mode. The name and password entered by the user are sent unencrypted in the HTTP requests. This does not ensure total system security since this information could be intercepted and used by a third party (https connections are recommended).

When a user connects to the server, a dialog box appears on their browser in order for them to enter their user name and password. These two values are then sent to the [On Web Authentication database method](https://doc.4d.com/4Dv19/4D/19/On-Web-Authentication-database-method.301-5392848.en.html) along with the other connection parameters (IP address and port, URL...) so that you can process them.

This mode provides access to the **Include 4D passwords** option that allows you to use, instead of or in addition to your own password system, 4D's database password system (as defined in 4D).

**Note:** With the 4D Client Web server, keep in mind that all the sites published by the 4D Client machines will share the same table of users. Validation of users/passwords is carried out by the 4D Server application.

#### Passwords with DIGEST protocol  

The authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher.

As in BASIC mode, users must enter their name and password when they connect. These two values are then sent encrypted to the [On Web Authentication database method](https://doc.4d.com/4Dv19/4D/19/On-Web-Authentication-database-method.301-5392848.en.html) with the other connection parameters. You must authenticate a user using the [WEB Validate digest](https://doc.4d.com/4dv19R/help/command/en/page946.html) command.

#### Generic Web User  

You can designate a user, previously defined in the 4D password table, as a "Generic Web User." In this case, each browser that connects to the database can use the access authorizations and restrictions associated with this generic user. You can therefore easily control the browser's access to the different parts of the database.

**Note:** Do not confuse this option, which allows you to restrict the browser's access to different parts of the application (methods, forms, etc.), with the Web server's connection control system, managed by the password system and the [On Web Authentication Database Method](https://doc.4d.com/4Dv19/4D/14-R2/On-Web-Authentication-Database-Method.300-1342178.en.html).

To define a Generic Web User:

1.  In the Design mode, create at least one user with the Users editor of the Tool Box.
    You can associate a password with the user if you wish.
2.  In the different 4D editors, authorize or restrict access to this user.
3.  In the Database Settings dialog, choose the **Options (I)** page of the **Web** theme.
    The "Web Passwords" area contains the **Generic Web User **drop-down list.By default, the Generic Web User is the Designer and the browsers have full access to the entire database.
4.  Choose a user in the drop-down list and validate the dialog box:
    ![](https://doc.4d.com/4Dv19/picture/37772/pict37772.en.png)

All the Web browsers that are authorized to connect to the database will benefit from the access authorizations and restrictions associated with this Generic Web User (except when the BASIC mode and the "Include 4D Passwords" option are checked and the user that connects does not exist in the 4D password table, see below).

#### Interaction with the BASIC protocol  

The "Passwords with BASIC protocol" option does not influence how the Generic Web User operates. Whatever the state of this option, the access authorizations and restrictions associated with the "Generic Web User" will be applied to all the Web browsers that are authorized to connect to the database.

However, when the "Include 4D passwords" option is selected, two possible results can occur:

-   The user's name and password don't exist in 4D's password table. In this case, if the connection has been accepted by the [On Web Authentication Database Method](https://doc.4d.com/4Dv19/4D/14-R2/On-Web-Authentication-Database-Method.300-1342178.en.html), the Generic Web User's access rights will be applied to the browser.
-   If the user's name and password exist in 4D's password table, the "Generic Web User" parameter is ignored. The user connects with his own access rights.

## Options (II)

### Text Conversion  

#### Directly Sending Extended Characters  

By default, the 4D Web server converts the extended characters in the dynamic and static Web pages according to HTML standards before sending them. They are then interpreted by the browsers.\
You can set the Web server so that the extended characters are sent "as is", without converting them into HTML entities. This option has shown a speed increase on most foreign operating systems (especially the Japanese system).

To do this, check the **Send Extended Characters Directly **option.

#### Standard Sets  

The **Standard Set** drop-down list allows you to define the set of characters to be used by the 4D Web server. By default, the character set is UTF-8.

**Note:** This setting is also used for generating Quick Reports in HTML format (see [Executing a quick report](https://doc.4d.com/4Dv19/4D/19/Executing-a-quick-report.300-5416653.en.html)).

### Keep-Alive Connections  

The Web server of 4D can use keep-alive connections. The keep-alive option allows you to maintain a single open TCP connection for the set of exchanges between the Web browser and the server to save system resources and to optimize transfers.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the Web server. This option is enabled by default. In most cases, it is advisable to keep this option check since it accelerates the exchanges. If the Web browser does not support connection keep alive, the 4D Web server automatically switches to HTTP/1.0.

The 4D Web server keep-alive function concerns all TCP/IP connections (HTTP, HTTPS). Note however that keep-alive connections are not always used for all 4D Web processes.

In some cases, other optimized internal functions may be invoked. Keep-alive connections are useful mainly for static pages.

Two options allow you to set how the keep-alive connections work:

-   **Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).\
    The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web server.
-   **Timeout**: This value defines the maximum wait period (in seconds) during which the Web server maintains an open TCP connection without receiving any requests from the Web browser. Once this period is over, the server closes the connection.\
    If the Web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.