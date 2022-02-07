---
id: general
title: Page Général
---

La page Général contient des options permettant de configurer les paramètres génériques du projet 4D.

## Développeur

Cette zone comporte l'option **Afficher la barre d'outils**. Lorsqu'elle est cochée, la barre d'outils 4D est affichée dans l'environnement de Développement.

## Général

Cette zone vous permet de personnaliser diverses options relatives au démarrage et au fonctionnement du projet.

### Mode de démarrage

Ce menu permet de sélectionner le mode dans lequel vous souhaitez que la base soit ouverte par défaut : **Développement** ou **Application**. A moins que vous ne le spécifiiez, 4D s'ouvre par défaut en mode Développement s’il n’y a pas de mots de passe en contrôlant l’accès.


## Component

This area allows [component developers](../Extensions/develop-components.md) to configure how their component classes and functions will be exposed in the 4D method editor once the component is installed.

### Component namespace in the class store

Use this area to declare a namespace for the component classes and functions in the code on host projects. See [Declaring the component namespace](../Extensions/develop-components.md#declaring-the-component-namespace).

### Generate syntax file for code completion when compiled

When you check this option, a syntax file (JSON format) is automatically created during the compilation phase. See [Code completion for compiled components](../Extensions/develop-components.md#code-completion-for-compiled-components). 
