import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/Product.js";

const router = express.Router();

router.get("/", getAllProduct); // call function getAllData from controller
router.get("/:id", getProductById); // call function getDataById from controller
router.patch("/:id", updateProduct); // call funtion updateDataById from controller
router.post("/", createProduct); // call function createData from controller
router.delete("/:id", deleteProduct); // call deleteDataById from controller

export default router;
