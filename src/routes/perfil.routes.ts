import express, {Request, Response} from 'express';
import * as PerfilController from '../controllers/perfil.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, PerfilController.index)
router.get('/:id', AuthMiddlewares.verifyToken, PerfilController.find)
router.post('/', AuthMiddlewares.verifyToken, PerfilController.create)
router.put('/:id', AuthMiddlewares.verifyToken, PerfilController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, PerfilController.destroy)

export default router;