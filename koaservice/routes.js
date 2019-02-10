const Router = require('koa-router')
const router = new Router()
const User = require('./lib/db/user')
const md5 = require('js-md5')
const jsonwebtoken = require('jsonwebtoken')
const secret = require('./config.js').secret

function getPageParams(context) {
  return {
    pageIndex: parseInt(context.query.pageIndex) || 1,
    pageSize: parseInt(context.query.pageSize) || 10
  }
}

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
        'code': '400',
        'data': {},
        'mesg': '该邮箱已经存在!'
      }
    } else if (queryName) {
      ctx.body = {
        'code': '400',
        'data': {},
        'mesg': '用户名已存在!'
      }
    } else {
      if (pwd !== pwdRe) {
        ctx.body = {
          'code': '400',
          'data': {},
          'mesg': '密码不一致！'
        }
      } else {
        getInfo.password = md5(getInfo.password)
        User.save(getInfo)
        ctx.body = {
          'code': '200',
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
})
router.post('/login', async (ctx, next) => {
  let result = await User.login(ctx.request.body.name, ctx.request.body.password)
  if (result) {
    let userInfo = {}
    userInfo.name = result.name
    userInfo.email = result.email
    userInfo._id = result._id
    ctx.response.body = {
      'code': '200',
      'data': {
        info: userInfo,
        token: jsonwebtoken.sign({
          data: userInfo,
          exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, secret)
      }
    }
  } else {
    ctx.response.body = {
      'code': '400',
      'data': {},
      'mesg': '账户或者密码错误！'
    }
  }
})
router.post('/photogroup/create', async(ctx, next) => {
  ctx.body = {
    data:"创建相册"
  }
})
module.exports = router