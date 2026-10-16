import type { Section } from '../types'

export const serviceTypesSection: Section = {
  id: 'service-types',
  title: 'ClusterIP, NodePort, LoadBalancer, and port-forward',
  scene: 'service-types',
  focus: 'type-forward',
  slide: `## Service types and port-forward

The Service **type** decides how far a Service reaches: inside the cluster, onto each node, or out to the internet.

### The three types
- **ClusterIP** — inside the cluster only; the default
- **NodePort** — also a fixed port on **every node**
- **LoadBalancer** — also an external balancer, if the environment provides one

### Qualify by environment
- A local cluster may leave a LoadBalancer **Pending**
- Managed clusters provision one per Service, at a cost
- Firewalls and provider settings still apply

### port-forward is different
- A temporary tunnel from your machine to **one Pod**
- Stops when the command stops; not for users
- The database stays **ClusterIP**, never exposed
- Use it before any external traffic`,
  narration:
    "The type of a Service decides how far its reach extends. ClusterIP is the default, and it means inside the cluster only: a virtual IP and a DNS name reachable from Pods, but not from outside. That is exactly right for the database. NodePort builds on that, and also opens a fixed high port on every node, so anything that can reach a node can reach the Service. It exposes node addresses, and it is rarely the final answer. LoadBalancer builds on NodePort, and also asks the environment to provision an external load balancer in front of it. The key word is asks. A managed cloud cluster will usually create one, often one per Service, which costs money. A local learning cluster may have nothing to provide it, so the Service sits with its external address Pending indefinitely. Do not assume automatic infrastructure everywhere. And kubectl port-forward is not a Service type at all. It is a temporary tunnel from your own machine, through the API server, to one Pod, which ends when the command ends. It is how this course first reaches the catalogue API, and it is for learning and debugging, never for real users.",
}
