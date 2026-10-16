import type { Scene } from '@graphlearning/flow'

// §12.6 — four different things to back up, protected separately; none substitutes for another.
export const recoveryInventory: Scene = {
  id: 'recovery-inventory',
  title: 'A recovery inventory',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'inv-etcd',
      kind: 'list',
      label: 'Cluster state',
      sub: 'etcd snapshots',
      icon: 'database',
      pattern: 'service',
      items: ['Every object, Secrets included', 'Encrypt and restrict them', 'Self-managed: yours to take', 'Managed: ask the provider'],
    },
    {
      id: 'inv-git',
      kind: 'list',
      label: 'Declarative config',
      sub: 'source control',
      icon: 'gitbranch',
      pattern: 'user',
      items: ['Manifests and overlays', 'Chart versions and values', 'Rebuilds most objects', 'Not Secrets in plain text'],
    },
    {
      id: 'inv-creds',
      kind: 'list',
      label: 'Credentials and keys',
      sub: 'stored apart',
      icon: 'key',
      pattern: 'warn',
      items: ['Cluster CA and admin access', 'Encryption and KMS keys', 'Registry and cloud credentials', 'Without them, nothing restores'],
    },
    {
      id: 'inv-data',
      kind: 'list',
      label: 'Application data',
      sub: 'database backups',
      icon: 'harddrive',
      pattern: 'storage',
      items: ['Chapter 7’s independent backup', 'Not inside an etcd snapshot', 'Its own schedule and retention', 'Restore-tested'],
    },
  ],
  edges: [],
}
