import express from 'express';
import * as ProcessoTipoController from '../controllers/processo-tipo.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, ProcessoTipoController.index)
router.get('/:id', AuthMiddlewares.verifyToken, ProcessoTipoController.find)
router.post('/', AuthMiddlewares.verifyToken, ProcessoTipoController.create)
router.put('/:id', AuthMiddlewares.verifyToken, ProcessoTipoController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, ProcessoTipoController.destroy)

export default router;