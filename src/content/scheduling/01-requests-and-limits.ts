import type { Section } from '../types'

export const requestsAndLimits: Section = {
  id: 'requests-and-limits',
  title: 'Requests, limits, units, and runtime effects',
  scene: 'resource-effects',
  focus: 'mem-limit',
  slide: `## Requests, limits, and their effects

**Requests** decide where a Pod can be placed. **Limits** are enforced while it runs. CPU and memory fail differently.

### Units
- CPU in cores or millicores: \`500m\` is half a core
- Memory in bytes: \`Mi\` and \`Gi\` are powers of two

### CPU
- Over its **limit**, a container is **throttled**
- It slows down; latency rises; nothing restarts

### Memory
- Over its **limit**, a container is **OOMKilled**
- Exit code \`137\`, then a restart — no slow fallback
- Size the limit for the **peak**, not the average

### A starting point
- Set requests near **measured** use
- Set a memory limit; think before a CPU limit`,
  narration:
    "Chapter 3 introduced requests as what the scheduler reserves. Now we need the full picture, because requests and limits do different jobs, and CPU and memory behave differently when they run short. Requests decide placement. The scheduler adds up the requests of everything on a node and only places a Pod where its requests fit. Limits are enforced while the container runs. Units first. CPU is measured in cores, or thousandths of a core, so five hundred m is half a core. Memory is measured in bytes, and the suffixes Mi and Gi are powers of two. Now the difference that matters. A container that tries to use more CPU than its limit is throttled. It is simply given less CPU time, so it slows down, and you see it as rising latency, not as an error. A container that uses more memory than its limit is killed by the kernel, reported as OOMKilled, exit code one hundred thirty seven, and then restarted. There is no slow fallback for memory. So size memory limits for the peak, not the average. A practical start: set requests near measured use, set a memory limit, and think carefully before adding a CPU limit.",
}
