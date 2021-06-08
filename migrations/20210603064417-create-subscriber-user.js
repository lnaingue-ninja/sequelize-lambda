'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subscriber_users', {
       mysph_hash: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING
        },
        subscription_name: {
            type: Sequelize.STRING(12)
        },
        status: {
            type: Sequelize.STRING(9)
        },
        status_sfdc: {
            type: Sequelize.STRING
        },
        subscription_creation_date: {
            type: Sequelize.DATEONLY
        },
        subscription_sttdte: {
           
            type: Sequelize.DATEONLY
        },
        subscription_enddte: {
           
            type: Sequelize.DATEONLY
        },
        subscription_cttaccptdte: {
           
            type: Sequelize.DATEONLY
        },
        subscription_cttenddte: {
           
            type: Sequelize.DATEONLY
        },
        is_fullpayment: {
           
            type: Sequelize.BOOLEAN
        },
        service_flag_code: {
            type: Sequelize.STRING(1200)
        },
        age_segment: {
            type: Sequelize.STRING(20)
        },
        gender_segment: {
            type: Sequelize.STRING(20)
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subscriber_users');
  }
};