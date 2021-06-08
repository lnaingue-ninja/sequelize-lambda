const SubscriberUserRepo = require('../repositories/SubscriberUserRepo');

/** Sample:
 * const { mysph_hash, subscription_name, status, status_sfdc, is_fullpayment, service_flag_code } = event.pathParameters;
    let criteria = {};
    if(mysph_hash) criteria.mysph_hash = mysph_hash;
    if(subscription_name) criteria.subscription_name = subscription_name;
    if(status) criteria.status = status;
    if(status_sfdc) criteria.status_sfdc = status_sfdc;
    if(is_fullpayment) criteria.is_fullpayment = is_fullpayment;
    if(service_flag_code) criteria.service_flag_code = service_flag_code;
 */

module.exports.getOne = async(event) => {
    return await SubscriberUserRepo.findOne(event.pathParameters);
}

module.exports.getAll = async(event) => {
    return await SubscriberUserRepo.findAndCountAll(event.queryStringParameters);
}