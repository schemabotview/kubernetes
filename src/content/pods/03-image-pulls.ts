import type { Section } from '../types'

export const imagePulls: Section = {
  id: 'image-pulls',
  title: 'Image identity and pull failures',
  scene: 'image-pull',
  focus: 'failures',
  slide: `## Image identity and pull failures

The kubelet does not build images. It asks the runtime to **pull** exactly what the Pod names, and waits.

### Naming the image
- A **tag** like \`:1.4\` can be moved to new content
- A **digest** \`@sha256:…\` names exact bytes
- \`imagePullPolicy\` decides when to fetch again

### Why a pull fails
- The name, tag, or digest does **not exist**
- A private registry needs a **pull secret**
- DNS, proxy, or rate limits block the registry
- Retries back off: \`ErrImagePull\`, then \`ImagePullBackOff\`

### Diagnosing it
- \`describe pod\` shows the registry's own error message
- Check the exact image string against the registry
- Pull the same digest elsewhere to separate **name** from **access**`,
  narration:
    "A container cannot start until its image is on the node, and getting it there is the runtime's job, asked for by the kubelet. So the first thing that can go wrong with a new Pod is the pull. Start with how the image is named. A tag, such as version one point four, is a pointer, and someone can move it to different content later. A digest, the long sha256 value, names the exact bytes, so two nodes pulling the same digest are guaranteed to run the same thing. The pull policy decides whether the node fetches again or reuses a copy it already has. Pulls fail for a small number of reasons. The name, tag, or digest does not exist, often a typo. The registry is private, and the Pod has no pull secret granting access. Or the node cannot reach the registry at all, because of DNS, a proxy, or rate limiting. In each case the kubelet retries with growing delays, which is why the status moves from ErrImagePull to ImagePullBackOff. The useful detail is in the events: describe the Pod, and you will usually see the registry's own error message.",
}
