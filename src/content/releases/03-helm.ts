import type { Section } from '../types'

export const helm: Section = {
  id: 'helm',
  title: 'Helm package and release orientation',
  scene: 'helm-model',
  focus: 'release',
  slide: `## Helm: packages and releases

**Helm** packages manifests as a versioned **chart** and tracks each installation as a **release** with history.

### Three nouns
- **Chart** — templates plus default values, with a version
- **Values** — your settings for one installation
- **Release** — that installation, with numbered revisions

### Lifecycle
- \`install\`, \`upgrade\`, and \`rollback\` change revisions
- Revision history is stored **in the cluster**
- Values files belong in **source control**

### Using it safely
- Render with \`helm template\` and read the output
- Pin the **chart version**, like a digest
- Know who **maintains** a third-party chart
- A release rollback does not roll back **data**`,
  narration:
    "You will often install software you did not write, such as an ingress controller or a monitoring agent, and much of it is distributed with Helm. This course only orients you to it. Helm has three nouns. A chart is a versioned package: a set of templates that produce manifests, plus default values. Values are your settings for one particular installation, overriding the defaults, kept in a file per environment in source control. A release is one installation of a chart in a cluster, with a name, and every install, upgrade, or rollback creates a new numbered revision, whose history Helm stores in the cluster itself. A few habits keep it safe. Render the chart with helm template and read what it will actually apply, because templates can produce far more than their values suggest. Pin the chart version as carefully as an image digest, since an upgrade can change many objects at once. For a third-party chart, know who maintains it and how quickly they fix problems. And remember the lesson of section five: rolling back a release restores the previous rendered manifests. It does not roll back data or a database migration.",
}
