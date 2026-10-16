import type { Scene } from '@graphlearning/flow'

// §4.6 — one Pod per node versus N Pods anywhere, on the same four nodes.
export const daemonsetSpread: Scene = {
  id: 'daemonset-spread',
  title: 'Per node versus per replica',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'daemonset',
      label: 'DaemonSet — one agent per eligible node',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'ds-1', label: 'node-1', sub: 'log agent', pattern: 'network', icon: 'server' },
        { id: 'ds-2', label: 'node-2', sub: 'log agent', pattern: 'network', icon: 'server' },
        { id: 'ds-3', label: 'node-3', sub: 'log agent', pattern: 'network', icon: 'server' },
        { id: 'ds-4', label: 'node-4', sub: 'added later: agent follows', pattern: 'network', icon: 'server' },
      ],
    },
    {
      id: 'deployment',
      label: 'Deployment — 2 replicas, placed by the scheduler',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'dp-1', label: 'node-1', sub: 'api replica', pattern: 'service', icon: 'server' },
        { id: 'dp-2', label: 'node-2', sub: 'nothing', pattern: 'group', icon: 'circleslash' },
        { id: 'dp-3', label: 'node-3', sub: 'api replica', pattern: 'service', icon: 'server' },
        { id: 'dp-4', label: 'node-4', sub: 'nothing', pattern: 'group', icon: 'circleslash' },
      ],
    },
  ],
  edges: [{ source: 'daemonset', target: 'deployment', label: 'same nodes', dashed: true }],
}
