# Authoring plan — Kubernetes

How `KUBERNETES-COURSE-PLAN.md` (13 chapters, 88 sections) becomes this repo's courses. The course
plan says *what* to teach; this file says *how it is authored, measured and handed over*.

## 1. Mapping

- **One chapter = one course.** 13 courses, `src/content/<course>/NN-<section>.ts`, scenes in
  `src/scenes/<course>/`. Route: `#/<course>-<section>`.
- **One numbered item in a chapter = one section** = one slide + one scene + one narration clip.
  88 sections, distributed 6, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 6 exactly as the course plan does.
- The chapter's *Worked illustrations* paragraph is the scene brief; its *Objective*, *Outcome* and
  *Bridge* become the slide lead, the last bullet group and the narration's final sentence.
- Every scene uses the recurring example where the plan does: the catalogue API, its PostgreSQL
  database and the import Job, in one learning namespace. Manifests and outputs on code cards are
  labelled **illustrative** — no cluster was run (the course plan says so, and so must the frames).

| # | course id | sections (ids) | dominant scene shape |
| --- | --- | --- | --- |
| 1 | `reconciliation` ✅ | orchestration-scope · desired-vs-observed · control-plane-and-nodes · component-path · cri-vs-image-tools · environments | bands of 2×2 leaves; hub-and-spoke |
| 2 | `api-objects` | kubeconfig-contexts · groups-versions-kinds · metadata-spec-status · labels-and-selectors · declarative-apply · owners-and-finalizers · inspect-and-cleanup | code card over a band |
| 3 | `pods` | pod-boundaries · lifecycle-states · image-pulls · commands-and-requests · init-and-sidecars · probes · termination | lifecycle timeline; code card |
| 4 | `controllers` | deployment-ownership · replicas · rollouts · jobs · cronjobs · daemonsets · choosing-a-controller | ownership tree; 2×2 comparison lists |
| 5 | `configuration` | image-vs-config · configmaps · secrets · update-propagation · service-accounts · dependency-handling | code card + mount path |
| 6 | `networking` | pod-networking · services-and-endpointslices · dns · service-types · ingress · gateway-api · tls-and-diagnosis | request path, top to bottom |
| 7 | `storage` | ephemeral-volumes · pv-and-pvc · storageclasses-csi · access-and-reclaim · statefulsets · backup-and-restore · managed-state | claim → volume → driver chain |
| 8 | `scheduling` | requests-and-limits · capacity-and-pending · affinity-and-taints · topology-spread · quotas-and-limitranges · horizontal-autoscaling · vertical-and-node-autoscaling | node-capacity `table`; plots |
| 9 | `security` | authn-authz-admission · identities · rbac · security-contexts · network-policy · secret-protection · image-trust-and-tenancy | request through gates |
| 10 | `releases` | digests-and-manifests · kustomize · helm · rollout-evidence · rollback-limits · ci-vs-gitops · drift-and-ownership | overlay stack; two writers |
| 11 | `diagnosis` | logs-events-status · metrics · tracing · debugging-pods · network-diagnosis · storage-and-scheduling-diagnosis · incident-evidence | symptom → evidence → hypothesis |
| 12 | `lifecycle` | responsibility-models · cordon-and-drain · disruption-budgets · control-plane-availability · upgrades-and-skew · backup-scope · recovery-runbooks | responsibility `table`; failure domains |
| 13 | `extensibility` | crds · operators · admission-webhooks · ecosystem-selection · end-to-end-review · limits-and-next-steps | CR → controller → workloads; whole system |

Section ids are proposals; they become permanent once a course has wavs (audio resolves by id).

## 2. The unit of work

Per course, in this order, and the course is handed over whole — never a section at a time:

1. **Scenes** for every section (`src/scenes/<course>/`), registered in the course bundle.
2. **Slides** — `## title`, a one-to-two-sentence lead, then 2–3 `###` groups of 2–5 bullets.
3. **Narration** — flowing prose for the ear, ~170–230 words (~75–95 s), no markdown, no lists
   read aloud. It explains the *reasoning*; the slide carries the *claims*. Ends on the chapter's
   bridge in the last section.
4. **Guards**, then the **density pass** (§3), then screenshots looked at by eye.
5. Commit the course; owner reviews the routes.
6. **Audio** — only after sign-off: one Colab + Chatterbox pass for the course
   (`scripts/colab_generate_audio.ipynb`) → `public/audio/<course>/<id>.wav`. Never by hand. Once
   the first wav lands, `npm run check` requires all of them.
7. Add the course's entry to `scripts/titles.json` (search-first title).

## 3. Density check

Three layers. Each catches what the one before cannot.

| layer | command | what it proves | what it misses |
| --- | --- | --- | --- |
| 1 · build | `npm run build && npx tsc --noEmit` | it compiles | everything visual |
| 2 · model | `npm run check` | no card overflow, no slide over 1000 modelled px, no dead `focus`, no missing wav | density, collisions |
| 3 · rendered | `npm run dev` + `npm run density` | measured fill on the real route, at 1920×1080 | whether it *reads* well |
| 4 · eyes | `DENSITY_SHOTS=<dir> npm run density` → look at every PNG | composition, edge routing, meaning | — |

`scripts/density.mjs` drives the dev server headless (puppeteer + the preinstalled Chromium) and
reports, per section:

| metric | target | lever when it misses |
| --- | --- | --- |
| **slide** — rendered slide height ÷ pane | **80–95 %** | add a real bullet group, or lengthen the lead; trim if `check` fails |
| **bind** — scene bbox on its binding axis ÷ pane | ≥ 0.85 | set by `padding` alone: 0.12 (default) → 0.89, 0.17 → 0.86 |
| **area** — scene bbox w×h ÷ pane | ≥ 0.55 | restack toward ~1:1 — `cols: 2` grids, 2×2 `list` cards, bands stacked `TB` |
| **eyebrow** — nodes within 24 px of the eyebrow | 0 | `padding: 0.17` on boards that bind on height |
| **labels** — edge labels overlapping a leaf | 0 | reorder nodes / shorten or drop the label |

Slide is the firm target; the scene numbers are targets, not thresholds — a deliberately tall
board can sit just under area (as §1.5 does at 0.53).

### What the Chapter 1 pilot established

| section | slide | bind | area | notes |
| --- | --- | --- | --- | --- |
| orchestration-scope | 86 % | 0.89 | 0.59 | |
| desired-vs-observed | 82 % | 0.89 | 0.63 | first draft 59 % / 0.47 — single LR loop row |
| control-plane-and-nodes | 83 % | 0.86 | 0.65 | first draft touched the eyebrow → `padding: 0.17` |
| component-path | 78 % | 0.89 | 0.62 | slide capped by `check` (see below) |
| cri-vs-image-tools | 84 % | 0.86 | 0.53 | tall by design; height-bound |
| environments | 87 % | 0.89 | 0.60 | first draft 0.39 — three lists in one row |

First drafts: 1 of 6 on target. After one density pass: 4 of 6 fully on target, 2 a hair under on
one metric each, with the reason known. That is the loop to repeat per course.

Rules taken from it, for the remaining 82 sections:

- **One row of leaves always fails area** (~0.40–0.48). Flow 1.3's unframed leaves are short, so a
  board that binds on width leaves half the height empty. Default to 2-column grids and stacked
  bands; a 2×2 of `list` cards is the comparison shape.
- **Slides need ~2–3 `###` groups and 8–11 bullets** to reach 80 %. The template's demo slides
  render at 61–72 %.
- **`check`'s ordered-list model over-predicts** by ~150–200 px against the rendered page in
  shell 0.8 (§1.4 renders 842 px and models >1000 with one more bullet). An OL-heavy slide tops out
  near 78 %. Use bullets where order is not the point; recalibrating `LI_W_OL` is a separate change.
- **Leaf `badge` does not render** in flow 1.3 — step numbers must go in the label, the slide, or a
  container badge.
- **`bind` is not a real lever** — it is `1 / (1 + padding)`. The levers are area and eyebrow.

## 4. Sequencing and review

- Chapters in course-plan order — each chapter's bridge assumes the previous one.
- One course per commit; one review per course. Estimated budget per course: one authoring pass,
  one density pass, one fix pass after owner review.
- Every few courses, re-run `npm run density` over **all** courses: a shared scene or an engine bump
  can move frames that already passed.

## 5. Open items for the owner

1. **Pages** — Settings → Pages → Source = GitHub Actions before the first deploy to `main`.
2. **Catalog** — add the listing to `ui-graphl`'s `catalog.json`.
3. **Engine version** — `^1.2.0` resolves to flow **1.3.0**. Its README says fixed 210×96 leaf cards
   are gone (cards size to content), but `check-content.mjs` still models 210×96. The card-overflow
   guard is likely stale; worth confirming against the engine before relying on it.
4. **Course plan cross-references** — `KUBERNETES-COURSE-PLAN.md` points at "README.md" for access
   limits and coverage tracking; that content does not exist in this repo yet.
5. **Brand** — `--brand: #326ce5`, `--accent-2: #fbbf24`; confirm or replace.
