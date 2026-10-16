import type { Scene } from '@graphlearning/flow'

// §13.6 — where the example must change for stronger claims, and where to study next.
export const nextSteps: Scene = {
  id: 'next-steps',
  title: 'Limits, and where to go next',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'db-limits',
      kind: 'list',
      label: 'Before claiming availability',
      sub: 'what must change',
      icon: 'database',
      pattern: 'warn',
      items: ['Replicated or managed database', 'Tested failover', 'Measured recovery time', 'Load-tested capacity'],
    },
    {
      id: 'study-admin',
      kind: 'list',
      label: 'Cluster administration',
      sub: 'running the platform',
      icon: 'server',
      pattern: 'service',
      items: ['Bootstrap and certificates', 'Distribution upgrades', 'etcd restore practice', 'Cloud Kubernetes in depth'],
    },
    {
      id: 'study-depth',
      kind: 'list',
      label: 'Deeper specialisms',
      sub: 'each a course of its own',
      icon: 'layers',
      pattern: 'network',
      items: ['Observability stacks', 'Security and policy engines', 'Operator development', 'Service meshes, multi-cluster'],
    },
    {
      id: 'before-extending',
      kind: 'list',
      label: 'Before extending',
      sub: 'every time',
      icon: 'circlecheck',
      pattern: 'storage',
      items: ['Record the versions you run', 'Check current documentation', 'Keep recovery evidence', 'Change one thing at a time'],
    },
  ],
  edges: [],
}
