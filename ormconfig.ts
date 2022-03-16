export = {
  type: "mysql",
  port: 3306,
  host: "localhost",
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [
      "./src/modules/**/entities/*.ts"
  ],
  migrations: ["./src/shared/database/migrations/*ts"],
  cli: {
      migrationsDir: "./src/shared/database/migrations"
  }
}