const AlbumModels = require('../model/AlbumModel')

class albumController {
  // 添加相册
  static async addAlbum(ctx) {
    const auth = ctx.request.body
    if (auth) {
      let albumadd = {}
      albumadd.userId = ctx.user.id
      albumadd.name = ctx.request.body.albumname
      let existAlbum = await AlbumModels.queryAlbumname(albumadd.name)
      if (existAlbum) {
        ctx.body = {
          code: '400',
          status: '已存在相册！'
        }
      } else {
        let createdAlbum = await AlbumModels.save(albumadd)
        if (createdAlbum) {
          ctx.body = {
            code: '200',
            status: '创建相册成功！'
          }
        }
      }
    }
  }
  static async getAlbum(ctx) {
    let albumList = await AlbumModels.getalbum(ctx.user.id)
    console.log(albumList)
    ctx.body = {
      code: '200',
      album: albumList
    }
  }
}

module.exports = albumController