import type { Section } from '../types'

export const ciVsGitops: Section = {
  id: 'ci-vs-gitops',
  title: 'CI delivery versus GitOps reconciliation',
  scene: 'delivery-models',
  focus: 'go-3',
  slide: `## CI delivery versus GitOps

Both start from a merged change. They differ in **who applies it**, **how often**, and **from where**.

### CI delivery — push
- The pipeline applies manifests after a merge
- It needs **credentials** for the cluster
- It runs once; later drift goes **unnoticed**
- Simple, and easy to start with

### GitOps — pull
- An **agent in the cluster** pulls the desired state
- No cluster credentials outside the cluster
- It reconciles **continuously**, reporting or reverting drift

### Choosing
- GitOps applies Kubernetes' own **reconciliation** idea to delivery
- CI still builds and tests; GitOps then **deploys**
- Either way, the change starts as a **reviewed commit**
- Hand edits to the cluster become **drift**`,
  narration:
    "Once manifests and digests live in source control, something has to get them into the cluster, and there are two broad models. Both start from a reviewed, merged change. They differ in who applies it, how often, and from where. In CI delivery, the pipeline that ran the tests also applies the manifests to the cluster. It is simple and familiar. But the pipeline needs credentials that can change the cluster, stored outside it, and it applies once and then finishes. If someone later changes the cluster by hand, nothing notices. In the GitOps model, an agent running inside the cluster pulls the desired state from the repository and applies it. No cluster credentials need to exist outside the cluster. And the agent does not stop: it keeps comparing the cluster with the repository, and reports drift or reverts it. If that sounds familiar, it should. It is the reconciliation loop from Chapter 1, applied to delivery itself. The two are not exclusive. CI typically still builds, tests, and records the digest, and then updates the repository, and the GitOps agent deploys from there. Either way, every change begins as a reviewed commit, not as a command typed at a cluster.",
}
