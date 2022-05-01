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

## Initialize The API
You initialize the API almost exactly like a regular anchor program,
except for a few extra options and the  need to configure the
bundlr integration–bundlr uploads json to ARWeave, which lets the
solstory api handle even the basic web uploading for you.

```typescript
//we initialize this the same we would an anchor api
const raw = fs.readFileSync(path.resolve(ANCHOR_WALLET), 'utf8');
const wallet = new Wallet(Keypair.fromSecretKey(Buffer.from(JSON.parse(raw))));
const provider = new Provider(connection, wallet, { commitment: 'confirmed' });
const solstoryApi = new SolstoryAPI({}, provider);
solstoryApi.configureBundlrServer(Buffer.from(JSON.parse(raw)), BUNDLR_ENDPOINT);
```

## Initialize Your Writer Program

You only need to do this once. *[createWriterMetadata typedoc](https://solstoryorg.github.io/solstory/classes/server_writer.SolstoryServerWriterAPI.html#createWriterMetadata)*

```typescript
solstoryApi.server.writer.createWriterMetadata({
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
    });
```

## Append an Item

Appending from there takes a single call. *[appendItemCreate typedoc](https://solstoryorg.github.io/solstory/classes/server_writer.SolstoryServerWriterAPI.html#appendItemCreate)*

```typescript
solstoryApi.server.writer.appendItemCreate(new PublicKey(nftId), itemObject);
```

That's it. Solstory will handle the uploading, the hashing, the linking, and the
verification for you, in the background. There's even the typical optional
inputs for conformation certainty.

## Get a story head

If you're trying to display stories for an NFT, you'll probably want to get all
of them. *[getHeadsForNFT typedoc](https://solstoryorg.github.io/solstory/classes/client.SolstoryClientAPI.html#getHeadsForNFT)*
```typescript
heads = await solstoryApi.client.getHeadsForNFT(mintKey);
```

If you already know the `writerKey` of the story you want to display, you can actually
skip straight to the next step.

## Retrieve a story

If you've skipped the previous step because you already know your `writerKey`
you don't need to deal with heads at all. Just go straight to: *[getStory typedoc](https://solstoryorg.github.io/solstory/classes/client.SolstoryClientAPI.html#getStory)*

```typescript
story = await solstoryApi.client.getStory(writerKey, mintKey);
```

If you *have* gotten a head first, just use this. *[getStoryFromHead typedoc](https://solstoryorg.github.io/solstory/classes/client.SolstoryClientAPI.html#getStoryFromHead)*
```typescript
story = await solstoryApi.client.getStoryFromHead(head);
```



