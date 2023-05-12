---
id: genInfo
title: Getting Server Information
---

You can get several information from the REST server:

- the exposed datastores and their attributes
- the REST server cache contents, including user sessions.

## Catalog

Use the [`$catalog`]($catalog.md), [`$catalog/{dataClass}`]($catalog.md#catalogdataclass), or [`$catalog/$all`]($catalog.md#catalogall) parameters to get the list of [exposed dataclasses and their attributes](configuration.md#exposing-tables-and-fields).

To get the collection of all exposed dataclasses along with their attributes:

`GET /rest/$catalog/$all`


## Cache info

Use the [`$info`]($info.md) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions.

## queryPath and queryPlan

Entity selections that are generated through queries can have the following two properties: `queryPlan` and `queryPath`. To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

Por exemplo:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:
- **queryPlan**: object containing the detailed description of the query just before it was executed (i.e., the planned query).
- **queryPath**: object containing the detailed description of the query as it was actually performed.

The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. You may find it useful to analyze this information while developing your application. Geralmente a descrição do plano de pesquisa e sua rota são idênticas mas podem ser diferentes porque 4D pode implementar otimizações dinâmicas quando uma pesquisa for executada para melhorar a performance. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais rápido. Esse caso particular pode acontecer quando o número de entidades sendo pesquisada é baixo.