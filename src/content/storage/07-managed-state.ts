import type { Section } from '../types'

export const managedState: Section = {
  id: 'managed-state',
  title: 'In-cluster versus externally managed state',
  scene: 'state-placement',
  focus: 'same-contract',
  slide: `## In-cluster or managed state

Running PostgreSQL in the cluster is a choice, not a default. A managed database moves some responsibilities, **not all**.

### In the cluster
- You run backups, restores, upgrades, and tuning
- Replication and failover are **yours** to build
- Close to the application, and one bill

### A managed service
- The provider runs failover, patching, and backups
- You still own **access**, network rules, and cost
- You still **test restores** yourself

### Same contract either way
- The API sees a **DNS name** and a Secret
- Switching changes configuration, not the image

### Bridge
- Storage constrains **placement** — Chapter 8`,
  narration:
    "Running the database inside the cluster, as this chapter has done, is a choice rather than a default, and it is worth weighing against the alternative. In the cluster, you own everything. You run the backups and test the restores, you perform PostgreSQL upgrades and tuning, and if you want replication and automatic failover, you build and operate them, typically with a specialised operator. In return, the database sits close to the application and on the same bill. A managed database service, run by a cloud provider, moves a lot of that work. The provider operates failover, patching, and scheduled backups. But it does not move all of it. You still own who can connect, the network rules, and the cost, and you still need to prove that a restore actually works. The encouraging part is that the catalogue API does not need to care. Either way, it sees a DNS name and a Secret containing credentials. Switching from one to the other changes configuration, not the image, which is the payoff of Chapter 5. Storage has one more consequence we have only touched on: where data lives constrains where Pods can run. That connects us to scheduling and capacity, in Chapter 8.",
}
