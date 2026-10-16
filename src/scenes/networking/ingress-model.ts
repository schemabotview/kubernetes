import type { Scene } from '@graphlearning/flow'

// §6.5 — the Ingress object is only rules; a controller you install does the proxying.
export const ingressModel: Scene = {
  id: 'ingress-model',
  title: 'Rules versus the proxy that reads them',
  flow: 'TB',
  nodes: [
    { id: 'client', label: 'Client', sub: 'catalogue.example', pattern: 'user', icon: 'globe' },
    {
      id: 'ingress-pair',
      label: 'Two halves, installed separately',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'ingress-object', label: 'Ingress', sub: 'host and path rules', pattern: 'storage', icon: 'file' },
        { id: 'ingress-controller', label: 'Controller', sub: 'the proxy that applies them', pattern: 'service', icon: 'server' },
        { id: 'ingress-class', label: 'IngressClass', sub: 'which controller owns it', pattern: 'storage', icon: 'tag' },
        { id: 'no-controller', label: 'No controller', sub: 'accepted, serves nothing', pattern: 'warn', icon: 'ban' },
      ],
    },
    { id: 'svc', label: 'Service', sub: 'catalogue-api:80', pattern: 'network', icon: 'router' },
  ],
  edges: [
    { source: 'client', target: 'ingress-pair', label: 'HTTP' },
    { source: 'ingress-pair', target: 'svc', label: '/products' },
  ],
}
