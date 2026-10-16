import type { Scene } from '@graphlearning/flow'

// §3.5 — init containers run to completion in order, then the app containers start together; a
// sidecar is a helper that lives beside the app for the Pod's whole life.
export const initSidecar: Scene = {
  id: 'init-sidecar',
  title: 'Before the app, and beside it',
  flow: 'TB',
  nodes: [
    {
      id: 'inits',
      label: 'Init containers — in order, each to completion',
      pattern: 'storage',
      flow: 'LR',
      children: [
        { id: 'init-1', label: 'check-schema', sub: 'exits 0 when ready', pattern: 'storage', icon: 'database' },
        { id: 'init-2', label: 'fetch-config', sub: 'writes a shared file', pattern: 'storage', icon: 'file' },
      ],
      edges: [{ source: 'init-1', target: 'init-2', label: 'then' }],
    },
    {
      id: 'app',
      label: 'App containers — started together',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'api', label: 'api', sub: 'serves the catalogue', pattern: 'service', icon: 'server' },
        { id: 'sidecar', label: 'log shipper', sub: 'a helper for the Pod’s life', pattern: 'network', icon: 'share' },
      ],
    },
    {
      id: 'limits',
      label: 'Limits of the pattern',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'once', label: 'Start-time only', sub: 'init does not re-check later', pattern: 'warn', icon: 'clock' },
        { id: 'block', label: 'Blocks the Pod', sub: 'a failing init repeats', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [
    { source: 'inits', target: 'app', label: 'all succeeded' },
    { source: 'app', target: 'limits', dashed: true },
  ],
}
