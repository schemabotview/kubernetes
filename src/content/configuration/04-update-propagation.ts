import type { Section } from '../types'

export const updatePropagation: Section = {
  id: 'update-propagation',
  title: 'Update propagation and application reload',
  scene: 'propagation',
  focus: 'volume-path',
  slide: `## Update propagation and reload

Editing a ConfigMap does not change a running process. **How** it was consumed decides what happens next.

### By consumption path
- **Environment variable** — keeps the old value until restart
- **Mounted file** — updated eventually, after a delay
- **subPath mount** — never updated
- In every case the app must **re-read** to notice

### The predictable alternative
- Treat configuration as part of a release
- Change the ConfigMap name or a template hash
- The Deployment rolls out **new Pods** with the new values

### Why it matters
- Pods started at different times can **disagree** on config
- A rollout makes the change **visible** and reversible
- Bad config then fails **readiness**`,
  narration:
    "Here is a behaviour that surprises almost everyone the first time. You edit a ConfigMap, and the running API carries on exactly as before. Nothing is broken; what happens next depends on how the configuration was consumed. If it arrived as an environment variable, the process keeps the value it started with, until the container is restarted. If it arrived as a mounted file, the kubelet updates the file eventually, after a delay, but the application only notices if it actually reads the file again. And if the file was mounted using a subPath, it is never updated at all. Because that mix is hard to reason about, many teams take a more predictable approach: treat configuration as part of a release. Give each version of the ConfigMap a new name, or put a hash of its contents in the Pod template. Then a change to the configuration is a change to the template, and the Deployment rolls out new Pods with the new values, with the same readiness checks and rollback as an image change. The alternative to deciding this deliberately is Pods started at different times, quietly running with different configuration.",
}
