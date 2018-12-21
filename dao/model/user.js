
var db = require('./defineModel')
var Sequelize = require('sequelize');

var Img = require('./img')

var User = db.defineModel('user', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    gener: Sequelize.STRING,
});

User.belongsTo(Img)

User.sync().then(res => { })
module.exports = User


