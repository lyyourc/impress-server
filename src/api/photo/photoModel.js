import connection from '../../config/db'

export default {
  addPhoto (photo) {
    return connection
      .queryAsync('INSERT INTO photo SET ?', photo)
      .then(result => result.affectedRows)
  },

  getPhotos (userId) {
    return connection
      .queryAsync('SELECT * FROM photo WHERE upload_user_id = ?', userId)
      .then(result => result)
  },
}
