import type { Section } from '../types'

export const tracing: Section = {
  id: 'tracing',
  title: 'Tracing and request correlation orientation',
  scene: 'request-spans',
  focus: 'span-db',
  slide: `## Tracing and request correlation

A metric says requests are slow. A **trace** says where the time went for **one** request.

### Request IDs
- Assign an ID at the edge; pass it on every hop
- Log it on **every** line about that request
- One ID then joins Gateway, API, and database logs

### Spans
- Each hop records a **span** with a start and duration
- Spans nest: the API handler contains the query
- The example: **360 ms** of 390 ms is one query
- The likely cause: a changed query or a lost **index**

### Orientation only
- Tracing needs the application to **propagate** context
- Open standards exist; adopt one, not a bespoke format
- Start with request IDs — they pay off on day one
- Sample traces; recording every request is costly`,
  narration:
    "A latency metric tells you requests got slower. It does not tell you where the time went. For that, you follow one request through the system. The simplest version is a request ID. The Gateway assigns an identifier to each incoming request, every component passes it along on its outgoing calls, and every log line about that request includes it. Then a single search for one ID joins the Gateway, API, and database logs into a single story. That alone is worth doing on the first day. Tracing goes a step further. Each hop records a span: what it did, when it started, and how long it took. Spans nest, so the API handler's span contains the database query's span. Look at the example. Of three hundred and ninety milliseconds, the Gateway took four, serialising the response took six, and one database query took three hundred and sixty. That is a precise lead: the release from the previous section probably changed a query or removed an index. This is orientation, not a full course. Tracing requires the application to propagate context on every call, and open standards exist for it, so adopt one rather than inventing a format of your own.",
}
