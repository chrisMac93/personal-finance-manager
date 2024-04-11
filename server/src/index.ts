import "reflect-metadata";
import { DataSource } from "typeorm";
import { Transaction } from "./entities/Transaction";
import { User } from "./entities/User";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Transaction],
    synchronize: true, // Note: use with caution in production
    logging: false,
});

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized");

  app.post("/transactions", async (req, res) => {
    const transactionRepository = AppDataSource.getRepository(Transaction);
    const transaction = transactionRepository.create(req.body);
    await transactionRepository.save(transaction);
    res.json(transaction);
  });

  app.get("/transactions", async (req, res) => {
    const transactionRepository = AppDataSource.getRepository(Transaction);
    const transactions = await transactionRepository.find();
    res.json(transactions);
  });

  app.listen(3001, () => console.log("Server is running on port 3001"));
}).catch((error) => console.log("Error: ", error));
  

