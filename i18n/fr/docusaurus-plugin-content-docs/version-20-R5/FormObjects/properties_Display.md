---
id: propertiesDisplay
title: Affichage
---

---

## Format Alpha

Les formats Alpha contrôlent l'apparence des champs et des variables alphanumériques (strings) lorsqu'ils sont affichés ou imprimés. Voici une liste des formats proposés pour les champs alphanumériques :

![](../assets/en/FormObjects/property_alphaFormat.png)

Vous pouvez choisir un format dans cette liste ou utiliser n'importe quel format personnalisé. La liste par défaut contient des formats pour certains des champs alpha les plus courants qui nécessitent des formats: numéros de téléphone américains (local et longue distance), numéros de sécurité sociale et codes postaux. Vous pouvez également saisir un nom de format personnalisé défini dans l'éditeur Filtres et formats de la boîte à outils. Dans ce cas, le format ne peut pas être modifié dans les propriétés de l'objet.
Tous les formats ou filtres personnalisés que vous avez créés sont automatiquement disponibles, précédés d'une barre verticale (|).

Le signe dièse (#) est le placeholder pour un format d'affichage alphanumérique. Vous pouvez inclure des tirets, les traits d'union, les espaces et tout autre signe de ponctuation que vous souhaitez afficher. Vous utilisez les signes de ponctuation réels que vous souhaitez et le symbole dièse pour chaque caractère que vous souhaitez afficher.

Par exemple, considérez un numéro de pièce avec un format tel que "RB-1762-1".

Le format alpha serait :

\##-####-#

Lorsque l'utilisateur entre "RB17621," le champ affiche :

RB-1762-1

Le champ contient en fait "RB17621".

Si l'utilisateur saisit plus de caractères que ce que le format le permet, 4D affiche les derniers caractères. Par exemple, si le format est :

(#######)

et si l'utilisateur saisit "proportion", le champ s'affiche:

(portion)

Le champ contient en fait "proportion". 4D accepte et stocke la saisie complète, quel que soit le format d’affichage. Aucune information n'est perdue.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                                              |
| ---------- | --------------- | -------------------------------------------------------------------------------------------------------------- |
| textFormat | string          | "### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", formats personnalisés |

#### Objets pris en charge

[Liste déroulante](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Colonne de List box](listbox_overview.md#list-box-columns) - [Footer List Box](listbox_overview.md#list-box-footers)

---

## Format Date

Les formats de date contrôlent la façon dont les dates apparaissent lorsqu'elles sont affichées ou imprimées. Pour la saisie des données (FR), vous entrez les dates dans le format JJ/MM/AAAA, quel que soit le format d'affichage que vous avez choisi.

Les formats d'affichage pour les dates peuvent être définis :

- en utilisant un format 4D intégré,
- en utilisant un modèle personnalisé.

### Formats intégrés

Le tableau ci-dessous montre les choix disponibles :

| Nom du format                                | Chaine JSON                                 | Exemple (système US)                       |
| -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------- |
| Système date court                           | systemShort (par défaut) | 03/25/20                                                      |
| Système date abrégé _(1)_ | systemMedium                                | Wed, Mar 25, 2020                                             |
| Système date long                            | systemLong                                  | Wednesday, March 25, 2020                                     |
| RFC 822                                      | rfc822                                      | Tue, 25 Mar 2020 22:00:00 GMT |
| Siècle court                                 | shortCentury                                | 03/25/20 but 04/25/2032 _(2)_              |
| Interne date long                            | long                                        | March 25, 2020                                                |
| Interne date abrégé _(1)_ | abbreviated                                 | Mar 25, 2020                                                  |
| Interne date court                           | short                                       | 03/25/2020                                                    |
| ISO Date Heure _(3)_      | iso8601                                     | 2020-03-25T00:00:00           |

_(1)_ Pour éviter toute ambiguïté et conformément à la pratique actuelle, les formats de date abrégés affichent "jun" pour juin et "jul" pour juillet. Cette particularité ne s'applique qu'aux versions françaises de 4D.

_(2)_ L'année est affichée avec deux chiffres lorsqu'elle appartient à l'intervalle (1930;2029), sinon elle est affichée avec quatre chiffres. Ceci est par défaut mais cela peut être modifié en utilisant la commande [SET DEFAULT CENTURY](https://doc.4d.com/4dv20/help/command/fr/page392.html).

_(3)_ Le format `ISO Date Time` correspond à la norme XML de représentation de la date et de l'heure (ISO8601). Il est principalement destiné à être utilisé lors de l'import/export de données au format XML et dans les services Web.

> Quel que soit le format d'affichage, si l'année est saisie avec deux chiffres, 4D considère que le siècle est le 21ème si l'année appartient à l'intervalle (00;29) et le 20e si elle appartient à l'intervalle (30;99). Ceci est le paramètre par défaut mais il peut être modifié en utilisant la commande [SET DEFAULT CENTURY](https://doc.4d.com/4dv20/help/command/fr/page392.html).

### Formats personnalisés

Des formats de date personnalisés peuvent être construits en utilisant plusieurs motifs décrits dans la page [**Formats de date et d'heure**](../Project/date-time-formats.md) . Par exemple :

| Motif                    | Exemple (système US) |
| ------------------------ | --------------------------------------- |
| "eeee, dd"               | Wednesday, 29                           |
| "'Day' #D 'of the year'" | Day #333 of the year                    |

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                                                                                                                                                                                                                                          |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dateFormat | string          | <li>Formats intégrés : "systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long" + " blankIfNull"</li><li>Formats personnalisés : tout format construit à l'aide d'un [motif pris en charge](../Project/date-time-formats.md) + " blankIfNull"</li> |

:::note blankIfNull

Par défaut, une date nulle est affichée avec des zéros, par exemple 00/00/00. Avec l'option "blankIfNull", une date nulle est affichée comme une zone vide. La chaîne "blankIfNull" (sensible à la casse) doit être combinée avec la valeur de format sélectionnée. Ex : "systemShort blankIfNull" ou "ee dd LL blankIfNull".

:::

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Format numérique

> Les champs numériques comprennent les types Entier, Entier long, Entier 64 bits, Réel et Float.

Les formats numériques contrôlent la façon dont les nombres apparaissent lorsqu'ils sont affichés ou imprimés. Pour la saisie des données, vous saisissez uniquement les chiffres (y compris un point décimal ou un signe négatif si nécessaire), quel que soit le format d'affichage que vous avez choisi.

4D fournit différents formats numériques par défaut.

### Caractères de substitution (placeholders)

Dans chacun des formats d'affichage numériques, le signe dièse (#), zéro (0), le caret (^) et l'astérisque (\*) sont utilisés comme placeholders. Vous créez vos propres formats numériques en utilisant un placeholder pour chaque chiffre que vous souhaitez afficher.

| Placeholder | Effet pour les zéros de début ou de fin  |
| ----------- | ---------------------------------------- |
| #           | N'affiche rien                           |
| 0           | Affiche 0                                |
| ^           | Affiche un espace (1) |
| -           | Affiche un astérisque                    |

(1) Le caractère caret (^) génère un espace qui occupe la même largeur qu'un chiffre dans la plupart des polices de caractères.

Par exemple, si vous souhaitez afficher des numéros à trois chiffres, vous pouvez utiliser le format ###. Si l'utilisateur saisit plus de chiffres que le format le permet, 4D affiche <<< dans le champ pour indiquer que plus de chiffres ont été saisis que le nombre de chiffres spécifié dans le format d'affichage.

Si l'utilisateur saisit un nombre négatif, le caractère le plus à gauche est affiché sous forme de signe moins (sauf si un format d'affichage négatif a été spécifié). Si ##0 est le format, -26 est affiché comme –26 et -260 est affiché comme <<< car le signe moins occupe un espace réservé et il n'y a que trois espaces réservés.

> Quel que soit le format d’affichage, 4D accepte et stocke le nombre saisi dans le champ. Aucune information n'est perdue.

Chaque caractère de substitution a un effet différent sur l'affichage des zéros en tête ou en fin. Un zéro initial est un zéro qui commence un nombre avant la virgule ; un zéro final est un zéro qui termine un nombre après la virgule.

Supposons que vous utilisiez le format ##0 pour afficher trois chiffres. Si l'utilisateur ne saisit rien dans le champ, le champ affiche 0. Si l'utilisateur saisit 26, le champ affiche 26.

### Caractères séparateurs

Les formats d'affichage numérique (à l'exception des notations scientifiques) sont automatiquement basés sur les paramètres régionaux du système. 4D remplace les caractères «.» et «,» par, respectivement, le séparateur décimal et le séparateur de milliers définis dans le système d'exploitation. Le point et la virgule sont donc considérés comme des caractères de substitution, à l'instar de 0 ou #.

> Sur Windows, lors de l'utilisation de la touche de séparateur décimal du pavé numérique, 4D fait une distinction en fonction du type de champ où se trouve le curseur :
>
> - dans un champ de type Réel, l'utilisation de cette touche insérera le séparateur décimal défini dans le système,
> - dans n'importe quel autre type de champ, cette touche insère le caractère associé à la touche, généralement un point (.) ou une virgule (,).

### Points décimaux et autres caractères d'affichage

Vous pouvez utiliser un point décimal dans un format d'affichage numérique. Si vous voulez que le point décimal s'affiche, que l'utilisateur le saisisse ou non, il doit être placé entre des zéros.

Vous pouvez utiliser d'autres caractères dans le format. Lorsqu'ils sont utilisés seuls, ou placés avant ou après les placeholders, les caractères apparaissent toujours. Par exemple, si vous utilisez le format suivant :

$##0

un symbole dollar apparaît toujours car il est placé avant les placeholders.

Si des caractères sont placés entre des placeholders, ils n'apparaissent que si des chiffres sont affichés des deux côtés. Par exemple, si vous définissez le format :

\###.##0

le point apparaît uniquement si l'utilisateur saisit au moins quatre chiffres.

Les espaces sont traités comme des caractères dans les formats d'affichage numériques.

### Formats pour les nombres positifs, négatifs et nuls

Un format d'affichage numérique peut avoir jusqu'à trois parties vous permettant de spécifier des formats d'affichage pour les valeurs positives, négatives et nulles. Vous spécifiez les trois parties en les séparant par des points-virgules comme ci-dessous:

Positif;Négatif;Zéro

Vous n'avez pas à spécifier forcément toutes les parties du format. Si vous utilisez seulement une partie, 4D l'utilise pour tous les nombres, en plaçant un signe moins devant les nombres négatifs.

Si vous utilisez deux parties, 4D utilise la première partie pour les nombres positifs et zéro et la deuxième partie pour les nombres négatifs. Si vous utilisez trois parties, la première est pour les nombres positifs, la deuxième pour les nombres négatifs et la troisième pour zéro.

> La troisième partie (zéro) n'est pas interprétée et n'accepte pas les caractères de substitution. Si vous entrez `###;###;#`, la valeur zéro sera affichée “#”. En d'autres termes, ce que vous entrez réellement est ce qui sera affiché pour la valeur zéro.

Voici un exemple d'un format d'affichage numérique qui affiche des signes dollar et des virgules, place les valeurs négatives entre parenthèses, et n'affiche pas les zéros :

$###,##0.00;($###,##0.00);

Notez que la présence du deuxième point-virgule indique à 4D de ne rien utiliser pour afficher zéro. Le format suivant est similaire, sauf que l'absence du deuxième point-virgule indique à 4D d'utiliser le format de nombre positif pour zéro :

$###,##0.00;($###,##0.00)

Dans ce cas, l'affichage pour zéro serait $0.00.

### Notation scientifique

Si vous souhaitez afficher des nombres en notation scientifique, utilisez l'**esperluette** (&) suivie d'un nombre pour spécifier le nombre de chiffres que vous souhaitez afficher. Par exemple, le format :

&3

afficherait 759.62 comme :

7.60e+2

Le format de notation scientifique est le seul format qui arrondira automatiquement le nombre affiché. Notez dans l'exemple ci-dessus que le nombre est arrondi à 7.60e+2 au lieu d'être tronqué à 7.59e+2.

### Formats hexadécimaux

Vous pouvez afficher un nombre en hexadécimal en utilisant les formats d'affichage suivants :

- `&x`: Ce format affiche les nombres hexadécimaux en utilisant le format “0xFFFF”.
- `&$`: Ce format affiche les nombres hexadécimaux en utilisant le format “$FFFF”.

### Notation XML

Le format `&xml` rendra un nombre conforme aux règles standard XML. En particulier, le caractère séparateur décimal sera un point "." dans tous les cas, indépendamment des paramètres du système.

### Affichage d'un nombre en tant qu'heure

Vous pouvez afficher un nombre sous forme d'heure (avec un format heure) en utilisant `&/` suivi d'un chiffre. Le temps est déterminé en calculant le nombre de secondes que cette valeur représente à partir de minuit. Le chiffre dans le format représente la position dans le menu déroulant Format du format heure à utiliser.

Par exemple, le format :

&/5

correspond au 5e format d'heure dans le menu contextuel, plus précisément l'heure h: mn: s. Un champ numérique avec ce format afficherait 25000 comme suit :

6:56 du matin

### Exemples

Le tableau suivant montre comment les différents formats affectent l'affichage des nombres. Les trois colonnes — Positif, Négatif et Zéro — montrent comment 1 234,50, 1 234,50 et 0 seraient affichées.

| Format saisi                                                                          | Positif                    | Négatif                                        | Zéro                           |
| ------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------- | ------------------------------ |
| ###                                                                                   | <<<                        | <<<                                            |                                |
| ####                                                                                  | 1234                       | <<<<                                           |                                |
| #######                                                                               | 1234                       | -1234                                          |                                |
| #####.##                                                              | 1234.5     | -1234.5                        |                                |
| ####0.00                                                              | 1234.50    | -1234.50                       | 0.00           |
| #####0                                                                                | 1234                       | -1234                                          | 0                              |
| +#####0;–#####0;0                                                                     | +1234                      | -1234                                          | 0                              |
| #####0DB;#####0CR;0                                                                   | 1234DB                     | 1234CR                                         | 0                              |
| #####0;(#####0)                                                    | 1234                       | (1234)                      | 0                              |
| ###,##0                                                                               | 1,234                      | -1,234                                         | 0                              |
| ##,##0.00                                                             | 1,234.50   | -1,234.50                      | 0.00           |
| \^\^\^\^\^\^\^                                                                 | 1234                       | -1234                                          |                                |
| \^\^\^\^\^\^0                                                                   | 1234                       | -1234                                          | 0                              |
| \^\^\^,\^\^0                                                                     | 1,234                      | -1,234                                         | 0                              |
| \^\^,\^\^0.00                                                     | 1,234.50   | -1,234.50                      | 0.00           |
| \*\*\*\*\*\*\*                                                                        | \*\*\*1234                 | \*\*-1234                                      | \*\*\*\*\*\*\*                 |
| \*\*\*\*\*\*0                                                                         | \*\*\*1234                 | \*\*-1234                                      | \*\*\*\*\*\*0                  |
| \*\*\*,\*\*0                                                                          | \*\*1,234                  | \*-1,234                                       | \*\*\*\*\*\*0                  |
| \*\*,\*\*0.00                                                         | \*1,234.50 | -1,234.50                      | \*\*\*\*\*0.00 |
| $\*,\*\*0.00;–$\*,\*\*0.00                            | $1,234.50  | -$1,234.50                     | $\*\*\*\*0.00  |
| $\^\^\^\^0                                                                        | $ 1234                     | $–1234                                         | $    0                         |
| $\^\^\^0;–$\^\^\^0                                                              | $1234                      | –$1234                                         | $   0                          |
| $\^\^\^0 ;($\^\^\^0)                                         | $1234                      | ($1234)                     | $   0                          |
| $\^,\^\^0.00 ;($\^,\^\^0.00) | $1,234.50  | ($1,234.50) | $    0.00      |
| &2                                                                | 1.2e+3     | -1.2e+3                        | 0.0e+0         |
| &5                                                                | 1.23450e+3 | -1.23450e+3                    | 0.00000        |
| &xml                                                              | 1234.5     | -1234.5                        | 0                              |

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles                                                                |
| ------------ | --------------- | -------------------------------------------------------------------------------- |
| numberFormat | string          | Nombres (y compris un signe décimal ou négatif si nécessaire) |

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Input](input_overview.md) - [Colonne de List box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [Progress Indicators](progressIndicator.md)

---

## Format image

Les formats d'images contrôlent la façon dont les images apparaissent lorsqu'elles sont affichées ou imprimées. Pour la saisie des données, l'utilisateur saisit toujours les images en les collant depuis le Presse-papiers ou en les faisant glisser-déposer, quel que soit le format d'affichage.

Les options de troncature et de mise à l'échelle n'affectent pas l'image elle-même. Le contenu d'un champ Image est toujours enregistré. Seul l'affichage dans le formulaire est affecté par le format d'affichage de l'image.

### Image non tronquée

`Grammaire JSON : "scaled"`

Le format **Non tronquée** permet à 4D de redimensionner l'image pour qu'elle corresponde aux dimensions de la zone.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Image tronquée (centrée et non centrée)

`Grammaire JSON : "truncatedCenter" / "truncatedTopLeft"`

Avec le format **Image tronquée (centrée)**, 4D centre l'image dans la zone et rogne toute partie qui ne rentre pas dans la zone. 4D rogne de manière égale à partir de chaque bord et du haut et du bas.

Avec le format **Image tronquée (non centrée)**, 4D place le coin supérieur gauche de l'image dans le coin supérieur gauche de la zone et rogne toute partie qui ne rentre pas dans la zone. 4D rogne à partie de la droite et du bas.

> Lorsque le format de l'image est **tronquée (non centrée)**, il est possible d'ajouter des barres de défilement à la zone de saisie.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

### Image proportionnelle et Image proportionnelle centrée

`Grammaire JSON: "proportionnalTopLeft" / "proportionnalCenter"`

Lorsque vous utilisez **Image proportionnelle**, l'image est réduite proportionnellement de tous les côtés pour s'adapter à la zone créée pour l'image. L'option **Image proportionnelle centrée** fait la même chose, mais centre l'image dans la zone de l'image.

Si l'image est plus petite que la zone définie dans le formulaire, elle ne sera pas modifiée. Si l'image est plus grande que la zone définie dans le formulaire, elle est réduite proportionnellement. Étant donné qu'elle est réduite de manière proportionnelle, l'image n'apparaîtra pas déformée.

Si vous avez appliqué le format **Image proportionnelle centrée**, l'image est également centrée dans la zone :

![](../assets/en/FormObjects/property_pictureFormat_ScaledProportional.png)

### Mosaïque

Grammaire JSON : "tiled"

Lorsque la zone qui contient une image avec le format **Mosaïque** est agrandie, l'image n'est pas déformée mais est répliquée autant de fois que nécessaire pour remplir entièrement la zone.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Si le champ est réduit à une taille plus petite que celle de l'image d'origine, l'image est tronquée (non centrée).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                                     |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| pictureFormat | string          | "truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft", "proportionalCenter" |

#### Objets pris en charge

[Input](input_overview.md) - [Colonne de List box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers)

---

## Format heure

Les formats heure contrôlent la façon dont les heures apparaissent lorsqu'elles sont affichées ou imprimées. Pour la saisie des données, vous entrez les heures dans le format 24 heures HH:MM:SS ou dans le format 12 heures HH:MM:SS AM/PM, quel que soit le format d'affichage que vous avez choisi.

Les formats d'affichage des heures peuvent être définis :

- en utilisant un format 4D intégré,
- en utilisant un modèle personnalisé.

### Formats intégrés

Le tableau ci-dessous montre les formats d'affichage du champ Heure et donne des exemples :

| Nom du format                            | Chaine JSON                                        | Commentaires                                                                                                                                                                                                  | Exemple pour 04:30:25     |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| HH:MM:SS | hh_mm_ss |                                                                                                                                                                                                               | 04:30:25                  |
| hh:mn                    | hh_mm                         |                                                                                                                                                                                                               | 04:30                                     |
| Heures Minutes Secondes                  | HH_MM_SS |                                                                                                                                                                                                               | 4 heures 30 minutes 25 secondes                           |
| Heures Minutes                           | HH_MM                         |                                                                                                                                                                                                               | 4 heures 30 minutes                                       |
| h:mn Matin/Après-midi    | hh_mm_am |                                                                                                                                                                                                               | 4:30 a.m. |
| ms s                                     | mm_ss                         | Heure exprimée sous forme de durée à partir de 00:00:00                                                                                                                       | 270:25                                    |
| Minutes Secondes                         | MM_SS                         | Heure exprimée sous forme de durée à partir de 00:00:00                                                                                                                       | 270 Minutes 25 Secondes                                   |
| ISO Date Heure                           | iso8601                                            | Correspond à la norme XML pour représenter des données liées au temps. Il est principalement destiné à être utilisé lors de l'import/export de données au format XML et dans les services Web | 0000-00-00T04:30:25       |
| Système heure court                      | - (default)                     | Format heure standard défini dans le système                                                                                                                                                                  | 04:30:25                  |
| Système heure long abrégé                | systemMedium                                       | macOS seulement : Format d'heure abrégé défini dans le système. <br/>Windows : ce format est le même que le format système heure court                        | 4•30•25 AM                                                |
| Système heure long                       | systemLong                                         | macOS seulement : Format d'heure long défini dans le système. <br/>Windows : ce format est le même que le format système heure court                          | 4:30:25 AM HNEC           |

### Formats personnalisés

Des formats d'heure personnalisés peuvent être construits en utilisant plusieurs motifs décrits dans la page [**Formats de date et d'heure**](../Project/date-time-formats.md) . Par exemple :

| Motif                                   | Exemple (système US) |
| --------------------------------------- | --------------------------------------- |
| "HH 'heures' mm 'minutes' ss 'secondes' | 13 heures 25 minutes 12 secondes        |
| "hh:mm aa"              | 01:25 PM                |

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                                                                                                                                                                                                                                                          |
| ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timeFormat | string          | <li>Formats intégrés : "systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS" + " blankIfNull"</li><li>Formats personnalisés : tout format construit en utilisant [un modèle pris en charge](../Project/date-time-formats.md) + "blankIfNull"</li> |

:::note blankIfNull

Par défaut, une heure nulle est affichée avec des zéros, par exemple "00:00:00". Avec l'option "blankIfNull", une heure nulle est affichée comme une zone vide. La chaîne "blankIfNull" (sensible à la casse) doit être combinée avec la valeur de format sélectionnée. Ex : "MM_SS blankIfNull" ou "hh:mm aa blankIfNull"

:::

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [Colonne de List Box](listbox_overview.md#list-box-columns) - [Pied de List Box Footer](listbox_overview.md#list-box-footers)

---

## Texte si Faux / Texte si Vrai

Lorsqu'une [expression booléenne](properties_Object.md#expression-type) est affichée comme :

- un texte dans un [input](input_overview.md)
- une ["popup"](properties_Display.md#display-type) dans une [colonne de list box](listbox_overview.md#list-box-columns),

... vous pouvez sélectionner le texte à afficher pour chaque valeur :

- **Texte si vrai** - le texte à afficher lorsque la valeur est "true"
- **Texte si faux** - le texte à afficher lorsque la valeur est "false"

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                               |
| ------------- | --------------- | ------------------------------------------------------------------------------- |
| booleanFormat | string          | "\<_textWhenTrue_\>;\<_textWhenFalse_\>", par exemple "Assigné;Non assigné" |

#### Objets pris en charge

[List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Type d'affichage

Used to associate a display format with the column data. The formats provided depends on the variable type (array type list box) or the data/field type (selection and collection type list boxes).

Boolean and number (numeric or integer) columns can be displayed as check boxes. In this case, the [Title](#title) property can be defined.

Boolean columns can also be displayed as pop-up menus. In this case, the [Text when False and Text when True](#text-when-false-text-when-true) properties must be defined.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                                                                                             |
| ----------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| controlType | string          | <li>**number columns**: "automatic" (default) or "checkbox"</li><li>**boolean columns**: "checkbox" (default) or "popup"</li> |

#### Objets pris en charge

[List Box Column](listbox_overview.md#list-box-columns)

---

## Not rendered

When this property is enabled, the object is not drawn on the form, however it can still be activated.

In particular, this property allows implementing "invisible" buttons.  Non-rendered buttons can be placed on top of graphic objects. They remain invisible and do not highlight when clicked, however their action is triggered when they are clicked.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles |
| --------- | --------------- | ----------------- |
| affichage | boolean         | true, false       |

#### Objets pris en charge

[Button](button_overview.md) - [Drop-down List](dropdownList_Overview.md)

---

## Three-States

Allows a check box object to accept a third state. La variable associée à la case à cocher retourne la valeur 2 lorsque celle-ci se trouve dans le troisième état.

#### Three-states check boxes in list box columns

List box columns with a numeric [data type](properties_Object.md#expression-type) can be displayed as three-states check boxes. If chosen, the following values are displayed:

- 0 = unchecked box,
- 1 = checked box,
- 2 (or any value >0) = semi-checked box (third state). For data entry, this state returns the value 2.
- -1 = invisible check box,
- -2 = unchecked box, not enterable,
- -3 = checked box, not enterable,
- -4 = semi-checked box, not enterable

In this case as well, the [Title](#title) property is also available so that the title of the check box can be entered.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| threeState | boolean         | true, false       |

#### Objets pris en charge

[Check box](checkbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Titre de menu

This property is available for a list box column if:

- the [column type](properties_Object.md#expression-type) is **boolean** and its [display type](properties_Display.md#display-type) is "Check Box"
- the [column type](properties_Object.md#expression-type) is **number** (numeric or integer) and its [display type](properties_Display.md#display-type) is "Three-states Checkbox".

In that cases, the title of the check box can be entered using this property.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles                  |
| ------------ | --------------- | ---------------------------------- |
| controlTitle | string          | Any custom label for the check box |

#### Objets pris en charge

[List Box Column](listbox_overview.md#list-box-columns)

---

## Truncate with ellipsis

Controls the display of values when list box columns are too narrow to show their full contents.

This option is available for columns with any type of contents, except pictures and objects.

- When the property is enabled (default), if the contents of a list box cell exceed the width of the column, they are truncated and an ellipsis is displayed:

![](../assets/en/FormObjects/property_truncate1.png)

> The position of the ellipsis depends on the OS. In the above example (Windows), it is added on the right side of the text. On macOS, the ellipsis is added in the middle of the text.

- When the property is disabled, if the contents of a cell exceed the width of the column, they are simply clipped with no ellipsis added:

![](../assets/en/FormObjects/property_truncate2.png)

The Truncate with ellipsis option is enabled by default and can be specified with list boxes of the Array, Selection, or Collection type.

> When applied to Text type columns, the Truncate with ellipsis option is available only if the [Wordwrap](#wordwrap) option is not selected. When the Wordwrap property is selected, extra contents in cells are handled through the word-wrapping features so the Truncate with ellipsis property is not available.

The Truncate with ellipsis property can be applied to Boolean type columns; however, the result differs depending on the [cell format](#display-type):

- For Pop-up type Boolean formats, labels are truncated with an ellipsis,
- For Check box type Boolean formats, labels are always clipped.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles      |
| ------------ | --------------- | ---------------------- |
| truncateMode | string          | "withEllipsis", "none" |

#### Objets pris en charge

[List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-footers)

---

## Visibilité

This property allows hiding the object in the Application environment.

You can handle the Visibility property for most form objects. This property is mainly used to simplify dynamic interface development. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. In this context, it is often necessary to hide objects programatically during the <code>On load</code> event of the form then to display certain objects afterwards. The developer can then program their display using the [`OBJECT SET VISIBLE`](https://doc.4d.com/4dv19/help/command/en/page603.html) command when needed.

#### Automatic visibility in list forms

In the context of ["list" forms](FormEditor/properties_FormProperties.md#form-type), the Visibility property supports two specific values:

- **If record selected** (JSON name: "selectedRows")
- **If record not selected** (JSON name: "unselectedRows")

This property is only used when drawing objects located in the body of a list form. It tells 4D whether or not to draw the object depending on whether the record being processed is selected/not selected. It allows you to represent a selection of records using visual attributes other than highlight colors:

![](../assets/en/FormObjects/select-row.png)

4D does not take this property into account if the object was hidden using the [`OBJECT SET VISIBLE`](https://doc.4d.com/4dv20/help/command/en/page603.html) command; in this case, the object remains invisible regardless of whether or not the record is selected.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                                                             |
| ---------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| visibility | string          | "visible", "hidden", "selectedRows" (list form only), "unselectedRows" (list form only) |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Wordwrap

> Pour les [input](input_overview.md), disponibles lorsque la propriété [Multiligne](properties_Entry.md#multiline) est définie sur "oui".

Manages the display of contents when it exceeds the width of the object.

#### Checked for list box/Yes for input

`JSON grammar: "normal"`

When this option is selected, text automatically wraps to the next line whenever its width exceeds that of the column/area, if the column/area height permits it.

- In single-line columns/areas, only the last word that can be displayed entirely is displayed. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.

- In multiline columns/areas, 4D carries out automatic line returns.

![](../assets/en/FormObjects/wordwrap2.png)

#### Unchecked for list box/No for input

`JSON grammar: "none"`

When this option is selected, 4D does not do any automatic line returns and the last word that can be displayed may be truncated. In text type areas, carriage returns are supported:

![](../assets/en/FormObjects/wordwrap3.png)

In list boxes, any text that is too long is truncated and displayed with an ellipse (...). In the following example, the Wordwrap option is **checked for the left column** and **unchecked for the right column**:

![](../assets/en/FormObjects/property_wordwrap1.png)

Note that regardless of the Wordwrap option’s value, the row height is not changed. If the text with line breaks cannot be entirely displayed in the column, it is truncated (without an ellipse). In the case of list boxes displaying just a single row, only the first line of text is displayed:

![](../assets/en/FormObjects/property_wordwrap2.png)

#### Automatic for input (default option)

`JSON grammar: "automatic"`

- In single-line areas, words located at the end of lines are truncated and there are no line returns.
- In multiline areas, 4D carries out automatic line returns.

![](../assets/en/FormObjects/wordwrap1.png)

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                                            |
| -------- | --------------- | ---------------------------------------------------------------------------- |
| wordwrap | string          | "automatic" (à l'exception de list box), "normal", "none" |

#### Objets pris en charge

[Input](input_overview.md) - [Colonne de List box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers)
