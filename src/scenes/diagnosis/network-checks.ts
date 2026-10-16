import type { Scene } from '@graphlearning/flow'

// §11.5 — the network checklist in path order, three rows of two, each with its evidence.
export const networkChecks: Scene = {
  id: 'network-checks',
  title: 'Six checks, in path order',
  flow: 'TB',
  nodes: [
    {
      id: 'checks',
      label: 'From the calling Pod to the answering process',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'chk-dns', label: '1 · Name', sub: 'nslookup from a Pod', pattern: 'network', icon: 'globe' },
        { id: 'chk-select', label: '2 · Selector', sub: 'labels match Pods?', pattern: 'network', icon: 'funnel' },
        { id: 'chk-endpoints', label: '3 · Endpoints', sub: 'any ready addresses?', pattern: 'network', icon: 'table' },
        { id: 'chk-port', label: '4 · Ports', sub: 'targetPort = listening?', pattern: 'network', icon: 'plug' },
        { id: 'chk-policy', label: '5 · Policy', sub: 'ingress and egress allow?', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'chk-app', label: '6 · Process', sub: 'answers on the Pod IP?', pattern: 'service', icon: 'server' },
      ],
    },
    { id: 'split', label: 'Halve the path', sub: 'test from the middle out', pattern: 'storage', icon: 'scissors' },
  ],
  edges: [{ source: 'checks', target: 'split', label: 'faster than guessing' }],
}
