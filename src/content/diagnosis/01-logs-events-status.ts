import type { Section } from '../types'

export const logsEventsStatus: Section = {
  id: 'logs-events-status',
  title: 'Logs, events, status, and their retention limits',
  scene: 'evidence-sources',
  focus: 'absence',
  slide: `## Logs, events, and status

Diagnosis starts from **evidence**, and Kubernetes keeps three kinds — each for a different length of time.

### Status
- The **current** truth: conditions, states, exit codes
- Overwritten as things change; no history

### Events
- What controllers and kubelets **reported**
- Kept only for a **short** time, then gone

### Container logs
- What the application wrote to stdout and stderr
- \`--previous\` shows the container that **crashed**
- Rotated on the node; lost when the Pod is deleted

### Weak evidence
- No event, an empty log, one exit code — **inconclusive**
- Confirm a hypothesis from a **second** source
- Ship logs off the node if you need them later`,
  narration:
    "Every diagnosis in this chapter starts from evidence, and Kubernetes keeps three kinds of it, each for a different length of time. Status is the current truth: an object's conditions, its containers' states, their exit codes and restart counts. It is overwritten as things change, so it tells you what is true now, not what happened. Events are what the components reported: the scheduler failing to place a Pod, the kubelet pulling an image, a probe failing. They are very useful, and they are kept only for a short time, often around an hour, and then they are gone. Container logs are what the application itself wrote to standard output and error. The previous flag shows the logs of the container that crashed, rather than its fresh replacement, which is usually what you need. Logs are rotated on the node, and deleted with the Pod. That leads to the most important habit: treat an absence as weak evidence. No event may simply mean it expired. An empty log may mean the process crashed before writing anything. A single exit code has many possible causes. Confirm each hypothesis from a second source, and ship logs off the node if you will need them later.",
}
