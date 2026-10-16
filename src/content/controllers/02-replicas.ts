import type { Section } from '../types'

export const replicas: Section = {
  id: 'replicas',
  title: 'Replicas and reconciliation',
  scene: 'replacement',
  focus: 'c-new',
  slide: `## Replicas and reconciliation

Delete a Pod that a ReplicaSet owns, and another appears. It is a **replacement**, not the same Pod brought back.

### What happens
- The ReplicaSet observes **1 of 2** and creates a Pod
- The new Pod has a **new name, UID, and IP**
- Nothing written inside the old container survives

### What this means for the application
- Never depend on a Pod's name or address
- Keep state **outside** the container — Chapter 7
- Expect Pods to come and go during normal operation

### Using it on purpose
- Deleting one Pod is a quick way to see replacement
- It is **not** a fix: the new Pod runs the same template

### Scaling
- Change the count in the **manifest**, not by hand
- Scaling down must stop Pods **cleanly**`,
  narration:
    "Let's watch reconciliation do something visible. The catalogue API's ReplicaSet wants two replicas. Delete one of its Pods, carefully, by name, in your learning namespace, and within seconds another appears. It is important to be precise about what that new Pod is. It is not the old Pod restarted or restored. The ReplicaSet simply observed one Pod where two are wanted, and created a fresh one from its template. The new Pod has a new name, a new unique ID, usually a new IP address, and possibly a different node. Anything the old container wrote to its own filesystem is gone. That has direct consequences for how you build applications. Never depend on a Pod's name or address; later chapters give you stable names through Services. Keep anything that must survive outside the container, which is what persistent storage is for in Chapter 7. And expect Pods to come and go as part of normal operation, not only during incidents. Deleting a Pod is a useful way to see replacement happen. It is not a repair, though: the new Pod runs exactly the same template, including whatever was wrong with it.",
}
