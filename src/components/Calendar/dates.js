const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* eslint-disable */
function getNearDates(currentDate, n, prevOrNext) {
    const date = prevOrNext === 'prev' ? new Date(currentDate.getTime() - 86400000) : new Date(currentDate.getTime() + 86400000)
    const day = date.getDate();
    const dayShort = daysShort[date.getDay()];

    if (n <= 1) {
        return [{ fulldate: date.toLocaleDateString("lt-LT"), day, dayShort }]
    } else {
        return getNearDates(date, n - 1, prevOrNext).concat({ fulldate: date.toLocaleDateString("lt-LT"), day, dayShort });
    }
}

function getFormattedDate(date) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", options);
}

function getCurrentDates(n) {
    const dates = [];
    const today = new Date(Date.now());

    dates.push(...getNearDates(today, n - 1, 'prev'));

    dates.push({
        fulldate: today.toLocaleDateString("lt-LT"),
        day: today.getDate(),
        dayShort: daysShort[today.getDay()]
    })

    return dates
}

function getDates(date, n, prevOrNext) {
    const dates = [];
    dates.push(...getNearDates(new Date(date), n, prevOrNext));

    if (prevOrNext === 'next') dates.reverse();

    return dates
}

function isDateValid(date) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateFormat.test(date)) {
        return false;
    }

    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
        return false
    }
    return true

}

export { getCurrentDates, getDates, getFormattedDate, isDateValid }