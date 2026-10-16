import type { Course } from '../types'
import { podNetworking } from './01-pod-networking'
import { servicesAndEndpointSlices } from './02-services-and-endpointslices'
import { dns } from './03-dns'
import { serviceTypesSection } from './04-service-types'
import { ingress } from './05-ingress'
import { gatewayApi } from './06-gateway-api'
import { tlsAndDiagnosis } from './07-tls-and-diagnosis'

// Chapter 6 — Services, DNS, and External Traffic (KUBERNETES-COURSE-PLAN.md).
export const networking: Course = {
  id: 'networking',
  title: 'Services, DNS, and External Traffic',
  sections: [podNetworking, servicesAndEndpointSlices, dns, serviceTypesSection, ingress, gatewayApi, tlsAndDiagnosis],
}
