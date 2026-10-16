import type { Scene } from '@graphlearning/flow'

// §10.1 — build once, record the digest, promote that digest. The warn card is the anti-pattern.
export const artifactPromotion: Scene = {
  id: 'artifact-promotion',
  title: 'Build once, promote the digest',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    { id: 'commit', label: 'Source commit', sub: 'code and manifests', pattern: 'user', icon: 'gitbranch' },
    { id: 'build', label: 'CI build', sub: 'one image, once', pattern: 'service', icon: 'wrench' },
    { id: 'digest', label: 'Recorded digest', sub: 'sha256:4f1c…', pattern: 'storage', icon: 'fingerprint' },
    {
      id: 'environments',
      label: 'Every environment runs that digest',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'env-staging', label: 'Staging', sub: 'tested here', pattern: 'network', icon: 'search' },
        { id: 'env-prod', label: 'Production', sub: 'the same bytes', pattern: 'network', icon: 'globe' },
        { id: 'env-tag', label: 'Moving tag', sub: ':latest drifts', pattern: 'warn', icon: 'ban' },
        { id: 'env-rebuild', label: 'Rebuild per env', sub: 'untested bytes', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [
    { source: 'commit', target: 'build' },
    { source: 'build', target: 'digest', label: 'push' },
    { source: 'digest', target: 'environments', label: 'promote' },
  ],
}
