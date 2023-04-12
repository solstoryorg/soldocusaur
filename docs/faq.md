---
sidebar_position: 9
---

# FAQ

## What if Solana gets more expensive?

One of the difficulties building software on a blockchain is that the more successful
a chain becomes, the more expensive the compute/storage/everything becomes to use.
Solstory is designed to offload everything possible to external systems–from solana's
perspective an append operation is just calculating a hash and then updating two arrays.
This means that even as sol becomes more expensive we're dealing with transaction fees
for simple things instead of complex calculations or growing data storage.

## What if data storage (ARWeave, etc) gets more expensive?

Solstory is storage location agnostic, and one of our medium term projects is building
native compatability for more storage options into the JS API. So if storage gets
expensive, you can always switch to a different storage provider.

## Doesn't having a centralized `systemVerified` flag on every program's metadata give the Solstory org unfair power over the network?

We thought *a lot* about permissioning and safety when we were designing the
network architecture. In this case we felt a systemVerified flag displayed to
clients struck a crucial compromise: it allowed people to rely on a centralized
org as custodians, while similarly allowing them to disregard the flag if those
custodians were ever deemed not-trust-worthy. It helps that folks making that
decision will largely be developers making software like explorers and wallets,
who have the domain expertise to act as an effective check here.

