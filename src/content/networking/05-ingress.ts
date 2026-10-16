import type { Section } from '../types'

export const ingress: Section = {
  id: 'ingress',
  title: 'Ingress and the controller model',
  scene: 'ingress-model',
  focus: 'no-controller',
  slide: `## Ingress and its controller

An **Ingress** routes HTTP requests by host and path to Services. But the object is only **rules**; something else does the work.

### Two halves
- The **Ingress** object — hosts, paths, backends
- An **Ingress controller** — the proxy that reads them
- An **IngressClass** says which controller owns which Ingress

### The trap
- Kubernetes ships **no** Ingress controller
- Without one, the Ingress is valid and **serves nothing**
- Check that a controller exists and claims the class
- Its **status** shows an address once it is served

### Its place today
- Widely used and stable
- Behaviour beyond the basics varies by **controller**
- Newer designs favour the **Gateway API** — next`,
  narration:
    "A LoadBalancer per Service gets expensive and blunt. Usually you want one entry point that routes HTTP requests to different Services by host name and path. That is what Ingress does. An Ingress object lists rules: requests for catalogue dot example, path slash products, go to the catalogue-api Service on port eighty. Here is the part that catches people. The Ingress object is only rules. Kubernetes itself does not ship anything that reads them. The work is done by an Ingress controller, a proxy you install separately, which watches Ingress objects and configures itself to match. An IngressClass names which controller is responsible for which Ingress. So consider an Ingress applied to a cluster with no controller installed. The API server accepts it, because it is a perfectly valid object. Its status simply never shows an address, and no request is ever served. A valid declaration does not imply working traffic infrastructure. Before debugging your rules, confirm that a controller exists and claims your class. Ingress is widely used and stable, and you will meet it often. Newer designs, though, increasingly use the Gateway API, which is next.",
}
