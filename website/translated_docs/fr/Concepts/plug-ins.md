---
id: plug-ins
title: Plug-ins
---

En développant une application 4D, vous découvrirez de nombreuses fonctionnalités que vous n'aviez pas remarquées au début. Vous pouvez même étendre la version standard de 4D en ajoutant des **plug-ins** à votre environnement de développement 4D.

## Qu'est-ce qu'un plug-in et à quoi sert-il ?

A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. Il ajoute des fonctionnalités à 4D et augmente ainsi sa capacité. A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes.

## Where to find plug-ins?

Multiple plug-ins have already been written by the 4D community. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).


## Installer un plug-in

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](Project/architecture#plugins).

Les plug-ins et les composants sont chargés par 4D lors du lancement de l’application. Vous devez donc quitter votre application 4D avant d’effectuer vos copies de fichiers ou dossiers. If a plug-in requires a specific license for use, it will be loaded but not available for use.


## Using plug-ins

Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the **Plug-ins** page of the Explorer. 


