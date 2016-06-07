import connection from '../../config/db'

export default {
  getUsers () {
    return connection
      .queryAsync('SELECT * FROM user')
      .then(users => users)
  },
}
