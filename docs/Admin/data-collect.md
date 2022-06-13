---
id: data-collect
title: About Data Collection
---

To help us make our products always better, we automatically collect data regarding usage statistics and incidents on running 4D Server applications. Collected data is completely anonymous and data is transferred with no impact on the user experience. 

This page explains:

- what information is collected
- where information is stored and when it is sent to the 4D data server


## Collected information

Data is collected during the following events: 

- 4D Server startup, 
- database opening,
- database closure,
- webserver startup.

### Collected at 4D Server startup

|Data|Example|Notes|
|---|----|---|
|processor|Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz|Name, type, and speed of the processor|
|number of cores|4|Total number of cores|
|physical memory|419430400|Volume of memory storage (in bytes) available on the machine|
|system|Microsoft Windows 10 Pro 1809 (17763.253)|Operating system version and build number|
|is headless|True|True if the application is running in headless mode|
|4D version|1920|Version number of the 4D application|
|4D build number|123456|Build number of the 4D application|
|license|{"name":"4D Developer Professional 19R6 - SPECIAL FOR UNIT TESTS","products":[{"id":808464433,"name":"4D","allowedCount":1}]}|Commercial name and description of product licenses|


### Collected per database at opening

|Data|Example|Notes|
|---|----|---|
|id|hashed string (*Polynomial Rolling hash*)|Unique id associated to the database|
|size of data file|419430400|Data file size in bytes|
|size of index|419430400|Index size in bytes|
|size of cache|419430400|Cache size in bytes|
|use legacy network layer|True|True if legacy network layer used for the application server|
|is encrypted|True|True if the data file is encrypted|
|is compiled|True|True if the application is compiled|
|is engined|True|True if the application is merged with 4D Volume Desktop|
|is in project mode|True|True if the application is a project|
|mobile sessions|[{"os":"iOS", "version":"12.465", "simulator":"false"}]|Information on mobile sessions|


### Collected per database at closure

|Data|Example|Notes|
|---|----|---|
|uptime|123456|Time elapsed (in seconds) since local 4D database was opened. For remote connections, time elapsed since the connection was made.|


### Collected per database at webserver startup

|Data|Example|Notes|
|---|----|---|
|web server|true|Always true|



## When is it stored and sent?

Collected data is written in a text file (JSON format) when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv19/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to our analysis data server. The file is then deleted from the active 4D folder. 

![](assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side. 

