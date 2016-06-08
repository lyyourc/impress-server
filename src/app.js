import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session2'

import router from './router'

const app = new Koa()

// static
app.use(serve('./public'))

// body parser
app.use(bodyParser())

// session
app.use(session({
  key: 'impress',
}))

// router
app.use(router.routes(), router.allowedMethods)

app.listen('3000', () => console.log('Running at 3000'))
