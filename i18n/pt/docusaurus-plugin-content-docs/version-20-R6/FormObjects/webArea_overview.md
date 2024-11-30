---
id: webAreaOverview
title: Área Web
---

As áreas da Web podem exibir vários tipos de conteúdo da Web em seus formulários: Páginas HTML com conteúdo estático ou dinâmico, arquivos, imagens, JavaScript, etc. O mecanismo de renderização da área da Web depende da plataforma de execução do aplicativo e da [opção de mecanismo de renderização] selecionada (properties_WebArea.md#use-embedded-web-rendering-engine).

É possível criar várias áreas web no mesmo formulário. No entanto, observe que o uso de áreas web deve seguir [várias regras](#web-area-rules).

Várias [ações padrão] dedicadas (#standard-actions), vários [comandos de idioma] (https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html), bem como [eventos de formulário] genéricos e específicos (#form-events) permitem que o desenvolvedor controle o funcionamento das áreas da Web. Variáveis específicas podem ser usadas para trocar informações entre a área e o ambiente 4D.

## Propriedades específicas

### Variáveis associadas

Duas variáveis específicas podem ser associadas a cada área web:

- [`URL`](properties_WebArea.md#url) -- para controlar a URL exibida pela área da Web
- [`Progression`](properties_WebArea.md#progression) -- para controlar a porcentagem de carregamento da página exibida na área da Web.

> A partir do 4D v19 R5, a variável Progression não é mais atualizada em Web Areas usando o [mecanismo de renderização do sistema Windows](./webArea_overview.md#web-rendering-engine).

### Motor de renderização Web

Você pode escolher entre [dois mecanismos de renderização] (properties_WebArea.md#use-embedded-web-rendering-engine) para a área da Web, dependendo das especificidades do seu aplicativo.

A seleção do mecanismo de renderização da Web incorporado permite chamar métodos 4D da área da Web e garantir que os recursos do macOS e do Windows sejam semelhantes. A seleção do mecanismo de renderização do sistema é recomendada quando a área da web está conectada à internet, porque ela sempre se beneficia das últimas atualizações de segurança.

### Acesso a métodos 4D

Quando a propriedade [Access 4D methods](properties_WebArea.md#access-4d-methods) estiver selecionada, você pode chamar métodos 4D de uma área web.

:::note Notas

- Essa propriedade só estará disponível se a área da Web [usar o mecanismo de renderização da Web incorporado] (properties_WebArea.md#use-embedded-web-rendering-engine).
- Por motivos de segurança, já que permite a execução de código 4D, essa opção só deve ser ativada para páginas confiáveis, como as páginas geradas pelo aplicativo.

:::

### Objecto $4d

O [4D embedded web rendering engine] (properties_WebArea.md#use-embedded-web-rendering-engine) fornece à área um objeto JavaScript chamado $4d que você pode associar a qualquer método de projeto 4D usando a notação de objeto ".".

Por exemplo, para chamar o método `HelloWorld` 4D, basta executar a seguinte instrução:

```js
$4d. HelloWorld();
```

> JavaScript é sensível a maiúsculas e minúsculas, portanto é importante notar que o objeto tem o nome $4d (com uma letra minúscula "d").

A sintaxe das chamadas aos métodos 4D é a seguinte:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: Você pode passar tantos parâmetros quanto precisa para o método 4D.
  Esses parâmetros podem ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, matriz, objeto).

- `function(result)`: Função a ser passada como último argumento. Esta função "callback" é chamada de forma síncrona quando o método 4D termina de ser executado. Ele recebe o parâmetro `result`.

- `result`: Resultado da execução do método 4D, retornado na expressão "$0". Esse resultado pode ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, matriz, objeto). Você pode usar o comando `C_OBJECT` para retornar os objetos.

> Por padrão, 4D trabalha em UTF-8. Quando você retornar texto contendo caracteres estendidos, por exemplo, caracteres com acentos, certifique-se de que a codificação da página exibida na área da Web seja declarada como UTF-8, caso contrário, os caracteres poderão ser renderizados incorretamente. Nesse caso, adicione a seguinte linha na página HTML para declarar a codificação:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemplo 1

Dado um método de projeto 4D chamado `today` que não recebe parâmetros e retorna a data atual como uma string.

Código 4D do método `today`:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

Na área web, o método 4D pode ser chamado com a sintaxe abaixo:

```js
$4d.today()
```

O método 4D não recebe nenhum parâmetro, mas retorna o valor $0 para a função de callback chamada por 4D após a execução do método. Queremos mostrar a data na página HTML que é carrega pela área Web.

Aqui está o código da página HTML:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Exemplo 2

O método `calcSum` do projeto 4D recebe parâmetros (`$1...$n`) e retorna sua soma em `$0`:

Código 4D do método `calcSum`:

```4d
 C_REAL(${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

O código JavaScript que roda na área web é:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // o resultado é 262.5
    });
```

## Ações padrão

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` and `Stop Loading URL`. Essas ações podem ser associadas com botões ou comandos de menu e permite implementação rápida de interfaces web básicas. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

## Eventos formulário

Os eventos formulários específicos estão destinados à gestão programadas das áreas web, mais concretamente à ativação de links:

- [`On Begin URL Loading`](Events/onBeginUrlLoading.md)
- [`On URL Resource Loading`](Events/onUrlResourceLoading.md)
- [`On End URL Loading`](Events/onEndUrlLoading.md)
- [`On URL Loading Error`](Events/onUrlLoadingError.md)
- [`On URL Filtering`](Events/onUrlFiltering.md)
- [`On Open External Link`](Events/onOpenExternalLink.md)
- [`On Window Opening Denied`](Events/onWindowOpeningDenied.md)

Além disso, áreas web são compatíveis com os eventos de formulário genéricos abaixo:

- [`On Load`](Events/onLoad.md)
- [`On Unload`](Events/onUnload.md)
- [`On Getting Focus`](Events/onGettingFocus.md)
- [`On Losing Focus`](Events/onLosingFocus.md)

## Regras das áreas web

### Interface do usuário

Quando o formulário for executado, as funções da interface de navegador padrão estão disponíveis para o usuário na área web, o que permite a interação com outras áreas do formulário:

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.
  Por razões de segurança, não é permitido mudar os conteúdos da área Web arrastando e soltando seja um arquivo ou URL. In this case, the cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE(*;"warea";WA enable URL drop;True)` statement to display a "drop" icon and generate the [`On Window Opening Denied`](Events/onWindowOpeningDenied.md) event. In this event, you can call the [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) command or set the [URL variable](properties_WebArea.md#url) in response to a user drop.

> Drag and drop features described above are not supported in web areas using the [macOS system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

### Subformulários

Por razões relacionadas com os mecanismos de redesenho de janelas, a inserção de uma área web em um subformulário está sujeita às restrições abaixo:

- O subformulário não deve poder deslocar-se
- Os limites da área Web não devem ultrapassar o tamanho do subformulário

> Não é compatível sobrepor uma área Web no topo ou debaixo dos outros objetos formulário.

### Conflito entre a área Web e o servidor Web (Windows)

Em Windows, não é recomendado acessar, através de uma área web, o servidor web da aplicação 4D que contenha a área, já que esta configuração poderia provocar um conflito que paralise a aplicação. Com certeza um 4D remoto pode acessar ao servidor web de 4D Server, mas não ao seu próprio servidor web.

### Inserção de protocolo (macOS)

As URLs manejadas por programação em áreas web em macOS devem começar com o  protocolo. Por exemplo, você precisa passar a cadeia de caracteres "http://www.mysite.com" e não apenas "www.mysite.com".

## Access to web inspector

Pode ver e usar um inspetor web dentro das áreas web de seus formulários. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages.

To display the Web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/>
  This command can be used directly with onscreen (form object) and offscreen web areas.

- **Use the web area context menu**<br/>
  This feature can only be used with onscreen web areas and requires that the following conditions are met:
  - the [context menu](properties_Entry.md#context-menu) for the web area is enabled
  - Deve habilitar expressamente ao uso do inspetor na área mediante a instrução abaixo:
  ```4d
  	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  
  ```

> With [Windows system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine), a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account.

For more information, refer to the description of the `WA SET PREFERENCE` command.

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Quando selecionar essa opção, a janela do inspetor Web é exibida.

> Para uma descrição detalhada nas funcionalidades do depurador, veja a documentação fornecida pelo motor de renderização web.

## Propriedades compatíveis

[Estilo de linha de bordo](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Menu de contexto](properties_Entry.md#context-menu) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nome do objeto](properties_Object.md#object-name) - [Progressão](properties_WebArea.md#progression) - [Dereita](properties_CoordinatesAndSizing.md#right) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Usar o mecanismo de renderização da Web](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Tamanho Vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications.

[Default switches](#default-file) are provided, but you can override them by using a custom 4DCEFParameters.json file.

In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project.

:::warning

Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including [4D View Pro areas](../ViewPro/configuring.md#form-area-properties). It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application.

:::

The 4DCEFParameters.json file format is as the following:

```json

{
  "switches":{
     "key":value
  },
  "macOS":{
    "switches": {
     "key":value
    }
  },
  "windows": {
    "switches": {
     "key":value
    }
  }
}
```

The 4DCEFParameters.json file structure contains:

- **switches**: a list of CEF switches and their corresponding values applied for both macOS and Windows.
- **macOS.switches**: macOS-specific CEF switches.
- **windows.switches**: Windows-specific CEF switches.

The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.

:::note

The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community.

:::

### Exemplos

#### Arquivo padrão

The default 4DCEFParameters.json file contains the following switches:

```json
{
  "switches":{
     "enable-media-stream":true,
     "enable-print-preview":true
  },
  "macOS":{
    "switches": {
      "use-mock-keychain": true
    }
  },
  "windows": {
    "switches": {
      "disable-features": "WinUseBrowserSpellChecker"
    }
  }
}

```

#### Exemplo de desativação do switch padrão

```json
{
  "switches": {
    "disable-javascript": true,
    "disable-web-security": true
  }
}
```

#### Exemplo para Autoplay

```json
{
  "switches":{
     "autoplay-policy": "no-user-gesture-required"
  }
}
```

### Veja também

[Especifique seus próprios parâmetros para inicializar a área Web incorporada (postagem no blog)](https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area)
