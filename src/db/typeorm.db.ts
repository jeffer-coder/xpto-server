
import { Connection, createConnection } from 'typeorm'

class Database {
    private readonly typeorm: Promise<Connection>

    constructor () {
      this.typeorm = createConnection()
      this.success()
    }

    success () {
      this.typeorm.then(() => console.log('typeorm application'))
    }
}

export const database = new Database()
