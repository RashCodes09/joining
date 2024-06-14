import { Document, Schema, model } from "mongoose";
import { iProps } from "../interface";

interface iPropsData extends iProps, Document {}

const storeModel = new Schema<iPropsData>(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    splashPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    category: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("stores", storeModel);
