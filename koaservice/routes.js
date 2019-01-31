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
  ctx.response.type = 'json'
  const name = ctx.request.body.name
  const pwd = ctx.request.body.password
  const pwdRe = ctx.request.body.passwordRe
  const email = ctx.request.body.email
  const getInfo = ctx.request.body
  if (name !== '' && pwd !== '' && email !== '' && getInfo !== '') {
    let queryEmail = await User.queryEmail(email)
    let queryName = await User.queryUsername(name)
    if (queryEmail) {
      ctx.response.body = {
        'code': 0,
        'data': {},
        'mesg': '该邮箱已经存在哦'
      }
    } else if (queryName) {
      ctx.body = {
        'code': 0,
        'data': {},
        'mesg': '用户名已存在!'
      }
    } else {
      if (pwd !== pwdRe) {
        ctx.body = {
          'code': 1,
          'data': {},
          'mesg': '密码不一致！'
        }
      } else {
        getInfo.password = require('./lib/crypto').encode(getInfo.password)
        User.save(getInfo)
        ctx.body = {
          'code': 1,
          'data': {},
          'mesg': '保存成功'
        }
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