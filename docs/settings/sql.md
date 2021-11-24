---
id: sql
title: SQL page
---

This page is used to configure the default publishing parameters and the access rights of the integrated SQL server of 4D, as well as options concerning the functioning of the 4D SQL engine. 

For more information about SQL in 4D, refer to [the SQL Reference manual](https://livedoc.4d.com/What-s-new/4D-SQL-Reference-19-R3/Using-SQL-in-4D.200-5680718.en.html).

## SQL Server Publishing Preferences

It is possible to configure the publishing parameters for the SQL server integrated into 4D. These parameters are found on the **SQL** page of the Database Settings:

-   The **Launch SQL Server at Startup** option can be used to start the SQL server on application startup.
-   **TCP Port**: By default, the 4D SQL server responds on the TCP port 19812. If this port is already being used by another service, or if your connection parameters require another configuration, you can change the TCP port used by the 4D SQL server.
    > **Note:** If you pass 0, 4D will use the default TCP port number, i.e. 19812.
-   **IP Address**: You can set the IPv4 address of the machine on which the SQL server must process SQL queries. By default, the server will respond to all the IP addresses (**Any** option), including IPv4 and IPv6 addresses.

    The "IP Address" drop-down list automatically contains all the IPv4 addresses present on the machine. When you select a particular address, the server will only respond to queries sent to this address. This is intended for 4D applications hosted on machines having several TCP/IP addresses.

    > **Note:** For clarity, IPv6 addresses are not listed in the IP Address drop-down list. If you need to filter IPv6 addresses, it is recommended to configure appropriately the firewall settings of the system.

    **Note**: On the client side, the IP address and the TCP port of the SQL server to which the application connects must be correctly configured in the ODBC data source definition.
    
-   **Enable SSL**: This option indicates whether the SQL server must enable the SSL protocol for processing SQL connections. Note that when this protocol is enabled, you must add the ":ssl" keyword to the end of the IP address of the SQL server when you open a connection using the [SQL LOGIN](https://livedoc.4d.com/4D-Language-Reference-19-R4/SQL/SQL-LOGIN.301-5738526.en.html) command.
    
    By default, the SQL server uses internal files for the SSL key and certificate. You can, however, use custom elements: to do this, just copy your own key.pem and cert.pem files to the following location: MyDatabase/Preferences/SQL (where "MyDatabase" represents the database folder/package).

-   **Allow Flash Player requests**: This option can be used to enable the mechanism for supporting Flash Player requests by the 4D SQL server. This mechanism is based on the presence of a file, named "socketpolicy.xml," in the preferences folder of the database (Preferences/SQL/Flash/). This file is required by Flash Player in order to allow cross-domain connections or connections by sockets of Flex (Web 2.0) applications.

    In the previous version of 4D, this file had to be added manually. From now on, the activation is carried out using the **Allow Flash Player requests** option: When you check this option, Flash Player requests are accepted and a generic "socketpolicy.xml" file is created for the database if necessary.\
    When you deselect this option, the "socketpolicy.xml" file is disabled (renamed). Any Flash Player queries received subsequently by the SQL server are then rejected.\
    On opening of the database, the option is checked or not checked depending on the presence of an active "socketpolicy.xml" file in the preferences folder of the database.**\
    > **Note**: It is possible to set the encoding used by the SQL server for processing external requests using the 4D [SQL SET OPTION](https://livedoc.4d.com/4D-Language-Reference-19-R4/SQL/SQL-SET-OPTION.301-5738539.en.html "SQL SET OPTION") command.

## SQL Access Control for the default schema 

For security reasons, it is possible to limit actions that external queries sent to the SQL server can perform in the 4D database.

This can be done at two levels:

-   At the level of the type of action allowed,
-   At the level of the user carrying out the query.
    These settings can be made on the **SQL** page of the Database Settings.

> **Note:** You can also use the [On SQL Authentication Database Method](https://livedoc.4d.com/4D-Language-Reference-19-R4/SQL/On-SQL-Authentication-Database-Method.300-5738525.en.html) to control in a custom way any external access to the 4D internal SQL engine.

The parameters set in this dialog box are applied to the default schema. The control of external access to the database is based on the concept of SQL schemas (see the [Principles for integrating 4D and the 4D SQL engine](https://livedoc.4d.com/4D-SQL-Reference-11.4/Using-SQL-in-4D/Principles-for-integrating-4D-and-the-4D-SQL-engine.300-72604.en.html "Principles for integrating 4D and the 4D SQL engine") section). If you do not create custom schemas, the default schema will include all the tables of the database. If you create other schemas with specific access rights and associate them with tables, the default schema will only include the tables that are not included in custom schemas.

You can configure three separate types of access to the default schema via the SQL server:

-   **Read Only (Data)**: Unlimited access to read all the data of the database tables but no adding, modifying or removing of records, nor any modification to the structure of the database is allowed.
-   **Read/Write (Data)**: Read and write (add, modify and delete) access to all the data of the database tables, but no modification of the database structure is allowed.
-   **Full (Data and Design)**: Read and write (add, modify and delete) access to all the data of the database tables, as well as modification of the database structure (tables, fields, relations, etc.) is allowed.

You can designate a set of users for each type of access. There are three options available for this purpose:

-   **Nobody**: If you select this option, the type of access concerned will be refused for any queries, regardless of their origin. This parameter can be used even when the 4D password access management system is not activated.
-   **Everybody**: If you select this option, the type of access concerned will be allowed for all queries (no limit is applied).
-   **Group of users**: This option lets you designate a group of users as exclusively authorized to carry out the type of access concerned. This option requires that 4D passwords be activated. The user at the origin of the queries provides their name and password when connecting to the SQL server.

> **WARNING:** Each type of access is set independently from the others. More specifically, if you only assign **Read Only** type access to one group this will not have any effect since this group as well as all the others will continue to benefit from **Read/Write** access (assigned to **Everybody** by default). In order to set a **Read Only** type access, you also need to configure the **Read/Write** access.

> **Warning**: This mechanism is based on 4D passwords. In order for the SQL server access control to come into effect, the 4D password system must be activated (a password must be assigned to the Designer).

> **Note**: An additional security option can be set at the level of each 4D project method. For more information, please refer to the "Available through SQL option" paragraph in the [Principles for integrating 4D and the 4D SQL engine](https://livedoc.4d.com/4D-SQL-Reference-11.4/Using-SQL-in-4D/Principles-for-integrating-4D-and-the-4D-SQL-engine.300-72604.en.html "Principles for integrating 4D and the 4D SQL engine") section.

## SQL Engine Options 

-   **Auto-commit Transactions**: This option can be used to activate the auto-commit mechanism of the SQL engine. The purpose of the auto-commit mode is to preserve the referential integrity of the data. When this option is checked, any [](https://livedoc.4d.com/Home.en.html), [](https://livedoc.4d.com/Home.en.html), [](https://livedoc.4d.com/Home.en.html)and [](https://livedoc.4d.com/Home.en.html)(SIUD) queries not already carried out within a transaction are automatically included in an ad hoc transaction. This guarantees that the queries will be executed in their entirety or, in the case of an error, completely cancelled.

    Queries already included in a transaction (custom management of referential integrity) are not affected by this option.

    When this option is not checked, no automatic transaction is generated (except for the SELECT... FOR UPDATE queries, please refer to the SELECT command). By default, this option is not checked.\
    You can also manage this option by programming using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command.

    > **Note**: Only local databases queried by the 4D SQL engine are affected by this parameter. In the case of external connections to other SQL databases, the auto-commit mechanism is handled by the remote SQL engines.
    
-   **Case-sensitive String Comparison**: This option can be used to modify the case sensitivity of characters in SQL queries. It is checked by default, which means that the SQL engine differentiates between upper and lower case letters as well as between accented characters when comparing strings (sorts and queries). For example "ABC"="ABC" but "ABC" # "Abc" and "abc" # "âbc."

In certain cases, for example to align the functioning of the SQL engine with that of the 4D engine, you may want string comparisons not to be case sensitive ("ABC"="Abc"="âbc"). To do this, you simply need to deselect this option.
    
You can also manage this option by programming using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command.