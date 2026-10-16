import type { Section } from '../types'

export const dns: Section = {
  id: 'dns',
  title: 'DNS and namespace-qualified names',
  scene: 'dns-names',
  focus: 'other-ns',
  slide: `## DNS and namespace-qualified names

Cluster DNS gives every Service a **name**. Clients use the name, never an IP address.

### Name forms
- \`postgres\` — works from the **same** namespace
- \`postgres.catalogue\` — works from any namespace
- \`postgres.catalogue.svc.cluster.local\` — fully qualified

### What a lookup returns
- A normal Service — its one **virtual IP**
- A **headless** Service — the ready Pod IPs directly
- No answer — no such Service in that namespace
- DNS answers are **cached** by clients for a while

### For the catalogue API
- Set \`DB_HOST\` to \`postgres.catalogue.svc\`
- Unambiguous, even if the API moves namespace
- Test from a Pod: \`nslookup postgres.catalogue.svc\`
- A DNS failure is often **CoreDNS** or a NetworkPolicy`,
  narration:
    "Clients should find Services by name, and cluster DNS provides those names automatically. Every Service gets a DNS name built from the Service name and its namespace. From a Pod in the same namespace, the short name works: just postgres. From another namespace, you need at least the namespace too: postgres dot catalogue. The longest form, ending in svc dot cluster dot local, is fully qualified and works from anywhere in the cluster. The short form only works because each Pod's resolver searches its own namespace first, which is convenient, and also a source of confusion when the same Service name exists in two namespaces. What the lookup returns depends on the Service. A normal Service returns its single stable virtual IP. A headless Service, one with no cluster IP, returns the addresses of its ready Pods directly, which is useful when clients need to reach specific Pods, as databases in a StatefulSet sometimes do. No answer at all usually means the name, or the namespace, is wrong. For the catalogue API, set its database host to postgres dot catalogue dot svc. That is unambiguous, and it keeps working even if the API later runs in another namespace.",
}
