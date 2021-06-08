'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SubscriberUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate () {
            // define association here
        }
    }   
    SubscriberUser.init({
        mysph_hash: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        subscription_name: {
            type: DataTypes.STRING(12)
        },
        status: {
            type: DataTypes.STRING(9)
        },
        status_sfdc: {
            type: DataTypes.STRING
        },
        subscription_creation_date: {
            type: DataTypes.DATEONLY
        },
        subscription_sttdte: {
            type: DataTypes.DATEONLY
        },
        subscription_enddte: {
            type: DataTypes.DATEONLY
        },
        subscription_cttaccptdte: {
            type: DataTypes.DATEONLY
        },
        subscription_cttenddte: {
            type: DataTypes.DATEONLY
        },
        is_fullpayment: {
            type: DataTypes.BOOLEAN
        },
        service_flag_code: {
            type: DataTypes.STRING(1200)
        },
        age_segment: {
            type: DataTypes.STRING(20)
        },
        gender_segment: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'subscriber_users',
        sequelize,
        modelName: 'SubscriberUser',
        underscored: true,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return SubscriberUser;
};