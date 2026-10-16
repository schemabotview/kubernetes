import type { Scene } from '@graphlearning/flow'

// §9.6 — four Secret responsibilities, each naming who usually carries it.
export const secretDuties: Scene = {
  id: 'secret-duties',
  title: 'Four Secret responsibilities',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'access',
      kind: 'list',
      label: 'Access',
      sub: 'who can read it',
      icon: 'lock',
      pattern: 'service',
      items: ['get, list and watch all reveal values', 'Creating Pods can mount any Secret', 'Grant per name where possible', 'Review bindings regularly'],
    },
    {
      id: 'rotation',
      kind: 'list',
      label: 'Rotation',
      sub: 'replacing a value',
      icon: 'repeat',
      pattern: 'network',
      items: ['Create the new credential', 'Roll out Pods that use it', 'Then revoke the old one', 'Practise it before an incident'],
    },
    {
      id: 'encryption',
      kind: 'list',
      label: 'Encryption at rest',
      sub: 'stored data in etcd',
      icon: 'shieldcheck',
      pattern: 'storage',
      items: ['A control-plane setting', 'Often a KMS provider', 'Managed: check the provider', 'Backups need it too'],
    },
    {
      id: 'ownership',
      kind: 'list',
      label: 'Responsibility',
      sub: 'written down',
      icon: 'users',
      pattern: 'warn',
      items: ['Platform: encryption, audit', 'App team: values, rotation', 'Both: least-privilege access', 'Unowned means undone'],
    },
  ],
  edges: [],
}
