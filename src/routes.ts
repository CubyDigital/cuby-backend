import express from 'express';

import ServicesController from './controllers/ServicesController';
import ProductsController from './controllers/ProductsController';

const routes = express.Router();

const servicesController = new ServicesController();
const productsController = new ProductsController();

routes.get('/services', servicesController.index);
routes.get('/products', productsController.index);

export default routes;
