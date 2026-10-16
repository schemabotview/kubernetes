import type { Scene } from '@graphlearning/flow'
import { kubeconfigTarget } from './kubeconfig-target'
import { gvk } from './gvk'
import { objectAnatomy } from './object-anatomy'
import { labelSelection } from './label-selection'
import { applyOwnership } from './apply-ownership'
import { ownerChain } from './owner-chain'
import { inspectCleanup } from './inspect-cleanup'

// Chapter 2 — The Kubernetes API and Safe Object Workflows.
export const apiObjectsScenes: Scene[] = [
  kubeconfigTarget,
  gvk,
  objectAnatomy,
  labelSelection,
  applyOwnership,
  ownerChain,
  inspectCleanup,
]
