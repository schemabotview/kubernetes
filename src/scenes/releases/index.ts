import type { Scene } from '@graphlearning/flow'
import { artifactPromotion } from './artifact-promotion'
import { kustomizeOverlays } from './kustomize-overlays'
import { helmModel } from './helm-model'
import { rolloutHealth } from './rollout-health'
import { rollbackScope } from './rollback-scope'
import { deliveryModels } from './delivery-models'
import { competingWriters } from './competing-writers'

// Chapter 10 — Repeatable Releases and Configuration Management.
export const releasesScenes: Scene[] = [
  artifactPromotion,
  kustomizeOverlays,
  helmModel,
  rolloutHealth,
  rollbackScope,
  deliveryModels,
  competingWriters,
]
