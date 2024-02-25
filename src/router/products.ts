import express from 'express';
import {  addProduct, getAllProducts } from '../controllers/products';
import { isAdmin } from '../middlewares';

export default (router: express.Router) => {
    router.get('/products', getAllProducts);
    router.post('/add-product',addProduct);
};