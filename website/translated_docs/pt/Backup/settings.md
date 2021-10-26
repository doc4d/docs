---
id: settings
title: Parâmetros da cópia de segurança
---

Os parâmetros da cópia de segurança são definidas através de três páginas na caixa de diálogo Propriedades. Pode estabelecer:

- a periodicidade das cópias de segurança automáticas
- os arquivos a incluir em cada backup
- as funcionalidades avançadas que permitem executar tarefas automáticas

> As propriedades definidas nesta caixa de diálogo são escritas no arquivo *Backup.4DSettings*, guardado na pasta [Settings](Project/architecture.md#settings-folder).

## Backups periódicos

Pode automatizar a cópia de segurança das aplicações abertas com 4D ou 4D Server (mesmo quando não houver máquinas cliente conectadas). Isso implica definir uma frequência de cópia de segurança (horas, dias, semanas ou meses): para cada sessão, 4D automaticamente inicia uma cópia de segurança usando as configurações atuais de backup.

Se essa aplicação não for lançada no momento teórico do backup, na próxima vez que 4D for lançado, considera o backup como tendo falhado e continua como estabelecido nas Propriedades (ver [Manejo de problemas da cópia de segurança](backup.md#handling-backup-issues)).

Os parâmetros da cópia de segurança programador são definidos na página **Backup/Periodicidade** das Configurações de estrutura:

![](assets/en/Backup/backup02.png)

As opções encontradas nessa aba permitem estabelecer e configurar as cópias de segurança automáticas programadas da aplicação. Pode escolher uma configuração rápida padrão ou pode personalizá-la completamente. Aparecem várias opções em função da escolha realizada no menu **Cópia de segurança automática**:

- **Nunca**: A função de cópia de segurança está inativa.
- **Cada hora**: programa uma cópia de segurança automática a cada hora, a partir da hora seguinte.
- **Cada dia**: programa uma cópia de segurança automática cada dia. Pode então digitar a hora quando o backup deve começar.
- **Todas as semanas**: programa uma cópia de segurança automática a cada semana. Duas áreas de entrada adicionais lhe permitem indicar o dia e a hora em que deve começar a cópia de segurança.
- **Todos os meses**: programa uma cópia de segurança todos os meses. Duas áreas de entrada adicionais lhe permitem indicar o dia do mês e a hora em que deve começar a cópia de segurança.
- **Personalizado**: serve para configurar as cópias de segurança automáticas "sob medida". Quando selecionar esta opção, várias áreas de entradas aparecem:
    + **Cada X hora(s)**: permite programar as cópias de segurança com frequência horária. Pode digitar um valor entre 1 e 24.
    - **Cada X dia(s) às x**: permite programar as copias de segurança com frequência diária. Por exemplo, introduza 1 se quiser realizar uma cópia de segurança diária. Quando esta opção estiver marcada, deve digitar a hora quando o backup deve começar.
    - **Cada X semana(s) às x**: permite programar as copias de segurança semanalmente. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa opção estiver marcada, deve digitar o dia da semana e a hora em que quer começar o backup. Pode selecionar vários dias da semana se quiser. Por exemplo. pode usar essa opção para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas.
    - **Cada X mes(es), X dia às x**: Permite programar cópias de segurança mensalmente. Digite 1 se quiser realizar uma cópia de segurança mensal. Quando essa opção estiver marcada, tem que indicar o dia do mês e a hora em que o backup deve começar.

> As mudanças de hora padrão para hora de verão podem afetar temporariamente ao programador automático e ativar a próxima cópia de segurança com uma diferença de uma hora. Isso acontece só uma vez e os próximos backups rodam na hora prevista.


## Configuração

A página Cópia de segurança| Configuração das propriedades das Propriedades permite determinar os arquivos de cópia de segurança e sua localização, assim como a do arquivo de histórico. Esses parâmetros são específicas para cada aplicação aberta por 4D ou 4D Server.

![](assets/en/Backup/backup03.png)

> **4D Server:** estes parâmetros só podem ser configurados desde a máquina 4D Server.

### Conteúdo
Essa área lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup.

- **Data**: arquivo de dados da Aplicação. Quando essa opção estiver marcada, os elementos abaixo fazem backup automaticamente ao mesmo tempo que os dados:
    - the current log file of the application (if it exists),
    - the full `Settings` folder located [next to the data file](Project/architecture.md#settings-folder) (if it exists), i.e. the *user settings for data*.
- **Structure**: Application project folders and files. In cases where projects are compiled, this option allows you to backup the .4dz file. When this option is checked, the full `Settings` folder located [at the same level as the Project folder](Project/architecture.md#settings-folder-1), i.e. the *user settings*, is automatically backed up.
- **User Structure File (only for binary database)**: *deprecated feature*
- **Attachments**: This area allows you to specify a set of files and/or folders to be backed up at the same time as the application. These files can be of any type (documents or plug-in templates, labels, reports, pictures, etc.). You can set either individual files or folders whose contents will be fully backed up. Each attached element is listed with its full access path in the “Attachments” area.
    - **Delete**: Removes the selected file from the list of attached files.
    - **Add folder...**: Displays a dialog box that allows selecting a folder to add to the backup. In the case of a restore, the folder will be recovered with its internal structure. You can select any folder or volume connected to the machine, with the exception of the folder containing the application files.
    - **Add file...**: Displays a dialog box that allows you to select a file to add to the backup.


### Backup File Destination Folder

This area lets you view and change the location where backup files as well as log backup files (where applicable) will be stored.

To view the location of the files, click in the area in order to display their pathname as a pop-up menu.

To modify the location where these files are stored, click the **...** button. A selection dialog box appears, which allows you to select a folder or disk where the backups will be placed. The "Used Space" and "Free Space" areas are updated automatically and indicate the remaining space on the disk of the selected folder.

### Log management

The **Use Log** option, when checked, indicates that the application uses a log file. Its pathname is specified below the option. When this option is checked, it is not possible to open the application without a log file.

By default, any project created with 4D uses a log file (option **Use Log File** checked in the **General Page** of the **Preferences**). O arquivo de histórico é chamado *data.journal* e está na pasta Data.

> Activating a new log file requires the data of the application to be backed up beforehand. When you check this option, a warning message informs you that a backup is necessary. The creation of the log file is postponed and it will actually be created only after the next backup of the application.


## Backup & Restore

Modifying backup and restore options is optional. Their default values correspond to a standard use of the function.

![](assets/en/Backup/backup04.png)

### General settings

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. This feature works as follows: Once the current backup is complete, 4D deletes the oldest archive if it is found in the same location as the archive being backed up and has the same name (you can request that the oldest archive be deleted before the backup in order to save space). If, for example, the number of sets is set to 3, the first three backups create the archives MyBase-0001, MyBase-0002, and MyBase-0003 respectively. During the fourth backup, the archive MyBase-0004 is created and MyBase-0001 is deleted. By default, the mechanism for deleting sets is enabled and 4D keeps 3 backup sets. To disable the mechanism, simply deselect the option.
> This parameter concerns both application and log file backups.

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. No error is generated; however the backup journal notes that the backup has been postponed. This option also allows saving machine time for the backup of applications principally used for viewing purposes. Please note that enabling this option does not take any modifications made to the project files or attached files into account.
> This parameter concerns both application and log file backups.

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). In order for this mechanism to work, the oldest archive must not have been renamed or moved.

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). When a backup cannot be performed, 4D lets you carry out a new attempt.
    -  **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. Equivale a anular a cópia de segurança que falhou. Um erro é gerado.
    - **Tentar novamente depois de X segundo(s), minuto(s) ou hora(s)**: Quando essa opção for marcada, um nova tentativa de backup é executada depois do período de espera. Este mecanismo permite antecipar certas circunstancias que possam bloquear a cópia de segurança. Pode estabelecer um período de espera em segundos, minutos ou horas utilizando o menu correspondente. Se a nova tentativa também falhar, um erro é gerado e a falha é notada na área de status do último backup e no arquivo de histórico de backup.
    - **Cancelar a operação depois de X intentos**: este parâmetro se utiliza para definir o número máximo de tentativas de cópia de segurança que falharam. Se o backup não tiver sido realizado com sucesso depois do número máximo de tentativas estabelecido tiver sido alcançado, ele será cancelado e o erro 1401 é gerado ("Número máximo de tentativas de backup foi alcançado; backup automático foi desativado temporariamente"). Nesse caso, não se fará mais backups automáticos até que a aplicação seja reiniciada ou um backup manual se realize com sucesso. Este parâmetro é útil para evitar um caso em que um problema prolongado (que exija a intervenção humana) que impedisse a realização de uma cópia de segurança levasse a aplicação a tentar repetidamente a cópia de segurança, comprometendo seu rendimento geral. Como padrão, esse parâmetro não é marcado.

> 4D considera um backup como tendo falhado se a aplicação não tiver sido lançada na hora que estava programada o backup automático.

### Arquivo
Essas opções se aplicam aos arquivos de cópia de segurança principais e aos arquivos de cópia de segurança do histórico.

- **Tamanho do segmento (Mb)** 4D lhe permite segmentar os arquivos, ou seja, cortá-los em tamanhos mais pequenos. Esse funcionamento permite, por exemplo, armazenar uma cópia de segurança em vários discos diferentes (DVD, dispositivos usb pendrive, etc). Durante a restauração, 4D vai fusionar automaticamente os segmentos. Cada segmento é chamado MyApplication[xxxx-yyyy].4BK, onde xxxx é o número de backup e yyyy for o número de segmento. Por exemplo, os três segmentos da cópia de segurança MyApplication se chamam MyApplication[0006-0001].4BK, MyApplication[0006-0002].4BK e MyApplication[0006-0003].4BK. O menu **Tamanho do segmento** é um combo box que permite estabelecer o tamanho em MB de cada segmento da cópia de segurança. Pode escolher um dos tamanhos pré-estabelecidos ou digitar um tamanho específico entre 0 e 2048. Se passar 0, não se produz nenhuma segmentação (isso equivale a passar **Nenhum**).

- **Taxa de compressão** Por padrão, 4D comprime as cópias de segurança para ajudar a poupar espaço no disco. Entretanto, a fase de compressão de arquivo pode retardar o processo de backup quando lidar com grandes volumes de dados. A opção **Compression Rate** permite ajustar a compressão de arquivo:
    - **Nenhum:** Não se aplica compressão de arquivos. O backup é mais rápido, mas os arquivos são bem maiores.
    - **Rápido** (padrão): Essa opção é um compromisso entre a velocidade de backup e tamanho de arquivo.
    - **Compactar** : a taxa máxima de compressão é aplicada aos arquivos. Os arquivos ocupam o mínimo espaço possível no disco, mas o backup é mais lento.

- **Taxa de Entrelaçamento e de Redundância** 4D gera arquivos usando algoritmos específicos baseados em mecanismos de otimização (interlacing) e segurança (redundância). Pode estabelecer esses mecanismos de acordo com suas necessidades. Os menus contém para essas opções as taxas **Baixo**, **Médio**, **Alto** e **Nenhum** (padrão).
    - **Taxa de Entrelaçamento**: O Interlacing consiste de armazenar dados em setores não adjacentes para limitar riscos no caso de danos de setor. Quanto maior a taxa, maior a segurança; entretanto, o processamento de dados usa mais memória.
    - **Taxa de redundância**: Redundância permite a segurança de dados  em arquivos repetindo a mesma informação várias vezes. Quanto maior a taxa de redundância, melhor a segurança, mas o armazenamento é mais lento e o tamanho dos arquivos aumenta.


### Restauração automática

- **Restaura o último backup se o banco de dados é danificado**: Quando essa opção for marcada, o programa automaticamente inicia a restauração dos arquivos de dados do último backup válido da aplicação, se uma anomalia for detectada (arquivo corrupto, por exemplo) durante o lançamento da aplicação. Nenhuma intervenção do usuário é necessária, mas a operação é gravada no diário da cópia de segurança.

- **Integrar o último arquivo de histórico se o banco de dados estiver incompleto**: Quando essa opção for marcada, o programa integra automaticamente o arquivo de histórico quando abrir ou restaurar a aplicação.
    - Quando abrir uma aplicação, o arquivo de histórico atual é integrado automaticamente se 4D detectar que há operações armazenadas no arquivo de log que não estejam presentes nos dados. Esta situação se produz, por exemplo, se acontecer uma falta de energia quando acontecerem operações no cache de dados que ainda não foram escritos no disco.
    - Quando restaurar uma aplicação, se o arquivo atual de histórico, ou se um arquivo de backup de histórico tiverem o mesmo número que um arquivo de backup e estiverem armazenados na mesma pasta, 4D vai examinar seu conteúdo. Se conter operações não encontradas no arquivo de dados, o programa automaticamente as integra.

O usuário não vê uma caixa de diálogo, a operação é automática. O objetivo é fazer com que seja tão fácil quanto possível. A operação é registrada no diário de cópias de backup.

> No caso de uma restauração automática, só são restaurados os elementos abaixo: - Arquivo .4DD - arquivo .4DIndx - Arquivo .4DSyncData - Arquivo .4DSyncHeader - Pasta de dados externos
> 
> Se quiser estabelecer os arquivos anexados ou os arquivos de projeto, deve realizar uma [restauração manual](restore.md#manually-restoring-a-backup-standard-dialog).
