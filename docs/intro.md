---
slug: /
sidebar_position: 1
---

# Introduction

## Short Version

Solstory is a Solana program + JS library that lets you attach append only
data to NFTs in a standardized, cryptographically verifiable way.

For example, you might write the program that lets up-and-coming musicians
sign NFTs. Solstory's infrastructure lets you write that program off-chain
while allowing you to use on-chain mechanisms to prove that the signature
happened when it was claimed to and that the records are authentic.
It also ensures that an explorer or wallet capable of displaying one program
built on Solstory is capable of displaying all of them–just like Metaplex
for the data of the NFT itself.

## Slightly Longer Version

Solstory is a data layer built for Solana NFTs. It extends the capabilities
provided by Metaplex to create a verifiable, auditable mechanism for external
programs to attach data to individual NFTs, and in standardizing that data
creates a consistent way for explorers, wallets, and marketplaces to display
that data. It makes the location of that data chain agnostic, reducing
storage costs by up to 99.99% relative to keeping everything on-chain.

Solstory does all of that in a nearly transparent API. Initialization is only
slightly more complex than initializing any other Anchor program, it doesn’t
require anything deployed to the blockchain, and appending a record requires
nothing more than a mint pubkey (the same one you would use to query Metaplex) and
a json serializable object. Treat it as an append only log or as a SQL database
with an integrated history table–used properly Solstory will allow you that
and more all with the security guarantees of an on-chain Solana program.

Our goal is to enable more complex and interesting Solana applications by
resolving one of the most difficult challenges in web3 applications:
data storage and permanance. We do that by making that data portable and displayable
by a variety of applications, enabling NFTs that hold value not because they
are 1/x, but because they have an interesting and unique history: A story.

If you want to see how to use it, you can skip straight to [usage](usage/intro.md)
