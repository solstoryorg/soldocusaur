---
sidebar_position: 4
---

# Security

Given that information is stored off chain, it's obviously impossible for us to make
things tamper proof. Any kind of verification of the data stored is impractical
since solana programs can't really access things off chain. An approach using
a third party oracle such as the ones other bridges use *could* work but is
impractical and unnecessary: Since every writer program gets their own chain,
we simply need evidence of tampering, and then we can treat the remaining
record as if it had never been uploaded.

Solstory ensures that all data is tamper evident by storing the first item's
hash. This hash is a combination of a hash of the data in the item, the timestamp
of the item, and the previous item's hash.

Attacking this would require us to find

```
h(prevHash + timestamp + dataHash) = h(prevHashMalicious + timestamp + dataHashMalicious)
```

Where `h(prevHash + timestamp + dataHash)` is the complete hash stored in the PDA.
This reduces to finding a sha256 collision, which is currently considered
practically impossible.

