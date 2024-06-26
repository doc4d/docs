---
id: variables
title: Variáveis.
---

Os dados em 4D são armazenados de duas formas fundamentalmente diferentes. **Os campos** armazenam os dados permanentemente no disco; **as variáveis** armazenam os dados na memória de forma temporal.

Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as variáveis é mais ou menos a mesma coisa, também se lhes dá nomes e tipos diferentes (ver [Tipos de dados](Concepts/data-types.md)).

As variáveis são objetos da linguagem; pode criar e utilizar variables que nunca aparecerão na tela. Nos seus formulários, pode exibir variáveis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relatórios. Desta forma, variáveis de área editáveis ou não editáveis atuam tal como os campos, e os mesmos controles incorporados estão disponíveis ao serem criados. Variáveis formulário podem controlar botões, list boxes, aréas de rolagem, botões de imagem, e assim por diante, ou exibir resultados de cálculos que não precisam ser salvos.

## Criação de variáveis

Você cria variáveis declarando-as usando um dos comandos do tema "Compilador" ou "Arrays".

**Nota:**Arrays são um tipo específico de variáveis. Uma array é uma série ordenada de variáveis do mesmo tipo. Para mais informações, consulte por favor [Arrays](Concepts/arrays.md).

Por exemplo, se quisermos definir uma variável de texto, escrevemos:

```4d
 C_TEXT(myText)
```

**Observação:** embora geralmente não seja recomendado, você pode criar variáveis simplesmente usando-as; não precisa necessariamente defini-las formalmente como faz com os campos. Por exemplo, se quiser criar uma variável que contenha a data atual mais 30 dias, pode escrever:

```4d
 MyDate:=Current date +30 //MyDate é criado e obtém a data atual mais 30 dias
```

Uma vez criada, você pode usar uma variável sempre que precisar dela em seu banco de dados. Por exemplo, talvez seja necessário armazenar a variável de texto em um campo do mesmo tipo:

```4d
 [MyTable]MyField:=MyText
```

Seguem-se algumas declarações de variáveis básicas:

```4d

 C_BLOB(vxMyBlob) // A variável processo vxMyBlob se declara como uma variável de tipo BLOB
 C_DATE($vdCurDate) // A variável local $vdCurDate se declara como uma variável de tipo Data
 C_LONGINT(vg1;vg2;vg3) // As 3 variáveis de processo vg1, vg2 y vg3 se declaram como variáveis de tipo Inteiro longo
 C_OBJECT($vObj) // A variável local $vObj se declara como uma variável de tipo Objeto
 C_COLLECTION($vCol) // A variável local $vCol se declara como uma variáve de tipo Coleção
 ARRAY LONGINT(alAnArray;10) //A variável do processo alAnArray se declara como um array Inteiro longo de 10 elementos
```

## Atribuição de dados

Os dados podem ser colocados e copiados de variáveis e arrays. Colocar dados em uma variável é chamado **atribuiindo os dados a uma variável** e é feito com o operador de atribuição (:=). O operador de atribuição também é usado para atribuir dados para elementos campos.

O operador de atribuição é a principal maneira de criar uma variável e inserir dados nela. Escreve-se o nome da variável que se pretende criar no lado esquerdo do operador de atribuição. Por exemplo:

```4d
MyNumber:=3
```

cria a variável _MyNumber_ e coloca o número 3 na mesma. Se o MyNumber já existe, então o número 3 é apenas colocado nele.

Naturalmente, as variáveis não seriam muito úteis se não se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribuição. Se precisar  colocar o valor do MyNumber num campo chamado [Products]Size, escreva _MyNumber_ no lado direito do operador de atribuição:

```4d
[Products]Size:=MyNumber
```

Neste caso, _[Products]Tamanho_ seria igual a 3. Este exemplo é bastante simples, mas ilustra a forma fundamental como os dados são transferidos de um local para outro utilizando a língua.

Atribui-se dados a elementos de matriz utilizando chaves ({...}):

```4d
atNames{1}:="Richard"
```

## Variáveis locais, processo e inter-processo

Pode criar três tipos de variáveis: **local**, **processo**, e **interprocesso**. A diferença entre os três tipos de elementos é o seu alcance, ou os objectos para os quais estão disponíveis.

### Variáveis locais

Uma variável local é, como o seu nome indica, local para um método - apenas acessível dentro do método em que foi criada e não acessível fora desse método. Ser local a um método é formalmente referido como sendo "de âmbito local". As variáveis locais são utilizadas para restringir uma variável de modo a que esta funcione apenas dentro do método.

Poderá querer utilizar uma variável local para:

- Evitar conflitos com os nomes de outras variáveis
- Utilizar dados temporariamente
- Reduzir o número de variáveis do processo

O nome de uma variável local começa sempre com um sinal de dólar ($) e pode conter até 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado.

Quando estiver trabalhando em uma base de dados com vários métodos e variáveis, frequentemente é preciso usar uma variável apenas dentro do método em que está trabalhando. Pode criar e utilizar uma variável local no método sem se preocupar se utilizou o mesmo nome de variável noutro lugar.

Frequentemente, em um banco de dados, são necessárias pequenas informações do usuário. O comando `Request` pode obter esta informação. Apresenta uma caixa de diálogo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informação que o utilizador introduziu. Normalmente não precisa de manter esta informação nos seus métodos durante muito tempo. Esta é uma forma típica de utilizar uma variável local. Aqui um exemplo simples:

```4d
 $vsID:=Request("Por favor insira o seu ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método pede simplesmente ao utilizador que introduza uma identificação. Coloca a resposta numa variável local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este método termina, a variável local $vsID é apagada da memória. Isto é ótimo, porque a variável é necessária apenas uma vez e apenas neste método.

**Nota:** Os parâmetros $1, $2... passados para os métodos são variáveis locais. Para mais informações, consultar [Parâmetros](Concepts/parameters.md).

### Variáveis processo

Uma variável de processo só está disponível dentro de um processo. É acessível ao método do processo e a qualquer outro método chamado de dentro do processo.

Uma variável de processo não tem um prefixo antes do seu nome. Um nome de variável de processo pode conter até 31 caracteres.

No modo interpretado, as variáveis são mantidas dinamicamente; são criadas e apagadas da memória "on the fly". No modo compilado, todos os processos que cria (processos de usuário) partilham a mesma definição de variáveis de processo, mas cada processo tem um exemplo diferente para cada variável. Por exemplo, a variável myVar é uma variável no processo P_1 e outra no processo P_2.

Um processo pode "espiar e cutucar" variáveis de processo de outro processo usando os comandos `GET PROCESS VARIABLE` e `SET PROCESS VARIABLE`. É boa prática de programação restringir a utilização destes comandos à situação para a qual foram adicionados à 4D:

- Comunicação interprocessada em locais específicos ou o seu código
- Gestão de arrastar e soltar entre processos
- Em Cliente/Servidor, comunicação entre os processos nas máquinas do cliente e os procedimentos armazenados a correr nas máquinas do servidor

Para mais informações, ver o capítulo **Processos** e a descrição destes comandos.

### Variáveis interprocesso

As variáveis interprocessos estão disponíveis em todo o banco de dados e são compartilhadas entre todos os processos cooperativos. São utilizados principalmente para partilhar informação entre processos.

> O uso de variáveis interprocessadas não é recomendado, uma vez que não estão disponíveis a partir de processos preventivos e tendem a tornar o código mais difícil para manutenção.

O nome de uma variável de interprocesso sempre começa com os símbolos (`<>`) - um sinal de "menor que" seguido de um sinal de "maior que" - seguido de 31 caracteres.

Em Cliente/Servidor, cada máquina (máquinas Cliente e máquina Servidor) partilham a mesma definição de variáveis interprocessadas, mas cada máquina tem um exemplo diferente para cada variável.
