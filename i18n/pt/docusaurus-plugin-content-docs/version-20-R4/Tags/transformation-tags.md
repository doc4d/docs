---
id: transformation-tags
title: Etiquetas de transformação
---

4D oferece um conjunto de etiquetas de transformação que lhe permite inserir referências a variáveis ou expressões 4D, ou realizar diferentes tipos de processamento dentro de um texto de origem, referido como um "modelo". Essas tags são interpretadas quando o texto de origem é executado e geram um texto de saída.

Esse princípio é usado em particular pelo servidor da Web 4D para criar [páginas de modelo da Web] (WebServer/templates.md).

Em geral, essas tags devem ser inseridas como comentários do tipo HTML (`<!--#Tag Contents-->`), mas uma sintaxe alternativa compatível com xml (#alternative-syntax-for-4dtext-4dhtml-4deval) está disponível para algumas delas.

É possível misturar vários tipos de etiquetas. Por exemplo, a seguinte estrutura HTML é inteiramente viável:

```html
<HTML>
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (Loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (Subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```

## Princípios de utilização das etiquetas

### Parsing

A análise do conteúdo de uma fonte _template_ é feita em dois contextos:

- Usando o comando `PROCESS 4D TAGS`; esse comando aceita um _template_ como entrada, bem como parâmetros opcionais, e retorna um texto resultante do processamento.

- Usando o servidor HTTP integrado do 4D: [páginas de modelo] (WebServer/templates.md) enviadas por meio dos comandos `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (texto/html tipo BLOB), `WEB SEND TEXT` ou chamadas usando URLs. Nesse último caso, por motivos de otimização, as páginas sufixadas com ".htm" e ".html" NÃO são analisadas. Para analisar páginas HTML nesse caso, você deve adicionar o sufixo ".shtm" ou ".shtml" (por exemplo, http\://www\.server.com/dir/page.shtm).

### Processamento recursivo

As etiquetas 4D são interpretadas de forma recursiva: 4D sempre tenta reinterpretar o resultado de uma transformação e, se uma nova transformação tiver ocorrido, uma interpretação adicional é realizada, e assim por diante, até que o produto obtido não precise mais de nenhuma transformação adicional. Por exemplo, dada a seguinte instrução:

```html
<!--#4DHTML [Mail]Letter_type-->
```

Se o próprio campo de texto `[Mail]Letter_type` contiver uma tag, por exemplo, `<!--#4DSCRIPT/m_Gender-->`, essa tag será avaliada recursivamente após a interpretação da tag 4DHTML.

Esse princípio poderoso atende à maioria das necessidades relacionadas à transformação de texto. Observe, entretanto, que em alguns casos isso também pode permitir a inserção de código malicioso no contexto da Web, [o que pode ser evitado] (WebServer/templates.md#prevention-of-malicious-code-insertion).

### Identificadores com tokens

Para garantir a avaliação correta das expressões processadas por meio de tags, independentemente do idioma ou da versão 4D, é recomendável usar a sintaxe tokenizada para elementos cujo nome possa variar de acordo com as versões (comandos, tabelas, campos, constantes). Por exemplo, para inserir o comando `Current time` (tempo atual), digite `Current time:C178`.

### Utilizar o "." como separador decimal

4D sempre usa o caractere de ponto final (.) como um separador decimal ao avaliar uma expressão numérica usando uma tag 4D `4DTEXT`, `4DHTML` e `4DEVAL`. Os parâmetros regionais são ignorados. Esse recurso facilita a manutenção do código e a compatibilidade entre idiomas e versões 4D.

## 4DBASE

#### Sintaxe: `<!--#4DBASE folderPath-->`

A tag `<!--#4DBASE -->` designa o diretório de trabalho a ser usado pela tag `<!--#4DINCLUDE-->`.

Quando é chamada em uma página da Web, a tag `<!--#4DBASE -->` modifica todas as chamadas `<!--#4DINCLUDE-->` subsequentes nessa página, até a próxima `<!--........-->`, se houver. Se a pasta`<!--#4DBASE -->` for modificada em um arquivo incluído, ela recuperará seu valor original do arquivo pai.

O parâmetro _folderPath_ deve conter um nome de caminho relativo à página atual e deve terminar com uma barra (`/`). A pasta designada deve estar localizada dentro da pasta Web.

Passe a palavra-chave "WEBFOLDER" para restaurar o caminho padrão (relativo à página).

O código seguinte, que deve especificar um caminho relativo para cada chamada:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

... é equivalente a:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
```

Por exemplo, para definir um directório para a página inicial:

```html
/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
```

No arquivo "head.html", a pasta atual é modificada por meio de `<!--#4DBASE -->`, sem que isso altere seu valor em "Index.html":

```html
/* Head.htm */
/* O diretório de trabalho aqui é relativo ao arquivo incluído (FR/ ou US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main. ss-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
```

## 4DCODE

#### Sintaxe: `<!--#4DCODE codeLines-->`

A tag `4DCODE` permite que você insira um bloco de código 4D de várias linhas em um modelo.

Quando um `<! -#4DCODE` sequencia detectada que é seguida de um espaço, um CR ou um caractere LF, 4D interpreta todas as linhas de código até a próxima sequência `-->`. O bloco de código em si pode conter retornos, feeds de linha ou ambos; ele será interpretado sequencialmente por 4D.

Por exemplo, pode escrever num modelo:

```html
<!--#4DCODE
//PARAMETERS initialization
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...your code here
If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if
End if
-->
```

Eis as características da etiqueta 4DCODE:

- O comando `TRACE` é suportado e ativa o depurador 4D, permitindo que você depure seu código de modelo.
- Qualquer erro exibirá a caixa de diálogo de erro padrão que permite que o usuário interrompa a execução do código ou entre no modo de depuração.
- O texto entre `<!--#4DCODE` and `-->` é dividido em linhas que aceitam qualquer convenção de fim de linha (cr, lf ou crlf).
- O texto é tokenizado no contexto do banco de dados chamado `PROCESS 4D TAGS`. Isto é importante para o reconhecimento dos métodos dos projectos, por exemplo. A propriedade de método [Disponível através de tags e URLs 4D (4DACTION ...)](WebServer/allowProject.md) não é tida em conta.
- Mesmo que o texto sempre use o inglês americano, é recomendável usar a sintaxe de token (:Cxxx) para nomes de comandos e constantes para se proteger contra possíveis problemas devido ao fato de comandos ou constantes serem renomeados de uma versão do 4D para outra.

> O fato de que as tags 4DCODE podem chamar qualquer um dos comandos do idioma 4D ou métodos do projeto pode ser visto como um problema de segurança. especialmente quando o banco de dados está disponível por HTTP. No entanto, como ele executa o código do servidor chamado a partir dos seus próprios arquivos de template, a tag em si não representa um problema de segurança. Neste contexto, como em qualquer servidor Web, a segurança é manipulada principalmente ao nível de acessos remotos para arquivos de servidor.

## 4DEACH e 4DENDEACH

#### Sintaxe: `<!--#4DEACH variable in expression-->` `<!--#4DENDEACH-->`

O comentário `<!--#4DEACH-->` permite iterar um item especificado sobre todos os valores da _expressão_. O item é definido como uma _variável_ cujo tipo depende do tipo da _expressão_.

O comentário `<!--#4DEACH-->` pode iterar por três tipos de expressão:

- [collections](#--4deach-item-in-collection--): percorre cada elemento da coleção,
- [seleções de entidades](#--4deach-entity-in-entityselection--): loop através de cada entidade,
- [objects](#--4deach-property-in-object--): loop através de cada propriedade de objeto.

O número de iterações é avaliado na inicialização e não será alterado durante o processamento. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.

### `<!--#4DEACH item in collection-->`

Essa sintaxe itera em cada _item_ da _coleção_. A parte do código localizada entre `<!--#4DEACH -->` e `<!--#4DENDEACH-->` é repetida para cada elemento da coleção.

O parâmetro _item_ é uma variável do mesmo tipo que os elementos da coleção.

A coleção deve conter apenas **elementos do mesmo tipo**, caso contrário, um erro será retornado assim que a variável _item_ receber o primeiro tipo de valor incompatível.

The number of loops is based on the number of elements of the collection. At each iteration, the _item_ variable is automatically filled with the matching element of the collection. Os pontos abaixo devem ser considerados:

- If the _item_ variable is of the object type or collection type (i.e. if _expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). Se a variável for de tipo escalar, só se modificará a variável.
- The _item_ variable gets the same type as the first collection element. If any collection element is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a Null value, an error is generated if the _item_ variable type does not support Null values (such as longint variables).

#### Exemplo com uma coleção de valores escalares

_getNames_ returns a collection of strings. The method has been declared as "[available through 4D tags and URLs](WebServer/allowProject.md)".

```html
 <table class="table">    

        <tr><th>Name</th></tr>

          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Exemplo com uma coleção de objetos

_getSalesPersons_ returns a collection of objects.

```html
    <table class="table">    
         <!--#4DCODE
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

### `<!--#4DEACH entity in entitySelection-->`

This syntax iterates on each _entity_ of the _entitySelection_. The code portion located between `<!--#4DEACH -->` and `<!--#4DENDEACH-->` is repeated for each entity of the entity selection.

The _entity_ parameter is an object variable of the entity selection class.

The number of loops is based on the number of entities of the entity selection. At each iteration, the _entity_ object variable is automatically filled with the matching entity of the entity selection.

#### Exemplo com uma tabela html

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds.Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Exemplo com `PROCESS 4D TAGS`

```4d
var customers : cs.CustomersSelection
var $input; $output : Text

customers:=ds.Customers.all()
$input:="<!--#4DEACH $cust in customers-->"
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->"
PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
```

### `<!--#4DEACH property in object-->`

This syntax iterates on each _property_ of the _object_. The code portion located between `<!--#4DEACH -->` and `<!--#4DENDEACH-->` is repeated for each property of the object.

The _property_ parameter is a text variable automatically filled with the name of the currently processed property.

As propriedades do objeto são processadas de acordo com sua ordem de criação. Durante o loop, propriedades podem ser adicionadas ou eliminadas no objeto, sem modificar o número de loops que permanecerão no número original de propriedades do objeto.

#### Exemplo com as propriedades de um objeto

_getGamers_ is a project method that returns an object like ("Mary"; 10; "Ann"; 20; "John"; 40) to figure gamer scores.

```html
    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

## 4DEVAL

#### Sintaxe: `<!--#4DEVAL expression-->`

#### Alternative syntax: `$4DEVAL(expression)`

The `4DEVAL` tag allows you to assess a 4D variable or expression. Like the [`4DHTML`](#4dhtml) tag, `4DEVAL` does not escape HTML characters when returning text. However, unlike `4DHTML` or [`4DTEXT`](#4dtext), `4DEVAL` allows you to execute any valid 4D statement, including assignments and expressions that do not return any value.

Por exemplo, é possível executar:

```
 $input:="<!--#4DEVAL a:=42-->" //assignment
 $input:=$input+"<!--#4DEVAL a+1-->" //calculation
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
```

In case of an error during interpretation, the text inserted will be in the form: `<!--#4DEVAL expr-->: ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

## 4DHTML

#### Sintaxe: `<!--#4DHTML expression-->`

#### Sintaxe alternativa: `$4DHTML(expression)`

Just like the `4DTEXT` tag, this tag lets you assess a 4D variable or expression that returns a value, and insert it as an HTML expression. Unlike the `4DTEXT` tag, this tag does not escape HTML special characters (e.g. ">").

For example, here are the processing results of the 4D text variable myvar with the available tags:

| Valor myvar    | Etiquetas              | Resultados                  |
| -------------- | ---------------------- | --------------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&amp;lt;B&amp;gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`                       |

In case of an interpretation error, the inserted text will be `<!--#4DHTML myvar--> : ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

## 4DIF, 4DELSE, 4DELSEIF e 4DENDIF

#### Sintaxe: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Used with the `<!--#4DELSEIF-->` (optional), `<!--#4DELSE-->` (optional) and `<!--#4DENDIF-->` comments, the `<!--#4DIF expression-->` comment offers the possibility to execute portions of code conditionally.

The _expression_ parameter can contain any valid 4D expression returning a Boolean value. It must be indicated within parenthesis and comply with the 4D syntax rules.

The `<!--#4DIF expression-->` ... `<!--#4DENDIF-->` blocks can be nested in several levels. Like in 4D, each `<!--#4DIF expression-->` must match a `<!--#4DENDIF-->`.

In case of an interpretation error, the text "`<!--#4DIF expression-->`: A Boolean expression was expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`. Likewise, if there are not as many `<!--#4DENDIF-->` as `<!--#4DIF -->`, the text "`<!--#4DIF expression-->`: 4DENDIF expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`.

Using the `<!--#4DELSEIF-->` tag, you can test an unlimited number of conditions. Only the code that follows the first condition evaluated as `True` is executed. If no conditions are true, no statement is executed (if there is no final `<!--#4DELSE-->`).
You can use a `<!--#4DELSE-->` tag after the last `<!--#4DELSEIF-->`. If all the conditions are false, the statements following the `<!--#4DELSE-->` are executed.

Os dois códigos seguintes são equivalentes.

Código usando somente `4DELSE`:

```html
<!--#4DIF Condition1-->
  /* Condition1 is true*/
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* Condition2 is true*/
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* Condition3 is true */
        <!--#4DELSE-->
            /*None of the conditions are true*/
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
```

Similar code using the `4DELSEIF` tag:

```
<!--#4DIF Condition1-->
     /* Condition1 is true*/
<!--#4DELSEIF Condition2-->
     /* Condition2 is true*/
<!--#4DELSEIF Condition3-->
    /* Condition3 is true */
<!--#4DELSE-->
    /* None of the conditions are true*/
<!--#4DENDIF-->
```

This example of code inserted in a static HTML page displays a different label according the `vname#""` expression result:

```html
<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
```

Este exemplo insere páginas diferentes dependendo de qual usuário está conectado:

```html
<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
```

## 4DINCLUDE

#### Sintaxe: `<!--#4DINCLUDE path-->`

This tag is mainly designed to include an HTML page (indicated by the _path_ parameter) in another HTML page. By default, only the body of the specified HTML page, i.e. the contents found within the `<body>` and `</body>` tags, is included (the tags themselves are not included). Isso permite evitar conflitos relacionados a meta etiquetas presentes nos cabeçalhos.

However, if the HTML page specified does not contain `<body>``</body>` tags, the entire page is included. Cabe-lhe a você verificar a coerência das meta etiquetas.

The `<!--#4DINCLUDE -->` comment is very useful for tests (`<!--#4DIF-->`) or loops (`<!--#4DLOOP-->`). É muito conveniente incluir banners de acordo com critérios ou de forma aleatória.
When including, regardless of the file name extension, 4D analyzes the called page and then inserts the contents (modified or not) in the page originating the `4DINCLUDE` call.

An included page with the `<!--#4DINCLUDE -->` comment is loaded in the Web server cache the same way as pages called via a URL or sent with the `WEB SEND FILE` command.

In _path_, put the path leading to the document to include. Warning: In the case of a `4DINCLUDE` call, the path is relative to the document being analyzed, that is, the "parent" document. Use the slash character (/) as a folder separator and the two dots (..) to go up one level (HTML syntax). When you use the `4DINCLUDE` tag with the `PROCESS 4D TAGS` command, the default folder is the project folder.

> You can modify the default folder used by the `4DINCLUDE` tag in the current page, using the `<!--#4DBASE -->` tag (see below).

The number of `<!--#4DINCLUDE path-->` within a page is unlimited. However, the `<!--#4DINCLUDE path-->` calls can be made only at one level. This means that, for example, you cannot insert `<!--#4DINCLUDE mydoc3.html-->` in the _mydoc2.html_ body page, which is called by `<!--#4DINCLUDE mydoc2-->` inserted in _mydoc1.html_. Além disso, 4D verifica que as inclusões não são recursivas.

In case of error, the inserted text is "`<!--#4DINCLUDE path-->` :The document cannot be opened".

Exemplos:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP e 4DENDLOOP

#### Sintaxe: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

This comment allows repetition of a portion of code as long as the condition is fulfilled. The portion is delimited by `<!--#4DLOOP-->` and `<!--#4DENDLOOP-->`.

The `<!--#4DLOOP condition-->` ... `<!--#4DENDLOOP-->` blocks can be nested. Like in 4D, each `<!--#4DLOOP condition-->` must match a `<!--#4DENDLOOP-->`.

Existem cinco tipos de condições:

### `<!--#4DLOOP [table]-->`

This syntax makes a loop for each record from the table current selection in the current process. The code portion located between the two comments is repeated for each current selection record.

> When the `4DLOOP` tag is used with a table, records are loaded in "Read only" mode.

O seguinte código:

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
    NEXT RECORD([People])
 End while
```

### `<!--#4DLOOP array-->`

Esta sintaxe cria um ciclo para cada item do array. O item atual do array é aumentado quando cada parte do código é repetida.

> Esta sintaxe não pode ser utilizada com arrays de duas dimensões. Neste caso, é preferível combinar um método com loops aninhados.

O seguinte exemplo de código:

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

This syntax makes a loop as long as the method returns `True`. O método utiliza um tipo de parâmetro Long Integer. First it is called with the value 0 to allow an initialization stage (if necessary); it is then called with the values 1 ,then 2, then 3 and so on, as long as it returns `True`.

For security reasons, within a Web process, the `On Web Authentication` database method can be called once just before the initialization stage (method execution with 0 as parameter). Se a autenticação for correta, a fase de inicialização prossegue.

`C_BOOLEAN($0)` and `C_LONGINT($1)` MUST be declared within the method for compilation purposes.

O seguinte exemplo de código:

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
```

The `my_method` method can be as follows:

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `Inicialização
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `Para o loop
    End if
 End if
```

### `<!--#4DLOOP expression-->`

With this syntax, the `4DLOOP` tag makes a loop as long as the _expression_ returns `True`. The expression can be any valid Boolean expression and must contain a variable part to be evaluated in each loop to avoid infinite loops.

Por exemplo, o seguinte código:

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

...produz o seguinte resultado:

```

0

1
2
3
```

### `<!--#4DLOOP pointerArray-->`

In this case, the `4DLOOP` tag works like it does with an array: it makes a loop for each element of the array referenced by the pointer. The current array element is increased each time the portion of code is repeated.

This syntax is useful when you pass an array pointer as a parameter to the `PROCESS 4D TAGS` command.

Exemplo:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

In case of an interpretation error, the text "`<!--#4DLOOP expression-->`: description" is inserted instead of the contents located between `<!--#4DLOOP -->` and `<!--#4DENDLOOP-->`.

Podem ser mostradas as seguintes mensagens:

- Tipo de expressão inesperado (erro padrão);
- Nome incorreto da tabela (erro no nome da tabela);
- An array was expected (the variable is not an array or is a two dimension array);
- O método não existe;
- Erro de sintaxe (quando o método está em execução);
- Access error (you do not have the appropriate access privileges to access the table or the method).
- 4DENDLOOP expected (the `<!--#4DENDLOOP-->` number does not match the `<!--#4DLOOP -->`).

## 4DSCRIPT/

#### Syntax: `<!--#4DSCRIPT/MethodName/MyParam-->`

The `4DSCRIPT` tag allows you to execute 4D methods when processing the template. The presence of the `<!--#4DSCRIPT/MyMethod/MyParam-->` tag as an HTML comment launches the execution of the `MyMethod` method with the `Param` parameter as a string in `$1`.

> If the tag is called in the context of a Web process, when the page is loaded, 4D calls the `On Web Authentication` database method (if it exists). Se retornar True, 4D executa o método.

The method must return text in `$0`. If the string starts with the code character 1, it is considered as HTML (the same principle is true for the `4DHTML` tag).

For example, let’s say that you insert the following comment `“Today is <!--#4DSCRIPT/MYMETH/MYPARAM-->”` into a template Web page. When loading the page, 4D calls the `On Web Authentication` database method, then calls the `MYMETH` method and passes the string “/MYPARAM” as the parameter `$1`. The method returns text in $0 (for example "12/31/21"); the expression "`Today is <!--#4DSCRIPT/MYMETH/MYPARAM––>`" therefore becomes "Today is 12/31/21".

The `MYMETH` method is as follows:

```4d
  //MYMETH
 C_TEXT($0;$1) //Estes parâmetros devem ser sempre declarados
 $0:=String(Current date)
```

> A method called by `4DSCRIPT` must not call interface elements (`DIALOG`, `ALERT`, etc.).

As 4D executes methods in their order of appearance, it is absolutely possible to call a method that sets the value of many variables that are referenced further in the document, whichever mode you are using. You can insert as many `<!--#4DSCRIPT...-->` comments as you want in a template.

## 4DTEXT

#### Sintaxe: `<!--#4DTEXT expression-->`

#### Sintaxe alternativa: `$4DTEXT(expression)`

The tag `<!--#4DTEXT expression-->` allows you to insert a reference to a 4D variable or expression returning a value. Por exemplo, se escrever (numa página HTML):

```html
<P>Bem-vindo a <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable `vtSiteName` will be inserted in the HTML page when it is sent. This value is inserted as simple text, special HTML characters such as ">" are automatically escaped.

Também é possível inserir expressões 4D. You can for example directly insert the contents of a field (`<!--#4DTEXT [tableName]fieldName-->`), an array element (`<!--#4DTEXT tabarr{1}-->`) or a method returning a value (`<!--#4DTEXT mymethod-->`). A conversão de expressões segue as mesmas regras das variáveis. Além disso, a expressão deve respeitar as regras de sintaxe 4D.

> For security reasons, it is recommended to use this tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

In case of an evaluation error, the inserted text will appear as `<!--#4DTEXT myvar--> : ## error # error code`.

- É necessário utilizar variáveis processo.
- É possível mostrar o conteúdo de um campo imagem. No entanto, não é possível exibir o conteúdo de um item matriz de imagens.
- It is possible to display the contents of an object field by means of a 4D formula. For example, you can write `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
- Normalmente, trabalha-se com variáveis de tipo texto. No entanto, também é possível utilizar variáveis BLOB. You just need to generate BLOBs in `Text without length` mode.

## Sintaxe alternativa para 4DTEXT, 4DHTML, 4DEVAL

Several existing 4D transformation tags can be expressed using a $-based syntax:

#### $4dtag (expression)

pode ser utilizado em vez de

#### `<!--#4dtag expression-->`

Esta sintaxe alternativa está disponível apenas para as tags usadas para retornar valores processados:

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(Other tags, such as 4DIF or 4DSCRIPT, must be written with the regular syntax).

Por exemplo, pode escrever:

```html
$4DEVAL(UserName)
```

em vez de:

```html
<!--#4DEVAL(UserName)-->
```

The main advantage of this syntax is that it allows you to write XML-compliant templates. Some 4D developers need to create and validate XML-based templates using standard XML parser tools. Since the "<" character is invalid in an XML attribute value, it was not possible to use the "`<!-- -->`" syntax of 4D tags without breaking the document syntax. On the other hand, escaping the "<" character will prevent 4D from interpreting the tags correctly.

For example, the following code would cause an XML parsing error because of the first "<" character in the attribute value:

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

Utilizando a sintaxe $, o seguinte código é validado pelo analisador:

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

Note that `$4dtag` and `<--#4dtag -->` are not strictly equivalent: unlike `<--#4dtag -->`, `$4dtag` processing does not interpret 4D tags [recursively](#recursive-processing). `$` tags are always evaluated once and the result is considered as plain text.

A razão para esta diferença é evitar a injeção de código malicioso. As [explained below](#prevention-of-malicious-code-insertion), it is strongly recommended to use `4DTEXT` tags instead of `4DHTML` tags when handling user text to protect against unwanted reinterpretation of tags: with `4DTEXT`, special characters such as "<" are escaped, thus any 4D tags using the `<!--#4dtag expression -->` syntax will lose their particular meaning. However, since `4DTEXT` does not escape the `$` symbol, we decided to break support for recursion in order to prevent malicious injection using the `$4dtag (expression)` syntax.

The following examples show the result of processing depending on the syntax and tag used:

```4d
  // example 1
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //4D will quit!
```

```4d
  // example 2
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: <!--#4DHTML QUIT 4D-->"
```

```4d
  // example 3
 myName:="$4DEVAL(QUIT 4D)" //malicious injection
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: $4DEVAL(QUIT 4D)"
```

Note that the `$4dtag` syntax supports matching pairs of enclosed quotes or parenthesis. For example, suppose that you need to evaluate the following complex (unrealistic) string:

```
String(1) + "\"(hello)\""
```

Você pode escrever:

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 -->output is 1"(hello)"
```
