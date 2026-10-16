import type { Scene } from '@graphlearning/flow'

// §6.3 — Service DNS names, from short to fully qualified, and what each lookup returns.
export const dnsNames: Scene = {
  id: 'dns-names',
  title: 'Names a Pod can resolve',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'names',
      kind: 'code',
      filename: 'from a Pod in namespace catalogue (illustrative)',
      label: `postgres                          # same namespace
postgres.catalogue                # namespace-qualified
postgres.catalogue.svc            # explicit Service
postgres.catalogue.svc.cluster.local   # fully qualified`,
    },
    {
      id: 'answers',
      label: 'What the lookup returns',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'clusterip', label: 'ClusterIP', sub: 'one stable virtual IP', pattern: 'network', icon: 'router' },
        { id: 'headless', label: 'Headless', sub: 'the ready Pod IPs', pattern: 'network', icon: 'boxes' },
        { id: 'other-ns', label: 'Other namespace', sub: 'needs the qualified name', pattern: 'service', icon: 'folder' },
        { id: 'cache', label: 'Clients cache', sub: 'answers have a TTL', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [{ source: 'names', target: 'answers', label: 'cluster DNS' }],
}
