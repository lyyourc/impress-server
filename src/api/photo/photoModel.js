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

  deletePhoto (photoId) {
    return connection
      .queryAsync('DELETE FROM photo WHERE id = ?', photoId)
      .then(result => result.affectedRows)
  },

  updatePhoto ({ name, description, id }) {
    return connection
      .queryAsync(
        'UPDATE photo SET name = ?, description = ? WHERE id = ?',
        [name, description, id]
      )
      .then(result => result.affectedRows)
  },
}
