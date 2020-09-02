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
   "migrations": [
      process.env.MIGRATIONS
   ],
   "subscribers": [
      process.env.SUBSCRIBER
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}