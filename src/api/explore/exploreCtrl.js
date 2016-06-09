import Router from 'koa-router'
import sizeOf from 'image-size'

import exploreModel from './exploreModel'

const router = new Router()

router
  .get('/', ctx =>
    exploreModel.getAllPhotos()
      .then(async (result) => {
        const photoUserLikes = await exploreModel.getPhotoUserLikes()
        const orderedPhotoUserLikes = photoUserLikes.reduce((prev, current) => {
          const index = prev.findIndex(p => p.photo_id === current.photo_id)

          if (index === -1) {
            prev.push({
              photo_id: current.photo_id,
              user_id: [current.user_id],
            })
          } else {
            prev[index].user_id.push(current.user_id)
          }

          return prev
        }, [])

        const photos = result.map(p => {
          const item = orderedPhotoUserLikes.find(o => o.photo_id === p.id)
          const liked = item && ctx.session.user != null &&
            item.user_id.indexOf(ctx.session.user.id) !== -1
          const { width, height } = sizeOf(`./public${p.url}`)

          return Object.assign(p, {
            liked: !!liked,
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

  .post('/like/:photoId', ctx =>
    exploreModel.likePhoto(ctx.params.photoId, ctx.session.user.id)
      .then(result => {
        ctx.body = { success: !!result }
      })
  )

  .delete('/like/:photoId', ctx =>
    exploreModel.dislikePhoto(ctx.params.photoId, ctx.session.user.id)
      .then(result => {
        ctx.body = { success: !!result }
      })
  )

export default router
