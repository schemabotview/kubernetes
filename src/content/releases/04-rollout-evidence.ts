import type { Section } from '../types'

export const rolloutEvidence: Section = {
  id: 'rollout-evidence',
  title: 'Rollout evidence and availability and capacity settings',
  scene: 'rollout-health',
  focus: 's-new',
  slide: `## Rollout evidence and capacity

A rolling update needs **room** to surge into. Without it, a correct release stalls — safely, if the settings are right.

### The settings
- \`maxSurge\` needs spare **capacity** for the extra Pods
- \`maxUnavailable: 0\` keeps old Pods until new ones are ready
- \`progressDeadlineSeconds\` sets the deadline

### A stalled rollout
- The surge Pod is **Pending**; old Pods keep serving
- After the deadline, Progressing is **False**
- Users see nothing wrong — yet

### Evidence to read
- \`rollout status\`, then the Deployment's **conditions**
- ReplicaSet counts: how far did it get?
- Application **error rates** and latency — the real test
- Promote only after all of them agree`,
  narration:
    "Chapter 4 showed a rollout stalling on a bad image. A correct release can stall too, for a reason that has nothing to do with the code: the cluster has no room. With max surge one, the Deployment wants to create one extra Pod before removing an old one, and that extra Pod needs capacity, which Chapter 8 showed is a matter of requests. If no node has room, the surge Pod stays Pending. With max unavailable zero, the old Pods are kept and keep serving, so users see nothing wrong, but the release never completes. After the progress deadline, the Deployment's Progressing condition turns false, with a reason. That is the design working safely, provided the settings are deliberate. So learn to read the evidence in layers. Rollout status follows the Deployment and eventually reports the timeout. The conditions say why. The ReplicaSet counts show how far the rollout got: how many new Pods exist and how many are ready. And then the real test, which Kubernetes cannot do for you: the application's own error rates and latency during and after the change. Promote a release to the next environment only when all of these agree.",
}
