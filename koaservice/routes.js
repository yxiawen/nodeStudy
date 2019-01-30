const Router = require('koa-router')
const router = new Router()
const User = require('./lib/db/user')

function getPageParams(context) {
  return {
    pageIndex: parseInt(context.query.pageIndex) || 1,
    pageSize: parseInt(context.query.pageSize) || 10
  }
}

router.post('/login', async (ctx, next) => {
  // const code = context.query.code
  // ctx.logger.info(`[login] 用户登陆Code为${code}`)
  ctx.body = {
    status: 0,
    data: '登录'
  }
})
router.post('/register', async (ctx, next) => {
  const name = ctx.query.name
  const pwd = ctx.query.password
  const email = ctx.query.email
  const getInfo = ctx.request.body
  if (name !== '' && pwd !== '' && email !== '' && getInfo !== '') {
    let queryEmail = await User.queryEmail(email)
    if (queryEmail) {
      ctx.body = {
        'code': 0,
        'data': {},
        'mesg': '该邮箱已经存在哦'
      }
    } else {
      await User.save(getInfo)
      ctx.body = {
        'code': 1,
        'data': {},
        'mesg': '保存成功'
      }
    }
  } else {
    ctx.body = {
      status: 400,
      data: '用户名邮箱密码不能为空！'
    }
  }
  // ctx.logger.info(`[login] 用户登陆Code为${code}`)
  // ctx.body = {
  //   status: 0,
  //   data: '注册'
  // }
})
module.exports = router