import type { Section } from '../types'

export const servicesAndEndpointSlices: Section = {
  id: 'services-and-endpointslices',
  title: 'Service selectors and EndpointSlices',
  scene: 'service-endpoints',
  focus: 'unready',
  slide: `## Services and EndpointSlices

A **Service** is a stable virtual address in front of Pods chosen by a **selector**. EndpointSlices record which Pods are behind it **right now**.

### How it fits together
- The selector picks Pods by label
- A controller writes **ready** Pod IPs into EndpointSlices
- Traffic to the Service is spread across those endpoints

### Ports
- \`port\` — what clients connect to on the Service
- \`targetPort\` — the container's actual port
- Name ports, so a renumbered container needs one edit
- **kube-proxy** or the CNI programs the forwarding

### When there are no endpoints
- The selector matches **no Pods** — check labels
- The Pods match but are **not ready**
- The \`targetPort\` points at the wrong port`,
  narration:
    "A Service gives a changing set of Pods a stable front. It has a fixed virtual IP address and a name, and behind it, a selector chooses which Pods receive its traffic. Between the two sits the EndpointSlice. A controller keeps it up to date with the addresses of the Pods that match the selector and are ready. Traffic sent to the Service is spread across those endpoints. Look at the third Pod on the left. It matches the selector, but it is not ready, so it is not given traffic. That is readiness doing exactly what Chapter 3 promised. Ports need care. The Service's port is what clients connect to, port eighty here. The target port is the port the container actually listens on, eight thousand and eighty. If the two are mixed up, the Service exists, endpoints exist, and every connection still fails. When a Service seems to be dead, check its endpoints first, and then work through three causes. The selector matches no Pods, often a label typo. The Pods match but none is ready. Or the target port does not match the container. Each cause leaves a different piece of evidence.",
}
