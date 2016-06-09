import connection from '../../config/db'

export default {
  getAllPhotos () {
    return connection
      .queryAsync('SELECT * FROM photo')
      .then(result => result)
  },
}
