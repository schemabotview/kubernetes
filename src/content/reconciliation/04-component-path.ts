import type { Section } from '../types'

export const componentPath: Section = {
  id: 'component-path',
  title: 'API server, etcd, controllers, scheduler, kubelet',
  scene: 'request-path',
  focus: 'api',
  slide: `## The path from intent to a process

Every component talks to the **API server**. None of them call each other directly; each **watches** for the objects it is responsible for, and writes its results back.

### Following one apply
1. kubectl sends the manifest over HTTPS
2. The API server validates it and stores it in **etcd**
3. A controller sees too few Pods and creates them
4. The scheduler **binds** each Pod to a node
5. That node's kubelet asks the runtime to start it

### What this explains
- A successful \`apply\` means **stored**, not running
- Each step can stall on its own — and leaves evidence
- No Pod object: look at the **controller**
- Pod stuck with no node: look at the **scheduler**
- Bound but not running: look at the **kubelet** and image
- Running but not serving: look at the **application** itself`,
  narration:
    "Let's follow one change through the cluster, from your terminal to a running process. The first thing to notice is the shape. Every component talks to the API server, and none of them call each other directly. Instead, each one watches the API for the objects it is responsible for. So, step one: kubectl sends your manifest to the API server over HTTPS. Step two: the API server checks who you are, validates the object, and persists it in etcd, the cluster's datastore. Step three: a controller, watching for that kind of object, sees that two Pods are wanted and none exist, so it creates two Pod objects, again through the API. Step four: the scheduler sees Pods with no node assigned, and binds each one to a node with room for it. Step five: the kubelet on that node sees a Pod bound to it, and asks the container runtime to pull the image and start the process. Two practical consequences follow. When apply succeeds, your object has been stored, not started. And because every step is separate, each one can stall on its own, and each one leaves its own evidence in status and events.",
}
