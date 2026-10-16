import type { Scene } from '@graphlearning/flow'

// §10.7 — three writers of one field, the flapping that follows, and the one-owner fix.
export const competingWriters: Scene = {
  id: 'competing-writers',
  title: 'Who owns spec.replicas?',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'writers',
      label: 'Writers of one field',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'w-git', label: 'Git manifest', sub: 'replicas: 3', pattern: 'user', icon: 'gitbranch' },
        { id: 'w-hpa', label: 'Autoscaler', sub: 'wants 5 under load', pattern: 'service', icon: 'gauge' },
        { id: 'w-human', label: 'kubectl scale', sub: 'someone set 4', pattern: 'user', icon: 'terminal' },
        { id: 'w-agent', label: 'GitOps agent', sub: 'resets it to 3', pattern: 'storage', icon: 'repeat' },
      ],
    },
    { id: 'flapping', label: 'Flapping', sub: '3 → 5 → 4 → 3, Pods churn', pattern: 'warn', icon: 'zap' },
    { id: 'one-owner', label: 'One owner per field', sub: 'drop replicas from Git', pattern: 'storage', icon: 'key' },
  ],
  edges: [
    { source: 'writers', target: 'flapping', label: 'result' },
    { source: 'flapping', target: 'one-owner', label: 'fix' },
  ],
}
