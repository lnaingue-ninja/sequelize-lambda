const SubscriberUserRepo = require('../repositories/SubscriberUserRepo');

module.exports.getOne = async(event) => {
    const { id } = event.parameters.id;
    return await SubscriberUserRepo.findById(criteria);
}

module.exports.getAll = async(event) => {
    let criteria = null;
    if( event.queryStringParameters ) criteria =  event.queryStringParameters;
        return await SubscriberUserRepo.findAndCountAll(criteria);
}