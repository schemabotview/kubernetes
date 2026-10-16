import type { Scene } from '@graphlearning/flow'

// §7.6 — three things often called "backup", and the restore test that decides which one is.
export const backupKinds: Scene = {
  id: 'backup-kinds',
  title: 'Which of these is a backup?',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'retained',
      kind: 'list',
      label: 'Retained volume',
      sub: 'the same disk, kept',
      icon: 'harddrive',
      pattern: 'warn',
      items: ['Survives a deleted claim', 'Shares every disk failure', 'Keeps every bad write', 'Not a backup'],
    },
    {
      id: 'snapshot',
      kind: 'list',
      label: 'Volume snapshot',
      sub: 'a point-in-time copy',
      icon: 'copy',
      pattern: 'service',
      items: ['Taken by the CSI driver', 'Crash-consistent at best', 'Often in the same provider', 'Support varies by driver'],
    },
    {
      id: 'logical',
      kind: 'list',
      label: 'Database backup',
      sub: 'application-consistent',
      icon: 'database',
      pattern: 'storage',
      items: ['Made with the database’s tools', 'Stored somewhere independent', 'Portable to a new target', 'Its own retention'],
    },
    {
      id: 'restore-test',
      kind: 'list',
      label: 'Restore test',
      sub: 'what makes it a backup',
      icon: 'circlecheck',
      pattern: 'network',
      items: ['Restore into an isolated target', 'Compare record counts', 'Run real API queries', 'Time how long it took'],
    },
  ],
  edges: [],
}
