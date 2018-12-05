var development_env = require('./development');
var test_env = require('./test');
var pro_env = require('./production');

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
    development: development_env,
    test: test_env,
    production: pro_env
}[process.env.NODE_ENV || 'production']
