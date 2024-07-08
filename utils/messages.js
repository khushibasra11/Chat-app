const moment = require('moment');

function formatMessage(username, text)
{
    const time = moment().format('h:mm a');
    return {username,text,time};

}

module.exports = formatMessage;