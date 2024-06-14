import { Request, Response } from "express";
import storeModel from "../model/storeModel";

export const getAllProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const product = await storeModel.find();
    return res.status(200).json({
      message: "All product  found",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getOneProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productId } = req.params;
    const product = await storeModel.findById(productId);

    return res.status(200).json({
      message: " product  found",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, price, quantity, description, image, discount } = req.body;

    const category = [
      "cloth",
      "fashion",
      "appliances",
      "electronics",
      "food",
      "games",
    ];

    const numb = Math.floor(Math.random() * category.length - 1);

    const product = await storeModel.create({
      title,
      price,
      quantity,
      splashPrice: price - (price * discount) / 100,
      description,
      image,
      discount,
      category: category.splice(0, numb),
    });

    return res.status(200).json({
      message: "create product",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByPrice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { price } = req.query;
    const product = await storeModel.find({
      price: {
        $lte: price,
      },
    });

    return res.status(200).json({
      message: " product  found",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productName } = req.query;
    const product = await storeModel.find({
      $or: [
        {
          title: {
            $regex: productName,
          },
        },
      ],
    });

    return res.status(200).json({
      message: " product  found",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByPriceName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productName, productPrice } = req.query;
    let numb = parseInt(productPrice?.toString()!);
    console.log(numb);
    const product = await storeModel.find({
      $and: [
        {
          title: {
            $regex: productName,
          },
        },
        {
          splashPrice: {
            $lte: numb,
          },
        },
      ],
    });
    return res.status(200).json({
      message: " product  found",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productCategory } = req.query;

    const product = await storeModel.find({
      $and: [
        {
          category: {
            $regex: productCategory,
          },
        },
      ],
    });
    return res.status(200).json({
      message: " product  found",
      status: 200,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};
