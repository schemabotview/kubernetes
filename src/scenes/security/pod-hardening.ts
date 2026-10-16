import type { Scene } from '@graphlearning/flow'

// §9.4 — a restricted security context, and the Pod Security Admission modes that check it.
export const podHardening: Scene = {
  id: 'pod-hardening',
  title: 'Least privilege inside the container',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'context',
      kind: 'code',
      filename: 'api container (illustrative)',
      label: `securityContext:
  runAsNonRoot: true
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
  capabilities: { drop: ["ALL"] }
  seccompProfile: { type: RuntimeDefault }`,
    },
    {
      id: 'psa',
      label: 'Pod Security Admission on the namespace',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'levels', label: 'Levels', sub: 'privileged · baseline · restricted', pattern: 'service', icon: 'sortarrows' },
        { id: 'enforce', label: 'enforce', sub: 'violating Pods rejected', pattern: 'warn', icon: 'ban' },
        { id: 'audit', label: 'audit', sub: 'recorded in audit logs', pattern: 'service', icon: 'scroll' },
        { id: 'warn-mode', label: 'warn', sub: 'shown to the user', pattern: 'service', icon: 'bell' },
      ],
    },
  ],
  edges: [{ source: 'context', target: 'psa', label: 'checked at admission' }],
}
