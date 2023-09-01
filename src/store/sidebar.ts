import { create } from 'zustand'
type State = {
  collapsed: boolean
}

type Action = {
  toggleCollapsed: () => void
}

export const useSiderStore = create<State & Action>((set) => ({
  collapsed: false,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed }))
}))
