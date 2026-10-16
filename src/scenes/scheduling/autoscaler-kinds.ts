import type { Scene } from '@graphlearning/flow'

// §8.7 — three autoscalers, each changing a different number, plus the trade-offs card.
export const autoscalerKinds: Scene = {
  id: 'autoscaler-kinds',
  title: 'Which number changes',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'kind-hpa',
      kind: 'list',
      label: 'Horizontal',
      sub: 'changes the replica count',
      icon: 'copy',
      pattern: 'service',
      items: ['Built in', 'For stateless services', 'Needs metrics and requests', 'Fast-ish: seconds to minutes'],
    },
    {
      id: 'kind-vpa',
      kind: 'list',
      label: 'Vertical',
      sub: 'changes the requests',
      icon: 'ruler',
      pattern: 'network',
      items: ['An add-on', 'Recommends or applies sizes', 'May recreate Pods', 'Avoid mixing with HPA on CPU'],
    },
    {
      id: 'kind-nodes',
      kind: 'list',
      label: 'Node autoscaling',
      sub: 'changes the node count',
      icon: 'server',
      pattern: 'storage',
      items: ['Provider or add-on', 'Triggered by Pending Pods', 'Minutes, not seconds', 'Removes idle nodes'],
    },
    {
      id: 'tradeoffs',
      kind: 'list',
      label: 'Trade-offs',
      sub: 'none is free',
      icon: 'scale',
      pattern: 'warn',
      items: ['Cost versus headroom', 'Reaction time versus flapping', 'Scale-down disrupts Pods', 'Set min and max bounds'],
    },
  ],
  edges: [],
}
