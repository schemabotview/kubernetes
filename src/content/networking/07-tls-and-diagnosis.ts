import type { Section } from '../types'

export const tlsAndDiagnosis: Section = {
  id: 'tls-and-diagnosis',
  title: 'TLS termination and request-path diagnosis',
  scene: 'request-trace',
  focus: 'edge',
  slide: `## TLS and request-path diagnosis

A request crosses several hops. Know **where TLS ends**, then diagnose one hop at a time.

### Where TLS terminates
- Usually at the **Gateway** or Ingress controller
- Traffic after that is plain unless **re-encrypted**
- Certificates live in Secrets referenced by the Gateway
- Expired certificates fail **before** any route matches

### Diagnose in path order
- Does the route show **Accepted** and resolved refs?
- Does the Service have **ready endpoints**?
- Does the API respond on its own via **port-forward**?
- Does the API resolve and reach **its database**?
- Change **one thing**, then retest the same request

### Bridge
- A connected app can now add **durable state** — Chapter 7`,
  narration:
    "Let's trace one request from a browser to the database, and mark where security changes along the way. The client connects over HTTPS to the Gateway, and that is usually where TLS terminates: the Gateway presents the certificate, which is stored in a Secret it references, and decrypts the request. From there, inside the cluster, traffic continues as plain HTTP unless you deliberately re-encrypt it, so know which hops carry clear text. The request then goes from the HTTPRoute to the Service, from the Service to one of its ready endpoints, into an API Pod, and finally the API looks up its database by name. That path is also the order to diagnose in when something fails. First, is the route accepted, with its references resolved? Second, does the Service have ready endpoints? Third, bypass everything in front: port-forward to an API Pod and see whether it answers on its own. Fourth, from the API's side, does the database name resolve, and can it connect? Each answer cuts the search in half. With the API now reachable and connected, the next chapter adds durable state, without confusing network identity with data lifetime.",
}
