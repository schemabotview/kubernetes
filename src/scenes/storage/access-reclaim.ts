import type { Scene } from '@graphlearning/flow'

// §7.4 — access modes, topology and reclaim are separate decisions; none is a database
// concurrency guarantee, which is the fourth card.
export const accessReclaim: Scene = {
  id: 'access-reclaim',
  title: 'Three storage decisions, one non-guarantee',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'modes',
      kind: 'list',
      label: 'Access modes',
      sub: 'how it may be attached',
      icon: 'link',
      pattern: 'service',
      items: ['ReadWriteOnce — one node', 'ReadWriteOncePod — one Pod', 'ReadOnlyMany — many readers', 'ReadWriteMany — if supported'],
    },
    {
      id: 'topology',
      kind: 'list',
      label: 'Topology',
      sub: 'where it can be used',
      icon: 'globe',
      pattern: 'network',
      items: ['A disk lives in one zone', 'Pods must schedule there', 'Wait for the first consumer', 'Mismatch → Pod Pending'],
    },
    {
      id: 'reclaim-policy',
      kind: 'list',
      label: 'Reclaim',
      sub: 'after the claim is deleted',
      icon: 'trash',
      pattern: 'warn',
      items: ['Delete — the disk goes too', 'Retain — kept for an admin', 'Check before deleting a PVC', 'Dynamic default is often Delete'],
    },
    {
      id: 'not-guarantee',
      kind: 'list',
      label: 'Not a guarantee',
      sub: 'of data correctness',
      icon: 'ban',
      pattern: 'warn',
      items: ['RWX ≠ safe concurrent writes', 'Two databases on one disk corrupt it', 'Consistency is the database’s job', 'One writer, by design'],
    },
  ],
  edges: [],
}
