---
id: scheduler
title: Agendador
---

# Agendador

A classe `Scheduler` é o ponto de entrada público para o serviço de **recalculo automatizado de embeddings**. Ela mantém uma tarefa em segundo plano que executa o pipeline de embeddings (veja [Process](Process.md)) em um intervalo configurado ou em um horário diário fixo, garante que **no máximo um** lote de recálculo seja executado por vez e expõe o status em tempo de execução para interfaces de administração e monitoramento.

É um **singleton**, acessado através de `cs.EmbeddingStudio.Scheduler.me`.

O agendador executa dois workers nomeados:

| Worker | Função |
|--------|--------|
| `EmbeddingStudioScheduler` | Loop em segundo plano que relê a configuração a cada ciclo, calcula a próxima execução e dispara quando devido. |
| `EmbeddingStudio` | Worker de execução que executa um lote de recálculo (compartilhado com a interface Studio, então execuções agendadas e manuais são serializadas). |

## Configuração

A configuração fica sob a chave `scheduler` do arquivo `Settings/embeddings.json`:

```json
{
  "scheduler": {
    "mode": "interval",
    "intervalHours": 3,
    "startFrom": "reference",
    "startReference": "2026-09-02T14:00:00",
    "dailyTime": "00:00"
  }
}
```

| Chave            | Tipo    | Valores / intervalo                  | Descrição                                                                 |
|------------------|---------|--------------------------------------|---------------------------------------------------------------------------|
| `mode`           | Texto   | `"never"` \| `"interval"` \| `"daily"` | Modo de agendamento. Ausente/desconhecido ⇒ `never` (sem execução automática).      |
| `intervalHours`  | Inteiro | `1`..`24`                            | Apenas no modo intervalo. Fora do intervalo ⇒ padrão `3`.                             |
| `startFrom`      | Texto   | `"reference"` \| `"lastExecution"`   | Apenas no modo intervalo. Âncora do intervalo (veja abaixo). Qualquer valor diferente de `"lastExecution"` — incluindo o legado `"now"` — é normalizado para `reference`. Padrão `reference`. |
| `startReference` | Texto   | `"YYYY-MM-DDThh:mm:ss"`              | Modo intervalo com `startFrom = "reference"`. Instante fixo a partir do qual o intervalo é contado. Ausente ⇒ o momento em que o agendador foi ativado, depois o instante atual. |
| `dailyTime`      | Texto   | `"HH:MM"`                            | Apenas no modo diário. Horário do dia para o recálculo. Padrão `"00:00"`.       |

**Ancoragem do intervalo (`startFrom`)**

- `reference` — **taxa fixa**: o intervalo é ancorado no instante fixo `startReference`, então os slots não se deslocam independentemente da duração de uma execução. Os slots são avançados por `intervalHours` até o primeiro estritamente após o momento atual. Quando `startReference` está ausente (configuração nova ou legada), a âncora volta para o momento em que o agendador foi ativado (`start()`), depois para o instante atual.
- `lastExecution` — **atraso fixo**: o intervalo é ancorado na última execução de recálculo concluída. Se o tempo decorrido desde a última execução já excede o intervalo (por exemplo, após um reinício), a execução é disparada imediatamente. Se não houver execução anterior, executa imediatamente.

A configuração efetiva é lida do arquivo em **cada ciclo do loop**, então alterações têm efeito sem reiniciar o agendador.

## Iniciando o agendador

Configurar um `mode` **não é suficiente**: nada será executado até que o agendador seja iniciado. Existem duas formas de chegar lá, e qual delas se aplica depende de uma única opção do banco de dados host.

### 1. Automático — deixe o banco de dados host iniciar

No banco de dados host, abra **Configurações > Segurança** e marque **"Executar método 'On Host Database Event' dos componentes"** (por padrão está *desmarcado*, por motivos de segurança).

Com esta opção ativada, o 4D Embedding Studio inicia o agendador automaticamente quando o banco de dados host é aberto e o para quando o banco de dados host é fechado. Não é necessário escrever mais nada.

Use [`autoStart()`](#autostart) para verificar se a opção está ativada:

```4d
If (Not(cs.EmbeddingStudio.Scheduler.me.autoStart()))
	// a opção está desativada — preciso iniciar o agendador manualmente
	cs.EmbeddingStudio.Scheduler.me.start()
End if
```

### 2. Manual — inicie a partir do seu próprio código

Se preferir deixar a opção desativada, o agendador nunca inicia sozinho. Chame [`start()`](#start) de onde for mais conveniente — normalmente no método de banco de dados host `On Startup` ou `On Server Startup` — e [`stop()`](#stop) quando o banco de dados for fechado (`On Exit` / `On Server Shutdown`):

```4d
// Host "On Server Startup"
cs.EmbeddingStudio.Scheduler.me.start()

// Host "On Server Shutdown"
cs.EmbeddingStudio.Scheduler.me.stop()
```

> Em client/server, ative o agendador a partir de `On Server Startup`, não de `On Startup`:
> `On Startup` é executado em cada cliente remoto, e o estado do agendador é por máquina — cada
> cliente ativaria seu próprio loop e executaria seus próprios lotes. Se você chamar [`start()`](#start)
> a partir de `On Startup` (em instalações single-user), proteja com
> `If (Application type#4D Remote mode)`.

`start()` é idempotente, então chamá-lo de vários lugares não causa problemas.

### Verificando se está realmente em execução

[`isStarted()`](#isstarted) informa se o loop em segundo plano está ativo neste momento — a resposta para "meu agendamento está realmente sendo monitorado?":

```4d
var $s:=cs.EmbeddingStudio.Scheduler.me.status()
If ($s.enabled && Not($s.started))
	ALERT("Um agendamento está configurado, mas o agendador não está iniciado.")
End if
```

## Funções

### start()

**start**() : Boolean

Ativa o agendador e inicia o worker de loop em segundo plano se ainda não estiver em execução. Idempotente — chamá-lo novamente enquanto já estiver ativado apenas atualiza a âncora "start from now".

| Resultado | Tipo    | Descrição         |
|-----------|---------|-------------------|
| result    | Boolean | Sempre `True`.    |

```4d
cs.EmbeddingStudio.Scheduler.me.start()
```

### stop()

**stop**()

Desativa o agendador e para o worker de loop em segundo plano. Um lote de recálculo já em andamento **não** é interrompido — ele termina normalmente (use [`cancel()`](#cancel) para solicitar uma parada antecipada).

```4d
cs.EmbeddingStudio.Scheduler.me.stop()
```

### cancel()

**cancel**()

Solicita um cancelamento **cooperativo** do lote atualmente em execução. O lote em execução nunca é forçado a parar; ele termina graciosamente entre dois blocos. Não tem efeito se nenhum lote estiver em execução.

```4d
cs.EmbeddingStudio.Scheduler.me.cancel()
```

### force()

**force**() : Object

Força um recálculo **agora**, independentemente do agendamento. Respeita a regra de lote único: se um lote já estiver em execução, o disparo forçado é ignorado (e registrado). Não bloqueante — a execução ocorre no worker de execução.

| Resultado | Tipo   | Descrição                                   |
|-----------|--------|---------------------------------------------|
| result    | Object | O objeto [status](#status) atual.           |

```4d
var $status:=cs.EmbeddingStudio.Scheduler.me.force()
```

### status()

**status**() : Object

Retorna o status atual do agendador, sem nenhum parâmetro de entrada — adequado para exibição em telas de administração e monitoramento.

| Resultado | Tipo   | Descrição                              |
|-----------|--------|----------------------------------------|
| result    | Object | Veja [Objeto Status](#status-object).  |

```4d
var $s:=cs.EmbeddingStudio.Scheduler.me.status()
If ($s.running)
	ALERT("Um recálculo está em execução desde "+$s.batchStart)
End if
```

#### Objeto Status

| Chave                | Tipo          | Descrição                                                                     |
|----------------------|---------------|-------------------------------------------------------------------------------|
| `enabled`            | Boolean       | `False` quando `mode = "never"`.                                              |
| `mode`               | Texto         | Modo efetivo (`never` \| `interval` \| `daily`).                              |
| `armed`              | Boolean       | `True` quando o loop em segundo plano está ativado (após `start()`, até `stop()`). |
| `running`            | Boolean       | `True` enquanto um lote de recálculo está em andamento.                       |
| `batchStart`         | Texto \| Null | Timestamp ISO do início do lote em execução (`Null` quando ocioso).           |
| `lastExecution`      | Texto \| Null | Timestamp ISO da última execução concluída (`Null` se ainda não houver). Restaurado do histórico persistido após um reinício, então sobrevive à perda do estado em memória. |
| `lastRunBeforeRestart` | Boolean     | `True` quando `lastExecution` foi recuperado do histórico após um reinício, em vez de produzido por uma execução na sessão atual. |
| `nextRun`            | Texto \| Null | Timestamp ISO da próxima execução agendada (`Null` no modo `never`).          |
| `lastResult`         | Texto \| Null | Resultado do último disparo: `started` \| `skipped` \| `completed` \| `failed`. |
| `error`              | Texto \| Null | Resumo do erro quando a última execução falhou (seguro para exibição administrativa), senão `Null`. |
| `started`            | Boolean       | `True` quando o loop em segundo plano está realmente ativo (veja [`isStarted()`](#isstarted)). |
| `autoStart`          | Boolean       | `True` quando o banco de dados host inicia o agendador automaticamente (veja [`autoStart()`](#autostart)). |

### isStarted()

**isStarted**() : Boolean

Informa se o agendador está **efetivamente em execução**, ou seja, se seu loop em segundo plano está ativo neste exato momento. Diferente do flag `armed` do [status](#status-object), reflete a realidade: se o loop nunca foi iniciado ou foi encerrado, o resultado é `False`.

| Resultado | Tipo    | Descrição                                    |
|-----------|---------|----------------------------------------------|
| result    | Boolean | `True` quando o loop em segundo plano está ativo. |

```4d
If (Not(cs.EmbeddingStudio.Scheduler.me.isStarted()))
	cs.EmbeddingStudio.Scheduler.me.start()
End if
```

### autoStart()

**autoStart**() : Boolean

Informa se o banco de dados host autoriza o 4D Embedding Studio a se iniciar automaticamente, ou seja, se a opção **"Executar método 'On Host Database Event' dos componentes"** está marcada nas **Configurações > Segurança** do host (veja [Iniciando o agendador](#iniciando-o-agendador)).

- `True` — o agendador inicia com o banco de dados host e para junto com ele. Não é necessário chamar nada.
- `False` — nada inicia automaticamente: seu código deve chamar [`start()`](#start) e [`stop()`](#stop).

A resposta é lida das configurações da estrutura do host. Quando não podem ser lidas, o resultado é `False` — a resposta segura, já que iniciar um agendador já iniciado não causa problemas.

| Resultado | Tipo    | Descrição                                                      |
|-----------|---------|----------------------------------------------------------------|
| result    | Boolean | `True` quando o host inicia o agendador automaticamente.        |

```4d
var $auto:=cs.EmbeddingStudio.Scheduler.me.autoStart()
```

### config()

**config**() : Object

Retorna a configuração efetiva do agendador com os padrões aplicados (como resolvido de `embeddings.json`).

| Resultado | Tipo   | Descrição                                                        |
|-----------|--------|------------------------------------------------------------------|
| result    | Object | `{mode; intervalHours; startFrom; startReference; dailyTime}` (veja [Configuração](#configuração)). |

```4d
var $cfg:=cs.EmbeddingStudio.Scheduler.me.config()
```

### saveConfig()

**saveConfig**( *cfg* : Object ) : Object

Valida, normaliza e **persiste** uma configuração do agendador na chave `scheduler` de `embeddings.json`, depois retorna o valor normalizado. Este é o equivalente programático da janela de configurações do agendador: permite alterar o agendamento inteiramente por código, sem a interface gráfica. Apenas a chave `scheduler` é escrita — as demais chaves do arquivo de configurações são preservadas.

A configuração é escrita **no servidor**: em uma configuração 4D Server / 4D remote o arquivo é sempre editado na máquina do servidor, então um cliente remoto pode chamar este método com segurança. Como o loop relê a configuração a cada ciclo, o novo agendamento entra em vigor sem reiniciar o agendador.

| Parâmetro | Tipo   | Descrição                                                                 |
|-----------|--------|---------------------------------------------------------------------------|
| cfg       | Object | Configuração bruta `{mode; intervalHours; startFrom; startReference; dailyTime}` (veja [Configuração](#configuração)). Valores ausentes/fora do intervalo são padronizados. |

| Resultado | Tipo   | Descrição                                                        |
|-----------|--------|------------------------------------------------------------------|
| result    | Object | A configuração normalizada que foi persistida.                   |

```4d
// Alterar para um intervalo de 6 horas contando a partir da última execução
cs.EmbeddingStudio.Scheduler.me.saveConfig({mode: "interval"; intervalHours: 6; startFrom: "lastExecution"})

// Alterar para execução diária às 02:30
cs.EmbeddingStudio.Scheduler.me.saveConfig({mode: "daily"; dailyTime: "02:30"})

// Desabilitar o agendamento automático
cs.EmbeddingStudio.Scheduler.me.saveConfig({mode: "never"})
```

### nextRun()

**nextRun**() : Object

Calcula a próxima execução agendada a partir da configuração e estado atuais.

| Resultado | Tipo           | Descrição                                                                          |
|-----------|----------------|------------------------------------------------------------------------------------|
| result    | Object \| Null | `{date : Date; time : Time; timestamp : Text; immediate : Boolean}`, ou `Null` no modo `never`. |

```4d
var $next:=cs.EmbeddingStudio.Scheduler.me.nextRun()
```

### reload()

**reload**() : Object

Apenas conveniência: a configuração é relida automaticamente a cada ciclo do loop, então este método apenas retorna o [status](#status) atual. Fornecido para quem deseja uma chamada explícita "configuração mudou, me dê o status atualizado".

| Resultado | Tipo   | Descrição                          |
|-----------|--------|------------------------------------|
| result    | Object | O objeto [status](#status) atual.  |

## Concorrência & logging

- **Lote único** — em qualquer momento, no máximo um lote de recálculo é executado. Um disparo (agendado ou forçado) ocorrido enquanto um lote está em execução é **ignorado**, não enfileirado.
- **Rastreabilidade de ignorados** — disparos ignorados são registrados com seu timestamp no histórico de execução (`Logs/embeddingHistory.json`).
- **Cancelamento cooperativo** — `cancel()` interrompe um lote em execução de forma graciosa entre blocos; nunca é forçado.
- **Histórico** — cada execução registra timestamps de início/fim, status, uso de tokens e a próxima data de execução calculada em `Logs/embeddingHistory.json` (veja [ProcessResult](ProcessResult.md) para detalhes por execução).

### Arquivo de histórico de execução

`Logs/embeddingHistory.json` é escrito pelo próprio pipeline (a cada execução completa de `process()`, agendada ou manual), protegido por um semáforo para que processos concorrentes nunca intercalem gravações. Ele mantém a **execução atual** no nível superior, a anterior em `previous`, e o mesmo par por definição em `definitions`.

```json
{
  "startTime": "2026-09-01T14:03:00",
  "endTime": "2026-09-01T14:03:00",
  "status": "completed",
  "trigger": "completed",
  "error": null,
  "nextComputeDate": "2026-09-02T14:03:00",
  "promptTokens": 0,
  "totalTokens": 0,
  "cumulativePromptTokens": 37802,
  "cumulativeTotalTokens": 37802,
  "previous": { "startTime": "…", "endTime": "…", "status": "completed", "error": null,
                "nextComputeDate": "…", "promptTokens": 12764, "totalTokens": 12764,
                "cumulativePromptTokens": 37802, "cumulativeTotalTokens": 37802 },
  "skipped": ["2026-09-01T12:00:00"],
  "definitions": {
    "Students.student_vector_1": {
      "startTime": "…", "endTime": "…", "status": "completed", "error": null,
      "promptTokens": 1054, "totalTokens": 1054,
      "cumulativePromptTokens": 4210, "cumulativeTotalTokens": 4210,
      "previous": { "…": "…" }
    }
  }
}
```

| Chave                        | Tipo          | Descrição                                                                                   |
|------------------------------|---------------|---------------------------------------------------------------------------------------------|
| `startTime` / `endTime`      | Texto \| Null | Timestamps ISO da execução, na base local do agendador. `endTime` é `null` enquanto uma execução está em andamento. |
| `status`                     | Texto         | `running` \| `completed` \| `failed`.                                                       |
| `trigger`                    | Texto         | Último evento que alterou o arquivo: `started` \| `skipped` \| `completed` \| `failed`.      |
| `error`                      | Texto \| Null | Resumo dos erros da execução, ou `null`. Nunca contém uma chave de API.                     |
| `nextComputeDate`            | Texto \| Null | Próxima execução agendada calculada ao final da execução (a opção `nextComputeDate` de [Process](Process.md)). |
| `promptTokens` / `totalTokens` | Inteiro     | Uso apenas desta execução.                                                                  |
| `cumulativePromptTokens` / `cumulativeTotalTokens` | Inteiro | Totais acumulados de todas as execuções registradas.                        |
| `previous`                   | Object        | Snapshot da execução anterior — as mesmas chaves, sem `trigger`, `skipped` e `definitions`. Apenas uma geração é mantida. |
| `skipped`                    | Coleção       | Timestamps ISO de disparos ignorados porque um lote já estava em execução. Limitado aos **últimos 50**. |
| `definitions`                | Object        | Uma entrada por definição, chaveada por `"<dataclassName>.<vectorName>"`, cada uma com seu próprio `startTime`, `endTime`, `status` (`completed` \| `failed` \| `skipped`), `error`, contadores de tokens e `previous`. |

[`status()`](#status) lê `startTime`, `endTime`, `status`, `trigger`, `error` e `nextComputeDate` deste arquivo, o que permite que `lastExecution` sobreviva a um reinício do servidor.

## Ciclo de vida

| Configuração do host | O que acontece | O que você deve fazer |
|---------------------|----------------|----------------------|
| **"Executar método 'On Host Database Event' dos componentes"** marcada | O agendador inicia quando o banco de dados host é aberto e para quando ele é fechado. | Nada. |
| Opção desmarcada (padrão) | O agendador nunca inicia sozinho. | Chame [`start()`](#start) na inicialização e [`stop()`](#stop) no encerramento. |

Pergunte a [`autoStart()`](#autostart) em qual caso você está, e a [`isStarted()`](#isstarted) se o loop está ativo no momento. Parar o agendador nunca interrompe um lote em andamento — ele termina normalmente.

## Exemplo

```4d
// --- Iniciar na inicialização do servidor, a menos que o host faça isso por nós ---
If (Not(cs.EmbeddingStudio.Scheduler.me.autoStart()))
	cs.EmbeddingStudio.Scheduler.me.start()
End if

// --- Painel admin: forçar um recálculo e ler o status ---
var $status:=cs.EmbeddingStudio.Scheduler.me.force()

// --- Monitoramento: exibir última / próxima execução e estado atual ---
$status:=cs.EmbeddingStudio.Scheduler.me.status()
var $info:="Modo: "+$status.mode\
	+" — Última: "+String($status.lastExecution)\
	+" — Próxima: "+String($status.nextRun)\
	+" — "+($status.running ? "executando" : String($status.lastResult))

// --- Cancelar um lote de longa duração ---
cs.EmbeddingStudio.Scheduler.me.cancel()

// --- Desabilitar execuções automáticas ---
cs.EmbeddingStudio.Scheduler.me.stop()
```
