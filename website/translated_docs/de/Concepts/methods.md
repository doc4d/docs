---
id: methods
title: Methoden
---


Eine Methode ist in der Regel ein Stück Code, der eine oder mehrere Aktionen ausführt. Eine Methode besteht aus Anweisungen; jede Anweisung ist eine Zeile in der Methode. Eine Anweisung führt eine Aktion aus, die einfach oder komplex sein kann. Obwohl eine Anweisung immer in einer Zeile steht, kann diese Zeile so lang wie erforderlich sein (bis zu 32.000 Zeichen, was für die meisten Fälle ausreichen dürfte).

Eine Methode kann max. 2 GB groß sein oder bis zu 32.000 Code-Zeilen enthalten.

## Methodentypen

In der 4D Programmiersprache gibt es verschiedene Kategorien von Methoden. Die Kategorie richtet sich danach, wie die Methode aufgerufen wird:

| Typ                                              | Kontext des Aufrufs                                                                                                         | Akzeptiert Parameter | Beschreibung                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Projektmethode**                               | Bei Bedarf, wenn der Name einer Projektmethode aufgerufen wird (siehe [Projektmethoden aufrufen](#calling-project-methods)) | Ja                   | Kann beliebigen Code zum Ausführen eigener Aktionen enthalten. Eine einmal erstellte Projektmethode wird Teil der Programmierung des Projekts.                                                                   |
| **Objekt (Widget) Methode**                      | Automatisch, wenn ein Ereignis das Objekt betrifft, dem die Methode zugeordnet ist                                          | Nein                 | Eigenschaft eines Formularobjekts (auch Widget genannt)                                                                                                                                                          |
| **Formularmethode**                              | Automatisch, wenn ein Ereignis das Formular betrifft, dem die Methode zugeordnet ist                                        | Nein                 | Eigenschaft eines Formulars. Sie können eine Formularmethode zum Verwalten von Daten und Objekten verwenden. Für diese Zwecke ist es jedoch generell einfacher und effizienter, eine Objektmethode zu verwenden. |
| **Trigger** (auch bekannt als *Tabellenmethode*) | Automatisch, jedes Mal wenn Sie die Datensätze einer Tabelle bearbeiten (Hinzufügen, Löschen, Ändern)                       | Nein                 | Eigenschaft einer Tabelle. Trigger sind Methoden, die “illegale” Operationen mit Datensätzen in Ihrer Datenbank verhindern.                                                                                      |
| **Datenbankmethoden**                            | Automatisch, wenn ein Ereignis in der Arbeitssitzung eintritt                                                               | Ja (vordefiniert)    | Es gibt 16 Datenbankmethoden in 4D. Siehe Abschnitt zu Datenbankmethoden                                                                                                                                         |


> Die 4D Programmiersprache unterstützt auch **Class functions**, die im Kontext der Instanz eines Objekts aufgerufen werden. Class Functions können integriert sein (*z.B.* `collection.orderBy()` oder `entity.save()`) oder vom 4D Entwickler [erstellt worden sein](classes.md#class-function).


## Projektmethoden aufrufen

Eine Projektmethode kann je nach Ausführung und Verwendung folgende Rolle haben:

- Unterroutine
- Objekt Formel
- Menümethode
- Prozessmethode
- Auf Ereignis oder Fehler bezogene Methode

### Unterroutinen

Eine Unterroutine ist eine Projektmethode, die man sich als Diener vorstellen kann. Sie führt die Aufgaben (tasks) aus, deren Durchführung andere Methoden anfordern. Eine Funktion ist eine Unterroutine, die einen Wert an die Methode zurückgibt, die sie aufgerufen hat.

Eine einmal erstellte Projektmethode wird Teil der Programmierung des Projekts, in dem sie angelegt wurde. Sie können die Projektmethode dann in einer anderen Methode (Projektmethode, Objektmethode …) genauso wie einen in 4D integrierten Befehl aufrufen. Eine so verwendete Projektmethode heißt Unterroutine.

Sie verwenden Unterroutinen, um:

- Sich wiederholendes Programmieren zu reduzieren
- Ihre Methoden klarer zu gliedern
- Ihre Methoden schneller zu ändern
- Ihren Code modular aufzuteilen

Wir gehen beispielsweise von einem Projekt Kunden aus. Bei der individuellen Gestaltung stellen Sie fest, dass sich einige Vorgänge wiederholen, wie einen Kunden finden oder einen Datensatz ändern. Der Code dafür könnte folgendermaßen aussehen:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

Arbeiten Sie ohne Unterroutinen, müssen Sie den Code jedes Mal schreiben, wenn Sie einen Kundendatensatz ändern wollen. Passiert das in Ihrem Projekt an zehn Stellen, müssen Sie den Code zehnmal schreiben. Mit Unterroutinen schreiben Sie den Code nur einmal. Das ist der erste Vorteil von Unterroutinen - die Menge an Code reduzieren.

Wir legen den oben beschriebenen Code in einer Methode mit Namen `MODIFY CUSTOMER` an. Soll diese Methode in einer anderen Methode ausgeführt werden, müssen Sie nur den Namen einsetzen. Wollen Sie beispielsweise einen Kundendatensatz ändern und dann den Datensatz drucken, schreiben Sie folgende Methode:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Das vereinfacht Ihre Methode drastisch. Im Beispiel müssen Sie nicht wissen, wie die Methode `MODIFY CUSTOMER` arbeitet, sondern nur was sie tut. Dies ist der zweite Vorteil von Unterroutinen - Ihre Methoden klarer gliedern. Sie erweitern sozusagen die 4D Programmiersprache.

Wollen Sie in dieser Beispielanwendung die Methode zum Auffinden von Kunden ändern, müssen Sie nur eine und nicht zehn Methoden ändern. Ein weiterer Vorteil von Unterroutinen - Methoden lassen sich schnell ändern.

Mit Unterroutinen machen Sie Ihren Code modular. Das bedeutet, Sie unterteilen Ihren Code in Module (Unterroutinen), die jeweils einen logischen Vorgang (task) ausführen. Betrachten Sie folgenden Code aus einer Anwendung für Kontoführung:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
```

Auch für jemanden, der die Anwendung nicht kennt, ist klar, was der Code ausführt. Er muss nicht jede Unterroutine untersuchen, die evtl. aus vielen Zeilen besteht und komplexe Operationen ausführt. Wichtig ist, dass die Tasks ausgeführt werden. Wir empfehlen, den Code möglichst in logische Vorgänge oder Module aufzuteilen.


### Objekt Formel

Sie können Ihre Projektmethoden in **formula** Objekten einkapseln und von Ihren Objekten aus aufrufen.

Mit der Methode `Formula` oder `Formula from string` können Sie native Formelobjekte erstellen, die Sie in Objekteigenschaften einbinden können. So können Sie eigene Objektmethoden einbinden.

Zum Ausführen einer Methode, die in einer Objekteigenschaft gespeichert ist, setzen Sie nach dem Eigenschaftsnamen den Operator **( )**. Beispiel:

```4d
//myAlert
ALERT("Hello world!")
```

Dann lässt sich `myAlert` in jedes Objekt einbinden und aufrufen:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Die Syntax mit Klammern wird auch unterstützt:

```4d
$o["custom_Alert"]() //displays "Hello world!"
```

Sie können auch [Parameter](Concepts/parameters.md) in Ihrer Formel übergeben, wenn Sie diese, wie in 4D Projektmethoden, mit $1, $2… aufrufen:

```4d
//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Sie können `fullName` in ein Objekt einbinden:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

In Kombination mit der Funktion `This` können Sie mit solchen Objektmethoden leistungsstarken generischen Code schreiben. Beispiel:

```4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Die Methode arbeitet dann wie ein neues berechnetes Attribut, dass sich in andere Attribute einfügen lässt:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



Beachten Sie, dass eine objektgebundene Methode, selbst wenn sie keine Parameter hat, zum Ausführen mit Klammern ( ) aufgerufen werden muss. Sonst wird nur die Objekteigenschaft aufgerufen und sie gibt eine neue Referenz zur Formel zurück (und führt sie nicht aus):

```4d
$o:=$f.message //returns the formula object in $o
```

### Menümethode
Eine Menümethode wird in der Anwendungsumgebung aufgerufen, wenn Sie den dazugehörigen eigenen Menübefehl auswählen. Sie weisen die Methode dem Menübefehl im Methodeneditor zu oder über einen Befehl aus dem Kapitel "Menüs". Die Methoden wird ausgeführt, wenn der Menübefehl ausgewählt wird. Durch Einrichten eigener Menüs mit dazugehörigen Menümethoden, die bestimmte Aktionen ausführen, erstellen Sie eigene Oberflächen für Ihre Desktop-Anwendungen.

Mit eigenen Menübefehlen können eine oder mehrere Aktivitäten ausgelöst werden. Ein Menübefehl für die Eingabe von Datensätzen kann beispielsweise zwei Tasks ausführen: Das entsprechende Eingabeformular anzeigen und den Befehl `ADD RECORD` aufrufen, bis der Benutzer die Eingabe von Daten beendet.

Das automatisierte Ablaufen mehrerer Aktivitäten ist eine Leistungsstärke der Programmiersprache. Über eigene Menüs automatisieren Sie mehrere Tasks und bieten Benutzern eine bessere Führung.


### Prozessmethode

Eine **Prozessmethode** wird aufgerufen, wenn ein Prozess startet. Der Prozess dauert nur solange, wie die Prozessmethode ausgeführt wird, außer es ist ein Worker Prozess. Beachten Sie, dass eine Menümethode, die einem Menübefehl mit der Eigenschaft* Starte neuen Prozess* zugeordnet ist, gleichzeitig die Prozessmethode für den neu gestarteten Prozess ist.

### Auf Ereignis oder Fehler bezogene Methode
Eine **ereignisbezogene Methode** läuft in einem eigenen Prozess, wie eine Prozessmethode, die Ereignisse abfängt. Normalerweise verwaltet 4D die meisten Ereignisse automatisch für Sie. Beispielsweise bei der Dateneingabe nimmt 4D Tastaturkürzel und Klicks wahr, ruft die entsprechenden Objekt- und Formularmethoden auf, so dass Sie von diesen Methoden aus auf die Ereignisse entsprechend antworten können. Weitere Informationen dazu finden Sie unter dem Befehl `ON EVENT CALL`.

Eine **fehlerbezogene Methode** ist eine unterbrechende Projektmethode. Immer wenn ein Fehler oder eine Ausnahme auftreten, läuft diese Methode in dem Prozess ab, in welchem sie installiert ist. Weitere Informationen dazu finden Sie unter dem Befehl `ON ERR CALL`.

## Rekursive Projektmethoden

Projektmethoden können sich auch selbst aufrufen. Beispiel:

- Die Methode A ruft die Methode B auf, die A aufruft, so ruft A wieder B auf, usw.
- Eine Methode kann sich selbst aufrufen.

Das nennt man Rekursion. Die 4D Programmiersprache unterstützt Rekursivität.

Hier ein Beispiel. Wir haben eine Tabelle `[Friends and Relatives]`, die extrem vereinfacht, so aussieht:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

Für dieses Beispiel nehmen wir an, dass die Werte der Datenfelder einmalig sind, d. h. es gibt nicht zwei Personen mit demselben Namen. Sie wollen für einen gegebenen Namen folgenden Satz erstellen: “John, mein Freund, der das Kind ist von Paul, der das Kind ist von Jane, die das Kind ist von Robert, der das Kind ist von Eleanor, tut dies für sein Leben gern!”:

1. Sie können den Satz folgendermaßen anlegen:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. oder folgendermaßen:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

mit der rekursiven Methode `Genealogy of`:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence

 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Beachten Sie die Methode `Genealogy of`, die sich selbst aufruft.

Die erste Möglichkeit ist ein **iterativer Algorithmus**,  die zweite ein **rekursiver Algorithmus**.

Sie können beim Einfügen von Code wie im oben aufgeführten Beispiel sowohl iterative als auch rekursive Methoden schreiben. Rekursion macht die Programmierung im allgemeinen präziser, leichter zu lesen und zu warten, sie ist jedoch nicht zwingend.

Einige typische Verwendungen für Rekursion in 4D sind:

- Datensätze in Tabellen bearbeiten, die wie im obigen Beispiel miteinander verknüpft sind.
- Dokumente und Ordner auf Ihrer Festplatte mit den Befehlen `FOLDER LIST` und `DOCUMENT LIST` durchlaufen. Ein Ordner kann Ordner und Dokumente enthalten, die Unterordner selbst können Ordner und Dokumente enthalten, usw.

**Wichtig:** Rekursive Abfragen sollten immer an einem bestimmten Punkt enden. Im Beispiel ruft sich die Methode `Genealogy of` nicht mehr selbst auf, wenn die Suche keinen Datensatz zurückgibt. Ohne Abfragen dieser Bedingung würde sich die Methode endlos aufrufen; 4D gibt dann evtl. eine Fehlermeldung “Speicher voll” zurück, da es keinen Platz mehr hat zum Stapeln der Aufrufe (so wie bei den in der Methode verwendeten Parametern und lokalen Variablen).

## Project method properties

After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode. 

The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.

To modify the properties of a project method:

1.  In the [Code Editor](../code-editor/interface.md):
* select the **Method Properties...** command in the **Method** menu
* on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu. The **Method Properties** dialog appears.

**Note:** A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

#### Name  

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. 

**Warning:** Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). With this function, you can automatically update the name wherever the method is called throughout the Design environment.

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name

**Note:** Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. 

#### Attributes  

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

##### Invisible  

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box (see [From the Execute Method dialog box](#from-the-execute-method-dialog-box)). 

When you make a project method invisible, it is still available to database programmers. It remains listed on the [Current form table](https://doc.4d.com/4Dv19R5/4D/19-R5/Current-form-table.301-5830420.en.html) of the Explorer and in the list of routines in the Code Editor.

##### Shared by components and host database  

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases. 

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

##### Execute on Server  

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called. 

For more information on this option, refer to [Execute on Server attribute](#execute-on-server).

#### Execution mode  

This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode. 

If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. The compiler will then check that these methods are actually thread-safe.

**Note:** Execution in preemptive mode is only available in compiled mode. For more information, refer to the [Preemptive 4D processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html) section.

The following options are provided:

-   **Can be run in preemptive processes**: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".

When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see [When is a process started preemptively?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

-   **Indifferent **(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".

When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.\

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html) command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

***Particular case*:** If the method has also the **Shared by components and host database** property (see [Project method properties](https://doc.4d.com/4Dv19R5/4D/19-R5/Project-method-properties.300-5851552.en.html)), setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**. 

#### Available through  

Availability attributes specify the external services which are allowed to explicitly call the method.

##### Web Services  

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

##### Published in WSDL  

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689). 

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png). 

##### 4D tags and URLs (4DACTION...)  

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special 4DACTION URL used for calling 4D methods, nor the special 4DSCRIPT, 4DTEXT and 4DHTML tags (as well as the former 4DVAR and 4DHTMLVAR tags). For more information, refer to [URLs and Form Actions](https://doc.4d.com/4Dv19R5/4D/14-R2/URLs-and-Form-Actions.300-1342176.en.html) and [4D Transformation Tags](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-Transformation-Tags.300-5830552.en.html) in the 4D *Language Reference* manual.

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

##### SQL  

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D. 

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Hinweise:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### REST Server  

*This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. *

#### Batch setting for method attributes  

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

For batch setting of method attributes:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.
2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch. The character string is used as a search criterion for the method names. Use the wildcard character @ to help define groups of methods:
   -   To designate methods whose names begin with..., type @ at the end of the string. For example: web@
    -   To designate methods whose names contain..., type @ in the middle of the string. For example: web@write
    -   To designate methods whose names end with..., type @ at the beginning of the string. For example: @write
    -   To designate all of the methods, just type @ in the area.\
 **Notes:**
        -   The search does not take upper/lower case into account.
        -   You can enter several @ characters in the string, for example dtro_@web@pro.@
3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied. **Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.
4.  Click on **Apply**. The modification is applied instantly to all the project methods designated by the character string entered.

## Executing methods

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application. 

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

Moreover, with 4D Server, you can indicate whether 4D Server should execute a project method on the server machine or on other clients' machines. You can execute methods in two ways:

-   From the [Code Editor](../code-editor/overview.md) window,
-   From the [Execute Method](#from-the-execute-method-dialog-box) dialog box (project methods only).

### From the Code Editor 

Each [**Code Editor**](../code-editor/overview.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired:

![](assets/en/concepts/execute-method.png)

This button is only active for project methods and for the following database methods:

-   On Startup
-   On Exit
-   On Server Startup
-   On Server Shutdown

The following execution modes are available:

-   **Run new process**: Creates a process and runs the method in standard mode in this process.
-   **Run and debug new process**: Creates a new process and displays the method in the Debugger window for step by step execution in this process.
-   **Run in Application process**: Runs the method in standard mode in the context of the Application process (in other words, the record display window).
-   **Run and debug in Application process**: Displays the method in the Debugger window for step by step execution in the context of the Application process (in other words, the record display window).

#### From the Execute Method dialog box  

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear. 

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section. 

**4D Server Note**: The **Debug** option is not available if you execute the method on the server.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D *Language Reference* manual.

**4D Server Note**:

-   If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call the *stored procedure*, is created on the server machine in order to execute the method.

   This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.

-   You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.en.html).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.