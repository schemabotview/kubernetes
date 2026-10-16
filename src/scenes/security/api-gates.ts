import type { Scene } from '@graphlearning/flow'

// §9.1 — every API request passes three gates in order; the API-to-database connection passes
// none of them, which is why it is drawn apart.
export const apiGates: Scene = {
  id: 'api-gates',
  title: 'Three gates on every API request',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'caller', label: 'A request', sub: 'kubectl, or a Pod’s token', pattern: 'user', icon: 'users' },
    {
      id: 'gates',
      label: 'Inside the API server, in order',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'authn', label: 'Authentication', sub: 'who are you? → 401', pattern: 'service', icon: 'fingerprint' },
        { id: 'authz', label: 'Authorization', sub: 'may you do this? → 403', pattern: 'service', icon: 'lock' },
        { id: 'mutating', label: 'Mutating admission', sub: 'adjust the object', pattern: 'service', icon: 'pencil' },
        { id: 'validating', label: 'Validating admission', sub: 'accept or reject it', pattern: 'service', icon: 'shieldcheck' },
      ],
    },
    { id: 'persisted', label: 'Persisted', sub: 'only after all gates', pattern: 'storage', icon: 'database' },
    { id: 'data-path', label: 'API → database', sub: 'network traffic: no gates', pattern: 'warn', icon: 'network' },
  ],
  edges: [
    { source: 'caller', target: 'gates' },
    { source: 'gates', target: 'persisted' },
    { source: 'gates', target: 'data-path', label: 'a separate path', dashed: true },
  ],
}
