import type { Course } from '../types'
import { deploymentOwnership } from './01-deployment-ownership'
import { replicas } from './02-replicas'
import { rollouts } from './03-rollouts'
import { jobs } from './04-jobs'
import { cronjobs } from './05-cronjobs'
import { daemonsets } from './06-daemonsets'
import { choosingAController } from './07-choosing-a-controller'

// Chapter 4 — Workload Controllers and Replacement (KUBERNETES-COURSE-PLAN.md).
export const controllers: Course = {
  id: 'controllers',
  title: 'Workload Controllers and Replacement',
  sections: [deploymentOwnership, replicas, rollouts, jobs, cronjobs, daemonsets, choosingAController],
}
