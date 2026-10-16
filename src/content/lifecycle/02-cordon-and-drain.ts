import type { Section } from '../types'

export const cordonAndDrain: Section = {
  id: 'cordon-and-drain',
  title: 'Node health, cordon, and drain',
  scene: 'drain-flow',
  focus: 'fate-bare',
  slide: `## Node health, cordon, and drain

Nodes need patching, upgrading, and replacing. **Cordon** and **drain** take one out of service deliberately.

### The sequence
- **Cordon** — mark it unschedulable; running Pods stay
- **Drain** — evict its Pods, honouring disruption budgets
- Do the maintenance, then **uncordon**
- Drain **one node** at a time

### What happens to each Pod
- Controller-owned Pods are **recreated** on other nodes
- DaemonSet Pods are skipped when you say so
- Pods with **no controller** are simply gone
- \`emptyDir\` data is deleted with its Pod

### Node health
- \`NotReady\` nodes have their Pods replaced after a delay
- A sudden loss is **involuntary** — no drain, no warning`,
  narration:
    "Nodes need patching, upgrading, and sometimes replacing, and two commands take one out of service deliberately. Cordon marks the node unschedulable. Nothing running on it is touched, but the scheduler places nothing new there. Drain then evicts the Pods running on it, one by one, honouring disruption budgets, which are the next section. When the node is empty, you do the maintenance, and uncordon it to return it to service. What happens to each Pod depends on what owns it. Pods owned by a Deployment, ReplicaSet, or StatefulSet are recreated by their controllers on other nodes, which is why Chapter 4's controllers matter so much here. DaemonSet Pods belong to the node, so drain skips them when you tell it to. A Pod created directly, with no controller, is simply gone; nothing recreates it. And any emptyDir data is deleted with its Pod. Node health is the unplanned version. A node that stops reporting becomes NotReady, and after a delay its Pods are replaced elsewhere. But a sudden node loss is involuntary: there is no drain and no warning, and the only protection is having replicas elsewhere already.",
}
