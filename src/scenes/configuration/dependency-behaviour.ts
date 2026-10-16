import type { Scene } from '@graphlearning/flow'

// §5.6 — the database goes away; what the API itself must do, since Kubernetes will not.
export const dependencyBehaviour: Scene = {
  id: 'dependency-behaviour',
  title: 'When the database goes away',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'db-down', label: 'PostgreSQL', sub: 'unavailable for a minute', pattern: 'warn', icon: 'database' },
    {
      id: 'api-behaviour',
      label: 'What the API must do itself',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'backoff', label: 'Retry', sub: 'backoff with jitter', pattern: 'service', icon: 'clock' },
        { id: 'not-ready', label: 'Not ready', sub: 'stop taking traffic', pattern: 'service', icon: 'circleslash' },
        { id: 'stay-alive', label: 'Stay alive', sub: 'liveness still passes', pattern: 'service', icon: 'power' },
        { id: 'clear-errors', label: 'Clear errors', sub: 'a 503, not a hang', pattern: 'service', icon: 'bell' },
      ],
    },
    { id: 'recover', label: 'Recovers', sub: 'no restart, no manual step', pattern: 'storage', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'db-down', target: 'api-behaviour', label: 'connections fail' },
    { source: 'api-behaviour', target: 'recover', label: 'database returns' },
  ],
}
