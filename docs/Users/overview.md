---
id: overview
title: Access Control overview
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications. 

4D access control strategy depends on your deployment configuration:

- in multi-user applications, you can rely on 4D users and groups,
- in single-user applications, user access is controlled through the session itself, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).




## Access control in multi-user applications

Multi-user applications are deployed with 4D Server. They include client-server, Web, or REST applications. 

In multi-user applications, access control is done through [4D users and groups](handling_users_groups.md). You create users, assign passwords, create access groups that have different levels of privileges in the application. 

You initiate the 4D password access control system with 4D Server by [assigning a password to the Designer user](handling_users_groups.md#designer-and-administrator). Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have [set up users and groups](handling_users_groups.md) (when the application opens, no ID is required). Any part of the application can be opened.

When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the application or to a [server with protected access](handling_users_groups.md#assigning-group-access), remote users must enter a login/password.

To disable the password access system, you just need to remove the Designer password. 


## Access control in single-user applications

Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume License. In single-user applications, all users opening the application are [Designers](handling_users_groups.md#designer-and-administrator), they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon **user sessions**.

### User identification

To identify the current user (for example to store user name in the log file), it is recommended to use code such as:

```4d
$user:=SET USER ALIAS(Current system user)
```

[`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) returns the user who opened the session at the OS level, and [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) registers a user name instead of "Designer". 

### Protecting data access

#### User session 

Usually, if the application is accessed by a single user, a good practice is to install the application files in the **user's session system folder**, returned by `Folder(fk user preferences folder)` for example. The application is only available when the user is logged to their own session. Access rights are granted at the session level.


#### Encrypting data 

When the application cannot be installed in a session user folder and you want to protect access to data, we recommend to [encrypt data](MSC/encrypt.md) and provide the encryption key to the authorized user(s). 