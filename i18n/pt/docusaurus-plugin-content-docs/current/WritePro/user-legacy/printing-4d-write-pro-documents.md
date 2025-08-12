---
id: printing-4d-write-pro-documents
title: Imprimir documentos 4D Write Pro
displayed_sidebar: docs
---

#### 

Os documentos 4D Write Pro podem ser impressos de duas formas

* como partes de formulários 4D
* como documentos independentes

#### Imprimindo documentos 

Imprimir uma área 4D Write Pro embebida em um formulário 4D é respaldada pelo sistema

Pode imprimir objetos 4D Write Pro incluidos em qualquer tipo de formulário 4D (projeto, tabela, input ou output) usando comandos de impressão comuns de 4D tais como [PRINT SELECTION](../../commands/print-selection) ou [PRINT RECORD](../../commands/print-record). 

A opção padronizada *Impressão tamanho variável* também é compatível (\*) com áreas 4D Write Pro, pérmitindo que maneje tamanho durante impressão. Quando esta opção for marcada, a margem (interior ou exterior) e margem superior são aplicadas apenas para a primeira página. As margens (interior e exterior) e a margem inferior são aplicadas apenas na última página. Propriedades de paginação do documento são ignoradas: controle de linhas viúvas e órfãs é desativado e quebras de página não são aplicadas (estas propriedades são usadas apenas para renderização na tela ou impressão do documento página por página. Quando a opção **Print Variable Frame** for selecionada, apenas objetos localizados acima da área de formulário serão impressos. Para saber mais, veja "*Impressão tamanho variável*" no manual Design Reference.

(\*) Os comandos [Print object](../../commands/print-object) e [Print form](../../commands/print-form) não são compatíveis com esta opção. 

##### Modo de vista para impressão 

Qualquer que seja o modo de Vista para a área 4D Write Pro (ver *Configurar propriedades de Vista*), sempre será impresso no modo Embebido quanod usar um comando de impressão 4D tal como [Print form](../../commands/print-form). Neste caso, as configurações de aparência abaixo não são levadas em conta para os objetos de formulário 4D Write Pro: modo de vista Página (sempre "Embebido"), Mostrar cabeçalho, Mostra rodapé, mostrar borda da página (sempre "Não"), Mostrar caracteres ocultos (sempre "Não").

##### Exemplo 

O exemplo abaixo mostra o efeito da opção **Print Variable Frame** numa área 4D Write Pro area embebida no formulário de output padrão. O seguinte código é executado:

```4d
 ALL RECORDS([Movies])
 ORDER BY([Movies]Title)
 PRINT SELECTION([Movies])
```

* Com a opção Print Variable Frame **desmarcada** (off), terá o resultado abaixo:  
![](../../assets/en/WritePro/pict2646292.en.png)
* Com a opção Print Variable Frame **marcada** (on), terá o resultado abaixo:  
![](../../assets/en/WritePro/pict2646294.en.png)  
*(sample text source: wikipedia)*

#### Imprimir documentos independentes 

A partir de 4D v15 R5, 4D Write Pro inclui novas funcionalidades de impressão. Utilizando estas funcionalidades padrão, poderá imprimir documentos 4D Write Pro independentes, assim como também controlar as opções de impressão padrão tais como formato, orientação ou números de página.

##### Novos comandos 4D Write Pro 

Basicamente, dois comandos manejam a função de impressão 4D Write Pro: [WP PRINT](../commands/wp-print) e [WP USE PAGE SETUP](../commands/wp-use-page-setup).

* [WP PRINT](../commands/wp-print) inicia um trabalho de impressão0 para o documento 4D Write Pro ou agrega o documento ao trabalho de impressão atual.
* [WP USE PAGE SETUP](../commands/wp-use-page-setup) modifica a configuração de página da impressora atual dos atributos de documento 4D Write Pro para o tamanho e orientação.

**Notas** 

* Nas máquinas com Windows 7 ou Windows Server 2008 R2, tenha certeza de que a *atualização de plataforma para Windows 7* tenha sido instalado de maneira a que as funcionalidades de impressão sejam compatíveis.

##### Comandos 4D atualizados 

Os comandos abaixo 4D suportam as funcionalidades de impressão 4D Write Pro:

* [SET PRINT OPTION](../../commands/set-print-option) e [GET PRINT OPTION](../../commands/get-print-option): todas as opções são suportadas para documentos 4D Write Pro impressos por [WP PRINT](../commands/wp-print). Para Paper option e Orientation option, é mais eficiente chamar a [WP USE PAGE SETUP](../commands/wp-use-page-setup) para sincronizar facilmente estes atributos com a configuração do documento 4D Write Pro. Page range option (15) lhe permite definir a faixa de página a imprimir.
* [PRINT SETTINGS](../../commands/print-settings): permite estabelecer os ajustes de impressão para a impressora atual; se [WP PRINT](../commands/wp-print) for chamado depois, será utilizada a configuração de impressora modificada se foram modificados por diálogos de configuração de impressão (com exceção das márgens de diálogo de configuração de página que sempre se baseiam no documento 4D Write Pro).
* [OPEN PRINTING JOB](../../commands/open-printing-job) e [CLOSE PRINTING JOB](../../commands/close-printing-job): [WP PRINT](../commands/wp-print) pode ser chamada entre estes comandos para inserir um ou mais documentos 4D Write Pro em um trabalho de impressão.