import express from 'express';
import * as UserController from '../controllers/user.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, UserController.index)
router.get('/:id', AuthMiddlewares.verifyToken, UserController.find)
router.post('/', AuthMiddlewares.verifyToken, UserController.create)
router.put('/:id', AuthMiddlewares.verifyToken, UserController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, UserController.destroy)

export default router;