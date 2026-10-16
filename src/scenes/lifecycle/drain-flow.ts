import type { Scene } from '@graphlearning/flow'

// §12.2 — cordon, drain, maintain, uncordon; the band is what happens to each kind of Pod.
export const drainFlow: Scene = {
  id: 'drain-flow',
  title: 'Taking a node out, safely',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'cordon', label: 'cordon node-2', sub: 'no new Pods placed', pattern: 'user', icon: 'ban' },
    { id: 'drain', label: 'drain node-2', sub: 'evicts, honouring budgets', pattern: 'user', icon: 'power' },
    {
      id: 'pod-fates',
      label: 'What happens to each Pod',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'fate-deploy', label: 'Deployment Pods', sub: 'recreated elsewhere', pattern: 'storage', icon: 'repeat' },
        { id: 'fate-daemon', label: 'DaemonSet Pods', sub: 'skipped when told to', pattern: 'network', icon: 'server' },
        { id: 'fate-bare', label: 'Bare Pods', sub: 'gone: nothing recreates', pattern: 'warn', icon: 'skull' },
        { id: 'fate-emptydir', label: 'emptyDir data', sub: 'deleted with the Pod', pattern: 'warn', icon: 'trash' },
      ],
    },
    { id: 'uncordon', label: 'uncordon', sub: 'after maintenance', pattern: 'storage', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'cordon', target: 'drain' },
    { source: 'drain', target: 'pod-fates' },
    { source: 'pod-fates', target: 'uncordon' },
  ],
}
