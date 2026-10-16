import type { Scene } from '@graphlearning/flow'
import { deploymentTree } from './deployment-tree'
import { replacement } from './replacement'
import { rollout } from './rollout'
import { jobRetry } from './job-retry'
import { cronjobRules } from './cronjob-rules'
import { daemonsetSpread } from './daemonset-spread'
import { controllerChoice } from './controller-choice'

// Chapter 4 — Workload Controllers and Replacement.
export const controllersScenes: Scene[] = [
  deploymentTree,
  replacement,
  rollout,
  jobRetry,
  cronjobRules,
  daemonsetSpread,
  controllerChoice,
]
