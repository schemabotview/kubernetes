import type { Scene } from '@graphlearning/flow'

// §13.2 — an operator reconciles the custom resource into ordinary workloads and reports status
// back; the same loop as Chapter 1, with domain knowledge inside.
export const operatorLoop: Scene = {
  id: 'operator-loop',
  title: 'An operator closes the gap',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'cr', label: 'catalogue-db', sub: 'a PostgresCluster resource', pattern: 'user', icon: 'file' },
    { id: 'operator', label: 'Operator', sub: 'a controller with know-how', pattern: 'service', icon: 'gears' },
    {
      id: 'generated',
      label: 'Ordinary objects it creates and owns',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'gen-sts', label: 'StatefulSet', sub: 'the database Pods', pattern: 'storage', icon: 'layers' },
        { id: 'gen-svc', label: 'Services', sub: 'primary and replicas', pattern: 'storage', icon: 'router' },
        { id: 'gen-secret', label: 'Secret', sub: 'generated credentials', pattern: 'storage', icon: 'key' },
        { id: 'gen-backup', label: 'Backup Job', sub: 'on the schedule', pattern: 'storage', icon: 'clock' },
      ],
    },
    { id: 'cr-status', label: 'status', sub: 'Ready, version, last backup', pattern: 'network', icon: 'gauge' },
  ],
  edges: [
    { source: 'cr', target: 'operator', label: 'watched' },
    { source: 'operator', target: 'generated', label: 'reconciles' },
    { source: 'generated', target: 'cr-status', label: 'reported' },
  ],
}
