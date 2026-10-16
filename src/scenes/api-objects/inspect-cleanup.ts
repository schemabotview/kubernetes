import type { Scene } from '@graphlearning/flow'

// §2.7 — the read-only evidence commands, then a cleanup bounded by context, namespace and label.
export const inspectCleanup: Scene = {
  id: 'inspect-cleanup',
  title: 'Read first, delete narrowly',
  flow: 'TB',
  nodes: [
    {
      id: 'reads',
      kind: 'code',
      filename: 'terminal (illustrative)',
      label: `kubectl get deploy,rs,pods -n catalogue
kubectl describe pod api-7f9c-a -n catalogue
kubectl get events -n catalogue --sort-by=.lastTimestamp
kubectl delete pods -n catalogue -l run=scratch`,
    },
    {
      id: 'bounds',
      label: 'Bounds on every mutation',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'ctx', label: 'Context', sub: 'checked, not assumed', pattern: 'warn', icon: 'server' },
        { id: 'ns', label: 'Namespace', sub: 'always explicit', pattern: 'warn', icon: 'folder' },
        { id: 'label', label: 'Label', sub: 'only disposable objects', pattern: 'warn', icon: 'tag' },
        { id: 'preview', label: 'Preview', sub: 'get the same selector first', pattern: 'warn', icon: 'search' },
      ],
    },
  ],
  edges: [{ source: 'reads', target: 'bounds', label: 'before the last line' }],
}
