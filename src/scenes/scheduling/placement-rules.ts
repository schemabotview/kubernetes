import type { Scene } from '@graphlearning/flow'

// §8.3 — four placement tools: two that attract a Pod to nodes, two that let nodes repel Pods.
export const placementRules: Scene = {
  id: 'placement-rules',
  title: 'Attract and repel',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'node-selector',
      kind: 'list',
      label: 'nodeSelector',
      sub: 'simple and hard',
      icon: 'funnel',
      pattern: 'service',
      items: ['Exact label match', 'disktype=ssd', 'No match → Pending', 'Easiest to read'],
    },
    {
      id: 'required-affinity',
      kind: 'list',
      label: 'Required affinity',
      sub: 'must be satisfied',
      icon: 'lock',
      pattern: 'warn',
      items: ['Richer expressions', 'Zone in [a, b]', 'Impossible → Pending', 'Use sparingly'],
    },
    {
      id: 'preferred-affinity',
      kind: 'list',
      label: 'Preferred affinity',
      sub: 'a weighted preference',
      icon: 'star',
      pattern: 'storage',
      items: ['Scores candidate nodes', 'Never blocks placement', 'Weights 1–100', 'Good default'],
    },
    {
      id: 'taints',
      kind: 'list',
      label: 'Taints and tolerations',
      sub: 'nodes repel Pods',
      icon: 'ban',
      pattern: 'network',
      items: ['Taint: keep others off', 'Toleration: allowed on', 'Allowed ≠ required', 'Pair with affinity to pin'],
    },
  ],
  edges: [],
}
