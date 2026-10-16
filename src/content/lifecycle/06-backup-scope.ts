import type { Section } from '../types'

export const backupScope: Section = {
  id: 'backup-scope',
  title: 'Cluster-state versus application-data backup',
  scene: 'recovery-inventory',
  focus: 'inv-creds',
  slide: `## Cluster state versus application data

"We back up the cluster" usually covers one of **four** things. A recovery needs all of them, kept apart.

### The inventory
- **Cluster state** — etcd snapshots of every object
- **Declarative config** — manifests and values in Git
- **Credentials and keys** — CA, encryption keys, access
- **Application data** — the database's own backups

### Why they are separate
- An etcd snapshot contains **Secrets** — protect it
- It does **not** contain volume contents
- Without the keys, encrypted backups cannot be read
- Git rebuilds objects, but not their **data**

### Practical rule
- Write the inventory down, with where each copy lives
- Store at least one copy **outside** the cluster's failure domain`,
  narration:
    "When someone says, we back up the cluster, it is worth asking which of four quite different things they mean, because a real recovery needs all four, and each is protected differently. Cluster state is an etcd snapshot, a copy of every object in the API. On a self-managed cluster, taking it is your job; on a managed cluster, ask the provider what they keep and whether you can restore from it. Declarative configuration is your manifests, overlays, and chart values in source control, which can rebuild most objects without any snapshot at all. Credentials and keys include the cluster's certificate authority, the encryption keys protecting Secrets, and the access needed to registries and cloud accounts. And application data is the PostgreSQL backup from Chapter 7. The separations matter. An etcd snapshot contains every Secret, so it must be encrypted and tightly restricted. It does not contain the contents of any volume, so it never replaces a database backup. And without the right keys, encrypted backups cannot be read at all. So write the inventory down, with where each copy lives, and keep at least one copy outside the cluster's own failure domain.",
}
