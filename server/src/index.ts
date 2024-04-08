import { Client } from "pg";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

client.connect();

client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: true, // Note: use with caution in production
});
  

// Path: server/src/index.ts
