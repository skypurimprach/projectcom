import { defineStore } from 'pinia'

interface state {
    openSidebar: boolean
}

export const useIndexStore = defineStore('index', {
    state: (): state => ({
        openSidebar: false,
    }),
})
