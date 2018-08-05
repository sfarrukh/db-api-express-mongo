import express from 'express';
const authRoutes = express.Router();
import { auth } from './auth';

authRoutes.post('/', auth.verifyMember, auth.signToken);

export { authRoutes }