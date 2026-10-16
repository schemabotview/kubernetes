# kubernetes

**Kubernetes — From Declarative Foundations to Reliable Application Operations**, as a GraphL concept
app: one concept, 13 courses, 88 sections. Served at `graphl.in/kubernetes/`.

- `KUBERNETES-COURSE-PLAN.md` — the syllabus: audience, learning spine, chapters, sources and scope.
- `AUTHORING-PLAN.md` — how the syllabus becomes courses: section ids, the unit of work, the density
  check, and open items.
- `CLAUDE.md` — the invariants, the route contract and the scene inventory.

Scaffolded from [`content-repo-template`](https://github.com/schemabotview/content-repo-template).

## The content model

- **concept ⊃ course ⊃ section.** One chapter of the course plan is one course; a **section** is
  `(scene, slide, narration)` and one segment of the course video.
- **Left = scene, right = slide.** The scene is a declarative react-flow diagram or a code card,
  rendered by `@graphlearning/flow`; the slide is markdown. **Never write x or y.**
- Narration wavs come from a Colab + Chatterbox pass, never by hand:
  `public/audio/<course>/<section-id>.wav`.

## Run it

```sh
npm install
npm run dev          # http://localhost:5173 — routes are #/<course>-<section>
```

## Verifying a change

```sh
npm run build        # must be clean
npx tsc --noEmit     # must be clean
npm run check        # content budgets: card overflow, slide clipping, dead focus, missing wavs
npm run density      # with `npm run dev` running: rendered slide fill and scene fill per section
```

…and **the section looked at in the browser** (`DENSITY_SHOTS=<dir> npm run density` saves a PNG
per section). The commands pass on frames that are visually wrong; the rendered route is the bar.

## Status

All 13 courses (88 sections) are authored: scenes, slides and narration text. **No narration audio
has been generated yet** — that is one Colab + Chatterbox pass per course after review.

| # | course | sections |
| --- | --- | --- |
| 1 | `reconciliation` — Orchestration, Clusters, and Reconciliation | 6 |
| 2 | `api-objects` — The Kubernetes API and Safe Object Workflows | 7 |
| 3 | `pods` — Pods and Application Execution | 7 |
| 4 | `controllers` — Workload Controllers and Replacement | 7 |
| 5 | `configuration` — Configuration, Secrets, and Application Dependencies | 6 |
| 6 | `networking` — Services, DNS, and External Traffic | 7 |
| 7 | `storage` — Persistent State and Stateful Workloads | 7 |
| 8 | `scheduling` — Scheduling, Resources, and Scaling | 7 |
| 9 | `security` — Identity, Policy, and Workload Security | 7 |
| 10 | `releases` — Repeatable Releases and Configuration Management | 7 |
| 11 | `diagnosis` — Observability and Evidence-Led Diagnosis | 7 |
| 12 | `lifecycle` — Cluster Lifecycle, Availability, and Recovery | 7 |
| 13 | `extensibility` — Extending Kubernetes and Operating the Whole System | 6 |
