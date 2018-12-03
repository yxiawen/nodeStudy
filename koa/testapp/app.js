const Koa = require('koa')

// 导入controller middleware:
const controller = require('./controller');


// const fn_router = require('koa-router');
// const router = fn_router();
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const app = new Koa()
const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function(n) {
            return '0x' + n.toString(16);
        }
    }
});


// 使用middleware:
app.use(controller());

// add bodyParser
app.use(bodyParser());
// add router middleware:
app.use(router.routes());


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');