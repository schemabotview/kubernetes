import type { Scene } from '@graphlearning/flow'

// §6.2 — Service → EndpointSlice → ready Pods. The not-ready Pod matches the selector but is not
// an endpoint that receives traffic, which is readiness doing its job.
export const serviceEndpoints: Scene = {
  id: 'service-endpoints',
  title: 'A stable front for changing Pods',
  flow: 'TB',
  nodes: [
    { id: 'service', label: 'catalogue-api', sub: 'Service · 10.96.12.5', pattern: 'network', icon: 'router' },
    { id: 'slice', label: 'EndpointSlice', sub: 'kept current by a controller', pattern: 'service', icon: 'table' },
    {
      id: 'backends',
      label: 'Pods matching app=catalogue, tier=api',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ready-a', label: 'api-a', sub: 'ready → endpoint :8080', pattern: 'storage', icon: 'circlecheck' },
        { id: 'ready-b', label: 'api-b', sub: 'ready → endpoint :8080', pattern: 'storage', icon: 'circlecheck' },
        { id: 'unready', label: 'api-c', sub: 'not ready → no traffic', pattern: 'warn', icon: 'circleslash' },
        { id: 'port', label: 'targetPort', sub: 'must match the container', pattern: 'service', icon: 'plug' },
      ],
    },
  ],
  edges: [
    { source: 'service', target: 'slice', label: 'selector' },
    { source: 'slice', target: 'backends', label: 'lists ready IPs' },
  ],
}
