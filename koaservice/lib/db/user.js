const {
  User
} = require('./model')
const {
  encode,
  decode
} = require('../crypto')
const md5 = require('js-md5')

module.exports = {
  //查询
  query(obj = {}) {
    return new Promise((resolve, reject) => {
      User.find(obj, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  queryEmail(useremail) {
    return new Promise((resolve, reject) => {
      User.find({
        email: useremail
      }, (err, res) => {
        if (err) {
          reject(err)
        }
        let len = res.length
        if (len >= 1) {
          //存在
          resolve(res)
        } else {
          //不存在
          resolve(null)
        }
      })
    })
  },
  queryUsername(username) {
    return new Promise((resolve, reject) => {
      User.find({
        name: username
      }, (err, res) => {
        if (err) {
          reject(err)
        }
        let len = res.length
        if (len >= 1) {
          resolve(res)
        } else {
          resolve(null)
        }
      })
    })
  },
  save(obj) {
    // let newUser = new User(obj)
    return new Promise((resolve, reject) => {
      User.create(obj, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
        // console.log(res)
      })
    })
  },
  getNextSequenceValue(sequenceName) {
    let sequenceDocument = User.findAndModify({
      query: {
        _id: sequenceName
      },
      update: {
        $inc: {
          sequence_value: 1
        }
      },
      'new': true
    })
    return sequenceDocument.sequence_value
  },
  login(loginInput, password) {
    return new Promise((resolve, reject) => {
      User.findOne({
        password: md5(password),
        '$or': [{
            name: loginInput
          },
          {
            email: loginInput
          }
        ]
      }, (err, res) => {
        if (err) {
          reject(err)
        } else {
          if (res) {
            //存在
            resolve(res)
          } else {
            resolve(null)
          }
        }
      })
    })
  }
}