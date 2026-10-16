import type { Scene } from '@graphlearning/flow'

// §13.4 — four questions for any extension before it is installed.
export const extensionReview: Scene = {
  id: 'extension-review',
  title: 'Four questions before installing',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'q-compat',
      kind: 'list',
      label: 'Compatibility',
      sub: 'with what you run',
      icon: 'link',
      pattern: 'service',
      items: ['Supported Kubernetes versions', 'CRD API versions and maturity', 'Conflicts with other add-ons', 'Your CNI, CSI and Gateway'],
    },
    {
      id: 'q-authority',
      kind: 'list',
      label: 'Authority',
      sub: 'what it may do',
      icon: 'lock',
      pattern: 'warn',
      items: ['Cluster-scoped permissions?', 'Secrets it can read', 'Webhooks it installs', 'Privileged Pods it runs'],
    },
    {
      id: 'q-upgrades',
      kind: 'list',
      label: 'Upgrade ownership',
      sub: 'who keeps it current',
      icon: 'history',
      pattern: 'network',
      items: ['A named owner', 'Release cadence and support', 'CRD migrations on upgrade', 'Removal plan'],
    },
    {
      id: 'q-failure',
      kind: 'list',
      label: 'Failure and recovery',
      sub: 'when it breaks',
      icon: 'skull',
      pattern: 'storage',
      items: ['What stops if it is down?', 'Does it block the API?', 'Are its objects backed up?', 'Restore order with the rest'],
    },
  ],
  edges: [],
}
