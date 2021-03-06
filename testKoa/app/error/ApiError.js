// 自定义api异常

const ApiErrorNames = require('./ApiErrorNames');

class ApiError extends Error {
  constructor(error_name, error_code) {
    super();
    var error_info = ApiErrorNames.getErrorInfo(error_name);
    this.name = error_name;
    this.code = error_code;
    this.message = error_info.message;
  }
}

module.exports = ApiError;
