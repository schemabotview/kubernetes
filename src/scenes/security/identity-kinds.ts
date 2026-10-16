import type { Scene } from '@graphlearning/flow'

// §9.2 — humans and workloads authenticate differently; the fourth card is what to stop doing.
export const identityKinds: Scene = {
  id: 'identity-kinds',
  title: 'Who is asking',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'humans',
      kind: 'list',
      label: 'Human users',
      sub: 'from outside the cluster',
      icon: 'users',
      pattern: 'user',
      items: ['No User object exists', 'Certificates or an identity provider', 'Named per person', 'Short-lived credentials'],
    },
    {
      id: 'groups',
      kind: 'list',
      label: 'Groups',
      sub: 'asserted at login',
      icon: 'boxes',
      pattern: 'network',
      items: ['Come from the identity provider', 'Bind roles to groups', 'Joining a team grants access', 'Leaving removes it'],
    },
    {
      id: 'workloads',
      kind: 'list',
      label: 'Service accounts',
      sub: 'objects in a namespace',
      icon: 'usercheck',
      pattern: 'storage',
      items: ['One per application', 'Projected, expiring tokens', 'Named in RBAC bindings', 'catalogue-api, catalogue-import'],
    },
    {
      id: 'avoid',
      kind: 'list',
      label: 'Stop doing',
      sub: 'shared and permanent',
      icon: 'ban',
      pattern: 'warn',
      items: ['One admin kubeconfig for a team', 'Granting the default account', 'Long-lived static tokens', 'Credentials in chat or Git'],
    },
  ],
  edges: [],
}
