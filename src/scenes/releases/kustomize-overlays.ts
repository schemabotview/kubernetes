import type { Scene } from '@graphlearning/flow'

// §10.2 — one base, two overlays, rendered and inspected before anything is applied.
export const kustomizeOverlays: Scene = {
  id: 'kustomize-overlays',
  title: 'One base, small differences',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'base',
      label: 'base/ — shared by every environment',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'base-deploy', label: 'Deployment', sub: 'the API', pattern: 'service', icon: 'layers' },
        { id: 'base-svc', label: 'Service', sub: 'catalogue-api', pattern: 'service', icon: 'router' },
        { id: 'base-config', label: 'ConfigMap', sub: 'generated, hashed name', pattern: 'service', icon: 'braces' },
        { id: 'base-kust', label: 'kustomization', sub: 'lists the resources', pattern: 'service', icon: 'file' },
      ],
    },
    {
      id: 'overlays',
      label: 'overlays/ — only what differs',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'ov-staging', label: 'staging', sub: '2 replicas, digest 4f1c', pattern: 'network', icon: 'search' },
        { id: 'ov-prod', label: 'production', sub: '3 replicas, digest 4f1c', pattern: 'network', icon: 'globe' },
      ],
    },
    { id: 'render', label: 'Render, then read', sub: 'kubectl kustomize overlays/prod', pattern: 'storage', icon: 'search' },
  ],
  edges: [
    { source: 'base', target: 'overlays', label: 'patched by' },
    { source: 'overlays', target: 'render', label: 'before apply' },
  ],
}
