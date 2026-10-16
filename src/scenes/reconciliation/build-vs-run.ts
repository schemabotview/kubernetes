import type { Scene } from '@graphlearning/flow'

// §5 — CRI versus image-building tools. The registry is the only thing the two halves share: the
// OCI image format is the contract, and neither side needs the other's tooling.
export const buildVsRun: Scene = {
  id: 'build-vs-run',
  title: 'Built with Docker, run through CRI',
  flow: 'TB',
  padding: 0.17, // tall board: keeps the build band clear of the eyebrow
  nodes: [
    {
      id: 'build',
      label: 'Build time',
      sub: 'your workstation or CI',
      pattern: 'user',
      cols: 2,
      children: [
        { id: 'dockerfile', label: 'Dockerfile', sub: 'build instructions', pattern: 'user', icon: 'file' },
        { id: 'builder', label: 'docker build', sub: 'or any OCI builder', pattern: 'user', icon: 'wrench' },
        { id: 'image', label: 'OCI image', sub: 'layers and config', pattern: 'user', icon: 'package' },
        { id: 'digest', label: 'Digest', sub: 'sha256 of the content', pattern: 'user', icon: 'fingerprint' },
      ],
    },
    { id: 'registry', label: 'Registry', sub: 'tag and digest', pattern: 'storage', icon: 'warehouse' },
    {
      id: 'run',
      label: 'Run time, on every node',
      sub: 'no Docker daemon required',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'kubelet', label: 'kubelet', sub: 'asks over CRI', pattern: 'network', icon: 'gears' },
        { id: 'cri-runtime', label: 'CRI runtime', sub: 'containerd or CRI-O', pattern: 'network', icon: 'box' },
        { id: 'process', label: 'Container', sub: 'an isolated process', pattern: 'network', icon: 'cpu' },
        { id: 'status', label: 'Status', sub: 'reported to the API', pattern: 'network', icon: 'bell' },
      ],
    },
  ],
  edges: [
    { source: 'build', target: 'registry', label: 'push' },
    { source: 'registry', target: 'run', label: 'pull' },
  ],
}
