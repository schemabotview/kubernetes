import type { Scene } from '@graphlearning/flow'

// §7.3 — dynamic provisioning: the claim names a class, the class names a CSI driver, the driver
// creates real storage and a PV to represent it.
export const dynamicProvisioning: Scene = {
  id: 'dynamic-provisioning',
  title: 'From a claim to a real disk',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'claim', label: 'PVC', sub: 'storageClassName: standard', pattern: 'user', icon: 'receipt' },
    {
      id: 'class',
      label: 'StorageClass standard',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'provisioner', label: 'provisioner', sub: 'which CSI driver', pattern: 'service', icon: 'plug' },
        { id: 'parameters', label: 'parameters', sub: 'disk type, encryption', pattern: 'service', icon: 'braces' },
        { id: 'reclaim', label: 'reclaimPolicy', sub: 'Delete or Retain', pattern: 'service', icon: 'trash' },
        { id: 'binding', label: 'binding mode', sub: 'wait for the Pod', pattern: 'service', icon: 'clock' },
      ],
    },
    { id: 'csi', label: 'CSI driver', sub: 'creates and attaches', pattern: 'network', icon: 'gears' },
    { id: 'backend', label: 'Storage backend', sub: 'cloud disk, SAN, local', pattern: 'storage', icon: 'harddrive' },
  ],
  edges: [
    { source: 'claim', target: 'class' },
    { source: 'class', target: 'csi', label: 'CreateVolume' },
    { source: 'csi', target: 'backend' },
  ],
}
