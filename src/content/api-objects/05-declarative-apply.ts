import type { Section } from '../types'

export const declarativeApply: Section = {
  id: 'declarative-apply',
  title: 'Declarative apply, diff, validation, and field ownership',
  scene: 'apply-ownership',
  focus: 'conflict',
  slide: `## Apply, diff, and field ownership

Declarative workflow means the manifest is the record of intent. Preview the change, then let the server **merge** it.

### A safe sequence
- Confirm the **context** and namespace
- Validate with a **server-side dry run**
- Read the **diff** before applying
- Keep manifests in **source control**

### Field ownership
- The server records which **manager** set each field
- Server-side apply refuses to overwrite another manager's field
- \`--force-conflicts\` takes ownership — only on purpose

### Not all apply modes are equal
- Client-side and server-side apply track ownership differently
- \`edit\` and \`replace\` skip the preview`,
  narration:
    "Declarative workflow means the manifest file is your record of intent, and the cluster is asked to make itself match it. The safe sequence has three steps before anything changes. Confirm the context and namespace. Ask the server to validate the change with a dry run, which runs it through the real schema and admission checks without storing it. Then read the diff, which shows exactly which fields would change on the live object. Only then apply. Behind the scenes, the server tracks who set each field, recording a field manager per field. That matters as soon as two writers share an object. Suppose you own the image and ports, and an autoscaler owns the replica count. If your manifest also sets replicas, server-side apply reports a conflict rather than silently overwriting the autoscaler's choice. You can force it, which takes ownership of the field, but that should be a deliberate decision, not a reflex. Be aware, too, that the older client-side apply tracks this differently, and that create, replace, and interactive edits skip the preview habit altogether.",
}
