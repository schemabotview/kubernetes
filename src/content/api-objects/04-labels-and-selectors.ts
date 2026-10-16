import type { Section } from '../types'

export const labelsAndSelectors: Section = {
  id: 'labels-and-selectors',
  title: 'Names, UIDs, labels, selectors, and annotations',
  scene: 'label-selection',
  focus: 'typo',
  slide: `## Names, UIDs, labels, and selectors

Kubernetes connects objects by **query**, not by name. A selector picks whatever currently carries matching labels.

### Identity
- A **name** is unique per kind and namespace, and reusable
- A **UID** is unique for all time; a recreated object gets a new one

### Labels and selectors
- **Labels** are small key–value pairs for grouping
- A **selector** matches every object whose labels agree
- One wrong character, \`catalog\` for \`catalogue\`, and nothing matches

### Annotations
- Free-form metadata for **tools and people**, never for selection
- Use them for owners, links, and change reasons`,
  narration:
    "Kubernetes connects objects by query, not by name, and that is the idea to hold onto in this section. Start with identity. A name is unique for its kind within a namespace, and it can be reused: delete catalogue-api, create it again, and the name is the same. The UID is different. It is unique for all time, so a recreated object is, as far as the system is concerned, a brand new object. Labels are small key and value pairs you attach for grouping, such as app equals catalogue and tier equals api. A selector is a query over those labels. A Service or a Deployment does not keep a list of its Pods; it continuously selects whatever currently carries matching labels. On the left, the selector matches two of four Pods. The database is excluded by its tier label, as intended. The fourth Pod is excluded by a typo, catalog instead of catalogue, and nothing warns you. That one character is a common reason a Service has no endpoints. Annotations look similar but serve a different purpose: free-form notes for tools and people, never used for selection.",
}
