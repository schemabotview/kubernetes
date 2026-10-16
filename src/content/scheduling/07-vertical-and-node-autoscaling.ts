import type { Section } from '../types'

export const verticalAndNodeAutoscaling: Section = {
  id: 'vertical-and-node-autoscaling',
  title: 'Vertical and node autoscaling orientation and trade-offs',
  scene: 'autoscaler-kinds',
  focus: 'tradeoffs',
  slide: `## Vertical and node autoscaling

Three autoscalers, three different numbers: **replicas**, **requests**, and **nodes**.

### Vertical
- Recommends or applies **requests** from observed use
- An add-on; applying changes may **recreate** Pods
- Do not let it fight an HPA over the same CPU signal

### Nodes
- Adds nodes when Pods are **Pending** for capacity
- Removes underused nodes, **evicting** their Pods
- Takes **minutes**, not seconds

### Trade-offs
- Headroom costs money; no headroom costs latency
- Fast reactions **flap**; slow ones fall behind

### Bridge
- Shared capacity needs **security** boundaries — Chapter 9`,
  narration:
    "Horizontal autoscaling changes the number of replicas. Two other kinds of autoscaling change different numbers, and this course only orients you to them. Vertical autoscaling changes requests. It watches what containers actually use and recommends, or applies, better request values. It is an add-on rather than built in, and applying new values may recreate Pods. Do not let it and a horizontal autoscaler both react to the same CPU signal, or they will fight each other. Node autoscaling changes the number of nodes. It is provided by your cloud or an add-on, and it reacts to Pods that are Pending because no node has capacity, by adding a node. It also removes underused nodes, which means evicting the Pods on them, so the disruption rules of Chapter 12 matter. And it takes minutes, not seconds, because machines have to boot. None of this is free. Spare headroom costs money; no headroom costs latency during a spike. Reacting quickly causes flapping up and down; reacting slowly falls behind. Always set bounds. Finally, shared capacity and placement create authority boundaries, who may use what, and those need explicit security controls, which is Chapter 9.",
}
