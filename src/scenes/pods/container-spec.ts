import type { Scene } from '@graphlearning/flow'

// §3.4 — the container fields that decide what runs, with what settings, and how much the
// scheduler reserves for it.
export const containerSpec: Scene = {
  id: 'container-spec',
  title: 'What runs, configured how, sized how',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'container',
      kind: 'code',
      filename: 'container (illustrative)',
      label: `- name: api
  image: registry.example/catalogue-api@sha256:4f1c…
  command: ["/app/server"]        # replaces ENTRYPOINT
  args: ["--port=8080"]           # replaces CMD
  env:
    - name: LOG_LEVEL
      value: info
  ports:
    - containerPort: 8080
  resources:
    requests: { cpu: 100m, memory: 128Mi }`,
    },
    {
      id: 'meaning',
      label: 'What each field decides',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'command', label: 'command / args', sub: 'override the image defaults', pattern: 'service', icon: 'terminal' },
        { id: 'env', label: 'env', sub: 'settings at start time', pattern: 'service', icon: 'braces' },
        { id: 'port', label: 'containerPort', sub: 'documents; does not open', pattern: 'network', icon: 'plug' },
        { id: 'requests', label: 'requests', sub: 'what the scheduler reserves', pattern: 'storage', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'container', target: 'meaning', label: 'read as' }],
}
