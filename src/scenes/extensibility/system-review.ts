import type { Scene } from '@graphlearning/flow'

// §13.5 — the whole catalogue system on one board: eight review topics, each pointing back at
// the chapter that built it.
export const systemReview: Scene = {
  id: 'system-review',
  title: 'The catalogue system, reviewed',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'review',
      label: 'Architecture and runbook review',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'rv-image', label: 'Image identity', sub: 'digest, promoted · Ch 10', pattern: 'user', icon: 'fingerprint' },
        { id: 'rv-config', label: 'Configuration', sub: 'ConfigMap, Secret · Ch 5', pattern: 'service', icon: 'braces' },
        { id: 'rv-path', label: 'Request path', sub: 'Gateway to Pods · Ch 6', pattern: 'network', icon: 'router' },
        { id: 'rv-data', label: 'Data ownership', sub: 'one writer, backups · Ch 7', pattern: 'storage', icon: 'database' },
        { id: 'rv-capacity', label: 'Capacity', sub: 'requests, HPA, spread · Ch 8', pattern: 'service', icon: 'gauge' },
        { id: 'rv-policy', label: 'Policy', sub: 'RBAC, PSA, NetPol · Ch 9', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'rv-release', label: 'Release', sub: 'overlays, rollback · Ch 10', pattern: 'user', icon: 'gitbranch' },
        { id: 'rv-restore', label: 'Restoration', sub: 'inventory, runbook · Ch 12', pattern: 'storage', icon: 'history' },
      ],
    },
    { id: 'weakest', label: 'Weakest link', sub: 'the single database', pattern: 'warn', icon: 'skull' },
  ],
  edges: [{ source: 'review', target: 'weakest', label: 'still limited by' }],
}
