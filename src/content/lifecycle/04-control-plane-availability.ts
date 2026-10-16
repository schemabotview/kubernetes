import type { Section } from '../types'

export const controlPlaneAvailability: Section = {
  id: 'control-plane-availability',
  title: 'Control-plane and etcd availability',
  scene: 'control-plane-ha',
  focus: 'no-heal',
  slide: `## Control-plane and etcd availability

The control plane has its own failure domains. When it is down, running work continues, but **nothing changes**.

### Failure domains
- **etcd** needs a quorum: 3 members survive 1 loss
- Several **API servers** sit behind one address
- Schedulers and controllers elect a single **leader**
- Spreading across zones depends on the environment

### While it is unavailable
- Existing Pods keep running and **serving**
- No scheduling, no scaling, no **self-healing**
- Without quorum, etcd stops accepting **writes**

### Your part
- Managed: know the provider's availability **promise**
- Self-managed: design it — no single topology fits all
- Practise an **etcd** member loss before a real one`,
  narration:
    "The control plane is itself a distributed system, with failure domains of its own. etcd, the datastore, uses a consensus protocol that needs a quorum, a majority of its members, to accept writes. Three members tolerate the loss of one; five tolerate two. Several API server instances usually sit behind one address, so losing one is invisible to clients. The scheduler and controllers run as several copies too, but elect a single active leader, so they never act twice. Where the environment allows, these pieces are spread across zones. There is no single correct topology, and this course does not prescribe one. Now the important question: what happens when the control plane is unavailable? Running workloads keep running. The catalogue API's Pods are already on nodes, and the kubelets keep their containers going, so users may notice nothing. But nothing can change. There is no scheduling, no scaling, no rollouts, and no self-healing: a crashed Pod will not be replaced. And if etcd loses quorum, it stops accepting writes altogether. On a managed cluster, know what availability the provider promises. On a self-managed cluster, this design is yours.",
}
