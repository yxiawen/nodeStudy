const {
  Album
} = require('./model')

class albumController {
  // 添加相册
  static async add(ctx) {
    const data = ctx.request.body
    ctx.response.body = {
      code: '200',
      data: '添加相册'
    }
    console.log(data)
    // return Album.create({
    //   userId,
    //   name
    // })
  }
}

module.exports = albumController