---
id: SignalClass
title: Signal
---

Sinais são ferramentas fornecidas pela linguagem 4D para gerenciar interações e evitar conflitos entre processos em uma aplicação multiprocesso. Sinais permitem assegurar que um ou mais processos vão esperar por uma tarefa específica a ser completada antes de continuar a execução. Qualquer processo pode esperar ou liberar um sinal.

> Os semáforos podem ser usados para gerenciar interações. Semáforos permitem ter certeza que dois ou mais processos não modificam o mesmo recurso (arquivo, registro..) ao mesmo tempo. Só o processo que estabelece o semáforo pode removê-lo.


### Objeto sinal

Um sinal é um objeto partilhado que deve ser passado como parâmetro a comandos que chamam ou criam trabalhadores ou processo.

Um objeto `4D.Signal` contém os métodos e propriedades integrados abaixo:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Qualquer worker/processo que chame ao método `.wait()` suspenderá sua execução até que a propriedade `.signaled` seja verdaidera. Enquanto espera um sinal, o processo que chamar não usa nenhuma CPU. Isso pode ser muito interessante para o rendimento nas aplicações multiprocesso. A propriedade `.signaled` se converte em true quando qualquer worker/processo chamar ao método `.trigger()`.

Lembre que para evitar situações de bloqueio,  `.wait()` também pode regrassar depois de que tenha alcançado um tempo de espera definido.

Os objetos sinal se criam com o comando [New signal](#new-signal).


### Trabalhar com sinais

Em 4D, se cria um novo objeto sinal chamando ao comando [`New signal`](#new-signal). Quando tiver criado o sinal, deve ser passado como parâmetro a `New process` ou `CALL WORKER` para que a modifiquem quando terminem a tarefa que queira esperar.

- `signal.wait()` deve ser chamado do worker/processo que precisa de outro worker/processo para terminar uma tarefa para poder continuar.
- `signal.trigger()` deve ser chamado desde worker/processo que terminou sua execução para liberar a todos os outros.


![](assets/en/API/signal.png)

Quando um sinal tiver sido lançado usando uma chamada `signal.trigger()`, não pode ser reutilizado. Se quiser estabelecer outro sinal, precisa chamar o comando `New signal` novamente.

Como um objeto sinal é um [objeto compartilhado](Concepts/shared.md), pode ser usado para retornar resultados de workers/processos, desde que não esqueça de escrever valores dentro de uma estrutura `Use...End use` (ver exemplo).

### Exemplo

```4d
 var $signal : 4D.Signal

  // Criação de sinal
 $signal:=New signal

  // chama processo principal e executar o método OpenForm
 CALL WORKER(1;"OpenForm";$signal)
  // fazer outro cálculo
 ...
  // Esperando pelo final do processo
 $signaled:=$signal.wait()

  // Processando o resultado
 $calc:=$signal.result+...
```

***OpenForm*** method :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Abrir o formulário
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Adiciona um novo atributo para seu objeto partilhado $signal para passar seu resultado aos outros processos:
 Use($signal)
    $signal.result:=$form.value
 End use

  // Ativa o sinal para o processo de espera
 $signal.trigger()
```

### Resumo


|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #_command_.New signal.Syntax -->
**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Parâmetros | Tipo      |    | Descrição                          |
| ---------- | --------- |:--:| ---------------------------------- |
| descrição  | Texto     | -> | Descrição para o sinal             |
| Resultados | 4D.Signal | <- | Objeto nativo encapsulando o sinal |
<!-- END REF -->


#### Descrição

O comando `New signal` <!-- REF #_command_.New signal.Summary -->cria um objeto `4D.Signal`<!-- END REF -->.

Um sinal é um objeto partilhado que pode ser passado como parâmetro de um worker ou processo para outro worker ou processo, de forma que:

*   o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado
*   o worker/processo chamado pode parar sua execução e esperar até que o sinal seja atualizado, sem consumir qualquer recurso de CPU.

Opcionalmente, no parâmetro *description* pode passar um texto personalizado descrevendo o sinal. Esse texto pode também ser definido depois da criação do sinal.

Já que o objeto sinal é um objeto partilhado, pode também ser usado para manter propriedades usuário, incluindo a propriedade [`.description`](#description) por chamar a estrutura `Use...End use`.


**Valor devoluto**

Um novo objeto [`4D.Signal`](#signal-object).

#### Exemplo

Este é um exemplo típico de um worker que fixa um sinal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //espere por um segundo no máximo

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker no ha terminado en menos de 1s")
 End if
```


O método ***doSomething*** poderia ser algo como:

```4d
 #DECLARE ($signal : 4D.Signal)
  //qualquer processo
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //retorna o resultado
 End use
 $signal.trigger() // O trabalho terminou
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description

<details><summary>Histórico</summary>
| Version | Mudanças   |
| ------- | ---------- |
| v17 R4  | Adicionado |
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Descrição

A propriedade `.description` <!-- REF #SignalClass.description.Summary -->contém uma descrição personalizada para o objeto `Signal`.<!-- END REF -->.

`.description` pode ser definida ao criar o objeto signal ou a qualquer momento. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**. 

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #SignalClass.signaled.Syntax -->
**.signaled** : Boolean<!-- END REF -->

#### Description

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #SignalClass.trigger().Syntax -->
**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #SignalClass.wait().Syntax -->
**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| Parameter | Type     |    | Description                                    |
| --------- | -------- | -- | ---------------------------------------------- |
| timeout   | Real     | -> | Maximum waiting time for the signal in seconds |
| Result    | Booleano | <- | State of the `.signaled` property              |
<!-- END REF -->


#### Description

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted).
> **Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).
> The state of a process that waits for a signal is `Waiting for internal flag`.


<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
