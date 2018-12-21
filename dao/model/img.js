
var db = require('./defineModel')
var Sequelize = require('sequelize');


var Img = db.defineModel('img', {
    url: Sequelize.STRING,
});

Img.sync().then(res => { })
module.exports = Img


