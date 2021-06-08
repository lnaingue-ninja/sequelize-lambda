'use strict';
const { formatStrDate } = require('../utilities/DateTime.js');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subscriber_users', [
      {
        mysph_hash: 'WI5/AOc9kavb7YgCCpgHlG5zCYrbGXNiyJ+xyx5feaA=',
        subscription_name: 'A-S00004893',
        status: 'Active',
        status_sfdc: 'Active',
        subscription_creation_date: formatStrDate('27-04-2016'),
        subscription_sttdte: formatStrDate('14-09-2011'),
        subscription_enddte: null,
        subscription_cttaccptdte: formatStrDate('08-02-2016'),
        subscription_cttenddte: null,
        is_fullpayment: null,
        service_flag_code: 'sts|stf|stk|bts|st4|st5|sld|cir_st_online|cir_st_sphone|cir_st_tablet|printsub|st_all|st_online|stp|st_premium',
        age_segment: 'Age 25 - 34',
        gender_segment: 'Female'
      },
      {
        mysph_hash: '+nNAQEZndRzxEPJo2rvY4fAdBbA6gDZAw1IMcyUA5Kg=',
        subscription_name: 'A-S00084103',
        status: 'Active',
        status_sfdc: 'Active',
        subscription_creation_date: formatStrDate('27-04-2016'),
        subscription_sttdte: formatStrDate('18-09-2011'),
        subscription_enddte: null,
        subscription_cttaccptdte: formatStrDate('08-02-2016'),
        subscription_cttenddte: null,
        is_fullpayment: null,
        service_flag_code: 'st4|st5|cir_st_online|cir_st_sphone|cir_st_tablet|printsub|st_all|st_online|stp|st_premium',
        age_segment: 'Age 25 - 34',
        gender_segment: 'Female'
      }
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('subscriber_users', null, {});
  }
};
