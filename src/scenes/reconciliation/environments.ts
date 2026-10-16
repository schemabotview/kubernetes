import type { Scene } from '@graphlearning/flow'

// §6 — local, managed and self-managed clusters, compared by who carries each responsibility. A 2×2
// so the board is square: the fourth cell is the constant across all three — the workload and its
// data are always the author's.
export const environments: Scene = {
  id: 'environments',
  title: 'Who runs the cluster',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'local',
      kind: 'list',
      label: 'Local',
      sub: 'a learning cluster',
      icon: 'cpu',
      pattern: 'user',
      items: ['One machine, often one node', 'Reset freely', 'Proves behaviour, not availability', 'No real load balancer'],
    },
    {
      id: 'managed',
      kind: 'list',
      label: 'Managed',
      sub: 'a cloud provider runs it',
      icon: 'cloud',
      pattern: 'service',
      items: ['Provider runs the control plane', 'You choose node pools', 'Upgrades on their schedule', 'Integrated storage and LBs'],
    },
    {
      id: 'self',
      kind: 'list',
      label: 'Self-managed',
      sub: 'your own machines',
      icon: 'server',
      pattern: 'warn',
      items: ['You run etcd and its backups', 'You patch and upgrade', 'You pick CNI and CSI', 'You own the pager'],
    },
    {
      id: 'always',
      kind: 'list',
      label: 'Always yours',
      sub: 'in every environment',
      icon: 'key',
      pattern: 'storage',
      items: ['Manifests and images', 'Application data', 'Who has access', 'The versions you record'],
    },
  ],
  edges: [],
}
