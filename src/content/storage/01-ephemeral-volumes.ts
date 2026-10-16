import type { Section } from '../types'

export const ephemeralVolumes: Section = {
  id: 'ephemeral-volumes',
  title: 'Ephemeral volumes and Pod lifetime',
  scene: 'volume-lifetimes',
  focus: 'emptydir',
  slide: `## Ephemeral volumes and Pod lifetime

Before choosing storage, ask one question: **how long must this data live?** Each kind of volume answers differently.

### Shorter than you think
- A container's own filesystem is lost on **every restart**
- An **emptyDir** survives restarts, but not the Pod
- Both vanish when a Pod is **replaced**

### Projected, not written
- ConfigMap and Secret volumes come **from the API**
- Read-only by default; never a place to keep data

### Outliving the Pod
- A **PersistentVolumeClaim** is separate from any Pod
- A replacement Pod mounts the **same** claim
- This is where PostgreSQL keeps its data directory

### Rule of thumb
- Scratch and caches: emptyDir. Records: a claim.`,
  narration:
    "Before choosing storage, ask one question: how long must this data live? Kubernetes offers several places a container can write, and they answer that question very differently. The container's own filesystem, the writable layer over its image, lives exactly as long as that container. Every restart starts fresh. An emptyDir volume lives as long as the Pod. It survives container restarts, and can be shared between the containers in the Pod, which suits scratch files and caches. But when the Pod is replaced, as Chapter 4 showed happens routinely, both are gone. ConfigMap and Secret volumes are a different category. They are projected from objects in the API, read-only by default, and they are not a place to write anything. Data that must outlive any individual Pod needs a PersistentVolumeClaim. A claim is an object of its own, separate from the Pod that uses it. When the Pod is replaced, the replacement mounts the same claim, and the data is still there. That is where PostgreSQL will keep its data directory. So the rule of thumb is simple: scratch space and caches can be ephemeral; records belong on a claim.",
}
