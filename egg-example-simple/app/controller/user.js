'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async info() {
    const {
      ctx,
    } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = userInfo;
  }
  async create() {
    const {
      ctx,
    } = this;
    ctx.body = '创建用户';
  }
}
module.exports = UserController;
