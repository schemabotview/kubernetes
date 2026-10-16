import type { Scene } from '@graphlearning/flow'

// §8.2 — placement accounting: allocatable minus the SUM OF REQUESTS, not measured usage. The
// numbers are illustrative.
export const nodeCapacity: Scene = {
  id: 'node-capacity',
  title: 'Does one more replica fit?',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'capacity-table',
      kind: 'table',
      label: 'Node capacity (illustrative)',
      headers: ['node', 'allocatable CPU', 'requested', 'free to request', 'measured use'],
      values: [
        ['node-1', '2000m', '1800m', '200m', '600m'],
        ['node-2', '2000m', '1200m', '800m', '1500m'],
        ['node-3', '2000m', '1950m', '50m', '300m'],
      ],
    },
    { id: 'new-replica', label: 'New API replica', sub: 'requests 500m CPU', pattern: 'user', icon: 'box' },
    {
      id: 'outcomes',
      label: 'The scheduler’s answer',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'fits', label: 'node-2 only', sub: '800m free to request', pattern: 'storage', icon: 'circlecheck' },
        { id: 'pending', label: 'Else Pending', sub: 'FailedScheduling event', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'capacity-table', target: 'new-replica', label: 'sum of requests' },
    { source: 'new-replica', target: 'outcomes' },
  ],
}
