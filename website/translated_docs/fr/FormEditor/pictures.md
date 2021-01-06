---
id: pictures
title: Images
---

4D inclut une prise en charge spécifique des images utilisées dans vos formulaires.


## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. Ce support natif est valable pour toutes les images stockées dans les formulaires 4D : [images statiques](FormObjects/staticPicture.md) collées en mode Développement, images collées dans des [objets de saisie](FormObjects/input_overview.md) à l'exécution, etc.

Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est également disponible pour l'encodage et le décodage.

> La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. Pour savoir quels sont codecs disponibles, vous devez utiliser la commande `PICTURE CODEC LIST` (voir aussi la description du [type de données image](Concepts/dt_picture.md)).




### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône :

![](assets/en/FormEditor/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/FormEditor/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. C'est le cas, par exemple, pour les images PDF sous Windows ou les images au format PICT.


## Images de haute résolution

4D prend en charge des images haute résolution sur les plateformes macOS et Windows. Les images haute résolution peuvent être définies par le facteur d'échelle ou le dpi.

### Facteur d'échelle (macOS uniquement)

Les écrans haute résolution ont une densité de pixels plus élevée que les écrans standard traditionnels. Pour que les images s'affichent correctement sur des écrans haute résolution, le nombre de pixels de l'image doit être multiplié par le *facteur d'échelle* (c'est-à-dire deux fois plus grand, trois fois plus grand, etc.).

Lorsque vous utilisez des images haute résolution, vous pouvez spécifier le facteur d'échelle en ajoutant "@nx" dans le nom de l'image (où *n* désigne le facteur d'échelle). Dans le tableau ci-dessous, vous constaterez que le facteur d'échelle est indiqué dans les noms des images haute résolution, *circle@2x.png* et *circle@3x.png*.

| Type d'affichage    | Facteur d'échelle                              | Exemple                                                                  |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------ |
| Résolution standard | 1:1 pixel density.                             | **1x**<br>![](assets/en/FormEditor/pictureScale1.png) *circle.png* |
| Haute résolution    | Pixel density increased by a factor of 2 or 3. | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/FormEditor/pictureScale2.png)*circle@2x.png*</td><td>![](assets/en/FormEditor/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                |



Les images haute résolution avec la convention @nx peuvent être utilisées dans les objets suivants :

*   [Images statiques](FormObjects/staticPicture.md)
*   [Boutons](FormObjects/button_overview.md)/[radio](FormObjects/radio_overview.md)/[cases à cocher](FormObjects/checkbox_overview.md)
*   [Boutons image](FormObjects/pictureButton_overview.md)/[Pop-up image](FormObjects/picturePopupMenu_overview.md)
*   [Onglets](FormObjects/tabControl.md)
*   [En-têtes de list box](FormObjects/listbox_overview.md#list-box-headers)
*   [Icônes de menu](Menus/properties.md#item-icon)



4D priorise automatiquement les images avec la résolution la plus élevée. <br><br> **Exemple** : lorsque vous utilisez deux écrans (un écran haute résolution, un écran standard) et que vous déplacez un formulaire d'un écran à un autre, 4D restitue automatiquement la résolution la plus élevée possible de l'image. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.



### DPI (macOs and Windows)

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(\*)*, and picture format:

| Opération                                                                                                                                | Behavior                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Drop or Paste                                                                                                                            | If the picture has:<ul><li>**72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li> |
| [Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[Scaled](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) </li> <li>**Not scaled** - The object containing the picture has the same number of pixels as the picture.</li></ul><p>                                  |

*(\*) Typically,  macOS = 72dpi, Windows = 96dpi*





## Coordonnées de la souris dans une image

4D vous permet de récupérer les coordonnées locales de la souris dans un [objet de saisie](FormObjects/input_overview.md) associé à une [expression d'image](FormObjects/properties_Object.md#expression-type), en cas de clic ou de survol, même si un défilement ou un zoom a été appliqué à l'image. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

Les coordonnées sont retournées dans les [Variables système](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html) *MouseX* et *MouseY*. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). Lorsque la souris se trouve en dehors du système de coordonnées de l'image, la valeur -1 est retournée dans *MouseX* et *MouseY*.

You can get the value of these variables as part of the [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md), or [`On Mouse Move`](Events/onMouseMove.md) form events.
