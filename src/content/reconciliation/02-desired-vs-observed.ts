import type { Section } from '../types'

export const desiredVsObserved: Section = {
  id: 'desired-vs-observed',
  title: 'Desired versus observed state',
  scene: 'reconcile-loop',
  focus: 'compare',
  slide: `## Desired versus observed state

You do not tell Kubernetes **what to do**. You declare **what should be true**, and controllers keep working until it is.

### Two halves of every object
- **spec** — desired state, written by you
- **status** — observed state, written by the system
- A gap between them is **normal**, not an error

### The reconciliation loop
- **Observe** the current status
- **Compare** it with the spec
- **Act** to close the gap, then repeat
- Convergence takes time and needs **capacity**

### Why it is built this way
- A node failure is handled by the **same loop** as your first deploy
- Read the gap in \`status\` before assuming something is broken`,
  narration:
    "Here is the idea the rest of Kubernetes is built on. You do not issue a sequence of commands, like start this, then start that. You declare what should be true, and the system keeps working until it is true. Every object carries two halves. The spec is the desired state, and you write it: say, two replicas of the catalogue API. The status is the observed state, and the system writes it: right now, perhaps, one replica exists and one is ready. Notice that a gap between those two is completely normal. It is not an error; it is simply work that has not finished yet. Closing the gap is the job of a controller, and a controller runs the same small loop forever. It observes the current status, compares it with the spec, and acts to close the difference, here by creating one more Pod. Then it does it again. Because the loop never stops, the same mechanism handles your first deployment and a machine failure at three in the morning. The cost is that convergence is not instant, and it can only finish if the cluster has the capacity to make the spec true.",
}
