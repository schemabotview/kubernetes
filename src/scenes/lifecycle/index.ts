import type { Scene } from '@graphlearning/flow'
import { responsibilityTable } from './responsibility-table'
import { drainFlow } from './drain-flow'
import { disruptionBudget } from './disruption-budget'
import { controlPlaneHa } from './control-plane-ha'
import { upgradePlan } from './upgrade-plan'
import { recoveryInventory } from './recovery-inventory'
import { restoreRunbook } from './restore-runbook'

// Chapter 12 — Cluster Lifecycle, Availability, and Recovery.
export const lifecycleScenes: Scene[] = [
  responsibilityTable,
  drainFlow,
  disruptionBudget,
  controlPlaneHa,
  upgradePlan,
  recoveryInventory,
  restoreRunbook,
]
