import type { Section } from '../types'

export const terminationSection: Section = {
  id: 'termination',
  title: 'Termination, grace periods, and restart behaviour',
  scene: 'termination',
  focus: 'grace',
  slide: `## Termination and restarts

Pods are replaced all the time. Stopping **cleanly** is part of the application's job, not an edge case.

### The sequence
- The Pod is marked terminating and leaves **endpoints**
- Meanwhile the process gets **SIGTERM**
- It has the **grace period** to finish, by default 30 seconds
- Anything still running then is killed with **SIGKILL**

### What the app should do
- Handle SIGTERM: stop accepting, finish in-flight work
- Keep serving briefly; endpoints lag

### Restart behaviour
- \`restartPolicy\`: Always, OnFailure, or Never
- Repeated crashes back off with growing delays
- A restart keeps the Pod; a **replacement** makes a new one
- Either way, files not on a volume are lost`,
  narration:
    "Pods are replaced constantly: during rollouts, when nodes are drained, when something scales down. So stopping cleanly is part of the application's job, not an edge case. Here is the sequence. When a Pod is deleted, it is marked as terminating and is removed from its Service's endpoints, so new traffic stops being routed to it. At about the same time, after any pre-stop hook runs, the main process receives a SIGTERM signal. It then has the grace period, thirty seconds unless you change it, to finish. Anything still running at the end is killed with SIGKILL, with no further chance to clean up. Two things follow for the catalogue API. It must actually handle SIGTERM: stop accepting new connections, finish the requests already in flight, and close its database connections. And because endpoint removal and the signal happen in parallel, across many components, it should keep serving for a brief moment after the signal rather than exiting instantly. Restarts are separate. The restart policy says whether a container that exits is started again, and repeated crashes are retried with growing delays.",
}
