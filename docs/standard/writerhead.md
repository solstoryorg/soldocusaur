---
sidebar_position: 3
---

# WriterHead

The WriterHead is the second on-chain PDA used by Solstory.
This is a mostlly internal data structure, used to locate the first off-chain
item. It's essentially a stub of an item, it contains no writer data, but
does contain information for locating the next (first) item in the linked list
as well as the information required to verify it. This structure gets updated
every time an item is appended, and the rules around updating it are what enforce
the cryptographical verification promises that Solstory delivers.

- `authorized` a `bool` that means that the NFT creator has approved this chain.
There's no similar flag for the writer, since if the writer doesn't
approve a chain it'll just be empty
- `visibilityIndex` this `i8` serves a dual purpose, both allowing the NFT
holder to override external permissioning. First, a value of `-1` will hide a
story from an NFT. A value of `0` will leave everything as default (and is the
default value). A value of `1+` signifies a holder both prioritizing how an
story should be displayed (think z-index in css) and, if the story wouldn't be
display otherwise, "aftermarket" attaching the story and overriding other
permissions. See [the permissions page](permissioning.md) for more info.
- `accessType` determins how `objId` should be used to locate a resource.
- `objId`is 32 bytes that, together with `accessType` allow a client to locate
where the first block is located.
- `currentHash` this is `h(itemhash, previtem, timestamp)` of the first node.
See [the items standard](items.md) or either the rust or JS implementations for reference.

## Updating

When someone appends an item to Solstory, the api calculates a new current hash. This
hash includes both a timestamp and the previous current hash, as well as a data hash.
Those three components get uploaded as part of the update process, and the Solstory
program verifies them. Fooling this requires finding a sha256 collision, which is
both a well studied problem and extremely difficult–exactly what we want in a
security schema.
