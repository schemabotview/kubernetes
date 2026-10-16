import type { Scene } from '@graphlearning/flow'

// §2.5 — preview, apply, and the field managers that own each field afterwards. The code card
// is the safe sequence; the band is why two writers can conflict.
export const applyOwnership: Scene = {
  id: 'apply-ownership',
  title: 'Preview, apply, own',
  flow: 'TB',
  nodes: [
    {
      id: 'commands',
      kind: 'code',
      filename: 'terminal (illustrative)',
      label: `kubectl config current-context        # where am I?
kubectl apply -f api.yaml --dry-run=server  # validate
kubectl diff  -f api.yaml             # what would change
kubectl apply -f api.yaml --server-side`,
    },
    {
      id: 'managers',
      label: 'Field ownership after apply',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'you', label: 'Your manager', sub: 'owns image and ports', pattern: 'user', icon: 'usercheck' },
        { id: 'hpa', label: 'Autoscaler', sub: 'owns spec.replicas', pattern: 'service', icon: 'gauge' },
        { id: 'conflict', label: 'Conflict', sub: 'you set replicas too: refused', pattern: 'warn', icon: 'ban' },
        { id: 'force', label: 'Force', sub: 'takes ownership on purpose', pattern: 'warn', icon: 'zap' },
      ],
    },
  ],
  edges: [{ source: 'commands', target: 'managers', label: 'records managedFields' }],
}
