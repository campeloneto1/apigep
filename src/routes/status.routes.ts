import express from 'express';
import * as StatusController from '../controllers/status.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, StatusController.index)
router.get('/:id', AuthMiddlewares.verifyToken, StatusController.find)
router.post('/', AuthMiddlewares.verifyToken, StatusController.create)
router.put('/:id', AuthMiddlewares.verifyToken, StatusController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, StatusController.destroy)

export default router;