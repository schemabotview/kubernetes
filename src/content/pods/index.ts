import type { Course } from '../types'
import { podBoundaries } from './01-pod-boundaries'
import { lifecycleStates } from './02-lifecycle-states'
import { imagePulls } from './03-image-pulls'
import { commandsAndRequests } from './04-commands-and-requests'
import { initAndSidecars } from './05-init-and-sidecars'
import { probesSection } from './06-probes'
import { terminationSection } from './07-termination'

// Chapter 3 — Pods and Application Execution (KUBERNETES-COURSE-PLAN.md).
export const pods: Course = {
  id: 'pods',
  title: 'Pods and Application Execution',
  sections: [podBoundaries, lifecycleStates, imagePulls, commandsAndRequests, initAndSidecars, probesSection, terminationSection],
}
