---
id: data-collect
title: Sobre a coleção de dados
---

Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estatísticas de usuário nas aplicações 4D Server Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário.

Esta página explica:

- que informação é coletada
- onde a informação é armazenada e quando é enviada a 4D
- como desativar a coleção de dados automática em aplicações cliente/servidor


## Informação coletada

Dados são coletados durante os eventos abaixo:

- 4D Server startup,
- abertura de banco de dados,
- fechamento de banco de dados,
- início do 4D Servidor.

### Dados coletados no início do 4D Server

| Dados         | Exemplo                                                                                              | Notas                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| CPU           | Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz                                                       | Nome, tipo, e velocidade do processador                             |
| numberOfCores | 4                                                                                                    | Número total de núcleos                                             |
| memory        | 419430400                                                                                            | Volume de armazenamento de memória (em bytes) disponível na máquina |
| system        | Microsoft Windows 10 Pro 1809 (17763.253)                                                            | Versão do sistema operativo e número de construção                  |
| headless      | false                                                                                                | Verdadeiro se a aplicação estiver a correr em modo sem cabeça       |
| version       | 1960                                                                                                 | Número da versão da aplicação 4D                                    |
| buildNumber   | 123456                                                                                               | Número da versão da aplicação 4D                                    |
| licença       | {"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]} | Nome comercial e descrição das licenças do produto                  |


### Recolhido por base de dados na abertura

| Dados                   | Exemplo                                                 | Notas                                                                                             |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| id                      | string hashed                                           | Identificação única associada à base de dados (*Polinômio Rolling hash do nome da base de dados*) |
| dataFileSize            | 419430400                                               | Tamanho do arquivo de dados em bytes                                                              |
| indexesSize             | 419430400                                               | Index size in bytes                                                                               |
| cacheSize               | 419430400                                               | Cache size in bytes                                                                               |
| usingLegacyNetworkLayer | fasle                                                   | True if legacy network layer used for the application server                                      |
| isEncrypted             | true                                                    | True se o arquivo de dados estiver criptografado                                                  |
| isCompiled              | true                                                    | True if the application is compiled                                                               |
| isEngined               | true                                                    | True if the application is merged with 4D Volume Desktop                                          |
| isProjectMode           | true                                                    | True if the application is a project                                                              |
| mobile                  | [{"os":"iOS", "version":"12.465", "simulator":"false"}] | Information on mobile sessions                                                                    |


### Collected per database at closure

| Dados                  | Exemplo | Notas                                                        |
| ---------------------- | ------- | ------------------------------------------------------------ |
| tempo de funcionamento | 123456  | Time elapsed (in seconds) since local 4D database was opened |


### Collected per database at web server startup

| Dados     | Exemplo          | Notas       |
| --------- | ---------------- | ----------- |
| webServer | {"started":true} | Always true |



## When is it stored and sent?

Collected data is written in a text file (JSON format) when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv19/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to 4D. The file is then deleted from the active 4D folder.

![](../assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side.


## Disabling data collection in client/server built applications

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.