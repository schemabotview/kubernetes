import type { Scene } from '@graphlearning/flow'

// §11.1 — three sources of evidence, each with its own retention; the fourth card is why an
// absence is weak evidence.
export const evidenceSources: Scene = {
  id: 'evidence-sources',
  title: 'Three sources, three lifetimes',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'status-src',
      kind: 'list',
      label: 'Status',
      sub: 'the current truth',
      icon: 'gauge',
      pattern: 'service',
      items: ['Conditions with reasons', 'Container states, exit codes', 'Restart counts', 'Only the latest value'],
    },
    {
      id: 'events-src',
      kind: 'list',
      label: 'Events',
      sub: 'what components reported',
      icon: 'bell',
      pattern: 'network',
      items: ['Scheduling, pulls, probes', 'Kept for a short time', 'Deduplicated with counts', 'Not a durable log'],
    },
    {
      id: 'logs-src',
      kind: 'list',
      label: 'Container logs',
      sub: 'what the app wrote',
      icon: 'scroll',
      pattern: 'storage',
      items: ['Current container', '--previous: the crashed one', 'Rotated on the node', 'Lost with the Pod'],
    },
    {
      id: 'absence',
      kind: 'list',
      label: 'An absence proves little',
      sub: 'weak evidence',
      icon: 'search',
      pattern: 'warn',
      items: ['No event: it may have expired', 'Empty log: crashed before writing', 'One exit code: many causes', 'Look for a second source'],
    },
  ],
  edges: [],
}
