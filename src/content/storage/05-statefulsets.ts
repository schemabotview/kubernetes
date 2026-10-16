import type { Section } from '../types'

export const statefulsets: Section = {
  id: 'statefulsets',
  title: 'StatefulSet identity, order, and storage',
  scene: 'stateful-identity',
  focus: 'stable-claim',
  slide: `## StatefulSets for the database

A **StatefulSet** gives each Pod an identity that survives replacement: a name, a DNS entry, and **its own claim**.

### What stays stable
- Pod names by ordinal: \`postgres-0\`, \`postgres-1\`
- One claim per Pod from \`volumeClaimTemplates\`
- A stable DNS name through a **headless Service**
- Ordered start, stop, and update

### Replacing postgres-0
- The replacement has the **same name**
- It reattaches \`data-postgres-0\` and finds its data
- Deleting the StatefulSet **keeps** the claims

### What it does not provide
- No replication and **no failover**
- Assumptions to record: image, version, data directory
- More replicas need **database** replication, not just Pods`,
  narration:
    "Now the database can be built properly. A StatefulSet is the controller for workloads whose Pods each need an identity that survives replacement. Its Pods are named by ordinal, postgres zero, postgres one, and so on, rather than with random suffixes. A volume claim template gives each Pod its own claim, so postgres zero always uses data-postgres-zero. A headless Service gives each Pod a stable DNS name. And Pods are started, stopped, and updated in order, by ordinal. Watch what happens when postgres zero is replaced, perhaps because its node failed. The replacement Pod has the same name. It reattaches the same claim, data-postgres-zero, and PostgreSQL finds its data directory exactly where it left it. Even deleting the whole StatefulSet leaves the claims in place by default, which protects the data from a careless delete. It is just as important to say what this does not provide. A StatefulSet with one replica is a single database instance. There is no replication and no automatic failover; while the Pod is being replaced, the database is down. Before concrete examples, record your assumptions: the PostgreSQL image and version, and where its data directory lives.",
}
