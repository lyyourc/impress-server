import multer from 'koa-multer'

const photoStorage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, './public/img')
  },
  filename (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}.${file.mimetype.replace(/^.+\//ig, '')}`
    )
  },
})

export const photoUpload = multer({ storage: photoStorage })
