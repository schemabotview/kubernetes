import type { Scene } from '@graphlearning/flow'

// §3.3 — image identity on the code card, and the four usual reasons a pull fails.
export const imagePull: Scene = {
  id: 'image-pull',
  title: 'Naming the bytes, and failing to fetch them',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'spec',
      kind: 'code',
      filename: 'pod spec (illustrative)',
      label: `containers:
  - name: api
    # a tag can move; a digest names exact bytes
    image: registry.example/catalogue-api@sha256:4f1c…
    imagePullPolicy: IfNotPresent`,
    },
    { id: 'kubelet', label: 'kubelet', sub: 'asks the runtime to pull', pattern: 'network', icon: 'gears' },
    {
      id: 'failures',
      label: 'Why a pull fails',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'missing', label: 'Not found', sub: 'wrong name, tag or digest', pattern: 'warn', icon: 'search' },
        { id: 'auth', label: 'Unauthorised', sub: 'private registry, no pull secret', pattern: 'warn', icon: 'lock' },
        { id: 'network', label: 'Unreachable', sub: 'DNS, proxy or rate limit', pattern: 'warn', icon: 'globe' },
        { id: 'backoff', label: 'BackOff', sub: 'retries with growing delays', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'spec', target: 'kubelet', label: 'bound to a node' },
    { source: 'kubelet', target: 'failures', label: 'ErrImagePull', dashed: true },
  ],
}
