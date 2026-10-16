import type { Scene } from '@graphlearning/flow'

// §10.6 — push-based CI delivery versus pull-based GitOps reconciliation, step for step.
export const deliveryModels: Scene = {
  id: 'delivery-models',
  title: 'Push once, or reconcile forever',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'ci-push',
      label: 'CI delivery — the pipeline pushes',
      pattern: 'user',
      cols: 2,
      children: [
        { id: 'ci-1', label: 'Merge', sub: 'triggers a pipeline', pattern: 'user', icon: 'gitbranch' },
        { id: 'ci-2', label: 'Pipeline', sub: 'holds cluster credentials', pattern: 'user', icon: 'key' },
        { id: 'ci-3', label: 'Apply', sub: 'once, then finished', pattern: 'user', icon: 'terminal' },
        { id: 'ci-4', label: 'Later drift', sub: 'nobody notices', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'gitops-pull',
      label: 'GitOps — an agent in the cluster pulls',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'go-1', label: 'Merge', sub: 'the desired state', pattern: 'storage', icon: 'gitbranch' },
        { id: 'go-2', label: 'Agent', sub: 'pulls; no outside creds', pattern: 'storage', icon: 'gears' },
        { id: 'go-3', label: 'Reconcile', sub: 'continuously', pattern: 'storage', icon: 'repeat' },
        { id: 'go-4', label: 'Later drift', sub: 'reported or reverted', pattern: 'storage', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'ci-push', target: 'gitops-pull', label: 'versus' }],
}
