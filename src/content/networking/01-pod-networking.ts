import type { Section } from '../types'

export const podNetworking: Section = {
  id: 'pod-networking',
  title: 'Pod addressing and CNI responsibilities',
  scene: 'pod-network',
  focus: 'cluster-net',
  slide: `## Pod addressing and the CNI

Every Pod gets **its own IP address**, and any Pod can reach any other directly, across nodes, without NAT.

### Who provides it
- A **CNI plugin** assigns Pod IPs and routes between nodes
- Kubernetes defines the model; the plugin implements it
- Plugins differ in features such as **NetworkPolicy** support

### What the model gives you
- No port mapping: containers use their real ports
- Pods on different nodes talk as if on one network
- Every Pod can reach every other **by default**
- Two containers in one Pod cannot share a port

### What it does not give you
- A Pod IP **changes** when the Pod is replaced
- Clients need a stable name — the **Service**
- Record which CNI your cluster runs`,
  narration:
    "Kubernetes networking starts from a simple model. Every Pod gets its own IP address, and any Pod can reach any other Pod directly, even on a different node, without network address translation in between. Compare that with the Docker course, where you mapped container ports onto host ports. Here there is no mapping; a container listens on its real port at its Pod's address. Kubernetes defines this model, but it does not implement it. A network plugin, using the Container Network Interface, or CNI, assigns Pod addresses and arranges the routes between nodes. Different clusters use different plugins, and they differ in important ways, including whether they enforce the network policies we meet in Chapter 9. So record which plugin your cluster runs. The model also has a clear limit, shown at the bottom of the diagram. A Pod's address is not stable. When the ReplicaSet replaces a Pod, the new one usually has a different IP. And an address is not a name that clients can be configured with. So no client should ever hold on to a Pod IP. What clients need is a stable front for a changing set of Pods, and that is the Service.",
}
