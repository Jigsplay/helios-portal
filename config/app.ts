import { env } from "@/env"

export const APP_NAME = "Helios Portal"

export const APP_COLOR_PRIMARY = "#002dcb"
export const APP_COLOR_SECONDARY = "rgba(255, 113, 11, 1)"
export const APP_THEME_COLOR = APP_COLOR_PRIMARY

export const APP_BASE_URL =
  env.NEXT_PUBLIC_NODE_ENV === "production"
    ? new URL(env.NEXT_PUBLIC_BASE_URL)
    : new URL("http://localhost:3000")

export const EXPLORER_URL = "https://helioschain.network/"
