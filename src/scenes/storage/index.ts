import type { Scene } from '@graphlearning/flow'
import { volumeLifetimes } from './volume-lifetimes'
import { claimBinding } from './claim-binding'
import { dynamicProvisioning } from './dynamic-provisioning'
import { accessReclaim } from './access-reclaim'
import { statefulIdentity } from './stateful-identity'
import { backupKinds } from './backup-kinds'
import { statePlacement } from './state-placement'

// Chapter 7 — Persistent State and Stateful Workloads.
export const storageScenes: Scene[] = [
  volumeLifetimes,
  claimBinding,
  dynamicProvisioning,
  accessReclaim,
  statefulIdentity,
  backupKinds,
  statePlacement,
]
