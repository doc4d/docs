---
id: EntityClass
title: Entity
---

Une [entity](ORDA/dsMapping.md#entity) est une instance d'une [Dataclass](ORDA/dsMapping.md#dataclass), tel un enregistrement de la table correspondant à la dataclass contenue dans son datastore associé. Elle contient les mêmes attributs que la dataclass ainsi que les valeurs des données et des propriétés et fonctions spécifiques.


### Sommaire

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->|
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->|
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->|
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.first().Summary -->|
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->|
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->|
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->|
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->|
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->|
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->|
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.last().Summary -->|
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->|
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.next().Summary -->|
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->|
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->|
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.save().Summary -->|
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->|
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->|
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary -->|
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->|






<!-- REF EntityClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |
</details>

<!-- REF EntityClass.attributeName.Syntax -->
***.attributeName*** : any<!-- END REF -->


#### Description

Tout attribut de dataclass est disponible en tant que propriété des entités de la dataclass, et qui <!-- REF EntityClass.attributeName.Summary -->stocke la valeur de l'attribut pour l'entité<!-- END REF -->.
> Les attributs de dataclass peuvent également être obtenus en utilisant la syntaxe alternative avec \[ ].

Le type de valeur de l'attribut dépend du type ([kind](DataClassAttributeClass.md#kind)) d'attribut (relation ou stockage) :

*   Si le type de *attributeName* est **storage** : `.attributeName` retourne une valeur du même type que *attributeName*.
*   Si le type de *attributeName* est **relatedEntity** : `.attributeName` retourne une entité reliée. Les valeurs de l'entité liée sont directement disponibles par le biais des propriétés en cascade, par exemple "myEntity.employer.employees\[0].lastname".
*   Si le type de *attributName* est **relatedEntities** : `.attributeName` retourne une nouvelle entity selection d'entités liées. Les doublons sont supprimés (une entity selection non ordonnée est retournée).


#### Exemple

```4d
 var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Créer une nouvelle entity
$myEntity.name:="Dupont" //assigner 'Dupont' à l'attribut 'name'
$myEntity.firstname:="John" //assigner 'John' à l'attribut 'firstname' 
$myEntity.save() //sauvegarder l'entity
```

<!-- END REF -->




<!-- REF EntityClass.clone().Desc -->
## .clone()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |
</details>


<!-- REF #EntityClass.clone().Syntax -->
**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->
| Paramètres | Type      |    | Description                                  |
| ---------- | --------- |:--:| -------------------------------------------- |
| Résultat   | 4D.Entity | <- | Nouvelle entité référençant l'enregistrement |
<!-- END REF -->


#### Description

La fonction `.clone()` <!-- REF #EntityClass.clone().Summary -->crée en mémoire une nouvelle entité référençant le même enregistrement que l'entité d’origine<!-- END REF -->. Cette fonction vous permet de mettre à jour des entités séparément.
> A noter que toute modification apportée aux entités n'est stockée dans l'enregistrement référencé qu'au moment où la fonction [`.save( )`](#save) est exécutée.

Cette fonction ne peut être utilisée qu'avec des entités déjà enregistrées dans la base de données. Elle ne peut pas être appelée sur une entité nouvellement créée (pour laquelle [`.isNew()`](#isnew) retourne **True**).


#### Exemple

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Les mises à jour effectuées sur $emp ne le sont pas sur $empCloned

```

<!-- END REF -->





<!-- REF EntityClass.diff().Desc -->
## .diff()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |
</details>

<!-- REF #EntityClass.diff().Syntax -->
**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->


<!-- REF #EntityClass.diff().Params -->
| Paramètres          | Type       |    | Description                            |
| ------------------- | ---------- |:--:| -------------------------------------- |
| entityToCompare     | 4D.Entity  | -> | Entité à comparer à l'entité d'origine |
| attributesToCompare | Collection | -> | Noms des attributs à comparer          |
| Résultat            | Collection | <- | Différences entre les entités          |
<!-- END REF -->


#### Description

La fonction `.diff()` <!-- REF #EntityClass.diff().Summary -->compare le contenu de deux entités et retourne leurs différences<!-- END REF -->.

Dans le paramètre *entityToCompare*, passez l'entité à comparer à l'entité d'origine.

Dans le paramètre *attributesToCompare*, vous pouvez désigner les attributs spécifiques à comparer. Si le paramètre est passé, la comparaison est effectuée uniquement sur les attributs spécifiés. S'il est omis, toutes les différences entre les entités sont retournées.

Les différences sont retournées sous forme de collection d'objets dont les propriétés sont :

| Nom de propriété | Type                      | Description                                  |
| ---------------- | ------------------------- | -------------------------------------------- |
| attributeName    | Chaine                    | Nom de l'attribut                            |
| value            | Dépend du type d'attribut | Valeur de l'attribut dans l'entité d'origine |
| otherValue       | Dépend du type d'attribut | Valeur de l'attribut dans *entityToCompare*  |

Seuls les attributs dont les valeurs diffèrent sont inclus dans la collection. Si aucune différence n'est trouvée, `.diff()` retourne une collection vide.

La fonction s'applique aux attributs dont le [kind](DataClassAttributeClass.md#kind) est **storage** ou **relatedEntity**. Dans le cas où une entité liée a été mise à jour (c'est-à-dire la clé étrangère), le nom de l'entité liée et de sa clé primaire sont retournés comme propriétés *attributeName* (*value* et *otherValue* sont vides pour l'entité liée).

Si l'une des entités comparées vaut **Null**, une erreur est retournée.

#### Exemple 1


```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // Toutes les différences sont retournées
 $diff2:=$clone.diff(employee;New collection"firstName";"lastName"))
  // Seules les différences relevées sur firstName et lastName sont retournées
```

$diff1:

```4d
[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    },
    {
        "attributeName": "salary",
        "value": 66600,
        "otherValue": 500
    }
]
$diff2:

[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    }
]
```

#### Exemple 2

```4d
 var vCompareResult1; vCompareResult2; vCompareResult3; $attributesToInspect : Collection
 vCompareResult1:=New collection
 vCompareResult2:=New collection
 vCompareResult3:=New collection
 $attributesToInspect:=New collection

 $e1:=ds.Employee.get(636)
 $e2:=ds.Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds.Company.get(117)
 $e1.employer:=$c
 $e2.salary:=100

 $attributesToInspect.push("firstName")
 $attributesToInspect.push("lastName")

 vCompareResult1:=$e1.diff($e2)
 vCompareResult2:=$e1.diff($e2;$attributesToInspect)
 vCompareResult3:=$e1.diff($e2;$e1.touchedAttributes())
```

vCompareResult1 (toutes les différences sont retournées) :

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "salary",
        "value": 33500,
        "otherValue": 100
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
  {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 de Company
        "otherValue": "[object Entity]"// Entity 118 de Company
    }
]
```

vCompareResult2 (seules les différences sur $attributesToInspect sont retournées)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    }
]
```

vCompareResult3 (seules les différences sur les attributs touchés de $e1 sont retournés)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
     {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 de Company
        "otherValue": "[object Entity]"// Entity 118 de Company

    }
]
```


<!-- END REF -->



<!-- REF EntityClass.drop().Desc -->
## .drop()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.drop().Syntax -->
**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->
| Paramètres | Type        |    | Description                                                                                  |
| ---------- | ----------- |:--:| -------------------------------------------------------------------------------------------- |
| mode       | Entier long | -> | `dk force drop if stamp changed` : Force la suppression même si le marqueur interne a changé |
| Résultat   | Objet       | <- | Résultat de l'opération de suppression                                                       |
<!-- END REF -->

#### Description

La fonction `.drop()` <!-- REF #EntityClass.drop().Summary -->supprime les données de l'entité de la table associée à la dataclass<!-- END REF -->. A noter que l'entité reste en mémoire.

Dans une application multiprocess ou multi-utilisateurs, la fonction `.drop()` est exécutée en mode ["verrouillage optimiste"](ORDA/entities.md#verrouillage-d-une-entite) dans lequel un marqueur de verrouillage interne est automatiquement incrémenté à chaque sauvegarde de l'enregistrement.

Par défaut, lorsque le paramètre *mode* est omis, la méthode retourne une erreur (cf. ci-dessous) si l'entité a été modifiée (i.e. le marqueur interne a changé) entre-temps par un autre process ou utilisateur.

Sinon, vous pouvez passer l'option `dk force drop if stamp changed` dans le paramètre *mode* : dans ce cas, l'entité est supprimée même si la valeur du marqueur interne est différente (si la clé primaire est identique).

**Résultat**

L'objet retourné par `.drop( )` contient les propriétés suivantes :

| Propriété     |                     | Type                | Description                                                                                                    |
| ------------- | ------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| success       |                     | boolean             | vrai si l'action de suppression a été effectuée avec succès, sinon Faux.                                       |
|               |                     |                     | ***Disponible uniquement en cas d'erreur :***                                                                  |
| status(*)     |                     | number              | Code d'erreur, voir ci-dessous                                                                                 |
| statusText(*) |                     | Texte               | Description de l'erreur, voir ci-dessous                                                                       |
|               |                     |                     | ***Disponible uniquement en cas d'erreur de verrouillage pessimiste :***                                       |
| LockKindText  |                     | Texte               | "Locked by record"                                                                                             |
| lockInfo      |                     | object              | Information sur l'origine du verrouillage                                                                      |
|               | task_id             | number              | Id du process                                                                                                  |
|               | user_name           | Texte               | Nom d'utilisateur de la session sur la machine                                                                 |
|               | user4d_alias        | Texte               | Alias utilisateur si défini avec `SET USER ALIAS`, sinon le nom d'utilisateur dans le répertoire de la base 4D |
|               | host_name           | Texte               | Nom de la machine                                                                                              |
|               | task_name           | Texte               | Nom du process                                                                                                 |
|               | client_version      | Texte               |                                                                                                                |
|               |                     |                     | ***Disponible uniquement en cas d'erreur critique (clé primaire dupliquée, disque plein..) :***                |
| errors        |                     | collection d'objets |                                                                                                                |
|               | message             | Texte               | Message d'erreur                                                                                               |
|               | component signature | Texte               | signature du composant interne (e.g. "dmbg" pour le composant de base de données)                              |
|               | errCode             | number              | Code d'erreur                                                                                                  |

(\*) Les valeurs suivantes peuvent être retournées dans les propriétés *status* et *statusText* de l'objet *Résultat* en cas d'erreur :

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                              |
| ----------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. Cette erreur peut se produire dans les cas suivants :<br><li>l'entité a été supprimée (le stamp est modifié et l'espace mémoire est libéré)</li><li>l'entité a été supprimée et remplacée par une autre avec une clé primaire différente (le stamp est modifié et une nouvelle entité occupe l'espace mémoire). Avec drop( ), cette erreur peut être retournée lorsque l'option dk force drop if stamp changed est utilisée. Avec lock( ), cette erreur peut être retournée lorsque l'option dk reload if stamp changed est utilisée</li><p>**statusText associé** : "Entity does not exist anymore"            |
| `dk status locked`                        | 3      | L'entité est verrouillée par un verrou pessimiste.<br>**statusText associé** : "Already locked"                                                                                                                                                    |
| `dk status serious error`                 | 4      | Une erreur critique peut être une erreur de bas niveau de la base de données (ex. clé dupliquée), une erreur matérielle, etc.<br>**statusText associé** : "Other error"                                                                            |
| `dk status stamp has changed`             | 2      | La valeur du marqueur interne (stamp) de l'entité ne correspond pas à celle de l'entité stockée dans les données (verrouillage optimiste).<br><li>avec `.save( )` : erreur uniquement si l'option `dk auto merge` n'est pas utilisée</li><li>avec `.drop( )` : erreur uniquement si l'option `dk force drop if stamp changed` n'est pas utilisée</li><li>avec `.lock( )` : erreur uniquement si l'option `dk reload if stamp changed` n'est pas utilisée</li><li>**statusText associé** : "Stamp has changed"</li> |


#### Exemple 1

Exemple sans option `dk force drop if stamp changed` :

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //L'entité supprimée reste en mémoire
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Exemple 2

Même exemple avec l'option `dk force drop if stamp changed` :

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //L'entité supprimée reste en mémoire
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
``` 

<!-- END REF -->




<!-- REF EntityClass.first().Desc -->
## .first()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.first().Syntax -->
**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->
| Paramètres | Type      |    | Description                                                                |
| ---------- | --------- |:--:| -------------------------------------------------------------------------- |
| Résultat   | 4D.Entity | <- | Référence à la première entité de l'entity selection (Null si non trouvée) |
<!-- END REF -->

#### Description

La fonction `.first()` <!-- REF #EntityClass.first().Summary -->retourne une référence vers l'entité en première position dans l'entity selection à laquelle appartient l'entité<!-- END REF -->.

Si l'entité n'appartient à aucune entity selection (i.e. [.getSelection( )](#getselection) retourne Null), la fonction renvoie une valeur Null.

#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Cette entity selection contient 3 entités
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee est la première entité de l'entity selection $employees
```

<!-- END REF -->



<!-- REF EntityClass.fromObject().Desc -->
## .fromObject()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->
**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->
| Paramètres | Type  |    | Description                        |
| ---------- | ----- |:--:| ---------------------------------- |
| filler     | Objet | -> | Objet avec lequel remplir l'entité |
<!-- END REF -->

#### Description

La fonction `.fromObject()` <!-- REF #EntityClass.fromObject().Summary -->remplit les attributs de l'entité avec le contenu de *filler*<!-- END REF -->.
> Cette fonction modifie l'entity d'origine.

La correspondance entre l'objet et l'entité est établie à partir des noms de propriétés/d'attributs :

*   Si une propriété de l'objet n'existe pas dans la dataclass, elle est ignorée.
*   Les types de données doivent être équivalents. S'il existe une différence de type entre l'objet et la dataclass, 4D essaie de convertir les données lorsque cela est possible (voir [`Conversion des types de données`](Concepts/data-types.md#converting-data-types)), sinon l'attribut demeure intact.
*   La clé primaire peut être donnée telle quelle ou avec une propriété "__KEY" (remplie avec la valeur de la clé primaire). Si elle n'existe pas déjà dans la dataclass, l'entité est créée avec la valeur donnée lorsque [.save()](#save) est appelé. Si la clé primaire n'est pas fournie, l'entité est créée et la valeur de la clé primaire est affectée en fonction des règles de la base de données. L'auto-incrémentation n'est calculée que si la clé primaire est nulle.

*filler* peut contenir une related entity dans les conditions suivantes :

*   *filler* contient lui-même la clé étrangère, ou
*   *filler* contient une propriété de type objet qui a le même nom que l'entité relative, contenant une seule propriété nommée "\_\_KEY".
*   si l'entité relative n'existe pas, elle est ignorée.

#### Exemple

Avec l'objet $o suivant :

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity fournie avec clé primaire
    "employerID": 20 // relatedEntity fournie avec clé primaire
}
```


Le code suivant créera une entité avec les entités relatives manager et employer.


```4d
 var $o : Object
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
 $entity.fromObject($o)
 $entity.save()
```


Vous pouvez également utiliser une entité relative fournie sous forme d'objet :

```4d

{
    "firstName": "Marie",
    "lastName": "Lechat",
    "salary": 68400,
    "birthDate": "1971-09-03T00:00:00.000Z",
    "woman": false,
    "employer": {// relatedEntity fournie sous forme d'objet
        "__KEY": "21"
    },
    "manager": {// relatedEntity fournie sous forme d'objet
        "__KEY": "411"
    }
}
```


<!-- END REF -->




<!-- REF EntityClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->
**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->
| Paramètres | Type         |    | Description                              |
| ---------- | ------------ |:--:| ---------------------------------------- |
| Résultat   | 4D.DataClass | <- | Dataclass à laquelle appartient l'entité |
<!-- END REF -->

#### Description

La fonction `.getDataClass()` <!-- REF #EntityClass.getDataClass().Summary -->retourne la dataclass de l'entité<!-- END REF -->. Cette fonction est utile pour l'écriture du code générique.


#### Exemple

Le code générique suivant duplique toute entité :

```4d
  //méthode duplicate_entity 
  //duplicate_entity($entity) 

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //crée une nouvelle entité dans la dataclass parente
 $entityNew.fromObject($entity.toObject()) //lire tous les attributs
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //réinitialise la clé primaire
 $status:=$entityNew.save() //sauvegarde l'entité dupliquée
```

<!-- END REF -->




<!-- REF EntityClass.getKey().Desc -->
## .getKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.getKey().Syntax -->
**.getKey**( { *mode* : Integer } ) : Text<br>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->
| Paramètres | Type        |    | Description                                                                              |
| ---------- | ----------- |:--:| ---------------------------------------------------------------------------------------- |
| mode       | Entier long | -> | `dk key as string`: retourner la clé primaire en texte, quel que soit son type d'origine |
| Résultat   | Texte       | <- | Valeur de la clé primaire texte de l'entité                                              |
| Résultat   | Entier long | <- | Valeur de la clé primaire numérique de l'entité                                          |

<!-- END REF -->

#### Description

La fonction `.getKey()` <!-- REF #EntityClass.getKey().Summary -->retourne la valeur de la clé primaire de l'entité<!-- END REF -->.

Les clés primaires peuvent être des nombres (integer) ou des textes. Vous pouvez "forcer" la méthode à retourner la valeur de clé primaire sous forme de chaîne, quel que soit son type d'origine, en passant l'option `dk key as string` dans le paramètre *mode*.

#### Exemple


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```

<!-- END REF -->




<!-- REF EntityClass.getSelection().Desc -->
## .getSelection()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->
**.getSelection()**: 4D.EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->
| Paramètres | Type               |    | Description                                                           |
| ---------- | ------------------ |:--:| --------------------------------------------------------------------- |
| Résultat   | 4D.EntitySelection | <- | Entity selection à laquelle appartient l'entité (Null si non trouvée) |
<!-- END REF -->

#### Description

La fonction `.getSelection()` <!-- REF #EntityClass.getSelection().Summary -->retourne l'entity selection à laquelle appartient l'entité<!-- END REF -->.

Si l'entité n'appartient pas à une entity selection, la fonction renvoie Null.

#### Exemple


```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // Cette entité n'appartient à aucune entity selection
 $employees:=$emp.getSelection() // $employees contient Null

 $employees2:=ds.Employee.query("lastName=:1";"Smith") //Cette entity selection contient 6 entités
 $emp:=$employees2[0]  // Cette entité appartient à une entity selection

 ALERT("L'entity selection contient "+String($emp.getSelection().length)+" entités")
```

<!-- END REF -->



<!-- REF EntityClass.getStamp().Desc -->
## .getStamp()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->
**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->
| Paramètres | Type        |    | Description                                                      |
| ---------- | ----------- |:--:| ---------------------------------------------------------------- |
| Résultat   | Entier long | <- | Valeur du "stamp" de l'entité (0 si l'entité vient d'être créée) |
<!-- END REF -->

#### Description

La fonction `.getStamp()` <!-- REF #EntityClass.getStamp().Summary --> retourne la valeur courante du stamp de l'entité<!-- END REF -->.

Le stamp (marqueur interne) d'une entité est automatiquement incrémenté par 4D à chaque fois qu'une entité est enregistrée sur disque. Il permet de gérer les accès et modifications concurrent(e)s sur les mêmes entités (cf. [**Entity locking**](ORDA/entities.md#verrouillage-d-une-entite)).
> Pour une nouvelle entité (jamais enregistrée), la fonction retourne 0. Pour savoir si une entité vient d'être créée, il est cependant recommandé d'utiliser [.isNew()](#isnew).


#### Exemple


```4d
 var $entity : cs.EmployeeEntity
 var $stamp : Integer

 $entity:=ds.Employee.new()
 $entity.lastname:="Smith"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=1

 $entity.lastname:="Wesson"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=2
```

<!-- END REF -->




<!-- REF EntityClass.indexOf().Desc -->
## .indexOf()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->
**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->
| Paramètres      | Type               |    | Description                                                    |
| --------------- | ------------------ |:--:| -------------------------------------------------------------- |
| entitySelection | 4D.EntitySelection | -> | Entity selection dans laquelle obtenir la position de l'entité |
| Résultat        | Entier long        | <- | Position de l'entité dans l'entity selection                   |
<!-- END REF -->

#### Description

La fonction `.indexOf()` <!-- REF #EntityClass.indexOf().Summary -->retourne la position de l'entité dans une entity selection<!-- END REF -->.

Par défaut, si le paramètre *entitySelection* est omis, la fonction retourne la position de l'entité dans sa propre entity selection (si elle existe). Sinon, elle renvoie la position de l'entité dans l'*entitySelection* spécifiée.

La valeur résultante est comprise entre 0 et la longueur de l'entity selection -1.

*   Si l'entité n'a pas d'entity selection ou n'appartient pas à *entitySelection*, la fonction retourne -1.
*   Si *entitySelection* est Null ou n'appartient pas à la même dataclass que l'entité, une erreur est générée.

#### Exemple


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Cette entity selection contient 3 entités
 $employee:=$employees[1] //Cette entité appartient à l'entity selection
 ALERT("La position de cette entité dans son entity selection est "+String($employee.indexOf())) //1

 $employee:=ds.Employee.get(725) //Cette entité n'appartient pas à l'entity selection
 ALERT("La position de cette entité est "+String($employee.indexOf())) // -1
```

<!-- END REF -->




<!-- REF EntityClass.isNew().Desc -->
## .isNew()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.isNew().Syntax -->
**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->
| Paramètres | Type    |    | Description                                                                               |
| ---------- | ------- |:--:| ----------------------------------------------------------------------------------------- |
| Résultat   | Booléen | <- | Vrai si l'entité vient juste d'être créée et n'a pas encore été enregistrée. Sinon, Faux. |
<!-- END REF -->

#### Description

La fonction`.isNew()` <!-- REF #EntityClass.isNew().Summary --> renvoie Vrai si l'entité à laquelle elle est appliquée vient d'être créée et n'a pas encore été enregistrée dans le datastore<!-- END REF -->. Sinon, elle renvoie Faux.


#### Exemple


```4d
 var $emp : cs.EmployeeEntity

 $emp:=ds.Employee.new()

 If($emp.isNew())
    ALERT("Ceci est une nouvelle entité")
 End if
```

<!-- END REF -->



<!-- REF EntityClass.last().Desc -->
## .last()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.last().Syntax -->
**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->
| Paramètres | Type      |    | Description                                                                |
| ---------- | --------- |:--:| -------------------------------------------------------------------------- |
| Résultat   | 4D.Entity | <- | Référence à la dernière entité de l'entity selection (Null si non trouvée) |
<!-- END REF -->

#### Description

La fonction `.last()` <!-- REF #EntityClass.last().Summary -->renvoie une référence vers l'entité en dernière position dans l'entity selection à laquelle l'entité appartient<!-- END REF -->.

Si l'entité n'appartient à aucune entity selection (i.e. [.getSelection( )](#getselection) retourne Null), la fonction renvoie une valeur Null.


#### Exemple


```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Cette entity selection contient 3 entités $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee est la dernière entité de l'entity selection $employees
```

<!-- END REF -->



<!-- REF EntityClass.lock().Desc -->
## .lock()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.lock().Syntax -->
**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->
| Paramètres | Type        |    | Description                                                                                   |
| ---------- | ----------- |:--:| --------------------------------------------------------------------------------------------- |
| mode       | Entier long | -> | `dk reload if stamp changed` : Recharger avant de verrouiller si le marqueur interne a changé |
| Résultat   | Objet       | <- | Résultat de l'opération lock                                                                  |
<!-- END REF -->

#### Description

La fonction `.lock()` <!-- REF #EntityClass.lock().Summary -->pose un verrou pessimiste sur l'enregistrement référencé par l'entité<!-- END REF -->. Le [verrou est posé](ORDA/entities.md#verrouillage-d-une-entite) pour l'enregistrement et toutes les références de l'entité dans le process courant.

Pour les autres process, cet enregistrement apparaîtra verrouillé (la propriété `result.success` contiendra Faux s'ils tentent de verrouiller la même entité à l'aide de cette fonction). Seules les fonctions exécutées dans la session à l'origine du verrouillage auront la possibilité de modifier et de sauvegarder les attributs de l'entité. L'entité peut être chargée en lecture seulement dans les autres sessions, mais elles ne pourront ni saisir ni sauvegarder des valeurs.

Un enregistrement verrouillé peut être déverrouillé :

*   lorsque la fonction [`unlock()`](#unlock) est appelée sur une entité correspondante dans le même process
*   automatiquement, lorsqu'elle n'est plus référencée par aucune entité en mémoire. Par exemple, si le verrou n'est posé que sur une référence locale d'une entité, celle-ci est déverrouillée à la fin de la fonction. Tant qu'il existe des références à l'entité en mémoire, l'enregistrement reste verrouillé.

Par défaut, lorsque le paramètre *mode* est omis, la méthode retourne une erreur (cf. ci-dessous) si l'entité a été modifiée (i.e. le marqueur interne a changé) entre-temps par un autre process ou utilisateur.

Sinon, vous pouvez passer l'option `dk reload if stamp changed` dans le paramètre *mode* : dans ce cas, aucune erreur n'est générée et l'entité est simplement rechargée si le stamp a changé (si l'entité existe toujours et si la clé primaire est toujours la même).

**Résultat**

L'objet retourné par `.lock( )` contient les propriétés suivantes :

| Propriété        |                     | Type                | Description                                                                                                                             |
| ---------------- | ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| success          |                     | boolean             | vrai si l'action de verrouillage a été effectuée avec succès (ou si l'entité est déjà verrouillée dans le process courant), sinon faux. |
|                  |                     |                     | ***Disponible uniquement si l'option `dk reload if stamp changed` est utilisée :***                                                     |
| **wasReloaded**  |                     | boolean             | vrai si l'entité a été correctement rechargée, sinon faux.                                                                              |
|                  |                     |                     | ***Disponible uniquement en cas d'erreur :***                                                                                           |
| status(\*)     |                     | number              | Code d'erreur, voir ci-dessous                                                                                                          |
| statusText(\*) |                     | Texte               | Description de l'erreur, voir ci-dessous                                                                                                |
|                  |                     |                     | ***Disponible uniquement en cas d'erreur de verrouillage pessimiste :***                                                                |
| lockKindText     |                     | Texte               | "Locked by record"                                                                                                                      |
| lockInfo         |                     | object              | Information sur l'origine du verrouillage                                                                                               |
|                  | task_id             | number              | ID du process                                                                                                                           |
|                  | user_name           | Texte               | Nom d'utilisateur de la session sur la machine                                                                                          |
|                  | user4d_alias        | Texte               | Nom ou alias de l'utilisateur 4D                                                                                                        |
|                  | user4d_id           | number              | Identifiant utilisateur dans le répertoire de la base 4D                                                                                |
|                  | host_name           | Texte               | Nom de la machine                                                                                                                       |
|                  | task_name           | Texte               | Nom du process                                                                                                                          |
|                  | client_version      | Texte               |                                                                                                                                         |
|                  |                     |                     | ***Disponible uniquement en cas d'erreur critique*** (clé primaire dupliquée, disque plein...) :                                        |
| errors           |                     | collection d'objets |                                                                                                                                         |
|                  | message             | Texte               | Message d'erreur                                                                                                                        |
|                  | component signature | Texte               | signature du composant interne (e.g. "dmbg" pour le composant de base de données)                                                       |
|                  | errCode             | number              | Code d'erreur                                                                                                                           |


(\*) Les valeurs suivantes peuvent être retournées dans les propriétés *status* et *statusText* de l'objet *Résultat* en cas d'erreur :

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                                                    |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. Cette erreur peut se produire dans les cas suivants :<li>l'entité a été supprimée (le stamp est modifié et l'espace mémoire est libéré)</li><li>l'entité a été supprimée et remplacée par une autre avec une clé primaire différente (le stamp est modifié et une nouvelle entité occupe l'espace mémoire). Avec `.drop( )`, cette erreur peut être retournée lorsque l'option dk force drop if stamp changed est utilisée. Avec `.lock( )`, cette erreur peut être retournée lorsque l'option dk reload if stamp changed est utilisée.</li><br>**statusText associé** : "Entity does not exist anymore"                                                           |
| `dk status locked`                        | 3      | L'entité est verrouillée par un verrou pessimiste.<p><p>**statusText associé** : "Already locked"                                                                                                                              |
| `dk status serious error`                 | 4      | Une erreur critique peut être une erreur de bas niveau de la base de données (ex. clé dupliquée), une erreur matérielle, etc.<p><p>**statusText associé** : "Other error"                                                      |
| `dk status stamp has changed`             | 2      | La valeur du marqueur interne (stamp) de l'entité ne correspond pas à celle de l'entité stockée dans les données (verrouillage optimiste).<li>avec `.save( )` : erreur uniquement si l'option `dk auto merge` n'est pas utilisée</li><li>avec `.drop( )` : erreur uniquement si l'option `dk force drop if stamp changed` n'est pas utilisée</li><li>avec `.lock( )` : erreur uniquement si l'option `dk reload if stamp changed` n'est pas utilisée</li><br>**statusText associé** : "Stamp has changed" |


#### Exemple 1

Exemple avec erreur :

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(716)
 $status:=$employee.lock()
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```


#### Exemple 2

Exemple avec option `dk reload if stamp changed` :

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(717)
 $status:=$employee.lock(dk reload if stamp changed)
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->



<!-- REF EntityClass.next().Desc -->
## .next()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.next().Syntax -->
**.next()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->
| Paramètres | Type      |    | Description                                                                 |
| ---------- | --------- |:--:| --------------------------------------------------------------------------- |
| Résultat   | 4D.Entity | <- | Référence à l'entité suivante dans l'entity selection (Null si non trouvée) |
<!-- END REF -->

#### Description

La fonction `.next()` <!-- REF #EntityClass.next().Summary -->retourne une référence sur l'entité suivante dans l'entity selection à laquelle appartient l'entité<!-- END REF -->.

Si l'entité n'appartient à aucune entity selection existante (i.e. [.getSelection()](#getselection) retourne Null), la fonction renvoie une valeur Null.

S'il n'y a pas d'entité suivante valide dans l'entity selection (i.e. vous êtes sur la dernière entité de la sélection), la fonction retourne Null. Si l'entité suivante a été supprimée, la fonction renvoie l'entité valide suivante (et finalement Null).


#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Cette entity selection contient 3 entités
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee est la deuxième entité de l'entity selection $employees

```

<!-- END REF -->


<!-- REF EntityClass.previous().Desc -->
## .previous()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.previous().Syntax -->
**.previous()**  : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->
| Paramètres | Type      |    | Description                                                                   |
| ---------- | --------- |:--:| ----------------------------------------------------------------------------- |
| Résultat   | 4D.Entity | <- | Référence à l'entité précédente dans l'entity selection (Null si non trouvée) |
<!-- END REF -->

#### Description

La fonction `.previous()` <!-- REF #EntityClass.previous().Summary --> retourne une référence sur l'entité précédente dans l'entity selection à laquelle appartient l'entité<!-- END REF -->.

Si l'entité n'appartient à aucune entity selection existante (i.e. [.getSelection()](#getselection) retourne Null), la fonction renvoie une valeur Null.

S'il n'y a pas d'entité précédente valide dans l'entity selection (i.e. vous êtes sur la première entité de la sélection), la fonction retourne Null. Si l'entité précédente a été supprimée, la fonction renvoie l'entité valide précédente (et finalement Null).


#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Cette entity selection contient 3 entités
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee est la première entité de l'entity selection $employees
```

<!-- END REF -->



<!-- REF EntityClass.reload().Desc -->
## .reload( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.reload().Syntax -->
**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->
| Paramètres | Type  |    | Description  |
| ---------- | ----- |:--:| ------------ |
| Résultat   | Objet | <- | Objet statut |
<!-- END REF -->

#### Description

La fonction `.reload()` <!-- REF #EntityClass.reload().Summary -->recharge en mémoire le contenu de l'entité<!-- END REF -->à partir des informations stockées dans la table associée à la dataclass dans le datastore. Le rechargement est effectué uniquement si l'entité existe toujours avec la même clé primaire.

**Résultat**

L'objet retourné par `.reload( )` contient les propriétés suivantes :

| Propriété        | Type    | Description                                                                                                                                                        |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| success          | boolean | Vrai si le rechargement a été effectué avec succès, sinon Faux.<p><p>***Disponible uniquement en cas d'erreur*** : |
| status(\*)     | number  | Code d'erreur, voir ci-dessous                                                                                                                                     |
| statusText(\*) | Texte   | Description de l'erreur, voir ci-dessous                                                                                                                           |

(\*) Les valeurs suivantes peuvent être retournées dans les propriétés *status* et *statusText* de l'objet *Résultat* en cas d'erreur :

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                      |
| ----------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. Cette erreur peut se produire dans les cas suivants :<br><li>l'entité a été supprimée (le stamp est modifié et l'espace mémoire est libéré)</li><li>l'entité a été supprimée et remplacée par une autre avec une clé primaire différente (le stamp est modifié et une nouvelle entité occupe l'espace mémoire). Avec `.drop( )`, cette erreur peut être retournée lorsque l'option `dk force drop if stamp changed` est utilisée. Avec `.lock( )`, cette erreur peut être retournée lorsque l'option dk reload if stamp changed est utilisée.</li><br>***statusText associé*** : "Entity does not exist anymore" |
| `dk status serious error`                 | 4      | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br>***Associated statusText***: "Other error"                                                                                  |


#### Exemple

```4d
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 var $result : Object

 $employees:=ds.Employee.query("lastName=:1";"Hollis")
 $employee:=$employees[0]
 $employee.firstName:="Mary"
 $result:=$employee.reload()
 Case of
    :($result.success)
       ALERT("Reload has been done")
    :($result.status=dk status entity does not exist anymore)
       ALERT("The entity has been dropped")
 End case
```

<!-- END REF -->


<!-- REF EntityClass.save().Desc -->
## .save()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.save().Syntax -->
**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->
| Paramètres | Type        |    | Description                                       |
| ---------- | ----------- |:--:| ------------------------------------------------- |
| mode       | Entier long | -> | `dk auto merge`: Enables the automatic merge mode |
| Résultat   | Objet       | <- | Result of save operation                          |
<!-- END REF -->

#### Description

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. You must call this method after creating or modifying an entity if you want to save the changes made to it.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). Otherwise, the function does nothing (the trigger is not called).

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the *mode* parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. The resulting data saved in the entity will be the combination (the "merge") of all non-concurrent modifications (if modifications were applied to the same attribute, the save fails and an error is returned, even with the auto merge mode).
> Le mode de fusion automatique n'est pas disponible pour les attributs de type Image, Objet et Texte lorsqu'ils sont stockés en dehors de l'enregistrement. Des modifications simultanées de ces attributs entraîneront une erreur "`dk status stamp has changed`".

**Résultat**

The object returned by `.save()` contains the following properties:

| Propriété    |                    | Type                | Description                                                                                                             |
| ------------ | ------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| success      |                    | boolean             | True if the save action is successful, False otherwise.                                                                 |
|              |                    |                     | ***Available only if `dk auto merge` option is used***:                                                                 |
| autoMerged   |                    | boolean             | True if an auto merge was done, False otherwise.                                                                        |
|              |                    |                     | ***Disponible uniquement en cas d'erreur*** :                                                                           |
| status       |                    | number              | Error code, [see below](#status-and-statustext)                                                                         |
| statusText   |                    | Texte               | Description of the error, [see below](#status-and-statustext)                                                           |
|              |                    |                     | ***Available only in case of pessimistic lock error***:                                                                 |
| lockKindText |                    | Texte               | "Locked by record"                                                                                                      |
| lockInfo     |                    | object              | Information sur l'origine du verrouillage                                                                               |
|              | task_id            | number              | Id du process                                                                                                           |
|              | user_name          | Texte               | Nom d'utilisateur de la session sur la machine                                                                          |
|              | user4d_alias       | Texte               | Alias utilisateur si défini avec `SET USER ALIAS`, sinon le nom d'utilisateur dans le répertoire de la base 4D          |
|              | host_name          | Texte               | Nom de la machine                                                                                                       |
|              | task_name          | Texte               | Nom du process                                                                                                          |
|              | client_version     | Texte               |                                                                                                                         |
|              |                    |                     | ***Available only in case of serious error*** (serious error - can be trying to duplicate a primary key, disk full...): |
| errors       |                    | collection d'objets |                                                                                                                         |
|              | message            | Texte               | Message d'erreur                                                                                                        |
|              | componentSignature | Texte               | Internal component signature (e.g. "dmbg" stands for the database component)                                            |
|              | errCode            | number              | Code d'erreur                                                                                                           |

##### status et statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6      | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.<p><p>**Associated statusText**: "Auto merge failed"                                                                               |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. Cette erreur peut se produire dans les cas suivants :<br><li>l'entité a été supprimée (le stamp est modifié et l'espace mémoire est libéré)</li><li>l'entité a été supprimée et remplacée par une autre avec une clé primaire différente (le stamp est modifié et une nouvelle entité occupe l'espace mémoire). Avec `.drop( )`, cette erreur peut être retournée lorsque l'option `dk force drop if stamp changed` est utilisée. Avec `.lock( )`, cette erreur peut être retournée lorsque l'option dk reload if stamp changed est utilisée.</li><br>**Associated statusText**: "Entity doesnot exist anymore"                                                          |
| `dk status locked`                        | 3      | L'entité est verrouillée par un verrou pessimiste.<p><p>**statusText associé** : "Already locked"                                                                                                                                        |
| `dk status serious error`                 | 4      | Une erreur critique peut être une erreur de bas niveau de la base de données (ex. clé dupliquée), une erreur matérielle, etc.<p><p>**statusText associé** : "Other error"                                                                |
| `dk status stamp has changed`             | 2      | La valeur du marqueur interne (stamp) de l'entité ne correspond pas à celle de l'entité stockée dans les données (verrouillage optimiste).<br><li>avec `.save( )` : erreur uniquement si l'option `dk auto merge` n'est pas utilisée</li><li>avec `.drop( )` : erreur uniquement si l'option `dk force drop if stamp changed` n'est pas utilisée</li><li>avec `.lock( )` : erreur uniquement si l'option `dk reload if stamp changed` n'est pas utilisée</li><br>**statusText associé** : "Stamp has changed" |


#### Exemple 1

Creating a new entity:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 $employee:=ds.Employee.new()
 $employee.firstName:="Mary"
 $employee.lastName:="Smith"
 $status:=$employee.save()
 If($status.success)
    ALERT("Employee created")
 End if
```

#### Exemple 2

Updating an entity without `dk auto merge` option:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save()
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Exemple 3

Updating an entity with `dk auto merge` option:

```4d
 var $status : Object

 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection

 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save(dk auto merge)
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status automerge failed)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->



<!-- REF EntityClass.toObject().Desc -->
## .toObject()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.toObject().Syntax -->
**.toObject**() : Object<br>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->
| Paramètres   | Type        |    | Description                                                                                             |
| ------------ | ----------- |:--:| ------------------------------------------------------------------------------------------------------- |
| filterString | Texte       | -> | Attribute(s) to extract (comma-separated string)                                                        |
| filterCol    | Collection  | -> | Collection of attribute(s) to extract                                                                   |
| options      | Entier long | -> | `dk with primary key`: adds the \_KEY property;<br>`dk with stamp`: adds the \_STAMP property |
| Résultat     | Objet       | <- | Object built from the entity                                                                            |
<!-- END REF -->

#### Description

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. Property names in the object match attribute names of the entity.

If no filter is specified, or if the *filterString* parameter contains an empty string or "*", the returned object will contain:

*   all storage entity attributes
*   attributes of the `relatedEntity` [kind](DataClassAttributeClass.md#kind): you get a property with the same name as the related entity (name of the many-to-one link). Attribute is extracted with the simple form.
*   attributes of the `relatedEntities` [kind](DataClassAttributeClass.md#kind): attribute is not returned.


In the first parameter, you pass the entity attribute(s) to extract. You can pass:

*   *filterString*: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
*   *filterCol*: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassAttributeClass.md#kind):

*   propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
*   propertyPath = "relatedEntity.*" -> toutes les propriétés sont extraites
*   propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> seules ces propriétés sont extraites

If a filter is specified for attributes of the relatedEntities [kind](DataClassAttributeClass.md#kind):

*   propertyPath = "relatedEntities.*" -> toutes les propriétés sont extraites
*   propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> seules ces propriétés sont extraites

In the *options* parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.


#### Exemple 1

La structure suivante sera utilisée pour les exemples de cette section :

![](assets/en/API/dataclassAttribute4.png)


Without filter parameter:

```4d
employeeObject:=employeeSelected.toObject()
```

Retourne :

```4d
{
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": { // relatedEntity extracted with simple form
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```



#### Exemple 2

Extracting the primary key and the stamp:

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

Retourne :

```4d
{
    "__KEY": 413,
   "__STAMP": 1,
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": {
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Exemple 3

Expanding all the properties of `relatedEntities`:

```4d
employeeObject:=employeeSelected.toObject("directReports.*")
```

```4d
{
    "directReports": [
        {
            "ID": 418,
            "firstName": "Lorena",
            "lastName": "Boothe",
            "salary": 44800,
            "birthDate": "1970-10-02T00:00:00.000Z",
            "woman": true,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 419,
            "firstName": "Drew",
            "lastName": "Caudill",
            "salary": 41000,
            "birthDate": "2030-01-12T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 420,
            "firstName": "Nathan",
            "lastName": "Gomes",
            "salary": 46300,
            "birthDate": "2010-05-29T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        }
    ]
}
```

#### Exemple 4

Extracting some properties of `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

Retourne :

```4d
{
    "firstName": "Greg",
    "directReports": [
        {
            "lastName": "Boothe"
        },
        {
            "lastName": "Caudill"
        },
        {
            "lastName": "Gomes"
        }
    ]
}
```

#### Exemple 5

Extracting a `relatedEntity` with simple form:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

Retourne :

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### Exemple 6

Extracting all the properties of a `relatedEntity`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

Retourne :

```4d
{
    "employer": {
        "ID": 20,
        "name": "India Astral Secretary",
        "creationDate": "1984-08-25T00:00:00.000Z",
        "revenues": 12000000,
        "extra": null
    }
}
```

#### Example 7

Extracting some properties of a `relatedEntity`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

Retourne :

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```

<!-- END REF -->



<!-- REF EntityClass.touched().Desc -->
## .touched( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.touched().Syntax -->
**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->
| Paramètres | Type    |    | Description                                                                           |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------- |
| Résultat   | Booléen | <- | True if at least one entity attribute has been modified and not yet saved, else False |
<!-- END REF -->

#### Description

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

If an attribute has been modified or calculated, the function returns True, else it returns False. You can use this function to determine if you need to save the entity.

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

#### Exemple

In this example, we check to see if it is necessary to save the entity:

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched

 If($emp.touched()) //if at least one of the attributes has been changed
    $emp.save()
 End if // otherwise, no need to save the entity
```

<!-- END REF -->


<!-- REF EntityClass.touchedAttributes().Desc -->
## .touchedAttributes( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->
**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->
| Paramètres | Type       |    | Description                                      |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| Résultat   | Collection | <- | Names of touched attributes, or empty collection |
<!-- END REF -->

#### Description

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

This applies for attributes of the [kind](DataClassAttributeClass.md#kind) `storage` or `relatedEntity`.

In the case of a related entity having been touched (i.e., the foreign key), the name of the related entity and its primary key's name are returned.

If no entity attribute has been touched, the method returns an empty collection.

#### Exemple 1


```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```


#### Exemple 2


```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity
 var $company : cs.CompanyEntity

 $touchedAttributes:=New collection

 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName
 $emp.lastName:="Martin"

 $company:=ds.Company.get(121)
 $emp.employer:=$company

 $touchedAttributes:=$emp.touchedAttributes()

  //collection $touchedAttributes: ["firstName","lastName","employer","employerID"]
```

In this case:

*   firstName et lastName ont un type `storage`
*   employer a un type `relatedEntity`
*   employerID est la clé étrangère de l'entité reliée employer

<!-- END REF -->


<!-- REF EntityClass.unlock().Desc -->
## .unlock()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntityClass.unlock().Syntax -->
**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->
| Paramètres | Type  |    | Description  |
| ---------- | ----- |:--:| ------------ |
| Résultat   | Objet | <- | Objet statut |
<!-- END REF -->

#### Description

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

A record is automatically unlocked when it is no longer referenced by any entities in the locking process (for example: if the lock is put only on one local reference of an entity, the entity and thus the record is unlocked when the process ends).
> When a record is locked, it must be unlocked from the locking process and on the entity reference which put the lock. Par exemple :

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Résultat**

The object returned by `.unlock()` contains the following property:

| Propriété | Type    | Description                                                                                                                                                                                        |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success   | Booléen | True if the unlock action is successful, False otherwise. If the unlock is done on a dropped entity, on a non locked record, or on a record locked by another process or entity, success is False. |

#### Exemple

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object

 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("The entity is now unlocked")
 End if
```

<!-- END REF -->



<style> h2 { background: #d9ebff;}</style>
