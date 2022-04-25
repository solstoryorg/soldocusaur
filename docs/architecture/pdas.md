---
sidebar_position: 4
---

# PDAs

Solstory uses two separate PDA structures on chain.

## Metadata

This contains metadata for writer programs, applicable to every story a writer writes.
See [the standard page](../standard/metadata.md) for details on what the
individual components mean.

## WriterHead

This structure connects a writer program to a specific NFT. For [optimization](../architecture/optimizations.md) reasons it is as small as possible, containing the bare necessary information to locate
the first item in the off-chain data structure and verify that it hasn't been tamper with,
as well as item specific permissions and overrides. See [the relevant standard page](../standard/writerhead.md) for an exact description.
