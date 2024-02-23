---
id: onAlternativeClick
title: On Alternative Click
---

| Code | Pode ser chamado por                                                                                                                                           | Definição                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 38   | [Botão](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | <li>Botões: A área da "seta" de um botão é clicada</li><li>Listas de caixas: Em uma coluna de um array de objetos, um botão de elipses (atributo "alternateButton") é clicado</li> |

## Descrição

### Botões

Alguns estilos de botões podem ser [ligados a um menu pop-up](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) e exibir um triângulo. Clicar neste triângulo faz com que um pop-up de seleção apareça que fornece um conjunto de ações alternativas em relação à ação do botão primário.

4D permite que você gerencie este tipo de botão usando o evento `Clique Alternativo`. Este evento é gerado quando o usuário clica no triângulo (assim que o botão do mouse é pressionado):

- If the pop-up menu is **separated**,the event is only generated when a click occurs on the portion of the button with the arrow.
- Se o menu pop-up for **linked**, o evento será gerado quando ocorrer um clique em qualquer parte do botão. Observe que o evento [`No Clique Longo`](onLongClick.md) não pode ser gerado com este tipo de botão.

![](../assets/en/Events/clickevents.png)

### List box

This event is generated in columns of [object array type list boxes](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), when the user clicks on a widget ellipsis button ("alternateButton" attribute).

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

Ver a [descrição do atributo "alternateButton"](FormObjects/listbox_overview.md#alternatebutton).
