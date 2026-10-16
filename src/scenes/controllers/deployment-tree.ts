import type { Scene } from '@graphlearning/flow'

// §4.1 — Deployment → ReplicaSet → Pods, with the previous ReplicaSet kept at zero. Each band is
// one owner level, so "who changes what" reads top to bottom.
export const deploymentTree: Scene = {
  id: 'deployment-tree',
  title: 'Deployment, ReplicaSet, Pods',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'deployment', label: 'Deployment', sub: 'you edit this one', pattern: 'user', icon: 'pencil' },
    {
      id: 'replicasets',
      label: 'ReplicaSets — one per Pod template',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'rs-current', label: 'RS 7f9c', sub: 'current template, 2', pattern: 'service', icon: 'copy' },
        { id: 'rs-previous', label: 'RS 5b2d', sub: 'previous template, 0', pattern: 'group', icon: 'history' },
      ],
    },
    {
      id: 'pods',
      label: 'Pods — owned by RS 7f9c',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'pod-a', label: 'api-7f9c-a', sub: 'hash label 7f9c', pattern: 'network', icon: 'box' },
        { id: 'pod-b', label: 'api-7f9c-b', sub: 'hash label 7f9c', pattern: 'network', icon: 'box' },
      ],
    },
  ],
  edges: [
    { source: 'deployment', target: 'replicasets', label: 'creates and scales' },
    { source: 'replicasets', target: 'pods', label: 'creates and replaces' },
  ],
}
