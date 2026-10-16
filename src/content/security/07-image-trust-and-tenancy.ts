import type { Section } from '../types'

export const imageTrustAndTenancy: Section = {
  id: 'image-trust-and-tenancy',
  title: 'Image trust and tenant boundaries',
  scene: 'supply-and-tenancy',
  focus: 'insufficient',
  slide: `## Image trust and tenant boundaries

Two last questions: **what** exactly is running, and **who else** shares the cluster with it?

### Image trust
- A **digest** fixes which bytes run
- **Signatures** and a trusted registry show origin
- **Scanning** says what known flaws they contain
- Admission policy can **require** all of this

### Tenant boundaries
- A namespace per team, with RBAC, quotas, and policies
- Nodes and the control plane are still **shared**
- Mutually untrusted tenants need **separate clusters**

### Not sufficient on its own
- base64, a namespace, or a digest — each is one layer only

### Bridge
- Reviewed controls must survive **releases** — Chapter 10`,
  narration:
    "Two questions finish the security chapter: what exactly is running, and who else shares the cluster with it? For the first, a digest fixes which bytes run, which Chapter 3 introduced. But a digest only proves identity, not safety. A trusted registry, and where available, image signatures, tell you where those bytes came from. Scanning tells you which known vulnerabilities they contain, and since new flaws are published constantly, images that were clean last month need scanning again. Admission policies can require these properties, for example rejecting any image not pulled from your registry. For the second question, the usual unit of tenancy is the namespace: one per team or application, each with its own access rules, quotas, and network policies. That is a reasonable boundary between cooperating teams. It is not strong isolation. Nodes, the kernel, and the control plane are still shared, so tenants who must not trust each other at all belong in separate clusters. And that leads to the theme of the whole chapter: base64, a namespace, or an image digest is each one layer, never sufficient on its own. With these controls reviewed, they now have to survive repeatable releases and changes of ownership, which is Chapter 10.",
}
