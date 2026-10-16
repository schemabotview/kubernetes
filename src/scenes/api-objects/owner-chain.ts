import type { Scene } from '@graphlearning/flow'

// §2.6 — owner references form the tree garbage collection walks; finalizers hold a deletion
// open until someone's cleanup finishes.
export const ownerChain: Scene = {
  id: 'owner-chain',
  title: 'Owners, garbage collection, finalizers',
  flow: 'TB',
  nodes: [
    { id: 'deployment', label: 'Deployment', sub: 'catalogue-api', pattern: 'service', icon: 'layers' },
    { id: 'replicaset', label: 'ReplicaSet', sub: 'ownerReference → Deployment', pattern: 'service', icon: 'copy' },
    {
      id: 'pods',
      label: 'Owned Pods',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'pod-a', label: 'Pod a', sub: 'ownerReference → RS', pattern: 'network', icon: 'box' },
        { id: 'pod-b', label: 'Pod b', sub: 'ownerReference → RS', pattern: 'network', icon: 'box' },
      ],
    },
    {
      id: 'deletion',
      label: 'When the Deployment is deleted',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'cascade', label: 'Cascade', sub: 'dependents deleted too', pattern: 'warn', icon: 'trash' },
        { id: 'orphan', label: 'Orphan', sub: 'dependents left running', pattern: 'warn', icon: 'scissors' },
        { id: 'finalizer', label: 'Finalizer', sub: 'deletion waits for cleanup', pattern: 'warn', icon: 'lock' },
        { id: 'bypass', label: 'Bypass', sub: 'removing it skips cleanup', pattern: 'warn', icon: 'skull' },
      ],
    },
  ],
  edges: [
    { source: 'deployment', target: 'replicaset', label: 'owns' },
    { source: 'replicaset', target: 'pods', label: 'owns' },
    { source: 'pods', target: 'deletion', label: 'collected by', dashed: true },
  ],
}
