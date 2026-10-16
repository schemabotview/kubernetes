import type { Scene } from '@graphlearning/flow'

// §3.1 — what containers in one Pod share, and what stays separate. Two bands of 2×2 so the
// contrast is read across, row by row.
export const podBoundary: Scene = {
  id: 'pod-boundary',
  title: 'One Pod, shared and separate',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'shared',
      label: 'Shared by every container in the Pod',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'ip', label: 'One IP', sub: 'one network namespace', pattern: 'network', icon: 'network' },
        { id: 'localhost', label: 'localhost', sub: 'containers reach each other', pattern: 'network', icon: 'link' },
        { id: 'volumes', label: 'Volumes', sub: 'mounted where each needs', pattern: 'storage', icon: 'harddrive' },
        { id: 'fate', label: 'One fate', sub: 'scheduled and removed together', pattern: 'service', icon: 'layers' },
      ],
    },
    {
      id: 'separate',
      label: 'Separate per container',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'image', label: 'Image', sub: 'its own filesystem', pattern: 'user', icon: 'package' },
        { id: 'process', label: 'Process', sub: 'its own command', pattern: 'user', icon: 'cpu' },
        { id: 'restarts', label: 'Restarts', sub: 'counted per container', pattern: 'user', icon: 'repeat' },
        { id: 'resources', label: 'Resources', sub: 'requested per container', pattern: 'user', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'shared', target: 'separate', label: 'but' }],
}
