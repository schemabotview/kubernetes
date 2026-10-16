import type { Scene } from '@graphlearning/flow'

// §13.1 — a CRD adds a kind and a schema; an instance of it is stored and validated, and that is
// all. The warn card is the point: no controller, no behaviour.
export const customResource: Scene = {
  id: 'custom-resource',
  title: 'A new kind, and nothing more',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'cr-yaml',
      kind: 'code',
      filename: 'catalogue-db.yaml (illustrative)',
      label: `apiVersion: db.example.com/v1
kind: PostgresCluster          # defined by a CRD
metadata:
  name: catalogue-db
  namespace: catalogue
spec:
  version: "16"
  storage: 10Gi
  backups: { schedule: "15 2 * * *" }`,
    },
    {
      id: 'crd-parts',
      label: 'What the CRD provides',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'new-kind', label: 'A new kind', sub: 'served by the API', pattern: 'service', icon: 'braces' },
        { id: 'schema', label: 'A schema', sub: 'fields validated', pattern: 'service', icon: 'shieldcheck' },
        { id: 'rbac-ready', label: 'RBAC and kubectl', sub: 'work like any kind', pattern: 'service', icon: 'terminal' },
        { id: 'no-behaviour', label: 'No behaviour', sub: 'nothing acts on it', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [{ source: 'cr-yaml', target: 'crd-parts', label: 'stored and validated' }],
}
