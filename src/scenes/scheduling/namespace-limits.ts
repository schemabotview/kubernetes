import type { Scene } from '@graphlearning/flow'

// §8.5 — a ResourceQuota caps the namespace's total; a LimitRange defaults and bounds each
// container. Both change the manifests that reach the scheduler.
export const namespaceLimits: Scene = {
  id: 'namespace-limits',
  title: 'Totals and defaults per namespace',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'policy',
      kind: 'code',
      filename: 'namespace catalogue (illustrative)',
      label: `kind: ResourceQuota
spec:
  hard: { requests.cpu: "4", requests.memory: 8Gi, pods: "20" }
---
kind: LimitRange
spec:
  limits:
    - type: Container
      defaultRequest: { cpu: 100m, memory: 128Mi }
      max: { memory: 1Gi }`,
    },
    {
      id: 'policy-effects',
      label: 'What they do to a new Pod',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'defaulted', label: 'Defaulted', sub: 'missing requests filled in', pattern: 'service', icon: 'pencil' },
        { id: 'rejected-max', label: 'Rejected', sub: 'above the per-container max', pattern: 'warn', icon: 'ban' },
        { id: 'quota-full', label: 'Quota full', sub: 'refused at the API', pattern: 'warn', icon: 'lock' },
        { id: 'quota-needs', label: 'Requests required', sub: 'once a quota covers them', pattern: 'storage', icon: 'receipt' },
      ],
    },
  ],
  edges: [{ source: 'policy', target: 'policy-effects', label: 'at admission' }],
}
