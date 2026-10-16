import type { Section } from '../types'

export const daemonsets: Section = {
  id: 'daemonsets',
  title: 'DaemonSets and per-node work',
  scene: 'daemonset-spread',
  focus: 'ds-4',
  slide: `## DaemonSets and per-node work

Some work belongs on **every node**, not on N replicas wherever there is room. That is a **DaemonSet**.

### How it differs from a Deployment
- One Pod per **eligible node**, not a replica count
- A new node gets its Pod automatically
- A removed node takes its Pod with it

### Typical uses
- Log and metrics **agents** reading node files
- Networking and storage **plugins**
- Node-level security monitoring
- Not for application replicas

### Cautions
- Every node pays the agent's **resource cost**
- Usually privileged — review it like **infrastructure**
- Node selectors and taints decide where it runs
- Updates roll **node by node**, like a Deployment's`,
  narration:
    "Some work belongs on every node, rather than on a certain number of replicas wherever there happens to be room. That is what a DaemonSet expresses. Compare the two rows on the left. A Deployment with two replicas lets the scheduler choose; two of the four nodes run the catalogue API, and the other two run nothing for it. A DaemonSet has no replica count at all. It runs one Pod on every eligible node. When a fifth node joins the cluster, it gets its agent automatically; when a node is removed, its agent goes with it. Typical DaemonSets are node agents: a log collector reading each node's log files, a metrics exporter, the cluster's own networking or storage plugins, and node-level security monitoring. You may never write one for the catalogue application, but you will meet them on every cluster. Two cautions come with them. Every node pays the agent's resource cost, so its requests multiply across the whole cluster. And node agents often need elevated privileges to read host files or configure networking, so review a DaemonSet with the care you would give infrastructure, not like an ordinary application.",
}
