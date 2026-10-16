import type { Section } from '../types'

export const ownersAndFinalizers: Section = {
  id: 'owners-and-finalizers',
  title: 'Owner references, deletion, and finalizers',
  scene: 'owner-chain',
  focus: 'finalizer',
  slide: `## Owner references and finalizers

Deleting one object can delete many. **Owner references** say which objects belong to which.

### Ownership
- A Deployment owns ReplicaSets; a ReplicaSet owns Pods
- The **garbage collector** removes dependents whose owner is gone
- Deletion can **cascade**, run in the foreground, or **orphan**

### Finalizers
- A finalizer is a promise: cleanup must finish first
- The object shows a **deletionTimestamp** and waits
- Stuck in Terminating usually means cleanup cannot finish

### Before removing a finalizer
- Find **who owns** that cleanup and why it is stuck
- Removing it can leave volumes or cloud resources behind`,
  narration:
    "Deleting one object can delete many, and owner references are how Kubernetes knows which. A Deployment owns its ReplicaSets, and each ReplicaSet owns its Pods. Each dependent carries an owner reference pointing at its owner. When an owner is deleted, a garbage collector finds dependents whose owner has gone and removes them too. That cascade is the default, but you can ask for foreground deletion, where dependents go first, or orphan the dependents and leave them running. Finalizers add a pause to this. A finalizer is a named promise on an object that some cleanup must finish before it disappears. When you delete such an object, it does not vanish; it gains a deletion timestamp and waits until every finalizer has been removed by whoever owns that cleanup. An object stuck in Terminating usually means that cleanup cannot complete, for example a controller is missing or an external resource cannot be released. It is tempting to delete the finalizer by hand. Before you do, find out which component owns it and why it is stuck, because skipping the cleanup can leave storage or cloud resources behind with nothing tracking them.",
}
