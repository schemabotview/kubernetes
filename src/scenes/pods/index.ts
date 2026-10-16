import type { Scene } from '@graphlearning/flow'
import { podBoundary } from './pod-boundary'
import { podStates } from './pod-states'
import { imagePull } from './image-pull'
import { containerSpec } from './container-spec'
import { initSidecar } from './init-sidecar'
import { probes } from './probes'
import { termination } from './termination'

// Chapter 3 — Pods and Application Execution.
export const podsScenes: Scene[] = [podBoundary, podStates, imagePull, containerSpec, initSidecar, probes, termination]
