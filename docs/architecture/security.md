---
sidebar_position: 4
---

# Security

A primary design goal of Solstory is to ensure that records added to NFTs can be
used by third parties to reliably ascertain information about that NFT–whether that's
an item that might be used in a third party video game, or a signature or event token
that makes an NFT more valuable.

Solstory is designed to do two things: ensure that only the writer program can
write to its story, and ensure that those records cannot be tampered with later
without detection. That makes Solstory "tamper evident".

## Tamper Evident vs Tamper Proof

Given that information is stored off chain, it's impossible for us to verify that
information in detail with an onchain program. Since we can't verify anything
about the data that gets uploaded to something immutable like ARWeave, we might as well
allow that data to be uploaded to any medium and gain resiliency to things like
networks going down. Since we can't verify information off-chain, Solstory
cannot be tamper *proof*. We can't stop someone from uploading incorrect data
to ARWeave.

But we can make it impossible to hide after the fact.

(There are some interesting ideas about using a third party oracle that *can*
interact with Solana, but this would increase complexity by orders of magnitude
and for that reason are unsurprisingly the places where most cross-chain bridges
get exploited. It's also unnecessary, since every writer program gets their
own chain, and therefore we can make the result of tamper evidence the same
as the result of a blocking tamper proof: we just ignore the incorrect data and pretend
it doesn't exist.)

## Ensuring Tamper Evidence

Solstory ensures that all data is tamper evident by storing the first item's
hash on Solana. This hash is a combination of a hash of the data in the item,
the timestamp of the item, and the previous item's hash. When someone tries to append
a new item, we calculate the hash of the combined item + timestamp + previous hash.

Attacking this to change the history (generating `prevHashMalicious`) would
require us to find a `dataHashMalicious` so that:

```
h(prevHash + timestamp + dataHash) = h(prevHashMalicious + timestamp + dataHashMalicious)
```

Where `h(prevHash + timestamp + dataHash)` is the complete hash stored in the PDA.
This reduces to finding a sha256 collision, which is currently considered
practically impossible.

