const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const jwt = require('koa-jwt')
const errorHandle = require('./middlewares/errorHandle')
const app = new Koa()
const JSON_MIME = 'application/json'
const {
  open
} = require('./lib/db/connect')
const router = require('./routes')
const cors = require('@koa/cors')
const logger = require('./middlewares/log')
const secret = require('./config.js').secret
open()
app.use(logger)
app.use(cors({
  origin: '*'
}))

app.use(bodyParser({
  multipart: true
}))

app.use(staticFiles(path.resolve(__dirname, './uploads'), {
  maxage: 30 * 24 * 60 * 60 * 1000
}))

app.use(async (context, next) => {
  context.type = JSON_MIME
  await next()
})

app.use(router.routes())
app.use(router.allowedMethods())
app.use(errorHandle).use(jwt({
  secret
}).unless({
  path: [/\/register/, /\/login/]
}))

app.listen(4001, () => {
  console.log("application is running at 4001")
})