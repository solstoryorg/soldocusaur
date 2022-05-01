---
sidebar_position: 2
---

# Metadata

Metadata live on-chain in the WriterMetadata pda.

```
{
writerKey: web3.PublicKey,
  visible: boolean,
  systemValidated: boolean,
  apiVersion: number,

  label: text
  description: text
  url: text (url),
  logo: text (url),
  cdn: text (url),
  baseUrl: text (url),

  metadata: text (json)

  metadata_extended: boolean
}
```

- `writerKey` - public key of the writer program.
- `visible` - boolean set by the writer program to determine if end users should see this story. Setting this to false allows a developer to use a program for purely internal storage.
- `systemValidated` - `boolean` set by Solstory org for programs that have gone external verification, which mostly just ensures that spammers and impersonators cannot abuse the network. (See FAQ #3 for our thoughts on centralization here)
- `apiVersion` - `int` representing api versions, currently set to 1.
- `label` - `text` how display programs should label this program, basically a title.
- `description` - `text` description of the program, used for display.
- `url` - `text (url)` link to the program's homepage/twitter/etc.
- `logo` - `text (url)` link to the logo of the project, should be a standard web image format
- `cdn` - `text (url)` if this program hosts its own cdn, this is a link to to it's root url
- `baseUrl` - `text (url)` if this program uses url hosting for some or all of its item, this should be the base url.
- `metadata` - `text (json)` optional metadata. display programs *can* display this but it's intended to be largely internal
- `metadata_extended` - `boolean` if true there's a pda with extended metadata available

