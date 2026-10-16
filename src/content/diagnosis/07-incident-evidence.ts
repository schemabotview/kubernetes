import type { Section } from '../types'

export const incidentEvidence: Section = {
  id: 'incident-evidence',
  title: 'Incident evidence and verification after recovery',
  scene: 'incident-record',
  focus: 'ver-app',
  slide: `## Incident evidence and verification

An incident is not over when the Pods are green. It is over when the **application** is verified, and the record is written.

### For every incident
- The **hypothesis** you acted on
- The **observation** that supported or refuted it
- The **smallest** justified change you made
- The **verification** — the same test, now passing

### Verified means both
- Kubernetes: ready, no restarts, rollout complete
- Application: real **queries**, against real **data**

### Why it matters
- The record is the input to the **next** fix
- A green dashboard can hide wrong answers

### Bridge
- Next: nodes, control planes, and **recovery** — Chapter 12`,
  narration:
    "An incident is not over when the Pods turn green. It is over when the application has been verified, and the record has been written. For every incident, record four things. The hypothesis you acted on: what you believed was wrong. The observation that supported it, or refuted it, from the evidence sources in this chapter. The smallest justified change you made, ideally one, reversible, and recorded in source control. And the verification: the same test that failed before, now passing. Verified has two halves. On the Kubernetes side: the Pods are ready, they are not restarting, and any rollout is complete. On the application side: real catalogue queries return correct results from real data. Both matter, because the course has shown, again and again, that a cluster can report healthy while an application gives wrong answers, from Chapter 1's two copies of a bug to a restored database with missing rows. The record matters because it is the input to the next diagnosis, and to fixing the cause rather than the symptom. With application diagnosis in place, the next chapter widens the view to node maintenance, control-plane health, and disaster recovery.",
}
