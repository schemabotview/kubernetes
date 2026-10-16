import type { Section } from '../types'

export const serviceAccounts: Section = {
  id: 'service-accounts',
  title: 'Service accounts and projected identity',
  scene: 'projected-identity',
  focus: 'token',
  slide: `## Service accounts and projected identity

People authenticate as **users**. Workloads authenticate as **service accounts**, a namespaced identity for software.

### A dedicated identity
- Give the API its own service account, \`catalogue-api\`
- Set \`serviceAccountName\` in the Pod template
- The \`default\` account is shared — avoid relying on it

### Projected tokens
- The kubelet mounts a **short-lived** token
- Each token has an **audience** and an expiry
- It is **rotated** automatically; clients must re-read it

### Permissions come later
- An identity alone grants nothing useful
- Roles and bindings are **Chapter 9**
- Disable token mounting for Pods that never call the API`,
  narration:
    "People authenticate to the cluster as users. Software running in Pods authenticates as a service account, which is a namespaced identity for a workload. Every namespace has a default service account, and Pods use it unless told otherwise. It is better to give each application its own. So the catalogue API gets a service account named catalogue-api, and its Pod template sets the service account name. Now its identity is distinct from everything else in the namespace, and permissions can be granted to it, and only it. How does the Pod prove who it is? The kubelet requests a token for that service account and mounts it into the container as a file. That token is projected: it is short-lived, it carries an audience saying which service it is meant for, and it expires. The kubelet rotates it automatically before it expires, which means client libraries must read the file again rather than caching the token forever. One important point: an identity alone grants nothing useful. A new service account can do almost nothing until roles are bound to it. That is deliberate, and Chapter 9 shows how to grant exactly what the API needs.",
}
