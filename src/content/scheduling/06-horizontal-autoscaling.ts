import type { Section } from '../types'

export const horizontalAutoscaling: Section = {
  id: 'horizontal-autoscaling',
  title: 'Horizontal autoscaling and metrics dependencies',
  scene: 'hpa-loop',
  focus: 'db-bottleneck',
  slide: `## Horizontal autoscaling

The **HorizontalPodAutoscaler** changes a Deployment's replica count from metrics. Every link in that chain has to work.

### The chain
- Demand rises; **metrics** report the new usage
- The HPA compares usage with its **target**
- It sets desired replicas; the **scheduler** places them

### Where it breaks
- No metrics API installed — nothing to act on
- No CPU **requests** — utilisation is undefined
- No free **capacity** — new replicas stay Pending
- A **database** bottleneck — more API Pods cannot help

### Living with it
- The HPA owns \`replicas\` — remove it from your manifest
- Set \`minReplicas\` and \`maxReplicas\` deliberately
- Scale-down waits a **stabilisation** window`,
  narration:
    "The HorizontalPodAutoscaler adjusts a Deployment's replica count based on metrics. It is a chain of dependencies, and every link has to work. Demand rises. A metrics pipeline reports the new usage; for CPU, that is usually the metrics server add-on, which not every cluster has. The autoscaler compares usage with its target, for example sixty percent of the CPU request, and computes a desired replica count in proportion. Then the Deployment creates Pods and the scheduler has to place them. Now walk through the failures. If no metrics API is installed, the autoscaler has nothing to act on and says so in its status. If the containers have no CPU requests, utilisation, which is usage divided by request, is undefined. If the cluster has no free capacity, the new replicas sit Pending, unless node autoscaling, in the next section, adds room. And the hardest case: if the real bottleneck is the single database, more API replicas only add more connections to an overloaded database. Two practical rules. The autoscaler owns the replica field, so remove replicas from your own manifest, as Chapter 2's field ownership warned. And set the minimum and maximum deliberately.",
}
