---
id: DataStoreClass
title: DataStore
---

Um [Datastore](ORDA/dsMapping.md#datastore) é o objeto de interface fornecido pelo ORDA para fazer referência e acessar um banco de dados. Os objetos `Datastore` são retornados pelos seguintes comandos:

- [ds](../commands/ds): um atalho para o datastore principal
- [Open datastore](../commands/open-datastore): para abrir qualquer datastore remoto

### Resumo

|                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<br/><!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<br/><!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<br/><!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushandlock)<br/><!-- INCLUDE #DataStoreClass.flushAndLock().Summary -->                                  |
| [<!-- INCLUDE #DataStoreClass.generateFineGrainedToken().Syntax -->](#generatefinegrainedtoken)<br/><!-- INCLUDE #DataStoreClass.generateFineGrainedToken().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)<br/><!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<br/><!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.listFineGrainedTokens().Syntax -->](#listfinegrainedtokens)<br/><!-- INCLUDE #DataStoreClass.listFineGrainedTokens().Summary -->       |
| [<!-- INCLUDE #DataStoreClass.listOAuthGrants().Syntax -->](#listoauthgrants)<br/><!-- INCLUDE #DataStoreClass.listOAuthGrants().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)<br/><!-- INCLUDE #DataStoreClass.locked().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<br/><!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<br/><!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.revokeFineGrainedToken().Syntax -->](#revokefinegrainedtoken)<br/><!-- INCLUDE #DataStoreClass.revokeFineGrainedToken().Summary -->    |
| [<!-- INCLUDE #DataStoreClass.revokeOAuthGrant().Syntax -->](#revokeoauthgrant)<br/><!-- INCLUDE #DataStoreClass.revokeOAuthGrant().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<br/><!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)<br/><!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<br/><!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<br/><!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<br/><!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #DataStoreClass.unlock().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<br/><!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

## *.dataclassName*

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Descrição

Each dataclass in a datastore is available as a property of the [DataStore object](ORDA/dsMapping.md#datastore) data. O objeto retornado <!-- REF DataStoreClass.dataclassName.Summary -->contém uma descrição da dataclass<!-- END REF -->.

#### Exemplo

```4d
 var $emp : cs. Employee
 var $sel : cs. EmployeeSelection
 $emp:=ds. Employee //$emp contains the Employee dataclass
 $sel:=$emp.all() //gets an entity selection of all employees

  //you could also write directly:
 $sel:=ds. Employee.all()
```

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->

<div class="no-index">

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

</div>
<!-- END REF -->

#### Descrição

A função `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancela a transação<!-- END REF --> aberta pela função [`.startTransaction()`](#starttransaction) no nível correspondente no processo atual para o armazenamento de dados especificado.

A função `.cancelTransaction()` cancela todas as alterações feitas nos dados durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas as suas subtransações também serão canceladas, mesmo que tenham sido validadas individualmente usando a função [`.validateTransaction()`](#validatetransaction).

#### Exemplo

Veja o exemplo da função [`.startTransaction()`](#starttransaction).

<!-- END REF -->

## .clearAllRemoteContexts()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->

<div class="no-index">

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

</div>
<!-- END REF -->

#### Descrição

A função `.clearAllRemoteContexts()` <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->limpa todos os atributos de todos os contextos ativos no repositório de dados<!-- END REF -->.

Esta função é utilizada principalmente no contexto da depuração. Deve lembrar que quando abrir o depurador ele envia petições ao servidor e pesquisa todos os atributos de dataclasse para exibi-los Isso pode sobrecarregar seus contextos com dados desnecessários. Isso pode sobrecarregar seus contextos com dados desnecessários.

Nesses casos, você pode usar `.clearAllRemoteContexts()` para limpar seus contextos e mantê-los limpos.

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->

## .encryptionStatus()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.encryptionStatus().Params -->

<div class="no-index">

| Parâmetro  | Tipo   |                             | Descrição                                                             |
| ---------- | ------ | :-------------------------: | --------------------------------------------------------------------- |
| Resultados | Object | <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela |

</div>
<!-- END REF -->

#### Descrição

A função `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->retorna um objeto que fornece o status de criptografia para o arquivo de dados atual<!-- END REF --> (ou seja, o arquivo de dados do armazenamento de dados `ds`). Também se proporciona o estado de cada tabela.

> Use o comando `Data file encryption status` para determinar o status da criptografia de qualquer outro arquivo de dados.

**Valor retornado**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Tipo       | Descrição                                                                                                                           |
| ----------- | ----------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Parâmetros | True se o arquivo de dados estiver criptografado                                                                                    |
| keyProvided |             |               | Parâmetros | True se proporcionar a chave de encriptação que coincide com o arquivo de dados encriptados(\*). |
| tabelas     |             |               | Object     | Objeto que contém tantas propriedades como tabelas encriptadas ou codificadas.                                      |
|             | *tableName* |               | Object     | Tabla encriptada ou cifrada                                                                                                         |
|             |             | name          | Text       | Nombre da tabela                                                                                                                    |
|             |             | num           | Number     | Número de tabela                                                                                                                    |
|             |             | isEncryptable | Parâmetros | Verdadero se a tabela estiver declarada como encriptada no arquivo de estrutura                                                     |
|             |             | isEncrypted   | Parâmetros | True se os registros da tabela estiverem encriptados no arquivo de dados                                                            |

(\*) a chave de criptografia pode ser fornecida:

- com o comando `.provideDataKey()`,
- na raíz de um dispositivo conectado antes de abrir o datastore,
- com o comando `Discover data key`.

#### Exemplo

Se quiser saber o número de tabelas criptografadas no arquivo de dados atual:

```4d
 var $status : Object

 $status:=ds.encryptionStatus()

 If($status.isEncrypted) //o banco é criptografado    
C_LONGINT($vcount)
    C_TEXT($tabName)
    For each($tabName;$status.tables)
       If($status.tables[$tabName].isEncrypted)
          $vcount:=$vcount+1
       End if
    End for each
    ALERT(String($vcount)+" encrypted table(s) in this datastore.")
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->

## .flushAndLock()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->

<!-- REF #DataStoreClass.flushAndLock().Params -->

<div class="no-index">

| Parâmetro | Tipo |   | Descrição                  |
| --------- | ---- | - | -------------------------- |
|           |      |   | Não exige nenhum parâmetro |

</div>
<!-- END REF -->

#### Descrição

A função `.flushAndLock()` <!-- REF #DataStoreClass.flushAndLock().Summary -->libera o cache do armazenamento de dados local e impede que outros processos executem operações de gravação no banco de dados<!-- END REF -->. O datastore é definido para um estado consistente e congelado. É necessário chamar esta função antes de executar um instantâneo da aplicação, por exemplo.

:::info

Esta função só pode ser chamada:

- no datastore local ([`ds`](../commands/ds)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

Depois que essa função é executada, as operações de gravação, como `.save()` ou outras chamadas `.flushAndLock()`, são congeladas em todos os outros processos até que o armazenamento de dados seja desbloqueado.

Quando múltiplas chamadas para `.flushAndLock()` foram feitas no mesmo processo, o mesmo número de [`.unlock()`](#unlock) chamadas devem ser executadas para realmente desbloquear o datastore.

O datastore é desbloqueado quando:

- a função [`.unlock()`](#unlock) é chamada no mesmo processo, ou
- o processo que chamou a função `.flushAndLock()` é morto.

Se o repositório de dados já estiver bloqueado por outro processo, a chamada `.flushAndLock()` será congelada e executada quando o repositório de dados for desbloqueado.

Um erro é acionado se a função `.flushAndLock()` não puder ser executada (por exemplo, é executada num 4D remoto), .

:::caution

Outros recursos e serviços 4D, incluindo [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html) e [MSC](../MSC/overview.md) também pode bloquear o datastore. Antes de chamar `.flushAndLock()`, certifique-se de que nenhuma outra ação de bloqueio está sendo usada, a fim de evitar qualquer interação inesperada.

:::

#### Exemplo

Se quiser criar uma cópia da pasta de dados juntamente com o seu arquivo de diário actual:

```4d
$destination:=Folder(fk documents folder).folder("Archive") 
$destination.create()

ds.flushAndLock() //Bloqueia operações write de outros processos

$dataFolder:=Folder(fk data folder) 
$dataFolder.copyTo($destination) //Copia a pasta de dados

$oldJournalPath:=New log file //Fecha o diário e cria um novo
$oldJournal:=File($oldJournalPath; fk platform path) 
$oldJournal.moveTo($destination) //Salva o diário antigo com dados

ds.unlock() //Nossa cópia terminou, podemos desbloquear a datastore
```

#### Veja também

[.locked()](#locked)<br/>[.unlock()](#unlock)

<!-- REF DataStoreClass.generateFineGrainedToken().Desc -->
## .generateFineGrainedToken()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 21 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.generateFineGrainedToken().Syntax -->**.generateFineGrainedToken**( *privilege* : Text ; *name* : Text ; *expiry* : Date {; *info* : Object} ) : Object<br/>**.generateFineGrainedToken**( *privileges* : Collection ; *name* : Text ; *expiry* : Date {; *info* : Object} ) : Object<br/>**.generateFineGrainedToken**( *settings* : Object ; *name* : Text ; *expiry* : Date {; *info* : Object} ) : Object<!-- END REF -->


<!-- REF #DataStoreClass.generateFineGrainedToken().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|privilege|Text|&#8594;|Nome do privilégio, ou nomes de privilégios separados por vírgula|
|privileges|Collection|&#8594;|Coleção de nomes de privilégios|
|settings|Object|&#8594;|Objeto com uma propriedade "privileges" e/ou "roles"|
|name|Text|&#8594;|Nome do token|
|expiry|Date|&#8594;|Data de expiração do token|
|info|Object|&#8594;|Informação armazenada com o token e passada para `ds.mcpAuthenticated()`|
|Result|Object|&#8592;|`{id; token}`|
</div>
<!-- END REF -->

#### Descrição

A função `.generateFineGrainedToken()` <!-- REF #DataStoreClass.generateFineGrainedToken().Summary -->gera um Fine-Grained Token que dá acesso ao servidor MCP com os privilégios que você passar<!-- END REF -->. Para mais informações, veja [Fine-Grained Tokens](../WebServer/mcp-server.md#fine-grained-tokens).

Você passa os privilégios e/ou roles do token nas mesmas formas que para [`Session.setPrivileges()`](SessionClass.md#setprivileges):

- No parâmetro *privilege*, passe uma string contendo um nome de privilégio (ou vários nomes de privilégios separados por vírgula).
- No parâmetro *privileges*, passe uma coleção de strings contendo nomes de privilégios.
- No parâmetro *settings*, passe um objeto com uma propriedade `privileges` e/ou `roles` (string ou coleção de strings).

Diferente de `Session.setPrivileges()`, um nome que não está declarado no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) gera um erro.

Em *name*, passe um nome que identifica o token, por exemplo o usuário e o cliente que irá utilizá-lo. É o nome de usuário das sessões MCP abertas com o token.

Em *expiry*, passe a data de expiração do token. É obrigatório, e deve ser posterior à data atual e no máximo 366 dias à frente.

Em *info*, você pode passar um objeto que o 4D armazena com o token como está, e passa para a função [`ds.mcpAuthenticated()`](../ORDA/ordaClasses.md#function-mcpauthenticated) quando uma sessão MCP é aberta com o token. Como não pode ser modificado depois, armazene identificadores estáveis (como um ID de usuário) e leia os valores atuais em `ds.mcpAuthenticated()`. Construa *info* a partir da sessão autenticada, nunca de valores enviados pelo cliente.

A função só pode ser chamada em contexto web, ou seja, a partir de código executado para uma requisição web ou REST (por exemplo, uma função exposta chamada após o usuário ser autenticado). Cada privilégio do token deve ser detido pela sessão atual ([`Session.getPrivileges()`](SessionClass.md#getprivileges), incluindo roles, excluindo privilégios promovidos). Caso contrário, um erro é gerado.

Se um erro for gerado, nenhum token é criado.

**Objeto retornado**

|Propriedade|Tipo|Descrição|
|---|---|---|
|id|Text|Identificador do token. Não é secreto: use para [revogar](#revokefinegrainedtoken) o token|
|token|Text|O token, começando com "4dfgt_". É retornado apenas uma vez: o 4D armazena apenas seu hash, no arquivo `fgt.json` da pasta de dados|

#### Exemplo

Em uma função exposta da classe DataStore, chamada por um usuário autenticado, você gera um token válido por 3 meses:

```4d
exposed Function getMCPToken() : Text
	var $expiry:=Add to date(Current date; 0; 3; 0)
	var $result:=ds.generateFineGrainedToken({roles: "salesperson"}; "Claude Desktop - "+Session.userName; $expiry; {userName: Session.userName})
	return $result.token // "4dfgt_..."
```

#### Veja também

[.listFineGrainedTokens()](#listfinegrainedtokens)<br/>[.revokeFineGrainedToken()](#revokefinegrainedtoken)

<!-- END REF -->

<!-- REF DataStoreClass.listFineGrainedTokens().Desc -->
## .listFineGrainedTokens()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 21 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.listFineGrainedTokens().Syntax -->**.listFineGrainedTokens**() : Collection<!-- END REF -->


<!-- REF #DataStoreClass.listFineGrainedTokens().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|Result|Collection|&#8592;|Coleção de objetos de descrição de token|
</div>
<!-- END REF -->

#### Descrição

A função `.listFineGrainedTokens()` <!-- REF #DataStoreClass.listFineGrainedTokens().Summary -->retorna a descrição dos Fine-Grained Tokens gerados para o servidor MCP<!-- END REF --> (veja [`.generateFineGrainedToken()`](#generatefinegrainedtoken)).

Quando a função é chamada em contexto web (código executado para uma requisição web ou REST), a coleção contém apenas os tokens cujos privilégios são todos detidos pela sessão atual. Em outros lugares (por exemplo, em um método ou procedimento armazenado), contém todos os tokens.

Cada objeto da coleção retornada contém as seguintes propriedades. O token em si e seu hash nunca são retornados.

|Propriedade|Tipo|Descrição|
|---|---|---|
|id|Text|Identificador do token|
|name|Text|Nome do token|
|privileges|Text, Collection ou Object|Privilégios e roles do token, conforme passado na geração|
|expiry|Text|Data de expiração do token|
|info|Object|Informação armazenada com o token|
|createdAt|Text|Data e hora da geração do token|

#### Exemplo

Você revoga todos os tokens gerados para um usuário:

```4d
var $tokens:=ds.listFineGrainedTokens().query("info.userName = :1"; "jsmith")
var $token : Object
For each ($token; $tokens)
	ds.revokeFineGrainedToken($token.id)
End for each
```

<!-- END REF -->

<!-- REF DataStoreClass.revokeFineGrainedToken().Desc -->
## .revokeFineGrainedToken()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 21 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.revokeFineGrainedToken().Syntax -->**.revokeFineGrainedToken**( *id* : Text )<br/>**.revokeFineGrainedToken**( *tokenObj* : Object )<!-- END REF -->


<!-- REF #DataStoreClass.revokeFineGrainedToken().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|id|Text|&#8594;|Identificador do token a revogar|
|tokenObj|Object|&#8594;|Objeto com uma propriedade `token` contendo o token a revogar|
</div>
<!-- END REF -->

#### Descrição

A função `.revokeFineGrainedToken()` <!-- REF #DataStoreClass.revokeFineGrainedToken().Summary -->revoga um Fine-Grained Token do servidor MCP<!-- END REF -->.

Você designa o token:

- no parâmetro *id*, com seu identificador (retornado por [`.generateFineGrainedToken()`](#generatefinegrainedtoken) e [`.listFineGrainedTokens()`](#listfinegrainedtokens)),
- ou no parâmetro *tokenObj*, com um objeto cuja propriedade `token` contém o próprio token (`"4dfgt_..."`), por exemplo para permitir que o detentor de um token o revogue.

O token para de funcionar na próxima requisição, e as sessões MCP abertas com ele são fechadas. [URLs binários](../WebServer/mcp-server.md#binary-attributes) já retornados ao cliente permanecem válidos até expirarem (no máximo 10 minutos).

Quando a função é chamada em contexto web (código executado para uma requisição web ou REST), só pode revogar um token cujos privilégios são todos detidos pela sessão atual.

#### Exemplo

Você revoga um token pelo seu id:

```4d
var $tokens:=ds.listFineGrainedTokens().query("name = :1"; "Claude Desktop - jsmith")
If ($tokens.length>0)
	ds.revokeFineGrainedToken($tokens[0].id)
End if
```

#### Veja também

[.generateFineGrainedToken()](#generatefinegrainedtoken)<br/>[.listFineGrainedTokens()](#listfinegrainedtokens)

<!-- END REF -->

<!-- REF DataStoreClass.listOAuthGrants().Desc -->
## .listOAuthGrants()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 21 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.listOAuthGrants().Syntax -->**.listOAuthGrants**() : Collection<!-- END REF -->


<!-- REF #DataStoreClass.listOAuthGrants().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|Result|Collection|&#8592;|Coleção de objetos de descrição de grant|
</div>
<!-- END REF -->

#### Descrição

A função `.listOAuthGrants()` <!-- REF #DataStoreClass.listOAuthGrants().Summary -->retorna a descrição dos grants dados a usuários através do modo OAuth do servidor MCP<!-- END REF -->. Um grant é criado cada vez que um usuário faz login a partir de um cliente MCP (veja [Modo OAuth 2.1](../WebServer/mcp-server.md#oauth-21-mode)).

Quando a função é chamada em contexto web (código executado para uma requisição web ou REST), a coleção contém apenas os grants cujos privilégios são todos detidos pela sessão atual. Em outros lugares, contém todos os grants.

Cada objeto da coleção retornada contém as seguintes propriedades:

|Propriedade|Tipo|Descrição|
|---|---|---|
|id|Text|Identificador do grant|
|userName|Text|Nome de usuário do grant (`userName` retornado por [`ds.mcpGrant()`](../ORDA/ordaClasses.md#function-mcpgrant), ou o login)|
|clientId|Text|Identificador do cliente MCP|
|clientName|Text|Nome do cliente MCP|
|privileges|Text, Collection ou Object|Privilégios e roles retornados por `ds.mcpGrant()`|
|createdAt|Text|Data e hora do login|
|lastUsedAt|Text|Data e hora do último uso do grant|
|expiresAt|Text|Data e hora de expiração do grant|

#### Exemplo

Você lista os clientes MCP nos quais um usuário está logado:

```4d
var $clients:=ds.listOAuthGrants().query("userName = :1"; "jsmith").extract("clientName")
```

<!-- END REF -->

<!-- REF DataStoreClass.revokeOAuthGrant().Desc -->
## .revokeOAuthGrant()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 21 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.revokeOAuthGrant().Syntax -->**.revokeOAuthGrant**( *id* : Text )<!-- END REF -->


<!-- REF #DataStoreClass.revokeOAuthGrant().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|id|Text|&#8594;|Identificador do grant a revogar|
</div>
<!-- END REF -->

#### Descrição

A função `.revokeOAuthGrant()` <!-- REF #DataStoreClass.revokeOAuthGrant().Summary -->revoga um grant dado a um usuário através do modo OAuth do servidor MCP<!-- END REF --> (veja [`.listOAuthGrants()`](#listoauthgrants)).

Os access tokens do grant recebem um status HTTP 401 a partir da próxima requisição, seu refresh token é recusado, e suas sessões MCP são fechadas. O usuário deve fazer login novamente a partir do cliente MCP.

Quando a função é chamada em contexto web (código executado para uma requisição web ou REST), só pode revogar um grant cujos privilégios são todos detidos pela sessão atual.

#### Exemplo

Quando você desativa um usuário da sua aplicação, revoga seus grants OAuth:

```4d
var $grant : Object
For each ($grant; ds.listOAuthGrants().query("userName = :1"; "jsmith"))
	ds.revokeOAuthGrant($grant.id)
End for each
```

#### Veja também

[.listOAuthGrants()](#listoauthgrants)<br/>[.revokeFineGrainedToken()](#revokefinegrainedtoken)

<!-- END REF -->

