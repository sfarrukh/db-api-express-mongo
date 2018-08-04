import express from 'express';
const memberRoutes = express.Router();
import { memberController } from './memberController';

memberRoutes.route('/')
    .get(memberController.get)
    .post(memberController.post)

export { memberRoutes };