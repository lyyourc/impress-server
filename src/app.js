import koa from 'koa'
import bodyParser from 'koa-bodyparser'

import router from './router'

const app = koa()

// body parser
app.use(bodyParser())

// router
app.use(router.routes(), router.allowedMethods)

app.listen('3000', () => console.log('Running at 3000'))
