import type { Section } from '../types'

export const operators: Section = {
  id: 'operators',
  title: 'Custom controllers and operator responsibilities',
  scene: 'operator-loop',
  focus: 'operator',
  slide: `## Custom controllers and operators

An **operator** is a controller for a custom resource, carrying the **operational knowledge** a person would otherwise apply.

### The loop, again
- It watches \`PostgresCluster\` objects
- It creates and owns **ordinary** objects: StatefulSet, Services, Secret
- It writes **status** back: ready, version, last backup

### What it can automate
- Provisioning, configuration, and credentials
- Backups on a schedule; possibly replication and failover
- Version upgrades in the right **order**

### What you now depend on
- The operator's **correctness** and its upgrade path
- Its permissions — often broad, often cluster-wide
- Its own availability: while it is down, nothing **reconciles**`,
  narration:
    "Behaviour for a custom resource comes from a controller, and when that controller carries real operational knowledge, it is usually called an operator. It runs the same loop as every controller in this course, from Chapter 1 onward. It watches PostgresCluster objects. For each one, it compares what is declared with what exists, and creates and owns ordinary Kubernetes objects to close the gap: a StatefulSet for the database Pods, Services for the primary and replicas, a Secret with generated credentials, and a Job or CronJob for backups. Then it writes status back to the custom resource, saying whether the cluster is ready, which version it runs, and when the last backup succeeded. That status is what you read, exactly as you read a Deployment's. A good database operator can automate a lot that this course did by hand: provisioning, configuration, credentials, scheduled backups, and, depending on the operator, replication, failover, and version upgrades performed in the right order. It is worth being clear about what you now depend on. The operator's correctness and its own upgrade path. Its permissions, which are often broad and cluster-wide. And its availability: while the operator is down, nothing reconciles its resources.",
}
