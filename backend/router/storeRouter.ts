import {
  createProduct,
  getAllProduct,
  getOneProduct,
  getProductByName,
  getProductByPrice,
  getProductByPriceName,
  getProductByCategory,
} from "../controller/storeController";
import { Router } from "express";

const router: Router = Router();

router.route("/get-all-products").get(getAllProduct);

router.route("/get-one-product/:productId").get(getOneProduct);

router.route("/create-product").post(createProduct);

router.route("/get-by-price").get(getProductByPrice);

router.route("/get-by-name").get(getProductByName);

router.route("/get-by-nameAndprice").get(getProductByPriceName);

router.route("/get-by-category").get(getProductByCategory);

export default router;
