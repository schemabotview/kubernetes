import type { Section } from '../types'

export const admissionWebhooks: Section = {
  id: 'admission-webhooks',
  title: 'Admission webhooks and added failure modes',
  scene: 'webhook-path',
  focus: 'fail-closed',
  slide: `## Admission webhooks

Controllers act **after** an object is stored. Admission webhooks act **during** the request — and so can block it.

### Two kinds
- **Mutating** — changes the object: adds a sidecar or labels
- **Validating** — accepts or rejects it against a policy
- Both are HTTP services the API server **calls synchronously**

### The failure mode they add
- \`failurePolicy: Fail\` — webhook down, matching requests **refused**
- \`failurePolicy: Ignore\` — webhook down, the policy is **skipped**
- Neither is free: availability or enforcement

### Containing the risk
- Scope by namespace; **exclude** system namespaces
- Short timeouts, several replicas, and monitoring`,
  narration:
    "Controllers and operators act after an object has been stored. Admission webhooks are different: they act during the request itself, which gives them power, and adds a new way for the cluster to fail. Chapter 9 introduced admission as the third gate. Webhooks let you add your own logic to that gate. A mutating webhook can change the incoming object, for example injecting a sidecar container or adding labels. A validating webhook accepts or rejects it against a policy, such as requiring images from your registry. Both are HTTP services, running somewhere, that the API server calls synchronously while the request waits. Now the failure mode. What happens when the webhook service is down? That is set by its failure policy. With Fail, every request the webhook matches is refused, so if it matches Pods, nothing can create Pods anywhere it applies, including controllers replacing crashed ones. With Ignore, requests proceed and the policy is silently skipped. Neither is free; you are choosing between availability and enforcement. So contain the risk. Scope webhooks to the namespaces that need them, and exclude system namespaces. Give them short timeouts, run several replicas, and monitor them like the critical dependency they are.",
}
