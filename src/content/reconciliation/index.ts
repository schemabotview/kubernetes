import type { Course } from '../types'
import { orchestrationScope } from './01-orchestration-scope'
import { desiredVsObserved } from './02-desired-vs-observed'
import { controlPlaneAndNodes } from './03-control-plane-and-nodes'
import { componentPath } from './04-component-path'
import { criVsImageTools } from './05-cri-vs-image-tools'
import { environments } from './06-environments'

// Chapter 1 — Orchestration, Clusters, and Reconciliation (KUBERNETES-COURSE-PLAN.md).
export const reconciliation: Course = {
  id: 'reconciliation',
  title: 'Orchestration, Clusters, and Reconciliation',
  sections: [orchestrationScope, desiredVsObserved, controlPlaneAndNodes, componentPath, criVsImageTools, environments],
}
