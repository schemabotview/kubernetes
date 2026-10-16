import type { Scene } from '@graphlearning/flow'
import { customResource } from './custom-resource'
import { operatorLoop } from './operator-loop'
import { webhookPath } from './webhook-path'
import { extensionReview } from './extension-review'
import { systemReview } from './system-review'
import { nextSteps } from './next-steps'

// Chapter 13 — Extending Kubernetes and Operating the Whole System.
export const extensibilityScenes: Scene[] = [customResource, operatorLoop, webhookPath, extensionReview, systemReview, nextSteps]
