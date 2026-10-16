import type { Section } from '../types'

export const rollbackLimits: Section = {
  id: 'rollback-limits',
  title: 'Application and data compatibility and rollback',
  scene: 'rollback-scope',
  focus: 'n-schema',
  slide: `## Rollback and data compatibility

\`kubectl rollout undo\` restores the previous **Pod template**. Nothing else moves back with it.

### Restored
- The previous ReplicaSet's template, including the **image**

### Not restored
- ConfigMaps or Secrets **edited in place**
- A database **migration** that already ran
- Rows written by the new version since

### Designing for it
- **Expand**: add the new column; old code ignores it
- Release code that works with **both** shapes
- **Contract** later, once rollback is no longer needed

### The incompatible case
- A migration that drops a column breaks the **old** code
- Rolling back then makes the outage **worse**`,
  narration:
    "Rollback sounds like an undo button for a release. In Kubernetes, it is narrower than that, and the gap is where outages hide. kubectl rollout undo returns the Deployment to the previous ReplicaSet's Pod template, which includes the previous image. That is all. ConfigMaps or Secrets that were edited in place stay as they are. A database migration that the new version ran has already changed the schema. And any rows the new version wrote since are still there, in whatever shape it wrote them. So rollback is only safe if the old code can live with what the new code left behind, and that has to be designed in advance. The usual technique is expand, then contract. First expand: add the new column or table in a way the old code simply ignores. Release code that works with both the old and the new shape. Only later, once you are sure you will not roll back, contract: remove what the old code needed. Now the incompatible case. Suppose a migration drops a column the old code still reads. Rolling back the image then starts old code against a schema it cannot use, and makes the outage worse rather than better.",
}
