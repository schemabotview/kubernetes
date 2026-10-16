import type { Scene } from '@graphlearning/flow'

// §6.6 — Gateway API splits the Ingress job into role-owned objects; an implementation is still
// required for any of them to carry traffic.
export const gatewayRoles: Scene = {
  id: 'gateway-roles',
  title: 'One job, three owners',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'gateway-objects',
      label: 'Gateway API objects, by who owns them',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'gatewayclass', label: 'GatewayClass', sub: 'infrastructure provider', pattern: 'storage', icon: 'building' },
        { id: 'gateway', label: 'Gateway', sub: 'cluster operator: listeners', pattern: 'network', icon: 'dooropen' },
        { id: 'httproute', label: 'HTTPRoute', sub: 'app team: paths to Services', pattern: 'user', icon: 'share' },
        { id: 'implementation', label: 'Implementation', sub: 'must be installed', pattern: 'warn', icon: 'wrench' },
      ],
    },
    { id: 'route-target', label: 'Service', sub: 'catalogue-api:80', pattern: 'network', icon: 'router' },
    { id: 'status', label: 'Route status', sub: 'Accepted and ResolvedRefs', pattern: 'storage', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'gateway-objects', target: 'route-target', label: 'backendRefs' },
    { source: 'route-target', target: 'status', label: 'check', dashed: true },
  ],
}
