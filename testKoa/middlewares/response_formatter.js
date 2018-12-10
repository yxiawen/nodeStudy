// 在app.use前调用
// 格式化输出
const ApiError = require('../app/error/ApiError')

var response_formatter = async (ctx, next) => {

  // 如果没有返回数据，讲返回数据添加到data中
  if (ctx.body) {
    ctx.body = {
      code: 0,
      message: 'success',
      data: ctx.body
    }
  } else {
    ctx.body = {
      code: 0,
      message: 'success'
    }
  }
}

// 过滤输出

var url_filter = function (pattern) {

  return async function (ctx, next) {
    var reg = new RegExp(pattern);
    //先去执行路由
    try {
      await next();
    } catch (error) {
      // api异常，通过正则验证url，将错误信息返回
      if (error instanceof ApiError && reg.test(ctx.originalUrl)) {
        ctx.status = 200;
        ctx.body = {
          code: error.code,
          message: error.message
        }
      }
      //继续抛，让外层中间件处理日志
      throw error;
    }
    //通过正则的url进行格式化处理
    if (reg.test(ctx.originalUrl)) {
      response_formatter(ctx);
    }
  }
}

module.exports = url_filter