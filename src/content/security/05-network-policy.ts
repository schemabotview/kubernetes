import type { Section } from '../types'

export const networkPolicy: Section = {
  id: 'network-policy',
  title: 'NetworkPolicy ingress, egress, and DNS needs',
  scene: 'network-policies',
  focus: 'allow-dns',
  slide: `## NetworkPolicy

By default every Pod can reach every other. **NetworkPolicy** narrows that to the paths the application needs.

### How policies combine
- Selecting a Pod makes it **isolated** for that direction
- Rules are **additive**: allowed if any policy allows it
- Start from a **default deny**, then add allows

### The catalogue rules
- Gateway → API on \`8080\`; API and import → database on \`5432\`
- **Egress to DNS** on port 53 — forget it and nothing resolves

### Enforcement
- Policies are enforced by the **CNI plugin**
- An unsupported plugin accepts them and **ignores** them
- Test a blocked path, as well as an allowed one
- Policies match **labels**: a relabelled Pod changes its rules`,
  narration:
    "By default, the Pod network is flat: every Pod can reach every other Pod in the cluster. Network policy narrows that down to the paths the application actually needs. Policies select Pods by label, and once a Pod is selected by any policy for a direction, ingress or egress, it becomes isolated in that direction: only traffic some policy allows gets through. Like RBAC, the rules are additive. So the usual pattern is a default-deny policy for the namespace, then a small set of explicit allows. For the catalogue application, that is three paths. The Gateway may reach the API on port eight thousand and eighty. The API and the import Job may reach the database on port five four three two. And everything needs egress to cluster DNS on port fifty three, over UDP and TCP. That last rule is the one everyone forgets, and the symptom is confusing: nothing can resolve a name, so everything fails, even the allowed paths. Then the crucial caveat. Policies are enforced by the network plugin, not by Kubernetes itself. A plugin without policy support accepts the objects and silently ignores them. So test it: confirm that a blocked path really is blocked, not only that allowed paths work.",
}
