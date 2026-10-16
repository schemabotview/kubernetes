import type { Scene } from '@graphlearning/flow'
import { apiGates } from './api-gates'
import { identityKinds } from './identity-kinds'
import { rbacScope } from './rbac-scope'
import { podHardening } from './pod-hardening'
import { networkPolicies } from './network-policies'
import { secretDuties } from './secret-duties'
import { supplyAndTenancy } from './supply-and-tenancy'

// Chapter 9 — Identity, Policy, and Workload Security.
export const securityScenes: Scene[] = [
  apiGates,
  identityKinds,
  rbacScope,
  podHardening,
  networkPolicies,
  secretDuties,
  supplyAndTenancy,
]
