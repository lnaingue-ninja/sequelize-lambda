const { SubscriberUser } = require('../models');

module.exports = {
    async findOne ( criteria = null, include = null, attributes = null, sort = null, groupBy = null ){
        let response = { errors: null, data: null };
        try {
            const record = await SubscriberUser.findOne({
                attributes: attributes,
                where: criteria,
                include: include,
                order: sort,
                group: groupBy
            });
            response.data = record;
        } catch (message) {
            console.log(`SubscriberUsmessageepo.findOne() >>> ${message.name} : ${message.message}`);
            response.errors = [{ message: 'Database Processing Failed' }];
        }

        return response;

    },
    async findAndCountAll( criteria = null, attributes = null, sort = null, groupBy = null, limit = 10, offset = 0, distinct = true, include = null, raw = null ){
        let response = {
            errors: null,
            data: {}
        };

        try{
            const records = await SubscriberUser.findAndCountAll({
                attributes: attributes,
                where: criteria,
                order: sort,
                group: groupBy,
                limit: limit,
                offset: offset,
                distinct: distinct,
                include: include,
                raw: raw
            });
            records.totalpages = (records.count) ? Math.ceil(records.count / limit) : 0;
            response.data = records;
        } catch(message) {
            console.log(`SubscriberUsmessageepo.findAndCountAll() >>> ${message.name} : ${message.message}`);
            response.errors = [{ message: 'Database Processing Failed' }];
        }
        return response;
    }
}