import type { Scene } from '@graphlearning/flow'

// §7.1 — four places a container can write, ordered by how long the data lives.
export const volumeLifetimes: Scene = {
  id: 'volume-lifetimes',
  title: 'How long does the data live?',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'container-fs',
      kind: 'list',
      label: 'Container filesystem',
      sub: 'lives as long as the container',
      icon: 'box',
      pattern: 'warn',
      items: ['Writable layer over the image', 'Lost on every restart', 'Never for real data', 'Fills the node’s disk'],
    },
    {
      id: 'emptydir',
      kind: 'list',
      label: 'emptyDir',
      sub: 'lives as long as the Pod',
      icon: 'folder',
      pattern: 'service',
      items: ['Survives container restarts', 'Shared between containers', 'Lost when the Pod goes', 'Can be backed by memory'],
    },
    {
      id: 'projected',
      kind: 'list',
      label: 'ConfigMap / Secret',
      sub: 'projected from the API',
      icon: 'file',
      pattern: 'network',
      items: ['Read-only by default', 'Source lives in the API', 'Not for writing data', 'Updates covered in Chapter 5'],
    },
    {
      id: 'pvc-vol',
      kind: 'list',
      label: 'PVC',
      sub: 'outlives the Pod',
      icon: 'harddrive',
      pattern: 'storage',
      items: ['Backed by real storage', 'Reattached to a replacement', 'Where PostgreSQL writes', 'Has a lifetime of its own'],
    },
  ],
  edges: [],
}
