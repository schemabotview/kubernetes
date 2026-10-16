import type { Scene } from '@graphlearning/flow'

// §13.3 — admission webhooks sit in the API request path; the warn band is the new failure mode
// they add, which depends on failurePolicy.
export const webhookPath: Scene = {
  id: 'webhook-path',
  title: 'A webhook in the request path',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'wh-request', label: 'Create a Pod', sub: 'any user or controller', pattern: 'user', icon: 'terminal' },
    {
      id: 'webhooks',
      label: 'API server calls out, synchronously',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'wh-mutating', label: 'Mutating', sub: 'adds a sidecar, labels', pattern: 'service', icon: 'pencil' },
        { id: 'wh-validating', label: 'Validating', sub: 'enforces a policy', pattern: 'service', icon: 'shieldcheck' },
      ],
    },
    {
      id: 'wh-down',
      label: 'If the webhook service is down',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'fail-closed', label: 'Fail', sub: 'matching requests refused', pattern: 'warn', icon: 'ban' },
        { id: 'fail-open', label: 'Ignore', sub: 'the policy is skipped', pattern: 'warn', icon: 'circleslash' },
        { id: 'wh-scope', label: 'Scope it', sub: 'exclude system namespaces', pattern: 'storage', icon: 'funnel' },
        { id: 'wh-timeout', label: 'Short timeout', sub: 'and several replicas', pattern: 'storage', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'wh-request', target: 'webhooks', label: 'admission' },
    { source: 'webhooks', target: 'wh-down', label: 'failurePolicy', dashed: true },
  ],
}
