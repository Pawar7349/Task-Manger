import express from 'express';
const router = express.Router();
import authController from '../controllers/authController.js';

router.route('/signin').post(authController.signin);
router.route('/register').post(authController.register);

export default router;
