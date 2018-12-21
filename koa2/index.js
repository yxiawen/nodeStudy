const  Koa = require('koa')
const  app = new Koa()

// app.use( async ( ctx, next ) => {
//     ctx.body = 'hello koa2'
//     await next()
// })

const middleware = async function(ctx, next) {
    ctx.response.type = 'text/plain';
    await next();
}

const page = async function (ctx, next) {
    ctx.body = ctx.path
}
app.use(middleware);
app.use(page);


app.listen(3001, function(){
    console.log('the demo is start at port 3001');
})