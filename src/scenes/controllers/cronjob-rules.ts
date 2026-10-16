import type { Scene } from '@graphlearning/flow'

// §4.5 — the four separate concerns a CronJob mixes: when, overlap, missed runs, history.
export const cronjobRules: Scene = {
  id: 'cronjob-rules',
  title: 'Four separate questions',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'schedule',
      kind: 'list',
      label: 'When',
      sub: 'schedule and time zone',
      icon: 'calendar',
      pattern: 'service',
      items: ['"15 2 * * *" — 02:15 daily', 'timeZone, else the controller’s', 'Each run creates a Job', 'Times are approximate'],
    },
    {
      id: 'overlap',
      kind: 'list',
      label: 'Overlap',
      sub: 'concurrencyPolicy',
      icon: 'copy',
      pattern: 'warn',
      items: ['Allow — runs may overlap', 'Forbid — skip the new run', 'Replace — stop the old run', 'Import Jobs want Forbid'],
    },
    {
      id: 'missed',
      kind: 'list',
      label: 'Missed runs',
      sub: 'the starting deadline',
      icon: 'clock',
      pattern: 'network',
      items: ['Controller down at run time', 'Late start allowed within the deadline', 'Too many misses: none started', 'Not a guaranteed timer'],
    },
    {
      id: 'history',
      kind: 'list',
      label: 'History',
      sub: 'job history limits',
      icon: 'history',
      pattern: 'storage',
      items: ['Keep a few successful Jobs', 'Keep failed ones to diagnose', 'Old Jobs are deleted', 'Logs go with their Pods'],
    },
  ],
  edges: [],
}
