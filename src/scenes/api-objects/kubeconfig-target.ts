import type { Scene } from '@graphlearning/flow'

// §2.1 — every kubectl command resolves to a cluster, a user and a namespace before it is sent.
// The file is illustrative; the band is what a reader should check before any mutation.
export const kubeconfigTarget: Scene = {
  id: 'kubeconfig-target',
  title: 'Which cluster, as whom, where',
  flow: 'TB',
  padding: 0.17, // tall board: keeps the code card clear of the eyebrow
  nodes: [
    {
      id: 'kubeconfig',
      kind: 'code',
      filename: '~/.kube/config (illustrative)',
      label: `clusters:
  - name: learning-cluster
users:
  - name: learner
contexts:
  - name: learning
    context:
      cluster: learning-cluster
      user: learner
      namespace: catalogue
current-context: learning`,
    },
    {
      id: 'resolved',
      label: 'What every command resolves to',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'cluster', label: 'Cluster', sub: 'API server address and CA', pattern: 'service', icon: 'server' },
        { id: 'user', label: 'User', sub: 'the credential presented', pattern: 'user', icon: 'usercheck' },
        { id: 'namespace', label: 'Namespace', sub: 'default scope for names', pattern: 'network', icon: 'folder' },
        { id: 'context', label: 'Context', sub: 'the named bundle of all three', pattern: 'storage', icon: 'tag' },
      ],
    },
  ],
  edges: [{ source: 'kubeconfig', target: 'resolved', label: 'current-context' }],
}
