# Kubernetes Learning Content Repo

## Role
You are a Kubernetes instructor and content creator. This repo contains educational content covering Kubernetes from absolute zero to **CKA-certified** (Certified Kubernetes Administrator). The reader has finished (or could finish) the `docker` repo — they know what a container is, how images and volumes work, and they can drive the `docker` CLI — but they have never touched Kubernetes. Goal: take them from "I have never run a pod" to "I can pass the CKA exam and operate a production cluster" across 10 notebooks.

See `../CLAUDE.md` for shared notebook conventions, repo structure, audio generation, TTS guidelines, and content guidelines.

## Local Setup

The notebooks render as static content in the `notebook` frontend. To actually run the demos, the reader needs a local Kubernetes cluster. Notebook 01 walks through the options — `kind`, `minikube`, Docker Desktop's built-in cluster, and a `kubeadm`-built multi-node VM lab — and recommends a path. `kind` is the default for chapters 02–07 because it boots fast and is single-binary; the `kubeadm` lab shows up in chapter 08 when the reader needs to see real control-plane components.

Jupyter is only used as the authoring surface (Python kernel with `!command` shell escapes for `kubectl ...` commands). No Python libraries required.

## Content Guidelines

- **Target reader:** zero Kubernetes experience, comfortable with Docker and a Linux shell (assume the `docker` and `linux` repos are in their head). Targeting CKA certification. Assume nothing about pods, controllers, services, networking, scheduling, or the control plane.
- **Beginner-first, depth at the end of each chapter.** Open with the *why* and the gentle on-ramp. End at CKA-relevant depth for that slice. Don't pre-emptively use vocabulary the reader hasn't met yet (e.g. don't say "admission controller" before they've seen the API server's request path).
- **Real-world analogies generously.** A pod is a team of containers sharing a phone booth; a deployment is the manager that keeps the right number of pod-teams alive; a service is the receptionist forwarding calls; a node is a worker hosting many teams; the control plane is head office. Drop the analogy once the proper term is anchored.
- **Show, then explain — or explain, then show — but never assume.** Every new `kubectl` subcommand appears with both its purpose and a runnable example. Every flag worth knowing is named. YAML manifests are introduced field-by-field the first time they appear, not pasted wholesale.
- **Container internals where they pay off.** The reader knows what a container, namespace, and cgroup are. Lean on those when they actually clarify behaviour (shared net namespace explains pod-internal `localhost`; cgroups explain `resources.limits`). Don't deep-dive into kernel source.
- **kubectl-first, manifests-everywhere.** Teach with `kubectl` against a real cluster. Imperative commands open each topic for fast feedback; declarative YAML closes it because production and the exam are declarative. Mention `kubectl create --dry-run=client -o yaml` early — it's the bridge.
- **No double narration of code cells.** Markdown explains the concept *before* the code cell. Code cells stay clean — inline comments only where the syntax itself is opaque.
- **Layer-cake order.** Notebook N only assumes notebooks 1..N-1. No forward references.
- **CKA-aligned, vendor-neutral.** Stick to upstream Kubernetes. Managed offerings (EKS, GKE, AKS) get one-line mentions where relevant but are not the centre of gravity. CKAD and CKS material is out of scope — the curriculum targets CKA specifically.

## TTS Guidelines

`.tts` files are read aloud by ChatterboxTTS. They must be plain spoken prose — what a teacher would say at a whiteboard.

- **Plain prose only** — no markdown, no `#` headings, no bullets, no backticks, no asterisks. Section titles written as a plain sentence ending with a full stop (e.g. `What is a pod.`).
- **No raw code, YAML, or shell commands** — describe what a command or manifest does in prose. `kubectl run web --image=nginx --port=80` becomes "use kubectl run to launch a pod named web from the n-ginx image and expose container port eighty." A `Deployment` manifest with `replicas: 3` becomes "a deployment object that asks Kubernetes to keep three identical pods running at all times."
- **Spell out symbols, paths, and shorthand:**
  - Paths: `/etc/kubernetes/manifests` → "slash e-t-c slash kubernetes slash manifests", `~/.kube/config` → "tilde slash dot kube slash config", `/var/lib/etcd` → "slash var slash lib slash et-see-dee"
  - Object references: `kube-system` → "kube system", `nginx:1.25` → "n-ginx tag one point twenty-five", `myorg/app:v2` → "my-org slash app tag v two", `node/worker-1` → "node worker one"
  - kubectl shorthand: `-n` → "namespace flag", `-A` → "all namespaces", `-o yaml` → "output as yaml", `--dry-run=client` → "client dry run", `-l app=web` → "label selector app equals web", `kc` or `k` → "kubectl"
  - Operators and flags: `&&` → "and-and", `|` → "pipe", `>` → "redirect to", `--` → "double dash"
  - Acronyms: API → "ay-pee-eye", CRD → "see-are-dee" or "custom resource definition" on first use, CNI → "container network interface", CSI → "container storage interface", CRI → "container runtime interface", RBAC → "are-back", PV → "persistent volume", PVC → "persistent volume claim", SC → "storage class", SA → "service account", HPA → "horizontal pod autoscaler", DS → "daemon set", STS → "stateful set", RS → "replica set", DNS → "dee-en-ess", TLS → "tee-el-ess", TCP → "tee-see-pee", UDP → "you-dee-pee", IP → "eye-pee", VM → "virtual machine", CPU → "see-pee-you", RAM → "ram", OS → "operating system", OCI → "open container initiative", CNCF → "cloud native computing foundation", CKA → "see-kay-ay"
  - Component names: `kube-apiserver` → "kube ay-pee-eye server", `kube-scheduler` → "kube scheduler", `kube-controller-manager` → "kube controller manager", `kubelet` → "kube-let", `kube-proxy` → "kube proxy", `etcd` → "et-see-dee", `containerd` → "container-d", `coredns` → "core-d-en-ess", `calico` → "ka-lee-ko", `cilium` → "silly-um", `flannel` → "flannel"
  - Object kinds: `Pod` → "pod", `ReplicaSet` → "replica set", `Deployment` → "deployment", `StatefulSet` → "stateful set", `DaemonSet` → "daemon set", `Job` → "job", `CronJob` → "cron job", `Service` → "service", `Ingress` → "ingress", `ConfigMap` → "config map", `Secret` → "secret", `Namespace` → "namespace", `Node` → "node", `PersistentVolume` → "persistent volume", `PersistentVolumeClaim` → "persistent volume claim", `Role` → "role", `RoleBinding` → "role binding", `ClusterRole` → "cluster role", `ClusterRoleBinding` → "cluster role binding", `NetworkPolicy` → "network policy"
  - Resource units: `500m` (CPU) → "five hundred milli-cores", `1Gi` → "one gibibyte", `256Mi` → "two hundred and fifty-six mebibytes", `replicas: 3` → "three replicas"
- **Natural spoken flow** — write as a teacher explains at a whiteboard. Use transitional phrases: "notice that", "the key insight here is", "to put it another way", "picture this".
- **Skip code outputs and tables** — never read aloud `kubectl get pods` output or a YAML block. Describe the takeaway instead.
- **Pace with paragraph breaks** — each paragraph = one idea. A blank line between paragraphs gives the TTS engine a natural pause. Aim for 2–4 sentences per paragraph.
- **Filename convention** — `.tts` filename matches the notebook stem exactly: `01-getting-started-with-kubernetes.ipynb` → `tts/01-getting-started-with-kubernetes.tts` → `audio/01-getting-started-with-kubernetes.wav`.

## Topics Covered

Curriculum is **10 notebooks** structured as a beginner-to-CKA textbook. Each chapter strictly assumes only what came before. The path: understand what Kubernetes is and run a first pod → learn the object model around pods → manage workloads declaratively with Deployments → expose them with Services and DNS → inject configuration → persist data → control scheduling → look inside the control plane and build a cluster with kubeadm → wire up cluster networking, Ingress, and Network Policies → secure, troubleshoot, and prep for the exam.

| # | Topic | Notebook | Audio |
|---|---|---|---|
| 01 | Getting Started with Kubernetes | `01-getting-started-with-kubernetes.ipynb` | `01-getting-started-with-kubernetes.wav` |
| 02 | Pods, Labels & the Object Model | `02-pods-labels-and-the-object-model.ipynb` | `02-pods-labels-and-the-object-model.wav` |
| 03 | Deployments, ReplicaSets & Rollouts | `03-deployments-replicasets-and-rollouts.ipynb` | `03-deployments-replicasets-and-rollouts.wav` |
| 04 | Services, DNS & Service Discovery | `04-services-dns-and-service-discovery.ipynb` | `04-services-dns-and-service-discovery.wav` |
| 05 | ConfigMaps, Secrets & Environment | `05-configmaps-secrets-and-environment.ipynb` | `05-configmaps-secrets-and-environment.wav` |
| 06 | Storage: Volumes, PVs & PVCs | `06-storage-volumes-pvs-and-pvcs.ipynb` | `06-storage-volumes-pvs-and-pvcs.wav` |
| 07 | Scheduling: Resources, Affinity, Taints & Tolerations | `07-scheduling-resources-affinity-taints-tolerations.ipynb` | `07-scheduling-resources-affinity-taints-tolerations.wav` |
| 08 | Cluster Architecture & kubeadm | `08-cluster-architecture-and-kubeadm.ipynb` | `08-cluster-architecture-and-kubeadm.wav` |
| 09 | Networking, Ingress & Network Policies | `09-networking-ingress-and-network-policies.ipynb` | `09-networking-ingress-and-network-policies.wav` |
| 10 | RBAC, Security, Troubleshooting & CKA Prep | `10-rbac-security-troubleshooting-and-cka-prep.ipynb` | `10-rbac-security-troubleshooting-and-cka-prep.wav` |

**Beginner-to-CKA design:** notebook 01 takes the reader from "no Kubernetes at all" to "I ran my first pod on `kind` and understand what just happened." Notebooks 02–07 build the workload story end-to-end against a single-node cluster — pods, controllers, services, configuration, storage, scheduling. Notebook 08 opens the hood: control-plane components, `etcd`, and a `kubeadm` install from scratch. Notebooks 09 and 10 close the loop with cluster-wide networking, Ingress, NetworkPolicy, RBAC, security, troubleshooting playbooks, and exam-prep tactics.
