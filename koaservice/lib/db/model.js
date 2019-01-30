const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    index: true,
    unique: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  lastLogin: {
    type: Date
  },
  name: {
    type: String,
    unique: true
  },
  avatar: {
    type: String
  },
  userType: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
})
const albumSchema = new mongoose.Schema({
  UserId: { //关联用户
    type: String
  },
  name: { //相册名称
    type: String
  }
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
})
const photoSchema = new mongoose.Schema({
  UserId: { //关联用户
    type: String
  },
  url: { //存储照片的地址
    type: String
  },
  isApproved: { //照片审核
    type: Boolean,
    default: null, //未审核状态
    index: true
  },
  albumId: { //相册ID
    type: mongoose.Schema.Types.ObjectId
  },
  isDelete: { //照片是否删除
    type: Boolean,
    default: false
  }
})
module.exports = {
  User: mongoose.model('user', userSchema),
  Phopto: mongoose.model('photo', photoSchema),
  Album: mongoose.model('album', albumSchema)
}