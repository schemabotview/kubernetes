import type { Section } from '../types'

export const identities: Section = {
  id: 'identities',
  title: 'Human and service-account identity',
  scene: 'identity-kinds',
  focus: 'avoid',
  slide: `## Human and workload identity

People and software authenticate differently, but both need identities that are **individual** and **short-lived**.

### People
- Kubernetes has **no User object**; users come from outside
- Usually an identity provider, sometimes client certificates
- **Groups** from the provider are the best thing to bind roles to

### Workloads
- **Service accounts** are namespaced objects
- One per application: \`catalogue-api\`, \`catalogue-import\`
- Tokens are projected and **expire**

### Stop doing
- Sharing one admin kubeconfig across a team
- Granting permissions to the \`default\` service account
- Long-lived static tokens anywhere`,
  narration:
    "People and software reach the API in different ways, but the goal for both is the same: an identity that belongs to exactly one person or one workload, with credentials that expire. Start with people. Kubernetes has no user object; you cannot create a user with kubectl. Human identities come from outside, most often from an identity provider your organisation already uses, sometimes from client certificates. The provider also asserts which groups a person belongs to, and groups are usually the best thing to bind roles to, because joining a team then grants the right access, and leaving it removes it. Workloads use service accounts, which are ordinary objects in a namespace. Chapter 5 gave the catalogue API its own account; the import Job gets another, so each can be granted exactly what it needs and nothing the other needs. Their tokens are projected and expire. Then the habits to stop. One admin kubeconfig shared across a team, so no action can be traced to a person. Permissions granted to the default service account, which every Pod in the namespace uses unless told otherwise. And long-lived static tokens, anywhere, that keep working long after they leak.",
}
