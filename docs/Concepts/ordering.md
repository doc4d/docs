---
id: ordering
title: Ordering collections and objects
---

To sort a series of data, 4D compares each value with the others and determines whether it is greater than or less than based on [internal criteria](#basics-rules). This principle is easy to understand and use when all data is of the same [data type](./data-types.md). 

However, [collections](./dt_collection.md) and [objects](./dt_object.md) such as [entity selections](../ORDA/dsMapping.md#entity-selection) can contain elements and attributes of different data types, either scalar (text, numbers...) or complex, like objects. When ordering a collection or an object that contains heterogeneous values, 4D applies some specific rules. 


## Ordering functions

Multiple 4D language features order collection elements and object attributes or are based upon their order to provide results:

- ordering functions on collections (`collection.multiSort()`, `collection.orderBy()`, `collection.sort()`) and on entity selection objects (`entitySelection.orderBy()`),
- query functions that can return an ordered result (`entitySelection.query()`, `dataClass.query()` with the `order by attributePath` keyword),
- statistic functions that rely on an ordering (`collection.max()`, `collection.min()` and `entitySelection.max()`,`entitySelection.min()`)


## Ordering rules

When a collection or an entity selection attribute containing elements of different types is sorted, the following sequence is applied:

1. Contents are **grouped by type** 
2. Inside groups, contents are sorted using internal comparison rules. Default order is always "ascending".  

Types are returned in the following order and are sorted upon the following comparison principles in ascending order (default):

|Group rank|Type|Also includes type(s)|Internal comparison rules|
|---|----|---|---|
|1|null|pointers (nil only for collections)|no specific order|
|2|booleans||false `<` true|
|3|strings||by lexicographical order ("a" `<` "ab" `<` "b")|
|4|numbers|time (converted to number in ms or s depending on the `Time inside objects` database parameter) |standard algebric order|
|5|objects|blobs, pictures, not-nil pointers (collections)|internal order (stable for collection functions) |
|6|collections||internal order (stable for collection functions)|
|7|dates||oldest to most recent (!1990-01-01! `<` !2000-01-01!)|

### Special number values

When placed in a collection, the values `+INF`, `-INF`, and `NaN` are sorted in the following way `NaN < -INF < finite values < +INF`.

### Stable order in collections

Collection ordering functions (see above) produce a **stable** order for complex types. It means that successive calls to `collection.orderBy()` for example will produce on the same collection the same ordering regarding data of type object or collection.

Other features do not guarantee stable order when sorting with internal order. 

