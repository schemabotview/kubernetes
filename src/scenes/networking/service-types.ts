import type { Scene } from '@graphlearning/flow'

// §6.4 — three Service types and port-forward, which is not a Service at all.
export const serviceTypes: Scene = {
  id: 'service-types',
  title: 'Reach, by Service type',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'type-clusterip',
      kind: 'list',
      label: 'ClusterIP',
      sub: 'inside the cluster only',
      icon: 'router',
      pattern: 'network',
      items: ['The default type', 'A virtual IP and DNS name', 'Right for the database', 'Unreachable from outside'],
    },
    {
      id: 'type-nodeport',
      kind: 'list',
      label: 'NodePort',
      sub: 'a port on every node',
      icon: 'plug',
      pattern: 'service',
      items: ['Builds on ClusterIP', 'High port, every node', 'Exposes node addresses', 'Rarely the end state'],
    },
    {
      id: 'type-lb',
      kind: 'list',
      label: 'LoadBalancer',
      sub: 'provisioned by the environment',
      icon: 'cloud',
      pattern: 'storage',
      items: ['Builds on NodePort', 'Needs a provider or add-on', 'Pending forever without one', 'One per Service: costly'],
    },
    {
      id: 'type-forward',
      kind: 'list',
      label: 'kubectl port-forward',
      sub: 'a tunnel, not a Service',
      icon: 'terminal',
      pattern: 'user',
      items: ['localhost → one Pod', 'Through the API server', 'Ends with the command', 'For learning and debugging'],
    },
  ],
  edges: [],
}
