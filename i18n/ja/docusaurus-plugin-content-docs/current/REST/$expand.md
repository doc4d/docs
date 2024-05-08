---
id: expand
title: $expand
---

画像属性に保存されているピクチャーを展開します (_例_: `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
または <br/>
保存するために BLOB属性を展開します。

> **互換性に関する注記**: 互換性のため、$expand はリレーション属性を展開するのに使用できます (_例_: `Company(1)?$expand=staff` または `Employee/?$filter="firstName BEGIN a"&$expand=employer`)。 It is however recommended to use [`$attributes`]($attributes.md) for this feature.

## 画像属性の表示

画像属性の全体像を表示させるには、次のように書きます:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## BLOB属性のディスク保存

データクラスに保存されている BLOB をディスクに保存するには、$binary に "true" を渡すことで、次のように書けます:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
