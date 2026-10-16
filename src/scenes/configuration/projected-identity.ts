import type { Scene } from '@graphlearning/flow'

// §5.5 — a dedicated service account and the short-lived projected token the kubelet mounts.
export const projectedIdentity: Scene = {
  id: 'projected-identity',
  title: 'A workload identity',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'pod', label: 'API Pod', sub: 'serviceAccountName set', pattern: 'service', icon: 'box' },
    { id: 'sa', label: 'catalogue-api', sub: 'a service account', pattern: 'storage', icon: 'usercheck' },
    {
      id: 'token',
      label: 'Projected token',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'audience', label: 'Audience', sub: 'who it is meant for', pattern: 'network', icon: 'tag' },
        { id: 'expiry', label: 'Expiry', sub: 'short-lived', pattern: 'network', icon: 'clock' },
        { id: 'rotation', label: 'Rotation', sub: 'kubelet refreshes it', pattern: 'network', icon: 'repeat' },
        { id: 'mount', label: 'Mounted file', sub: 'read by the client', pattern: 'network', icon: 'file' },
      ],
    },
    { id: 'permissions', label: 'Permissions', sub: 'none by default — Chapter 9', pattern: 'warn', icon: 'lock' },
  ],
  edges: [
    { source: 'pod', target: 'sa', label: 'runs as' },
    { source: 'sa', target: 'token', label: 'kubelet requests' },
    { source: 'token', target: 'permissions', dashed: true },
  ],
}
