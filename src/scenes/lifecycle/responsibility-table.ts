import type { Scene } from '@graphlearning/flow'

// §12.1 — who carries each operational responsibility in each environment. Typical defaults,
// not a contract: the bottom card says to write your own.
export const responsibilityTable: Scene = {
  id: 'responsibility-table',
  title: 'Who does what, where',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'duty-table',
      kind: 'table',
      label: 'Typical responsibilities (check your provider)',
      headers: ['responsibility', 'local', 'managed', 'self-managed'],
      values: [
        ['control plane', 'tool', 'provider', 'you'],
        ['etcd backups', 'nobody', 'provider', 'you'],
        ['node OS and upgrades', 'tool', 'shared', 'you'],
        ['CNI and CSI', 'tool', 'provider', 'you'],
        ['workloads and data', 'you', 'you', 'you'],
        ['access and audit', 'you', 'shared', 'you'],
      ],
    },
    {
      id: 'duty-notes',
      label: 'Reading it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'shared-means', label: 'Shared', sub: 'read the fine print', pattern: 'warn', icon: 'scale' },
        { id: 'write-own', label: 'Write your own', sub: 'names, not roles', pattern: 'storage', icon: 'pencil' },
      ],
    },
  ],
  edges: [{ source: 'duty-table', target: 'duty-notes' }],
}
