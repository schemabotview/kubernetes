import type { Scene } from '@graphlearning/flow'

// §2.3 — the three top-level parts of an object, and who writes each. A 2×2 of lists so the
// board is square; the fourth cell is the rule that follows from the other three.
export const objectAnatomy: Scene = {
  id: 'object-anatomy',
  title: 'Metadata, spec, status',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'metadata',
      kind: 'list',
      label: 'metadata',
      sub: 'identity and bookkeeping',
      icon: 'tag',
      pattern: 'storage',
      items: ['name, namespace, uid', 'labels and annotations', 'ownerReferences, finalizers', 'resourceVersion, generation'],
    },
    {
      id: 'spec',
      kind: 'list',
      label: 'spec',
      sub: 'desired state — yours',
      icon: 'pencil',
      pattern: 'user',
      items: ['replicas: 2', 'the Pod template', 'image and ports', 'versioned in source control'],
    },
    {
      id: 'status',
      kind: 'list',
      label: 'status',
      sub: 'observed state — the system’s',
      icon: 'gauge',
      pattern: 'network',
      items: ['readyReplicas', 'conditions with reasons', 'observedGeneration', 'never in your manifest'],
    },
    {
      id: 'rule',
      kind: 'list',
      label: 'Reading an object',
      sub: 'compare, do not assume',
      icon: 'scale',
      pattern: 'service',
      items: ['spec says what you asked for', 'status says what happened', 'observedGeneration says if it is current', 'conditions say why'],
    },
  ],
  edges: [],
}
