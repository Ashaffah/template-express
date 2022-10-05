import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/Product.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.patch("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
