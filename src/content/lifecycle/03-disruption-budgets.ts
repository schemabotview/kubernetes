import type { Section } from '../types'

export const disruptionBudgets: Section = {
  id: 'disruption-budgets',
  title: 'Disruptions, budgets, and topology',
  scene: 'disruption-budget',
  focus: 'involuntary',
  slide: `## Disruption budgets

A **PodDisruptionBudget** limits how many Pods **voluntary** evictions may take at once. It cannot prevent outages.

### What it limits
- Drains and node scale-down ask the **Eviction** API
- An eviction that would break the budget is **refused**
- The drain waits and retries until it is safe
- Replicas move **one at a time**

### What it cannot stop
- A node crash or zone outage is **involuntary**
- Only spread replicas survive those — Chapter 8
- Deleting a Pod directly also bypasses it

### Setting it well
- \`minAvailable: 2\` of 3 lets one Pod move at a time
- \`minAvailable\` equal to replicas **blocks** every drain
- A single-instance database needs a maintenance **plan**
- \`maxUnavailable: 1\` scales with the replica count`,
  narration:
    "Drains evict Pods, and without a limit, a drain could evict every replica of the catalogue API at once. A PodDisruptionBudget sets that limit. Here it says that at least two of the three API Pods must remain available. Drains and node scale-down request each eviction through the Eviction API, and an eviction that would break the budget is refused. The drain waits and tries again once a replacement Pod is ready elsewhere, so replicas move one at a time. It is essential to be precise about what this protects. A budget only governs voluntary disruptions: the planned ones that go through eviction. A node crash or a zone outage is involuntary. Pods simply vanish, and no budget can prevent that; only replicas already spread across failure domains, from Chapter 8, survive it. Deleting a Pod directly also bypasses the budget. Two configuration mistakes are common. A minimum available equal to the replica count means no eviction is ever allowed, so every drain blocks forever and node maintenance stalls. And a single-instance database cannot be protected by a budget at all; it needs a maintenance plan that accepts brief downtime.",
}
