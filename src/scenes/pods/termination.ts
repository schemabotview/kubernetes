import type { Scene } from '@graphlearning/flow'

// §3.7 — the termination sequence, top to bottom. Endpoint removal and SIGTERM race, which is
// why the app should keep serving briefly after the signal.
export const termination: Scene = {
  id: 'termination',
  title: 'How a Pod stops',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'delete', label: 'Deletion', sub: 'the grace period starts', pattern: 'user', icon: 'trash' },
    {
      id: 'parallel',
      label: 'At about the same time',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'endpoints', label: 'Endpoints', sub: 'Pod marked terminating', pattern: 'network', icon: 'circleslash' },
        { id: 'sigterm', label: 'SIGTERM', sub: 'after any preStop hook', pattern: 'network', icon: 'zap' },
      ],
    },
    { id: 'grace', label: 'Grace period', sub: 'finish requests, close pools', pattern: 'service', icon: 'clock' },
    { id: 'sigkill', label: 'SIGKILL', sub: 'if still running at the end', pattern: 'warn', icon: 'skull' },
  ],
  edges: [
    { source: 'delete', target: 'parallel' },
    { source: 'parallel', target: 'grace', label: 'default 30s' },
    { source: 'grace', target: 'sigkill', label: 'timeout', dashed: true },
  ],
}
