const Sequelize = require('sequelize') //import sequelize
const sequelize = require('../config/db') //import config/db.js

const posts = sequelize.define(
    "posts",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },lang_id: {
            type: Sequelize.INTEGER
        },title:{
            type: Sequelize.STRING(500)
        },title_slug:{
            type: Sequelize.STRING(500)
        },keywords:{
            type: Sequelize.STRING(500)
        },summary:{
            type: Sequelize.STRING(5000)
        },content:{
            type: Sequelize.TEXT
        },category_id:{
            type: Sequelize.INTEGER
        },subcategory_id:{
            type: Sequelize.INTEGER
        },image_big:{
            type: Sequelize.STRING(255)
        },image_default:{
            type: Sequelize.STRING(255)
        },image_slider:{
            type: Sequelize.STRING(255)
        },image_mid:{
            type: Sequelize.STRING(255)
        },image_small:{
            type: Sequelize.STRING(255)
        },hit:{
            type: Sequelize.INTEGER
        },optional_url:{
            type: Sequelize.STRING(1000)
        },need_auth:{
            type: Sequelize.INTEGER
        },is_slider:{
            type: Sequelize.INTEGER
        },slider_order:{
            type: Sequelize.INTEGER
        },is_featured:{
            type: Sequelize.INTEGER
        },featured_order:{
            type: Sequelize.INTEGER
        },is_recomended:{
            type: Sequelize.INTEGER
        },is_breaking:{
            type: Sequelize.INTEGER
        },visibility:{
            type: Sequelize.INTEGER
        },show_right_column:{
            type: Sequelize.INTEGER
        },post_type:{
            type: Sequelize.STRING(100)
        },video_path:{
            type: Sequelize.STRING(255)
        },image_url:{
            type: Sequelize.TEXT
        },video_embed_code:{
            type: Sequelize.STRING(255)
        },user_id:{
            type: Sequelize.INTEGER
        },status:{
            type: Sequelize.INTEGER
        },status:{
            type: Sequelize.INTEGER
        },feed_id:{
            type: Sequelize.INTEGER
        },post_url:{
            type: Sequelize.STRING(1000)
        },show_post_url:{
            type: Sequelize.INTEGER
        },image_description:{
            type: Sequelize.STRING(500)
        }
    }    
);
     module.exports = users      