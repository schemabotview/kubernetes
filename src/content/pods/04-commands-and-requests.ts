import type { Section } from '../types'

export const commandsAndRequests: Section = {
  id: 'commands-and-requests',
  title: 'Commands, configuration, and initial resource requests',
  scene: 'container-spec',
  focus: 'requests',
  slide: `## Commands, configuration, and requests

A container entry says **what to run**, **with which settings**, and **how much room** to reserve for it.

### What runs
- \`command\` replaces the image's ENTRYPOINT
- \`args\` replaces its CMD; omit both to use the image defaults

### Settings
- \`env\` sets values the process reads **at start**
- \`containerPort\` documents a port; it opens nothing
- Never put credentials in \`env\` values — Chapter 5

### Requests, introduced
- \`requests\` are what the scheduler **reserves** on a node
- \`100m\` CPU is a tenth of a core; \`128Mi\` is memory
- Without requests, placement is guesswork
- Limits, throttling, and eviction come in **Chapter 8**`,
  narration:
    "Each container entry in a Pod answers three questions: what to run, with which settings, and how much room to reserve for it. What to run starts with the image, named by digest. Then command and args. If you set command, it replaces the image's entrypoint; if you set args, it replaces the image's default arguments. Leave both out, and the image's own defaults apply, which is usually what you want for an image you built in the Docker course. Settings come next. Environment variables are read by the process when it starts, which matters later when we change configuration. A container port documents which port the process listens on; it is useful information, but it does not open or publish anything by itself. Finally, resources. Requests are what the scheduler reserves for this container on a node: here, one hundred millicores, a tenth of a CPU, and one hundred and twenty eight mebibytes of memory. Without requests, the scheduler is placing work blind. That is enough for now. Limits, CPU throttling, and memory-related termination are covered properly in Chapter 8.",
}
