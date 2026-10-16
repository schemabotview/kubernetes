import type { Section } from '../types'

export const secretProtection: Section = {
  id: 'secret-protection',
  title: 'Secret access, rotation, and encryption responsibilities',
  scene: 'secret-duties',
  focus: 'ownership',
  slide: `## Secret access, rotation, and encryption

Protecting a Secret takes several layers, each **owned** by someone. An unowned layer is an unprotected one.

### Access
- \`get\`, \`list\`, and \`watch\` all reveal values
- Anyone who can **create Pods** can mount a Secret

### Rotation
- Create the new credential, roll out Pods, **then** revoke the old
- Practise rotation before you need it in an incident

### Encryption at rest
- A **control-plane** setting, often via a KMS provider
- On a managed cluster, check what the **provider** does
- Backups of cluster state need the same protection

### Responsibility
- Write down who owns encryption, values, and rotation`,
  narration:
    "Chapter 5 said a Secret's base64 encoding is not protection. Here are the layers that are, and the point to take from them is that each layer has to be owned by someone. First, access. Get, list, and watch on Secrets all reveal the values. And there is an indirect path: anyone allowed to create Pods in a namespace can create a Pod that mounts any Secret there, and read it. So review who can create workloads, not only who can read Secrets. Second, rotation. The safe order is to create the new credential, roll out the Pods that use it so they pick it up, and only then revoke the old one, because revoking first takes the application down. Practise this before an incident forces you to do it in a hurry. Third, encryption at rest. Whether Secret data is encrypted inside etcd is a control-plane setting, often backed by a key management service. On a managed cluster, find out what the provider does. And remember that backups of cluster state contain Secrets too. Fourth, responsibility. Platform teams usually own encryption and audit; application teams own the values and their rotation. Write that down, because a layer nobody owns is a layer nobody maintains.",
}
