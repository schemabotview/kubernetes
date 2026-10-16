import type { Section } from '../types'

export const capacityAndPending: Section = {
  id: 'capacity-and-pending',
  title: 'Capacity and Pending Pods',
  scene: 'node-capacity',
  focus: 'fits',
  slide: `## Capacity and Pending Pods

The scheduler places by **accounting**, not by current load. A busy node can still accept a Pod; a quiet one may refuse.

### The arithmetic
- **Allocatable** — what a node offers to Pods
- Minus the **sum of requests** already placed on it
- A Pod fits only if its requests fit in the rest
- CPU and memory must **both** fit

### Reading the example
- node-2 is the busiest by **measured use**
- It is the only node with **500m** left to request
- If none had room, the replica would stay **Pending**

### When a Pod is Pending
- \`describe pod\` shows a **FailedScheduling** event
- It names how many nodes failed, and why
- Fix requests, capacity, or constraints — not the Pod
- \`kubectl describe node\` shows allocated requests`,
  narration:
    "The scheduler places Pods by accounting, not by how busy nodes look right now, and that surprises people the first time. Each node offers an allocatable amount of CPU and memory to Pods, which is its capacity minus what the system reserves for itself. The scheduler subtracts the sum of the requests of every Pod already placed there. A new Pod fits only if its own requests fit in what remains. Look at the table. A new catalogue API replica requests five hundred millicores. Node one has only two hundred left to request, and node three has fifty, even though both are nearly idle by measured use. Node two is actually the busiest by measured use, yet it is the only node with eight hundred millicores still unrequested, so that is where the replica goes. If no node had room, the Pod would stay Pending. When you see a Pending Pod, describe it. A FailedScheduling event says how many nodes were considered, and why each was rejected: insufficient CPU, insufficient memory, or a constraint it could not satisfy. The fix is in the requests, the cluster's capacity, or the constraints, never in deleting and recreating the Pod.",
}
