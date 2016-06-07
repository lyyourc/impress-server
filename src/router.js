import Router from 'koa-router'

import authCtrl from './api/auth/authCtrl'
import userCtrl from './api/user/userCtrl'
import photoCtrl from './api/photo/photoCtrl'


const apiRouter = new Router({ prefix: '/api' })

apiRouter.use('/auth', authCtrl.routes())
apiRouter.use('/user', userCtrl.routes())
apiRouter.use('/photo', photoCtrl.routes())

export default apiRouter
