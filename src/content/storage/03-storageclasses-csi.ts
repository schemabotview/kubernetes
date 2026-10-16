import type { Section } from '../types'

export const storageclassesCsi: Section = {
  id: 'storageclasses-csi',
  title: 'StorageClasses, CSI, and dynamic provisioning',
  scene: 'dynamic-provisioning',
  focus: 'class',
  slide: `## StorageClasses, CSI, and provisioning

Nobody creates volumes by hand any more. A claim names a **StorageClass**, and a **CSI driver** creates the storage on demand.

### The StorageClass
- \`provisioner\` — which CSI driver handles it
- \`parameters\` — disk type, encryption, and so on
- \`reclaimPolicy\` — what happens to the disk later
- \`volumeBindingMode\` — provision now, or wait for a Pod

### The CSI driver
- Talks to the real backend: cloud, SAN, or local disk
- Creates, attaches, and mounts the volume

### In practice
- Clusters usually mark one class as **default**
- Classes differ between environments — record yours
- A claim stuck **Pending** often means no matching class`,
  narration:
    "In practice, almost nobody creates PersistentVolumes by hand. Instead, a claim names a StorageClass, and storage is created on demand. That is dynamic provisioning. The StorageClass is a recipe written by the platform team. Its provisioner names which storage driver handles it. Its parameters describe what kind of storage to create, such as the disk type or whether it is encrypted. Its reclaim policy says what happens to the disk when the claim is deleted, which is the next section. And its binding mode says whether to create the volume immediately, or wait until a Pod using the claim is scheduled, so the disk can be created where that Pod will run. The driver itself uses the Container Storage Interface, or CSI. It is the component that talks to the real backend, whether a cloud disk service, a storage array, or local disks, and creates, attaches, and mounts volumes. Clusters usually mark one class as the default, which a claim gets if it names none. Classes differ a lot between environments, so record which one you used. And when a claim stays Pending, the first thing to check is whether a matching class and working driver exist.",
}
