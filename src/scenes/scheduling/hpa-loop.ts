import type { Scene } from '@graphlearning/flow'

// §8.6 — the autoscaling chain, and the three places it breaks in the plan: no metrics, no
// capacity, and a bottleneck more replicas cannot fix.
export const hpaLoop: Scene = {
  id: 'hpa-loop',
  title: 'Demand to replicas to nodes',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'chain',
      label: 'The autoscaling chain',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'demand', label: 'Demand', sub: 'requests per second rise', pattern: 'user', icon: 'users' },
        { id: 'metrics', label: 'Metrics', sub: 'CPU use ÷ CPU request', pattern: 'network', icon: 'barchart' },
        { id: 'hpa', label: 'HPA', sub: 'desired = ceil(n × ratio)', pattern: 'service', icon: 'sigma' },
        { id: 'scheduling', label: 'Scheduling', sub: 'new Pods need room', pattern: 'service', icon: 'calendar' },
      ],
    },
    {
      id: 'breaks',
      label: 'Where it breaks',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'no-metrics', label: 'No metrics', sub: 'metrics API missing', pattern: 'warn', icon: 'circleslash' },
        { id: 'no-requests', label: 'No requests', sub: 'utilisation undefined', pattern: 'warn', icon: 'receipt' },
        { id: 'no-capacity', label: 'No capacity', sub: 'replicas stay Pending', pattern: 'warn', icon: 'clock' },
        { id: 'db-bottleneck', label: 'Database', sub: 'more API Pods, same limit', pattern: 'warn', icon: 'database' },
      ],
    },
  ],
  edges: [{ source: 'chain', target: 'breaks', label: 'each link can fail' }],
}
