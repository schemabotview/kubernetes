import type { Scene } from '@graphlearning/flow'

// §12.3 — a PodDisruptionBudget limits VOLUNTARY evictions only; the warn band is what it cannot
// prevent, and the misconfiguration that blocks drains forever.
export const disruptionBudget: Scene = {
  id: 'disruption-budget',
  title: 'What a budget can and cannot stop',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'pdb', label: 'Disruption budget', sub: 'catalogue-api: minAvailable 2 of 3', pattern: 'service', icon: 'shieldcheck' },
    {
      id: 'voluntary',
      label: 'Voluntary — the budget is checked',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'vol-drain', label: 'Node drain', sub: 'one eviction at a time', pattern: 'storage', icon: 'power' },
        { id: 'vol-scale', label: 'Node scale-down', sub: 'waits for the budget', pattern: 'storage', icon: 'server' },
      ],
    },
    {
      id: 'involuntary',
      label: 'Involuntary — no budget can help',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'inv-crash', label: 'Node crash', sub: 'Pods simply vanish', pattern: 'warn', icon: 'skull' },
        { id: 'inv-zone', label: 'Zone outage', sub: 'spread is the defence', pattern: 'warn', icon: 'globe' },
      ],
    },
    { id: 'pdb-trap', label: 'minAvailable = replicas', sub: 'drains block forever', pattern: 'warn', icon: 'lock' },
  ],
  edges: [
    { source: 'pdb', target: 'voluntary', label: 'limits' },
    { source: 'voluntary', target: 'involuntary', label: 'but not' },
    { source: 'involuntary', target: 'pdb-trap', dashed: true },
  ],
}
