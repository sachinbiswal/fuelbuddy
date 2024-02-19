import { defineStore } from 'pinia'

export interface UserDataType {email: string, userId: string, name: string}

export const useDataStore = defineStore('userData', {
    state: ():{userInfo: UserDataType} => ({ userInfo: {
      email: '', userId: '', name: ''
    }}),
    getters: {
      getUserCredential: (state) => { return state.userInfo }
    },
    actions: {
      setUserCredential(data: UserDataType) {
        this.$state.userInfo = data
      },
    },
  })