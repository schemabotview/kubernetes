import type { Section } from '../types'

export const dependencyHandling: Section = {
  id: 'dependency-handling',
  title: 'Dependency readiness, retry, backoff, and graceful shutdown',
  scene: 'dependency-behaviour',
  focus: 'api-behaviour',
  slide: `## Dependency handling

Kubernetes does not start things **in order**, and dependencies fail while you run. The application must cope.

### No ordering guarantee
- Applying the database first does **not** make it ready first
- The API may start while PostgreSQL is still booting

### When the database goes away
- **Retry** with exponential backoff and jitter
- Report **not ready**, so traffic goes elsewhere
- Keep **liveness** passing; a restart would not help
- Return a clear error quickly instead of hanging

### Shutting down
- On SIGTERM, finish requests and **close connections**

### Bridge
- A configured app now needs stable **discovery** — Chapter 6`,
  narration:
    "This chapter ends with the part Kubernetes cannot do for you. It does not start things in order. Applying the database manifest before the API manifest does not mean the database is ready first; the API may well start while PostgreSQL is still booting, and later, dependencies fail while everything is running. So the application has to cope. Consider the database disappearing for a minute. The API should retry its connection with exponential backoff and some random jitter, so a hundred replicas do not all hammer the database at the same instant when it returns. It should report itself not ready, so its Service stops sending it requests it cannot answer. Its liveness check should keep passing, because restarting the API would not bring the database back. And it should answer the requests it does receive with a clear error quickly, rather than hanging until clients time out. When the database returns, the API recovers on its own, with no restart and no manual step. At shutdown, the same care applies: finish requests and close database connections cleanly. Now the API is configured and resilient, it needs stable discovery and deliberate traffic paths, which is Chapter 6.",
}
