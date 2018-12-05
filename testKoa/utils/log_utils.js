var log4js = require('log4js')

var log_config = require('../config/log_config')

// 加载配置文件
log4js.configure(log_config)

var logUtil = {}

var errorLogger = log4js.getLogger('errorLogger')
var resLogger = log4js.getLogger('resLogger')

//封装错误日志
logUtil.logError = function (ctx, error, resTime) {
  if (ctx && error) {
      errorLogger.error(formatError(ctx, error, resTime));
  }
};

//封装响应日志
logUtil.logResponse = function (ctx, resTime) {
  if (ctx) {
      resLogger.info(formatRes(ctx, resTime));
  }
};


