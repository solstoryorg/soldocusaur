---
sidebar_position: 4
---

# WriterHead

This is a mostlly internal data structure, used to locate the off-chain
components of the solstory data structure and verify it.

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
