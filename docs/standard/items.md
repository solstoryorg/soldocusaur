---
sidebar_position: 2
---

# Overview

```
{
  "verified": {
    "itemRaw": text (json of item, see below),
    "itemHash": hex,
    "nextHash": [0-255 * 32],
    "timestamp": unix timestamp (seconds from epoch)
  },
  "hash": hex,
  "next": {
    "objId": [0-255 * 32],
    "accessType": {
      <access type>: {
      }
    }
  }
}
```

**item (inside item raw)**
```
{
    "type": ITEM|CORRECTION,
    ref?,
    "display"?: {
      img,
      label,
      long_description,
      help_text,
    },
    "data"
}
```

- `verified` this section contains the information that can be verified using the solstory architecture.
- `itemRaw` json dictionaries don't have a defined ordering, so in order for verification to work properly this needs to be raw text that separately serialized before the entire object is serialized. The raw text is what gets used for the hashing algorithm.
- `itemHash` hash of `itemRaw` - should be recalculated by the client api for verification.
- `nextHash` the hash of the next item
- `timestamp` a unix timestamp from when the object was made
- `hash` this should be calculated from `itemHash`, `nextHash`, and timestamp. See the reference implementation or the rust program (if you're doing this wrong, the rust program will reject your update). Generally client side APIs should recalculate this manually and compare it
- `next` this specifier gives the information required to locate the next item in the story/chain.

**item**
- `type` specifies the item type. Currently the only two types are `ITEM` and `CORRECTION`
where an `ITEM` is a regular record and a `CORRECTION` corrects the record specified in `ref` by its hash.
- `ref` specifies which record this record is linking to, currently only in use for `CORRECTION`
- `display` these specifiy how an item should be displayed.
- `data` any data included in the rcord, contains arbitrary JSON.
