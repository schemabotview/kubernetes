import type { Section } from '../types'

export const kustomize: Section = {
  id: 'kustomize',
  title: 'Kustomize bases and overlays',
  scene: 'kustomize-overlays',
  focus: 'overlays',
  slide: `## Kustomize bases and overlays

Environments mostly agree. **Kustomize** keeps one base and small **overlays** for the parts that differ.

### The base
- The Deployment, Service, and ConfigMap every environment shares
- A \`kustomization.yaml\` lists what belongs to it

### Overlays
- Patch only what differs: replicas, resources, the **digest**
- Keep overlays **small**, or they drift too
- \`configMapGenerator\` adds a content **hash** to the name
- A changed ConfigMap therefore rolls out new Pods

### Render, then apply
- \`kubectl kustomize overlays/production\` prints the result
- Read and diff the **rendered** objects before applying
- Built into kubectl as \`apply -k\` — no templates to learn`,
  narration:
    "Most of what differs between staging and production is small: a replica count, some resource sizes, the image digest being promoted. Copying whole manifest folders per environment quickly lets them drift apart. Kustomize keeps one base and a small overlay per environment. The base holds what every environment shares: the catalogue API's Deployment, its Service, its ConfigMap, and a kustomization file listing them. Each overlay refers to the base and patches only what differs, for example two replicas in staging and three in production, both pinned to the same digest. One feature connects nicely to Chapter 5. A ConfigMap generator appends a hash of the content to the ConfigMap's name. Change a value, and the name changes, so the Pod template changes, and the Deployment rolls out new Pods with the new configuration, with readiness checks and rollback. That is the predictable alternative to editing ConfigMaps in place. The working habit is to render first. kubectl kustomize with an overlay prints the final objects, and those rendered objects, not the base and patches, are what you read and diff before applying. Kustomize is built into kubectl, and there is no template language to learn.",
}
