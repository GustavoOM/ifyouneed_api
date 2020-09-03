const dotevnt = require('dotenv')

dotevnt.config({
   path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.production'
})

module.exports = {
   "type": "postgres",
   "host": process.env.DBHOST,
   "port": process.env.DBPORT,
   "username": process.env.DBUSERNAME,
   "password": process.env.DBPASSWORD,
   "database": process.env.DBDATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      process.env.ENTITIES
   ],
   "cli": {
      "entitiesDir": process.env.ENTITIESDIR,
   }
}