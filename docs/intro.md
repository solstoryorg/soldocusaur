---
slug: /
sidebar_position: 1
---

# Introduction

Solstory is a data layer built for Solana NFTs. It extends the capabilities
provided by metaplex to create a verifiable, auditable mechanism for external
programs to attach data to individual NFTs, and in standardizing that data
creates a consistent way for explorers, wallets, and marketplaces to display
that data. It makes the location of that data chain agnostic, reducing
storage costs by up to 99.99% relative to keeping everything on chain.

And it does all of that in a nearly transparent API. Initialization is only
slightly more complex than initializing any anchor program, it doesn’t
require anything deployed to the blockchain, and appending a record requires
nothing more than a mint pub key (the same one you would use for metaplex) and
a json serializable object.

The goal is to enable more complex and interesting Solana applications by
resolving one of the most difficult challenges in web3 applications:
data storage and permanance. And, by making that data portable and displayable
by a variety of applications, to create NFTs that have value not because they
are 1/10000, but because they have an interesting and unique history.

A story.

