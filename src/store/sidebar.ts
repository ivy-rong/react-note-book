import { create } from 'zustand'
type State = {
  collapsed: boolean
  hasSider: boolean
}

type Action = {
  toggleCollapsed: () => void
  toggleHasSider: () => void
}

export const useSiderStore = create<State & Action>((set) => ({
  collapsed: false,
  hasSider: true,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  toggleHasSider: () => set((state) => ({ hasSider: !state.hasSider }))
}))
