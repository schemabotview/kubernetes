import type { Section } from '../types'

export const driftAndOwnership: Section = {
  id: 'drift-and-ownership',
  title: 'Drift and ownership conflicts',
  scene: 'competing-writers',
  focus: 'one-owner',
  slide: `## Drift and ownership conflicts

**Drift** is the cluster differing from the record. The worst drift is two writers **fighting** over one field.

### Three writers of \`spec.replicas\`
- The Git manifest says **3**
- The autoscaler wants **5** under load
- Someone ran \`kubectl scale\` to **4**

### What follows
- A GitOps agent resets to 3; the autoscaler raises it again
- Replicas **flap**, and Pods churn under load

### The fix
- **One owner per field**: drop \`replicas\` from Git
- Use field managers to see who wrote what
- Emergency hand edits go **back into Git** at once

### Bridge
- Ownership evidence feeds **diagnosis** — Chapter 11`,
  narration:
    "Drift is the cluster differing from the record in source control. Some drift is just untidy. The dangerous kind is two writers fighting over the same field, and the replica count is the classic example. The manifest in Git says three replicas. The autoscaler from Chapter 8, under load, wants five. And during an incident, someone ran kubectl scale and set four. Now add a GitOps agent that faithfully resets the field to three, as it was told to. The autoscaler raises it again, the agent resets it, and the replica count flaps, creating and deleting Pods exactly when the system is under the most load. Every writer is doing its job correctly; the design is what is wrong. The fix is a single owner per field. If the autoscaler owns replicas, remove replicas from the manifest in Git entirely, so the agent has no opinion about it. Field managers, from Chapter 2, show which writer last set each field, which turns a mystery into evidence. And when an emergency demands a hand edit, put the change back into Git immediately, so the record and the cluster agree again. That ownership and release evidence is also what the next chapter, on diagnosis, relies on.",
}
