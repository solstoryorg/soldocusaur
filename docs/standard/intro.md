---
sidebar_position: 1
---

# Intro

This section explains the data standard. The JS API already enforces the data
standard, which means this section is purely as a second reference for folks
who want more details for implementing a non JS API or want to glance at internals.

The [metadata](metadata.md) and
[writerHead](writerhead.md) both live on the Solana chain itself as PDAs,
their inclusion here is mostly a guide in understanding them.

The [items](items.md) standard describes the format of items living off-chain,
and should be followed if one manually writes/uploads solstory items. The JS
API already implements this, and this document in some ways mirrors the
[typedoc](https://solstoryorg.github.io/solstory/modules/SolstoryAPI__start_here_.html).

The permissioning section is especially useful for explorer/wallet developers that
want to properly respect creators, developers, and holders in displaying information
attached to NFTs.



