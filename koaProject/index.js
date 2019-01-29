const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const static = require('koa-static');
const router = require('./router');

app.use(static(path.resolve(__dirname, "public")))
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
  console.log('server is running at http:localhost:3000')
});