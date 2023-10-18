import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryCtrl } from './category.controller';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  CategoryCtrl.insertIntoDB,
);
router.get('/', CategoryCtrl.getAllData);
router.get('/:id', CategoryCtrl.getData);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(CategoryValidation.update),
  CategoryCtrl.updateData,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  CategoryCtrl.deleteData,
);
export const CategoryRoutes = router;
