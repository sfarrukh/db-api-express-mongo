import express from 'express';
const inventoryRoutes = express.Router();
import { inventoryController } from './inventoryController';

inventoryRoutes.route('/')
    .get(inventoryController.get)
    .post(inventoryController.post)

export { inventoryRoutes };