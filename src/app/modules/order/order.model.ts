import { Schema, model } from "mongoose";
import { IOrder, OrderModel } from "./order.interface";

const orderSchema = new Schema<IOrder, OrderModel>(
  {
    buyer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    seller: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Reserved", "Completed", "Released"],
      required: true,
      default: "Reserved",
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder, OrderModel>("Order", orderSchema);
