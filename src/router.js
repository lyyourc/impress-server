import koaRouter from 'koa-router'

const router = koaRouter()

router.get('/', function* (next) {
  this.body = 'Hello koa'
})

export default router