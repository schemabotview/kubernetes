import type { Scene } from '@graphlearning/flow'

// §2.2 — apiVersion and kind name a schema; the API serves it as a resource path.
export const gvk: Scene = {
  id: 'gvk',
  title: 'Group, version, kind',
  flow: 'TB',
  padding: 0.17, // tall board: keeps the code card clear of the eyebrow
  nodes: [
    {
      id: 'header',
      kind: 'code',
      filename: 'catalogue-api.yaml (illustrative)',
      label: `apiVersion: apps/v1      # group "apps", version "v1"
kind: Deployment         # the schema to validate against
metadata:
  name: catalogue-api
  namespace: catalogue`,
    },
    {
      id: 'parts',
      label: 'How the API reads that header',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'group', label: 'Group', sub: 'apps — empty for core kinds', pattern: 'service', icon: 'boxes' },
        { id: 'version', label: 'Version', sub: 'v1 — stable; beta can change', pattern: 'service', icon: 'history' },
        { id: 'kind', label: 'Kind', sub: 'Deployment — the schema', pattern: 'service', icon: 'braces' },
        { id: 'resource', label: 'Resource', sub: 'deployments — the URL path', pattern: 'network', icon: 'link' },
      ],
    },
    { id: 'explain', label: 'kubectl explain', sub: 'reads the served schema', pattern: 'user', icon: 'search' },
  ],
  edges: [
    { source: 'header', target: 'parts', label: 'resolved' },
    { source: 'parts', target: 'explain', label: 'inspect' },
  ],
}
