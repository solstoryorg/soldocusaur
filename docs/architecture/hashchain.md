---
sidebar_position: 3
---

# Why a Hash Chain

The trick behind keeping a solstory story constant space is storing the data off
chain. The challenge here is maintaining solana's verifiability characteristics
while moving the data off, especially when we want data to be storable on
mutable mediums like S3.

The solution for this, is a hash chain. This is, in effect, a greatly simplified
blockchain, but simplified enough that we don't need dedicated clients to run it,
and kept as appendable by only a single author, so we don't need to deal with
spam, consensus issues, etc.

As part of that simplification, instead of using an arbitrarily large merkle tree
we use one with just five components:
- a link to the previous item (or block, in blockchain terms)
- a hash of the previous item's hash, timestamp, and previous item hash,
- a hash of the current item,
- a timestamp
- the actual data

The head of the blockchain, stored on solana itself, stores only the first
two–a link to the next item in the list and a hash of that item's hash,
timestamp, and prev-hash. This is what keeps the onchain footprint so small.

Actual items also store the data the merkle tree is verifying, in this case
a single appended record to the chain.

## Validation
For the sake of resilience, it's important to note that the pointers to where data
is located is *not* verified in any of the hashes. So even if arweave or an s3
bucket or any other data location goes down, the entire chain can still be
reconstructed. One consequence of this is that verifying a chain's honesty
requires both a verification that the hashes all match up (including recalculating
that `hash(itemhash, timestamp, previtemhash) == hash`) one must also verify for
each item that `h(raw_item)==itemhash`. For details on what this looks like in
the actual data structure standard, see [standard/items](../standard/items.md).

