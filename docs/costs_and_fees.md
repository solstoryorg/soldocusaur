---
sidebar_position: 6
---

# Costs & Fee Structure

A lot of effort has been put into optimizing Solstory to minimize cost. More
about that [here](architecture/optimizations.md). At the moment, there’s
effectively three costs to using solstory.

## Metadata Initialization

This is a one time (per writer address) cost for PDA space. This is
approximately 0.01 sol, for ~ 1.2 KB of data space.

## WriterHead Initialization

The WriterHead is a PDA representing an individual story and sits at the
intersection between the writer key and the NFT. In SQL terms you can think
of it as a row containing a writer_id and an nft_id and a pointer to where
the actual data is located off chain. Because it represents a many-to-many
relationship, a a WriterHead needs to be initialized for every single story
(meaning if you’re operating two writers and attaching them to 5 NFTs each
you’ll need a total of 10 WriterHead).  A WriterHead costs ~0.00141288 in
PDA rent exemption cost (about 14 cents when Sol~$100).

There’s a 10% fee on top of this cost (~1.4 cents when Sol ~$100) that lets us
continue to maintain things like the CDN and also buy the huge number of lattes
and bobas that it takes to write all of this infrastructure code.

In order to distribute this cost more fairly, a WriterHead can be initialized
by either the writer program itself *or* by the NFT owner. Meaning that
developers can offer functionality to NFTs and either handle collecting payment
themselves or ask the NFT owners to initialize the WriterHeads themselves (or both).

NOTE: For efficiency’s purpose the appendItemCreate function will automatically
create a writer head. The appendItem function will not–this is to avoid writer
programs accidentally incurring a ton of hidden cost without visibility to the developer.

## Appending an Item

If you’ve uploaded your data yourself, the only cost for appending an item is
the Solana transaction fee.

If you’re using the built in bundlr integration, check out (https://arweavefees.com/).
Note that for small uploads the ARWeave transaction reward dominates the cost,
and by using bundlr we actually only pay a fraction of that appropriate for our
data size. A better way of getting pricing estimates is to initialize the API
and play with the checkPrice function.
