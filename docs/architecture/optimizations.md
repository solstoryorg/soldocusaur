---
sidebar_position: 3
---

# Optimizations

An individual story should have minimal on chain storage requirements, since
rent exempt storage on chain quickly adds up. At $100 Sol a KB of on chain
storage costs roughly 80 cents. Cheap, except if you’re trying to operate a
writer program on a 10k pfp nft set suddenly a single program costs $8000
in capital allocation.

We can minimize this by putting everything universal to the writer into a
separate metadata PDA for the writer program as a whole, instead of a
specific program for each NFT. Then, we can cull any kind of reverse lookup
ability–the PDA effectively lets us go from writer_key+nft_key->writerHeadPDA,
so we can get away with using the PDA's own address as our two id fields (saving
64 bytes!), and then store only the bare data we need for validation and lookup.
By structuring our hashing scheme so we only need a single 32 byte hash, storing
url lookup components in the metadata url (giving up some flexibility for folks
not wanting to use a permanent storage provider like ARDrive, but not in a permanently
destructive way, [see reconstruction](../usage/reconstruction)), letting us cap
our pointer to a single 32 byte id, and throw Anchor's 8 byte discriminator and
some permission flags and we get a tiny tiny 75 bytes. That's less data storage
than you would need in order to store this sentence.

The cost of this is that we lose the ability to do things like lookup "every
writerHeadPDA for nft_id". Which is important. But that's where CDNs come in.

## Why CDNs
There’s some irreducible complexity associated with a distributed programming infrastructure.

Without a CDN, you either need to scan the blockchain for every single NFT in
a wallet, causing O(N) requests to the API plus more for anyone choosing to use
on-chain data storage.

Then for each story you need to follow that hash chain down, causing O(N*L) requests
where L is avg hash chain length. You _can_ consider that a constant at low
numbers, but as NFTs exist and interact with programs the hash chain only grows longer.

UNFUCK THIS
Say you cut off at the most recent 20 a events, now you have K*O(N) but for a
relatively high K. For a 20 NFT wallet that’s up to 20 chain requests, and either a single big request that retrieves all the metadata or W1 requests where W1 is the number of attached writer programs, and 400 web requests.


We can trade off some additional web requests for lower storage costs. If we choose to use getMultipleAccounts to retrieve Heads, then we get O(NW) account lookups, but with a fractional constant because we can send 10^3-ish account lookups per multipleAccountsCall. We _are_ also stuck with the big metadata request since we need it to generate the account lookups. Chain requests remain the same.

It’s worth noting that by this math as long as we have less than some _fairly_ high number of programs, getting multiple accounts actually more efficient, since instead of making O(N) requests we make 0.01*O(NK). So we’re really looking at program growth numbers here. Interestingly we can resolve this by releasing a version 2 if necessary to allow for larger Head accounts that give us the ability to perform the net and writer filters.


All of this changes of course when we bring CDNs into the mix. We need to differentiate between two types of CDNs: writer CDNs and global CDNs. A writer CDN subscribes to program account updates or is otherwise operated by the writer operator, and it houses the full chain (or a significant fraction of it) on it to avoid the O(N*L) web requests to reconstruct moments for the client. A global CDN can answer the same questions that our on-chain representation can but with the actual backlink id’s so we don’t have to play this guess and check hyperoptimization game, instead we just do a sql query where we get all existing objects where nft_id in [nft_ids].

