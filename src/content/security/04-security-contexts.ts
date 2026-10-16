import type { Section } from '../types'

export const securityContexts: Section = {
  id: 'security-contexts',
  title: 'Security contexts and Pod Security Standards',
  scene: 'pod-hardening',
  focus: 'enforce',
  slide: `## Security contexts and Pod Security

RBAC limits what you can **ask** the API for. A **security context** limits what a container can **do** once it runs.

### A restricted container
- \`runAsNonRoot\` — refuse to start as root
- No privilege escalation; drop **all** capabilities
- Read-only root filesystem; default **seccomp** profile

### Pod Security Standards
- Three levels: **privileged**, **baseline**, **restricted**
- Applied per namespace by **Pod Security Admission**

### Three modes
- **enforce** — violating Pods are rejected
- **audit** and **warn** — recorded or shown, not blocked
- Start with warn, fix the findings, then enforce

### A common surprise
- The Deployment is admitted, but its **Pods** are refused`,
  narration:
    "Access control limits what an identity can ask the API for. A security context limits what a container can actually do once it is running, which matters if the application is ever compromised. The container on screen is locked down. It refuses to run as root. It cannot gain more privileges than it started with. It drops every Linux capability. Its root filesystem is read-only, so anything it writes must go to a declared volume. And it uses the runtime's default seccomp profile, which blocks unusual system calls. Most applications, including the catalogue API, run perfectly well like this. To make such settings a rule rather than a hope, Kubernetes defines Pod Security Standards at three levels: privileged, which allows anything; baseline, which blocks known escalations; and restricted, which requires hardening like this. Pod Security Admission applies a level to a namespace in three modes. Enforce rejects violating Pods. Audit records violations, and warn shows them to the person applying. A sensible path is warn first, fix what it reports, then enforce. One surprise is common: the Deployment is admitted, but the Pods it tries to create are refused, and the evidence is in the ReplicaSet's events.",
}
