import koa from 'koa'

import router from './router'

const app = koa()

app
  .use(router.routes())
  .use(router.allowedMethods())
  
app.listen('3000', () => console.log('Running at 3000'))
