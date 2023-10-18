import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { EventCtrl } from './event.controller';
import { EventValidation } from './event.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(EventValidation.create),
  EventCtrl.insertIntoDB,
);
router.get('/', EventCtrl.getAllData);
router.get('/:id/:category', EventCtrl.getCategoryEvents);
router.get('/:id', EventCtrl.getData);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(EventValidation.update),
  EventCtrl.updateData,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  EventCtrl.deleteData,
);
export const SpeakerRoutes = router;
