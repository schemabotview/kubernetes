import type { Section } from '../types'

export const endToEndReview: Section = {
  id: 'end-to-end-review',
  title: 'End-to-end architecture, release, and recovery review',
  scene: 'system-review',
  focus: 'weakest',
  slide: `## The whole system, reviewed

Every chapter added one concern. Review them **together**, as one architecture with one runbook.

### Questions per topic
- **Image** — which digest runs, and where was it tested?
- **Configuration** — where does each setting and credential live?
- **Request path** — every hop, and where TLS ends
- **Data** — one writer, independent backups, a tested restore
- **Capacity** — honest requests, scaling bounds, spread
- **Policy** — least-privilege RBAC, Pod Security, NetworkPolicy
- **Release** — promotion, rollback limits, one owner per field
- **Restoration** — inventory, runbook, measured recovery time

### The honest conclusion
- The design is only as available as its **single database**`,
  narration:
    "Every chapter of this course added one concern to the catalogue application. To finish, review them together, as a single architecture with a single runbook. For the image: which digest is running, and where was that digest tested? For configuration: where does each setting live, and where does each credential live, and who can read it? For the request path: every hop from the client through the Gateway and Service to the API and the database, and where TLS terminates. For data: exactly one writer, an independent backup, and a restore that has actually been tested. For capacity: honest requests, sensible scaling bounds, and replicas spread across failure domains. For policy: least-privilege RBAC for people and workloads, Pod Security enforced, and network policy that is really enforced by the plugin. For releases: digest promotion, a clear understanding of what rollback does not restore, and one owner per field. And for restoration: an inventory, a runbook, and a measured recovery time. Then the honest conclusion that this review always reaches. However carefully the rest is built, the whole system is only as available as its single database instance, and that is where it must change next.",
}
