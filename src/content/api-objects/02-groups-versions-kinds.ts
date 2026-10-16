import type { Section } from '../types'

export const groupsVersionsKinds: Section = {
  id: 'groups-versions-kinds',
  title: 'API groups, versions, kinds, and schemas',
  scene: 'gvk',
  focus: 'parts',
  slide: `## API groups, versions, and kinds

The first two lines of a manifest tell the API server **which schema** to validate the rest against.

### Reading the header
- **apiVersion** — a group and a version, such as \`apps/v1\`
- Core kinds like Pod and Service use just \`v1\`
- **kind** — the type, such as Deployment
- The server exposes each kind as a **resource** path

### Versions carry promises
- **v1** — stable; fields are not removed casually
- **beta** and **alpha** — may change or disappear
- This course relies on stable APIs in its core path
- Removals are announced as **deprecations**

### Ask the server, not memory
- \`kubectl explain deployment.spec\` reads the served schema
- \`kubectl api-resources\` lists this cluster's kinds`,
  narration:
    "Look at the first two lines of any manifest, because they decide how the rest is read. The apiVersion names a group and a version. For a Deployment that is apps slash v1: the apps group, version one. A handful of the oldest, core kinds, such as Pod and Service, have no group, so they just say v1. Then kind names the type itself. Together they tell the API server which schema to validate your fields against, and the server exposes that kind at a resource path, here deployments, which is what the URL and the permissions actually refer to. Versions are also promises. A stable v1 API keeps its fields; alpha and beta APIs can change shape or disappear between releases, which is why this course keeps its core examples on stable APIs, and why you should record the versions your cluster serves. Finally, do not trust memory, including mine, for exact fields. kubectl explain reads the schema the server actually serves, field by field, and kubectl api-resources lists which kinds this particular cluster supports, including any extensions it has installed.",
}
