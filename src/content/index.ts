import { reconciliation } from './reconciliation'
import { apiObjects } from './api-objects'
import { pods } from './pods'
import { controllers } from './controllers'
import { configuration } from './configuration'
import { networking } from './networking'
import { storage } from './storage'
import type { Course, Section } from './types'

// Course registry, in syllabus order — one course per chapter of KUBERNETES-COURSE-PLAN.md.
// Courses are added here as each is authored.
export const COURSES: Record<string, Course> = {
  [reconciliation.id]: reconciliation,
  [apiObjects.id]: apiObjects,
  [pods.id]: pods,
  [controllers.id]: controllers,
  [configuration.id]: configuration,
  [networking.id]: networking,
  [storage.id]: storage,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
