import type { Section } from '../types'

export const secrets: Section = {
  id: 'secrets',
  title: 'Secrets and base64 protection limits',
  scene: 'secret-limits',
  focus: 'protection',
  slide: `## Secrets and their protection limits

A **Secret** is used like a ConfigMap, but marks data as sensitive. Its values are **base64-encoded**, which anyone can reverse.

### What base64 is
- An **encoding** for arbitrary bytes, not encryption
- Anyone who can read the object can read the value

### What actually protects it
- **RBAC** limiting who may get or list Secrets
- **Encryption at rest**, configured for the cluster
- Keeping plain values out of Git and logs

### Using it well
- Mount as files rather than environment where possible
- Use placeholder values in examples — like this one
- Chapter 9 covers access, rotation, and responsibility
- External secret stores are an option, not a requirement`,
  narration:
    "A Secret is consumed much like a ConfigMap, as environment variables or files, but it marks the data as sensitive, and the system treats it a little more carefully. The first thing to understand is what it does not do. Secret values are stored base64-encoded. Base64 is an encoding that lets arbitrary bytes travel as text; it is not encryption, and anyone can decode it in a second. So anyone who can read the Secret object can read the password. Real protection comes from elsewhere. Role-based access control decides who may get or list Secrets in a namespace, and that should be very few people and workloads. Encryption at rest is a cluster setting that protects the stored data in etcd; on a managed cluster, check how your provider handles it. And plain values must stay out of Git and out of logs, which is why mounting a Secret as a file is often safer than putting it into environment variables, since environments leak into crash dumps and debugging output. Every Secret in this course uses placeholder values, like the one on screen. Chapter 9 returns to access, rotation, and who is responsible for each layer.",
}
