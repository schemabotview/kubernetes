import type { Section } from '../types'

export const responsibilityModels: Section = {
  id: 'responsibility-models',
  title: 'Managed versus self-managed responsibility',
  scene: 'responsibility-table',
  focus: 'duty-table',
  slide: `## Who is responsible for what

Before maintenance or recovery, settle **who does it**. The answer changes with the kind of cluster.

### Three environments
- **Local** — the tool runs everything; nothing is backed up
- **Managed** — the provider runs the control plane and etcd
- **Self-managed** — every row is **yours**

### The rows that never move
- Workloads, their **data**, and who can access them
- Upgrading your own manifests off deprecated APIs

### "Shared" needs reading
- Node upgrades may be automatic, or yours to trigger
- Provider backups may not cover **your** restore needs

### Make it concrete
- Write your own table with **names**, not roles
- Revisit it when the provider or the team changes`,
  narration:
    "Before talking about maintenance and recovery, settle one question for your cluster: who actually does each job? The answer changes completely with the kind of cluster, and Chapter 1's three environments return here in more detail. On a local learning cluster, the tool runs everything, and nothing is backed up, which is fine for learning and nothing else. On a managed cluster, the provider runs the control plane and etcd, including its backups. On a self-managed cluster, every row in the table is yours. A few rows never move, whatever the environment: your workloads, their data, who can access them, and keeping your own manifests off deprecated APIs. The cells marked shared are where surprises live. Node upgrades on a managed cluster may happen automatically on the provider's schedule, or wait for you to trigger them. A provider's backups of cluster state may not help you restore one namespace, and they never include your database. So read the fine print for every shared cell. Then make the table concrete for your own organisation: put people's names in it, not role titles, and revisit it whenever the provider or the team changes.",
}
