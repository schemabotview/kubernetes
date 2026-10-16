import type { Section } from '../types'

export const cronjobs: Section = {
  id: 'cronjobs',
  title: 'CronJobs, scheduling, and concurrency limits',
  scene: 'cronjob-rules',
  focus: 'overlap',
  slide: `## CronJobs and concurrency limits

A **CronJob** creates a Job on a schedule. Four separate settings decide what actually runs.

### When
- A cron expression, such as \`15 2 * * *\` for 02:15
- Set \`timeZone\` rather than assuming the controller's

### Overlap
- **Allow**, **Forbid**, or **Replace** a run still in progress
- A nightly import should usually **Forbid** overlap

### Missed runs
- If the controller was down, a run may start **late** or not at all
- \`startingDeadlineSeconds\` bounds how late is acceptable

### History
- Keep a few finished Jobs to read their status and logs
- \`suspend: true\` pauses future runs without deleting it`,
  narration:
    "A CronJob creates a Job on a schedule, like the cron table on a Linux machine. It looks simple, but it bundles four separate questions, and it helps to answer each one deliberately. First, when. The schedule is a cron expression, so fifteen, two, star, star, star means quarter past two every day. Set the time zone explicitly rather than inheriting whatever the controller uses. Second, overlap. If last night's import is still running when tonight's is due, should both run, should tonight's be skipped, or should last night's be stopped and replaced? That is the concurrency policy: allow, forbid, or replace. For an import that writes to the same tables, forbid is usually the safe answer. Third, missed runs. The schedule is not a guaranteed timer. If the controller was unavailable at two fifteen, the run may start late, or, if too many were missed, not at all. A starting deadline bounds how late is still acceptable. Fourth, history. Each run leaves a Job behind, and limits decide how many successful and failed ones to keep, which matters because those Jobs, and their Pods' logs, are your evidence of what happened.",
}
