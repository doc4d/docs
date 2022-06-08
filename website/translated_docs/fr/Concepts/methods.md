---
id: methods
title: Méthodes
---


Une méthode est un morceau de code qui exécute une ou plusieurs actions. Une méthode est composée de plusieurs lignes d’instructions. Une ligne d’instructions effectue une action. Cette ligne d’instruction peut être simple ou complexe. Cette ligne peut être aussi longue que vous voulez (elle peut comporter jusqu’à 32 000 caractères, ce qui est normalement suffisant pour la plupart des instructions).

La taille maximale d’une méthode est limitée à 2 Go de texte ou 32 000 lignes de code.

## Types de méthodes

Dans le langage 4D, il existe plusieurs catégories de méthodes : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée :

| Type                             | Contexte d'appel                                                                                                            | Accepte les paramètres | Description                                                                                                                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Méthode**                      | À la demande, lorsque le nom de la méthode projet est appelé (voir [Appel de méthodes de projet](#calling-project-methods)) | Oui                    | Peut contenir du code pour exécuter des actions personnalisées. Une fois que votre méthode projet est créée, elle devient partie intégrante du langage du projet.                                                       |
| **Méthode objet (widget)**       | Automatique, lorsqu'un événement implique l'objet auquel la méthode est associée                                            | Non                    | Propriété d'un objet formulaire (également appelé widget)                                                                                                                                                               |
| **Méthode formulaire**           | Automatique, lorsqu'un événement implique le formulaire auquel la méthode est associée                                      | Non                    | Propriété d'un formulaire. Vous pouvez utiliser une méthode formulaire pour gérer les données et les objets, mais il est généralement plus simple et plus efficace d'utiliser une méthode objet dans ces cas de figure. |
| **Trigger** (ou *méthode table*) | Automatique, chaque fois que vous manipulez les enregistrements d'une table (Ajouter, Supprimer, Modifier)                  | Non                    | Propriété d'une table. Les triggers sont des méthodes qui peuvent éviter les opérations 'illégales' effectuées avec les enregistrements de votre base.                                                                  |
| **Méthode base**                 | Automatique, lorsqu'un événement se produit sur la session de travail                                                       | Oui (prédéfini)        | Il existe 16 méthodes base dans 4D. Voir la section Méthodes bases                                                                                                                                                      |


> Le langage 4D prend également en charge les **fonctions de classe** (Class functions), qui peuvent être appelées dans le contexte d'une instance d'objet. Les fonctions de classe peuvent être intégrées (par exemple `collection.orderBy()` ou `entity.save()`), ou [créées par le développeur 4D](classes.md#function).


## Méthodes projet

Une méthode projet peut tenir les rôles suivants, en fonction de la manière dont elle est exécutée et utilisée :

- Sous-routine
- Objet formule
- Méthode de menu
- Méthode de gestion de process
- Méthode de gestion d’événements et d'erreurs

### Sous-routines

Une sous-routine est une méthode projet qui peut être considérée comme une méthode asservie. D’autres méthodes lui demandent d’effectuer des tâches. Une sous-routine qui retourne une valeur est appelée une fonction.

Lorsque vous créez une méthode projet, elle devient partie intégrante du langage du prjoet dans lequel elle a été créée. Vous pouvez alors l'appeler à partir d'autres méthodes (méthode projet, méthode objet, etc.) de la même manière que vous appelez les commandes intégrées de 4D. Une méthode projet utilisée de cette manière est appelée une sous-routine.

L'utilisation de sous-routines procure les avantages suivants :

- Réduction du code répétitif,
- Clarification des méthodes,
- Modification plus facile des méthodes,
- Création de code modulaire

Imaginons par exemple que vous travaillez sur un projet de clients. A mesure que vous construisez le projet, vous vous apercevez que vous répétez souvent certaines tâches, telles que la recherche d’un client et la modification de son enregistrement. Le code nécessaire à l’accomplissement de cette opération pourrait être :

```4d
  // Recherche d'un client
 QUERY BY EXAMPLE([Clients])
  // Sélection du formulaire entrée
 FORM SET INPUT([Clients];"Saisie de données")
  // Modification de l'enregistrement du client
 MODIFY RECORD([Clients])
```

Si vous n’utilisez pas de sous-routines, vous devrez écrire ce code à chaque fois que vous voudrez modifier l’enregistrement d’un client. Si cette opération peut être réalisée dans dix endroits différents de votre projet, vous devrez la réécrire dix fois. Grâce aux sous-routines, vous ne l’écrirez qu’une seule fois en tout. C’est le premier avantage des sous-routines : réduire la quantité de code à écrire.

Si le code ci-dessus était une méthode projet appelée `MODIFY_CUSTOMER`, vous l’exécuteriez simplement en inscrivant son nom dans une autre méthode. Par exemple, pour modifier l’enregistrement d’un client puis l’imprimer, vous n’auriez qu’à écrire :

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Cette possibilité simplifie énormément vos méthodes. Dans l’exemple ci-dessus, il n’est pas nécessaire de savoir comment fonctionne la méthode `MODIFY_CUSTOMER`, mais uniquement ce qu’elle fait. C’est le deuxième avantage que vous pouvez tirer de l’utilisation de sous-routines : la clarification de votre code. Ainsi, ces méthodes deviennent en quelque sorte des extensions du langage de 4D.

Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule méthode, et non dix. C’est un autre avantage des sous-routines : faciliter les modifications de votre code.

Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d’entre eux effectuant une tâche logique. Examinez le code suivant, tiré d’un projet de gestion de compte courant :

```4d
 FIND_CLEARED _CHECKS // Rechercher les chèques émis
 RECONCILE_ACCOUNT // Rapprocher le compte
PRINT_CHECK_BOOK_REPORT // Imprimer un relevé
```

Même pour quelqu’un qui ne connaît pas le projet, le code est clair. Il n’est pas nécessaire d’examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d’instructions et effectuer des opérations complexes, mais l’important est ce qu’elles font. Nous vous conseillons de découper votre code en tâches logiques, ou modules, à chaque fois que c’est possible.


### Objet formule

Vous pouvez encapsuler vos méthodes projets dans les objets **formule** et les appeler à partir de vos objets.

Les commandes `Formula` ou `Formula from string` vous permettent de créer des objets formule natifs que vous pouvez encapsuler dans des propriétés d'objets. Vous pouvez ainsi implémenter des méthodes d'objets personnalisées.

Pour exécuter une méthode stockée dans une propriété d'objet, utilisez l'opérateur **( )** après le nom de la propriété. Par exemple :

```4d
//myAlert
ALERT("Hello world!")
```

`myAlert` peut ensuite être encapsulé dans n'importe quel objet et peut être appelé :

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //affiche "Hello world!"
```

La syntaxe avec des crochets est également prise en charge :

```4d
$o["custom_Alert"]() //affiche "Hello world!"
```

Vous pouvez appeler votre formule en lui [passant des paramètres](Concepts/parameters.md) $1, $2, etc., tout comme pour les méthodes projet de 4D :

```4d
//méthode fullName
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Vous pouvez encapsuler `fullName` dans un objet :

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// équivalent à $result:=fullName("param1";"param2")
```

Lorsqu'elles sont associées à la fonction `This`, ces méthodes objets vous permettent d'écrire du code générique très puissant. Par exemple :

```4d
//méthode fullName2 
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

La méthode agit ensuite comme un nouvel attribut calculé qui peut être ajoutée aux autres attributs :

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //ajouter la méthode  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



A note que même si elle n'a pas de paramètres, une méthode objet devant être exécutée doit être appelée avec des parenthèses ( ). En appelant uniquement une seule propriété, une nouvelle référence à la formule sera retournée (et ne sera pas exécutée) :

```4d
$o:=$f.message //retourne l'objet formule en $o
```

### Méthodes de menu
Une méthode de menu est appelée lorsque la commande de menu personnalisé à laquelle elle est associée est sélectionnée. Vous assignez la méthode à la commande de menu dans l’éditeur de menus de 4D. Lorsque l’utilisateur sélectionne la commande de menu, la méthode est exécutée. En créant des menus personnalisés qui appellent des méthodes de menu qui exécutent des actions spécifiques, vous créez des interfaces personnalisées pour vos applications de bureau.

Les commandes de menus personnalisés peuvent déclencher une ou plusieurs actions. Par exemple, une commande de menu de saisie d’enregistrements peut appeler une méthode effectuant deux actions : afficher le formulaire entrée approprié et appeler la commande `AJOUTER ENREGISTREMENT` jusqu’à ce que l’utilisateur annule la saisie de nouveaux enregistrements.

L’automatisation de séquences d’actions est une possibilité très puissante du langage de programmation de 4D. A l’aide des menus personnalisés, vous pouvez automatiser des séquences de tâches, vous permettez aux utilisateurs de naviguer plus facilement dans votre application.


### Méthodes de gestion de process

Une **méthode projet** est une méthode projet appelée lorsqu’un process est démarré. Le process existera tant que la méthode sera en cours d'exécution. A noter qu'une méthode de menu associée à une commande de menu pour laquelle la propriété *Démarrer un nouveau process* est sélectionnée, est aussi la méthode de gestion de process pour le process créé.

### Méthodes de gestion d’événements et d'erreurs
Une **méthode de gestion d’événements** est une méthode dédiée à la gestion des événements, qui s'exécute dans un process différent de celui de la méthode de gestion des process. Généralement, pour la gestion des événements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de données, 4D détecte les clics souris et les touches enfoncées, puis appelle les méthodes objet et formulaire correspondantes, vous permettant ainsi de prévoir dans ces méthodes les traitements appropriés aux événements. Pour plus d'informations, reportez-vous à la description de la commande `APPELER SUR EVENEMENT`.

Une **méthode de gestion d’erreurs** est une méthode projet d'interruption. Elle s'exécute à l'intérieur du process dans lequel elle a été installée à chaque fois qu'une erreur se produit. Pour plus d'informations, reportez-vous à la description de la commande `APPELER SUR ERREUR`.

## Méthode projet récursives

Des méthodes projet peuvent s'appeler les unes les autres. Par exemple :

- Une méthode A peut appeler une méthode B, qui appelle A, donc A appelle B de nouveau, etc.
- Une méthode peut s'appeler elle-même.

Cela s'appelle la récursivité. Le langage de 4D supporte pleinement la récursivité.

Examinons l'exemple suivant : Examinons l'exemple suivant : vous disposez d'une table `[Amis et relations]` composée de l'ensemble de champs suivant (très simplifié) :
- `[Amis et parents]Nom`
- `[Amis et parents]Enfant'Nom`

Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le même nom). A partir d'un nom, vous voulez écrire la phrase “Un de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !” :

1. Vous pouvez procéder de la manière suivante :

```4d
 $vsName:=Request("Saisissez le nom :";"Pierre")
 Si(OK=1)
    QUERY([Amis et parents];[Amis et parents]Nom=$vsNom)
    If(Records in selection([Amis et parents])>0)
       $vtHistoireComplète:="Un de mes amis, "+$vsNom
       Repeat
          QUERY([Amis et parents];[Amis et parents]Enfant'Nom=$vsNom)
          $vlResultRecherche:=Records in selection([Amis et parents])
          If($vlResultRecherche>0)
             $vtHistoireComplète:=$vtHistoireComplète+" qui est le rejeton de "+[Amis et parents]Nom
             $vsNom:=[Amis et parents]Nom
          End if
       Until($vlResultRecherche=0)
       $vtHistoireComplète:=$vtHistoireComplète+", fait cela pour gagner sa vie !"
       ALERT($vtHistoireComplète)
    End if
 End if
```

2. Vous pouvez également procéder ainsi :

```4d
 $vsNom:=Request("Saisissez le nom :";"Pierre")
  If(OK=1)
    QUERY([Amis et parents];[Amis et parents]Nom=$vsNom)
    If(Records in selection([Amis et parents])>0)
       ALERT("Un de mes amis, "+Généalogie de($vsNom)+", fait cela pour gagner sa vie !")
    End if
 End if
    End if
 End if
```

en utilisant la fonction récursive `Généalogie de` suivante :

```4d
  // Méthode projet Généalogie de
  // Généalogie de ( Chaîne ) -> Texte
  // Généalogie de ( Nom ) -> Partie de la phrase

 $0:=$1
 QUERY([Amis et parents];[Amis et parents]Enfant'Nom=$1)
If(Enregistrements trouves([Amis et parents])>0)
    $0:=$0+" qui est le rejeton de "+Généalogie de([Amis et parents]Nom)
End if
```

Vous notez que la méthode `Généalogie de` s'appelle elle-même.

La première manière de procéder utilise un **algorithme itératif**. La seconde manière utilise un **algorithme récursif**.

Lorsque vous implémentez du code pour traiter des cas comme celui décrit ci-dessus, vous aurez toujours le choix entre écrire des méthodes utilisant des algorithmes itératifs ou récursifs. Typiquement, la récursivité fournit un code plus concis, plus facile à lire et à maintenir, mais elle est facultative.

Dans 4D, la récursivité est typiquement utilisée pour :

- Traiter les enregistrements de tables liées les unes aux autres de la même manière que décrit dans l'exemple ci-dessus.
- Naviguer parmi les documents et les dossiers de votre disque à l'aide des commandes `LISTE DES DOSSIERS` et `LISTE DES DOCUMENTS`. Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-mêmes contenir des dossiers et des documents, etc.

**Important :** Les appels récursifs doivent toujours se terminer à un moment donné. Dans l'exemple ci-dessus, la méthode `Généalogie de` cesse de s'appeler elle-même lorsque la recherche ne trouve plus d'enregistrement. Sans ce test conditionnel, la méthode s'appellerait indéfiniment et 4D pourrait au bout d'un certain temps retourner l'erreur “La pile est pleine” car le programme n'aurait plus assez de place pour "empiler" les appels (ainsi que les paramètres et les variables locales utilisés dans la méthode).

## Project method properties

After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode. 

The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.

To modify the properties of a project method:

1.  In the [Code Editor](../code-editor/interface.md):
* select the **Method Properties...** command in the **Method** menu
* on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu. The **Method Properties** dialog appears.

**Note:** A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

#### Nom  

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. 

**Warning:** Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). With this function, you can automatically update the name wherever the method is called throughout the Design environment.

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name

**Note:** Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. 

#### Attributs  

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

**Notes :**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### Serveur REST  

*This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. 

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