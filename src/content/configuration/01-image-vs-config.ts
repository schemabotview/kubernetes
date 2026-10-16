import type { Section } from '../types'

export const imageVsConfig: Section = {
  id: 'image-vs-config',
  title: 'Image versus runtime configuration',
  scene: 'config-layers',
  focus: 'artifact',
  slide: `## Image versus runtime configuration

Build **one image** and run it everywhere. What differs between environments arrives at **run time**.

### Four separate things
- **Image** — code and dependencies, identical everywhere
- **ConfigMap** — non-secret settings for this environment
- **Secret** — credentials, with tighter access
- **Service account** — the workload's own identity

### Why keep them apart
- The image you tested is the image you run
- Changing a setting needs **no rebuild**
- Credentials never sit in an image layer or registry

### A quick test
- Could this image run in **staging and production** unchanged?
- If not, something environment-specific leaked into it`,
  narration:
    "The Docker course built an image for the catalogue API. A good rule from here on is: build one image and run it everywhere. Whatever differs between environments should arrive at run time, not be baked in. That separates four things that often get tangled together. The image holds the code, its dependencies, and safe defaults, and it is identical in every environment, referenced by digest. A ConfigMap holds non-secret settings for one environment: the log level, the database host, feature flags. A Secret holds credentials, such as the database password, and is handled with tighter access. And a service account gives the workload an identity of its own, which we introduce later in this chapter. Keeping these apart pays off in three ways. The image you tested is exactly the image you run, because promotion never rebuilds it. Changing a setting needs no new build. And credentials never sit inside an image layer, where anyone who can pull the image could read them. There is a simple test for any image you produce: could it run, unchanged, in both staging and production? If not, something environment-specific has leaked into it.",
}
