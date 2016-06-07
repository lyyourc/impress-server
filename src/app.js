import koa from 'koa'

import router from './router'

const app = koa()

// router
app.use(router.routes(), router.allowedMethods)

app.listen('3000', () => console.log('Running at 3000'))
