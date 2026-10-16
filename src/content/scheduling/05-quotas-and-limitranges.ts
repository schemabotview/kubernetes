import type { Section } from '../types'

export const quotasAndLimitRanges: Section = {
  id: 'quotas-and-limitranges',
  title: 'Quotas and LimitRanges',
  scene: 'namespace-limits',
  focus: 'defaulted',
  slide: `## ResourceQuotas and LimitRanges

On a shared cluster, a namespace gets a **budget**. These two objects change what your manifests actually request.

### ResourceQuota
- Caps the namespace's **total** requests, limits, and counts
- A Pod that would exceed it is **refused** at the API
- With a quota on requests, Pods **must** declare them

### LimitRange
- Fills in **default** requests and limits per container
- Rejects containers outside its **min and max**
- Applies at creation; running Pods are untouched

### The effect on your manifests
- The object stored may differ from the one you **applied**
- Read it back with \`-o yaml\` to see the defaults
- \`kubectl describe quota\` shows used against hard
- A full quota stops the **ReplicaSet**, quietly`,
  narration:
    "On a shared cluster, each namespace usually gets a budget, and two objects enforce it. Both change what your manifests actually request, which is why they belong in this chapter. A ResourceQuota caps the namespace's totals: the sum of CPU and memory requests and limits, and counts of objects such as Pods. When creating a Pod would exceed the quota, the API refuses it. And once a quota covers requests, every Pod must declare them, or it is refused too. A LimitRange works per container. It can fill in default requests and limits for containers that do not set them, and it rejects containers whose values fall outside its minimum and maximum. The practical effect is that the object stored in the cluster may differ from the one you applied, because defaults were filled in on the way. Read it back with output yaml to see what was really requested. One failure mode is easy to miss. When a quota is full, it is the ReplicaSet's attempt to create a Pod that is refused, so the Deployment looks fine while its replica count never rises. The evidence is in the ReplicaSet's events.",
}
