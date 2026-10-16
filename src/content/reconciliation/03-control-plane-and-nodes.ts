import type { Section } from '../types'

export const controlPlaneAndNodes: Section = {
  id: 'control-plane-and-nodes',
  title: 'Control-plane and node responsibilities',
  scene: 'cluster-anatomy',
  focus: 'control-plane',
  slide: `## Control-plane and node responsibilities

A cluster splits into a part that **decides** and a part that **executes**. Your containers run only on the second.

### The control plane
- Stores every object and its history of changes
- Decides **where** each Pod should run
- Runs the controllers that reconcile each kind

### Worker nodes
- Run a **kubelet** that executes assigned Pods
- Start containers through a **container runtime**
- Report node and Pod status back to the API

### Why the split matters
- A busy node does not slow down decisions
- A lost node is **replaced work**, not lost intent
- In a **managed** cluster you may never see the control plane at all`,
  narration:
    "A Kubernetes cluster divides into two kinds of responsibility. The control plane decides; the worker nodes execute. The control plane holds every object you declare, and the history of changes to it. It decides which node each Pod should run on, and it runs the controllers that keep reconciling each kind of object. Your application containers do not run there. They run on worker nodes, and each node carries an agent called the kubelet. The kubelet watches for Pods assigned to its node, starts their containers through a container runtime, and reports back how those Pods, and the node itself, are doing. Keeping these apart matters in practice. A node that is overloaded by your application does not slow down the cluster's decision making. And if a node disappears, what is lost is running work, not your intent. The desired state is still stored in the control plane, so the controllers notice the shortfall and recreate the missing Pods on a node that remains. In a managed cluster, the control plane is often invisible to you entirely, which is exactly why it helps to know what it is doing.",
}
