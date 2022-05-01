---
sidebar_position: 5
---

# Advanced - Location Fix

Should you accidentally append an item (I1) that points to an incorrect location for the previous item (I0), you
can append a new item to resolve the issue. First, the original item (I1) needs to be
reuploaded, this time correctly pointing to the next item. Then, a new item (I2)
must be created pointing to the uploaded fix. (Attempting to upload the same item
again (I1) with just the location changed will be treated by solstory as an
append attempt, which means solstory will will check the hashes and error because
the previous hash does not specific (I1)).

Marking the `type` of I2 as `LOCFIX` will
tell display clients that it's not meant to display anything. If you're trying to
use Solstory for just the very first item (say you're regularly updating a list,
but appending the whole list each time so it's available with the first lookup) you
might just want to create a new item (still I2) with the same data but pointing
to the fixed uploaad of I1 and append it normally.

