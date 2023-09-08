import type { Theme } from '@/type'

type State = {
  theme: Theme
}
type Action = {
  // setTheme: () => void
}

export const useUserStore = create<State & Action>(() => ({
  theme: ThemeUtils.getDefaultThemeMode()
  // setTheme: (theme: Theme) => set((state) => ({ theme: Theme }))
}))
