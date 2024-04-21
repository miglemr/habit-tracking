export function getData(name) {
    try {
        const storedData = JSON.parse(localStorage.getItem(name))
        return storedData
    } catch (error) {
        console.error('Error retrieving data from localStorage', error)
        return []
    }
}

export function save(name, data) {
    try {
        localStorage.setItem(name, JSON.stringify(data))
    } catch (error) {
        console.error('Error saving data to localStorage', error);
    }
}