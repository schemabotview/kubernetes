import type { Scene } from '@graphlearning/flow'
import { podNetwork } from './pod-network'
import { serviceEndpoints } from './service-endpoints'
import { dnsNames } from './dns-names'
import { serviceTypes } from './service-types'
import { ingressModel } from './ingress-model'
import { gatewayRoles } from './gateway-roles'
import { requestTrace } from './request-trace'

// Chapter 6 — Services, DNS, and External Traffic.
export const networkingScenes: Scene[] = [
  podNetwork,
  serviceEndpoints,
  dnsNames,
  serviceTypes,
  ingressModel,
  gatewayRoles,
  requestTrace,
]
