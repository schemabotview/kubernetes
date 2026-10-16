import type { Scene } from '@graphlearning/flow'

// §12.4 — control-plane failure domains (no universal topology implied) and what still works
// while it is unavailable.
export const controlPlaneHa: Scene = {
  id: 'control-plane-ha',
  title: 'When the control plane is down',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'cp-domains',
      label: 'Control-plane failure domains',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'etcd-quorum', label: 'etcd quorum', sub: '3 members tolerate 1 loss', pattern: 'storage', icon: 'database' },
        { id: 'api-replicas', label: 'API servers', sub: 'several, behind one address', pattern: 'service', icon: 'dooropen' },
        { id: 'leader', label: 'Leader election', sub: 'one active scheduler', pattern: 'service', icon: 'star' },
        { id: 'zones-cp', label: 'Across zones', sub: 'where the provider allows', pattern: 'network', icon: 'globe' },
      ],
    },
    {
      id: 'cp-down',
      label: 'While it is unavailable',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'still-runs', label: 'Still running', sub: 'existing Pods serve', pattern: 'storage', icon: 'circlecheck' },
        { id: 'no-heal', label: 'No self-healing', sub: 'crashed Pods not replaced', pattern: 'warn', icon: 'ban' },
        { id: 'no-changes', label: 'No changes', sub: 'no apply, no scaling', pattern: 'warn', icon: 'lock' },
        { id: 'no-quorum', label: 'Lost quorum', sub: 'etcd stops accepting writes', pattern: 'warn', icon: 'skull' },
      ],
    },
  ],
  edges: [{ source: 'cp-domains', target: 'cp-down', label: 'if they all fail' }],
}
