import { useSyncExternalStore } from "react"
import { SITE } from "@/lib/site"

export type RuntimeConfig = {
  bookingUrl: string
}

declare global {
  interface Window {
    SITE_CONFIG?: Partial<RuntimeConfig>
  }
}

export const BUILD_CONFIG: RuntimeConfig = {
  bookingUrl: SITE.bookingUrl,
}

let runtime: RuntimeConfig | undefined

// window.SITE_CONFIG comes from /config.js, written by docker/40-site-config.sh at container start.
export function getRuntime() {
  runtime ??= { ...BUILD_CONFIG, ...window.SITE_CONFIG }
  return runtime
}

const subscribe = () => () => {}

export function useConfig() {
  return useSyncExternalStore(subscribe, getRuntime, () => BUILD_CONFIG)
}
