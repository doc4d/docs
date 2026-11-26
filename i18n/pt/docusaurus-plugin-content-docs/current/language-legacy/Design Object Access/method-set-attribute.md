---
id: method-set-attribute
title: METHOD SET ATTRIBUTE
slug: /commands/method-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTE.Syntax-->**METHOD SET ATTRIBUTE** ( *rota* : Text ; *tipoAtrib* : Integer ; *valorAtrib* : Boolean, Text {; ...(*tipoAtrib* : Integer ; *valorAtrib* : Boolean, Text)}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text | &#8594; | Rota do método projeto |
| tipoAtrib | Integer | &#8594; | Tipo de atributo |
| valorAtrib | Boolean, Text | &#8594; | True = selecionar atributo  False = desfazer a seleção do atributo |
| * | Operador | &#8594; | Se passado = o comando aplica ao banco de dados local quando é executado de um componente (parâmetro ignorado fora deste contexto) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R6|Attribute folder name move o arquivo do método nos projetos com pastas em disco|
|14|Modificado|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.METHOD SET ATTRIBUTE.Summary-->O comando **METHOD SET ATTRIBUTE** permite definir o valor do atributo tipoAtrib para o método projeto designado pelo parâmetro *rota*.<!-- END REF--> Este comando somente funciona com métodos projeto. Se passar uma rota não válida, um erro é gerado.

No parâmetro tipoAtrib, passe um valor que indique o tipo de atributo a definir. Pode usar as seguintes constantes do tema *Design Object Access*:  
  
| Constante                    | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Attribute executed on server | Inteiro longo | 8     | Corresponde a opção "Executar no servidor"                                                                                                                                                                                                                                                                                                                   |
| Attribute folder name        | Inteiro longo | 1024  | Nome da pasta para o método (atributo "pasta"). Quando passe esta constante, deve passar um nome de pasta em *attribValue*:<br/>Se o nome corresponde a uma pasta válida, o método se coloca nesta pasta pai,Se a pasta não existe, o comando não muda nada no nível da pasta pai,Se passar uma cadeia vazia, o método se localiza ao nível da raiz. |
| Attribute invisible          | Inteiro longo | 1     | Corresponde a opção "Invisível"                                                                                                                                                                                                                                                                                                                              |
| Attribute published SOAP     | Inteiro longo | 3     | Corresponde à opção "Oferecido como serviço web"                                                                                                                                                                                                                                                                                                             |
| Attribute published SQL      | Inteiro longo | 7     | Corresponde à opção "Disponível via SQL"                                                                                                                                                                                                                                                                                                                     |
| Attribute published Web      | Inteiro longo | 2     | Corresponde à opção "Disponível via as etiquetas HTML e os URLs 4D (4DACTION...)"                                                                                                                                                                                                                                                                            |
| Attribute published WSDL     | Inteiro longo | 4     | Corresponde à opção "Publicado em WSDL"                                                                                                                                                                                                                                                                                                                      |
| Attribute shared             | Inteiro longo | 5     | Corresponde à opção "Compartilhado entre componentes e base local"                                                                                                                                                                                                                                                                                           |

Pode passar no parâmetro *valorAtrib:*

* **True** para selecionar a opção correspondente e **False** para desselecionar ou,
* Uma cadeia (nome de pasta) se utilizou a constante Attribute folder name em *tipoAtrib*.

Pode passar múltiplos pares *tipoAtrib*;*valorAtrib* em uma só chamada.

Em um [projeto com pastas em disco](../../Project/architecture.md#disk-folder-projects), a constante Attribute folder name move o arquivo do método no disco, como um deslocamento na página Início do Explorador: para `Sources/<folder path>/Methods` para uma pasta, ou para `Sources/Methods` se passar uma cadeia vazia. Seu arquivo de documentação é movido com ele. Se a pasta não existir, o método não é movido e nenhuma pasta é criada. Se várias pastas tiverem o mesmo nome, a primeira na ordem dos caminhos é usada.

Pode executar este comando desde um componente, ams neste caso deverá passar o parâmetro *\** porque o acesso ao código do componente é somente leitura. Se omitir o parâmetro *\** neste contexto, o erro -9763 é gerado.

### 

Este comando não pode ser executado em modo compilado. Quando é chamado neste modo, irá gerar o erro -9762\. 

## Exemplo 1 

Seleção da propriedade "Compartilhado entre componentes e o banco local" para o método projeto "Seleção diálogo":

```4d
 METHOD SET ATTRIBUTE("Seleção diálogo";Attribute shared;True)
```

## Exemplo 2 

Definição de vários pares de atributos/valores:

```4d
 METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)
```

## Exemplo 3

Em um [projeto com pastas em disco](../../Project/architecture.md#disk-folder-projects), se quiser mover o método `createInvoice` para a pasta `Archive`, e depois de volta para o nível superior (Top Level):

```4d
METHOD SET ATTRIBUTE("createInvoice"; Attribute folder name; "Archive")
// o arquivo agora é Sources/Invoices/Archive/Methods/createInvoice.4dm
METHOD SET ATTRIBUTE("createInvoice"; Attribute folder name; "")
// o arquivo agora é Sources/Methods/createInvoice.4dm
```

## Ver também 

*Design Object Access*  
[METHOD Get attribute](../commands/method-get-attribute)  
[METHOD SET ATTRIBUTES](../commands/method-set-attributes)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1192 |
| Thread-seguro | no |


