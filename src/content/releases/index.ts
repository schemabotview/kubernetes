import type { Course } from '../types'
import { digestsAndManifests } from './01-digests-and-manifests'
import { kustomize } from './02-kustomize'
import { helm } from './03-helm'
import { rolloutEvidence } from './04-rollout-evidence'
import { rollbackLimits } from './05-rollback-limits'
import { ciVsGitops } from './06-ci-vs-gitops'
import { driftAndOwnership } from './07-drift-and-ownership'

// Chapter 10 — Repeatable Releases and Configuration Management (KUBERNETES-COURSE-PLAN.md).
export const releases: Course = {
  id: 'releases',
  title: 'Repeatable Releases and Configuration Management',
  sections: [digestsAndManifests, kustomize, helm, rolloutEvidence, rollbackLimits, ciVsGitops, driftAndOwnership],
}
