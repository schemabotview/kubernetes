import type { Scene } from '@graphlearning/flow'

// §4.2 — delete one owned Pod and watch the ReplicaSet replace it with a NEW identity.
export const replacement: Scene = {
  id: 'replacement',
  title: 'Replaced, not restored',
  flow: 'TB',
  nodes: [
    { id: 'spec', label: 'replicas: 2', sub: 'the ReplicaSet’s spec', pattern: 'user', icon: 'pencil' },
    {
      id: 'before',
      label: 'After deleting api-7f9c-b',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'a-before', label: 'api-7f9c-a', sub: 'running, untouched', pattern: 'network', icon: 'box' },
        { id: 'b-gone', label: 'api-7f9c-b', sub: 'terminating', pattern: 'warn', icon: 'trash' },
      ],
    },
    {
      id: 'after',
      label: 'After reconciliation',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'a-after', label: 'api-7f9c-a', sub: 'same Pod as before', pattern: 'network', icon: 'box' },
        { id: 'c-new', label: 'api-7f9c-x', sub: 'new name, UID and IP', pattern: 'storage', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [
    { source: 'spec', target: 'before', label: 'observed 1 of 2' },
    { source: 'before', target: 'after', label: 'creates one Pod' },
  ],
}
