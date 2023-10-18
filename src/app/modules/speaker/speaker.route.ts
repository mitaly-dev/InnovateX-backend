import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SpeakerCtrl } from './speaker.controller';
import { SpeakerValidation } from './speaker.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(SpeakerValidation.create),
  SpeakerCtrl.insertIntoDB,
);
router.get('/', SpeakerCtrl.getAllData);
router.get('/:id/:eventId', SpeakerCtrl.getEventSpeaker);
router.get('/:id', SpeakerCtrl.getData);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(SpeakerValidation.update),
  SpeakerCtrl.updateData,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SpeakerCtrl.deleteData,
);
export const SpeakerRoutes = router;
