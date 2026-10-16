import type { Section } from '../types'

export const upgradesAndSkew: Section = {
  id: 'upgrades-and-skew',
  title: 'Upgrades, API deprecation, and version skew',
  scene: 'upgrade-plan',
  focus: 'deprecations',
  slide: `## Upgrades, deprecations, and skew

Kubernetes releases regularly, and each version is supported for a limited time. Upgrading is **routine**, so plan it.

### Start with an inventory
- Control-plane, kubelet, and kubectl versions
- Add-ons: CNI, CSI, Gateway, charts, operators

### Upgrade in order
- Control plane **first**, then node pools
- One **minor** version at a time; never skip

### Respect version skew
- A kubelet may lag the control plane, never lead it
- Read the **current** skew policy; do not memorise it

### Deprecated APIs
- Removed APIs make old manifests **fail** to apply
- Find and migrate them **before** the upgrade`,
  narration:
    "Kubernetes releases new minor versions regularly, and each one is supported for a limited period, so upgrading is routine work rather than a rare event, and it deserves a plan. Start with an inventory of what is actually running: the control-plane version, the version of every kubelet, the kubectl versions people use, and every add-on, including the network and storage plugins, the Gateway implementation, Helm charts, and operators. Add-ons often have their own compatibility ranges. Then the order. Upgrade the control plane first, then the node pools, one minor version at a time. Skipping minor versions is not supported. Version skew is the rule about how far components may differ during that process. A kubelet may lag behind the control plane by a limited number of versions, but must never be newer than it. The exact window has changed over the years, so read the current policy each time rather than memorising a matrix. Finally, deprecated APIs. When a version removes an API, manifests that still use it simply fail to apply, and charts or operators that use it break. Find and migrate those before upgrading, not after.",
}
