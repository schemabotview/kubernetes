import type { Section } from '../types'

export const jobs: Section = {
  id: 'jobs',
  title: 'Jobs, retries, and idempotency',
  scene: 'job-retry',
  focus: 'keyed',
  slide: `## Jobs, retries, and idempotency

A **Job** runs Pods until a task **completes**, retrying failures. The catalogue import is a Job, not a Deployment.

### How a Job behaves
- Counts successful completions, not running Pods
- \`backoffLimit\` caps failed attempts
- \`activeDeadlineSeconds\` caps the whole Job's time

### Retries repeat effects
- An attempt can die **halfway** through the import
- A naive retry inserts the same rows **twice**
- Use a **batch key** or a transaction boundary

### Reading the outcome
- Job complete means the process **exited zero**
- Verify the **data**: row counts, a sample query

### Parallel work
- \`completions\` and \`parallelism\` split a large task
- Each piece must be safe to retry on its own`,
  narration:
    "Not every workload should run forever. The catalogue import loads a batch of products and then it is finished, so it is a Job, not a Deployment. A Job runs Pods until a task completes. It counts successful completions rather than running Pods, and when a Pod fails, it starts another, up to a back-off limit. An active deadline caps the whole Job's running time, so a stuck import does not run all night. Retrying is where Jobs need real design thought. An attempt can die halfway through: the node is lost, or the Pod is evicted, after five thousand of ten thousand rows were written. The Job will retry, faithfully, and a naive import will insert those first five thousand rows a second time. Kubernetes cannot prevent that. The import has to be idempotent: safe to run more than once. Give each batch a key and skip rows already loaded under it, or load a batch inside a single transaction, so an attempt either commits completely or not at all. Finally, read the outcome carefully. A complete Job means the process exited with status zero. To know the import worked, check the data itself.",
}
