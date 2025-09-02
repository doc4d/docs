---
id: presentation
title: Apresentacao
displayed_sidebar: docs
---

#### Visualização 

4D Write Pro oferece aos usuários 4D uma ferramenta avançada de processamento de texto, totalmente integrada a sua base de dados 4D. Utilizando 4D Write Pro, pode escrever mensagens de email pré formatados e/ou cartas com imagens, uma assinatura escaneada, texto com formato e marcadores de posição para variáveis dinâmicas. Também pode criar faturas ou relatórios de forma dinâmica, incluindo formatos de texto e imagens.

As funcionalidades principais do produto são as seguintes:

* Compatibilidade 4D Write: um objeto 4D Write Pro pode abrir e converter antigos documentos 4D Write enquanto conserva a maioria de suas propriedades específicas.
* Processamento de textos: um objeto 4D Write Pro objeto alinhado em um formulário oferece funcionalidades de processamento de texto estandarte, incluindo texto e manipulação de parágrafos e de estilos, inserção de imagens, importação e exportação, e muito mais.
* Integração na base de dados:  
   * um objeto 4D Write Pro pode conter partes variáveis que são preenchidas com os dados da base, ou dados calculados por 4D.  
   * os documentos 4D Write Pro podem ser armazenados dentro dos campos da base de dados ou no disco.

**Nota de implementação:** 4D Write Pro R5 é uma *versão técnica* que não contém o conjunto completo de funcionalidades. Por favor, consulte a seção *4D Write Pro (pré versão técnica)* do manual de Atualização para una visão geral de seu estado atual de implementação.

#### Instalação e ativação 

4D Write Pro já não é um plug-in, está totalmente integrado em 4D, pelo que é mais fácil de deslocar e administrar. Não se requer nenhuma instalação adicional, pode agregar áreas 4D Write Pro em seus formulários e manipular as variáveis 4D Write Pro em suas aplicações 4D diretamente.  
  
No entanto, 4D Write Pro utiliza a mesma licença que 4D Write. Você necessita esta licença instalada em sua aplicação para ativar a funcionalidade.

**Requisitos**: em Windows, as funcionalidades de 4D Write Pro se baseiam em Direct2D. Com Windows 7 ou com as máquinas Windows Server 2008, assegure-se de que haja sido instalada a atualização de plataforma para Windows para que a versão Direct2D necessária esteja disponível.

#### Sobre este manual 

Este manual é a *Guia de Referência de 4D Write Pro*. Cobre todas as funcionalidades 4D Write Pro, incluindo a interface de usuário e os comandos de linguagem.

Tenha em conta que os objetos 4D Write Pro podem ser manipulados por comandos específicos (*Linguagem 4D Write Pro*), como também pelos comandos de outros temas 4D (*Objetos (Formulários)* e *Texto multi estilo* ), documentado no manual *Linguagem de 4D.*

## Criar uma área do 4D Write Pro

### Usando o objeto de área 4D Write Pro 

Os documentos 4D Write Pro podem mostrar e editar manualmente em um objeto formulário 4D, chamado **4D Write Pro**. Este objeto está disponível como parte da última ferramenta (Área Plug-in, Área Web, etc.) da [barra de objetos](../../FormEditor/formEditor.md#object-bar):

![](../../assets/en/WritePro/pict4101210.pt.png)

Uma área 4D Write Pro form se configura por meio das propriedades estandarte da Lista de propriedades, tais como nome do objeto e nome da variável, coordenadas, entrada, visualização e aparência, e/ou eventos.

![](../../assets/en/WritePro/pict4101242.pt.png)

A propriedade Nome da variável pode ser utilizada na linguagem como uma referência a área 4D Write Pro. Tenha em conta que a variável deve ser do tipo [objeto](../../Concepts/dt_object.md).

As propriedades "Entrada" gerenciam funcionalidades básicas para a introdução de texto:

* **Editável**: lhe permite bloquear/desbloquear a área com o propósito de permitir ou impedir sua modificação
* **Auto revisão ortográfica**: disponível para áreas 4D Write Pro
* **Menu contextual**: lhe permite ativar/desativar o menu contextual em modo Aplicação (ver a seção [Utilizar uma área 4D Write Pro](./using-a-4d-write-pro-area.md))
* **Seleção sempre visível**: se encarrega da seleção de texto como nas áreas de texto estandarte.

### Utilizando a interface 4D Write Pro

Pode criar uma área 4D Write Pro pré-configurada utilizando o objeto **4D Write Pro** que se encontra na [biblioteca de objetos](../../FormEditor/objectLibrary.md) (tema "Áreas de entrada"):

![](../../assets/en/WritePro/pict4101252.pt.png)

Esta área vem com um painel de controle para gerenciar todos os atributos da área (fonte, cor, estilo, etc.):

![](../../assets/en/WritePro/pict3254912.pt.png)

Para saber mais, consulte a seção [Área 4D Write Pro](../writeprointerface.md).