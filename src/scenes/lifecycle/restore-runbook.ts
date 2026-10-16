import type { Scene } from '@graphlearning/flow'

// §12.7 — an outline runbook (distribution-specific commands deferred) and the checks that
// decide whether the restore worked.
export const restoreRunbook: Scene = {
  id: 'restore-runbook',
  title: 'Restore, then prove it',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'restore-steps',
      label: 'Outline runbook — commands are distribution-specific',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'step-isolate', label: '1 · Isolate', sub: 'a separate target', pattern: 'service', icon: 'scissors' },
        { id: 'step-state', label: '2 · State', sub: 'snapshot or Git', pattern: 'service', icon: 'database' },
        { id: 'step-data', label: '3 · Data', sub: 'database restore', pattern: 'service', icon: 'harddrive' },
        { id: 'step-creds', label: '4 · Credentials', sub: 'keys and access', pattern: 'service', icon: 'key' },
      ],
    },
    {
      id: 'restore-checks',
      label: 'Post-restore checks',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'chk-controllers', label: 'Controllers', sub: 'reconciling, no loops', pattern: 'storage', icon: 'repeat' },
        { id: 'chk-rbac', label: 'Permissions', sub: 'the right people only', pattern: 'storage', icon: 'lock' },
        { id: 'chk-volumes', label: 'Volumes', sub: 'claims bound, attached', pattern: 'storage', icon: 'link' },
        { id: 'chk-users', label: 'User requests', sub: 'records and real queries', pattern: 'storage', icon: 'users' },
      ],
    },
  ],
  edges: [{ source: 'restore-steps', target: 'restore-checks', label: 'then verify' }],
}
