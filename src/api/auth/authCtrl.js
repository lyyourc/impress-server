import Router from 'koa-router'

import authModel from './authModel'

const router = new Router()

router
  .post('/signup', function* () {
    const result = yield authModel.signup(this.request.body)

    this.body = {
      success: result > 0,
    }
  })
  .post('/login', function* () {
    const result = yield authModel.login(this.request.body)

    this.body = {
      success: !!result,
      msg: result ? 'login successfully' : 'incorrect username or password',
    }
  })

export default router
