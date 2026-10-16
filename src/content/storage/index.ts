import type { Course } from '../types'
import { ephemeralVolumes } from './01-ephemeral-volumes'
import { pvAndPvc } from './02-pv-and-pvc'
import { storageclassesCsi } from './03-storageclasses-csi'
import { accessAndReclaim } from './04-access-and-reclaim'
import { statefulsets } from './05-statefulsets'
import { backupAndRestore } from './06-backup-and-restore'
import { managedState } from './07-managed-state'

// Chapter 7 — Persistent State and Stateful Workloads (KUBERNETES-COURSE-PLAN.md).
export const storage: Course = {
  id: 'storage',
  title: 'Persistent State and Stateful Workloads',
  sections: [ephemeralVolumes, pvAndPvc, storageclassesCsi, accessAndReclaim, statefulsets, backupAndRestore, managedState],
}
