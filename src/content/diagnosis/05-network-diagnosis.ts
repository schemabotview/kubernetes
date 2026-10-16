import type { Section } from '../types'

export const networkDiagnosis: Section = {
  id: 'network-diagnosis',
  title: 'Service, DNS, and policy diagnosis',
  scene: 'network-checks',
  focus: 'chk-endpoints',
  slide: `## Service, DNS, and policy diagnosis

"The API cannot reach the database" has at least **six** causes. Check them **in path order**, from the caller outward.

### The six checks
- **Name** — does it resolve from the calling Pod?
- **Selector** — does the Service select any Pods?
- **Endpoints** — are any of them **ready**?
- **Ports** — does \`targetPort\` match the listener?
- **Policy** — do ingress **and** egress rules allow it?
- **Process** — does it answer on the Pod IP directly?

### Halving the path
- Test from the **middle**: a Pod IP skips DNS and Services
- A pass moves the search outward; a failure moves it in

### Keep it bounded
- Test from a short-lived Pod in the **same** namespace`,
  narration:
    "Here is a complaint you will hear constantly: the API cannot reach the database. That sentence has at least six different causes, and the fastest way through them is to check in path order, from the caller outward. One: the name. From the calling Pod, does postgres dot catalogue dot svc resolve? If not, suspect DNS, or a network policy blocking DNS egress, which Chapter 9 warned about. Two: the selector. Does the Service actually select any Pods, or is there a label typo? Three: endpoints. Of the selected Pods, are any ready? A database that is still starting has no endpoints. Four: ports. Does the Service's target port match the port the process actually listens on? Five: policy. Do the rules allow both the egress from the API and the ingress to the database? Six: the process itself. Does it answer when you connect to the Pod's IP directly? You do not have to check these one by one from the top. Test from the middle: connecting to the Pod IP skips DNS and the Service entirely. If that works, the problem is earlier in the path; if not, later. Run these tests from a short-lived Pod in the same namespace, and remove it afterwards.",
}
