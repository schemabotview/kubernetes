import type { Scene } from '@graphlearning/flow'

// §6.1 — every Pod gets a routable IP across nodes, provided by the CNI plugin. The bottom band is
// what that network does not give you: a stable address.
export const podNetwork: Scene = {
  id: 'pod-network',
  title: 'A flat Pod network',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'cluster-net',
      label: 'One cluster network — provided by the CNI plugin',
      pattern: 'network',
      cols: 2,
      children: [
        {
          id: 'node-a',
          label: 'Node A',
          pattern: 'group',
          children: [
            { id: 'pod-a1', label: 'api-a', sub: '10.244.1.7', pattern: 'service', icon: 'box' },
            { id: 'pod-a2', label: 'postgres-0', sub: '10.244.1.9', pattern: 'storage', icon: 'database' },
          ],
        },
        {
          id: 'node-b',
          label: 'Node B',
          pattern: 'group',
          children: [
            { id: 'pod-b1', label: 'api-b', sub: '10.244.2.4', pattern: 'service', icon: 'box' },
            { id: 'pod-b2', label: 'import-job', sub: '10.244.2.8', pattern: 'user', icon: 'clock' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      label: 'What a Pod IP is not',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'not-stable', label: 'Not stable', sub: 'a replacement gets a new one', pattern: 'warn', icon: 'repeat' },
        { id: 'not-named', label: 'Not a name', sub: 'clients need a Service', pattern: 'warn', icon: 'tag' },
      ],
    },
  ],
  edges: [{ source: 'cluster-net', target: 'limits', label: 'routable without NAT, but' }],
}
