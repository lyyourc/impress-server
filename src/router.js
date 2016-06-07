import Router from 'koa-router'

import authCtrl from './api/auth/authCtrl'
import userCtrl from './api/user/userCtrl'


const apiRouter = new Router({ prefix: '/api' })

apiRouter.use('/auth', authCtrl.routes())
apiRouter.use('/user', userCtrl.routes())

export default apiRouter
