import type { Scene } from '@graphlearning/flow'

// §4.4 — a Job runs to completion and retries failed Pods; the import must survive running twice.
export const jobRetry: Scene = {
  id: 'job-retry',
  title: 'Run to completion, safely twice',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'job',
      kind: 'code',
      filename: 'catalogue-import job (illustrative)',
      label: `kind: Job
spec:
  backoffLimit: 3              # failed Pods before giving up
  activeDeadlineSeconds: 900   # whole Job time budget
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: import
          args: ["--batch=2026-10-15"]   # idempotency key`,
    },
    {
      id: 'effects',
      label: 'If an attempt dies halfway and is retried',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'naive', label: 'Naive insert', sub: 'duplicate rows', pattern: 'warn', icon: 'copy' },
        { id: 'keyed', label: 'Batch key', sub: 'skip rows already loaded', pattern: 'storage', icon: 'key' },
        { id: 'tx', label: 'Transaction', sub: 'all of a batch or none', pattern: 'storage', icon: 'lock' },
        { id: 'record', label: 'Completion', sub: 'Job status, not your data', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'job', target: 'effects', label: 'retry' }],
}
