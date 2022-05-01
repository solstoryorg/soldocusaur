---
sidebar_position: 6
---

# Advanced - Reconstruction

Solstory deliberately verifies data _not_ data location. This means you're not
limited to immutable storage locations to prove data hasn't been tampered with.
It _also_ means that data locations can change, and Solstory will succeed in
verifying that the data is the same. We call moving all the data from one location
to another "reconstruction" and hopefully you'll never have to do it. But, should
your storage blockchain/S3 bucket/webserver etc go down, it's possible to use
a backup to reupload the missing data somewhere else, then append a new item
to your Solstory that points to this new location.

A more detailed guide on how to do so will be written up later (presumably when
someone needs it). For now, poke us on discord if you ever end up in this situation.


