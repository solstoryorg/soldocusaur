---
sidebar_position: 2
---

# Basic Architecture

Solstory consists of three components: A Solana Program sitting on chain, a JS
api to interact with it, and a data standard for how data stored on Solstory
should look to be compatible with display programs and data validation.

The solana program manages what is effectively a horizontally scalable set of
sidechains, one per writer-nft combo. The JS API simplifies working with this
program and impements the data standard. The data standard ensures that off
chain data stored as part of solstory remains cross compatible with all the
different viewers who might want to look at it.

You're free to (and encouraged to, please opensource!) reimplement the JS api–
the solana program will enforce verification constraints. You're also free
to ignore the data standard, except then no one will be able to display your
data and if you break it enough no one will be able to read your writer's
sidechains at all, which sort of defeats the purpose (if you're using
solstory as a cheap and simple way of attaching offchain data to NFTs for your
own internal use, this might make sense, and in fact we provide compatibility
for this with the `visible` flag, see [permissioning](standard/permissioning.md).

