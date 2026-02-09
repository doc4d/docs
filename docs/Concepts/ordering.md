---
id: ordering
title: Ordering collections and objects
---

[Collections](./dt_collection.md) and [objects](./dt_object.md) such as [entity selections](../ORDA/dsMapping.md#entity-selection) can contain elements and attributes of different [data types](./data-types.md), either scalar or complex. When sorting heterogeneous contents in collections or objects, 4D applies some specific rules to get stable results.


## Ordering functions

Multiple 4D language features reorder collection elements and object attributes or are based upon their order to provide results:

- ordering functions on collections (`collection.sort()`, `collection.multiSort()`, `collection.orderBy()`) and on entity selection objects (`entitySelection.orderBy()`),
- query functions that can return an ordered result (`entitySelection.query()`, `dataClass.query()` with the `order by attributePath` keyword),
- statistic functions that rely on an ordering (`collection.max()`, `collection.min()` and `entitySelection.max()`,`entitySelection.min()`)


## Basics rules

When a collection or an entity selection attribute containing elements of different types is sorted, contents are first **grouped by type** and **sorted afterwards**. 

Types are returned in the following order and with the following comparison principles:

|Rank|Type|Comparison principles|
|---|----|---|
|1|null||
|2|booleans|false `<` true|
|3|strings|by lexicographic order: "a" < "ab" < "b"|
|4|numbers|algebric order|
|5|objects|no specific order|
|6|collections|no specific order|
|7|dates||
1. null
2.  (false `<` true)
3. strings ()
4. numbers 
5. objects
6. collections
7. dates

