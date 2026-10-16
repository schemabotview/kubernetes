import type { Section } from '../types'

export const probesSection: Section = {
  id: 'probes',
  title: 'Startup, readiness, and liveness probes',
  scene: 'probes',
  focus: 'readiness',
  slide: `## Startup, readiness, and liveness probes

Probes are how the application **tells** Kubernetes about its health. Each probe triggers a different response.

### Three probes
- **Startup** — holds the others off until the first boot is done
- **Readiness** — failing removes the Pod from traffic
- **Liveness** — failing **restarts** the container

### Matching them to scenarios
- Slow start: a startup probe, not a longer liveness delay
- Database down: readiness fails; restarting would not help
- Deadlock: liveness, because only a restart recovers it

### Common mistakes
- A liveness check that depends on the **database**
- Identical endpoints for readiness and liveness
- Timeouts shorter than a normal **slow response**`,
  narration:
    "Kubernetes cannot see inside your process, so probes are how the application tells it about health, and each kind of probe triggers a different response. A startup probe answers, has it finished starting? Until it succeeds, the other probes are held off, which protects a slow first boot. A readiness probe answers, should this Pod receive traffic right now? When it fails, the Pod is removed from its Service's endpoints, but it is not restarted, and it rejoins when the probe passes again. A liveness probe answers, is this container stuck beyond recovery? When it fails, the container is restarted. Now match those to three situations. The catalogue API takes forty seconds to load its data on first start: that is a startup probe, not a longer liveness delay. The database goes away for a minute: readiness should fail, so traffic stops, but restarting the API would not bring the database back. The API deadlocks and will never recover: that is what liveness is for. The classic mistake is a liveness check that depends on the database, which turns one database outage into every API container restarting at once.",
}
