import type { Section } from '../types'

export const kubeconfigContexts: Section = {
  id: 'kubeconfig-contexts',
  title: 'Kubeconfig, contexts, and namespaces',
  scene: 'kubeconfig-target',
  focus: 'context',
  slide: `## Kubeconfig, contexts, and namespaces

Before kubectl sends anything, it decides **which cluster**, **as whom**, and **in which namespace**. Get that wrong and a correct command lands in the wrong place.

### What a kubeconfig holds
- **Clusters** — API server addresses and their certificates
- **Users** — the credentials presented to each one
- **Contexts** — named bundles of cluster, user, and namespace

### Namespaces
- Scope names: one name can exist in two namespaces
- Are **not** a security boundary on their own
- Some objects, like nodes, are **cluster-scoped** and have no namespace

### The habit
- Run \`kubectl config current-context\` before any change
- Pass \`-n\` explicitly in examples, even when a default is set`,
  narration:
    "Every kubectl command makes a decision before it sends anything: which cluster to talk to, which identity to present, and which namespace to work in. Those three answers live in a kubeconfig file. It lists clusters, meaning API server addresses and the certificates to trust; users, meaning the credentials to present; and contexts, which bundle one cluster, one user, and a default namespace under a single name. The current context is simply the bundle in use right now. This matters because Kubernetes will carry out a perfectly correct command in the wrong place without complaint. If your current context points at a shared cluster rather than your learning cluster, an apply or a delete goes there. Namespaces add a second layer. They scope names, so the same object name can exist in two namespaces, but on their own they are not a security boundary, and some objects, such as nodes, are cluster-scoped and belong to no namespace at all. So the habit for this whole course is simple. Check the current context before any change, and name the namespace explicitly, even when a default is already set.",
}
