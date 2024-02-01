---
id: propertiesDisplay
title: Visualização
---

---

## Formato Alfa

Os formatos alfa controlam a forma como os campos alfanuméricos e variáveis aparecem quando exibidos ou impressos. Segue uma lista de formatos fornecidos para campos alfanuméricos:

![](../assets/en/FormObjects/property_alphaFormat.png)

Pode escolher um formato desta lista ou utilizar qualquer formato personalizado. A lista padrão contém formatos para alguns dos campos alfa mais comuns que requerem formatos: números de telefone dos EUA (distância local e interurbano), Números de segurança social e cep americano. Você também pode inserir um nome de formato personalizado definido no editor Filtros e formatos da caixa de ferramentas. Neste caso, o formato não pode ser modificado nas propriedades do objeto. Todos os formatos ou filtros personalizados que você tiver criado estarão automaticamente disponíveis, precedidos por uma barra vertical (|).

O sinal de número (#) é o espaço reservado para um formato de exibição alfanumérico. Você pode incluir os traços, hífens, espaços e quaisquer outros sinais de pontuação apropriados que deseja exibir. Você usa os sinais de pontuação desejados e o sinal de número para cada caractere que quiser exibir.

Por exemplo, considere um número de peça com um formato como "RB-1762-1".

O formato alfa seria:

 ##-####-#

Quando o usuário introduz "RB17621", o campo é apresentado:

 RB-1762-1

O campo contém efetivamente "RB17621".

Se o usuário inserir mais caracteres do que o formato permitir, 4D exibe os últimos caracteres. Por exemplo, se o formato for:

 (#######)

e o usuário introduzir "proportion", o campo é apresentado:

 (portion)

O campo contém efetivamente "proportion". 4D aceita e armazena a entrada inteira, independentemente do formato de exibição. Não se perde nenhuma informação.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------ |
| textFormat | string        | "####", "(#####) ### ####", "### ### ### ####", "#### ## ####", "00000", formatos personalizados |

#### Objectos suportados

[Lista suspensa](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Coluna da caixa de listagem](listbox_overview.md#list-box-columns) - [Rodapé da caixa de listagem](listbox_overview.md#list-box-footers)

---

## Formato de Data

Os formatos de data controlam como as datas aparecem quando são apresentadas ou impressas. Para a entrada de dados, as datas são inseridas no formato MM/DD/AAAA, independentemente do formato de exibição escolhido.

Os formatos de exibição de datas podem ser definidos:

- usando um formato 4D incorporado,
- usando um padrão personalizado.

### Formatos incorporados

A tabela seguinte apresenta as opções disponíveis:

| Nome do formato                 | Cadeia JSON          | Exemplo (sistema americano)       |
| ------------------------------- | -------------------- | --------------------------------- |
| System date short               | systemShort (padrão) | 03/25/20                          |
| System date abbreviated *(1)*   | systemMedium         | Wed, Mar 25, 2020                 |
| System date long                | systemLong           | Quarta-feira, 25 de março de 2020 |
| RFC 822                         | rfc822               | Tue, 25 Mar 2020 22:00:00 GMT     |
| Short Century                   | shortCentury         | 25/03/20 mas 25/04/2032 *(2)*     |
| Internal date long              | long                 | March 25, 2020                    |
| Internal date abbreviated *(1)* | abbreviated          | Mar 25, 2020                      |
| Internal date short             | short                | 03/25/2020                        |
| ISO Date Time *(3)*             | iso8601              | 2020-03-25T00:00:00               |

*(1)* Para evitar ambiguidade e de acordo com a prática atual, os formatos de data abreviados exibem "jun" para junho e "jul" para julho. Esta particularidade só se aplica às versões francesas de 4D.

*(2)* O ano é exibido com dois dígitos quando pertence ao intervalo (1930;2029); caso contrário, será exibido com quatro dígitos. Esse é o padrão, mas pode ser modificado com o comando [SET DEFAULT CENTURY](https://doc.4d.com/4dv20/help/command/en/page392.html) .

*(3)* O formato `ISO Date Time` corresponde ao padrão XML de representação de data e hora (ISO8601). Seu principal objetivo é ser usado na importação/exportação de dados em formato XML e em serviços da Web.
> Independentemente do formato de exibição, se o ano for inserido com dois dígitos, o 4D assume que o século é o 21º se o ano pertencer ao intervalo (00;29) e o 20º se pertencer ao intervalo (30;99). Essa é a configuração padrão, mas pode ser modificada usando o comando [SET DEFAULT CENTURY](https://doc.4d.com/4dv20/help/command/en/page392.html) .



### Formato personalizado

Formatos de data personalizados podem ser criados usando vários padrões descritos na página [**Date and Time Formats**](../Project/date-time-formats.md) . Por exemplo:

| Padrão              | Exemplo (sistema americano) |
| ------------------- | --------------------------- |
| "eeee, dd"          | Wednesday, 29               |
| "'Dia' #D 'do ano'" | Dia #333 do ano             |


#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                  |
| ---------- | ------------- | -------------------------------------------------- |
| dateFormat | string        | <li>Formatos incorporados: "systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long" + " blankIfNull"</li><li>Formatos personalizados: qualquer formato criado usando um [padrão suportado](../Project/date-time-formats.md) + " blankIfNull"</li> |

:::note blankIfNull

Por padrão, uma data nula é exibida com zeros, por exemplo, 00/00/00. Com a opção "blankIfNull", uma data nula é exibida como uma área vazia. A cadeia de caracteres "blankIfNull" (sensível a maiúsculas e minúsculas) deve ser combinada com o valor de formato selecionado. Por exemplo: "systemShort blankIfNull" ou "ee dd LL blankIfNull".

:::

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato do número
> Os campos de número incluem os tipos Integer, Long integer, Integer 64 bits, Real e Float.

Os formatos de números controlam a forma como os números aparecem quando exibidos ou impressos. Para a entrada de dados, você insere apenas os números (incluindo um ponto decimal ou sinal de menos, se necessário), independentemente do formato de exibição escolhido.

4D fornece vários formatos de números padrão.

### Marcadores

Em cada um dos formatos de exibição de números, o sinal de número (#), o zero (0), o acento circunflexo (^) e o asterisco (*) são usados como espaços reservados. Você cria seus próprios formatos de números usando um espaço reservado para cada dígito que espera exibir.

| Placeholder (valores provisórios) | Efeito do zero à esquerda ou à direita |
| --------------------------------- | -------------------------------------- |
| #                                 | Não apresenta nada                     |
| 0                                 | Mostra 0                               |
| ^                                 | Apresenta um espaço (1)                |
| *                                 | Apresenta um asterisco                 |

(1) O acento circunflexo (^) gera um caractere de espaço que ocupa a mesma largura de um dígito na maioria das fontes.

Por exemplo, se quiser exibir números de três dígitos, pode usar o formato ####. Se o usuário inserir mais dígitos do que o formato permite, 4D exibe <<< no campo para indicar que foram inseridos mais dígitos do que o número de dígitos especificado no formato de exibição.

Se o usuário digitar um número negativo, o caractere mais à esquerda será exibido como um sinal de menos (a menos que um formato de exibição negativo tenha sido especificado). Se ##0 for o formato, menos 26 será exibido como -26 e menos 260 será exibido como <<< porque o sinal de menos ocupa um espaço reservado e há apenas três espaços reservados.
> Independentemente do formato de exibição, 4D aceita e armazena o número inserido no campo. Não se perde nenhuma informação.

Cada caractere de espaço reservado tem um efeito diferente na exibição de zeros à esquerda ou à direita. Um zero à esquerda é um zero que começa um número antes do ponto decimal; um zero à direita é um zero que termina um número após o ponto decimal.

Suponha que utiliza o formato ##0 para mostrar três dígitos. Se o utilizador não introduzir nada no campo, o campo apresenta 0. Se o usuário introduzir 26, o campo apresenta 26.

### Caracteres separadores

Os formatos de exibição numérica (exceto para notações científicas) são automaticamente baseados nos parâmetros do sistema regional. 4D substitui os caracteres "." e ",", respectivamente, pelo separador decimal e pelo separador de milhar definido no sistema operacional. O ponto e a vírgula são, portanto, considerados caracteres de espaço reservado, seguindo o exemplo de 0 ou #.
> No Windows, ao usar a tecla de separação decimal do teclado numérico, 4D faz uma distinção dependendo do tipo de campo onde o cursor está localizado:
> 
> * em um campo do tipo Real, o uso dessa chave inserirá o separador decimal definido no sistema,
> * em qualquer outro tipo de campo, essa chave insere o caractere associado à chave, geralmente um ponto (.) ou uma vírgula (,).

### Pontos decimais e outros caracteres de visualização

É possível utilizar um ponto decimal num formato de apresentação de números. Se quiser que o decimal seja exibido independentemente de o usuário digitá-lo, ele deverá ser colocado entre zeros.

Pode utilizar quaisquer outros caracteres no formato. Quando usados isoladamente, ou colocados antes ou depois de espaços reservados, os caracteres sempre aparecem. Por exemplo, se utilizar o seguinte formato:

 $##0

um cifrão sempre aparece porque é colocado antes dos espaços reservados.

Se os caracteres forem colocados entre espaços reservados, eles aparecerão somente se os dígitos forem exibidos em ambos os lados. Por exemplo, se definir o formato:

 ###.##0

o ponto só aparece se o usuário introduzir pelo menos quatro dígitos.

Os espaços são tratados como caracteres nos formatos de apresentação de números.

### Formatos para positivo, negativo e zero

Um formato de exibição de número pode ter até três partes, o que permite especificar formatos de exibição para valores positivos, negativos e zero. Você especifica as três partes separando-as com ponto e vírgula, conforme mostrado abaixo:

 Positivo;Negativo;Zero

Não é necessário especificar as três partes do formato. Se você usar apenas uma parte, o 4D a usará para todos os números, colocando um sinal de menos na frente dos números negativos.

Se você usar duas partes, 4D usará a primeira parte para números positivos e zero e a segunda parte para números negativos. Se você usar três partes, a primeira será para números positivos, a segunda para números negativos e a terceira para zero.
> A terceira parte (zero) não é interpretada e não aceita caracteres de substituição. Se você digitar `###;###;#`, o valor zero será exibido como "#". Por outras palavras, o que é realmente introduzido é o que será apresentado para o valor zero.

Aqui está um exemplo de um formato de exibição de números que mostra cifrões e vírgulas, coloca valores negativos entre parênteses e não exibe zeros:

 $###,##0.00;($###,##0.00);

Observe que a presença do segundo ponto e vírgula instrui o 4D a usar nothing para exibir zero. O formato a seguir é semelhante, exceto pelo fato de que a ausência do segundo ponto e vírgula instrui o 4D a usar o formato de número positivo para zero:

 $###,##0.00;($###,##0.00)

Neste caso, a indicação de zero seria $0,00.

### Notação científica

Se você quiser exibir números em notação científica, use o sinal de adição **** (&) seguido de um número para especificar o número de dígitos que deseja exibir. Por exemplo, se o formato for:

 &3

apresentaria 759,62 como:

 7.60e+2

O formato de notação científica é o único formato que arredonda automaticamente o número exibido. Note in the example above that the number is rounded up to 7.60e+2 instead of truncating to 7.59e+2.

### Formatos hexadecimais

You can display a number in hexadecimal using the following display formats:

* `&x`: This format displays hexadecimal numbers using the “0xFFFF” format.
* `&$`: This format displays hexadecimal numbers using the “$FFFF” format.

### Notação XML

The `&xml` format will make a number compliant with XML standard rules. In particular, the decimal separator character will be a period "." in all cases, regardless of the system settings.

### Mostrar um número como hora

You can display a number as a time (with a time format) by using `&/` followed by a digit. Time is determined by calculating the number of seconds since midnight that the value represents. O dígito no formato corresponde à ordem em que o formato da hora aparece no menu pendente Formato.

Por exemplo, se o formato for:

 &/5

corresponde ao 5.º formato de hora no menu pop-up, especificamente a hora AM/PM. Um campo numérico com este formato apresentaria 25000 como:

 6:56 AM

### Exemplos

The following table shows how different formats affect the display of numbers. The three columns — Positive, Negative, and Zero — each show how 1,234.50, –1,234.50, and 0 would be displayed.

| Formato Introduzido                    | Positivo         | Negativo      | Zero                         |
| -------------------------------------- | ---------------- | ------------- | ---------------------------- |
| ###                                    | <<<              | <<<           |                              |
| ####                                   | 1234             | <<<<          |                              |
| #######                                | 1234             | -1234         |                              |
| #####.##                               | 1234.5           | -1234.5       |                              |
| ####0.00                               | 1234.50          | -1234.50      | 0.00                         |
| #####0                                 | 1234             | -1234         | 0                            |
| +#####0;–#####0;0                      | +1234            | -1234         | 0                            |
| #####0DB;#####0CR;0                    | 1234DB           | 1234CR        | 0                            |
| #####0;(#####0)                        | 1234             | (1234)        | 0                            |
| ###,##0                                | 1,234            | -1,234        | 0                            |
| ##,##0.00                              | 1,234.50         | -1,234.50     | 0.00                         |
| \^\^\^\^\^\^\^                  | 1234             | -1234         |                              |
| \^\^\^\^\^\^0                    | 1234             | -1234         | 0                            |
| \^\^\^,\^\^0                      | 1,234            | -1,234        | 0                            |
| \^\^,\^\^0.00                      | 1,234.50         | -1,234.50     | 0.00                         |
| \*\*\*\*\*\*\*           | \*\*\*1234 | \*\*-1234 | \*\*\*\*\*\*\* |
| \*\*\**\*\*0               | \*\*\*1234 | \*\*-1234 | \*\*\*\*\*\*0    |
| \*\*\*,*\*0                  | \*\*1,234    | \*-1,234    | \*\*\*\*\*\*0    |
| \*\*,\*\*0.00                  | \*1,234.50     | -1,234.50     | \*\*\*\*\*0.00     |
| $\*,\*\*0.00;–$\*,\*\*0.00 | $1,234.50        | -$1,234.50    | $\*\*\*\*0.00        |
| $\^\^\^\^0                         | $ 1234           | $–1234        | $    0                       |
| $\^\^\^0;–$\^\^\^0               | $1234            | –$1234        | $   0                        |
| $\^\^\^0 ;($\^\^\^0)             | $1234            | ($1234)       | $   0                        |
| $\^,\^\^0.00 ;($\^,\^\^0.00)     | $1,234.50        | ($1,234.50)   | $    0.00                    |
| &2                                     | 1.2e+3           | -1.2e+3       | 0.0e+0                       |
| &5                                     | 1.23450e+3       | -1.23450e+3   | 0.00000                      |
| &xml                                   | 1234.5           | -1234.5       | 0                            |

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                                     |
| ------------ | ------------- | --------------------------------------------------------------------- |
| numberFormat | string        | Números (incluindo um ponto decimal ou sinal de menos, se necessário) |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Progress Indicators](progressIndicator.md)

---

## Formato imagem

Os formatos imagem controlam a aparência das imagens quando exibidas ou impressas. For data entry, the user always enters pictures by pasting them from the Clipboard or by drag and drop, regardless of the display format.

As opções de truncagem e escala não afetam a imagem em si. O conteúdo de um campo Imagem é sempre guardado. Only the display on the particular form is affected by the picture display format.

### Escalado para caber

`Gramática JSON: "scaled"`

O formato **Scaled to fit** faz com que o 4D redimensione a imagem para se ajustar às dimensões da área.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Truncado (centrado e não centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

The **Truncated (centered)** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D corta igualmente de cada borda e da parte superior e inferior.

O formato **Truncado (não centrado)** faz com que 4D coloque o canto superior esquerdo da imagem no canto superior esquerdo da área e recorte qualquer parte que não caiba na área. 4D corta da direita e de baixo para cima.
> Quando o formato da imagem for **Truncado (não centrado)**, é possível adicionar barras de deslocamento à área de entrada.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

### Escalado para caber (proporcional) e Escalado para caber centrado (proporcional)

`Gramática JSON: "proportionalTopLeft" / "proportionalCenter"`

When you use **Scaled to fit (proportional)**, the picture is reduced proportionally on all sides to fit the area created for the picture. The **Scaled to fit centered (proportional)** option does the same, but centers the picture in the picture area.

If the picture is smaller than the area set in the form, it will not be modified. If the picture is bigger than the area set in the form, it is proportionally reduced. Uma vez que é proporcionalmente reduzida, a imagem não aparece distorcida.

If you have applied the **Scaled to fit centered (proportional)** format, the picture is also centered in the area:

![](../assets/en/FormObjects/property_pictureFormat_ScaledProportional.png)

### Replicado

`Gramática JSON: "tiled"`

Quando a área que conter uma imagem com o formato **Replicated** for ampliada, a imagem não é deformada, mas é replicada tantas vezes quantas as necessárias para preencher totalmente a área.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Se o campo for reduzido para um tamanho inferior ao da imagem original, a imagem é truncada (não centrada).

#### Gramática JSON


| Nome          | Tipo de dados | Valores possíveis                                                                                     |
| ------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| pictureFormat | string        | "truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft", "proportionalCenter" |

#### Objectos suportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato Hora

Os formatos de hora controlam a forma como as horas aparecem quando são apresentadas ou impressas. For data entry, you enter times in the 24-hour HH:MM:SS format or the 12-hour HH:MM:SS AM/PM format, regardless of the display format you have chosen.

Display formats for times can be defined:

- usando um formato 4D incorporado,
- usando um padrão personalizado.

### Formatos incorporados

The table below shows the Time field display formats and gives examples:

| Nome do formato              | Cadeia JSON  | Comentários                                                                                                                                          | Exemplo para 04:30:25          |
| ---------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| HH:MM:SS                     | hh_mm_ss   |                                                                                                                                                      | 04:30:25                       |
| HH:MM                        | hh_mm        |                                                                                                                                                      | 04:30                          |
| Hour Min Sec                 | HH_MM_SS   |                                                                                                                                                      | 4 horas 30 minutos 25 segundos |
| Hour Min                     | HH_MM        |                                                                                                                                                      | 4 horas 30 minutos             |
| HH:MM AM/PM                  | hh_mm_am   |                                                                                                                                                      | 4:30 a.m.                      |
| MM SS                        | mm_ss        | Hora expressa como uma duração de 00:00:00                                                                                                           | 270:25                         |
| Min Sec                      | MM_SS        | Hora expressa como uma duração de 00:00:00                                                                                                           | 270 minutos 25 segundos        |
| ISO Date Time                | iso8601      | Corresponde ao padrão XML para representar dados relacionados ao tempo. It is mainly intended to be used when importing/exporting data in XML format | 0000-00-00T04:30:25            |
| System time short            | - (o padrão) | Formato de hora standard definido no sistema                                                                                                         | 04:30:25                       |
| System time long abbreviated | systemMedium | apenas macOS: formato de hora abreviado definido no sistema. <br/>Windows: esse formato é o mesmo que o formato curto da hora do sistema       | 4•30•25 AM                     |
| System time long             | systemLong   | apenas macOS: formato de hora longa definido no sistema. <br/>Windows: esse formato é o mesmo que o formato curto da hora do sistema           | 4:30:25 AM HNEC                |


### Formato personalizado

Customized time formats can be built using several patterns described in the [**Date and Time Formats**](../Project/date-time-formats.md) page. Por exemplo:

| Pattern                                | Exemplo (sistema americano)     |
| -------------------------------------- | ------------------------------- |
| "HH 'hours' mm 'minutes' ss 'seconds'" | 13 horas 25 minutos 12 segundos |
| "hh:mm aa"                             | 01:25 PM                        |


#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                  |
| ---------- | ------------- | -------------------------------------------------- |
| timeFormat | string        | <li>Built-in formats: "systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS" + " blankIfNull"</li><li>Custom formats: any format built using [a supported pattern](../Project/date-time-formats.md) + "blankIfNull"</li> |

:::note blankIfNull

By default, a null time is displayed with zeros, e.g. "00:00:00". With the "blankIfNull" option, a null time is displayed as an empty area. A cadeia de caracteres "blankIfNull" (sensível a maiúsculas e minúsculas) deve ser combinada com o valor de formato selecionado. Ex: "MM_SS blankIfNull" or "hh:mm aa blankIfNull"

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Texto quando False/Texto quando True

Quando uma [expressão booleana](properties_Object.md#expression-type) é apresentada como:

* um texto num [objeto de entrada](input_overview.md)
* a ["popup"](properties_Display.md#display-type) in a [list box column](listbox_overview.md#list-box-columns),

... pode selecionar o texto a apresentar para cada valor:

* **Texto quando True** - o texto a ser apresentado quando o valor é "true"
* **Texto quando False** - o texto a ser apresentado quando o valor é "false"

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                |
| ------------- | ------------- | -------------------------------------------------------------------------------- |
| booleanFormat | string        | "\<*textWhenTrue*\>;\<*textWhenFalse*\>", por exemplo, "Assigned;Unassigned" |

#### Objectos suportados

[List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Tipo de exibição

Utilizado para associar um formato de visualização aos dados da coluna. The formats provided depends on the variable type (array type list box) or the data/field type (selection and collection type list boxes).

Boolean and number (numeric or integer) columns can be displayed as check boxes. Neste caso, pode ser definida a propriedade [Título](#title).

As colunas booleanas também podem ser apresentadas como menus pop-up. Neste caso, as propriedades [Text quando False e Text quando True](#text-when-false-text-when-true) devem ser definidas.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                  |
| ----------- | ------------- | -------------------------------------------------- |
| controlType | string        | <li>**número de colunas**: "automatic" (padrão) ou "checkbox"</li><li>**colunas booleanas**: "checkbox" (padrão) ou "popup"</li> |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Não renderizado

When this property is enabled, the object is not drawn on the form, however it can still be activated.

Em particular, esta propriedade permite implementar botões "invisíveis".  Os botões não renderizados podem ser colocados em cima de objetos gráficos. They remain invisible and do not highlight when clicked, however their action is triggered when they are clicked.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis |
| ------- | ------------- | ----------------- |
| display | boolean       | true, false       |

#### Objectos suportados

[Botão](button_overview.md) - [Lista pendente](dropdownList_Overview.md)

---

## Três Estados

Permite que um objeto de caixa de verificação aceite um terceiro estado. A variável associada à caixa de seleção devolve o valor 2 quando a caixa estiver no terceiro estado.

#### Caixas de verificação de três estados em colunas list box

List box columns with a numeric [data type](properties_Object.md#expression-type) can be displayed as three-states check boxes. Se for selecionado, são apresentados os seguintes valores:

* 0 = caixa não assinalada,
* 1 = caixa marcada,
* 2 (ou qualquer valor >0) = caixa semi-marcada (terceiro estado). Para a introdução de dados, este estado devolve o valor 2.
* -1 = caixa de seleção invisível,
* -2 = caixa desmarcada, não editável,
* -3 = caixa marcada, não pode ser introduzida,
* -4 = caixa semi-marcada, não editável

In this case as well, the [Title](#title) property is also available so that the title of the check box can be entered.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| threeState | boolean       | true, false       |

#### Objectos suportados

[Check box](checkbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Título

Esta propriedade está disponível para uma coluna list box se:

* the [column type](properties_Object.md#expression-type) is **boolean** and its [display type](properties_Display.md#display-type) is "Check Box"
* the [column type](properties_Object.md#expression-type) is **number** (numeric or integer) and its [display type](properties_Display.md#display-type) is "Three-states Checkbox".

Nesse caso, o título da caixa de seleção pode ser inserido usando essa propriedade.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                           |
| ------------ | ------------- | ----------------------------------------------------------- |
| controlTitle | string        | Qualquer etiqueta personalizada para a caixa de verificação |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Truncar com reticências

Controls the display of values when list box columns are too narrow to show their full contents.

This option is available for columns with any type of contents, except pictures and objects.

* When the property is enabled (default), if the contents of a list box cell exceed the width of the column, they are truncated and an ellipsis is displayed:

 ![](../assets/en/FormObjects/property_truncate1.png)
> A posição das elipses depende do sistema operativo. No exemplo acima (Windows), ele é adicionado no lado direito do texto. No macOS, as reticências são adicionadas no meio do texto.

* When the property is disabled, if the contents of a cell exceed the width of the column, they are simply clipped with no ellipsis added:

 ![](../assets/en/FormObjects/property_truncate2.png)

The Truncate with ellipsis option is enabled by default and can be specified with list boxes of the Array, Selection, or Collection type.

> When applied to Text type columns, the Truncate with ellipsis option is available only if the [Wordwrap](#wordwrap) option is not selected. When the Wordwrap property is selected, extra contents in cells are handled through the word-wrapping features so the Truncate with ellipsis property is not available.

The Truncate with ellipsis property can be applied to Boolean type columns; however, the result differs depending on the [cell format](#display-type):

* Para formatos booleanos do tipo pop-up, as etiquetas são truncadas com uma elipse,
* Para formatos booleanos do tipo caixa de verificação, as etiquetas são sempre cortadas.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis      |
| ------------ | ------------- | ---------------------- |
| truncateMode | string        | "withEllipsis", "none" |

#### Objectos suportados

[List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-footers)

---

## Visibilidade

Esta propriedade permite ocultar o objeto no ambiente Aplicação.

É possível tratar a propriedade Visibilidade para a maioria dos objetos de formulário. Esta propriedade é principalmente usada para simplificar o desenvolvimento de interfaces dinâmicas. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. The Visibility property allows inverting this logic by making certain objects invisible by default.

#### Visibilidade automática em formulários lista

In the context of list forms, the Visibility property supports two specific values:

* **If record selected** (JSON name: "selectedRows")
* **If record not selected** (JSON name: "unselectedRows")

This property is only used when drawing objects located in the body of a list form. It tells 4D whether or not to draw the object depending on whether the record being processed is selected/not selected. It allows you to represent a selection of records using visual attributes other than highlight colors:

![](../assets/en/FormObjects/select-row.png)

4D does not take this property into account if the object was hidden using the [`OBJECT SET VISIBLE`](https://doc.4d.com/4dv20/help/command/en/page603.html) command; in this case, the object remains invisible regardless of whether or not the record is selected.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                                                       |
| ------------ | ------------- | --------------------------------------------------------------------------------------- |
| visibilidade | string        | "visible", "hidden", "selectedRows" (list form only), "unselectedRows" (list form only) |

#### Objectos suportados

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Wordwrap

> For [input](input_overview.md) objects, available when the [Multiline](properties_Entry.md#multiline) property is set to "yes" .

Manages the display of contents when it exceeds the width of the object.

#### Marcado para list box/Sim para entrada

`Gramática JSON: "normal"`

When this option is selected, text automatically wraps to the next line whenever its width exceeds that of the column/area, if the column/area height permits it.

* In single-line columns/areas, only the last word that can be displayed entirely is displayed. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.

* Em colunas/áreas com várias linhas, 4D efetua retornos de linha automáticos.

![](../assets/en/FormObjects/wordwrap2.png)

#### Não selecionado para list box/Não para entrada

`Gramática JSON: "none"`

When this option is selected, 4D does not do any automatic line returns and the last word that can be displayed may be truncated. Nas áreas de tipo de texto, são suportadas os retornos de carro:

![](../assets/en/FormObjects/wordwrap3.png)

In list boxes, any text that is too long is truncated and displayed with an ellipse (...). In the following example, the Wordwrap option is **checked for the left column** and **unchecked for the right column**:

![](../assets/en/FormObjects/property_wordwrap1.png)

Note that regardless of the Wordwrap option’s value, the row height is not changed. If the text with line breaks cannot be entirely displayed in the column, it is truncated (without an ellipse). In the case of list boxes displaying just a single row, only the first line of text is displayed:

![](../assets/en/FormObjects/property_wordwrap2.png)

#### Automático para entrada (opção padrão)

`Gramática JSON: "automatic"`

* In single-line areas, words located at the end of lines are truncated and there are no line returns.
* Em áreas com várias linhas, 4D efetua retornos automáticos de linha.

![](../assets/en/FormObjects/wordwrap1.png)

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                 |
| -------- | ------------- | ------------------------------------------------- |
| wordwrap | string        | "automatic" (exceto list box), "normal", "nenhum" |

#### Objectos suportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)
