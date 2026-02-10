---
id: ordering
title: Ordering collections and objects
---

[Collections](./dt_collection.md) and [objects](./dt_object.md) such as [entity selections](../ORDA/dsMapping.md#entity-selection) can contain elements and attributes of different [data types](./data-types.md), either scalar or complex. When sorting heterogeneous contents in collections or objects, 4D applies some specific rules to return **stable** results.


## Ordering functions

Multiple 4D language features reorder collection elements and object attributes or are based upon their order to provide results:

- ordering functions on collections (`collection.sort()`, `collection.multiSort()`, `collection.orderBy()`) and on entity selection objects (`entitySelection.orderBy()`),
- query functions that can return an ordered result (`entitySelection.query()`, `dataClass.query()` with the `order by attributePath` keyword),
- statistic functions that rely on an ordering (`collection.max()`, `collection.min()` and `entitySelection.max()`,`entitySelection.min()`)


## Basics rules

When a collection or an entity selection attribute containing elements of different types is sorted, the following sequence is applied:

1. Contents are **grouped by type** 
2. Inside groups, contents are sorted using internal comparison rules. Default order is always "ascending".  

Types are returned in the following order and with the following comparison principles:

|Group order|Type|Internal comparison rules|
|---|----|---|
|1|null|internal order (stable)|
|2|booleans|false `<` true|
|3|strings|by lexicographic order ("a" `<` "ab" `<` "b")|
|4|numbers|algebric order|
|5|objects|internal order (stable)|
|6|collections|internal order (stable)|
|7|dates|oldest to most recent (!1990-01-01! `<` !2000-01-01!)|

