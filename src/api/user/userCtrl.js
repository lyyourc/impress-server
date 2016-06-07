import Router from 'koa-router'

import userModel from './userModel'

const router = new Router()

router
  .get('/', function* () {
    const users = yield userModel.getUsers()

    this.body = users
  })

export default router
