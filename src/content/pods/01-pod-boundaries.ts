import type { Section } from '../types'

export const podBoundaries: Section = {
  id: 'pod-boundaries',
  title: 'Shared Pod network and storage, and container boundaries',
  scene: 'pod-boundary',
  focus: 'shared',
  slide: `## The Pod boundary

A **Pod** is the smallest unit Kubernetes schedules: one or more containers that always run **together, on one node**.

### Shared inside a Pod
- **One IP address** — containers meet on \`localhost\`
- **Volumes** can be mounted into several containers

### Still separate per container
- Each has its own **image** and filesystem
- Each runs its own process and restarts on its own
- Each declares its own resource requests

### When to share a Pod
- Only for helpers that must live and die **with** the app
- The API and its database belong in **separate** Pods

### Pods are disposable
- A Pod is never moved; it is **replaced** with a new name and IP
- Anything written inside a container is lost with it`,
  narration:
    "A Pod is the smallest thing Kubernetes schedules. It is one or more containers that always run together, on the same node, and are created and removed as a unit. Inside the Pod, some things are shared. All its containers share one network namespace, so the Pod has a single IP address, and containers can talk to each other on localhost, which also means they cannot both listen on the same port. They can also share volumes, so one container can write a file that another reads. Other things stay separate. Each container has its own image and its own filesystem, runs its own process, restarts independently, and declares its own resource requests. That raises the design question: when should two containers share a Pod? Only when the helper must live and die with the main application, such as an agent shipping its logs. The catalogue API and its PostgreSQL database do not qualify. They scale differently, fail differently, and have different data lifetimes, so they belong in separate Pods, connected over the network, which is exactly how the rest of this course will build them.",
}
