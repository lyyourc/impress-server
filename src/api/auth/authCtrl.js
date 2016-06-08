import Router from 'koa-router'

import authModel from './authModel'

const router = new Router()

router
  .post('/signup', (ctx) =>
    authModel.signup(ctx.request.body)
      .then(result => {
        ctx.body = {
          success: result > 0,
        }
      })
  )

  .post('/login', (ctx) =>
    authModel.login(ctx.request.body)
      .then(result => {
        ctx.session.user = result

        ctx.body = {
          success: !!result,
          data: result,
          msg: result ? 'login successfully' : 'incorrect username or password',
        }
      })
  )

export default router
