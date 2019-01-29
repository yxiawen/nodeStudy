const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Id: {
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
    index: true,
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
    index: true,
    unique: true
  },
  password: {
    type: String
  }
})

module.exports = {
  User: mongoose.model('user', userSchema)
}