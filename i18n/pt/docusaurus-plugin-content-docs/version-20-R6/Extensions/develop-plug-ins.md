---
id: develop-plug-ins
title: Plug-ins de desenvolvimento
---

## Porquê a necessidade de um plug-in?

Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure.

It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.

The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. Os 4D Plug-ins multiplicam o poder e a produtividade da aplicação ou do usuário.

## Por que a necessidade de um plug-in?

Um plug-in é um pedaço de código que 4D lança no início. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade.

Normalmente, um plug-in faz coisas que:

- 4D não pode fazer (ou seja, tecnologia de plataforma específica),
- será muito difícil de escrever usando apenas 4D,
- só estão disponíveis como Ponto de Entrada Plug-in

Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

- Uma **rotina de plug-ins** é uma rotina escrita em linguagem nativa (normalmente C ou C++) que causa uma ação.
- Uma **área externa** é uma parte de um formulário que pode exibir quase tudo e interagir com o usuário quando necessário.
- Um **processo externo** é um processo que é executado sozinho, geralmente em um loop, fazendo quase tudo o que deseja. Todos os códigos de processo pertencem ao plug-in, 4D está simplesmente presente para receber/enviar eventos para o processo.

### Nota importante

Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e áreas. Não há praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in é uma peça de código de "amostra". É o plug-in que funciona dentro do 4D, e não o contrário. Como peça de código, é o anfitrião do 4D; não é uma aplicação isolada. Partilha o tempo e a memória da CPU com 4D e outros plug-ins, portanto, deve ser um código bem educado, utilizando apenas o que é necessário para rodar. Por exemplo, em loops longos, um plug-in deve chamar `PA_Yield()` para dar tempo ao agendador 4D, a menos que sua tarefa seja crítica para ele e para o aplicativo.

## Como criar um plug-in?

4D fornece no GitHub um [**plug-in SDK**] (https://github.com/4d/4D-Plugin-SDK) de código aberto, contendo o 4D Plugin API e o 4D Plugin Wizard:

- o [**4D Plugin API**](https://github. om/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito em C Adicione mais de 400 funções que ajudam você a criar facilmente seus próprios plug-ins para adicionar novas funcionalidades ao seu aplicativo 4D. As funções API Plug-in 4D gerem todas as interacções entre a aplicação 4D e o seu plug-in.
- O [**4D Plugin Wizard**] (https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) é uma ferramenta essencial que simplifica a tarefa de desenvolver plug-ins 4D. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código.

## Partilhar plug-ins

Incentivamos você a apoiar a comunidade de desenvolvedores 4D compartilhando seus plug-ins, de preferência na [plataforma GitHub] (https://github.com/topics/4d-plugin). Recomendamos que você use o tópico **`4d-plugin`** para ser referenciado corretamente.
