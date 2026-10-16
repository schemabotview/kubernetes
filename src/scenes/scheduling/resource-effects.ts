import type { Scene } from '@graphlearning/flow'

// §8.1 — requests drive placement, limits drive runtime enforcement, and the two resources fail
// differently: CPU is throttled, memory is killed.
export const resourceEffects: Scene = {
  id: 'resource-effects',
  title: 'Requests place, limits enforce',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'cpu-request',
      kind: 'list',
      label: 'CPU request',
      sub: 'reserved for placement',
      icon: 'cpu',
      pattern: 'service',
      items: ['100m = a tenth of a core', 'Scheduler sums these', 'Weight under contention', 'Not a cap on usage'],
    },
    {
      id: 'cpu-limit',
      kind: 'list',
      label: 'CPU limit',
      sub: 'enforced at run time',
      icon: 'gauge',
      pattern: 'warn',
      items: ['Over it: throttled', 'Slower, not killed', 'Shows as latency', 'Often left unset'],
    },
    {
      id: 'mem-request',
      kind: 'list',
      label: 'Memory request',
      sub: 'reserved for placement',
      icon: 'memory',
      pattern: 'service',
      items: ['128Mi = 128 × 2²⁰ bytes', 'Scheduler sums these', 'Guides eviction order', 'Set near real usage'],
    },
    {
      id: 'mem-limit',
      kind: 'list',
      label: 'Memory limit',
      sub: 'enforced at run time',
      icon: 'skull',
      pattern: 'warn',
      items: ['Over it: OOMKilled', 'Exit code 137, restart', 'No slow fallback', 'Size for the peak'],
    },
  ],
  edges: [],
}
