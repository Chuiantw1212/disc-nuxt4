import { defineStore } from "pinia"
import type { IUser } from "~/types/user"

interface UserState {
    user: IUser | null
}

export const useUserStore = defineStore('userStore', {
    state: (): UserState => ({
        user: null,
    }),
    actions: {
        setUser(user: IUser) {
            this.user = user
        },
        clearUser() {
            this.user = null
        },
    },
})
