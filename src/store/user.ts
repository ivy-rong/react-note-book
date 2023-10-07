import { userType } from '@/types'

type State = {
  user: userType
}
type Action = {
  setUser: (data: userType) => void
  clearUser: () => void
}

export const useUserStore = create<State & Action>((set) => ({
  user: {},
  setUser: (data: userType) => set(() => ({ user: data })),
  clearUser: () => set(() => ({ user: {} }))
}))
