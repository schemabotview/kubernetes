import type { Scene } from '@graphlearning/flow'

// §7.7 — running PostgreSQL in the cluster versus using a managed database, compared by who
// carries each responsibility. The API's side looks the same either way.
export const statePlacement: Scene = {
  id: 'state-placement',
  title: 'Where the database runs',
  flow: 'TB',
  nodes: [
    {
      id: 'options',
      label: 'Two placements for the same database',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'in-cluster',
          kind: 'list',
          label: 'In the cluster',
          sub: 'a StatefulSet you run',
          icon: 'server',
          pattern: 'warn',
          framed: true,
          items: ['You run backups and restores', 'You run upgrades and tuning', 'You build replication', 'Close to the app, one bill'],
        },
        {
          id: 'managed-db',
          kind: 'list',
          label: 'Managed service',
          sub: 'a provider runs it',
          icon: 'cloud',
          pattern: 'service',
          framed: true,
          items: ['Provider runs failover', 'Provider schedules backups', 'You still own access', 'You still test restores'],
        },
      ],
    },
    { id: 'same-contract', label: 'Same contract', sub: 'a DNS name and a Secret', pattern: 'storage', icon: 'link' },
  ],
  edges: [{ source: 'options', target: 'same-contract', label: 'the API sees' }],
}
