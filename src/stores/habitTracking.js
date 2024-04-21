import { defineStore } from 'pinia';
import { useHabitStore } from './habits';
import { getFormattedDate } from '../components/Calendar/dates.js'
import * as Storage from '../components/localStorage.js'

const storageName = 'habit-tracking'

/* eslint-disable */
export const useHabitTrackingStore = defineStore('habitTracking', {
    state: () => {
        return {
            day: '',
            items: []
        }
    },
    getters: {
        formattedDate: (state) => getFormattedDate(state.day)
    },
    actions: {
        setItems() {
            const data = Storage.getData(storageName)
            this.items = data.find((el) => el.date === this.day).items
            this.items.sort((a, b) => a.id - b.id);
        },
        getItems() {
            const data = Storage.getData(storageName)
            const currentDayData = data.find((el) => el.date === this.day)

            if (!currentDayData) {
                this.addNewObject(data)
            } else {
                this.updateItems(data, currentDayData)
            }
            this.setItems()
        },
        addNewObject(data) {
            const habits = useHabitStore()

            const itemArr = habits.items
                .filter((item) => !this.isStopped(item))
                .map((item) => ({ id: item.id, isDone: false }));

            const newData = [...data, { date: this.day, items: itemArr }];
            Storage.save(storageName, newData)
        },
        updateItems(data, currentDayData) {
            const habits = useHabitStore()

            const i = data.indexOf(currentDayData)
            const existingItemIds = currentDayData.items.map((el) => el.id)

            const updatedItems = habits.items
                .filter(item => !this.isStopped(item))
                .map(item => {
                    const isExisting = existingItemIds.includes(item.id)
                    return isExisting ? currentDayData.items.find(el => el.id === item.id) : { id: item.id, isDone: false };
                })

            data[i].items = updatedItems
            Storage.save(storageName, data)
        },
        toggleDone(id) {
            const data = Storage.getData(storageName)
            const currentDayData = data.find((el) => el.date === this.day)
            const i = data.indexOf(currentDayData)

            data[i].items.map((el) => {
                if (el.id === id) el.isDone = !el.isDone
            })

            Storage.save(storageName, data)
            this.setItems()
        },
        remove(id) {
            const data = Storage.getData(storageName)
            const newData = data.map((entry) => ({
                ...entry,
                items: entry.items.filter((item) => item.id !== id),
            }));
            Storage.save(storageName, newData)
        },
        isStopped(item) {
            const time = new Date(this.day).getTime();

            if (item.stops.length === 0) {
                return false;
            }

            for (const stop of item.stops) {
                if (time >= stop.stopped) {
                    if (!stop.resumed || time < stop.resumed) {
                        return true;
                    }
                }
            }

            return false;
        }
    }
})
