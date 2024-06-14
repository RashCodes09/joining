import express, { Application } from "express";
import cors from "cors";
import http, { IncomingMessage, ServerResponse, Server } from "http";
import { MainApp } from "./mainApp";
import { dbConfig } from "./utlis/dbConfig";

const port = 2323;
const app: Application = express();
app.use(express.json());
app.use(cors());

MainApp(app);

const sever: Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(
  port,
  () => {
    console.clear();

    dbConfig();
  }
);

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException:", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhnadleRejection", reason);

  sever.close(() => {
    process.exit(1);
  });
});
