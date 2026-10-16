# Kubernetes — From Declarative Foundations to Reliable Application Operations

## Audience and prerequisites

For learners new to Kubernetes who understand container images, processes, runtime configuration, ports, and persistent data at the level introduced in the Docker course. Basic terminal, file, and HTTP familiarity is assumed. Introduce YAML, DNS, selectors, and permissions locally. Docker Compose, cloud accounts, advanced Linux administration, and programming are not prerequisites; supply application code and images.

Scope: general Kubernetes application and platform foundations for Linux workloads, independent of certification objectives. Use a prepared learning cluster for optional demonstrations. Paid deployments, submitted exercises, learner monitoring, and fixed teaching durations are not required. Installation and administration are introductory operational orientation rather than a distribution-specific manual.

Reference basis: rolling official documentation inspected on **2026-10-15**, supplemented by targeted authoring checks on the same date. No cluster was installed, accessed, or tested. Record actual server/client versions, APIs, runtime, networking (CNI), storage (CSI), metrics components, Gateway implementation, and packaging tools when implementing lessons. Verify maturity and version compatibility rather than depending on alpha/beta features in the core course. Local, managed, and self-managed environments have different operational responsibilities; a local demonstration does not establish production availability.

Target: construct and explain representative manifests, trace reconciliation and request paths, interpret diagnostic evidence, and justify availability, security, release, and recovery decisions. Completion does not establish assessed production competence.

Structure: **13 chapters, 88 sections**, distributed **6, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, and 6**. Counts reflect conceptual scope, not equal teaching time.

## Learning spine

Orchestration and reconciliation → API objects → Pod execution → workload controllers → configuration → traffic → durable state → placement and capacity → security → release management → diagnosis → cluster lifecycle and recovery → extensibility and architectural synthesis.

Container foundations let the course begin with orchestration. Labels and selectors accompany the object model; controllers follow Pod lifetime so replacement is understood before larger application assembly. Readiness precedes traffic and releases. Storage precedes stateful placement and disaster recovery. Safe context selection, secret protection, initial resource settings, and observation appear at first use and deepen in later chapters. Diagnostic synthesis builds on earlier evidence rather than postponing failure awareness until the end.

Recurring example: Docker's supplied catalogue API initially serves static data, then connects to PostgreSQL and a batch import Job. Trace the same image and data model through configuration, discovery, persistence, scaling, policy, release, and recovery. A single database instance demonstrates state and restoration, not highly available database operation; compare an externally managed database where useful. Begin with localhost port-forwarding before external traffic infrastructure. Keep optional work inside a named learning namespace, and explain cluster-scoped exceptions explicitly.

Teaching method: objective → mental model → annotated manifest/command/diagram → expected evidence → contrasting failure → outcome → bridge. Outputs and incidents are illustrative unless recorded in a documented execution environment. Explain both construction and reasoning. Mutation examples identify their target, authority, data effects, and recovery path. Keep this document at course-plan level; it specifies demonstrations rather than supplying complete lessons.

## Chapter 1 — Orchestration, Clusters, and Reconciliation

Objective: Explain why orchestration uses desired state and reconciliation, and locate responsibilities across the cluster.

1. Orchestration problems and limits
2. Desired versus observed state
3. Control-plane and node responsibilities
4. API server/etcd/controllers/scheduler/kubelet
5. CRI versus image-building tools
6. Local/managed/self-managed environments

Worked illustrations: Draw kubectl → API server → persisted object → controller → scheduler → kubelet/runtime. Trace desired replicas from one to two using illustrative spec/status observations. Compare a container restart on a live node with creation of a replacement Pod after a node failure. Explain the time and capacity needed for convergence, and why Kubernetes does not repair incorrect business logic. Distinguish an OCI image built with Docker tooling from the runtime interface used by Kubernetes.

Outcome: Explain the path from declared intent to execution and distinguish cluster automation from application correctness.

Bridge: To express desired state precisely, next we establish the API object model and safe ways to work with it.

## Chapter 2 — The Kubernetes API and Safe Object Workflows

Objective: Construct and interpret API objects while controlling the scope and ownership of changes.

1. Kubeconfig, contexts, and namespaces
2. API groups/versions/kinds and schemas
3. Metadata/spec/status
4. Names/UIDs/labels/selectors/annotations
5. Declarative apply, diff, validation, and field ownership
6. Owner references, deletion, and finalizers
7. Get/describe/events and bounded cleanup

Worked illustrations: Annotate apiVersion, kind, metadata, spec, and status in a supplied manifest and its observed object. Use `kubectl config current-context`, explicit namespaces, `kubectl explain`, `get`, `describe`, and a preview/diff workflow. Contrast a name with a UID and a label with a selector. Trace a field-ownership conflict conceptually without treating all apply modes as equivalent. Follow owner references and a finalizer through deletion; explain why bypassing a finalizer requires understanding its cleanup responsibility. Limit mutations to named disposable objects.

Outcome: Interpret manifests and observed objects, identify the target context and namespace, and explain changes and deletion dependencies.

Bridge: An object declaration becomes execution through a Pod; next we follow that unit through its lifetime.

## Chapter 3 — Pods and Application Execution

Objective: Explain how a Pod runs, becomes ready, fails, restarts, and terminates.

1. Shared Pod network/storage and container boundaries
2. Lifecycle phases/conditions/container states
3. Image identity and pull failures
4. Commands/configuration/initial resource requests
5. Init/sidecar patterns
6. Startup/readiness/liveness probes
7. Termination, grace periods, and restart behaviour

Worked illustrations: Follow a supplied API image through Pending, startup, readiness, and termination using annotated status, events, and logs. Distinguish Pod phase, container state, and displayed failure reasons such as image-pull or crash backoff. Compare a slow start with a deadlock and temporary database unavailability when choosing startup, readiness, and liveness checks. Explain an init-container dependency and a sidecar lifecycle without requiring a version-sensitive sidecar mechanism. Trace signal handling and a bounded grace period; introduce CPU/memory requests and credential-free image references before later deepening them.

Outcome: Choose appropriate health and lifecycle settings and interpret a Pod state without confusing readiness with process existence.

Bridge: Pods are disposable execution units; next we examine the controllers that maintain or complete work.

## Chapter 4 — Workload Controllers and Replacement

Objective: Choose a workload controller and trace its ownership, replacement, and completion behaviour.

1. Deployment/ReplicaSet ownership
2. Replicas and reconciliation
3. Rollout strategy/status and rollback boundaries
4. Jobs and retry/idempotency
5. CronJobs and scheduling/concurrency limits
6. DaemonSets and per-node work
7. Choosing a controller and previewing StatefulSets

Worked illustrations: Draw Deployment → ReplicaSet → Pods and annotate which controller owns each change. Delete one disposable owned API Pod and trace replacement with a new identity. Observe a rollout with a bad image and compare progress evidence with application success. Contrast a retried catalogue import Job with a continuously running API; use an idempotency key or transactional import boundary to explain repeated effects. Interpret a CronJob schedule, overlap policy, and missed execution as separate concerns. Compare a node agent DaemonSet with a replicated service and defer stable database identity to Chapter 7.

Outcome: Express representative service and batch workloads and explain why controllers replace Pods or retry work.

Bridge: Controllers establish workload lifetime; configuration and dependency behaviour determine what the application does within it.

## Chapter 5 — Configuration, Secrets, and Application Dependencies

Objective: Separate artifacts, configuration, credentials, identity, and dependency behaviour in an application design.

1. Image versus runtime configuration
2. ConfigMaps through files and environment
3. Secrets and base64/protection limits
4. Update propagation and application reload
5. Service accounts and projected identity introduction
6. Dependency readiness, retry/backoff, and graceful shutdown

Worked illustrations: Annotate ConfigMap and Secret references through environment variables and mounted files using placeholder credentials. Compare an environment value retained by a running container with an eventually updated mounted ConfigMap; explain that the application still needs to reread it and that subPath mounts have different update behaviour. Separate configuration propagation from a controlled Pod replacement. Introduce a dedicated service account and projected identity conceptually, deferring detailed permissions to Chapter 9. Trace retry/backoff and shutdown for an API whose database becomes unavailable; do not assume object creation order implements dependency readiness.

Outcome: Construct configuration references, explain update and identity boundaries, and justify application-level dependency handling.

Bridge: Configured workloads need stable discovery and deliberate traffic paths as their Pods change.

## Chapter 6 — Services, DNS, and External Traffic

Objective: Trace traffic from a client to a changing set of ready application endpoints.

1. Pod addressing and CNI responsibilities
2. Service selectors/EndpointSlices
3. DNS and namespace-qualified names
4. ClusterIP/NodePort/LoadBalancer and port-forward distinctions
5. Ingress/controller model
6. GatewayClass/Gateway/HTTPRoute and implementation requirements
7. TLS termination and request-path diagnosis

Worked illustrations: Trace client → Gateway/Ingress implementation → Service → EndpointSlice backends → API → database name. Compare stable discovery with replaced Pod IPs and inspect selectors, readiness, names, and target ports. Contrast localhost port-forwarding with provisioned external access. Show an Ingress or Gateway API object whose implementation is absent so a valid declaration does not imply functioning traffic infrastructure. Mark where TLS terminates and how traffic continues afterwards. Keep database access internal and qualify LoadBalancer behaviour by environment rather than promising automatic infrastructure everywhere.

Outcome: Explain service discovery and exposure choices and isolate failures along a representative network path.

Bridge: A connected application can now introduce durable state without confusing network identity with data lifetime.

## Chapter 7 — Persistent State and Stateful Workloads

Objective: Reason about persistent data, stable workload identity, storage provisioning, and verified recovery.

1. Ephemeral volumes and Pod lifetime
2. PV/PVC separation and binding
3. StorageClasses/CSI/dynamic provisioning
4. Access modes/topology/reclaim decisions
5. StatefulSet identity/order/storage
6. Database backup, snapshots, and restore verification
7. In-cluster versus externally managed state

Worked illustrations: Draw a Pod-local temporary volume alongside a PVC, bound PV, StorageClass, and CSI implementation. Replace a single-instance PostgreSQL Pod and trace its claim and stable StatefulSet identity. Contrast a pending claim, mount failure, topology mismatch, and permission failure. Explain access modes and reclaim choices without treating them as a database concurrency guarantee. Compare retained storage, a storage snapshot, and an application-consistent independent backup. Outline restore into an isolated target and verification of records and representative API queries. State database image/data-directory assumptions before concrete examples; no highly available database is implied.

Outcome: Choose a storage/workload arrangement and distinguish persistent identity, retained data, and recoverable application state.

Bridge: Storage ownership constrains placement; next we connect those constraints with capacity and scaling.

## Chapter 8 — Scheduling, Resources, and Scaling

Objective: Explain placement and capacity decisions and relate workload scaling to measured demand and constraints.

1. Requests/limits/units and runtime effects
2. Capacity and Pending Pods
3. Selectors/affinity/taints/tolerations
4. Topology spread and failure domains
5. Quotas/LimitRanges
6. Horizontal autoscaling and metrics dependencies
7. Vertical/node autoscaling orientation and trade-offs

Worked illustrations: Use a small node-capacity table to compare allocatable resources with existing requests and a new API replica. Distinguish placement accounting from current measured usage. Contrast an impossible required affinity with a soft preference, and explain that a toleration permits placement without demanding it. Compare colocated replicas with distribution across failure domains. Trace demand → available metrics → HPA decision → desired replicas → scheduling, then show missing metrics, insufficient capacity, and a database bottleneck. Contrast CPU throttling with memory-related termination; introduce quota and defaulting effects on the same manifests.

Outcome: Reason about requests, limits, scheduling constraints, failure domains, and the prerequisites and limitations of autoscaling.

Bridge: Shared capacity and placement create authority boundaries that need explicit security controls.

## Chapter 9 — Identity, Policy, and Workload Security

Objective: Justify access and isolation controls across the API, workload, and network boundaries.

1. Authentication/authorization/admission
2. Human and service-account identity
3. Roles/ClusterRoles and bindings
4. Security contexts and Pod Security Standards/Admission
5. NetworkPolicy ingress/egress/DNS needs
6. Secret access/rotation/encryption responsibilities
7. Image trust and tenant boundaries

Worked illustrations: Trace a human or workload API request through identity, permission checks, and admission, separately from an API-to-database network connection. Annotate a namespace-scoped Role/RoleBinding and contrast it with unnecessarily broad cluster authority. Compare a forbidden response with an admitted workload whose Pod is rejected by a security policy. Review a non-root security context and Pod Security Admission modes at course-plan level. Draw additive ingress/egress rules including DNS access; confirm that the chosen networking implementation enforces them. Review Secret access, rotation, and encryption responsibilities without treating base64, a namespace, or an image digest as sufficient protection.

Outcome: Construct and explain representative least-privilege policies and distinguish authentication, authorization, admission, and connectivity.

Bridge: Reviewed controls and configuration must survive repeatable releases and ownership changes.

## Chapter 10 — Repeatable Releases and Configuration Management

Objective: Construct a repeatable release model and explain configuration ownership and rollback limits.

1. Source manifests and image digests
2. Kustomize bases/overlays
3. Helm package/release orientation
4. Rollout evidence and availability/capacity settings
5. Application/data compatibility and rollback
6. CI delivery versus GitOps reconciliation
7. Drift and ownership conflicts

Worked illustrations: Follow one recorded API image digest through environment-specific Kustomize overlays and inspect rendered resources before applying them. Introduce a Helm chart as a package and a release as an installation lifecycle without turning this chapter into template-language training. Compare a healthy rolling update with inadequate surge capacity and a stalled rollout. Trace a compatible application rollback and an incompatible database migration. Explain that Deployment revision history does not restore every referenced configuration object or database change. Contrast CI initiating delivery with GitOps continuously reconciling declared state; show competing manual and automated replica writers.

Outcome: Explain artifact promotion, rendered configuration, rollout evidence, and recovery choices without assuming all state is rolled back together.

Bridge: Release evidence and object ownership provide context for diagnosing failures across the running system.

## Chapter 11 — Observability and Evidence-Led Diagnosis

Objective: Investigate application failures by combining object state, logs, events, resource evidence, and request paths.

1. Logs/events/status and their retention limits
2. Metrics and application symptoms
3. Tracing/request correlation orientation
4. Debugging Pods and previous containers
5. Service/DNS/policy diagnosis
6. Storage/scheduling/resource diagnosis
7. Incident evidence and verification after recovery

Worked illustrations: Use annotated `get`, `describe`, events, current/previous container logs, and request evidence to compare image-pull failure, crash loop, memory termination, absent ready endpoints, failed mounts, and a slow API. Explain why an empty log, missing event, or one exit code is not conclusive. Correlate request IDs with API/database symptoms and introduce metrics/tracing without prescribing an observability vendor. Separate a debug action from a permanent fix and respect RBAC and secret exposure. Record the hypothesis, observation, smallest justified change, and post-change API/data verification for each incident.

Outcome: Form and evaluate diagnostic hypotheses and verify recovery through application behaviour as well as Kubernetes state.

Bridge: Application diagnosis now extends to node maintenance, control-plane health, and disaster recovery.

## Chapter 12 — Cluster Lifecycle, Availability, and Recovery

Objective: Explain cluster maintenance and recovery responsibilities and the limits of availability mechanisms.

1. Managed versus self-managed responsibility
2. Node health/cordon/drain
3. Disruptions/budgets and topology
4. Control-plane/etcd availability
5. Upgrades/API deprecation/version skew
6. Cluster-state versus application-data backup
7. Recovery runbooks and post-restore checks

Worked illustrations: Create a responsibility table for prepared local, managed, and self-managed clusters. Walk through cordon/drain, a disruption budget that blocks eviction, and sudden node loss; distinguish bounded voluntary-eviction protection from all-outage prevention. Diagram control-plane/etcd failure domains without prescribing a universal topology. Review a version inventory and supported upgrade order against the actual version-skew policy rather than memorising a permanent version matrix. Separate protected cluster-state snapshots, declarative configuration, credentials, and database-volume backups in a recovery inventory. Outline an isolated restoration and verify controllers, permissions, storage attachment, records, and user requests; distribution-specific restore commands are deferred.

Outcome: Explain maintenance and disaster-recovery decisions, assign operational ownership, and identify evidence needed to validate restoration.

Bridge: With lifecycle responsibilities established, next we evaluate extensions and integrate the whole operating model.

## Chapter 13 — Extending Kubernetes and Operating the Whole System

Objective: Evaluate extension mechanisms and synthesize the operating model of the complete application.

1. CRDs and custom resources
2. Custom controllers and operator responsibilities
3. Admission webhooks and added failure modes
4. Ecosystem selection and ownership
5. End-to-end architecture/release/recovery review
6. Limits and continued specialist study

Worked illustrations: Trace a database custom resource through validation, a controller/operator, generated workloads, and observed status. Explain that defining a resource schema alone does not supply a reconciliation implementation. Contrast controller automation with admission webhooks and discuss how an unavailable webhook can affect API operations. Review an extension by its compatibility, authority, upgrade ownership, and failure/recovery requirements. Finish with one architecture and runbook review covering image identity, runtime configuration, request paths, data ownership, capacity, policy, release, and restoration. Identify where the single-database example must change before stronger availability claims are justified.

Outcome: Explain custom-resource automation and justify an end-to-end architecture with explicit dependencies and specialist boundaries.

Bridge: Continue with dedicated cluster administration, cloud Kubernetes, observability, security, or operator development. Revisit the catalogue application under new failure and scale assumptions, checking supported versions and recovery evidence before extending it.

## Sources and scope

Primary authority is Kubernetes documentation: [overview](https://kubernetes.io/docs/concepts/overview/), [Pod lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/), [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), [resource management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/), [persistent volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/), [Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/), [Secrets good practices](https://kubernetes.io/docs/concepts/security/secrets-good-practices/), [RBAC good practices](https://kubernetes.io/docs/concepts/security/rbac-good-practices/), [NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/network-policies/), [horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/), [disruptions](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/), [Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/), and [extensibility](https://kubernetes.io/docs/concepts/extend-kubernetes/).

Targeted authoring checks also inspected [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/), [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/), [CronJobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/), [StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/), [DaemonSets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/), [Services](https://kubernetes.io/docs/concepts/services-networking/service/), [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/), [Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/), [node assignment](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/), [version skew](https://kubernetes.io/releases/version-skew-policy/), and [etcd operations](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/). Checks cover selected introductory/examples or targeted sections, not complete linked guides. [Helm charts](https://helm.sh/docs/topics/charts/) and [OpenGitOps](https://opengitops.dev/) anchor bounded packaging and GitOps orientation. Exact implementation procedures remain version-dependent.

Book comparison uses publisher metadata/contents for Burns, Beda, Hightower, and Evenson's [Kubernetes: Up and Running, third edition](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/) (O'Reilly, 2022), and publisher description/metadata for Lukša and Conner's [Kubernetes in Action, second edition](https://www.manning.com/books/kubernetes-in-action-second-edition) (Manning, 2026). Neither full text was accessed. Detailed access limits and coverage tracking are in README.md.

Docker/Linux overlap is deliberate prerequisite recap. Cluster bootstrap, certificate management, distribution-specific upgrades, etcd restore execution, provider-specific networking/storage, highly available database administration, native Windows workloads, advanced traffic engineering, service meshes, multi-cluster systems, operator authoring, and advanced platform engineering are deferred. Observability includes evidence and correlation rather than an entire monitoring-stack course. Helm and GitOps implementation details remain specialist follow-ons. Database consistency and backup syntax require the selected database's own documentation; Kubernetes storage abstractions do not establish those guarantees. No command execution, complete book study, or exhaustive feature audit is claimed.
