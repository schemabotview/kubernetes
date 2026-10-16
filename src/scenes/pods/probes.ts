import type { Scene } from '@graphlearning/flow'

// §3.6 — three probes, three consequences. The fourth cell maps the plan's three scenarios
// (slow start, deadlock, database down) to the probe that should notice.
export const probes: Scene = {
  id: 'probes',
  title: 'Three probes, three consequences',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'startup',
      kind: 'list',
      label: 'Startup probe',
      sub: 'is it done starting?',
      icon: 'power',
      pattern: 'storage',
      items: ['Holds the other probes off', 'Covers a slow first boot', 'Failing too long → restart', 'Then hands over to the others'],
    },
    {
      id: 'readiness',
      kind: 'list',
      label: 'Readiness probe',
      sub: 'should it get traffic?',
      icon: 'circlecheck',
      pattern: 'network',
      items: ['Failing → removed from Service', 'No restart', 'Recovers by itself', 'Gates rollout progress too'],
    },
    {
      id: 'liveness',
      kind: 'list',
      label: 'Liveness probe',
      sub: 'is it stuck for good?',
      icon: 'repeat',
      pattern: 'warn',
      items: ['Failing → container restarted', 'Only for unrecoverable states', 'Never check dependencies here'],
    },
    {
      id: 'choose',
      kind: 'list',
      label: 'Which one notices',
      sub: 'the three scenarios',
      icon: 'scale',
      pattern: 'service',
      items: ['Slow start → startup', 'Database down → readiness', 'Deadlock → liveness', 'Unsure → readiness only'],
    },
  ],
  edges: [],
}
