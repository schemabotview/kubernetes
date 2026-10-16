import type { Scene } from '@graphlearning/flow'

// §5.3 — a Secret's data is base64-encoded, which is an encoding, not protection. The band lists
// what actually protects it, and who is responsible for each.
export const secretLimits: Scene = {
  id: 'secret-limits',
  title: 'Encoded is not protected',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'secret',
      kind: 'code',
      filename: 'catalogue-db (placeholder values)',
      label: `kind: Secret
metadata:
  name: catalogue-db
type: Opaque
stringData:                  # stored base64-encoded
  username: catalogue
  password: CHANGE-ME-PLACEHOLDER`,
    },
    {
      id: 'protection',
      label: 'What actually protects it',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'rbac', label: 'RBAC', sub: 'who may read Secrets', pattern: 'warn', icon: 'lock' },
        { id: 'at-rest', label: 'Encryption at rest', sub: 'a cluster setting', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'not-git', label: 'Not in Git', sub: 'or encrypted before it is', pattern: 'warn', icon: 'gitbranch' },
        { id: 'no-logs', label: 'Not in logs', sub: 'env leaks into dumps', pattern: 'warn', icon: 'scroll' },
      ],
    },
  ],
  edges: [{ source: 'secret', target: 'protection', label: 'base64 is reversible' }],
}
