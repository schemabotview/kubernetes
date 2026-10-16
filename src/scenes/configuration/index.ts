import type { Scene } from '@graphlearning/flow'
import { configLayers } from './config-layers'
import { configmapPaths } from './configmap-paths'
import { secretLimits } from './secret-limits'
import { propagation } from './propagation'
import { projectedIdentity } from './projected-identity'
import { dependencyBehaviour } from './dependency-behaviour'

// Chapter 5 — Configuration, Secrets, and Application Dependencies.
export const configurationScenes: Scene[] = [
  configLayers,
  configmapPaths,
  secretLimits,
  propagation,
  projectedIdentity,
  dependencyBehaviour,
]
