import express from 'express';
import * as ProcessoController from '../controllers/processo.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, ProcessoController.index)
router.get('/:id', AuthMiddlewares.verifyToken, ProcessoController.find)
router.post('/', AuthMiddlewares.verifyToken, ProcessoController.create)
router.put('/:id', AuthMiddlewares.verifyToken, ProcessoController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, ProcessoController.destroy)

export default router;