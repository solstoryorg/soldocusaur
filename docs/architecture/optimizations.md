---
sidebar_position: 8
---

# Advanced - Optimizations

In designing an architcure for large scale data storage, it's crucial to keep
in mind cost. Particularly if one of the problems you're trying to solve
is the high cost of storing things for Solana programs on chain.

## Storage

An individual story should have minimal on chain storage requirements, since
rent exempt storage on chain quickly adds up. At $100 Sol a KB of on chain
storage costs roughly 80 cents. Cheap, except if you’re trying to operate a
writer program on a 10k pfp nft set suddenly a single program costs $8000
in capital allocation.

We can minimize this by putting everything universal to the writer into a
separate metadata PDA for the writer program as a whole, instead of a
specific program for each NFT. Then, we can cull any kind of reverse lookup
ability–the PDA effectively lets us go from writer_key+nft_key->writerHeadPDA,
so we can get away with using the PDA's own address as our two id fields (saving
64 bytes!), and then store only the bare data we need for validation and lookup.
By structuring our hashing scheme so we only need a single 32 byte hash, storing
url lookup components in the metadata url (giving up some flexibility for folks
not wanting to use a permanent storage provider like ARDrive, but not in a permanently
destructive way, [see reconstruction](../usage/reconstruction)), letting us cap
our pointer to a single 32 byte id, and throw Anchor's 8 byte discriminator and
some permission flags and we get a tiny tiny 75 bytes. That's less data storage
than you would need in order to store this sentence.

The cost of this is that we lose the ability to do things like lookup "every
writerHeadPDA for nft_id". Which is important. But that's where CDNs come in.

## Why CDNs
There’s some irreducible complexity associated with a distributed programming infrastructure.

Without a CDN, you end up scanning the blockchain for every single possible writer
program of an NFT, then again making as many individual web requests in serial
for the number of past records you want to display.

A CDN allows us to optimize this: we can use a single request to get every single
head for the NFT. Then we can use the same (or a different cdn, if the writer program
specifies) to get a large set of items at once, for a single web request.

Validation still works: we can either get the on-chain head in parallel to verify
or trust that Solstory's centrally run CDN is being honest.

