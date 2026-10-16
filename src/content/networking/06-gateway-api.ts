import type { Section } from '../types'

export const gatewayApi: Section = {
  id: 'gateway-api',
  title: 'GatewayClass, Gateway, HTTPRoute, and implementation requirements',
  scene: 'gateway-roles',
  focus: 'httproute',
  slide: `## The Gateway API

The **Gateway API** splits the Ingress job across objects owned by **different roles**, so each team edits only its part.

### Three objects
- **GatewayClass** — a kind of gateway, from the provider
- **Gateway** — listeners, ports, and certificates, from operators
- **HTTPRoute** — paths to Services, from the application team

### Still needs an implementation
- These are APIs; an installed **implementation** serves them
- Implementations support different **features**
- Record which one, and which API version, you run

### Reading it
- Route **status** says Accepted and whether refs resolved
- A Gateway's status shows its **listeners** and address`,
  narration:
    "The Gateway API is the newer way to describe traffic entering a cluster, and its main idea is to split the job across objects owned by different roles. A GatewayClass describes a kind of gateway, and comes from whoever provides the infrastructure. A Gateway is an actual entry point: its listeners, ports, host names, and certificates, usually owned by the cluster operators. An HTTPRoute is owned by the application team, and it attaches to a Gateway and routes paths to Services. So the catalogue team can change its own routes without touching the shared entry point, and the operators can manage certificates without editing every application's rules. The lesson from Ingress applies here too. These are APIs, not a proxy. Something must implement them, and an implementation must be installed in your cluster. Different implementations support different features beyond the core, so record which implementation and which API version you are using, and check that a feature is supported before relying on it. When something does not route, read the status. A route reports whether its Gateway accepted it, and whether the Services it references were resolved. Those two conditions answer most questions.",
}
