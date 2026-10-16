import type { Course } from '../types'
import { logsEventsStatus } from './01-logs-events-status'
import { metricsSection } from './02-metrics'
import { tracing } from './03-tracing'
import { debuggingPods } from './04-debugging-pods'
import { networkDiagnosis } from './05-network-diagnosis'
import { storageAndSchedulingDiagnosis } from './06-storage-and-scheduling-diagnosis'
import { incidentEvidence } from './07-incident-evidence'

// Chapter 11 — Observability and Evidence-Led Diagnosis (KUBERNETES-COURSE-PLAN.md).
export const diagnosis: Course = {
  id: 'diagnosis',
  title: 'Observability and Evidence-Led Diagnosis',
  sections: [
    logsEventsStatus,
    metricsSection,
    tracing,
    debuggingPods,
    networkDiagnosis,
    storageAndSchedulingDiagnosis,
    incidentEvidence,
  ],
}
