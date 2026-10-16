import type { Section } from '../types'

export const deploymentOwnership: Section = {
  id: 'deployment-ownership',
  title: 'Deployment and ReplicaSet ownership',
  scene: 'deployment-tree',
  focus: 'replicasets',
  slide: `## Deployment and ReplicaSet ownership

You edit the **Deployment**. It manages **ReplicaSets**, and each ReplicaSet manages Pods. Three owners, three jobs.

### Who does what
- **Deployment** — keeps one ReplicaSet per Pod template
- **ReplicaSet** — keeps the right number of matching Pods
- **Pods** — carry a template-hash label tying them to one RS

### Why two levels
- Changing the template creates a **new** ReplicaSet
- The old one is scaled down, and **kept** for rollback
- Scaling alone changes the count, not the template

### Edit at the top
- Changes made to a ReplicaSet are **overwritten**
- Read the tree with \`kubectl get deploy,rs,pods -l app=catalogue\``,
  narration:
    "Here is the first workload controller most applications use, and it is really two controllers stacked. You edit the Deployment. The Deployment manages ReplicaSets, and each ReplicaSet manages Pods. Each level has one job. A ReplicaSet is simple: keep exactly this many Pods matching this template, creating or deleting Pods as needed. Its Pods carry a hash label that ties them to that one ReplicaSet. The Deployment sits above, and its job is change over time. Whenever you change the Pod template, for example a new image digest, the Deployment creates a new ReplicaSet for the new template and gradually scales the old one down. The old ReplicaSet is not deleted; it is kept at zero replicas, which is what makes a rollback possible. Changing only the replica count is different: no new template, so no new ReplicaSet, just a different number. The practical rule follows from the ownership. Always edit the Deployment. If you change a ReplicaSet or a Pod directly, its owner will overwrite or replace your change on its next reconciliation, and you will be left wondering where it went.",
}
