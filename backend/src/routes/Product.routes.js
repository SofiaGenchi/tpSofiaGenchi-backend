import express from 'express';
import { getProducts } from '../controllers/Product.controller.js';

const router = express.Router();

router.get('/', getProducts);

export default router;