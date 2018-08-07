import express from 'express';
const inventoryRoutes = express.Router();
import { inventoryController } from './inventoryController';
import { auth } from '../../authentication/auth';

inventoryRoutes.route('/')
    .get(inventoryController.get)
    .post(auth.decodeToken, inventoryController.post)

export { inventoryRoutes };