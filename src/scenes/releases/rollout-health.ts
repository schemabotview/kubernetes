import type { Scene } from '@graphlearning/flow'

// §10.4 — the same rolling update with and without room to surge, and the evidence to read.
export const rolloutHealth: Scene = {
  id: 'rollout-health',
  title: 'A rollout needs room',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'healthy',
      label: 'Healthy — maxSurge 1, capacity free',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'h-new', label: 'New Pod', sub: 'scheduled, becomes ready', pattern: 'storage', icon: 'circlecheck' },
        { id: 'h-old', label: 'Old Pod', sub: 'then removed', pattern: 'storage', icon: 'trash' },
      ],
    },
    {
      id: 'stalled-rollout',
      label: 'Stalled — maxSurge 1, no room, maxUnavailable 0',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 's-new', label: 'New Pod', sub: 'Pending: no capacity', pattern: 'warn', icon: 'clock' },
        { id: 's-old', label: 'Old Pods', sub: 'kept, still serving', pattern: 'service', icon: 'box' },
      ],
    },
    {
      id: 'rollout-evidence',
      label: 'Evidence to read',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ev-status', label: 'rollout status', sub: 'waits, then times out', pattern: 'service', icon: 'terminal' },
        { id: 'ev-cond', label: 'Progressing', sub: 'reason after the deadline', pattern: 'service', icon: 'workflow' },
        { id: 'ev-rs', label: 'ReplicaSets', sub: 'old and new counts', pattern: 'service', icon: 'copy' },
        { id: 'ev-app', label: 'App metrics', sub: 'errors and latency', pattern: 'service', icon: 'barchart' },
      ],
    },
  ],
  edges: [
    { source: 'healthy', target: 'stalled-rollout', label: 'versus' },
    { source: 'stalled-rollout', target: 'rollout-evidence', dashed: true },
  ],
}
