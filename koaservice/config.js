const env = process.env
const appKey = env.APP_KET || 'default key'
const appSecret = env.APP_SECRET || 'default secret'
const nodeEnv = env.NODE_ENV
const secret = 'myalbum_secret'
let db = {
  name: 'mongodb://127.0.0.1:27017/album',
  user: 'admin',
  password: '123456'
}
if (nodeEnv === 'production') {
  db = {
    name: 'mongodb://127.0.0.1:27017/album',
    user: 'admin',
    password: '123456'
  }
}
module.exports = {
  appKey,
  appSecret,
  db,
  secret
}