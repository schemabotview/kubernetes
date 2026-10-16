import type { Section } from '../types'

export const initAndSidecars: Section = {
  id: 'init-and-sidecars',
  title: 'Init and sidecar patterns',
  scene: 'init-sidecar',
  focus: 'inits',
  slide: `## Init containers and sidecars

Some work must happen **before** the application starts. Some must run **beside** it for its whole life.

### Init containers
- Run **in order**, each to successful completion
- The app containers start only when all have succeeded
- A failing init container is retried; the Pod waits

### Sidecars
- A helper that runs beside the app, such as a log shipper
- Shares the Pod's network and volumes
- Exact sidecar lifecycle support **depends on version**

### Limits of the pattern
- An init check passes once, at start — not forever after
- The app must still **handle** a dependency failing later
- Object creation **order** is not dependency readiness`,
  narration:
    "Some work has to happen before your application starts, and some has to run beside it for as long as it lives. Kubernetes has a pattern for each. Init containers run first, one at a time, in the order you list them, and each must exit successfully before the next begins. Only when all of them have succeeded do the application containers start. If one fails, it is retried, and the Pod waits. In the catalogue example, an init container might check that the database schema exists, and another might fetch a configuration file into a shared volume for the API to read. A sidecar is a helper container that runs beside the application for the Pod's whole life, sharing its network and volumes, such as an agent that ships the API's logs. How precisely Kubernetes orders sidecar startup and shutdown has changed across versions, so check what your cluster supports rather than relying on a particular mechanism. One limit matters most. An init check passes once, at start. If the database disappears an hour later, the init container will not notice. The application must still handle that failure itself.",
}
