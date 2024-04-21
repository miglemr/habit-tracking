import { defineStore } from 'pinia';

/* eslint-disable */
export const useModesStore = defineStore('modes', {
    state: () => {
        return {
            add: false,
            edit: false,
            delete: false
        }
    }
})

