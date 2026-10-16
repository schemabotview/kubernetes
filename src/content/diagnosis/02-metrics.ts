import type { Section } from '../types'

export const metricsSection: Section = {
  id: 'metrics',
  title: 'Metrics and application symptoms',
  scene: 'latency-signal',
  focus: 'latency-plot',
  slide: `## Metrics and symptoms

Logs say **what** happened to one request. Metrics say **how much**, **how often**, and **since when**.

### Four signals together
- **Latency** — use p95 or p99, not the average
- **Errors** — the rate of failed responses
- **Traffic** — how much demand there is
- **Saturation** — throttling, full connection pools

### Reading the graph
- A **step** at a release points at the change
- A slow climb points at load, a leak, or data growth
- Compare with traffic: same load, slower answers?
- Check the **dependency's** graph before the API's

### Where metrics come from
- The application exposes its own; the cluster adds resource use
- This course names no **vendor** — the signals matter
- Alert on **symptoms** users feel, not every cause`,
  narration:
    "Logs tell you what happened to individual requests. Metrics tell you how much, how often, and since when, which is usually the first thing you need in an incident. Four signals, read together, describe most service problems. Latency, measured as a high percentile such as the ninety-fifth, because an average hides the slow requests users actually notice. Errors, as a rate of failed responses. Traffic, how much demand there is. And saturation, how close a resource is to its limit: CPU throttling, a full database connection pool. Now read the illustrative graph on the left. The catalogue API's ninety-fifth percentile latency sat around one hundred and twenty milliseconds, then stepped up to nearly four hundred, exactly at the release marker. A step at a release points strongly at the change itself. A slow climb would suggest something else: rising load, a memory leak, or growing data. Then compare with traffic. If traffic is unchanged and answers are slower, the cause is inside the system. Metrics come from two places: the application exposes its own, and the cluster adds resource usage. This course names no particular monitoring product, because the signals matter more than the tool.",
}
