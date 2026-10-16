import type { Section } from '../types'

export const ecosystemSelection: Section = {
  id: 'ecosystem-selection',
  title: 'Ecosystem selection and ownership',
  scene: 'extension-review',
  focus: 'q-authority',
  slide: `## Choosing extensions

The ecosystem offers an extension for almost everything. Each one you install becomes **part of your platform**.

### Compatibility
- Supported Kubernetes versions and CRD **maturity**
- Fit with your CNI, CSI, Gateway, and other add-ons

### Authority
- Cluster-scoped permissions, Secrets access, **webhooks**
- Read its RBAC before installing, not after

### Upgrade ownership
- A **named** owner, a release cadence, a removal plan
- CRD migrations can make upgrades one-way

### Failure and recovery
- What stops if it is down? Does it block the **API**?
- Are its objects in your backup and **restore order**?
- Prefer fewer, well-understood extensions`,
  narration:
    "The Kubernetes ecosystem offers an extension for almost everything: databases, certificates, policy, traffic, backups. Each one you install becomes part of your platform, with your name on its failures. So review every candidate with the same four questions. First, compatibility. Which Kubernetes versions does it support, and how mature are its custom resource APIs? Does it fit your networking and storage plugins, your Gateway implementation, and the other add-ons already installed? Second, authority. What does it ask permission to do? Cluster-wide access, the ability to read Secrets, webhooks in the request path, privileged Pods on every node? Read its RBAC before installing it, not after an incident. Third, upgrade ownership. Someone, by name, must keep it current, follow its releases, and know how to remove it. Be aware that CRD version migrations can make an upgrade one-way. Fourth, failure and recovery. If it stops, what stops with it? Can it block the API, as a webhook can? Are its custom resources included in your backups, and where does it come in your restore order? The result is usually a preference for fewer extensions that the team understands well.",
}
