import type { Section } from '../types'

export const environments: Section = {
  id: 'environments',
  title: 'Local, managed, and self-managed environments',
  scene: 'environments',
  focus: 'always',
  slide: `## Local, managed, and self-managed

Every cluster serves the **same API**. What changes is who keeps the control plane, the nodes, and the plumbing alive.

### Three kinds of cluster
- **Local** — a learning cluster on one machine; it proves behaviour, not availability
- **Managed** — a provider runs the control plane; you still choose and upgrade nodes
- **Self-managed** — you run everything, including **etcd** and its backups

### Constant in every case
- Your manifests, images, data, and access rules
- Record the **versions** you run — behaviour differs by version
- A demo that works locally is not a production claim

### In this course
- Examples assume a **prepared learning cluster** and one namespace`,
  narration:
    "You will meet Kubernetes in three broad settings, and it helps to know which one you are in. A local cluster runs on one machine, often as a single node. It is ideal for learning, because you can break it and reset it freely, but it proves that something behaves correctly, not that it would stay available. A managed cluster is run by a provider. They operate the control plane, and often its upgrades, while you still choose node pools, decide when nodes are upgraded, and pay for what you use. Managed clusters also tend to come with integrated storage and load balancers. A self-managed cluster is the other extreme. You run every component yourself, including etcd and its backups, you choose the networking and storage plugins, and you are the one who gets paged. All three serve the same API, so everything in this course applies to each of them. And one thing never moves: your manifests, your images, your data, and who has access stay your responsibility everywhere. Throughout the course, record the versions you actually run, and remember that a demonstration on a laptop is not a claim about production.",
}
