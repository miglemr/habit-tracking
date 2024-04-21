import { defineStore } from 'pinia';
import * as Storage from '../components/localStorage.js'

const storageName = 'habit-list'

/* eslint-disable */
export const useHabitStore = defineStore('habits', {
    state: () => {
        return {
            items: Storage.getData(storageName),
            itemToDelete: null
        }
    },
    getters: {
        item: (state) => {
            return (id) => state.items.filter((el) => el.id === id)
        },
    },
    actions: {
        getText(id) {
            return this.item(id)[0].text
        },
        add(text) {
            const lastItemID = this.items.length !== 0 ? this.items[this.items.length - 1].id + 1 : 1
            this.items.push({ id: lastItemID, text: text, stops: [] })
            Storage.save(storageName, this.items)
        },
        edit(id, text) {
            this.item(id)[0].text = text
            Storage.save(storageName, this.items)
        },
        remove(id) {
            this.items = this.items.filter((el) => el.id !== id)
            Storage.save(storageName, this.items)
        },
        stop(id) {
            this.item(id)[0].stops.push({
                stopped: new Date(Date.now()).getTime(), resumed: false
            })
            Storage.save(storageName, this.items)
        },
        resume(id) {
            const lastIndex = this.item(id)[0].stops.length - 1
            this.item(id)[0].stops[lastIndex].resumed = new Date(Date.now()).getTime()
            Storage.save(storageName, this.items)
        },
        isItemStoped(id) {
            if (this.item(id)[0].stops.length === 0) return false

            const lastIndex = this.item(id)[0].stops.length - 1
            if (this.item(id)[0].stops[lastIndex].resumed) {
                return false
            } else {
                return true
            }
        }
    },
})

