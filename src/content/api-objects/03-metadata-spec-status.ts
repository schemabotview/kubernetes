import type { Section } from '../types'

export const metadataSpecStatus: Section = {
  id: 'metadata-spec-status',
  title: 'Metadata, spec, and status',
  scene: 'object-anatomy',
  focus: 'status',
  slide: `## Metadata, spec, and status

An object you read back from the API is larger than the manifest you sent. The extra parts tell you **what happened**.

### Three parts
- **metadata** — identity and bookkeeping, partly yours
- **spec** — the desired state you declared
- **status** — what the system observed; never write it yourself

### Fields worth reading
- \`generation\` rises when the spec changes
- \`observedGeneration\` says whether a controller has caught up
- **conditions** carry a type, a status, and a reason

### The comparison
- Same generation, conditions true: **converged**
- Newer generation not yet observed: **still working**`,
  narration:
    "When you read an object back from the API, it is larger than the manifest you sent, and the extra parts are where the evidence lives. Metadata is identity and bookkeeping. You supply the name, the namespace, and labels; the system adds a unique ID, a resource version, owner references, and more. Spec is the desired state you declared. Status is what the system has observed, and it is written by controllers, never by you; if you put a status block in your manifest, it is simply ignored. Three fields make that comparison precise. Generation goes up each time the spec changes. Observed generation, in the status, records which generation the controller has actually processed. And conditions describe the state in small structured records, each with a type, a true or false status, and a reason. So the reading is mechanical. If the observed generation matches the generation, and the conditions you care about are true, the object has converged. If the observed generation lags behind, the controller simply has not caught up yet. That distinction saves a lot of false alarms.",
}
