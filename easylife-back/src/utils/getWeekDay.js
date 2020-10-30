const moment = require('moment');

module.exports = (days) => {
    date = moment();
    while (days > 0) {
        date = date.add(1, 'days');
        if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
            days -= 1;
        }
    }
    return date.format( "YYYY-MM-DD");
}