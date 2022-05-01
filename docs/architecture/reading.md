---
sidebar_position: 5
---

# Reading

Solstory stories are defined by the writer key and the nft mint key. These two
together are used to create the pda address that contains the WriterHead, which
contains a few flags, location information for the first item in the chain,
and the verification hash used to protect the rest of the chain from tampering.

The `accessType` enum together with the objId give us the information required
to look up the first item in the chain. We load that clientside, and it gives
us the same information to look up the next. Each item is secured by a hash
calculation, and within that verified set of information is the hash for
the next item, so we can recursively verify the authenticity of the entire chain.

## CDN

Obivously this involves a lot of serial internet lookup, which is why we use
a cdn (coming soon) that lets us look up a bunch of items at once. Since the
first verification hash is on the blockchain, the recursive verification
process still works.
