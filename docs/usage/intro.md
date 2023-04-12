---
sidebar_position: 1
---

# Reading and Writing

This section focuses on how to use the Solstory API as a developer, focusing
specifically on the JS API. (other APIs may be forthcoming, but aren't on the
immediate roadmap. You can also interact with solstory the same way you would any
anchor/solana program). You can find more details on the API on the [typedoc](https://solstoryorg.github.io/solstory).

Actually using the API is dead simple:

*Note: these examples generally avoid optional parameters, check out the linked
docs for a full explanation of things you can configure.*

## Imports

Everything in the following examples should work with the following library imports:
```typescript
import fs from 'fs';
import path from 'path';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { Wallet, Provider, } from '@project-serum/anchor';
import { SolstoryAPI, SolstoryItemType } from '@solstory/api';
```

For constants:
```typescript
const ANCHOR_WALLET = "<full filepath to your anchor wallet, ideally stored as an environmental variable an accessed via process.env.ANCHOR_WALLET>";
const ENDPOINT = "<typical solana endpoints you'd give anchor>"
const BUNDLR_ENDPOINT = "devnet"|"mainnet"; //Bundlr devnet will operate off solana devnet, for local we recommend using devnet and funding your local wallet with airdrop on devnet

## Initialize The API
You initialize the API almost exactly like a regular anchor program,
except for a few extra options and the  need to configure the
bundlr integration–bundlr uploads json to ARWeave, which lets the
solstory api handle even the basic web uploading for you.

```typescript
//we initialize this the same we would an anchor api
const connection = new Connection(ENDPOINT);
const raw = fs.readFileSync(path.resolve(ANCHOR_WALLET), 'utf8');
const wallet = new Wallet(Keypair.fromSecretKey(Buffer.from(JSON.parse(raw))));
const provider = new Provider(connection, wallet, { commitment: 'confirmed' });
const solstoryApi = new SolstoryAPI({}, provider);
solstoryApi.configureBundlrServer(Buffer.from(JSON.parse(raw)), BUNDLR_ENDPOINT);
```

## Initialize Your Writer Program

You only need to do this once. *[createWriterMetadata typedoc](https://solstoryorg.github.io/solstory/classes/writer.SolstoryServerWriterAPI.html#createWriterMetadata)*

```typescript
solstoryApi.writer.createWriterMetadata({
        writerKey: <your public key>,
        label: <name of your writer program>,
        description: <description of your writer program>,
        url: <your homepage>,
        logo: <url for your logo>,
        baseUrl: <baseurl if you're not using arweave storage>,
        apiVersion: 1,
        visible: <whether you want people to see this (probably true)>,
        cdn: "",
        metadata: JSON.stringify({}),
        hasExtendedMetadata: false,
    });
```

## Append an Item

Appending from there takes a single call. *[appendItemCreate typedoc](https://solstoryorg.github.io/solstory/classes/writer.SolstoryServerWriterAPI.html#appendItemCreate)*

```typescript
itemObject = {
        type: SolstoryItemType.Item,
        display: {
            label: "Item title/label",
            description: "Text Description",
            helpText: "Alt Text",
            img: "<img url>"
        },
        data: {
            extra_data: {},
        }
    };
solstoryApi.writer.appendItemCreate(new PublicKey(nftId), itemObject);
```

That's it. Solstory will handle the uploading, the hashing, the linking, and the
verification for you, in the background. There's even the typical optional
inputs for conformation certainty.

## Get a story head

If you're trying to display stories for an NFT, you'll probably want to get all
of them. *[getHeadsForNFT typedoc](https://solstoryorg.github.io/solstory/classes/common.SolstoryClientAPI.html#getHeadsForNFT)*
```typescript
heads = await solstoryApi.common.getHeadsForNFT(mintKey);
```

If you already know the `writerKey` of the story you want to display, you can actually
skip straight to the next step.

## Retrieve a story

If you've skipped the previous step because you already know your `writerKey`
you don't need to deal with heads at all. Just go straight to: *[getStory typedoc](https://solstoryorg.github.io/solstory/classes/common.SolstoryClientAPI.html#getStory)*

```typescript
story = await solstoryApi.common.getStory(writerKey, mintKey);
```

If you *have* gotten a head first, just use this. *[getStoryFromHead typedoc](https://solstoryorg.github.io/solstory/classes/common.SolstoryClientAPI.html#getStoryFromHead)*
```typescript
story = await solstoryApi.common.getStoryFromHead(head);
```



