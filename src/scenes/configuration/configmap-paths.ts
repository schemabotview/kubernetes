import type { Scene } from '@graphlearning/flow'

// §5.2 — one ConfigMap, consumed two ways.
export const configmapPaths: Scene = {
  id: 'configmap-paths',
  title: 'One ConfigMap, two ways in',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'configmap',
      kind: 'code',
      filename: 'catalogue-config (illustrative)',
      label: `kind: ConfigMap
metadata:
  name: catalogue-config
data:
  LOG_LEVEL: info
  DB_HOST: postgres.catalogue.svc
  app.yaml: |
    pageSize: 50
    currency: EUR`,
    },
    {
      id: 'ways',
      label: 'How the API container receives it',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'as-env', label: 'Environment', sub: 'LOG_LEVEL, DB_HOST', pattern: 'service', icon: 'braces' },
        { id: 'as-file', label: 'Mounted file', sub: 'app.yaml in a volume', pattern: 'storage', icon: 'file' },
        { id: 'env-read', label: 'Read once', sub: 'when the process starts', pattern: 'service', icon: 'power' },
        { id: 'file-read', label: 'Read any time', sub: 'if the app re-reads it', pattern: 'storage', icon: 'repeat' },
      ],
    },
  ],
  edges: [{ source: 'configmap', target: 'ways', label: 'referenced by the Pod' }],
}
