import type { Section } from '../types'

export const inspectAndCleanup: Section = {
  id: 'inspect-and-cleanup',
  title: 'Get, describe, events, and bounded cleanup',
  scene: 'inspect-cleanup',
  focus: 'preview',
  slide: `## Get, describe, events, and cleanup

Three read-only commands answer most questions. Use them before, and instead of, guessing.

### Reading
- \`get\` — a list, with \`-o yaml\` for the full object
- \`describe\` — a summary plus **recent events** for one object
- \`get events\` — what controllers reported, sorted by time
- Events **expire**; their absence proves little

### Bounded cleanup
- Name the context and namespace on the command
- Delete by a **label** given only to disposable objects
- Run \`get\` with the same selector first, and read it
- Never use \`--all\` or \`--all-namespaces\` to clean up

### The outcome for this chapter
- You can say what a command targets **before** it runs`,
  narration:
    "Most questions about a cluster are answered by three read-only commands, and they should come before any guessing. kubectl get lists objects, and with output set to yaml it shows the whole object, spec and status included. kubectl describe gives a human summary of one object, including the recent events about it. And kubectl get events shows what the controllers and kubelets reported, which reads best sorted by time. One caution: events are retained only for a limited time, so an empty event list does not prove nothing happened. Cleanup deserves the same care as any change. Put the context and the namespace on the command line, not in your assumptions. Delete by a label that you gave only to disposable objects, so the selector cannot reach anything that matters. And run get with exactly the same selector first, and actually read the result, because that list is precisely what delete would remove. That brings this chapter to its outcome: for any command, you can say which cluster, namespace, and objects it targets, and what will happen to their dependents, before you press enter.",
}
