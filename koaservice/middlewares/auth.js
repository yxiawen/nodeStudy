// 检查token中间件
const jwt = require('jsonwebtoken')
const secret = require('../config.js')
const util = require('util')
const verify = util.promisify(jwt.verify)

module.exports = async function (ctx, next) {
  try {
    const token = ctx.header.authorization
    if (token) {
      let payload
      try {
        payload = await verify(token.split(' ')[1], secret.secret) // 解密payload，获取用户名和ID
        ctx.user = {
          name: payload.data.name,
          id: payload.data._id
        }
      } catch (err) {
        console.log('token verify fail: ', err)
      }
    }
    console.log(`token: ${token}`)
  } catch (err) {
    if (err.status === 401) {
      ctx.body = {
        code: -1,
        message: '认证失败'
      }
    } else {
      err.status = 404
      ctx.body = '404'
      console.log('不服就是怼：', err)
    }
  }
  await next()
}