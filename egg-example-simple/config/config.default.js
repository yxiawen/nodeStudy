'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'test',
    },
    app: true,
    agent: false,
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548298457240_5529';

  // add your config here
  config.middleware = [];
  // 添加 news 的配置项
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  return config;
};
