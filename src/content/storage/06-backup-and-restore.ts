import type { Section } from '../types'

export const backupAndRestore: Section = {
  id: 'backup-and-restore',
  title: 'Database backup, snapshots, and restore verification',
  scene: 'backup-kinds',
  focus: 'restore-test',
  slide: `## Backups, snapshots, and restore tests

Three things are often called a backup. Only one survives every failure, and only a **restore test** proves it.

### Not enough on its own
- A **retained volume** shares the disk's fate and its bad writes
- A **snapshot** is usually crash-consistent, near the original

### An independent backup
- Made with the **database's own** tools
- Application-consistent, stored somewhere independent
- Exact commands come from the **database's documentation**

### Proving it with a restore
- Restore into an **isolated** target, never over production
- Compare record counts; run representative API queries
- Record how long it took — that is your recovery time`,
  narration:
    "Three different things are often called a backup, and the differences matter on the worst day. A retained volume is just the same disk, kept. It survives a deleted claim, but it shares every failure of that disk, and it faithfully keeps every bad write, including the accidental delete you wish you could undo. A volume snapshot, taken through the storage driver, is a point-in-time copy. That is better, but it is usually only crash-consistent, as if the power had been pulled, and it often lives with the same provider as the original. An independent backup is made with the database's own tools, so it is consistent from the application's point of view, and stored somewhere that does not share the cluster's failures. The exact commands, and their consistency guarantees, come from PostgreSQL's documentation, not from Kubernetes. And whichever you use, a backup is only proven by restoring it. Restore into an isolated target, never over the live database. Compare record counts with what you expect. Run representative catalogue API queries against the restored data. And record how long the whole process took, because that number is your real recovery time.",
}
