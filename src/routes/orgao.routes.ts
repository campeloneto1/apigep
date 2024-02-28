import express from 'express';
import * as OrgaoController from '../controllers/orgao.controller';
import * as AuthMiddlewares from '../middlewares/auth.middleware';
const router = express.Router();

router.get('/', AuthMiddlewares.verifyToken, OrgaoController.index)
router.get('/:id', AuthMiddlewares.verifyToken, OrgaoController.find)
router.post('/', AuthMiddlewares.verifyToken, OrgaoController.create)
router.put('/:id', AuthMiddlewares.verifyToken, OrgaoController.update)
router.delete('/:id', AuthMiddlewares.verifyToken, OrgaoController.destroy)

export default router;