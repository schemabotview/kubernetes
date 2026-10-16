import type { Section } from '../types'

export const limitsAndNextSteps: Section = {
  id: 'limits-and-next-steps',
  title: 'Limits and continued specialist study',
  scene: 'next-steps',
  focus: 'db-limits',
  slide: `## Limits, and where to go next

This course built **understanding**, not certified production competence. Here is what it leaves for later.

### Before stronger availability claims
- A replicated or **managed** database, with tested failover
- Load-tested capacity and a **measured** recovery time

### Specialist directions
- **Cluster administration** — bootstrap, certificates, etcd restores
- **Cloud Kubernetes** — one provider's model in depth
- **Observability**, **security**, or **operator** development
- Service meshes and multi-cluster systems

### Every time you extend it
- Record the **versions** you run; read current documentation
- Keep recovery **evidence**, and change one thing at a time
- Revisit the catalogue under new **failure** assumptions`,
  narration:
    "This course set out to build understanding: to let you construct and explain manifests, trace reconciliation and requests, read diagnostic evidence, and justify decisions about availability, security, releases, and recovery. It does not, by itself, establish assessed production competence, and it is worth being clear about what it leaves for later. Before anyone claims stronger availability for the catalogue application, the database must change: replicated, perhaps through an operator, or moved to a managed service, with failover that has actually been tested. Capacity must be load-tested, and recovery time measured rather than estimated. From here, several specialist directions open up. Cluster administration covers bootstrapping, certificates, distribution-specific upgrades, and real etcd restores. Cloud Kubernetes goes deep on one provider's model. Observability, security, and operator development are each a course of their own, as are service meshes and multi-cluster systems. Whichever you choose, keep the habits this course has repeated. Record the versions you run, and check current documentation rather than memory. Keep recovery evidence. Change one thing at a time. And revisit the catalogue application under new failure and scale assumptions, checking what still holds before you extend it.",
}
