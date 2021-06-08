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
            console.log(`SubscriberUserRepo.findOne() >>> ${message.name} : ${message.message}`);
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
            const record = await SubscriberUser.findAndCountAll({
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
            const pages = (record.count) ? Math.ceil(record.count / limit) : 0;
            response.data = {
                count: record.count,
                pages: pages,
                rows: record.rows
            };

        } catch(message) {
            console.log(`SubscriberUserRepo.findAndCountAll() >>> ${message.name} : ${message.message}`);
            response.errors = [{ message: 'Database Processing Failed' }];
        }
        return response;
    }
}