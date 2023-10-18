import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingCtrl } from './booking.controller';
import { BookingValidation } from './booking.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(BookingValidation.create),
  BookingCtrl.insertIntoDB,
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookingCtrl.getAllBooking,
);
router.get('/:id', BookingCtrl.getBooking);

export const BookingRoutes = router;
