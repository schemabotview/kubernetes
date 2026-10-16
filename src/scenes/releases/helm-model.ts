import type { Scene } from '@graphlearning/flow'

// §10.3 — Helm's three nouns (chart, values, release) and the caution that the rendered output
// is what actually reaches the cluster.
export const helmModel: Scene = {
  id: 'helm-model',
  title: 'Chart, values, release',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'chart',
      kind: 'list',
      label: 'Chart',
      sub: 'a versioned package',
      icon: 'package',
      pattern: 'service',
      items: ['Templates for manifests', 'Default values', 'Its own version number', 'Published to a repository'],
    },
    {
      id: 'values',
      kind: 'list',
      label: 'Values',
      sub: 'your settings for one install',
      icon: 'braces',
      pattern: 'user',
      items: ['Override the defaults', 'One file per environment', 'Kept in source control', 'Image digest goes here'],
    },
    {
      id: 'release',
      kind: 'list',
      label: 'Release',
      sub: 'an installation in a cluster',
      icon: 'history',
      pattern: 'storage',
      items: ['install, upgrade, rollback', 'Numbered revisions', 'History stored in the cluster', 'One chart, many releases'],
    },
    {
      id: 'helm-caution',
      kind: 'list',
      label: 'Read the output',
      sub: 'what really gets applied',
      icon: 'search',
      pattern: 'warn',
      items: ['helm template to render', 'Diff before upgrade', 'Know who maintains the chart', 'Rollback ≠ data rollback'],
    },
  ],
  edges: [],
}
