import { connect } from "mongoose";

const url = "mongodb://127.0.0.1:27017/myStoreDB";
export const dbConfig = async () => {
  await connect(url)
    .then(() => {
      console.log("db for e-commerce connected");
    })
    .catch(() => console.error());
};
