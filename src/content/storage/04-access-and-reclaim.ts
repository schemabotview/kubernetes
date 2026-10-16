import type { Section } from '../types'

export const accessAndReclaim: Section = {
  id: 'access-and-reclaim',
  title: 'Access modes, topology, and reclaim decisions',
  scene: 'access-reclaim',
  focus: 'not-guarantee',
  slide: `## Access modes, topology, and reclaim

Three separate storage decisions, each with its own failure. None of them makes concurrent writes **safe**.

### Access modes
- **ReadWriteOnce** — mounted read-write by one node
- **ReadWriteOncePod** — by exactly one Pod
- **ReadWriteMany** — only where the backend supports it

### Topology
- Many disks live in **one zone**
- The Pod must be scheduled where its disk is

### Reclaim
- **Delete** — removing the claim removes the disk
- **Retain** — the disk stays for someone to handle
- Check the policy **before** deleting a claim

### Not a database guarantee
- Two PostgreSQL servers on one volume **corrupt** it`,
  narration:
    "A claim carries three separate decisions, and each has its own way of failing. First, the access mode says how the volume may be attached. Read-write-once means one node at a time can mount it for writing; read-write-once-pod narrows that to a single Pod; read-write-many allows many writers at once, but only on storage backends that support it, and many do not. Second, topology. Many disks exist in one zone of a cloud region. A Pod using such a disk can only run on a node in that zone, and if none has room, the Pod stays Pending with a topology message. Waiting for the first consumer before provisioning avoids creating the disk in the wrong place. Third, reclaim. With the Delete policy, removing the claim removes the disk and its data. With Retain, the disk stays behind for someone to inspect or reuse. Many dynamic classes default to Delete, so check the policy before deleting any claim you care about. And one important non-guarantee: none of these settings makes concurrent writes safe. Two PostgreSQL servers writing to one volume will corrupt it. Consistency is the database's job, and the design keeps exactly one writer.",
}
