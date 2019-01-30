const {
  User
} = require('./model')

module.exports = {
  //查询
  async query(obj = {}) {
    await new Promise((resolve, reject) => {
      User.find(obj, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  async queryEmail(useremail) {
    await new Promise((resolve, reject) => {
      User.find({
        email: useremail
      }, (err, res) => {
        if (err) {
          reject(err)
        }
        let len = res.length
        if (len > 1) {
          //存在
          resolve(res)
        } else {
          //不存在
          resolve(null)
        }
      })
    })
  },
  async save(obj) {
    // let newUser = new User(obj)
    await new Promise((resolve, reject) => {
      User.create(obj, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
        console.log(res)
      })
    })
  }
}