import type { Scene } from '@graphlearning/flow'

// §1 — what an orchestrator takes over from a person running containers by hand, and what it never
// can. The second band is the point of the section: cluster automation is not application
// correctness, and the course comes back to that line in every chapter.
export const orchestrationScope: Scene = {
  id: 'orchestration-scope',
  title: 'What orchestration takes over',
  flow: 'TB',
  nodes: [
    { id: 'images', label: 'Container images', sub: 'built in the Docker course', pattern: 'storage', icon: 'package' },
    {
      id: 'automated',
      label: 'Kubernetes keeps doing',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'placement', label: 'Placement', sub: 'which node runs each copy', pattern: 'service', icon: 'server' },
        { id: 'replacement', label: 'Replacement', sub: 'a lost Pod is recreated', pattern: 'service', icon: 'repeat' },
        { id: 'discovery', label: 'Discovery', sub: 'a stable name in front of changing Pods', pattern: 'network', icon: 'network' },
        { id: 'rollout', label: 'Rollout', sub: 'old copies swapped for new ones', pattern: 'service', icon: 'gitbranch' },
      ],
    },
    {
      id: 'yours',
      label: 'Still yours to get right',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'logic', label: 'Business logic', sub: 'a wrong answer replicated twice', pattern: 'warn', icon: 'bug' },
        { id: 'data', label: 'Data integrity', sub: 'backups, migrations, consistency', pattern: 'warn', icon: 'database' },
        { id: 'capacity', label: 'Capacity', sub: 'machines must exist to place on', pattern: 'warn', icon: 'gauge' },
        { id: 'signals', label: 'Health signals', sub: 'the probes the app exposes', pattern: 'warn', icon: 'bell' },
      ],
    },
  ],
  edges: [
    { source: 'images', target: 'automated', label: 'declared once' },
    { source: 'automated', target: 'yours', label: 'does not fix', dashed: true },
  ],
}
