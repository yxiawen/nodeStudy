const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const nunjucks = require('koa-nunjucks-2')
const path = require('path')
const koaStatic = require('koa-static')

app.use(koaStatic(path.resolve(__dirname, "public")))
app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlock: true
  }
}))

router(app);
app.use(bodyParser());
app.listen(3000, () => {
  console.log('projectserver is running at http:localhost:3000')
});