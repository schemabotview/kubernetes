import type { Scene } from '@graphlearning/flow'

// §7.2 — the Pod names a claim, the claim binds a volume. The split is between what an app asks
// for and what the platform supplies.
export const claimBinding: Scene = {
  id: 'claim-binding',
  title: 'Asking for storage, not choosing a disk',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'pod-mount', label: 'postgres Pod', sub: 'mounts the claim', pattern: 'service', icon: 'database' },
    { id: 'pvc', label: 'PVC', sub: '10Gi, ReadWriteOnce', pattern: 'user', icon: 'receipt' },
    { id: 'pv', label: 'PV', sub: 'a real disk, bound 1:1', pattern: 'storage', icon: 'harddrive' },
    {
      id: 'owners',
      label: 'Who writes which',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'app-side', label: 'Application', sub: 'Pod and PVC', pattern: 'user', icon: 'users' },
        { id: 'platform-side', label: 'Platform', sub: 'PV and StorageClass', pattern: 'storage', icon: 'building' },
      ],
    },
  ],
  edges: [
    { source: 'pod-mount', target: 'pvc', label: 'claimName' },
    { source: 'pvc', target: 'pv', label: 'Bound' },
    { source: 'pv', target: 'owners', dashed: true },
  ],
}
