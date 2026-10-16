import type { Scene } from '@graphlearning/flow'
import { resourceEffects } from './resource-effects'
import { nodeCapacity } from './node-capacity'
import { placementRules } from './placement-rules'
import { spreadDomains } from './spread-domains'
import { namespaceLimits } from './namespace-limits'
import { hpaLoop } from './hpa-loop'
import { autoscalerKinds } from './autoscaler-kinds'

// Chapter 8 — Scheduling, Resources, and Scaling.
export const schedulingScenes: Scene[] = [
  resourceEffects,
  nodeCapacity,
  placementRules,
  spreadDomains,
  namespaceLimits,
  hpaLoop,
  autoscalerKinds,
]
