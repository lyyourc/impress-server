import Router from 'koa-router'
import sizeOf from 'image-size'

import exploreModel from './exploreModel'

const router = new Router()

router
  .get('/', ctx =>
    exploreModel.getAllPhotos()
      .then(result => {
        const photos = result.map(p => {
          const { width, height } = sizeOf(`./public${p.url}`)
          return Object.assign(p, {
            width,
            height,
            aspectRadio: width / height,
          })
        })

        ctx.body = {
          success: true,
          data: photos,
        }
      })
  )

export default router
