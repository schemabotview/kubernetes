import type { Section } from '../types'

export const criVsImageTools: Section = {
  id: 'cri-vs-image-tools',
  title: 'CRI versus image-building tools',
  scene: 'build-vs-run',
  focus: 'registry',
  slide: `## CRI versus image-building tools

The image you built with Docker runs on Kubernetes unchanged. The **image format** is the contract — not the tool that built it.

### Build time
- Docker, or any OCI builder, produces an **OCI image**
- The image is pushed to a registry by tag and digest

### Run time
- The kubelet speaks the **Container Runtime Interface**
- A CRI runtime such as **containerd** or **CRI-O** pulls and runs it
- Nodes need no Docker daemon at all

### The practical rule
- Debug builds with build tools; debug Pods through **the API**
- Reference images by **digest** when you need the exact bytes
- Docker commands on a node are usually the wrong tool`,
  narration:
    "Coming from the Docker course, it is natural to assume Kubernetes runs Docker underneath. It is cleaner than that. The image you built with Docker runs on Kubernetes unchanged, because what matters is the image format, not the tool that produced it. At build time, Docker, or any builder that produces OCI images, turns your Dockerfile into layers and configuration, and you push the result to a registry, addressed by a tag and, more precisely, by a digest. At run time, the kubelet on each node does not talk to Docker at all. It speaks a narrow interface called the Container Runtime Interface, or CRI, to a runtime such as containerd or CRI-O. That runtime pulls the image from the registry and starts the container as an isolated process. So a node does not need a Docker daemon, and the commands you used to inspect containers on your laptop are usually the wrong tool on a cluster. The practical rule is simple. Use build tools to debug the image you produce. Once it is running, inspect it through the Kubernetes API, where its status, events, and logs are recorded.",
}
