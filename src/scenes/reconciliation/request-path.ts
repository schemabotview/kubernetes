import type { Scene } from '@graphlearning/flow'

// §4 — the path from `kubectl apply` to a running container. Every component talks to the API
// server and none to each other; the badges give the order. The watchers and the node are bands so
// the board stacks toward the pane's ~1:1 aspect instead of fanning out into one wide row.
export const requestPath: Scene = {
  id: 'request-path',
  title: 'From declared intent to a running process',
  flow: 'TB',
  nodes: [
    { id: 'kubectl', label: 'kubectl apply', sub: 'sends the manifest', pattern: 'user', icon: 'terminal' },
    { id: 'api', label: 'API server', sub: 'authenticates, validates, admits', pattern: 'service', icon: 'dooropen' },
    { id: 'store', label: 'etcd', sub: 'the object is persisted', pattern: 'storage', icon: 'database' },
    {
      id: 'watchers',
      label: 'Control-plane watchers',
      pattern: 'service',
      cols: 1,
      children: [
        { id: 'controller', label: 'Controller', sub: 'sees 0 of 2, creates Pods', pattern: 'service', icon: 'repeat' },
        { id: 'sched', label: 'Scheduler', sub: 'binds each Pod to a node', pattern: 'service', icon: 'calendar' },
      ],
    },
    {
      id: 'node',
      label: 'The chosen node',
      pattern: 'network',
      flow: 'LR',
      children: [
        { id: 'kubelet', label: 'kubelet', sub: 'sees a Pod bound here', pattern: 'network', icon: 'gears' },
        { id: 'runtime', label: 'Runtime', sub: 'pulls image, starts process', pattern: 'network', icon: 'box' },
      ],
      edges: [{ source: 'kubelet', target: 'runtime', label: 'CRI' }],
    },
  ],
  edges: [
    { source: 'kubectl', target: 'api', label: 'HTTPS' },
    { source: 'api', target: 'store', label: 'write' },
    { source: 'api', target: 'watchers', label: 'watch', bidirectional: true },
    { source: 'watchers', target: 'node', label: 'via the API', dashed: true },
  ],
}
