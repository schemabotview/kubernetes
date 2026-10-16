import type { Scene } from '@graphlearning/flow'

// §8.4 — two replicas colocated versus spread across zones; one failure domain lost in each.
export const spreadDomains: Scene = {
  id: 'spread-domains',
  title: 'One zone fails',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'colocated',
      label: 'Colocated — both replicas in zone a',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'co-a', label: 'zone a', sub: 'api-a, api-b — lost', pattern: 'warn', icon: 'skull' },
        { id: 'co-b', label: 'zone b', sub: 'nothing to serve', pattern: 'group', icon: 'circleslash' },
      ],
    },
    {
      id: 'spread',
      label: 'Spread — maxSkew 1 across zones',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'sp-a', label: 'zone a', sub: 'api-a — lost', pattern: 'warn', icon: 'skull' },
        { id: 'sp-b', label: 'zone b', sub: 'api-b — still serving', pattern: 'storage', icon: 'circlecheck' },
      ],
    },
    {
      id: 'caveats',
      label: 'Still true',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'one-db', label: 'One database', sub: 'its zone is the limit', pattern: 'service', icon: 'database' },
        { id: 'capacity-left', label: 'Survivor load', sub: 'needs room for both', pattern: 'service', icon: 'gauge' },
      ],
    },
  ],
  edges: [
    { source: 'colocated', target: 'spread', label: 'versus' },
    { source: 'spread', target: 'caveats', dashed: true },
  ],
}
