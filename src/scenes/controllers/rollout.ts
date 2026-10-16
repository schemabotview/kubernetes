import type { Scene } from '@graphlearning/flow'

// §4.3 — a rolling update's settings, and what its progress evidence does and does not prove.
export const rollout: Scene = {
  id: 'rollout',
  title: 'A rollout, and its evidence',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'strategy',
      kind: 'code',
      filename: 'deployment spec (illustrative)',
      label: `strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1          # one extra Pod during the swap
    maxUnavailable: 0    # never below 2 ready
progressDeadlineSeconds: 300`,
    },
    {
      id: 'evidence',
      label: 'What the rollout can tell you',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'progressing', label: 'Progressing', sub: 'new Pods becoming ready', pattern: 'service', icon: 'workflow' },
        { id: 'complete', label: 'Complete', sub: 'every replica updated', pattern: 'storage', icon: 'circlecheck' },
        { id: 'stalled', label: 'Stalled', sub: 'bad image: old Pods keep serving', pattern: 'warn', icon: 'ban' },
        { id: 'not-proven', label: 'Not proven', sub: 'that responses are correct', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [{ source: 'strategy', target: 'evidence', label: 'kubectl rollout status' }],
}
