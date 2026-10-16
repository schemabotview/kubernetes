import type { Course } from '../types'
import { imageVsConfig } from './01-image-vs-config'
import { configmaps } from './02-configmaps'
import { secrets } from './03-secrets'
import { updatePropagation } from './04-update-propagation'
import { serviceAccounts } from './05-service-accounts'
import { dependencyHandling } from './06-dependency-handling'

// Chapter 5 — Configuration, Secrets, and Application Dependencies (KUBERNETES-COURSE-PLAN.md).
export const configuration: Course = {
  id: 'configuration',
  title: 'Configuration, Secrets, and Application Dependencies',
  sections: [imageVsConfig, configmaps, secrets, updatePropagation, serviceAccounts, dependencyHandling],
}
