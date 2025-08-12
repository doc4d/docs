---
id: storing-4d-write-pro-documents-in-4d-object-fields
title: Armazenar os documentos 4D Write Pro nos campos objeto 4D
displayed_sidebar: docs
---

#### 

Pode armazenar seus documentos 4D Write Pro automaticamente no arquivo de dados 4D. Se criar uma área 4D Write Pro em um formulário e criar um campo Objeto para armazenar os conteúdos da área, qualquer texto digitado na área é salvado automaticamente com cada registro quando o registro for validado. Pode então usar o comando [QUERY BY ATTRIBUTE](../../commands/query-by-attribute) para selecionar registros baseados no valor dos atributos internos. Pode também adicioanr e pesquisar seus próprios atributos com áreas 4D Write Pro. 

Esta seção descreve as seguintes propriedades:

* Ligar o campo 4D Object à área 4D Write Pro em um formulário
* Configurar, obter e pesquisar atributos personalizados dos documentos 4D Write Pro armazenados usando os comandos de objeto padrão [OB SET](../../commands/ob-set), [OB Get](../../commands/ob-get), e [QUERY BY ATTRIBUTE](../../commands/query-by-attribute).

#### Atribuindo um campo 4D Object para uma área 4D Write Pro 

Para ligar uma área 4D Write Pro com um campo 4D Object, só precisa referenciar o campo na propriedade Variable Name da área. 

##### Criar o campo Objeto na Estrutura 

Em sua estrutura de banco de dados, qualquer campo de Objeto 4D Object pode ser usado para armazenar documentos 4D Write Pro. Assim como qualquer campo Object, tem que definir, dependendo de suas necessidades:

* o nome do campo,
* os atributos, tais como "Expose with 4D Mobile Service," assim como o índice,
* a opção de armazenamento (ver )

![](../../assets/en/WritePro/pict2584929.en.png)

Estes parâmetros são padrão para campos Objeto.

##### Atribuindo a área 4D Write Pro para o campo 

Quando tiver definido um campo Objeto para armazenar seu documento 4D Write Pro, só precisa referenciar ele no formulário contendo a área. Pode usar qualquer tabela ou um formulário projeto.   
No editor Formulário, entre o nome do campo usando a notação padrão "\[Table\]Field" na área **Variable Name** da lista de Propriedade para a área 4D Write Pro:

![](../../assets/en/WritePro/pict2584938.en.png)

Sua área 4D Write Pro é então associada com o campo, assegurando que seus conteudos serão salvados automaticamente com cada registro. Note que se não usar os botões automáticos 4D, terá que salvar a área manualmente usando os comandos 4D. 

#### Usar atributos personalizáveis 

Quando as áreas 4D Write Pro forem armazenadas nos campos Objeto, pode salvar e ler qualquer atributo personalizado com o documento 4D Write Pro, tais como o nome do escritor, a categoria do documento ou qualquer informação adicional que achar útil. Pode então pesquisar qualquer atributo personalizável para selecionar registros que se enquadrem nos critérios.

* Atributos personalizados não serão exportados com os comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) ou [WP EXPORT VARIABLE](../commands/wp-export-variable). Eles tambèm seráo quando converter um campo de objeto 4D Write Pro para JSON com o comando [JSON Stringify](../../commands/json-stringify) (junto com os principais atributos de documento 4D Write Pro).

Para estabelecer ou conseguir atributos personalizados, precisa usar os comandos padrão [OB Get](../../commands/ob-get) e [OB SET](../../commands/ob-set).

Por exemplo, no método de formulário pode escrever:  

```4d
 If(Form event code=On Validate)
    [MyDocuments]My4DWP["myatt_Last edition by"]:=Current user
    [MyDocuments]My4DWP.myatt_Category:="Memo"
    [MyDocuments]My4DWP:=[MyDocuments]My4DWP //to record the edit
 End if
```

ou:  
  
```4d
 If(Form event code=On Validate)
    OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)
    OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")
 End if
```

Também pode ler atributos personalizados de documentos:

```4d
 vAttrib:=[MyDocuments]My4DWP.myatt_Category
```
  
  
ou:  
  
```4d
 vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Category")
```

Se tiver salvo atributos personalizados 4D Write Pro em seu arquivo de dados, pode pesquisar estes atributos para criar uma seleção de registros contendo o valor apropriado do atributo. No exemplo abaixo, pode pesquisar a tabela contendo o campo Objeto para selecionar registros:

```4d
 QUERY BY ATTRIBUTE([MyDocuments];[MyDocuments]My4DWP;"myatt_Category";=;"Memo")
  //seleciona todos os registros em MyDocuments cujo atributo personalizável "myatt_Category" tenha o valor "Memo"
  //no campo de objeto My4DWP  (ligado à área 4D Write Pro)
```

**Nota sobre nomes de atributos personalizados:** Já que atributos personalizados têm o mesmo espaço de nomeação que atributos internos 4D Write Pro, recomenda-se que se use prefixo quando definir seus próprios nomes de atributo, para evitar conflitos entre atributos internos e personalizados. Nomes não prefixados são reservados para os atributos internos 4D Write Pro. Pode usar qualque prefixo personalizável (no exemplo acima foi usado "myatt\_" como prefixo).

**Nota:** a partir de 4D v15 R4, os atributos internos de 4D Write Pro também são acessíveis por programação utilizando os comandos padrão [OB Get](../../commands/ob-get) e [OB SET](../../commands/ob-set), mas também utilizando [WP SET ATTRIBUTES](../commands/wp-set-attributes), [WP GET ATTRIBUTES](../commands/wp-get-attributes) e [WP RESET ATTRIBUTES](../commands/wp-reset-attributes). Para saber mais, consulte *Atributos 4D Write Pro*.  
  