import type { Scene } from '@graphlearning/flow'
import { orchestrationScope } from './orchestration-scope'
import { reconcileLoop } from './reconcile-loop'
import { clusterAnatomy } from './cluster-anatomy'
import { requestPath } from './request-path'
import { buildVsRun } from './build-vs-run'
import { environments } from './environments'

// Chapter 1 — Orchestration, Clusters, and Reconciliation.
export const reconciliationScenes: Scene[] = [
  orchestrationScope,
  reconcileLoop,
  clusterAnatomy,
  requestPath,
  buildVsRun,
  environments,
]
