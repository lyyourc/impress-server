import Router from 'koa-router'

import userModel from './userModel'

const router = new Router()

router
  .get('/', (ctx) =>
    userModel.getUsers()
      .then(user => {
        ctx.body = user
      })
  )

export default router
