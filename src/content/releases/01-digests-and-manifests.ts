import type { Section } from '../types'

export const digestsAndManifests: Section = {
  id: 'digests-and-manifests',
  title: 'Source manifests and image digests',
  scene: 'artifact-promotion',
  focus: 'digest',
  slide: `## Source manifests and image digests

A repeatable release has **two inputs** you can name exactly: the manifests in source control and the image digest.

### Build once
- CI builds the image **once**, from one commit
- It records the **digest** the registry returned
- That digest is what every environment runs

### Promote, never rebuild
- Staging tests specific bytes; production runs the **same** bytes
- A moving tag like \`:latest\` can change underneath you
- A rebuild per environment ships **untested** bytes

### Manifests in source control
- Reviewed like code, with history and authorship
- The cluster is a **copy** of that record, not the record
- Anything changed only in the cluster is **undocumented**`,
  narration:
    "A release you can repeat has exactly two inputs, and you should be able to name both precisely. One is the set of manifests in source control. The other is the image digest. The image is built once, by continuous integration, from one commit, and the pipeline records the digest the registry returned. From then on, that digest is what moves. Staging runs it and is tested against it. Production runs the same digest, so the bytes that passed the tests are the bytes that serve users. That is promotion. Two common shortcuts break it. A moving tag such as latest can be pointed at different content between your test and your deploy, so you no longer know what is running. And rebuilding the image separately for each environment produces new bytes that were never tested, even from the same commit. Manifests get the same discipline. They live in source control, reviewed like code, with history and authorship. The cluster then holds a copy of that record, not the record itself. Which means anything changed only in the cluster, by hand, is undocumented, and will be lost or fought over later, as the last section of this chapter shows.",
}
