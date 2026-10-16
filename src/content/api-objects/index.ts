import type { Course } from '../types'
import { kubeconfigContexts } from './01-kubeconfig-contexts'
import { groupsVersionsKinds } from './02-groups-versions-kinds'
import { metadataSpecStatus } from './03-metadata-spec-status'
import { labelsAndSelectors } from './04-labels-and-selectors'
import { declarativeApply } from './05-declarative-apply'
import { ownersAndFinalizers } from './06-owners-and-finalizers'
import { inspectAndCleanup } from './07-inspect-and-cleanup'

// Chapter 2 — The Kubernetes API and Safe Object Workflows (KUBERNETES-COURSE-PLAN.md).
export const apiObjects: Course = {
  id: 'api-objects',
  title: 'The Kubernetes API and Safe Object Workflows',
  sections: [
    kubeconfigContexts,
    groupsVersionsKinds,
    metadataSpecStatus,
    labelsAndSelectors,
    declarativeApply,
    ownersAndFinalizers,
    inspectAndCleanup,
  ],
}
