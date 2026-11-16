import type { InspectContext } from 'node:util'

declare module 'node:util' {
  export type InspectOptionsStylized = InspectContext
}
