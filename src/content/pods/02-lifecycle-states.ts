import type { Section } from '../types'

export const lifecycleStates: Section = {
  id: 'lifecycle-states',
  title: 'Lifecycle phases, conditions, and container states',
  scene: 'pod-states',
  focus: 'display',
  slide: `## Phases, conditions, and container states

"How is the Pod?" has three different answers, and the **STATUS** column kubectl prints blends them.

### Three answers
- **Phase** — a coarse summary: Pending, Running, Succeeded, Failed
- **Container state** — Waiting, Running, or Terminated, per container
- **Conditions** — named checks such as **Ready**

### Common confusions
- *Running* means started, **not** ready or healthy
- \`CrashLoopBackOff\` is a waiting **reason**, not a phase
- A Pod can be Running with a container restarting

### Where to look
- \`kubectl get pod -o yaml\` — the status block itself
- \`lastState\` — the exit code of the previous run`,
  narration:
    "Ask how a Pod is doing, and Kubernetes has three different answers. The phase is a coarse summary of the whole Pod. Pending means it was accepted but not everything is running yet, which includes waiting for a node or for an image. Running means it is bound to a node and at least one container has started. Succeeded and Failed mean all containers have ended. Second, each container has its own state: waiting, with a reason; running, since a given time; or terminated, with an exit code. Third, conditions are named checks, such as PodScheduled and Ready, each true or false with a reason. The status column that kubectl get prints blends these into one word, and that causes confusion. Running does not mean ready, and it certainly does not mean correct. CrashLoopBackOff is not a phase at all; it is the reason a container is waiting before its next restart attempt, so a Pod can sit in the Running phase while one of its containers keeps crashing. When it matters, read the status block itself, including last state, which keeps the exit code of the previous attempt.",
}
