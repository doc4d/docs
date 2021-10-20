---
id: overview
title: Access control overview
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications. 

Depending on your deployment needs, 4D proposes different features:

- in multi-user applications, you can assign and control user passwords, and create access groups that have different levels of access to information in the application or to application features.
- in single-user applications, user accesses must be controlled by your code, using commands such as [`Get system user`].

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).


## Users and groups in projects

In project applications (.4DProject or .4dz files), 4D users and groups can be [configured](handling_users_group.md) in both single-user and multi-user environments. However, **access control** is only effective with 4D Server. The following table lists the main users and groups features and their availability:

||4D (single-user)|4D Server|  
|---|---|---|
|Adding/editing users and groups|yes|yes|
|Assigning user/group access to servers|yes|yes|
|User identification|no (all users are Designer)|yes|
|Access control once the Designer has been assigned a password|no (all access are Designer)|yes|




## Access control in multi-user applications

Multi-user applications are deployed with 4D Server. They include client-server, Web, or REST applications. 

You initiate the 4D password access control system with 4D Server by **assigning a password to the Designer**.

Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have set up users and groups (when the application opens, no ID is required). Any part of the application can be opened.

When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the application or use a [protected server](handling_users_group.md#assigning-group-access), remote users must enter a password.

To disable the password access system, you just need to remove the Designer password. 


## Access control in single-user applications

In single-user desktop applications, all users are "Designer". Access control is not based upon 4D users and groups, but rather upon user sessions.

### User identification

To identify the current user (e.g. to store their name in log files), it is recommended to use code such as:

```4d
$user:=SET USER ALIAS(Current system user)
```

[`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) returns the user who opened the session at the OS level, and [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) registers it instead of "Designer"

### Protecting data access

- Usually, if the application is accessed by a single user, it is recommended to install it in the **user's session system folder**. The application is only available when the user opened successfully a session.

- However, if several users could access the machine and you want to protect access, the solution is to [encrypt data](MSC/encrypt.md) and provide the encryption key to the user. 