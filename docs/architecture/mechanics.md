---
sidebar_position: 5
---

# Updating

When an item gets appended to solstory, a few things occur.

## Upload

First, a properly formatted item needs to be uploaded to somewhere on the internet,
preferably one of the long term storage blockchains, like ARWeave or IPFS. It's
important for this item to properly point to the current first item in the chain–
the Solstory Solana program will not verify the location (since it is off chain)
but a client will expect to be able to find it and the chain will fail verification
if it cannot be located.

Should you do this incorrectly, it is possible to fix by reuploading the item with
the correct location information, then point a *new* item to the correct one. See
[fixing location](../usage/locationfix.md) for more information.

The Solstory JS API will, if bundlr is enabled, handle this for you. It'll wrap
a JSON object as an item, upload that formatted item to ARWeave via bundlr, then
go to the next step.

## Updating

Next the item needs to be linked to the chain. The append_item function of the
Solstory Solana program will take in the hash of the uploaded data, the timestamp,
and the previous hash and verify that they combine to create the submitted current
hash. Then the currentHash gets updated to the new hash.

