import type { Scene } from '@graphlearning/flow'

// §2.4 — a selector is a query over labels, not a list of names. The fourth Pod carries a typo,
// which is the most common reason a Service has no endpoints.
export const labelSelection: Scene = {
  id: 'label-selection',
  title: 'A selector is a query',
  flow: 'TB',
  nodes: [
    { id: 'selector', label: 'Selector', sub: 'app=catalogue, tier=api', pattern: 'service', icon: 'funnel' },
    {
      id: 'pods',
      label: 'Pods in namespace catalogue',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'api-1', label: 'api-7f9c-a', sub: 'app=catalogue tier=api', pattern: 'service', icon: 'circlecheck' },
        { id: 'api-2', label: 'api-7f9c-b', sub: 'app=catalogue tier=api', pattern: 'service', icon: 'circlecheck' },
        { id: 'db', label: 'postgres-0', sub: 'app=catalogue tier=db', pattern: 'storage', icon: 'circleslash' },
        { id: 'typo', label: 'api-old', sub: 'app=catalog tier=api', pattern: 'warn', icon: 'ban' },
      ],
    },
    { id: 'identity', label: 'Name and UID', sub: 'name is reusable; UID is never reused', pattern: 'storage', icon: 'fingerprint' },
  ],
  edges: [
    { source: 'selector', target: 'pods', label: 'matches 2 of 4' },
    { source: 'pods', target: 'identity', label: 'each also has', dashed: true },
  ],
}
