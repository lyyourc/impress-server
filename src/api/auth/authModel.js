import connection from '../../config/db'

export default {
  signup (user) {
    return connection
      .queryAsync('INSERT INTO user SET ?', user)
      .then(() => this.login(user))
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
