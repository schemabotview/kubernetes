import type { Scene } from '@graphlearning/flow'

// §11.4 — the debugging commands, then the cautions that come with them.
export const debugTools: Scene = {
  id: 'debug-tools',
  title: 'Looking inside, carefully',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'debug-commands',
      kind: 'code',
      filename: 'terminal (illustrative)',
      label: `kubectl logs api-7f9c-a -n catalogue --previous
kubectl describe pod api-7f9c-a -n catalogue
kubectl exec -it api-7f9c-a -n catalogue -- sh
kubectl debug -it api-7f9c-a -n catalogue \\
  --image=busybox:1.36 --target=api
kubectl port-forward pod/api-7f9c-a 8080 -n catalogue`,
    },
    {
      id: 'debug-cautions',
      label: 'Before you reach for them',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'not-fix', label: 'Not a fix', sub: 'a debug change is temporary', pattern: 'warn', icon: 'wrench' },
        { id: 'exec-power', label: 'exec is power', sub: 'it is an RBAC grant', pattern: 'warn', icon: 'lock' },
        { id: 'secrets-seen', label: 'Secrets visible', sub: 'env and mounted files', pattern: 'warn', icon: 'key' },
        { id: 'clean-up', label: 'Clean up', sub: 'remove debug Pods after', pattern: 'warn', icon: 'trash' },
      ],
    },
  ],
  edges: [{ source: 'debug-commands', target: 'debug-cautions' }],
}
