interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_PORT: string
  readonly VITE_BASE_API_PROXY: string
  readonly VITE_TASKWARD_BASE_UR: string
  readonly VITE_BRUCE_WORLD_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
