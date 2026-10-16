import type { Section } from '../types'

export const rbac: Section = {
  id: 'rbac',
  title: 'Roles, ClusterRoles, and bindings',
  scene: 'rbac-scope',
  focus: 'narrow',
  slide: `## Roles, ClusterRoles, and bindings

RBAC is **additive**: nothing is allowed until a binding grants it. Grant the least that does the job.

### Four objects
- **Role** — permissions within one namespace
- **ClusterRole** — permissions cluster-wide, or reusable
- **RoleBinding** — grants a role inside a namespace
- **ClusterRoleBinding** — grants it **everywhere**

### Reading a rule
- \`apiGroups\`, \`resources\`, \`verbs\`, optionally \`resourceNames\`
- \`list\` and \`watch\` on Secrets reveal **values**, not just names

### The example
- The import may **get** one ConfigMap — nothing more
- \`cluster-admin\` for a workload is never the fix
- Test first: \`kubectl auth can-i\` with \`--as\``,
  narration:
    "Role-based access control decides what an authenticated identity may do. The first thing to know is that it is purely additive: there are no deny rules, and nothing is allowed until some binding grants it. That makes least privilege the natural design. It uses four objects. A Role is a set of permissions within one namespace. A ClusterRole is a set of permissions that can apply cluster-wide, or be reused in many namespaces. A binding attaches a role to subjects: users, groups, or service accounts. A RoleBinding grants it inside one namespace; a ClusterRoleBinding grants it everywhere, so treat those with real care. Each rule names API groups, resources, verbs, and optionally specific resource names. Watch one trap: listing or watching Secrets returns their values, not just their names. The example on screen grants the import Job's service account permission to get one named ConfigMap in the catalogue namespace, and nothing else. Contrast that with binding cluster-admin, which grants everything, everywhere. When a workload gets a forbidden error, the fix is to add the one missing permission. You can test any permission first, impersonating the service account with kubectl auth can-i.",
}
