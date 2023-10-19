import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewAndRatingCtrl } from './reviewAndRating.controller';
import { ReviewAndRatingValidation } from './reviewAndRating.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ReviewAndRatingValidation.create),
  ReviewAndRatingCtrl.insertIntoDB,
);
router.get('/:id', ReviewAndRatingCtrl.getAllData);
router.get('/:id', ReviewAndRatingCtrl.getData);
router.patch(
  '/:id',
  validateRequest(ReviewAndRatingValidation.update),
  ReviewAndRatingCtrl.updateData,
);
router.delete('/:id', ReviewAndRatingCtrl.deleteData);
export const ReviewAndRatingRoutes = router;
