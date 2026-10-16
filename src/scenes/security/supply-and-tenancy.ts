import type { Scene } from '@graphlearning/flow'

// §9.7 — image trust and tenant boundaries; the last card is what NOT to treat as sufficient.
export const supplyAndTenancy: Scene = {
  id: 'supply-and-tenancy',
  title: 'What you run, and who shares the cluster',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'provenance',
      kind: 'list',
      label: 'Image identity',
      sub: 'what exactly runs',
      icon: 'fingerprint',
      pattern: 'service',
      items: ['Pin by digest', 'Pull from a trusted registry', 'Verify signatures if you can', 'Admission can enforce it'],
    },
    {
      id: 'contents',
      kind: 'list',
      label: 'Image contents',
      sub: 'what is inside it',
      icon: 'search',
      pattern: 'network',
      items: ['Scan for known vulnerabilities', 'Small base images', 'Rebuild for patches', 'Re-scan running images'],
    },
    {
      id: 'tenancy',
      kind: 'list',
      label: 'Tenant boundaries',
      sub: 'teams sharing a cluster',
      icon: 'building',
      pattern: 'storage',
      items: ['Namespace per team or app', 'RBAC, quotas and policies on each', 'Nodes are still shared', 'Hostile tenants: separate clusters'],
    },
    {
      id: 'insufficient',
      kind: 'list',
      label: 'Not enough alone',
      sub: 'common false comfort',
      icon: 'ban',
      pattern: 'warn',
      items: ['base64 is not encryption', 'A namespace is not isolation', 'A digest is not a safety check', 'A policy without an enforcer'],
    },
  ],
  edges: [],
}
