import type { Scene } from '@graphlearning/flow'

// §2 — desired versus observed state. The code card is an ILLUSTRATIVE object (no cluster was run);
// the loop under it is the controller pattern every later chapter reuses.
export const reconcileLoop: Scene = {
  id: 'reconcile-loop',
  title: 'Spec in, status out, loop in between',
  flow: 'TB',
  nodes: [
    {
      id: 'object',
      kind: 'code',
      filename: 'catalogue-api (illustrative)',
      label: `spec:
  replicas: 2          # desired: what you declared
status:
  replicas: 1          # observed: what exists now
  readyReplicas: 1     # observed: what can serve`,
    },
    {
      id: 'loop',
      label: 'The controller loop',
      sub: 'runs continuously, not once',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'observe', label: 'Observe', sub: 'read current status', pattern: 'network', icon: 'search' },
        { id: 'compare', label: 'Compare', sub: 'desired 2, observed 1', pattern: 'service', icon: 'scale' },
        { id: 'act', label: 'Act', sub: 'create one more Pod', pattern: 'service', icon: 'zap' },
        { id: 'requeue', label: 'Requeue', sub: 'check again on the next change', pattern: 'service', icon: 'repeat' },
      ],
    },
    { id: 'disturbance', label: 'Node lost', sub: 'observed drops again', pattern: 'warn', icon: 'skull' },
    { id: 'converged', label: 'Converged', sub: 'status matches spec, until it drifts again', pattern: 'storage', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'object', target: 'loop', label: 'watched' },
    { source: 'loop', target: 'converged', label: 'gap closed' },
    { source: 'disturbance', target: 'loop', label: 'reopens the gap', dashed: true },
  ],
}
