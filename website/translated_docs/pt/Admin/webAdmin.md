---
id: webAdmin
title: Web Administration
---


Um componente de servidor web integrado, chamado `WebAdmin`, é utilizado por 4D e 4D Server para dar um acesso web seguro a funções de gestão específicas como [Explorador de dados](dataExplorer.md). Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplicação web e acessar a aplicação 4D associada.

O webAdmin maneja a autenticação de usuários com privilégios "WebAdmin" de forma que possa abrir sessões administrativas e acessar interfaces dedicadas.

Essa funcionalidade pode ser usada em aplicações 4D rodando headless (sem monitor e periféricos) assim como aplicações 4D rodando sem interfaces.


## Iniciar o web server WebAdmin

Como padrão, o servidor web `WebAdmin` não é lançado. Precisa configurar o lançamento ao início ou (em versões com interface) lançar manualmente usando um item de menu.


### Lançar ao início

Pode configurar o servidor web `WebAdmin` para que se lance ao início da aplicação 4D ou 4D Server (antes de que se carregue qualquer projeto).

- Se utilizar uma aplicação 4D con interface, selecione a opção de menu **Arquivo > Administração web > Propriedades...**.

![alt-text](assets/en/Admin/waMenu1.png)

Selecione a opção **Inicio automático da administração do servidor web** na caixa de diálogo de configuração:

![alt-text](assets/en/Admin/waSettings.png)

- Se usar uma aplicação 4D que tenha ou não interface, pode habilitar o modo de inicio automático utilizando o argumento abaixo *Interface de linha de comandos*:


```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> Se a porta TCP usada pelo  `WebAdmin` servidor web ([HTTPS](#https-port) ou [HTTP](#http-port), dependendo das configurações) não estiver disponível ao início, 4D vai tentar repetidademente os 20 portos a seguintes, e usar o primeiro que estiver disponível. Se nenhum porto estiver disponível, o servidor web não é lançado e um erro é exibido (ou em aplicação headless, aparece no console)


### Iniciar e parar

Se utilizar uma aplicação 4D com interface, pode iniciar ou parar o servidor web `WebAdmin` de seu projeto a qualquer momento:

Selecione a opção de menu **Arquivo > Administração web > Iniciar o servidor**.

![alt-text](assets/en/Admin/waMenu2.png)

O item de menu vira **Stop Server** quando o servidor for lançado; selecione **Parar o servidor** para parar o `WebAdmin` servidor web.



## Propriedades WebAdmin

A configuração do componente `WebAdmin` é obrigatória, em particular para definir a[** chave de acesso**](#access-key). Como padrão, quando a chave de acesso não for estabelecida, o acesso via uma url não é permitido.

Pode configurar o componente `WebAdmin` usando [Web Administration a caixa de diálogo de configurações](#settings-dialog-box) (ver abaixo).

> Se usar uma aplicação 4D headless pode usar os argumentos da[*Interface de Linha de comando* ](#webadmin-headless-configuration) para definir as configurações básicas. Se quiser personalizar o arquivo de configurações para definir os parâmetros avançados.


### Caixa de diálogos de configurações

Para abrir a caixa de diálogo de configurações de administração web, selecione o item de menu **File > Web Administration > Configurações...**.

![alt-text](assets/en/Admin/waMenu1.png)

A caixa de diálogo abaixo é mostrada:

![alt-text](assets/en/Admin/waSettings2.png)

#### Inicio automático da administração de servidor web

Marque esta opção para lançar o servidor web `WebAdmin` automaticamente quando iniciar a aplicação 4D ou 4D Server (ver ([acima](#launching-at-startup)). Como padrão essa opção não é marcada.

#### Conexões HTTP em localhost aceitas

Quando esta opção for marcada, pode conectar ao servidor web `WebAdmin` através de HTTP na mesma máquina que a aplicação 4D. Como padrão, essa opção é marcada.

**Notas:**
- Conexões com HTTP outras que localhost nunca são aceitas.
- Mesmo se esta opção for marcada, quando [Accept HTTPS](#accept-https) for marcado e a configuração  TLS for válida, as conexões localhost vão usar HTTPS.


#### HTTP Port

Port number to use for connections through HTTP to the `WebAdmin` web server when the **Accept HTTP connections on localhost** option is checked. Default value is 7080.


#### Accept HTTPS

When this option is checked, you will be able to connect to the `WebAdmin` web server through HTTPS. By default, this option is checked.

#### HTTPS Port

Port number to use for connections through HTTPS to the `WebAdmin` web server when the **Accept HTTPS** option is checked. Default value is 7443.


#### Certificate folder path

Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder).

#### Debug log mode

Status or format of the HTTP request log file (HTTPDebugLog_*nn*.txt, stored in the "Logs" folder of the application -- *nn* is the file number). The following options are available:

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### Access Key

Defining an access key is mandatory to unlock access to the `WebAdmin` web server through an URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through an URL to a web administration interface like the [Data Explorer page](dataExplorer.md). An error page is returned in case of connection request:

![alt-text](assets/en/Admin/accessKey.png)

An access key is similar to a password but not associated to a login.

- To define a new access key: click the **Define** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.


## WebAdmin Headless Configuration

All [WebAdmin settings](#webadmin-settings) are stored in the `WebAdmin.4DSettings` file. There is one default `WebAdmin.4DSettings` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `WebAdmin.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `WebAdmin.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the [Command line interface](cli.md) to support this feature.

> The access key is not stored in clear in the `.4DSettings` file.

Exemplo:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
    "my Fabulous AccessKey" --webadmin-auto-start true   
    --webadmin-store-settings

```


## Authentication and Session

- When a web management page is accessed by entering an URL and without prior identification, an authentication is required. The user must enter the [access key](#access-key) in an authentication dialog box. If the access key was not defined in the `WebAdmin` settings, no access via URL is possible.

- When a web management page is accessed directly from a 4D or 4D Server menu item (such as **Records > Data Explorer** or **Window > Data Explorer** (4D Server)), access is granted without authentication, the user is automatically authenticated.

Once the access is granted, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `WebAdmin` component delivers requested pages.


