import type { Section } from '../types'

export const choosingAController: Section = {
  id: 'choosing-a-controller',
  title: 'Choosing a controller and previewing StatefulSets',
  scene: 'controller-choice',
  focus: 'choose-statefulset',
  slide: `## Choosing a controller

Choose by the **shape of the work**: how long it runs, whether copies are interchangeable, and where it must run.

### The four shapes
- **Deployment** — interchangeable, long-running copies
- **Job / CronJob** — work that must finish, perhaps on a schedule
- **DaemonSet** — one copy per node
- **StatefulSet** — copies with **stable identity** and storage

### For the catalogue application
- API → Deployment; import → Job; database → StatefulSet

### A StatefulSet preview
- Stable Pod names like \`postgres-0\` and its own volume
- Covered with storage in **Chapter 7**
- One instance is **not** high availability`,
  narration:
    "With four controllers on the table, the choice comes from the shape of the work. Ask three questions. Does it run forever, or does it need to finish? Are the copies interchangeable, or does each one have its own identity? And must it run somewhere specific, such as on every node? Interchangeable, long-running copies, where any one can serve any request, are a Deployment. Work that must run to completion, possibly on a schedule, is a Job or a CronJob. One copy per node is a DaemonSet. And copies that each need a stable identity and their own storage are a StatefulSet. For the catalogue application, that gives a clear map. The API is a Deployment. The import is a Job, scheduled by a CronJob. And the PostgreSQL database is a StatefulSet, which we have deliberately not used yet. Here is the preview. A StatefulSet gives its Pods stable names, such as postgres zero, that survive replacement, and binds each one to its own persistent volume. We will build it properly alongside storage in Chapter 7. One warning now: a single database instance in a StatefulSet is stable, but it is not highly available.",
}
