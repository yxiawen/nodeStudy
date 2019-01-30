const util = require('../util/util.js')
const axios = require('axios')

module.exports = {
  index: async (ctx, next) => {
    if (ctx.state.token) {
      ctx.status = 302
      ctx.redirect('/photos/all')
    } else {
      await ctx.render('user/register')
    }
  }
}