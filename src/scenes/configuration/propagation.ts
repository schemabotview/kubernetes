import type { Scene } from '@graphlearning/flow'

// §5.4 — what happens to a running container when its ConfigMap changes, by consumption path.
export const propagation: Scene = {
  id: 'propagation',
  title: 'When the ConfigMap changes',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'edit', label: 'ConfigMap edited', sub: 'LOG_LEVEL: debug', pattern: 'user', icon: 'pencil' },
    {
      id: 'paths',
      label: 'What the running container sees',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'env-path', label: 'Env variable', sub: 'old value until restart', pattern: 'warn', icon: 'ban' },
        { id: 'volume-path', label: 'Mounted file', sub: 'updates after a delay', pattern: 'storage', icon: 'clock' },
        { id: 'subpath', label: 'subPath mount', sub: 'never updates', pattern: 'warn', icon: 'circleslash' },
        { id: 'reread', label: 'The app', sub: 'must re-read the file', pattern: 'service', icon: 'repeat' },
      ],
    },
    { id: 'rollout', label: 'Controlled rollout', sub: 'new name or hash → new Pods', pattern: 'storage', icon: 'workflow' },
  ],
  edges: [
    { source: 'edit', target: 'paths', label: 'propagates' },
    { source: 'paths', target: 'rollout', label: 'predictable alternative', dashed: true },
  ],
}
