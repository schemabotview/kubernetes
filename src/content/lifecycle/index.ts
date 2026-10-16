import type { Course } from '../types'
import { responsibilityModels } from './01-responsibility-models'
import { cordonAndDrain } from './02-cordon-and-drain'
import { disruptionBudgets } from './03-disruption-budgets'
import { controlPlaneAvailability } from './04-control-plane-availability'
import { upgradesAndSkew } from './05-upgrades-and-skew'
import { backupScope } from './06-backup-scope'
import { recoveryRunbooks } from './07-recovery-runbooks'

// Chapter 12 — Cluster Lifecycle, Availability, and Recovery (KUBERNETES-COURSE-PLAN.md).
export const lifecycle: Course = {
  id: 'lifecycle',
  title: 'Cluster Lifecycle, Availability, and Recovery',
  sections: [
    responsibilityModels,
    cordonAndDrain,
    disruptionBudgets,
    controlPlaneAvailability,
    upgradesAndSkew,
    backupScope,
    recoveryRunbooks,
  ],
}
