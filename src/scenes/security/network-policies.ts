import type { Scene } from '@graphlearning/flow'

// §9.5 — default deny, then additive allows, including the DNS egress everyone forgets.
export const networkPolicies: Scene = {
  id: 'network-policies',
  title: 'Deny by default, then allow',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'default-deny', label: 'Default deny', sub: 'all Pods, ingress and egress', pattern: 'warn', icon: 'ban' },
    {
      id: 'allows',
      label: 'Additive allow rules in catalogue',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'allow-gw', label: 'Gateway → API', sub: 'TCP 8080 ingress', pattern: 'storage', icon: 'dooropen' },
        { id: 'allow-db', label: 'API → database', sub: 'TCP 5432 only', pattern: 'storage', icon: 'database' },
        { id: 'allow-dns', label: 'Any → DNS', sub: 'UDP and TCP 53 egress', pattern: 'storage', icon: 'globe' },
        { id: 'allow-import', label: 'Import → database', sub: 'TCP 5432 only', pattern: 'storage', icon: 'clock' },
      ],
    },
    { id: 'enforcer', label: 'Enforced by the CNI', sub: 'or silently ignored', pattern: 'warn', icon: 'network' },
  ],
  edges: [
    { source: 'default-deny', target: 'allows', label: 'then' },
    { source: 'allows', target: 'enforcer', label: 'only if', dashed: true },
  ],
}
