const mongoose = require('mongoose');
// const env = process.env
// const appKey = env.APP_KET || 'default key'
// const appSecret = env.APP_SECRET || 'default secret'
// const nodeEnv = env.NODE_ENV
const dbConnect = mongoose.connection


module.exports = {
  open() {
    mongoose.connect(`mongodb://admin:123456@127.0.0.1:27017/album`, {
      useNewUrlParser: true
    })
    dbConnect.on('open', () => {
      console.log('连接成功！')
    })
    dbConnect.on('error', err => {
      console.log(err)
    })
  },
  close() {
    return mongoose.connection.close()
  }
}