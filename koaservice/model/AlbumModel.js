const {
  Albums
} = require('../lib/db/model')

class AlbumModels {
  static async save(obj) {
    await Albums.create(obj)
    return true
  }
  static async queryAlbumname(abumname) {
    return new Promise((resolve, reject) => {
      Albums.find({
        name: abumname
      }, (err, res) => {
        let len = res.length
          if (len >= 1) {
            resolve(true)
          } else {
            resolve(false)
          }
      })
    })
  }
  static async getalbum() {
    return new Promise((resolve, reject) => {
      Albums.find({}, (err, res) => {
        if(err) {
          throw err
        }
        resolve(res)
      })
    })
  }
}

module.exports = AlbumModels