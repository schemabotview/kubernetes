import type { Scene } from '@graphlearning/flow'
import { reconciliationScenes } from './reconciliation'
import { apiObjectsScenes } from './api-objects'
import { podsScenes } from './pods'
import { controllersScenes } from './controllers'
import { configurationScenes } from './configuration'
import { networkingScenes } from './networking'
import { storageScenes } from './storage'
import { schedulingScenes } from './scheduling'
import { securityScenes } from './security'
import { releasesScenes } from './releases'
import { diagnosisScenes } from './diagnosis'
import { lifecycleScenes } from './lifecycle'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses are added here as each is authored.
const ALL: Scene[] = [...reconciliationScenes, ...apiObjectsScenes, ...podsScenes, ...controllersScenes, ...configurationScenes, ...networkingScenes, ...storageScenes, ...schedulingScenes, ...securityScenes, ...releasesScenes, ...diagnosisScenes, ...lifecycleScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
