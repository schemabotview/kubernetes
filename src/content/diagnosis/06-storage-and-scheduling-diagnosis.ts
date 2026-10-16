import type { Section } from '../types'

export const storageAndSchedulingDiagnosis: Section = {
  id: 'storage-and-scheduling-diagnosis',
  title: 'Storage, scheduling, and resource diagnosis',
  scene: 'failure-signatures',
  focus: 'sig-mount',
  slide: `## Storage, scheduling, and resources

Many failures never reach the application. Each leaves a recognisable **signature**, if you know where to look.

### Before the Pod runs
- **Pod Pending** — \`FailedScheduling\` says why no node fits
- **Claim Pending** — no class, no driver, or waiting for a Pod
- **Mount failure** — attach, multi-attach, or permissions

### While it runs
- **OOMKilled** — \`lastState\` shows exit code 137
- **Evicted** — the **node** ran short
- Restart counts rising slowly often mean a **leak**

### Reading the signature
- \`describe\` the Pod, then the **claim**, then the node
- Compare memory **usage** with its limit over time
- Fix sizes, capacity, or storage — then **verify**
- Events expire: capture them **early**`,
  narration:
    "A large share of failures never reach the application at all, and each one leaves a recognisable signature if you know where to look. Before the Pod runs, there are three. A Pod stuck Pending, with a FailedScheduling event, means no node could accept it; the event says whether that was CPU, memory, affinity, or a taint, which Chapter 8 covered. A Pod waiting on a claim that is itself Pending points at storage: no matching class, no working driver, or a class waiting for its first consumer. A Pod stuck creating with a mount failure points at attachment: a multi-attach error, often because the old node still holds a read-write-once disk after a failure; file permissions that do not match the user the container runs as; or a missing ConfigMap or Secret. While it runs, there are two more. OOMKilled, visible in the container's last state with exit code one hundred thirty seven, means the container exceeded its memory limit. Evicted means the node itself ran short, which is a different problem. The reading order is simple: describe the Pod, then its claim, then the node. Compare memory use with the limit over time, fix the size or the leak, and then verify.",
}
