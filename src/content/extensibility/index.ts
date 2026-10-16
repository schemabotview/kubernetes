import type { Course } from '../types'
import { crds } from './01-crds'
import { operators } from './02-operators'
import { admissionWebhooks } from './03-admission-webhooks'
import { ecosystemSelection } from './04-ecosystem-selection'
import { endToEndReview } from './05-end-to-end-review'
import { limitsAndNextSteps } from './06-limits-and-next-steps'

// Chapter 13 — Extending Kubernetes and Operating the Whole System (KUBERNETES-COURSE-PLAN.md).
export const extensibility: Course = {
  id: 'extensibility',
  title: 'Extending Kubernetes and Operating the Whole System',
  sections: [crds, operators, admissionWebhooks, ecosystemSelection, endToEndReview, limitsAndNextSteps],
}
