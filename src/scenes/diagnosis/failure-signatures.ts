import type { Scene } from '@graphlearning/flow'

// §11.6 — four failure signatures and where each one's evidence lives.
export const failureSignatures: Scene = {
  id: 'failure-signatures',
  title: 'Signatures and where to look',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'sig-unschedulable',
      kind: 'list',
      label: 'Pod Pending',
      sub: 'no node accepted it',
      icon: 'calendar',
      pattern: 'service',
      items: ['FailedScheduling event', 'Insufficient CPU or memory', 'Affinity or taint mismatch', 'Fix requests or capacity'],
    },
    {
      id: 'sig-claim',
      kind: 'list',
      label: 'Claim Pending',
      sub: 'no volume yet',
      icon: 'receipt',
      pattern: 'storage',
      items: ['describe pvc for events', 'No class or no driver', 'Waiting for a consumer', 'Zone of the disk'],
    },
    {
      id: 'sig-mount',
      kind: 'list',
      label: 'Mount failure',
      sub: 'Pod stuck creating',
      icon: 'harddrive',
      pattern: 'warn',
      items: ['FailedMount, FailedAttach', 'Multi-attach: old node holds it', 'File permissions vs runAsUser', 'Secret or ConfigMap missing'],
    },
    {
      id: 'sig-memory',
      kind: 'list',
      label: 'OOMKilled or evicted',
      sub: 'memory ran out',
      icon: 'memory',
      pattern: 'warn',
      items: ['lastState: OOMKilled, 137', 'Evicted: node pressure', 'Compare usage with limit', 'Fix the size or the leak'],
    },
  ],
  edges: [],
}
