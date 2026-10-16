import type { Section } from '../types'

export const authnAuthzAdmission: Section = {
  id: 'authn-authz-admission',
  title: 'Authentication, authorization, and admission',
  scene: 'api-gates',
  focus: 'gates',
  slide: `## Authentication, authorization, admission

Every request to the API server passes **three gates in order**. Each answers a different question, and fails differently.

### The three gates
- **Authentication** — who are you? Failure is \`401\`
- **Authorization** — may you do this? Failure is \`403\`
- **Admission** — may change or reject the object

### Reading a refusal
- \`Forbidden\` — the identity worked; the **permission** did not
- An admission denial names the **policy** that refused it
- \`kubectl auth can-i\` tests a permission before you need it

### A separate path
- The API's connection to PostgreSQL is **network traffic**
- None of these gates applies to it — that is NetworkPolicy`,
  narration:
    "Security in Kubernetes starts at the API server, and every request to it, from a person with kubectl or from a Pod using its token, passes three gates in order. The first is authentication: who are you? The server checks a certificate, a token, or a login from an identity provider. If it cannot establish an identity, the answer is four hundred and one, unauthorised. The second is authorisation: may this identity perform this action on this resource? In most clusters that is role-based access control, the subject of section three. If not, the answer is four hundred and three, forbidden. The third is admission. Admission controllers can adjust an incoming object, for example filling in defaults, and then validate it, and reject it if it breaks a policy, such as the Pod security rules in section four. Only after all three is the object stored. Reading the refusal tells you which gate failed. Forbidden means your identity was fine and the permission was missing. An admission denial names the policy. And one thing is drawn apart on purpose: the API Pod's connection to the database is ordinary network traffic, and none of these gates applies to it. Controlling that is the job of network policy.",
}
