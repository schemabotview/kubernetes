import type { Section } from '../types'

export const pvAndPvc: Section = {
  id: 'pv-and-pvc',
  title: 'PV and PVC separation and binding',
  scene: 'claim-binding',
  focus: 'pvc',
  slide: `## PersistentVolumes and claims

Storage is split in two: the application **asks** with a claim, and the platform **supplies** a volume.

### The two objects
- **PVC** — a request: size, access mode, class
- **PV** — an actual piece of storage in the cluster
- A claim **binds** to one volume, one to one

### Why split them
- Manifests stay **portable** across environments
- Applications never name a specific disk
- Storage can outlive both the Pod and the claim

### Reading the state
- PVC **Pending** — nothing suitable exists yet
- PVC **Bound** — names the PV it received
- The Pod waits until its claim is bound

### Scope
- PVCs are namespaced; PVs are **cluster-scoped**`,
  narration:
    "Persistent storage in Kubernetes is deliberately split into two objects, so that applications ask for storage without choosing a particular disk. The PersistentVolumeClaim is the application's request: I need ten gibibytes, mountable read-write by one node, from this class of storage. The PersistentVolume is an actual piece of storage known to the cluster, such as a cloud disk. When a suitable volume exists, the claim binds to it, one to one, and the Pod mounts the claim by name. Why bother with the split? Because it keeps manifests portable. The same claim works on a laptop cluster and on a cloud provider, and the platform decides what backs it. It also means the storage has a lifetime of its own, independent of the Pod, and, depending on policy, even of the claim. Reading the state is straightforward. A claim that is Pending has not found, or been given, a suitable volume yet, and a Pod using it will wait. A claim that is Bound names the volume it received. One detail of scope matters for permissions later: claims live in your namespace, but volumes are cluster-scoped objects, usually managed by the platform rather than by application teams.",
}
