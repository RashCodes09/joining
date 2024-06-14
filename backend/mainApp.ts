import { Application } from "express";
import product from "./router/storeRouter";

export const MainApp = (app: Application) => {
  try {
    app.use("/api", product);
  } catch (error: any) {
    console.log(error);
  }
};
