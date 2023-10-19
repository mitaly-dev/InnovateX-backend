import express from 'express';
import { FeedbackCtrl } from './feedback.controller';

const router = express.Router();

router.post('/', FeedbackCtrl.insertIntoDB);
router.get('/', FeedbackCtrl.getAllData);
export const FeedbackRoutes = router;
