---
id: overview
title: Access Control overview
---

クライアントサーバーアーキテクチャーや Webインターフェースなど、複数のユーザーがアプリケーションを使用する場合は、アクセスを制御したり、接続ユーザーに応じて異なる機能を提供したりする必要が生じます。 It is also essential to provide security for sensitive data, even in single-user applications.

4D access control strategy depends on your deployment configuration:

- in multi-user applications, you can rely on 4D users and groups,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。




## Access control in multi-user applications

Multi-user applications are deployed with 4D Server. They include client-server, Web, or REST applications.

In multi-user applications, access control is done through [4D users and groups](handling_users_groups.md). You create users, assign passwords, create access groups that have different levels of privileges in the application.

You initiate the 4D password access control system with 4D Server by [assigning a password to the Designer user](handling_users_groups.md#designer-and-administrator). Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have [set up users and groups](handling_users_groups.md) (when the application opens, no ID is required). つまり、アプリケーションのあらゆる部分を開くことができます。

デザイナーにパスワードが指定されると、すべてのアクセス権が有効になります。 In order to connect to the application or to a [server with protected access](handling_users_groups.md#assigning-group-access), remote users must enter a login/password.

パスワードアクセスシステムを無効にするには、デザイナーのパスワードを削除します。


## Access control in single-user applications


Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume License. In single-user applications all users opening the application are [Designers](handling_users_groups.md#designer-and-administrator), they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon **user sessions**.

### ユーザー認証

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) command, which returns the user who opened the system session. Thus user authentication is delegated to the OS level.

You can then allow or deny access within your application by using code such as:

```4d
If(Current system user = $user) //you can store users in a database table
    // give access to some features
Enf if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protecting access

#### 権限

On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level.

#### Encrypting data

If you want to protect access to the application data, we recommend to [encrypt data](MSC/encrypt.md) and provide the encryption key to the authorized user(s). 