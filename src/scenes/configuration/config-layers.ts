import type { Scene } from '@graphlearning/flow'

// §5.1 — four things that are often bundled into an image and should not be.
export const configLayers: Scene = {
  id: 'config-layers',
  title: 'Artifact, settings, credentials, identity',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'artifact',
      kind: 'list',
      label: 'Image',
      sub: 'identical in every environment',
      icon: 'package',
      pattern: 'user',
      items: ['Code and dependencies', 'Safe defaults', 'Referenced by digest', 'Promoted, never rebuilt'],
    },
    {
      id: 'settings',
      kind: 'list',
      label: 'ConfigMap',
      sub: 'non-secret settings',
      icon: 'braces',
      pattern: 'service',
      items: ['Log level, feature flags', 'Database host and name', 'Differs per environment', 'Readable by many'],
    },
    {
      id: 'credentials',
      kind: 'list',
      label: 'Secret',
      sub: 'credentials and keys',
      icon: 'key',
      pattern: 'warn',
      items: ['Database password', 'API tokens, TLS keys', 'Access tightly limited', 'Never baked into an image'],
    },
    {
      id: 'identity',
      kind: 'list',
      label: 'Service account',
      sub: 'who the Pod is',
      icon: 'usercheck',
      pattern: 'storage',
      items: ['A name for the workload', 'Short-lived projected tokens', 'Permissions in Chapter 9', 'One per application'],
    },
  ],
  edges: [],
}
