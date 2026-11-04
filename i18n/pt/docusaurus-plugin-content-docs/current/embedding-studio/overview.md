---
id: overview
title: 4D-Embedding-Studio
---

# 4D-Embedding-Studio

## Visão geral

4D Embedding Studio é um componente para definir, processar e manter vetores de embedding de IA diretamente nas entidades de dataclass do seu 4D.

Você pode usar o componente sem escrever uma única linha de código: selecione atributos dos seus dataclasses para construir as frases a serem vetorizadas e especifique o modelo a ser utilizado. Para cada entidade, o componente chama a API de embedding e armazena os valores resultantes de `4D.Vector`. Configure o agendador de embedding para (re)calcular os vetores dos seus dados em intervalos fixos ou sob demanda.

Você pode então usar o recurso ORDA [`query()` por vetor](https://developer.4d.com/docs/API/DataClassClass#query-by-vector-similarity) para consultar seus dados usando semântica.

Se você quiser ter mais controle sobre seus embeddings, o componente oferece uma API extensa que permite personalizar cada etapa do processo de vetorização dos dados, gerenciar o agendador e integrar recursos de RAG (*Retrieval Augmented Generation*) de alto desempenho em sua aplicação 4D.

## Requisitos

- [4D-AIKit](https://github.com/4d/4D-AIKit) (carregado automaticamente como dependência).
- Projeto 4D (21 R5 ou posterior) com a seguinte configuração:
  - um alias de modelo válido
  - um dataclass com um atributo `4D.Vector` (campo objeto no nível do banco de dados).

## Início rápido

**1. Adicione um campo do tipo Objeto à tabela e associe-o à classe `4D.Vector`.**  
**2. Selecione **Embedding Studio...** no menu **Design** para exibir a janela do Embedding Studio.**  

![menu](../assets/en/embedding-studio/menu.png)  

**3. Para cada atributo `4D.Vector` listado, escreva uma frase descritiva baseada nos atributos do dataclass.**  
Use o menu contextual para inserir os atributos apropriados.  
Esta frase será vetorizada para cada entity selection.  
**4. Selecione um alias de modelo (ou crie um novo).**   
**5. Selecione "Executar agora" para iniciar a vetorização dos seus dados ou configure o agendador.**   

## Guia do usuário

### Configurando o dataclass

Para usar a interface do 4D Embedding Studio, você precisa criar pelo menos um atributo objeto associado à classe `4D.Vector` no seu datastore. Isso deve ser feito no nível do banco de dados (apenas atributos de armazenamento podem ser embeddings).

No editor de Estrutura, adicione um campo Objeto ao dataclass (tabela) cujas entidades você deseja consultar usando IA e insira ["4D.Vector" como classe](https://developer.4d.com/docs/Develop/structure-fields#class).

#### Suporte a dirty-flag

Em uma aplicação de produção, os dados raramente são estáticos. Se um embedding é baseado em um valor de atributo que foi alterado (por exemplo, uma descrição de produto), ele se torna obsoleto e pode não ser mais relevante. Por padrão, o 4D invalida automaticamente e marca para recálculo os embeddings afetados.

Se você não usar um campo dirty-flag (veja abaixo), o 4D simplesmente substitui qualquer vetor invalidado por `Null`. Portanto, ele não será mais usado em buscas até seu próximo cálculo. Esta opção é adequada para aplicações que priorizam consistência estrita: é melhor não retornar resultados do que confiar em um embedding que não corresponde mais aos dados atuais.

Ou, você pode adicionar um campo Booleano chamado `<vectorName>_dirty` (por exemplo, "myVector_dirty") à estrutura. Neste caso, quando uma atualização é necessária, este campo é definido como `True`, e o vetor associado é mantido até ser recalculado. Sua aplicação pode então optar por continuar usando este vetor temporariamente ou excluí-lo usando um filtro em `dirty = False`. O flag é limpo automaticamente após um salvamento bem-sucedido.
Esta estratégia promove a continuidade do serviço enquanto permite identificar precisamente os vetores aguardando recálculo. Se sua lógica de negócio exigir controle total, você também pode desabilitar a invalidação automática e gerenciar esse ciclo de vida manualmente.

*Nota: Certas modificações, como mudanças de modelo, exigem que os vetores sejam substituídos imediatamente.*

### Criando um embedding

Ao selecionar **Embedding Studio...** no menu **Design**, a janela do Embedding Studio é exibida.

A lista à esquerda mostra todos os atributos de classe `4D.Vector` definidos no datastore. Você pode adicionar quantos atributos de vetor quiser por dataclass.

Uma marca de seleção (✓) na coluna Dirty Flag indica que um campo booleano [`<vectorName>_dirty`](#dirty-flag-support) está associado ao campo de vetor.

**Nota:** Qualquer alteração na estrutura do banco de dados exigirá que você reinicie a aplicação 4D para que o 4D Embedding Studio liste os valores atualizados.

#### Escrevendo uma frase descritiva

Para criar ou editar um embedding, selecione o atributo a ser configurado nesta lista e escreva a definição do embedding na área "Frase descritiva" à direita. Use o menu associado para construir a frase e adicionar referências aos atributos disponíveis do dataclass com a sintaxe `{attribute_name}`.

A frase deve construir um texto que descreva a entidade assim como um humano faria. O embedding poderá então capturar a semântica e não apenas os valores dos atributos.

Por exemplo, para um dataclass `Product` com muitos atributos como nome e categoria, você poderia escrever:
"O produto {name} é um(a) {category} da marca {brand}. Descrição: {description}. Principais características: {features}."

![menu](../assets/en/embedding-studio/studio-interface.png)

### Selecionando um modelo

Depois de definir seu atributo de vetor, escolha o modelo a ser usado para gerar o embedding. A lista de modelos inclui os **aliases de modelo** que você definiu nas [Configurações do Projeto](https://developer.4d.com/docs/settings/ai#model-aliases).

A escolha do modelo é importante porque determina a relevância e a qualidade dos seus embeddings. Você também precisará fornecer este modelo em toda consulta aos dados do dataclass para que a comparação seja feita usando o mesmo modelo.

### Auto-invalidação ao salvar

Quando esta opção está marcada (padrão), os embeddings são automaticamente invalidados quando pelo menos um de seus atributos de definição foi modificado e a entidade foi salva com sucesso.

No entanto, você pode querer tratar a invalidação de forma personalizada usando a [API do 4D Embedding Studio](#api-guide). Neste caso, desmarque esta opção para desabilitar o mecanismo automático.

### Calculando embeddings

Os embeddings são calculados enviando uma requisição ao modelo de IA, que então retorna o resultado da vetorização, que é posteriormente armazenado no atributo `4D.Vector` no dataclass. O 4D gerencia automaticamente esta operação e a otimiza calculando apenas os vetores necessários. Cada vetor é processado independentemente. Assim, um erro em um elemento não interrompe o recálculo dos demais. Elementos que falharem serão automaticamente tentados novamente na próxima execução. Os recálculos são realizados de forma assíncrona, sem bloquear os usuários.

Esses cálculos podem ser realizados **sob demanda** ou **agendados em intervalos regulares** usando o agendador do componente 4D Embedding Studio.

**Nota:** Você também pode personalizar os cálculos de embedding por dataclass ou entity selection usando a [API do 4D Embedding Studio](#api-guide).

#### Sob demanda

Para iniciar um cálculo de embedding, selecione **Executar agora** no menu na parte inferior da janela do 4D Embedding Studio. Este item fica desabilitado se o datastore não contiver nenhum embedding a ser calculado. Quando iniciado, você pode selecionar **Cancelar execução** a qualquer momento.

#### Agendador

Você pode configurar o agendador do componente 4D Embedding Studio para ajustar a frequência de cálculo conforme as necessidades da sua aplicação.

**Importante:** O agendador precisa de um processo worker do 4D para rodar. Você pode iniciá-lo manualmente para fins de teste (botão **Iniciar agora** na caixa de diálogo do agendador), mas para garantir que um worker esteja disponível sempre que a aplicação abrir, é necessário configurá-lo. Você pode:
- selecionar a opção **Executar método "On Host Database Event" dos componentes** nas [Configurações do projeto](https://developer.4d.com/docs/settings/security#options)
- ou escrever o seguinte código no seu código de inicialização:

```4d
  //at startup
cs.EmbeddingStudio.Scheduler.me.start()
```

O agendador permite definir o intervalo de tempo entre dois cálculos. Selecione a aba correspondente à sua necessidade e clique em **Salvar**.
- **Nunca**: o agendador está desligado e nunca executa
- **Em intervalo regular**: defina o intervalo de tempo entre cada cálculo a partir de um horário especificado.
- **Uma vez ao dia**: o cálculo ocorre todos os dias em um horário específico a partir de um horário definido.

### Construindo consultas com embeddings

Depois de definir embeddings no seu datastore, você pode começar a [consultar seus dataclasses usando recursos baseados em IA](https://developer.4d.com/docs/API/DataClassClass#query-by-vector-similarity). Basta garantir que você use o mesmo modelo na definição do embedding e na string de consulta.

Por exemplo, supondo que:

• você definiu um atributo `4D.Vector` chamado "product_vector" no dataclass Products usando a frase: "O {name} está na categoria {category}. Ele possui estas características {features} e pode ser usado para {usage}."  
• você deseja encontrar produtos que "podem ser usados com segurança ao ar livre".

Você pode escrever:

```4d
// Retrieve the model alias from the embedding definition, configured in 4D Embedding Studio
var $settings:=cs.EmbeddingStudio.Settings.new()
var $definition:=$settings.find("Products"; "product_vector")

// Compute the vector of the query with the same model
var $result:=cs.EmbeddingStudio.StudioEmbedder.new().embed("products that can be used safely outside"; $definition)
var $vector:=$result.vector

  //search with default metric (cosine)
var $products:=ds.Products.query("product_vector > :1 order by product_vector desc"; {vector : $vector})

```

Se você usar um campo dirty, basta adicionar um critério para excluir vetores aguardando recálculo:

```4d
var $products:=ds.Products.query("product_vector > :1 and product_vector_dirty = false order by product_vector desc"; {vector : $vector})
```

## Guia da API

### Início rápido

**1. Configure seus vetores** em `Settings/embeddings.json`:

```json
{
  "batchSize": 50,
  "definitions": [
    {
      "dataclassName": "Students",
      "vectorName": "student_vector_1",
      "modelAlias": "text-embedding",
      "phrase": "Student {firstName} {lastName}, enrolled in {program}",
      "autoInvalidate": true
    }
  ]
}
```

**2. Execute o pipeline completo** (todas as definições, todos os registros):

```4d
var $p:=cs.EmbeddingStudio.Process.new()
var $r:=$p.process()

If ($r.success)
    ALERT("Atualizadas "+String($r.entitiesUpdated)+" entidades em "+String($r.duration)+" ms")
End if
```

**3. Processe uma única entity selection ao salvar** (por exemplo, em um trigger ou REST hook):

```4d
var $p:=cs.EmbeddingStudio.Process.new()
$p.processEntity($entity)
```

### Referência de classes

| Classe | Descrição |
|---|---|
| [Process](Classes/Process.md) | Orquestrador principal — ponto de entrada para todas as operações em lote e por entity selection. |
| [Scheduler](Classes/Scheduler.md) | Agendador de recálculo automatizado — tarefa em segundo plano, forçar/cancelar e status em tempo de execução. |
| [StudioEmbedder](Classes/StudioEmbedder.md) | Renderiza e embeda sob demanda usando suas definições salvas — por exemplo, para construir um vetor de consulta de busca. Nada é persistido. |
| [Settings](Classes/Settings.md) | Carrega e salva o arquivo de configuração `embeddings.json`. |
| [Definition](Classes/Definition.md) | Descreve um campo de vetor: dataclass, nome do campo, alias do modelo e template da frase. |
| [Embedder](Classes/Embedder.md) | Wrapper leve em torno da API de embeddings do AIKit com lógica de retry/backoff. |
| [EmbedderResult](Classes/EmbedderResult.md) | Wrapper tipado que normaliza respostas da API — vetores, métricas de uso, estado de rate-limit. |
| [ProcessResult](Classes/ProcessResult.md) | Retornado por toda função em lote — estatísticas e detalhamento de erros. |
| [ProcessError](Classes/ProcessError.md) | Entrada tipada em `ProcessResult.errors` — escopo, severidade, código, ref, mensagem, retryable. |
| [ProcessErrorCode](Classes/ProcessErrorCode.md) | Catálogo singleton de códigos de erro legíveis por máquina e sua severidade/retratabilidade padrão. |
| [Phrase](Classes/Phrase.md) | Motor de template `{variable}` leve usado para construir texto a partir de atributos da entity selection. |

### Veja também

Post no blog: [Vectorize your data effortlessly with 4D Embedding Studio](https://blog.4d.com/vectorize-your-data-effortlessly-with-4d-vector-studio)
