import type { Scene } from '@graphlearning/flow'

// §12.5 — an upgrade plan as four cards: inventory, order, skew, deprecations. No version matrix
// is drawn on purpose: it changes every release and must be read from the current policy.
export const upgradePlan: Scene = {
  id: 'upgrade-plan',
  title: 'Planning an upgrade',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'inventory',
      kind: 'list',
      label: 'Inventory',
      sub: 'what is actually running',
      icon: 'table',
      pattern: 'service',
      items: ['Control-plane version', 'Every kubelet version', 'kubectl and add-on versions', 'CNI, CSI, Gateway, charts'],
    },
    {
      id: 'order',
      kind: 'list',
      label: 'Order',
      sub: 'one minor version at a time',
      icon: 'sortarrows',
      pattern: 'network',
      items: ['Control plane first', 'Then node pools', 'Then add-ons as required', 'Never skip minor versions'],
    },
    {
      id: 'skew',
      kind: 'list',
      label: 'Version skew',
      sub: 'how far parts may differ',
      icon: 'scale',
      pattern: 'storage',
      items: ['kubelet may lag, never lead', 'kubectl within a small window', 'Read the current policy', 'Do not memorise a matrix'],
    },
    {
      id: 'deprecations',
      kind: 'list',
      label: 'Deprecated APIs',
      sub: 'removed in the new version',
      icon: 'trash',
      pattern: 'warn',
      items: ['Check release notes', 'Find manifests that use them', 'Migrate before upgrading', 'Charts and operators too'],
    },
  ],
  edges: [],
}
