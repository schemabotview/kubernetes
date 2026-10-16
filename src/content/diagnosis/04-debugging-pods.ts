import type { Section } from '../types'

export const debuggingPods: Section = {
  id: 'debugging-pods',
  title: 'Debugging Pods and previous containers',
  scene: 'debug-tools',
  focus: 'not-fix',
  slide: `## Debugging Pods

Sometimes you need to look **inside** a running Pod. The tools are powerful, which is exactly why they need care.

### The tools
- \`logs --previous\` — the crashed container's last words
- \`exec\` — run a command in a running container
- \`debug\` — attach a **temporary** container with tools
- \`port-forward\` — test the Pod directly, bypassing Services

### Why debug containers
- Minimal images have **no shell** to exec into
- A debug container shares the Pod's process namespace

### Cautions
- A change made by hand is **not** a fix — it vanishes on replacement
- \`exec\` is a powerful **RBAC** grant; give it sparingly
- Secrets are visible inside; remove debug Pods afterwards`,
  narration:
    "Sometimes the evidence outside a Pod is not enough, and you need to look inside it. The tools are powerful, and that is exactly why they need care. The previous flag on kubectl logs shows the last output of a container that crashed, which is often the error message you need. kubectl exec runs a command inside a running container, such as checking a file or making a request from inside the Pod's network. But hardened images, like the ones Chapter 9 recommended, often contain no shell at all. That is what kubectl debug is for: it attaches a temporary container, from an image that does have tools, to the running Pod, and can share its process namespace so you can see the application's processes. And port-forward lets you test one Pod directly, bypassing the Service and the Gateway. Now the cautions. Anything you change by hand inside a container is not a fix. The next replacement will not have it, so the real fix goes into the image or the manifest. Exec access is a powerful permission; anyone with it can read whatever the container can, including mounted Secrets and environment variables. Grant it sparingly, and remove debug Pods when you are done.",
}
