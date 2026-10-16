import type { Scene } from '@graphlearning/flow'

// §3 — control-plane versus node responsibilities. Two worker nodes rather than one so that
// "the control plane decides, nodes execute" reads as one-to-many.
export const clusterAnatomy: Scene = {
  id: 'cluster-anatomy',
  title: 'Control plane decides, nodes execute',
  flow: 'TB',
  padding: 0.17, // tall board: keeps the control plane clear of the eyebrow
  nodes: [
    {
      id: 'control-plane',
      label: 'Control plane',
      sub: 'stores intent and makes decisions',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'apiserver', label: 'API server', sub: 'the only front door', pattern: 'service', icon: 'dooropen' },
        { id: 'etcd', label: 'etcd', sub: 'persisted cluster state', pattern: 'storage', icon: 'database' },
        { id: 'scheduler', label: 'Scheduler', sub: 'picks a node per Pod', pattern: 'service', icon: 'calendar' },
        { id: 'controllers', label: 'Controllers', sub: 'reconcile each kind', pattern: 'service', icon: 'repeat' },
      ],
    },
    {
      id: 'nodes',
      label: 'Worker nodes',
      sub: 'run the containers',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'node-a',
          label: 'Node A',
          pattern: 'network',
          children: [
            { id: 'kubelet-a', label: 'kubelet', sub: 'runs assigned Pods', pattern: 'network', icon: 'gears' },
            { id: 'runtime-a', label: 'Runtime', sub: 'containerd via CRI', pattern: 'network', icon: 'box' },
          ],
        },
        {
          id: 'node-b',
          label: 'Node B',
          pattern: 'network',
          children: [
            { id: 'kubelet-b', label: 'kubelet', sub: 'reports node status', pattern: 'network', icon: 'gears' },
            { id: 'runtime-b', label: 'Runtime', sub: 'containerd via CRI', pattern: 'network', icon: 'box' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'control-plane', target: 'nodes', label: 'watch and report', bidirectional: true }],
}
