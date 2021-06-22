const { SubscriberUser, sequelize } = require('../models');

module.exports.fetchUsers = async(event) => {
    let { criteria, page, limit } = event.queryStringParameters;
    let offset = 0;
    
    criteria = criteria ?  criteria = `WHERE ${criteria}` : '';
    limit = limit ? limit : 10;
    page = (!page || page < 1) ? 1 : page;

    const count = await sequelize.query(`SELECT count(*) as totalrows FROM subscriber_users ${ criteria }`, {  model: SubscriberUser, raw: true });
    const totalpages = Math.ceil(count[0]['totalrows'] / limit);
    
    if (page > totalpages) page = totalpages;
    if (page > 1 ) {
        offset =  ( ( page-1 ) * limit ) + 1;
    }
    limit = page * limit;

    const data = await sequelize.query(`SELECT * FROM subscriber_users ${ criteria } LIMIT ${ offset } , ${ limit }`, {
        model: SubscriberUser,
        mapToModel: false, // pass true here if you have any mapped fields
        raw: true
    });
    return { count, totalpages, data };
}