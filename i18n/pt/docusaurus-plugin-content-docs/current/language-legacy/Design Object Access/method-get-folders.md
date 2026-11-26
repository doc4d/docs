---
id: method-get-folders
title: METHOD GET FOLDERS
slug: /commands/method-get-folders
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET FOLDERS.Syntax-->**METHOD GET FOLDERS** ( *arrayNoms* : Text array {; *filtro* : Text}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET FOLDERS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayNoms | Text array | &#8592; | Array de nomes de pastas da página de início |
| filtro | Text | &#8594; | Filtro de nomes |
| * | Operador | &#8594; | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R6|Suporte dos projetos com pastas em disco|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.METHOD GET FOLDERS.Summary-->O comando **METHOD GET FOLDERS** devolve no array *arrayNoms*, os nomes das pastas criadas na página Início do Explorador de 4D<!-- END REF-->:  
![](../../assets/en/commands/pict837666.en.png)  
  
Como os nomes das pastas devem ser únicos, a hierarquia não é devolvida neste array.   
  
Pode limitar a lista de pastas passando uma cadeia de comparação no parâmetro *filtro*, neste caso, somente são devolvidas as pastas cujos nomes coincidam com o filtro. Pode utilizar o caracter @ para definir os filtros de tipo "começa por", "termina em" o "contém". Se passado uma cadeia vazia, o parâmetro *filtro* se ignora.   
  
Se executado este comando desde um componente, devolve por defeito os caminhos dos métodos do componente. Se passado o parâmetro *\**, o array conterá os caminhos dos métodos da base local.

Em um [projeto com pastas em disco](../../Project/architecture.md#disk-folder-projects), o comando devolve os nomes das pastas encontradas no disco em `Project/Sources`, incluindo as pastas vazias, e as pastas nomeadas no arquivo `tableFolders.json`. As pastas de tipo (`Methods`, `Classes`, `Forms`, `WebForms`) e as pastas fixas (`DatabaseMethods`, `TableForms`, `Triggers`, `Shared`) não são devolvidas. O arquivo `folders.json` é ignorado.

## Exemplo

Em um projeto com pastas em disco com as pastas `Sources/Invoices` e `Sources/Invoices/Archive`, se quiser obter os nomes das pastas da página Início:

```4d
ARRAY TEXT($folders; 0)
METHOD GET FOLDERS($folders)
// $folders contém "Invoices" e "Archive"
```

## Ver também 

[METHOD GET PATHS](../commands/method-get-paths)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1206 |
| Thread-seguro | no |


