import Router from 'koa-router'

import { photoUpload } from '../../config/upload'

const router = new Router()

router
  .post('/', photoUpload.single('photo'), ctx => {
    ctx.body = { success: true }
  })

export default router
