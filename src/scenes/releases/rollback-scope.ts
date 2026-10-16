import type { Scene } from '@graphlearning/flow'

// §10.5 — what `rollout undo` restores and what it leaves behind; expand/contract is the way to
// keep the two compatible.
export const rollbackScope: Scene = {
  id: 'rollback-scope',
  title: 'What a rollback restores',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'restored',
      label: 'Restored by rollout undo',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'r-template', label: 'Pod template', sub: 'the previous ReplicaSet', pattern: 'storage', icon: 'history' },
        { id: 'r-image', label: 'Image digest', sub: 'part of that template', pattern: 'storage', icon: 'fingerprint' },
      ],
    },
    {
      id: 'not-restored',
      label: 'Left exactly as they are',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'n-config', label: 'ConfigMaps', sub: 'edited in place', pattern: 'warn', icon: 'braces' },
        { id: 'n-secret', label: 'Secrets', sub: 'rotated values', pattern: 'warn', icon: 'key' },
        { id: 'n-schema', label: 'Schema', sub: 'migrations already run', pattern: 'warn', icon: 'database' },
        { id: 'n-data', label: 'Data', sub: 'rows written since', pattern: 'warn', icon: 'table' },
      ],
    },
    { id: 'expand', label: 'Expand, then contract', sub: 'old and new code both work', pattern: 'service', icon: 'merge' },
  ],
  edges: [
    { source: 'restored', target: 'not-restored', label: 'but not' },
    { source: 'not-restored', target: 'expand', label: 'so design for it' },
  ],
}
