import express from 'express';
const memberRoutes = express.Router();
import { memberController } from './memberController';
import { auth } from '../../authentication/auth';
const checkMember = auth.decodeToken;

memberRoutes.route('/')
    .get(memberController.get)
    .post(memberController.post)

export { memberRoutes };