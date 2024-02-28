import express from 'express';
import * as ProcessoSubtipoController from '../controllers/processo-subtipo.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, ProcessoSubtipoController.index)
router.get('/:id', AuthMiddlewares.verifyToken, ProcessoSubtipoController.find)
router.post('/', AuthMiddlewares.verifyToken, ProcessoSubtipoController.create)
router.put('/:id', AuthMiddlewares.verifyToken, ProcessoSubtipoController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, ProcessoSubtipoController.destroy)

export default router;