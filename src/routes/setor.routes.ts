import express from 'express';
import * as SetorController from '../controllers/setor.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, SetorController.index)
router.get('/:id', AuthMiddlewares.verifyToken, SetorController.find)
router.post('/', AuthMiddlewares.verifyToken, SetorController.create)
router.put('/:id', AuthMiddlewares.verifyToken, SetorController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, SetorController.destroy)

export default router;