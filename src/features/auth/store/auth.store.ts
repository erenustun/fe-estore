import { StateCreator } from 'zustand'

interface IToken {
  jwt?: string
  expires?: string
}

export interface IAuthStore {
  token?: IToken
}

const initial = {
  token: undefined
}

export const createAuthStore: StateCreator<IAuthStore> = (set) => ({
  ...initial
})