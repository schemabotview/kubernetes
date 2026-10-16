import type { Scene } from '@graphlearning/flow'

// §11.7 — the incident record the chapter ends on, and what counts as verified.
export const incidentRecord: Scene = {
  id: 'incident-record',
  title: 'An incident, written down',
  flow: 'TB',
  nodes: [
    {
      id: 'record',
      label: 'For every incident, record',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'rec-hypothesis', label: 'Hypothesis', sub: 'what you think is wrong', pattern: 'service', icon: 'brain' },
        { id: 'rec-observation', label: 'Observation', sub: 'the evidence for and against', pattern: 'network', icon: 'search' },
        { id: 'rec-change', label: 'Smallest change', sub: 'one, justified, reversible', pattern: 'user', icon: 'pencil' },
        { id: 'rec-verify', label: 'Verification', sub: 'the same test, passing', pattern: 'storage', icon: 'circlecheck' },
      ],
    },
    {
      id: 'verified',
      label: 'Verified means',
      pattern: 'storage',
      cols: 2,
      children: [
        { id: 'ver-k8s', label: 'Kubernetes', sub: 'ready, no restarts', pattern: 'storage', icon: 'layers' },
        { id: 'ver-app', label: 'Application', sub: 'real queries, real data', pattern: 'storage', icon: 'database' },
      ],
    },
  ],
  edges: [{ source: 'record', target: 'verified', label: 'until' }],
}
