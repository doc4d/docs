---
id: imageformat
title: $imageformat
---

Defines which image format to use for retrieving images (_e.g._, `$imageformat=png`)

## Descrição

Definir o formato a utilizar para mostrar imagens. Pode utilizar um dos seguintes formatos (são suportadas extensões, tipos mime e OsType Mac):

| Tipo                    | Descrição                         |
| ----------------------- | --------------------------------- |
| "best"                  | Melhor formato com base na imagem |
| ".gif" ou "image/gif"   | Formato GIF                       |
| ".png" ou "image/png"   | Formato PNG                       |
| ".jpeg" or "image/jpeg" | Formato JPEG                      |
| ".tiff" ou "image/tiff" | Formato TIFF                      |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object `{}`.

## Exemplo

O exemplo seguinte define o formato de imagem como JPEG, independentemente do tipo real da fotografia, e passa o número de versão real enviado pelo servidor:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`
