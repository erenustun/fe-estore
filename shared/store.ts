import { create } from 'zustand'
import { createAuthStore, IAuthStore } from '@feature/auth/store/auth.store'

export const useZustand = create<IAuthStore>()((...a) => ({
  ...createAuthStore(...a)
}))