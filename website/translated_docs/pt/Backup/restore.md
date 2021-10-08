---
id: restaurar
title: Restaurar
---

4D lhe permite restaurar conjuntos inteiros de dados de aplicações no caso de que se apresente um incidente, independentemente da causa do mesmo. Podem ocorrer dois tipos principais de incidentes:

- A parada inesperada de uma aplicação enquanto estiver em uso. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. Nesse caso, dependendo do estado atual da cache de dados no momento do incidente, a restauração da aplicação pode requerer diferentes operações:
    - Se a cache estiver vazia, a aplicação abre normalmente. Quaisquer mudanças feitas na aplicação foram registradas. Este caso não exige nenhuma operação particular
    - Se a cache conter operações, o arquivo de dados está intacto mas exige integrar o arquivo de histórico atual.
    - Se a cache estiver no processo de ser escrita, o arquivo de dados está provavelmente danificado. O último backup deve ser restaurado e o arquivo de histórico atual deve ser integrado.

- A perda dos arquivos de aplicação. Esse incidente pode ocorrer por causa de setores defeituosos no disco que contenham a aplicação, por causa de vírus, erro de manipulação, etc. O último backup deve ser restaurado e o arquivo de histórico atual deve ser integrado. Para descobrir se uma aplicação foi danificada em um incidente, relance a aplicação com 4D. O programa realiza um autodiagnóstico e detalha as operações de restauração necessárias. Em modo automático, essas operações são realizadas diretamente sem precisar de ajuda da parte do usuário. Se uma estratégia de backup foi colocada em prática, as ferramentas de restauração de 4D permitem que recuperem a aplicação (na maioria dos casos) no mesmo estado em que estava antes do incidente.

> 4D pode lançar procedimentos automaticamente para recuperar aplicações depois de incidentes. Esses mecanismos são gerenciados usando duas opções disponíveis na página **Backup/Backup & Restore** das Propriedades. Para saber mais, veja o parágrafo [Automatic Restore](settings.md#automatic-restore).  
> Se o incidente for resultado de uma operação inapropriada realizada nos dados (apagar um registro, por exemplo), pode tentar reparar o arquivo de dados usando a função "rollback" no arquivo de log. Essa função está disponível na página [Rollback](MSC/rollback.md) do MSC.


## Restaurar manualmente o backup (diálogo padrão)

Pode restaurar manualmente os conteúdos de um arquivo gerado pelo módulo de cópia de segurança. Uma restauração manual pode ser necessária, por exemplo, para restaurar os conteúdos completos de um arquivo (arquivos projetos e arquivos anexos) ou, para o propósito de realizar pesquisas entre os arquivos. A restauração manual pode também ser realizada junto com a integração do arquivo de histórico atual.

A restauração manual de backups pode ser realizada via a caixa de diálogo de Abertura de documento ou através da página [Restore](MSC/restore) do MSC. A restauração através do MSC oferece mais opções e permite pré-visualizar os conteúdos dos arquivos. Por outro lado, só podem ser restaurados os arquivos associados à aplicação aberta.

Para restaurar a aplicação manualmente vai uma caixa de diálogo padrão:

1. Choose **Restore...** in the 4D application **File** menu. It is not mandatory that an application project be open. OR Execute the `RESTORE` command from a 4D method. A standard Open file dialog box appears.
2. Select a backup file (.4bk) or a log backup file (.4bl) to be restored and click **Open**. A dialog box appears, which allows you to specify the location where files will be restored. By default, 4D restores the files in a folder named *Archivename* (no extension) located next to the archive. You can display the path:

![](assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button. 4D extracts all backup files from the specified location. If the current log file or a log backup file with the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not present in the data file, the program asks you if you want to integrate these operations. Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application. If the restore and integration were carried out correctly, 4D displays a dialog box indicating that the operation was successful.
5. Click **OK**.

The destination folder is displayed. During the restore, 4D places all backup files in this folder, regardless of the position of the original files on the disk when the backup starts. This way your files will be easier to find.

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.


## Manually restoring a backup (MSC)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).


## Manually integrating the log

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](assets/en/Backup/backup08.png)

> In order for this mechanism to work, 4D must be able to access the log file in its current location.

You can choose whether or not to integrate the current log file. Not integrating the current log file allows you to avoid reproducing errors made in the data.