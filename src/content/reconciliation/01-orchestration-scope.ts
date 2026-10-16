import type { Section } from '../types'

export const orchestrationScope: Section = {
  id: 'orchestration-scope',
  title: 'Orchestration problems and limits',
  scene: 'orchestration-scope',
  focus: 'automated',
  slide: `## Orchestration problems and limits

Running one container is a command. Running many copies across many machines, for months, is a **coordination problem** that never stops.

### What an orchestrator takes over
- **Placement** — choosing a machine with room for each copy
- **Replacement** — noticing a lost copy and starting another
- **Discovery** — one stable name in front of changing copies
- **Rollout** — replacing old versions without stopping service

### What it cannot do for you
- Fix a wrong answer — it will happily run **two copies of a bug**
- Keep data consistent, or restore it after a mistake
- Create capacity that the cluster does not have
- Judge health without signals the **application exposes**`,
  narration:
    "In the Docker course, running a container was a single command, and you were the one watching it. Now picture the same catalogue API running as several copies, spread across several machines, for months. Someone has to decide which machine each copy runs on. Someone has to notice when a machine disappears, and start the missing copy somewhere else. Clients need one stable name to reach, even though the copies behind it keep changing. And a new version has to replace the old one without taking the service down. That ongoing coordination is what an orchestrator takes over, and Kubernetes is one. But it is worth being precise about the boundary from the very start. Kubernetes keeps processes running; it has no idea whether they are correct. If the API returns the wrong price, Kubernetes will faithfully run two copies of that mistake. It does not keep your data consistent, it cannot place work on machines that do not exist, and it can only judge health through the signals your application chooses to expose. Every chapter in this course returns to that line between cluster automation and application correctness.",
}
