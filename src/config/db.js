import mysql from 'mysql2'
import Connetion from 'mysql2/lib/connection'
import Pool from 'mysql2/lib/pool'
import Bluebird from 'bluebird'

Bluebird.promisifyAll([
  Connetion,
  Pool,
])

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'impress',
})

connection
  .connectAsync()
  .then(() => console.log('Established connection'))
  .catch(err => console.err(`Connection error ${err}`))

export default connection
