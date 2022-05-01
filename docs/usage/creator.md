---
sidebar_position: 2
---

# For NFT Creators

We're currently working on setting up a toolkit for creators to
add Solstory programs to their NFTs. This can already be done
with the JS api, by calling: *[createWriterHeadCreator typedoc](https://solstoryorg.github.io/solstory/classes/server_creator.SolstoryServerCreatorAPI.html#createWriterHeadCreator)*

```javascript
solstoryApi.server.creator.createWriterHeadCreator(mintKey, writerKey);
```

This is idential to the `createWriterHeadWriter` call, except that it
automatically labels the created writer head as `authorized` meaning
clients know that you've officially approved them.

You can use *[typedoc](https://solstoryorg.github.io/solstory/classes/server_creator.SolstoryServerCreatorAPI.html#authorizeWriterHead)*
```javascript
solstoryApi.server.creator.authorizeWriterHead(mintKey, writerKey);
```
or *[typedoc](https://solstoryorg.github.io/solstory/classes/server_creator.SolstoryServerCreatorAPI.html#deauthorizeWriterHead)*

```javascript
solstoryApi.server.creator.deauthorizeWriterHead(mintKey, writerKey);
```

to manually authorize a writer made by someone else, or deauthorize a
writer who you no longer want to officially approve of.

In this way you can make your NFTs more than just pictures, but a
multidimensional collection of features and functionalities.
