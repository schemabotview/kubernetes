import type { Section } from '../types'

export const rollouts: Section = {
  id: 'rollouts',
  title: 'Rollout strategy, status, and rollback boundaries',
  scene: 'rollout',
  focus: 'stalled',
  slide: `## Rollouts and rollback boundaries

A rolling update swaps old Pods for new ones a few at a time, so the service **keeps serving** while it changes.

### Strategy
- \`maxSurge\` — how many extra Pods may exist during the swap
- \`maxUnavailable\` — how far ready Pods may drop
- Readiness decides when each new Pod **counts**

### Reading progress
- \`kubectl rollout status\` follows the conditions
- A bad image **stalls** the rollout; old Pods keep serving
- Complete means **ready**, not that responses are correct

### Rollback boundaries
- \`rollout undo\` returns to the previous **Pod template**
- It does not undo database or ConfigMap changes
- Keep new versions **compatible** with old data — Chapter 10`,
  narration:
    "When you change the Pod template, the Deployment performs a rolling update by default: it swaps old Pods for new ones a few at a time, so the service keeps serving while it changes. Two settings shape the swap. Max surge is how many extra Pods may exist above the desired count during the change. Max unavailable is how far the number of ready Pods may drop below it. With surge one and unavailable zero, the catalogue API never has fewer than two ready Pods. And readiness is what decides when a new Pod counts, which is why the probes from Chapter 3 matter so much here. To follow progress, kubectl rollout status watches the Deployment's conditions. Now push an image that cannot be pulled. The new Pods never become ready, so the rollout stalls, and, because unavailable is zero, the old Pods keep serving. That is the design working. But be careful what complete means: every replica updated and ready. It says nothing about whether the new version returns correct answers. Rollback has a boundary too. Undo returns to the previous Pod template. It does not undo a database migration or a changed ConfigMap.",
}
