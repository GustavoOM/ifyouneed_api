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
      "src/entities/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}