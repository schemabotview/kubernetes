import type { Scene } from '@graphlearning/flow'

// §9.3 — a namespace Role bound to the import Job's service account, against the cluster-wide
// grant it must never get.
export const rbacScope: Scene = {
  id: 'rbac-scope',
  title: 'Exactly what the import needs',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'rbac-yaml',
      kind: 'code',
      filename: 'namespace catalogue (illustrative)',
      label: `kind: Role
metadata: { name: read-import-config, namespace: catalogue }
rules:
  - apiGroups: [""]
    resources: ["configmaps"]
    resourceNames: ["catalogue-import"]
    verbs: ["get"]
---
kind: RoleBinding
metadata: { name: import-reads-config, namespace: catalogue }
subjects: [{ kind: ServiceAccount, name: catalogue-import }]
roleRef: { kind: Role, name: read-import-config }`,
    },
    {
      id: 'contrast',
      label: 'Narrow versus broad',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'narrow', label: 'This Role', sub: 'one verb, one object', pattern: 'storage', icon: 'circlecheck' },
        { id: 'broad', label: 'cluster-admin', sub: 'everything, everywhere', pattern: 'warn', icon: 'skull' },
      ],
    },
  ],
  edges: [{ source: 'rbac-yaml', target: 'contrast', label: 'compared with' }],
}
