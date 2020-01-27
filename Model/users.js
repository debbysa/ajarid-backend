const Sequelize = require('sequelize') //import sequelize
const sequelize = require('../config/db') //import config/db.js

const users = sequelize.define(
    "users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },username: {
            type: Sequelize.STRING(255)
        },name:{
            type: Sequelize.STRING(255)
        },slug:{
            type: Sequelize.STRING(255)
        },email:{
            type: Sequelize.STRING(255)
        },password:{
            type: Sequelize.STRING(255)
        },role:{
            type: Sequelize.STRING(100)
        },user_type:{
            type: Sequelize.STRING(100)
        },google_id:{
            type: Sequelize.STRING(255)
        },facebook_id:{
            type: Sequelize.STRING(255)
        },avatar:{
            type: Sequelize.STRING(255)
        },status:{
            type: Sequelize.INTEGER
        },about_me:{
            type: Sequelize.STRING(5000)
        },facebook_url:{
            type: Sequelize.STRING(500)
        },twitter_url:{
            type: Sequelize.STRING(500)
        },google_url:{
            type: Sequelize.STRING(500)
        },instagram_url:{
            type: Sequelize.STRING(500)
        },pinterest_url:{
            type: Sequelize.STRING(500)
        },linkedin_url:{
            type: Sequelize.STRING(500)
        },vk_url:{
            type: Sequelize.STRING(500)
        },youtube_url:{
            type: Sequelize.STRING(500)
        },facebook_url:{
            type: Sequelize.STRING(500)
        },token:{
            type: Sequelize.STRING(255)
        },handphone:{
            type: Sequelize.STRING(18)
        },position:{
            type: Sequelize.STRING(115)
        },province_id:{
            type: Sequelize.INTEGER
        },point:{
            type: Sequelize.INTEGER
        },otp:{
            type: Sequelize.INTEGER
        }
    }    
);
     module.exports = users      