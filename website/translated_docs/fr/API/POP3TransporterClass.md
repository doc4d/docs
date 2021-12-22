---
id: POP3TransporterClass
title: POP3Transporter
---

La classe `POP3Transporter` vous permet de récupérer des messages à partir d'un serveur de messagerie POP3.


### Objet POP3 Transporter

Les objets Transporter POP3 sont instanciés avec la commande [POP3 New transporter](#pop3-new-transporter). Leurs propriétés et fonctions sont les suivantes :


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->
**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF POP3TransporterClass.POP3 New transporter.Params -->
| Paramètres | Type               |    | Description                                        |
| ---------- | ------------------ |:--:| -------------------------------------------------- |
| server     | object             | -> | Informations sur le serveur IMAP                   |
| Résultat   | 4D.POP3Transporter | <- | [Objet POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->


#### Description

La commande `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configure une nouvelle connexion POP3<!-- END REF -->en fonction du paramètre *server* et retourne un nouvel objet *[POP3 transporter](#pop3-transporter-object)*. L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :


| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Valeur par défaut (si omise)                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| Faux                                                                             |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<p>Chaîne de texte ou objet token représentant les informations d'autorisation OAuth2. Il est utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné dans l'objet *[SMTP transporter](#smtptransporterobject)*. | aucune                                                                           |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatoire*                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| aucune                                                                           |
| **.password** : Text<p>Mot de passe de l'utilisateur pour l'authentification sur le serveur. Non retourné dans l'objet *[SMTP transporter](#smtptransporterobject)*.                                                                                                                                                                                                                                                                    | aucune                                                                           |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| aucune                                                                           |


#### Résultat

La fonction retourne un [**objet POP3 transporter**](#pop3-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.
> La connexion POP3 est automatiquement fermée lorsque l'objet transporteur est détruit.

#### Exemple

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log à enregistrer dans le dossier Logs

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()


<!-- REF #4D.POP3Transporter.new().Syntax -->
**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #4D.POP3Transporter.new().Params -->
| Paramètres | Type               |    | Description                                        |
| ---------- | ------------------ |:--:| -------------------------------------------------- |
| server     | Object             | -> | Informations sur le serveur IMAP                   |
| Résultat   | 4D.POP3Transporter | <- | [Objet POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->

#### Description

La fonction `4D.POP3Transporter.new()` <!-- REF #4D.POP3Transporter.new().Summary -->crée et retourne un nouvel objet de type `4D.POP3Transporter`<!-- END REF -->. Elle est identique à la commande [`POP3 New transporter`](#pop3-new-transporter) (raccourci).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->




<!-- INCLUDE transporter.authenticationModePOP3.Desc -->



<!-- INCLUDE transporter.checkConnection().Desc -->

#### Exemple

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("Please enter your password:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3 connection check successful!")
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->




## .delete()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #POP3TransporterClass.delete().Params -->
| Paramètres | Type    |    | Description                   |
| ---------- | ------- |:--:| ----------------------------- |
| msgNumber  | Integer | -> | Numéro du message à supprimer |
<!-- END REF -->


##### Description

La fonction `.delete( )` <!-- REF #POP3TransporterClass.delete().Summary -->marque l'email *msgNumber* comme devant être supprimé sur le serveur POP3<!-- END REF -->.

Dans le paramètre *msgNumber*, passez le numéro de l'email à supprimer. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

L'exécution de cette méthode ne supprime pas réellement l'email. L'email marqué sera supprimé sur le serveur POP3 uniquement lorsque l'objet `POP3_transporter` (créé à l'aide de `POP3 New transporter`) sera détruit. Le marqueur pourra également être retiré via la fonction `.undeleteAll()`.
> Si la session courante se termine inopinément et que le connexion est fermée (ex : timeout, panne de réseau, etc.), un message d'erreur est généré et les messages marqués pour suppression demeureront sur le serveur POP3.

##### Exemple

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Marquer votre e-mail comme "à supprimer à la fin de la session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Forcer la fermeture de la session pour supprimer les e-mails marqués pour suppression
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //suppression confirmée
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //supprimer les marqueurs de suppression
 End if
```




## .getBoxInfo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| Paramètres | Type   |    | Description   |
| ---------- | ------ |:--:| ------------- |
| Résultat   | Object | <- | Objet boxInfo |
<!-- END REF -->


##### Description

La fonction `.getBoxInfo()`<!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->retourne un objet `boxInfo` correspondant à la boîte de réception désignée par le [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur la boite de réception.

L'objet `boxInfo` contient les propriété suivantes :

| Propriété | Type   | Description                                            |
| --------- | ------ | ------------------------------------------------------ |
| mailCount | Nombre | Nombre de messages contenus dans la boîte de réception |
| size      | Nombre | Taille du message en octets                            |



##### Exemple

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  //mailbox info
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("The mailbox contains "+String($boxInfo.mailCount)+" messages.")
```




## .getMail()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMail().Params -->
| Paramètres | Type    |    | Description                                     |
| ---------- | ------- |:--:| ----------------------------------------------- |
| msgNumber  | Integer | -> | Numéro du message dans la liste                 |
| Résultat   | Object  | <- | [Objet email](EmailObjectClass.md#email-object) |
<!-- END REF -->


##### Description

La fonction `.getMail()` <!-- REF #POP3TransporterClass.getMail().Summary -->retourne l'objet `Email` correspondant au *msgNumber* de la boite de réception désignée par le [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Cette fonction vous permet de gérer localement le contenu de l'email.

Passez dans *msgNumber* le numéro du message à récupérer. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

La fonction retourne Null si :

*   *msgNumber* désigne un message inexistant,
*   le message a été marqué pour suppression à l'aide de `.delete()`.


**Objet retourné**

`.getMail()` retourne un [objet `Email`](EmailObjectClass.md#email-object).


##### Exemple

Vous souhaitez connaitre l'expéditeur du premier mail de la boite de réception :

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```




## .getMailInfo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| Paramètres | Type    |    | Description                     |
| ---------- | ------- |:--:| ------------------------------- |
| msgNumber  | Integer | -> | Numéro du message dans la liste |
| Résultat   | Object  | <- | mailInfo object                 |
<!-- END REF -->


##### Description

The `.getMailInfo()` function <!-- REF #POP3TransporterClass.getMailInfo().Summary -->returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfo) method.

The `mailInfo` object returned contains the following properties:

| Propriété | Type   | Description                 |
| --------- | ------ | --------------------------- |
| size      | Nombre | Taille du message en octets |
| id        | Texte  | ID unique du message        |

The method returns **Null** if:

*   *msgNumber* désigne un message inexistant,
*   le message a été marqué pour suppression à l'aide de `.delete()`.


##### Exemple


```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  //message info
 $mailInfo:=$transporter.getMailInfo(1) //obtenir le premier e-mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
```




## .getMailInfoList()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| Paramètres | Type       |    | Description                      |
| ---------- | ---------- |:--:| -------------------------------- |
| Résultat   | Collection | <- | Collection of `mailInfo` objects |
<!-- END REF -->


##### Description

The `.getMailInfoList()` function <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to locally manage the list of messages located on the POP3 mail server.

Each `mailInfo` object in the returned collection contains the following properties:

| Propriété    | Type   | Description                                                        |
| ------------ | ------ | ------------------------------------------------------------------ |
| \[ ].size   | Nombre | Taille du message en octets                                        |
| \[ ].number | Nombre | Numéro du message                                                  |
| \[ ].id     | Texte  | ID unique du message (utile si vous stockez le message localement) |

If the mailbox does not contain a message, an empty collection is returned.



#### number and ID properties

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the [`POP3_transporter`](#pop3-transporter-object). At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. When the user logs back into the server, the current messages in the mailbox will be renumbered from 1 to x.

The *id* however is a unique number assigned to the message when it was received by the server. This number is calculated using the time and date that the message is received and is a value assigned by your POP3 server. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Developers may need to take some care if developing solutions which bring references to messages into a database but leave the body of the message on the server.


##### Exemple

You want to know the total number and size of emails in the mailbox:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)

 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")

 ALERT("The mailbox contains "+String($vNum)+" message(s) for "+String($vSize)+" bytes.")
```




## .getMIMEAsBlob()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| Paramètres | Type    |    | Description                                          |
| ---------- | ------- |:--:| ---------------------------------------------------- |
| msgNumber  | Integer | -> | Numéro du message dans la liste                      |
| Résultat   | Blob    | <- | Blob de la chaine MIME retournée par le serveur mail |
<!-- END REF -->


##### Description

The `.getMIMEAsBlob()` function <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

In *msgNumber*, pass the number of the message to retrieve. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

The method returns an empty BLOB if:

*   *msgNumber* désigne un message inexistant,
*   le message a été marqué pour suppression à l'aide de `.delete()`.


**Returned BLOB**

`.getMIMEAsBlob()` retourne un `BLOB` retourne un BLOB qui peut être archivé dans une base de données ou converti en un objet [`Email`](EmailObjectClass.md#objet-email) avec la commande `MAIL Convert from MIME`.


##### Exemple

You want to know the total number and size of emails in the mailbox:

```4d
 var $server : Object
 var $mailInfo : Collection
 var $blob : Blob
 var $transporter : 4D.POP3Transporter

 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```



<!-- INCLUDE transporter.host.Desc -->






<!-- INCLUDE transporter.logFile.Desc -->



<!-- INCLUDE transporter.port.Desc -->





<!-- REF POP3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll()**<!-- END REF -->

<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


##### Description

The `.undeleteAll()` function <!-- REF #POP3TransporterClass.undeleteAll().Summary -->removes all delete flags set on the emails in the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->. 

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->



<style> h2 { background: #d9ebff;}</style>
