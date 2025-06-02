// PACKAGES
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthStoreValues = {
  accessToken: string | null
  refreshToken: string | null
  user: object | null
}
type AuthStore = AuthStoreValues & {
  logout: () => void
  setAccessToken: (accessToken: string) => void
  setAuthStore: (newState: AuthStoreValues) => void
}
export default create<AuthStore>()(
  persist(
    (set) => {
      const initialValues = {
        accessToken: null,
        refreshToken: null,
        user: null
      }
      return {
        ...initialValues,
        logout: () => {
          set(initialValues)
        },
        setAccessToken: (accessToken) => set({ accessToken }),
        setAuthStore: (newState) => set(newState)
      }
    },
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
