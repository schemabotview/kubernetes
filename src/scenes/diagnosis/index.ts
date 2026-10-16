import type { Scene } from '@graphlearning/flow'
import { evidenceSources } from './evidence-sources'
import { latencySignal } from './latency-signal'
import { requestSpans } from './request-spans'
import { debugTools } from './debug-tools'
import { networkChecks } from './network-checks'
import { failureSignatures } from './failure-signatures'
import { incidentRecord } from './incident-record'

// Chapter 11 — Observability and Evidence-Led Diagnosis.
export const diagnosisScenes: Scene[] = [
  evidenceSources,
  latencySignal,
  requestSpans,
  debugTools,
  networkChecks,
  failureSignatures,
  incidentRecord,
]
