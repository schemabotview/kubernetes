// Density probe — measures the RENDERED route, which is the one thing `npm run check` cannot model.
//
//   npm run dev            # in another shell (http://localhost:5173)
//   npm run density        # every section
//   npm run density -- c1  # sections whose slug starts with "c1"
//
// Reports, per section, against the CLAUDE.md density targets:
//   slide   — slide content height as a share of the ~1080 design-px pane     (target 80–95 %)
//   bind    — scene bounding box on its binding axis, as a share of the pane  (target ≥ 0.85)
//   area    — scene bounding box w×h as a share of the pane                    (target ≥ 0.55)
//   eyebrow — any node under, or within 24px of, the eyebrow label                       (target: none)
//   labels  — an edge label whose box overlaps a node's box                    (target: none)
// Targets, not thresholds: it prints every row and flags misses with ✗, and exits 0 either way. A
// deliberately sparse board can sit under the scene targets; the slide band is the firm one.
import { createRequire } from 'node:module'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const puppeteer = createRequire(import.meta.url)('puppeteer')
const BASE = process.env.DENSITY_URL ?? 'http://localhost:5173/'
const prefix = process.argv[2] ?? ''
const SHOTS = process.env.DENSITY_SHOTS // a directory: also save a 1920×1080 PNG per section

// src/content/<course>/NN-<id>.ts → slug `<course>-<id>` (the shell's slug rule).
const slugs = readdirSync('src/content', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) =>
    readdirSync(join('src/content', d.name))
      .filter((f) => /^\d+-.*\.ts$/.test(f))
      .sort()
      .map((f) => {
        const id = readFileSync(join('src/content', d.name, f), 'utf8').match(/\bid: '([\w-]+)',/)[1]
        return `${d.name}-${id}`
      }),
  )
  .filter((s) => s.startsWith(prefix))

const browser = await puppeteer.launch({
  executablePath: process.env.CHROMIUM ?? '/opt/pw-browsers/chromium',
  args: ['--no-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1920, height: 1080 })

const pct = (v) => `${Math.round(v * 100)}%`.padStart(4)
let misses = 0
console.log('section'.padEnd(48), 'slide  bind  area  eyebrow labels')
for (const slug of slugs) {
  await page.goto(`${BASE}?capture=1#/${slug}`, { waitUntil: 'networkidle0' })
  await page.waitForSelector('.react-flow__node')
  await new Promise((r) => setTimeout(r, 600)) // fitView settles after first paint
  const m = await page.evaluate(() => {
    const R = (e) => e.getBoundingClientRect()
    const hit = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    const pane = R(document.querySelector('.scene-area'))
    const scaler = document.querySelector('.slide-panel__scaler')
    const zoom = parseFloat(scaler.style.zoom || '1')
    const panel = R(document.querySelector('.slide-panel'))
    const nodes = [...document.querySelectorAll('.react-flow__node')].map(R)
    const box = nodes.reduce(
      (b, r) => ({ l: Math.min(b.l, r.left), t: Math.min(b.t, r.top), r: Math.max(b.r, r.right), b: Math.max(b.b, r.bottom) }),
      { l: Infinity, t: Infinity, r: -Infinity, b: -Infinity },
    )
    const w = (box.r - box.l) / pane.width
    const h = (box.b - box.t) / pane.height
    // The eyebrow plus a 24px clearance band under it: a board that stops 5px short of the label
    // does not overlap it, but reads as touching it on screen.
    const e = R(document.querySelector('.reel-head__eyebrow'))
    const eyebrow = { left: e.left, right: e.right, top: e.top, bottom: e.bottom + 24 }
    // Leaves only: a container's box legitimately contains the labels of edges between its children.
    const leaves = [...document.querySelectorAll('.react-flow__node')]
      .filter((n) => !n.className.includes('container'))
      .map(R)
    const labels = [...document.querySelectorAll('.react-flow__edgelabel-renderer > *, .react-flow__edge-textwrapper')]
      .map(R)
      .filter((r) => r.width > 0)
    return {
      // scaler height is in rendered px; divide by zoom for design px, and by the panel for a share.
      slide: R(scaler).height / zoom / (panel.height / zoom),
      bind: Math.max(w, h),
      area: w * h,
      eyebrow: nodes.filter((r) => hit(r, eyebrow)).length,
      labels: labels.filter((l) => leaves.some((n) => hit(l, n))).length,
    }
  })
  if (SHOTS) await page.screenshot({ path: join(SHOTS, `${slug}.png`) })
  const flags = [
    m.slide < 0.8 || m.slide > 0.95,
    m.bind < 0.85,
    m.area < 0.55,
    m.eyebrow > 0,
    m.labels > 0,
  ]
  if (flags.some(Boolean)) misses++
  const f = (bad, s) => (bad ? '✗' : ' ') + s
  console.log(
    slug.padEnd(48),
    f(flags[0], pct(m.slide)),
    f(flags[1], m.bind.toFixed(2)),
    f(flags[2], m.area.toFixed(2)),
    f(flags[3], String(m.eyebrow).padStart(4)),
    f(flags[4], String(m.labels).padStart(4)),
  )
}
await browser.close()
console.log(`\n${slugs.length} section(s), ${misses} off-target`)
