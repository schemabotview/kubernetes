import type { Section } from '../types'

export const topologySpread: Section = {
  id: 'topology-spread',
  title: 'Topology spread and failure domains',
  scene: 'spread-domains',
  focus: 'spread',
  slide: `## Topology spread and failure domains

Two replicas only help if they **fail separately**. Placement decides whether one outage takes both.

### Failure domains
- A **node**, a **zone**, sometimes a whole region
- Nodes carry labels naming their zone and host

### Spreading replicas
- \`topologySpreadConstraints\` keep replicas balanced
- \`maxSkew: 1\` — no domain more than one replica ahead
- Hard or soft: \`DoNotSchedule\` or \`ScheduleAnyway\`

### What spread does not fix
- The survivors need **capacity** for the whole load
- The single database still lives in **one zone**
- Spread applies at placement, not continuously

### Where it applies here
- Spread the API across zones; keep **requests** honest
- Pair it with disruption budgets — Chapter 12`,
  narration:
    "Running two replicas of the catalogue API only helps if they fail separately, and placement decides whether they do. A failure domain is anything that can fail as a unit: a node, a whole availability zone, occasionally a region. Nodes carry labels naming their zone and host, and the scheduler can use them. Look at the top band. Both replicas landed in zone a, perhaps simply because it had the most free capacity. When zone a has an outage, both are lost together, and having two was worth nothing. Topology spread constraints prevent that. They tell the scheduler to keep replicas balanced across a topology key, such as zone, with a maximum skew: with a skew of one, no zone may have more than one replica more than any other. The constraint can be hard, refusing to schedule rather than break it, or soft, preferring balance but placing anyway. Spread does not fix everything, which is the bottom band. The surviving replicas must have capacity to carry the whole load. The single database still lives in one zone, so it remains the real limit. And spread is evaluated at placement time; the scheduler does not move running Pods later.",
}
