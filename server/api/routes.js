import express from 'express';
const router = express.Router();
import { inventoryRoutes } from './inventory/inventoryRoutes';
import { memberRoutes } from './member/memberRoutes';

router.use('/inventory', inventoryRoutes);
router.use('/member', memberRoutes);

export { router };