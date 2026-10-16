import type { Course } from '../types'
import { requestsAndLimits } from './01-requests-and-limits'
import { capacityAndPending } from './02-capacity-and-pending'
import { affinityAndTaints } from './03-affinity-and-taints'
import { topologySpread } from './04-topology-spread'
import { quotasAndLimitRanges } from './05-quotas-and-limitranges'
import { horizontalAutoscaling } from './06-horizontal-autoscaling'
import { verticalAndNodeAutoscaling } from './07-vertical-and-node-autoscaling'

// Chapter 8 — Scheduling, Resources, and Scaling (KUBERNETES-COURSE-PLAN.md).
export const scheduling: Course = {
  id: 'scheduling',
  title: 'Scheduling, Resources, and Scaling',
  sections: [
    requestsAndLimits,
    capacityAndPending,
    affinityAndTaints,
    topologySpread,
    quotasAndLimitRanges,
    horizontalAutoscaling,
    verticalAndNodeAutoscaling,
  ],
}
