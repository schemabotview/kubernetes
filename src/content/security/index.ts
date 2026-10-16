import type { Course } from '../types'
import { authnAuthzAdmission } from './01-authn-authz-admission'
import { identities } from './02-identities'
import { rbac } from './03-rbac'
import { securityContexts } from './04-security-contexts'
import { networkPolicy } from './05-network-policy'
import { secretProtection } from './06-secret-protection'
import { imageTrustAndTenancy } from './07-image-trust-and-tenancy'

// Chapter 9 — Identity, Policy, and Workload Security (KUBERNETES-COURSE-PLAN.md).
export const security: Course = {
  id: 'security',
  title: 'Identity, Policy, and Workload Security',
  sections: [authnAuthzAdmission, identities, rbac, securityContexts, networkPolicy, secretProtection, imageTrustAndTenancy],
}
