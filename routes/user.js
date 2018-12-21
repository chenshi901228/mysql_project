

var express = require('express');
var router = express.Router();
var User = require('../dao/model/user')

var Img = require('../dao/model/img')

// User.sync().then(function (res) {
//     // 不用手动添加表，自动新增一个表，同步了'User'一个模型
//     // console.log(res)
// })
// Sequelize.sync().then(function (res) {
//     // 同步所有的模型
//     console.log(res)
// })
/* GET home page. */
router.post('/addUser', function (req, res, next) {
    User.create(req.body)
        .then(ok => res.json({ status: 'ok', msg: ok }))
        .catch(e => res.json({ status: 'error', msg: e }));
});

router.post('/findUser', function (req, res, next) {
    User.findAll({
        include: [{ model: Img }]
    })
        .then(ok => res.json({ status: 'ok', msg: ok }))
        .catch(e => res.json({ status: 'error', msg: e }));
});

router.post('/delUser', function (req, res, next) {
    User.destroy({ where: req.body })
        .then(ok => res.json({ status: 'ok', msg: ok }))
        .catch(e => res.json({ status: 'error', msg: e }));
});
module.exports = router;