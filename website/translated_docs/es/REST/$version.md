---
id: version
title: '$version'
---

Número de versión de la imagen

## Descripción

`$version` is the image's version number returned by the server. The version number, which is sent by the server, works around the browser's cache so that you are sure to retrieve the correct image.

The value of the image's version parameter is modified by the server.

## Ejemplo

El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el número de versión real enviado por el servidor:

 `GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`