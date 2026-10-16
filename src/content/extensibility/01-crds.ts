import type { Section } from '../types'

export const crds: Section = {
  id: 'crds',
  title: 'CRDs and custom resources',
  scene: 'custom-resource',
  focus: 'no-behaviour',
  slide: `## CRDs and custom resources

A **CustomResourceDefinition** teaches the API server a **new kind**. It does not teach anything to act on it.

### What a CRD adds
- A new kind, such as \`PostgresCluster\`, with its own **schema**
- Objects of it are stored, validated, and versioned
- kubectl, RBAC, and watches all work

### What it does not add
- **Behaviour** — creating one starts nothing
- Its status stays empty until a controller writes it
- Check CRDs **with** their controller
- A CRD without a controller is just structured storage

### Practical points
- CRDs are **cluster-scoped**; installing one is a platform act
- Their API versions mature too: alpha, beta, v1
- Deleting a CRD deletes **every** object of that kind`,
  narration:
    "Every kind we have used so far, Pods, Deployments, Services, is built into Kubernetes. The API can also be extended with kinds of your own, and the mechanism is the CustomResourceDefinition. A CRD teaches the API server a new kind, here PostgresCluster, along with a schema for its fields. From then on, objects of that kind behave like any other API object. They are stored in etcd, validated against the schema, and versioned. kubectl can get and describe them, RBAC can grant access to them, and controllers can watch them. That is a great deal. But notice what is missing, which is the point of this section. A CRD adds no behaviour at all. Create a PostgresCluster called catalogue-db, and nothing happens: no Pods, no storage, no database. Its status stays empty, because nothing is writing it. A CRD without a controller is simply structured storage in the API. A few practical points. CRDs are cluster-scoped, so installing one is a platform decision, not an application one. Their API versions mature through alpha, beta, and stable, just like built-in ones. And deleting a CRD deletes every object of that kind, in every namespace, at once.",
}
