import type { Scene } from '@graphlearning/flow'

// §3.2 — phase, container state and conditions are three different answers; the STATUS column
// kubectl prints mixes them. A 2×2 of lists, the fourth cell being that display column.
export const podStates: Scene = {
  id: 'pod-states',
  title: 'Three answers to "how is it?"',
  framed: true,
  cols: 2,
  nodes: [
    {
      id: 'phase',
      kind: 'list',
      label: 'Pod phase',
      sub: 'a coarse summary',
      icon: 'layers',
      pattern: 'service',
      items: ['Pending — accepted, not all running', 'Running — bound, a container started', 'Succeeded / Failed — all ended', 'Unknown — node not reporting'],
    },
    {
      id: 'container-state',
      kind: 'list',
      label: 'Container state',
      sub: 'per container',
      icon: 'box',
      pattern: 'network',
      items: ['Waiting, with a reason', 'Running, since a time', 'Terminated, with an exit code', 'lastState: the previous run'],
    },
    {
      id: 'conditions',
      kind: 'list',
      label: 'Conditions',
      sub: 'true or false, with reasons',
      icon: 'circlecheck',
      pattern: 'storage',
      items: ['PodScheduled', 'Initialized', 'ContainersReady', 'Ready — may receive traffic'],
    },
    {
      id: 'display',
      kind: 'list',
      label: 'kubectl STATUS',
      sub: 'a display, not a phase',
      icon: 'terminal',
      pattern: 'warn',
      items: ['ImagePullBackOff — a waiting reason', 'CrashLoopBackOff — a waiting reason', 'Terminating — deletion pending', 'Read the object for detail'],
    },
  ],
  edges: [],
}
