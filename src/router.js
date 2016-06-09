import Router from 'koa-router'

import authCtrl from './api/auth/authCtrl'
import userCtrl from './api/user/userCtrl'
import photoCtrl from './api/photo/photoCtrl'
import exploreCtrl from './api/explore/exploreCtrl'


const apiRouter = new Router({ prefix: '/api' })

apiRouter.use('/auth', authCtrl.routes())
apiRouter.use('/user', userCtrl.routes())
apiRouter.use('/photo', photoCtrl.routes())
apiRouter.use('/explore', exploreCtrl.routes())

export default apiRouter
