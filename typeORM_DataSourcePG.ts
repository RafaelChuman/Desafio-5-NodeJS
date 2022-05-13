import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "test",
    database: "pji240",
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ["./src/database/entity/**/*.ts"],
    migrations: ["./src/database/migration/*.ts"]
})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })