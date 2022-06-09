---
id: data-collect
title: About Data Collection
---

To help us make our products always better, we automatically collect data regarding usage statistics and incidents on running 4D Server applications. Collected data are completely anonymous and data is transfered with no impact on the user experience. 

This page explains:

- what information is collected
- where this information is stored and when it is sent to the 4D data server


## Collected information

Data are collected during the following events: 

- 4D Server startup, 
- database opening,
- database closure,
- webserver startup.

### Collected at 4D Server startup

|Data|Example|Description|
|---|----|---|
|processor|Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz|Information returned by Get System Info|
|number of cores|4|Information returned by Get System Info|
|physical memory|419430400|Information returned by GET MEMORY STATISTICS|
|system|Microsoft Windows 10 Pro 1809 (17763.253)|Information returned by Get System Info|
|is headless|True|Information returned by Get Application Info|
|4D version|1920|Information returned by Application Version|
|4D build number|123456|Information returned by Application Version|
|license|{"name":"4D Developer Professional 19R6 - SPECIAL FOR UNIT TESTS","products":[{"id":808464433,"name":"4D","allowedCount":1}]}|Information returned by Get License Info, only the name and the products part|


### Collected per database at opening

|Data|Example|Description|
|---|----|---|
|id|hashed string (*Polynomial Rolling hash*)|Unique id associated to the database (to avoid the same database to appear multiple times in the data collection)|
|size of data file|419430400|Data file gives the path to the data file|
|size of index|419430400|In the Maintenance and Security Center, the index size is stored in an array called DT_W_FileSize and it's the third element|
size of cache|419430400|Information returned by Cache Info|
|use legacy network layer|True|Information returned by Get Application info|
|is encrypted|True|Information returned by datastore.encryptionstatus|
|is compiled|True|Information returned by Is compiled mode|
|is engined|True|Information returned by Application type|
|is in project mode|True|Information returned by Get Database Parameter|
|mobile sessions|[{"os":"iOS", "version":"12.465", "simulator":"false"}]|information device.os, device.version and device.simulator retrieved from this feature: #132034|


### Collected per database at closure

|Data|Example|Description|
|---|----|---|
|uptime|123456|Information returned by Get Application Info|


### Collected per database at webserver startup

|Data|Example|Description|
|---|----|---|
|web server|true|Always true|



## When is it stored and sent?

Collected data is written in a text file (JSON format) when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv19/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to our analysis data server. The file is then deleted from the active 4D folder. 

![](assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side. 

