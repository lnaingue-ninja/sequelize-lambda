const moment = require('moment');
module.exports = {
    formatStrDate(date){
        date = moment(date);
        if( !date.isValid() ) return null;
        return moment(date).format('YYYY-MM-DD');
    }
}