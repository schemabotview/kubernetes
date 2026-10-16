import type { Section } from '../types'

export const recoveryRunbooks: Section = {
  id: 'recovery-runbooks',
  title: 'Recovery runbooks and post-restore checks',
  scene: 'restore-runbook',
  focus: 'chk-users',
  slide: `## Recovery runbooks and checks

A runbook turns the inventory into **steps**. A restore is not finished until checks prove the system **works**.

### An outline runbook
- Restore into an **isolated** target first
- Recreate cluster state, from a snapshot or from Git
- Restore application **data** and reconnect credentials
- Exact commands are **distribution-specific**
- **Time** each step; that is your recovery time

### Post-restore checks
- Controllers are reconciling, not looping on errors
- **Permissions** grant the right people, and only them
- Claims are bound and volumes **attach**
- Records are complete; **user requests** succeed

### Bridge
- Next: extending Kubernetes and the **whole system** — Chapter 13`,
  narration:
    "A runbook turns the recovery inventory into steps someone can follow under pressure. This course outlines one; the exact commands depend on your distribution and are deliberately deferred. First, restore into an isolated target, never directly over whatever is left of production, so a mistake in the restore cannot make things worse. Second, recreate cluster state, either from an etcd snapshot or by reapplying declarative configuration from Git. Third, restore the application data from the database's own backup, and reconnect the credentials and keys the restored system needs. Then the part that decides whether the restore worked. Check that controllers are reconciling normally, rather than looping on errors about objects that reference things that no longer exist. Check that permissions grant access to the right people and workloads, and only to them. Check that claims are bound and volumes actually attach to their Pods. And finally, check what users care about: the catalogue's records are complete, and real requests succeed through the real entry point. Practise this before you need it, and time it. With lifecycle and recovery responsibilities established, the last chapter evaluates extensions and integrates the whole operating model.",
}
