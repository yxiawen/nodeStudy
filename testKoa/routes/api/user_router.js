var router = require('koa-router')();
var user_controller = require('../../app/controllers/user_controller')

router.get('/api/getUser', user_controller.getUser)
router.post('/api/register', user_controller.registerUser)

module.exports = router;