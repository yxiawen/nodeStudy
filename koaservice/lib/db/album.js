const {
  Albums
} = require('./model')

class albumController {
  // 添加相册
  static async addAlbum(ctx) {
    const auth = ctx.request.body
    if (auth) {
      let albumadd = {}
      albumadd.userId = ctx.user.id
      albumadd.name = ctx.request.body.albumname
      console.log(albumadd)
      this.save(albumadd).then((res) => {
        ctx.response.body = {
          code: '200',
          data: '添加相册成功！'
        }
      }).catch((err) => {
        ctx.response.body = {
          code: '400',
          data: '添加相册失败！'
        }
      })
    }
  }
}

module.exports = albumController