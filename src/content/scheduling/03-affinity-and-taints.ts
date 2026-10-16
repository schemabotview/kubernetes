import type { Section } from '../types'

export const affinityAndTaints: Section = {
  id: 'affinity-and-taints',
  title: 'Selectors, affinity, taints, and tolerations',
  scene: 'placement-rules',
  focus: 'taints',
  slide: `## Selectors, affinity, taints, and tolerations

Some tools let a **Pod choose** nodes. Others let a **node refuse** Pods. Each can be a rule or a preference.

### Pods choosing nodes
- **nodeSelector** — exact labels, all must match
- **Required affinity** — richer rules, still mandatory
- **Preferred affinity** — scores nodes, never blocks

### Nodes refusing Pods
- A **taint** keeps Pods off a node
- A **toleration** lets a Pod onto it anyway
- Tolerating a taint **permits**; it does not require

### Common outcomes
- An impossible required rule leaves Pods **Pending**
- A preference that cannot be met is simply skipped
- To pin Pods to tainted nodes, pair a toleration with affinity`,
  narration:
    "Requests decide whether a Pod fits. A second set of tools decides where it is allowed to go, and they come in two directions. In one direction, a Pod chooses nodes. The simplest is a node selector: the node must carry these exact labels. Required node affinity expresses richer rules, such as a zone in a list, but it is still mandatory; if no node satisfies it, the Pod stays Pending. Preferred affinity is a weighted preference. It scores the candidate nodes, but if none matches, the Pod is placed anyway. That makes preferences the safer default. In the other direction, a node refuses Pods. A taint on a node keeps Pods off it, for example to reserve nodes with special hardware. A toleration on a Pod lets it onto a tainted node anyway. Here is the subtle part: a toleration only permits placement. It does not demand it. A Pod that tolerates the GPU taint may still land on an ordinary node. If you want Pods both allowed onto, and kept on, particular nodes, pair a toleration with affinity. And when Pods are Pending, check for a required rule that no node can satisfy.",
}
