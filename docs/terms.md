---
sidebar_position: 7
---

# Terms

**Story** - A series of items of data attached to an NFT by a single writer.

**Hashchain** - A data structure created by iteratively applying a hash function
to the output of previous iterations of the hash function. In Solstory’s case
there’s additional data added to each node. So instead of h(h(h(h(x)))) it’s
h(data_4+h(data_3+h(data_2+h(data_1)))). This lets us validate the data AND
previous hash just by knowing the current hash. Applied recursively it lets us
validate the entire chain from the most recent hash.

**Creator** - The entity that created the NFT, understood in the Solstory world
as the pubkey(s) with update privileges in the Metaplex metadata (specifically
the on-chain pda) for the given NFT.

**Writer** - A public key identifying either an on or off chain program writing
data to NFTs.

**Item** - An individual piece of data attached to an NFT as part of a story.

**Node** - Basically a block but in a hash chain.

**WriterHead** - The Solana PDA managing a single story. Enforces hash chain
constraints, points to data location, and allows for data validation.

