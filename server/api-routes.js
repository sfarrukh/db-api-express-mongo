import express from 'express';
const router = express.Router();
import { controller } from './controller';

router.route('/inventory')
    .get(controller.get)
    .post(controller.post)

export { router };