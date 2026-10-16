import type { Scene } from '@graphlearning/flow'

// §4.7 — the four workload shapes, one card each; StatefulSet is previewed for Chapter 7.
export const controllerChoice: Scene = {
  id: 'controller-choice',
  title: 'Choosing a controller',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'choose-deployment',
      kind: 'list',
      label: 'Deployment',
      sub: 'interchangeable, long-running',
      icon: 'layers',
      pattern: 'service',
      items: ['The catalogue API', 'Any replica can serve', 'Rolling updates', 'Pods get new names'],
    },
    {
      id: 'choose-job',
      kind: 'list',
      label: 'Job / CronJob',
      sub: 'runs to completion',
      icon: 'clock',
      pattern: 'storage',
      items: ['The catalogue import', 'Retries on failure', 'Must be idempotent', 'Scheduled with CronJob'],
    },
    {
      id: 'choose-daemonset',
      kind: 'list',
      label: 'DaemonSet',
      sub: 'one per node',
      icon: 'server',
      pattern: 'network',
      items: ['Log and metrics agents', 'Network plugins', 'Follows nodes in and out', 'Not for app replicas'],
    },
    {
      id: 'choose-statefulset',
      kind: 'list',
      label: 'StatefulSet',
      sub: 'stable identity — Chapter 7',
      icon: 'database',
      pattern: 'warn',
      items: ['The PostgreSQL instance', 'Stable names, ordered start', 'Its own storage per Pod', 'Not high availability by itself'],
    },
  ],
  edges: [],
}
