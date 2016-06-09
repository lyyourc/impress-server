import connection from '../../config/db'

export default {
  getAllPhotos () {
    const query = `
      SELECT
        photo.id, photo.name, photo.description,
        photo.url, photo.upload_user_id,
        count(user_id) AS likes
      FROM photo
      LEFT JOIN photo_user_likes ON
        photo.id = photo_user_likes.photo_id
      GROUP BY photo.id
    `
    return connection
      .queryAsync(query)
      .then(result => result)
  },

  async getPhotoUserLikes () {
    const result = await connection
      .queryAsync('SELECT * FROM photo_user_likes')

    return result
  },

  likePhoto (photoId, userId) {
    return connection
      .queryAsync(
        'INSERT INTO photo_user_likes SET ?',
        { photo_id: photoId, user_id: userId }
      )
      .then(result => result.affectedRows)
  },

  dislikePhoto (photoId, userId) {
    return connection
      .queryAsync(
        'DELETE FROM photo_user_likes WHERE photo_id = ? AND user_id = ?',
        [photoId, userId]
      )
      .then(result => result.affectedRows)
  },
}
