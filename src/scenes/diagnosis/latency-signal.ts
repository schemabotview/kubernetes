import type { Scene } from '@graphlearning/flow'

// §11.2 — a symptom drawn as data: p95 latency over an hour with a release marker. Illustrative
// numbers; the shape is what is being taught (a step at the deploy, not a gradual climb).
const before = Array.from({ length: 31 }, (_, i) => [i, 120 + 8 * Math.sin(i / 2)] as [number, number])
const after = Array.from({ length: 31 }, (_, i) => [30 + i, 380 + 15 * Math.sin(i / 3)] as [number, number])

export const latencySignal: Scene = {
  id: 'latency-signal',
  title: 'A symptom, measured',
  flow: 'TB',
  padding: 0.17,
  nodes: [
    {
      id: 'latency-plot',
      kind: 'plot',
      label: 'catalogue API p95 latency (illustrative)',
      plot: {
        x: { min: 0, max: 60, step: 10, label: 'minutes' },
        y: { min: 0, max: 500, step: 100, label: 'ms' },
        axes: 'corner',
        series: [
          { kind: 'line', points: [...before, ...after], label: 'p95', color: 'network' },
          { kind: 'segment', from: [30, 0], to: [30, 500], dashed: true, color: 'warn', label: 'release 4f1c' },
        ],
      },
    },
    {
      id: 'signals',
      label: 'Four signals to read together',
      pattern: 'service',
      cols: 2,
      children: [
        { id: 'sig-latency', label: 'Latency', sub: 'p95, not the average', pattern: 'network', icon: 'clock' },
        { id: 'sig-errors', label: 'Errors', sub: 'rate of 5xx responses', pattern: 'warn', icon: 'bug' },
        { id: 'sig-traffic', label: 'Traffic', sub: 'requests per second', pattern: 'user', icon: 'users' },
        { id: 'sig-saturation', label: 'Saturation', sub: 'throttling, connections', pattern: 'service', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'latency-plot', target: 'signals', label: 'correlate with' }],
}
