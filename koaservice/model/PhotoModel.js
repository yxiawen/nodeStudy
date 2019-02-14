const {PhotoModel} = require ('../lib/db/model.js')

class PhotoModel {
  static saveImg(photo) {
    await PhotoModel.create(photo)
    return true
  }
}