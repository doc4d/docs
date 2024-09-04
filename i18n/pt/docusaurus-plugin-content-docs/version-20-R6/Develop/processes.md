---
id: processes
title: Processos e Workers
---

Multi-tarefa no 4D é a habilidade de ter várias operações que são executadas simultaneamente. Essas operações são chamadas **processos**. Processos múltiplos são como múltiplos usuários no mesmo computador, cada um trabalhando em sua própria tarefa. Isto significa, essencialmente, que cada método pode ser executado como uma tarefa distinta de base de dados.

Se você escrever código seguro para threads, você pode criar [**processos preemptivos**](preemptive.md) que serão capazes de aproveitar o poder de processamento de computadores multi-core em suas aplicações compiladas, para execução mais rápida.

:::note

A aplicação 4D cria processos para suas próprias necessidades, por exemplo, o processo Principal para gerenciar as janelas de exibição da interface do usuário, o processo Design para gerenciar as janelas e editores do ambiente de design (observe que ambos são [processos de trabalho](#worker-processes)), o processo Servidor Web, o processo Gerenciador de Cache, o processo de Indexação ou o processo Gerenciador de Eventos.

:::

## Criar e limpar processos

Existem várias maneiras de criar um processo:

- Execute um método no ambiente de Design após marcar a caixa de seleção **Novo Processo** na caixa de diálogo "Executar Método". O método escolhido na caixa de diálogo Executar Método é o método do processo.
- Use o comando [`New process`] (https://doc.4d.com/4dv20/help/command/en/page317.html). O método passado como parâmetro para o comando `Novo processo` é o método de processo.
- Use o comando [`Execute on server`] (https://doc.4d.com/4dv20/help/command/en/page373.html) para criar um procedimento armazenado no servidor. O método passado como parâmetro do comando é o método processo.
- Use o comando [`CALL WORKER`] (https://doc.4d.com/4dv20/help/command/en/page1389.html). Se o processo worker ainda não existir, será criado.

:::note

Em aplicativos de desktop, os processos podem ser executados escolhendo comandos de menu. No [Editor de Barra de Menu](../Menus/creating.md), selecione o comando de menu e marque a caixa de seleção **Iniciar um Novo Processo**. O método associado ao comando do menu é o método processo.

:::

Um processo pode ser liberado sob as seguintes condições (as primeiras duas condições são automáticas):

- Quando o método processo termina de ser executado
- Quando o usuário sai da aplicação
- Se você parar o processo procedimentalmente ou usar o botão **Abortar** no Depurador ou no Explorador de Tempo de Execução
- Se você chamar o comando [`KILL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1390.html) (para excluir apenas um processo de trabalhador).

Um processo pode criar outro processo. Os processos não são organizados hierarquicamente—todos os processos são iguais, independentemente do processo do qual foram criados. Uma vez que o processo "pai" cria um processo "filho", o processo filho continuará independentemente de o processo pai ainda estar em execução.

## Elementos de um processo

Cada processo contém elementos específicos que podem ser tratados independentemente de outros processos.

### Elementos da linguagem

- Variáveis: Cada processo tem suas próprias [variáveis de processo](../Concepts/variables#process-variables). Variáveis de processo são reconhecidas apenas dentro do domínio de seu processo nativo.
- Conjuntos de processo: cada processo tem seus próprios conjuntos de processos. `LockedSet` é um conjunto de processos. Os conjuntos processo são apagados assim que o método processo termina.
- [Método de tratamento de erros](../Concepts/error-handling#installing-an-error-handling-method): Cada processo pode ter seu próprio método de tratamento de erros.
- [Janela do Depurador](../Depuring/debugger#calling-the-debugger): Cada processo pode ter sua própria janela do Depurador.

### Elementos da interface

Elementos de interface são usados em [Aplicações para Desktop](../category/desktop-applications). Eles consistem nos seguintes:

- [Barra de menus](../Menus/creating.md): cada processo pode ter sua própria barra de menu atual. A barra de menu do processo ativo é a barra de menu atual para o aplicativo.
- Um ou mais janelas: Cada processo pode ter mais de uma janela aberta simultaneamente. Por outro lado, alguns processos não têm nenhuma janela.
- Uma janela ativa (em primeiro plano): Mesmo que um processo possa ter várias janelas abertas simultaneamente, cada processo tem apenas uma janela ativa. Para ter mais de uma janela ativa, você deve iniciar mais de um processo.
- Formulários de entrada e saída: Os formulários de entrada e saída padrão podem ser definidos processualmente para cada tabela em cada processo.

:::info

- Por padrão, os processos não incluem barras de menu, o que significa que os atalhos do menu **Editar** (em particular, cortar/copiar/colar) não estão disponíveis nas janelas de processo. Quando você chama caixas de diálogo ou editores do 4D (editor de formulários, editor de consultas, Requisição, etc.) de um processo, se você deseja que o usuário possa se beneficiar de atalhos de teclado como copiar/colar, você precisa garantir que o equivalente a um menu **Editar** esteja instalado no processo.
- [Processos preemptivos](preemptive.md) e processos executados no servidor (procedimentos armazenados) não devem conter elementos da interface.

:::

:::note

Cada processo também possui uma seleção atual e registro atual separados por tabela. Para obter mais informações sobre esses conceitos, consulte [doc.4d.com] (https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html).

:::

## Processos globais e locais

Os processos podem ser globais ou locais em seu escopo. Por padrão, todos os processos são globais.

Processos globais podem realizar qualquer operação, incluindo o acesso e manipulação de dados. Geralmente, você desejará usar processos globais. Processos locais devem ser utilizados apenas para operações que não acessam dados. Por exemplo, você pode usar um processo local para executar um método de manipulação de eventos ou para controlar elementos da interface como janelas flutuantes.

Você especifica que um processo tem escopo local através de seu nome. O nome do processo local deve começar com um sinal de dólar ($).

:::warning

Se você tentar acessar os dados de um processo local, acessá-lo através do processo principal (processo #1), risco entra em conflito com operações realizadas dentro desse processo.

:::

### 4D Server

Usar processos locais no lado remoto para operações que não requerem acesso a dados reserva mais tempo de processamento para tarefas intensivas do servidor. Quando você cria um processo local para o cliente (usando `Novo processo`, por exemplo), ele só existe no lado remoto.

Quando você cria um processo global no cliente, um processo "gêmeo" é criado no servidor, consumindo assim recursos do servidor para lidar com o acesso aos dados e o contexto do banco de dados. No entanto, por motivo de otimização, o processo duplicado é criado apenas se necessário, ou seja, na primeira vez em que o processo global precisa acessar dados.

## Processos Worker

Usar um processo de trabalho é uma maneira simples e poderosa de trocar informações entre processos. This feature is based upon an asynchronous messaging system that allows processes and forms to be called and asked to execute methods with parameters in their own context.

A worker can be "hired" by any process (using the [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html) command) to execute project methods with parameters in their own context, thus allowing access to shared information.

:::info

In Desktop applications, a project method can also be executed with parameters in the context of any form using the [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html) command.

:::

This functionality addresses the following needs regarding 4D interprocess communication:

- Since they are supported by both cooperative and preemptive processes, they are the perfect solution for interprocess communication in [preemptive processes](preemptive.md) ([interprocess variables are deprecated](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) and not allowed in preemptive processes).
- They provide a simple alternative to semaphores, which can be cumbersome to set and complex to use

:::note

Although they have been designed mainly for interprocess communication in the context of preemptive processes, `CALL WORKER` and `CALL FORM` can be used with cooperative processes.

:::

### Usando workers

Um worker é usado para solicitar a um processo que execute métodos projeto. Um worker consiste de:

- a unique name (*warning: the name is case sensitive*), also used to name its associated process
- um processo associado, que pode ou não existir em um determinado momento
- uma caixa de mensagem
- um método de inicialização (opcional)

You ask a worker to execute a project method by calling the `CALL WORKER` command. The worker and its message box are created at first use; its associated process is also automatically launched at first use. If the worker process dies thereafter, the message box remains open and any new message in the box will start a new worker process.

A animação a seguir ilustra esta sequência:

![](../assets/en/Develop/WorkerAnimation.gif)

Unlike a process created with the `New process` command, a worker process **remains alive after the execution of the process method ends**. This means that all method executions for the same worker will be run in the same process, which maintains all process state information (process variables, current record and current selection, etc.). Consequently, methods executed successively will access and thus share the same information, allowing communication between processes. A caixa de mensagens do worker lida com chamadas sucessivas de forma assíncrona.

`CALL WORKER` encapsulates both the method name and command arguments in a message that is posted in the worker's message box. The worker process is then started, if it does not already exist, and asked to execute the message. This means that `CALL WORKER` will usually return before the method is actually executed (processing is asynchronous). Por esse motivo, `CALL WORKER` não retorna nenhum valor. If you need a worker to send information back to the process which called it (callback), you need to use `CALL WORKER` again to pass the information needed to the caller. É claro que, nesse caso, o próprio chamador deve ser um worker.

It is not possible to use `CALL WORKER` to execute a method in a process created by the `New process` command. Only worker processes have a message box and can thus be called by `CALL WORKER`. Note that a process created by `New process` can call a worker, but cannot be called back.

Worker processes can be created on 4D Server through stored procedures: for example, you can use the `Execute on server` command to execute a method that calls the `CALL WORKER` command.

A worker process is closed by a call to the [`KILL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1390.html) command, which empties the worker's message box and asks the associated process to stop processing messages and to terminate its current execution as soon as the current task is finished.

The startup method of a worker is the method used to create the worker (at first use). If `CALL WORKER` is called with an empty *method* parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using `CALL WORKER`. Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling `CALL WORKER`.

### Identificação dos processos Worker

All worker processes, except the main process, have the process type `Worker process` (5) returned by the [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) command.

[Ícones específicos](../ServerWindow/processes#process-type) identificam os processos worker.

### Veja também

Para obter mais informações, consulte [este post](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) sobre como usar os workers.
