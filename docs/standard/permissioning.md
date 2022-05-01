---
sidebar_position: 5
---

# Permissioning

Solstory deliberately offers fine grained control over when and how a story
should be displayed. This is to protect the rights and interests of the nft
creator (in technical terms this is enforced by giving permissions to
do "creator" things to whomever holds the update rights in the metaplex pda,
so in many ways this is like a sort of copyright that could theoretically also
be sold) that the API is used before sale), the writer-program developer, and the
eventual end user (sometimes referred to as the "holder").

## Permissioning Flags

**Writer Metadata**

These are relevant to every single story spawned by the writer, and cover broad
properties of the writer program.
- `systemValidated` is a bit set by the solstory team for programs that have been
checked by the team. This serves as a basic defense against imposters or against
malicious spam.
- `visible` is a bit set by the writer to flag whether a story should be
displayed at all. This is useful for writers that are meant to store
exclusively internal data.

**Writer Head**

These are relevant to individual stories.
- `authorized`
- `visibilityIndex` this bit served a dual purpose. When set to zero, the holder
of the NFT hasn't made any kind of special pronouncements. When it's set, the
holder has deliberately "placed" the story. Generally stories should be
displayed with highest visibility index first (giving holders a chance to
control the way their NFTs are displayed of). Additionally, stories that aren't
authorized, but have a visibility index greater than zero, should be displayed
normally, since the holder has deliberately installed an "aftermarket" story
onto their NFT.

