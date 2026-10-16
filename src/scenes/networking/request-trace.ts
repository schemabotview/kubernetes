import type { Scene } from '@graphlearning/flow'

// §6.7 — the full request path with the TLS boundary marked, read as the order to diagnose in.
export const requestTrace: Scene = {
  id: 'request-trace',
  title: 'Client to database, hop by hop',
  flow: 'TB',
  nodes: [
    { id: 'browser', label: 'Client', sub: 'HTTPS to catalogue.example', pattern: 'user', icon: 'globe' },
    { id: 'edge', label: 'Gateway', sub: 'TLS terminates here', pattern: 'warn', icon: 'lock' },
    {
      id: 'inside',
      label: 'Inside the cluster — plain HTTP unless re-encrypted',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'hop-svc', label: 'Service', sub: 'selector and port', pattern: 'network', icon: 'router' },
        { id: 'hop-eps', label: 'Endpoints', sub: 'any ready backends?', pattern: 'network', icon: 'table' },
        { id: 'hop-api', label: 'API Pod', sub: 'logs, readiness', pattern: 'service', icon: 'box' },
        { id: 'hop-db', label: 'Database name', sub: 'resolves? reachable?', pattern: 'storage', icon: 'database' },
      ],
    },
  ],
  edges: [
    { source: 'browser', target: 'edge', label: 'certificate' },
    { source: 'edge', target: 'inside', label: 'HTTPRoute' },
  ],
}
