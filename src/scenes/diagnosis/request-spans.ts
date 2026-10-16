import type { Scene } from '@graphlearning/flow'

// §11.3 — one request ID followed through its spans; the slow span points at the database.
export const requestSpans: Scene = {
  id: 'request-spans',
  title: 'Where did 390 ms go?',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'req-id', label: 'Request ID', sub: 'x-request-id: 7c2e…', pattern: 'user', icon: 'hash' },
    {
      id: 'spans',
      label: 'Spans of one slow request',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'span-gw', label: 'Gateway', sub: '4 ms', pattern: 'network', icon: 'dooropen' },
        { id: 'span-api', label: 'API handler', sub: '380 ms total', pattern: 'service', icon: 'server' },
        { id: 'span-db', label: 'Database query', sub: '360 ms — the cause', pattern: 'warn', icon: 'database' },
        { id: 'span-render', label: 'Serialise', sub: '6 ms', pattern: 'service', icon: 'braces' },
      ],
    },
    { id: 'same-id', label: 'Same ID in logs', sub: 'API and database lines', pattern: 'storage', icon: 'link' },
  ],
  edges: [
    { source: 'req-id', target: 'spans', label: 'propagated' },
    { source: 'spans', target: 'same-id', label: 'join on' },
  ],
}
