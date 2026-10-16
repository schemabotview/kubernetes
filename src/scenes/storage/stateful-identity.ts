import type { Scene } from '@graphlearning/flow'

// §7.5 — what a StatefulSet makes stable, and what replacing postgres-0 preserves.
export const statefulIdentity: Scene = {
  id: 'stateful-identity',
  title: 'Replaced, but still postgres-0',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'statefulset', label: 'StatefulSet', sub: 'postgres, replicas: 1', pattern: 'service', icon: 'layers' },
    {
      id: 'stable',
      label: 'Stable across replacement',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'stable-name', label: 'postgres-0', sub: 'the same Pod name', pattern: 'storage', icon: 'tag' },
        { id: 'stable-claim', label: 'data-postgres-0', sub: 'the same PVC, reattached', pattern: 'storage', icon: 'harddrive' },
        { id: 'stable-dns', label: 'Stable DNS', sub: 'via a headless Service', pattern: 'storage', icon: 'globe' },
        { id: 'ordered', label: 'Ordered', sub: 'start and stop by ordinal', pattern: 'storage', icon: 'sortarrows' },
      ],
    },
    { id: 'single', label: 'Still one instance', sub: 'no failover, no replica', pattern: 'warn', icon: 'skull' },
  ],
  edges: [
    { source: 'statefulset', target: 'stable', label: 'volumeClaimTemplates' },
    { source: 'stable', target: 'single', dashed: true },
  ],
}
