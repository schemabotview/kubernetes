import type { Section } from '../types'

export const configmaps: Section = {
  id: 'configmaps',
  title: 'ConfigMaps through files and environment',
  scene: 'configmap-paths',
  focus: 'ways',
  slide: `## ConfigMaps as environment and files

A **ConfigMap** is a named set of keys. A Pod can receive those keys as **environment variables** or as **files**.

### As environment variables
- One key per variable, or every key at once
- Read by the process **when it starts**
- Simple for a few scalar settings

### As mounted files
- Each key becomes a file in a volume
- Suits structured config such as \`app.yaml\`
- The application can **re-read** it later

### Practical points
- A missing ConfigMap keeps the Pod from **starting**
- Keep it small; it is not a data store
- Reference it by name from the **Pod template**
- Mark it **immutable** when it should never change in place`,
  narration:
    "A ConfigMap is a named set of keys and values in a namespace, and a Pod can receive it in two ways. The first is environment variables. You can map one key to one variable, or load every key as a variable at once. The process reads them when it starts, which is simple and familiar, and works well for a handful of scalar settings like the log level or the database host. The second is files. Mount the ConfigMap as a volume, and each key becomes a file in that directory. That suits structured configuration, such as an app dot yaml with several nested settings, and it has one important property: the application can read the file again later, which matters in the next section. A few practical points. If a Pod references a ConfigMap that does not exist, its containers will not start, and the events will say why. ConfigMaps are meant for small configuration, not for data; there is a size limit, and large content belongs in a volume or a database. And reference the ConfigMap by name from the Pod template of your Deployment, so every replica receives exactly the same configuration.",
}
