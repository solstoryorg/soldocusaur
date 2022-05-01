---
sidebar_position: 3
---

# Advanced - appendItem vs appendItemCreate

More details on both of these can be found in the API docs [here](https://solstoryorg.github.io/solstory/classes/server_writer.SolstoryServerWriterAPI.html#appendItem).

Frequently we might find ourselves in the position of trying to append a record
to an NFT that has not received any records from that writer key yet. To do this
we need to create a new [writerHead PDA](../architecture/pdas.md). Because
this takes up space on the blockchain, it incurrs a small fee. Aside from off
chain data storage this is the primary cost of utilizing Solstory, and as a
developer providing a service to NFT creators, it's important to make a conscious
choice whether to bear the cost.

appendItem will append an item, but **will not** create the writerHead PDA if it
does not yet exist. Instead, it will return an error.

appendItemCreate **will** create the PDA, and more importantly will do so in a single
API call so you do not need to wait for blockchain confirmation from the manual
head creation function in order to append the item.
