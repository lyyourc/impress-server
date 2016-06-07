import connection from '../../config/db'

export default {
  signup (user) {
    return connection
      .queryAsync('INSERT INTO user SET ?', user)
      .then(result => result.affectedRows)
  },

  login ({ username, password }) {
    return connection
      .queryAsync(
        'SELECT * FROM user WHERE username = ? AND password = ?',
        [username, password]
      )
      .then(users => users[0])
      .catch(() => false)
  },
}
