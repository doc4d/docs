---
id: upload
title: '$upload'
---


Devuelve un ID del archivo subido al servidor

## Descripción

Publique esta petición cuando tenga un archivo que quiera subir al Servidor. Si tiene una imagen, pase `$rawPict=true`. Para todos los demás archivos, se pasa `$binary=true`.

Puede modificar el tiempo de espera, que por defecto es de 120 segundos, pasando un valor al parámetro `$timeout`.

## Escenario de carga

Imagine you want to upload an image to update the picture attribute of an entity.

To upload an image (or any binary file), you must first select the file from the client application. The file itlself must be passed in the **body** of the request.

Then, you upload the selected image to 4D Server using a request such as:

 `POST  /rest/$upload?$rawPict=true`

As a result, the server returns an ID that identifies the file:

**Respuesta**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

Afterwards, you use this ID to add it to an attribute using [`$method=update`]($method.md#methodupdate) to add the image to an entity. The request looks like:

 `POST  /rest/Employee/?$method=update`

**Datos POST**:

```
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
```

**Respuesta**:

Se devuelve la entidad modificada:

```
{
    "__KEY": "12", 
    "__STAMP": 5, 
    "uri": "http://127.0.0.1:8081/rest/Employee(12)", 
    "ID": 12, 
    "firstName": "John", 
    "firstName": "Smith",
    "photo":
    {
        "__deferred":
        {
            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",
            "image": true
        }
    },}
```

## Ejemplo con un cliente 4D HTTP

El siguiente ejemplo muestra cómo subir un archivo *.pdf* al servidor utilizando el cliente 4D HTTP.

```4d
var $params : Text
var $response : Object
var $result : Integer
var $blob : Blob


ARRAY TEXT($headerNames; 1)
ARRAY TEXT($headerValues; 1)

$url:="localhost:80/rest/$upload?$binary=true" //preparar une petición REST

$headerNames{1}:="Content-Type"
$headerValues{1}:="application/octet-stream"

DOCUMENT TO BLOB("c:\\invoices\\inv003.pdf"; $blob) //Cargar el binario 

 //Ejecuta la primera petición POST para subir el archivo
$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)

If ($result=200) 
    var $data : Object
    $data:=New object
    $data.__KEY:="3"
    $data.__STAMP:="3"
    $data.pdf:=New object("ID"; String($response.ID)) 

    $url:="localhost:80/rest/Invoices?$method=update" //segunda petición para actualizar la entidad

    $headerNames{1}:="Content-Type"
    $headerValues{1}:="application/json"

    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)
Else
    ALERT(String($result)+" Error")
End if
```
